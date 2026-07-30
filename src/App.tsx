import { useEffect, useMemo, useState } from 'react'
import { useTodayDay } from './core/useToday'
import { getMeta, setMeta } from './core/db'
import { ensureBank, getBank, getMap } from './core/wordBank'
import { useSWReady } from './core/useSWReady'
import { getDay, hydrateVocab, hydrateExam, TOTAL_DAYS } from './data/plan'
import { GRAMMAR_EXTRA } from './data/grammar-extra'
import { phaseOfDay, MODULE_LABELS } from './data/syllabus'
import { deriveScramble, deriveMatch, deriveDictation } from './core/derive'
import type { DictationItem, Interaction, MatchItem, ScrambleItem, Word } from './types'
import { Dashboard } from './modules/Dashboard'
import { Vocab } from './modules/Vocab'
import { Grammar } from './modules/Grammar'
import { Reading } from './modules/Reading'
import { Translation } from './modules/Translation'
import { Writing } from './modules/Writing'
import { Phrases } from './modules/Phrases'
import { ErrorID } from './modules/ErrorID'
import { Cloze } from './modules/Cloze'
import { Scramble } from './modules/Scramble'
import { Match } from './modules/Match'
import { Dictation } from './modules/Dictation'
import { Spelling } from './modules/Spelling'
import { MistakeBook } from './modules/MistakeBook'

const STREAK_KEY = 'streak'
const LAST_ACTIVE_DAY_KEY = 'last_active_day'

// 交互 → 对应 tab key(同名即可,但显式映射更清晰)
const INTERACTION_TAB: Record<Interaction, string> = {
  vocab: 'vocab',
  spelling: 'spelling',
  grammar: 'grammar',
  reading: 'reading',
  scramble: 'scramble',
  match: 'match',
  dictation: 'dictation',
  errorid: 'errorid',
  cloze: 'cloze',
  translation: 'translation',
  writing: 'writing',
}

