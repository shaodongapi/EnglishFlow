import { useEffect, useMemo, useState, type ReactNode } from 'react'
import type {
  DayPlan,
  DictationItem,
  Interaction,
  MatchItem,
  Phase,
  ReadingPassage,
  ScrambleItem,
  Word,
} from '../types'
import { MODULE_LABELS } from '../data/syllabus'
import { getMeta, setMeta } from '../core/db'
import { speak } from '../core/tts'
import { Explain, md } from '../components/Explain'
import { QuestionView } from '../components/QuestionView'
import { Vocab } from './Vocab'
import { Spelling } from './Spelling'
import { Writing } from './Writing'
import { ScrambleQ } from './Scramble'
import { DictationQ } from './Dictation'
import { ErrorItem } from './ErrorID'
import { Blank, ClozeContext } from './Cloze'
import { TranslationOne } from './Translation'
import { MatchOne } from './Match'

/** 一道题的渲染上下文:阅读篇章常驻可参考 */
function ReadingContext({ passage }: { passage: ReadingPassage }) {
  return (
    <div
      style={{
        background: 'var(--surface-2)',
        borderRadius: 10,
        padding: 14,
        lineHeight: 1.8,
        marginBottom: 12,
      }}
    >
      <strong>{passage.title}</strong>
      <div style={{ marginTop: 8 }}>{passage.text}</div>
      <div style={{ marginTop: 8 }}>
        <button onClick={() => speak(passage.text, 0.9)}>🔊 朗读全文</button>
      </div>
    </div>
  )
}

interface Step {
  key: Interaction
  label: string
  ico: string
  kind: 'self' | 'paged'
  count: number
  render: (i: number) => ReactNode
}

interface Saved {
  stepIdx: number
  qIdx: number
  seen: Record<string, 'done' | 'skip'>
  finished: boolean
}

interface Props {
  plan: DayPlan
  phase: Phase
  todayDay: number
  newWords: Word[]
  scrambleItems: ScrambleItem[]
  matchItems: MatchItem[]
  dictationItems: DictationItem[]
  planDay: number
  /** 由 Dashboard 指定从某模块开始(点击今日任务某项) */
  initialModule?: Interaction
  onHome: () => void
  onMistakes: () => void
}

/**
 * 一条龙引导式学习:把当日阶段启用且有数据的模块按推荐顺序串成 Step[],
 * 一题一屏推进。顶部模块进度条 + 题号条可随时跳转;底部 上一题/跳过/下一题。
 * 支持按学习日断点续学(meta 持久化)。
 */
