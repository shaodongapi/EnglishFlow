import { useMemo, useState } from 'react'
import { PHRASES } from '../data/phrases'
import { speak } from '../core/tts'

export function Phrases() {
  const [q, setQ] = useState('')

  const groups = useMemo(() => {
    const filter = q.trim().toLowerCase()
    const list = filter
      ? PHRASES.filter(
          (p) => p.phrase.toLowerCase().includes(filter) || p.meaning.toLowerCase().includes(filter)
        )
      : PHRASES
    // 按首字母分组
    const map: Record<string, typeof PHRASES> = {}
    for (const p of list) {
      const k = /[a-z]/i.test(p.phrase[0]) ? p.phrase[0].toUpperCase() : '#'
      ;(map[k] = map[k] || []).push(p)
    }
    return Object.keys(map)
      .sort()
      .map((k) => ({ letter: k, items: map[k] }))
  }, [q])

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h2>大纲短语</h2>
        <span className="badge">{PHRASES.length} 条</span>
      </div>
      <div className="meta">官方大纲 {PHRASES.length} 条短语 · 可搜索</div>

      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="搜短语或中文释义…"
        style={{
          width: '100%',
          margin: '10px 0',
          padding: '10px 12px',
          background: 'var(--surface-2)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          color: 'var(--text)',
          fontSize: 15,
        }}
      />

      {groups.length === 0 && <div className="empty">没有匹配的短语</div>}

      {groups.map((g) => (
        <div key={g.letter} style={{ marginTop: 8 }}>
          <div
            style={{
              color: 'var(--accent)',
              fontSize: 13,
              fontWeight: 700,
              padding: '6px 2px',
              position: 'sticky',
              top: 0,
              background: 'var(--surface)',
            }}
          >
            {g.letter}
          </div>
          {g.items.map((p, i) => (
            <div
              key={i}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 4px',
                borderBottom: '1px solid var(--border)',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>{p.phrase}</div>
                <div className="muted" style={{ fontSize: 13 }}>
                  {p.meaning}
                </div>
              </div>
              <button
                onClick={() => speak(p.phrase.replace(/\.\.\./g, '').trim())}
                style={{ padding: '6px 10px' }}
              >
                🔊
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
