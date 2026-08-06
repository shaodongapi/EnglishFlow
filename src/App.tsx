import { useEffect, useMemo, useState } from 'react'
import { useTodayDay } from './core/useToday'
import { getMeta, setMeta } from './core/db'
import { ensureBank, getBank, getMap } from './core/wordBank'
import { useSWReady } from './core/useSWReady'
import { getDay, hydrateVocab, hydrateExam, TOTAL_DAYS } from './data/plan'
import { GRAMMAR_EXTRA } from './data/grammar-extra'
import { phaseOfDay } from './data/syllabus'
import { deriveScramble, deriveMatch, deriveDictation } from './core/derive'
import type { DictationItem, Interaction, MatchItem, ScrambleItem, Word } from './types'
import { Dashboard } from './modules/Dashboard'
import { StudyFlow } from './modules/StudyFlow'
import { Grammar } from './modules/Grammar'
import { Phrases } from './modules/Phrases'
import { MistakeBook } from './modules/MistakeBook'

const STREAK_KEY = 'streak'
const LAST_ACTIVE_DAY_KEY = 'last_active_day'

export default function App() {
  const [todayDay, ready] = useTodayDay()
  const [tab, setTab] = useState<string>('home')
  const [streak, setStreak] = useState(0)
  const [bankReady, setBankReady] = useState(false)
  const swReady = useSWReady()
  const [hideReadyTip, setHideReadyTip] = useState(false)
  // 由 Dashboard「今日任务」指定从某模块开始进入一条龙
  const [studyStart, setStudyStart] = useState<Interaction | undefined>(undefined)

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

  // 词库 + 考试内容并行懒加载,完成后填 vocab、放开渲染。
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

  // 关键:必须 memoize。plan / wordMap 在 bankReady 后引用稳定,
  // 故 newWords 引用也稳定 —— 避免 App 因 SW 激活/打卡等异步重渲染时,
  // 把新的数组引用传给 Vocab/Spelling 触发它们重建队列并把 idx 重置为 0(偶现「回第一张卡」)。
  const newWords: Word[] = useMemo(
    () => (plan ? (plan.vocab.map((w) => wordMap[w]).filter(Boolean) as Word[]) : []),
    [plan, wordMap]
  )

  // 派生交互数据(手写优先,派生补齐)。
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

  // 统一跳转:进学习页时可指定起始模块
  const jump = (t: string, moduleKey?: Interaction) => {
    if (t === 'study') setStudyStart(moduleKey)
    setTab(t)
  }

  // 底部固定 3 个大 Tab(首页 / 学习 / 错题),文字不再被截断
  const tabs: { key: string; label: string; ico: string }[] = [
    { key: 'home', label: '首页', ico: '🏠' },
    { key: 'study', label: '学习', ico: '📚' },
    { key: 'mistakes', label: '错题', ico: '📒' },
  ]

  // phrases / grammar-extra 为非 Tab 的全屏视图,带返回按钮、隐藏底部 Tab 栏
  const isOverlay = tab === 'phrases' || tab === 'grammar-extra'

  return (
    <div className={`app ${tab === 'study' ? 'app-study' : ''}`}>
      <div className="header">
        <div className="brand">
          <div className="logo">E</div>
          <div>
            <h1>EnglishFlow</h1>
            <div className="sub">学位英语 · 离线学习</div>
          </div>
        </div>
        {isOverlay ? (
          <button onClick={() => setTab('home')}>‹ 返回</button>
        ) : (
          <span className={`badge ${swReady ? 'done' : ''}`}>
            {swReady ? '✅ 可离线' : '⏳ 缓存中'}
          </span>
        )}
      </div>

      {tab === 'home' && swReady && !hideReadyTip && (
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
          onJump={jump}
        />
      )}

      {tab === 'study' && (
        <StudyFlow
          plan={plan}
          phase={phase}
          todayDay={todayDay}
          newWords={newWords}
          scrambleItems={scrambleItems}
          matchItems={matchItems}
          dictationItems={dictationItems}
          planDay={planDay}
          initialModule={studyStart}
          onHome={() => setTab('home')}
          onMistakes={() => setTab('mistakes')}
        />
      )}

      {tab === 'mistakes' && <MistakeBook />}

      {tab === 'phrases' && <Phrases />}
      {tab === 'grammar-extra' && (
        <>
          {GRAMMAR_EXTRA.map((l) => (
            <Grammar key={l.title} lesson={l} />
          ))}
        </>
      )}

      {!isOverlay && (
        <nav className="tabs" style={{ gridTemplateColumns: `repeat(${tabs.length}, 1fr)` }}>
          {tabs.map((t) => (
            <button
              key={t.key}
              className={`tab ${tab === t.key ? 'active' : ''}`}
              onClick={() => jump(t.key)}
            >
              <span className="ico">{t.ico}</span>
              <span>{t.label}</span>
            </button>
          ))}
        </nav>
      )}
    </div>
  )
}