export function StudyFlow({
  plan,
  phase,
  todayDay,
  newWords,
  scrambleItems,
  matchItems,
  dictationItems,
  planDay,
  initialModule,
  onHome,
  onMistakes,
}: Props) {
  // 由 phase.modules 构建(过滤掉无数据的模块)
  const steps: Step[] = useMemo(() => {
    const out: Step[] = []
    const push = (
      m: Interaction,
      kind: 'self' | 'paged',
      count: number,
      render: (i: number) => ReactNode
    ) => {
      if (count <= 0) return
      const meta = MODULE_LABELS[m]
      out.push({ key: m, label: meta.label, ico: meta.ico, kind, count, render })
    }
    for (const m of phase.modules) {
      switch (m) {
        case 'vocab':
          push(m, 'self', newWords.length || 1, () => (
            <Vocab todayDay={todayDay} newWords={newWords} />
          ))
          break
        case 'spelling':
          push(m, 'self', newWords.length || 1, () => (
            <Spelling todayDay={todayDay} newWords={newWords} day={planDay} />
          ))
          break
        case 'writing':
          push(m, 'self', 1, () => <Writing task={plan.writing} />)
          break
        case 'grammar':
          push(
            m,
            'paged',
            plan.grammar.questions.length,
            (i) => (
              <>
                <div className="meta">语法 · {plan.grammar.title}</div>
                <Explain title="知识点速记">{md(plan.grammar.body)}</Explain>
                <QuestionView q={plan.grammar.questions[i]} index={i} source="grammar" day={planDay} />
              </>
            )
          )
          break
        case 'reading':
          push(
            m,
            'paged',
            plan.reading.questions.length,
            (i) => (
              <>
                <ReadingContext passage={plan.reading} />
                <QuestionView q={plan.reading.questions[i]} index={i} source="reading" day={planDay} />
              </>
            )
          )
          break
        case 'match':
          push(m, 'paged', matchItems.length, (i) => (
            <MatchOne item={matchItems[i]} index={i} day={planDay} />
          ))
          break
        case 'scramble':
          push(m, 'paged', scrambleItems.length, (i) => (
            <ScrambleQ item={scrambleItems[i]} index={i} day={planDay} />
          ))
          break
        case 'dictation':
          push(m, 'paged', dictationItems.length, (i) => (
            <DictationQ item={dictationItems[i]} index={i} day={planDay} />
          ))
          break
        case 'errorid': {
          const items = plan.errorId
          if (items)
            push(m, 'paged', items.length, (i) => (
              <ErrorItem item={items[i]} index={i} day={planDay} />
            ))
          break
        }
        case 'cloze': {
          const cloze = plan.cloze
          if (cloze)
            push(
              m,
              'paged',
              cloze.blanks.length,
              (i) => (
                <>
                  <ClozeContext passage={cloze} />
                  <Blank blank={cloze.blanks[i]} day={planDay} />
                </>
              )
            )
          break
        }
        case 'translation':
          push(m, 'paged', plan.translation.length, (i) => (
            <TranslationOne item={plan.translation[i]} index={i} />
          ))
          break
      }
    }
    return out
  }, [phase, plan, newWords, scrambleItems, matchItems, dictationItems, planDay, todayDay])

  const posKey = `study_pos_${planDay}`

  const [stepIdx, setStepIdx] = useState(0)
  const [qIdx, setQIdx] = useState(0)
  const [seen, setSeen] = useState<Record<string, 'done' | 'skip'>>({})
  const [finished, setFinished] = useState(false)
  const [restored, setRestored] = useState(false)

  // 挂载 / 换天:恢复断点;若 Dashboard 指定了 initialModule 则跳到该模块
  useEffect(() => {
    let alive = true
    getMeta<Saved>(posKey).then((saved) => {
      if (!alive || steps.length === 0) return
      if (saved && !initialModule) {
        setStepIdx(Math.min(saved.stepIdx ?? 0, steps.length - 1))
        setQIdx(saved.qIdx ?? 0)
        setSeen(saved.seen ?? {})
        setFinished(!!saved.finished)
      } else if (initialModule) {
        const idx = steps.findIndex((s) => s.key === initialModule)
        setStepIdx(idx >= 0 ? idx : 0)
        setQIdx(0)
      }
      setRestored(true)
    })
    return () => {
      alive = false
    }
    // 仅在换天时重跑(initialModule 的中途跳转由下方独立 effect 处理)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [planDay])

  // Dashboard 中途切换初始模块(已在学习页时点首页某模块)
  useEffect(() => {
    if (!restored || !initialModule) return
    const idx = steps.findIndex((s) => s.key === initialModule)
    if (idx >= 0) {
      setStepIdx(idx)
      setQIdx(0)
      window.scrollTo({ top: 0 })
    }
  }, [initialModule])

  // 持久化进度
  useEffect(() => {
    if (!restored) return
    setMeta<Saved>(posKey, { stepIdx, qIdx, seen, finished }).catch(() => {})
  }, [restored, stepIdx, qIdx, seen, finished, posKey])

  const totalScreens = steps.reduce((s, st) => s + st.count, 0)
  const doneCount = Object.values(seen).filter((v) => v === 'done').length
  const skipCount = Object.values(seen).filter((v) => v === 'skip').length

  if (!restored) {
    return <div className="empty">加载中...</div>
  }
  if (steps.length === 0) {
    return <div className="empty">今日暂无学习内容。</div>
  }

  if (finished) {
    return (
      <div className="card center">
        <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
        <h2>今日学习完成!</h2>
        <p className="muted">
          完成 {doneCount} / {totalScreens} · 跳过 {skipCount}
        </p>
        <div className="row" style={{ justifyContent: 'center', marginTop: 16 }}>
          <button onClick={onHome}>回首页</button>
          <button className="primary" onClick={onMistakes}>
            看错题
          </button>
          <button
            onClick={() => {
              setStepIdx(0)
              setQIdx(0)
              setSeen({})
              setFinished(false)
            }}
          >
            再来一遍
          </button>
        </div>
      </div>
    )
  }

  const step = steps[stepIdx]
  const isLastScreen =
    stepIdx === steps.length - 1 && (step.kind !== 'paged' || qIdx === step.count - 1)
  const atStart = stepIdx === 0 && qIdx === 0

  function markSeen(how: 'done' | 'skip') {
    setSeen((s) => ({ ...s, [`${stepIdx}:${qIdx}`]: how }))
  }

  function scrollTop() {
    window.scrollTo({ top: 0 })
  }

  function goNext(mark: 'done' | 'skip') {
    markSeen(mark)
    if (step.kind === 'paged' && qIdx < step.count - 1) {
      setQIdx((i) => i + 1)
    } else if (stepIdx < steps.length - 1) {
      setStepIdx((i) => i + 1)
      setQIdx(0)
    } else {
      setFinished(true)
    }
    scrollTop()
  }

  function goPrev() {
    if (qIdx > 0) {
      setQIdx((i) => i - 1)
    } else if (stepIdx > 0) {
      const prev = steps[stepIdx - 1]
      setStepIdx((i) => i - 1)
      setQIdx(prev.kind === 'paged' ? prev.count - 1 : 0)
    }
    scrollTop()
  }

  function jumpStep(i: number) {
    setStepIdx(i)
    setQIdx(0)
    scrollTop()
  }

  return (
    <>
      <div className="study-top">
        <div className="stepper">
          {steps.map((s, i) => {
            const cls = ['chip']
            if (i === stepIdx) cls.push('active')
            else if (i < stepIdx) cls.push('done')
            return (
              <button key={s.key} className={cls.join(' ')} onClick={() => jumpStep(i)}>
                <span className="ico">{s.ico}</span>
                <span className="chip-label">{s.label}</span>
                {s.kind === 'paged' && <span className="chip-count">{s.count}</span>}
                {i < stepIdx && <span className="chip-check">✓</span>}
              </button>
            )
          })}
        </div>

        {step.kind === 'paged' && step.count > 1 && (
          <div className="qstrip">
            {Array.from({ length: step.count }, (_, i) => {
              const cls = ['qdot']
              if (i === qIdx) cls.push('active')
              else if (seen[`${stepIdx}:${i}`]) cls.push('seen')
              return (
                <button key={i} className={cls.join(' ')} onClick={() => { setQIdx(i); scrollTop() }}>
                  {i + 1}
                </button>
              )
            })}
          </div>
        )}
      </div>

      <div className="muted" style={{ fontSize: 12, padding: '4px 2px' }}>
        第 {stepIdx + 1}/{steps.length} 类 ·{' '}
        {step.kind === 'paged' ? `第 ${qIdx + 1}/${step.count} 题` : '自管模块'}
      </div>

      {/* key 随题目变化 → 重置该题内部 state(可重做) */}
      <div className="card" key={`${stepIdx}-${qIdx}`}>
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <h2 style={{ margin: 0 }}>
            {step.ico} {step.label}
          </h2>
          {step.kind === 'paged' && <span className="badge">{qIdx + 1}/{step.count}</span>}
        </div>
        <div style={{ marginTop: 12 }}>{step.kind === 'paged' ? step.render(qIdx) : step.render(0)}</div>
      </div>

      <div className="actionbar">
        <button onClick={goPrev} disabled={atStart}>
          ⏮ 上一题
        </button>
        <button onClick={() => goNext('skip')}>⏭ 跳过</button>
        <button className="primary" onClick={() => goNext('done')}>
          {isLastScreen ? '完成 ✓' : '下一题 ▶'}
        </button>
      </div>
    </>
  )
}
