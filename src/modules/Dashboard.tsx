import { useEffect, useState } from 'react'
import type { DayPlan, Interaction, Phase } from '../types'
import { getMap } from '../core/wordBank'
import { PHRASES } from '../data/phrases'
import { SYLLABUS, MODULE_LABELS, phaseProgress, syllabusProgress } from '../data/syllabus'
import { listMistakes, summarize } from '../core/mistakes'

interface Props {
  plan: DayPlan
  dayIndex: number
  streak: number
  phase: Phase
  scrambleCount: number
  matchCount: number
  dictationCount: number
  onJump: (tab: string, moduleKey?: Interaction) => void
}

export function Dashboard({
  plan,
  dayIndex,
  streak,
  phase,
  scrambleCount,
  matchCount,
  dictationCount,
  onJump,
}: Props) {
  const wordMap = getMap()
  const todayNewVocab = plan.vocab.map((w) => wordMap[w]).filter(Boolean)
  const stars = '⭐'.repeat(phase.level)

  // 错题本计数(挂载时拉一次)
  const [mistakeCount, setMistakeCount] = useState(0)
  useEffect(() => {
    listMistakes().then((all) => setMistakeCount(summarize(all).total))
  }, [])

  // 每个模块的任务量(有数据才显示)
  const countOf: Record<string, number | undefined> = {
    vocab: todayNewVocab.length,
    spelling: todayNewVocab.length,
    grammar: plan.grammar.questions.length,
    reading: plan.reading.questions.length,
    scramble: scrambleCount,
    match: matchCount,
    dictation: dictationCount,
    errorid: plan.errorId?.length,
    cloze: plan.cloze?.blanks.length,
    translation: plan.translation.length,
    writing: undefined,
  }

  const phasePct = Math.round(phaseProgress(plan.day) * 100)
  const overallPct = Math.round(syllabusProgress(plan.day) * 100)

  return (
    <>
      {/* 一条龙入口 */}
      <button
        className="primary cta-study"
        onClick={() => onJump('study')}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          padding: '16px 18px',
          fontSize: 17,
          marginBottom: 14,
        }}
      >
        <span style={{ fontSize: 24 }}>🚀</span>
        <div style={{ flex: 1, textAlign: 'left' }}>
          <div style={{ fontWeight: 700 }}>开始今日学习</div>
          <div style={{ fontSize: 12, opacity: 0.85 }}>
            一条龙串起今日全部模块 · 可随时跳转、跳过
          </div>
        </div>
        <span style={{ fontSize: 22 }}>›</span>
      </button>

      {/* 当前阶段卡 */}
      <div className="card">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="muted">
              Day {plan.day} · 第 {dayIndex + 1} 天 · {plan.phaseId?.toUpperCase()}
            </div>
            <h2 style={{ margin: '4px 0 0' }}>{plan.title}</h2>
            <div className="muted" style={{ marginTop: 4, fontSize: 13 }}>
              {stars} · {phase.name}
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 28 }}>🔥</div>
            <div className="muted">{streak} 天</div>
          </div>
        </div>
        <div className="muted" style={{ marginTop: 10, fontSize: 13 }}>阶段目标:{phase.goal}</div>
        {/* 阶段内进度 */}
        <div className="progress" style={{ marginTop: 10 }}>
          <div style={{ width: `${phasePct}%` }} />
        </div>
        <div className="muted" style={{ fontSize: 12, marginTop: 4 }}>
          阶段进度 {phasePct}% · 大纲总进度 {overallPct}%
        </div>
      </div>

      {/* 大纲路线 */}
      <div className="card">
        <h2>大纲路线</h2>
        <div className="meta">从易到难 · 6 阶段 · 共 {SYLLABUS.reduce((s, p) => s + (p.dayEnd - p.dayStart + 1), 0)} 天</div>
        <div className="ramp" style={{ marginTop: 10 }}>
          {SYLLABUS.map((p) => {
            const state =
              plan.day > p.dayEnd ? 'done' : plan.day >= p.dayStart && plan.day <= p.dayEnd ? 'active' : 'future'
            return (
              <div key={p.id} className={`ramp-item ${state}`}>
                <div className="ramp-dot">{state === 'done' ? '✓' : state === 'active' ? '▶' : p.level}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>
                    {p.name} <span className="muted" style={{ fontWeight: 400, fontSize: 12 }}>Day {p.dayStart}–{p.dayEnd}</span>
                  </div>
                  <div className="muted" style={{ fontSize: 12 }}>{p.goal}</div>
                </div>
                <div className="muted" style={{ fontSize: 11 }}>{'⭐'.repeat(p.level)}</div>
              </div>
            )
          })}
        </div>
      </div>

      {/* 今日任务:仅列当前阶段启用且有数据的模块 */}
      <div className="card">
        <h2>今日任务</h2>
        <div className="meta">按推荐顺序 · 当前阶段启用</div>
        {phase.modules.map((m) => {
          const count = countOf[m]
          const hasData = m === 'writing' || (count !== undefined && count > 0)
          const meta = MODULE_LABELS[m]
          const countText =
            count !== undefined && count > 0
              ? m === 'cloze'
                ? `${count} 空`
                : m === 'vocab' || m === 'spelling'
                ? `${count} 词`
                : `${count} 题`
              : '选做'
          return (
            <button
              key={m}
              onClick={() => onJump('study', m)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                width: '100%',
                background: 'var(--surface-2)',
                padding: '12px 14px',
                marginBottom: 8,
                textAlign: 'left',
                opacity: hasData ? 1 : 0.55,
              }}
            >
              <span style={{ fontSize: 22 }}>{meta.ico}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>
                  {meta.label} <span className="muted" style={{ fontWeight: 400 }}>· {countText}</span>
                </div>
                <div className="muted" style={{ fontSize: 12 }}>
                  {hasData ? descOf(m) : '本日暂无内容(选做)'}
                </div>
              </div>
              <span className="muted">›</span>
            </button>
          )
        })}
      </div>

      {/* 选做 / 拓展 */}
      <div className="card">
        <h2>更多</h2>
        <div className="meta">选做 / 拓展</div>
        <button
          onClick={() => onJump('mistakes')}
          style={{
            display: 'flex', alignItems: 'center', gap: 12, width: '100%',
            background: 'var(--surface-2)', padding: '12px 14px', marginBottom: 8, textAlign: 'left',
          }}
        >
          <span style={{ fontSize: 22 }}>📒</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>
              错题本{' '}
              {mistakeCount > 0 && (
                <span className="muted" style={{ fontWeight: 400 }}>· {mistakeCount} 条未掌握</span>
              )}
            </div>
            <div className="muted" style={{ fontSize: 12 }}>错题 + 没记住的单词 · 按类型/来源分类</div>
          </div>
          <span className="muted">›</span>
        </button>
        <button
          onClick={() => onJump('grammar-extra')}
          style={{
            display: 'flex', alignItems: 'center', gap: 12, width: '100%',
            background: 'var(--surface-2)', padding: '12px 14px', marginBottom: 8, textAlign: 'left',
          }}
        >
          <span style={{ fontSize: 22 }}>🧠</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>语法补遗</div>
            <div className="muted" style={{ fontSize: 12 }}>情态动词 / 反意疑问 / 强调句 / there be / 冠词</div>
          </div>
          <span className="muted">›</span>
        </button>
        <button
          onClick={() => onJump('phrases')}
          style={{
            display: 'flex', alignItems: 'center', gap: 12, width: '100%',
            background: 'var(--surface-2)', padding: '12px 14px', textAlign: 'left',
          }}
        >
          <span style={{ fontSize: 22 }}>🔗</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 600 }}>大纲短语库</div>
            <div className="muted" style={{ fontSize: 12 }}>官方大纲全部短语 · 共 {PHRASES.length} 条 · 可搜索朗读</div>
          </div>
          <span className="muted">›</span>
        </button>
      </div>
    </>
  )
}

function descOf(m: string): string {
  switch (m) {
    case 'vocab': return '新词 + 间隔复习'
    case 'spelling': return '看释义拼写英文'
    case 'grammar': return '知识点 + 练习'
    case 'reading': return '阅读理解'
    case 'scramble': return '拼回正确语序'
    case 'match': return '释义选英文词'
    case 'dictation': return '听句子填空'
    case 'errorid': return '挑出错误段(真题)'
    case 'cloze': return '完形填空(真题)'
    case 'translation': return '英译汉'
    case 'writing': return '写作 · AI 评分/范文'
    default: return ''
  }
}
