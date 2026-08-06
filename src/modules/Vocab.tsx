import { useEffect, useState } from 'react'
import type { Word, WordProgress } from '../types'
import { getBank } from '../core/wordBank'
import { getAllProgress, putProgress } from '../core/db'
import { isDue, newProgress, review } from '../core/srs'
import { speak } from '../core/tts'

interface Props {
  todayDay: number
  /** 今日计划的新词 */
  newWords: Word[]
  onProgress?: (done: number, total: number) => void
}

export function Vocab({ todayDay, newWords, onProgress }: Props) {
  const [progressMap, setProgressMap] = useState<Record<string, WordProgress>>({})
  const [queue, setQueue] = useState<Word[]>([])
  const [idx, setIdx] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [totalDone, setTotalDone] = useState(0)

  // 队列仅在「数据源」变化时重建一次:todayDay / newWords。
  // newWords 由 App memoize 保证引用稳定,故 SW 激活/打卡等异步重渲染不会触发本 effect,
  // 也就不会把用户正在翻的卡 idx 重置为 0。
  useEffect(() => {
    let alive = true
    getAllProgress().then((all) => {
      if (!alive) return
      const map: Record<string, WordProgress> = {}
      all.forEach((p) => (map[p.word] = p))
      setProgressMap(map)
      const newSet = new Set(newWords.map((w) => w.word))
      const dueReview = getBank().filter(
        (w) => map[w.word] && isDue(map[w.word], todayDay) && !newSet.has(w.word)
      )
      const freshNew = newWords.filter((w) => !map[w.word])
      setQueue([...freshNew, ...dueReview])
      setIdx(0)
      setFlipped(false)
    })
    return () => {
      alive = false
    }
  }, [todayDay, newWords])

  const current = queue[idx]
  const total = queue.length

  useEffect(() => {
    onProgress?.(totalDone, Math.max(totalDone + (total - idx), total))
  }, [totalDone, idx, total, onProgress])

  async function rate(grade: 0 | 1 | 2) {
    if (!current) return
    const prev = progressMap[current.word] || newProgress(current.word, todayDay)
    const updated = review(prev, grade, todayDay)
    await putProgress(updated)
    setProgressMap((m) => ({ ...m, [current.word]: updated }))
    setTotalDone((d) => d + 1)
    setFlipped(false)
    setIdx((i) => i + 1)
  }

  if (!current) {
    return (
      <div className="card center">
        <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
        <h2>今天的单词都搞定啦</h2>
        <p className="muted">新词 {newWords.length} + 复习 {total - newWords.length},继续保持!</p>
        <p className="muted" style={{ marginTop: 12 }}>
          明天系统会按记忆曲线安排到期复习。
        </p>
      </div>
    )
  }

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h2>单词</h2>
        <span className="badge">{idx + 1} / {total}</span>
      </div>
      <div className="meta">
        {progressMap[current.word] ? '复习' : '新词'} · 共 {total} 个待学
      </div>

      <div className="progress">
        <div style={{ width: `${(idx / total) * 100}%` }} />
      </div>

      <div className={`flip-card ${flipped ? 'flipped' : ''}`} onClick={() => setFlipped((f) => !f)}>
        <div className="flip-inner">
          <div className="flip-face">
            <div className="word-big">{current.word}</div>
            <div className="phonetic">{current.phonetic}</div>
            <div className="muted" style={{ marginTop: 14 }}>
              点击卡片翻面 · {flipped ? '看正面' : '看释义'}
            </div>
            <button
              className="primary"
              style={{ marginTop: 16 }}
              onClick={(e) => {
                e.stopPropagation()
                speak(current.word)
              }}
            >
              🔊 朗读
            </button>
          </div>
          <div className="flip-face flip-back">
            <div className="pos">{current.pos}</div>
            <div className="meaning">{current.meaning}</div>
            <div className="example">
              {current.example}
              <br />
              <span style={{ color: 'var(--text-dim)' }}>{current.exampleTrans}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="rate-row">
        <button className="rate-btn again" onClick={() => rate(0)}>
          不认识
          <br />
          <span style={{ fontSize: 11 }}>今天再来</span>
        </button>
        <button className="rate-btn hard" onClick={() => rate(1)}>
          模糊
          <br />
          <span style={{ fontSize: 11 }}>明天</span>
        </button>
        <button className="rate-btn easy" onClick={() => rate(2)}>
          认识
          <br />
          <span style={{ fontSize: 11 }}>后天+</span>
        </button>
      </div>
    </div>
  )
}
