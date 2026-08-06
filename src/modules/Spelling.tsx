import { useEffect, useMemo, useState } from 'react'
import type { Word, WordProgress } from '../types'
import { getBank } from '../core/wordBank'
import { getAllProgress } from '../core/db'
import { isDue } from '../core/srs'
import { speak } from '../core/tts'
import { recordMistake } from '../core/mistakes'

interface Props {
  todayDay: number
  newWords: Word[]
  day?: number
}

/** 单词默写:看中文释义(+音标+朗读),拼出英文。拼错记入错题本「单词」类。 */
export function Spelling({ todayDay, newWords, day }: Props) {
  const [queue, setQueue] = useState<Word[]>([])
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [revealed, setRevealed] = useState(false) // 答错后显示正确拼写
  const [reviewCount, setReviewCount] = useState(0)

  // 队列仅在「数据源」变化时重建一次:todayDay / newWords。
  // newWords 由 App memoize 保证引用稳定,异步重渲染(SW 激活等)不会重置 idx、清空已输入内容。
  useEffect(() => {
    let alive = true
    getAllProgress().then((all) => {
      if (!alive) return
      const map: Record<string, WordProgress> = {}
      all.forEach((p) => (map[p.word] = p))
      const newSet = new Set(newWords.map((w) => w.word))
      const dueReview = getBank().filter(
        (w) => map[w.word] && isDue(map[w.word], todayDay) && !newSet.has(w.word)
      )
      setReviewCount(dueReview.length)
      const freshNew = newWords.filter((w) => !map[w.word])
      setQueue([...freshNew, ...dueReview])
      setIdx(0)
      setText('')
      setSubmitted(false)
      setRevealed(false)
    })
    return () => {
      alive = false
    }
  }, [todayDay, newWords])

  const current = queue[idx]
  const total = queue.length
  // 新词/复习标签:inline 判断(newWords 引用稳定,.some 开销可忽略)
  const isNew = current ? newWords.some((w) => w.word === current.word) : false

  // 词义取第一条,做题面
  const cue = useMemo(() => {
    if (!current) return ''
    return current.meaning.split(/[;;,，]/)[0].trim() || current.meaning
  }, [current])

  function check() {
    if (!current) return
    const ok = text.trim().toLowerCase() === current.word.toLowerCase()
    setSubmitted(true)
    if (!ok) {
      setRevealed(true)
      recordMistake({
        category: 'word',
        source: 'spelling',
        ref: current.word,
        stem: `${cue} (${current.pos})`,
        yourAnswer: text.trim() || '(空)',
        correctAnswer: current.word,
        explain: `${current.word} /${current.phonetic}/ — ${current.meaning}`,
        day,
      }).catch(() => {})
    }
  }

  function next() {
    setText('')
    setSubmitted(false)
    setRevealed(false)
    setIdx((i) => i + 1)
  }

  function retry() {
    setText('')
    setSubmitted(false)
    setRevealed(false)
  }

  if (!current) {
    return (
      <div className="card center">
        <div style={{ fontSize: 40, marginBottom: 8 }}>🎉</div>
        <h2>今天的默写都完成啦</h2>
        <p className="muted">新词 {newWords.length} + 复习 {reviewCount} 已练完。</p>
        <p className="muted" style={{ marginTop: 12 }}>拼错的词已自动进入「错题本 · 单词」。</p>
      </div>
    )
  }

  const ok = submitted && text.trim().toLowerCase() === current.word.toLowerCase()

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h2>单词默写</h2>
        <span className="badge">{idx + 1} / {total}</span>
      </div>
      <div className="meta">
        {isNew ? '新词' : '复习'} · 看释义拼写英文
      </div>

      <div className="progress">
        <div style={{ width: `${(idx / total) * 100}%` }} />
      </div>

      <div className="spell-card">
        <div className="muted" style={{ fontSize: 13 }}>{current.pos}</div>
        <div className="spell-cue">{cue}</div>
        <div className="phonetic">{revealed ? current.phonetic : '/ · · · /'}</div>
        <button
          className="primary"
          style={{ marginTop: 12 }}
          onClick={() => speak(current.word)}
        >
          🔊 听发音
        </button>
        {revealed && (
          <div className="muted" style={{ marginTop: 10 }}>
            正确拼写:<strong style={{ color: 'var(--text)', fontSize: 18 }}>{current.word}</strong>
          </div>
        )}
      </div>

      <input
        className="spell-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !submitted) check()
          else if (e.key === 'Enter' && submitted) next()
        }}
        placeholder="输入英文单词..."
        autoFocus
        style={{
          width: '100%',
          padding: '12px 14px',
          marginTop: 12,
          background: 'var(--surface-2)',
          border: `1px solid ${submitted ? (ok ? 'var(--success)' : 'var(--danger)') : 'var(--border)'}`,
          borderRadius: 8,
          color: 'var(--text)',
          fontSize: 18,
          textAlign: 'center',
          letterSpacing: 1,
        }}
      />

      {!submitted ? (
        <div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
          <button className="primary" style={{ flex: 1 }} onClick={check} disabled={!text.trim()}>
            检查
          </button>
          <button onClick={() => { setRevealed(true); setSubmitted(true) }} disabled={!text.trim()}>
            不会,看答案
          </button>
        </div>
      ) : (
        <div style={{ marginTop: 10 }}>
          <div className="muted" style={{ marginBottom: 8 }}>
            {ok ? (
              <span style={{ color: 'var(--success)' }}>✓ 正确</span>
            ) : (
              <span style={{ color: 'var(--danger)' }}>✗ 拼错,已记入错题本</span>
            )}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {!ok && (
              <button style={{ flex: 1 }} onClick={retry}>再拼一次</button>
            )}
            <button className="primary" style={{ flex: 1 }} onClick={next}>
              {idx + 1 >= total ? '完成' : '下一个 →'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