export default function App() {
  const [todayDay, ready] = useTodayDay()
  const [tab, setTab] = useState<string>('home')
  const [streak, setStreak] = useState(0)
  const [bankReady, setBankReady] = useState(false)
  const swReady = useSWReady()
  const [hideReadyTip, setHideReadyTip] = useState(false)

  // 打卡逻辑
  useEffect(() => {
    if (!ready) return
    ;(async () => {
      const last = await getMeta<number>(LAST_ACTIVE_DAY_KEY)
      let s = (await getMeta<number>(STREAK_KEY)) || 0
      if (last !== todayDay) {
        s = last === todayDay - 1 ? s + 1 : 1
        await setMeta(STREAK_KEY, s)
        await setMeta(LAST_ACTIVE_DAY_KEY, todayDay)
      }
      setStreak(s)
    })()
  }, [ready, todayDay])

  // 词库 + 考试内容(阅读/挑错/完形)并行懒加载,完成后填 vocab、放开渲染。
  useEffect(() => {
    let alive = true
    Promise.all([ensureBank(), hydrateExam()]).then(() => {
      hydrateVocab()
      if (alive) setBankReady(true)
    })
    return () => {
      alive = false
    }
  }, [])

  // 按使用天数推进学习日(1 ~ TOTAL_DAYS)
  const planDay = Math.min(todayDay + 1, TOTAL_DAYS)
  const plan = getDay(planDay)
  const phase = phaseOfDay(planDay)
  const wordMap = getMap()
  const bank = getBank()
  const newWords: Word[] = plan ? (plan.vocab.map((w) => wordMap[w]).filter(Boolean) as Word[]) : []

  // 派生交互数据(手写优先,派生补齐)。
  // 注意:所有 hook 必须在任何早返回之前调用(Rules of Hooks),故在此处 useMemo。
  const scrambleItems: ScrambleItem[] = useMemo(
    () => (plan ? [...(plan.scramble ?? []), ...deriveScramble(plan)] : []),
    [plan]
  )
  const matchItems: MatchItem[] = useMemo(
    () => (plan ? [...(plan.match ?? []), ...deriveMatch(plan, wordMap, bank)] : []),
    [plan, wordMap, bank]
  )
  const dictationItems: DictationItem[] = useMemo(
    () => (plan ? [...(plan.dictation ?? []), ...deriveDictation(plan)] : []),
    [plan]
  )

  if (!ready || !bankReady || !plan) {
    return <div className="empty">加载中...</div>
  }

  // 动态 Tab 栏:首页 + 当前阶段启用模块(取前 4)+ 错题本(常驻末位),共 6 格
  const tabs: { key: string; label: string; ico: string }[] = [
    { key: 'home', label: '首页', ico: '🏠' },
    ...phase.modules.slice(0, 4).map((m) => ({
      key: INTERACTION_TAB[m],
      label: MODULE_LABELS[m].label,
      ico: MODULE_LABELS[m].ico,
    })),
    { key: 'mistakes', label: '错题', ico: '📒' },
  ]

  return (
    <div className="app">
      <div className="header">
        <div className="brand">
          <div className="logo">E</div>
          <div>
            <h1>EnglishFlow</h1>
            <div className="sub">学位英语 · 离线学习</div>
          </div>
        </div>
        <span className={`badge ${swReady ? 'done' : ''}`}>
          {swReady ? '✅ 可离线' : '⏳ 缓存中'}
        </span>
      </div>

      {swReady && !hideReadyTip && (
        <div
          className="card"
          style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px' }}
        >
          <span style={{ flex: 1, fontSize: 13 }}>
            ✅ 已缓存,现在可以断网离线使用了(关 WiFi/飞行模式后重新打开仍可用)。
          </span>
          <button onClick={() => setHideReadyTip(true)} style={{ padding: '4px 10px' }}>
            知道了
          </button>
        </div>
      )}

      {tab === 'home' && (
        <Dashboard
          plan={plan}
          dayIndex={todayDay}
          streak={streak}
          phase={phase}
          scrambleCount={scrambleItems.length}
          matchCount={matchItems.length}
          dictationCount={dictationItems.length}
          onJump={setTab}
        />
      )}
      {tab === 'vocab' && <Vocab todayDay={todayDay} newWords={newWords} />}
      {tab === 'spelling' && <Spelling todayDay={todayDay} newWords={newWords} day={planDay} />}
      {tab === 'grammar' && <Grammar lesson={plan.grammar} day={planDay} />}
      {tab === 'reading' && <Reading passage={plan.reading} day={planDay} />}
      {tab === 'errorid' &&
        (plan.errorId ? <ErrorID items={plan.errorId} day={planDay} /> : <div className="empty">本日无挑错题</div>)}
      {tab === 'translation' && <Translation items={plan.translation} />}
      {tab === 'cloze' &&
        (plan.cloze ? <Cloze passage={plan.cloze} day={planDay} /> : <div className="empty">本日无完形</div>)}
      {tab === 'writing' && <Writing task={plan.writing} />}
      {tab === 'scramble' &&
        (scrambleItems.length ? (
          <Scramble items={scrambleItems} day={planDay} />
        ) : (
          <div className="empty">本日无拼装题</div>
        ))}
      {tab === 'match' &&
        (matchItems.length ? <Match items={matchItems} day={planDay} /> : <div className="empty">本日无选词题</div>)}
      {tab === 'dictation' &&
        (dictationItems.length ? (
          <Dictation items={dictationItems} day={planDay} />
        ) : (
          <div className="empty">本日无听写题</div>
        ))}
      {tab === 'mistakes' && <MistakeBook />}
      {tab === 'phrases' && <Phrases />}
      {tab === 'grammar-extra' && (
        <>
          {GRAMMAR_EXTRA.map((l) => (
            <Grammar key={l.title} lesson={l} />
          ))}
        </>
      )}

      <nav className="tabs" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
        {tabs.map((t) => (
          <button
            key={t.key}
            className={`tab ${tab === t.key ? 'active' : ''}`}
            onClick={() => setTab(t.key)}
          >
            <span className="ico">{t.ico}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
