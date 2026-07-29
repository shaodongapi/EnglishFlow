import { useEffect, useMemo, useState } from 'react'
import type { Mistake, MistakeCategory } from '../types'
import { listMistakes, markMastered, removeMistake, clearAllMistakes, summarize, SOURCE_LABEL } from '../core/mistakes'
import { Explain, md } from '../components/Explain'
import { speak } from '../core/tts'

type Filter = 'all' | MistakeCategory

/** 错题本:统一收录「题目错题」与「没记住的单词」,按 类型×来源 分类。 */
export function MistakeBook() {
  const [all, setAll] = useState<Mistake[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const [sourceFilter, setSourceFilter] = useState<string>('all')
  const [showMastered, setShowMastered] = useState(false)

  async function refresh() {
    setAll(await listMistakes())
  }
  useEffect(() => {
    refresh()
  }, [])

  const stats = useMemo(() => summarize(all), [all])

  // 出现过的来源(仅当前 filter 下)
  const sources = useMemo(() => {
    const set = new Set<string>()
    all
      .filter((m) => (filter === 'all' ? true : m.category === filter))
      .forEach((m) => set.add(m.source))
    return Array.from(set)
  }, [all, filter])

  const visible = useMemo(() => {
    return all.filter((m) => {
      if (!showMastered && m.status === 'mastered') return false
      if (filter !== 'all' && m.category !== filter) return false
      if (sourceFilter !== 'all' && m.source !== sourceFilter) return false
      return true
    })
  }, [all, filter, sourceFilter, showMastered])

  async function toggleMastered(m: Mistake) {
    await markMastered(m.id, m.status !== 'mastered')
    refresh()
  }
  async function del(m: Mistake) {
    await removeMistake(m.id)
    refresh()
  }
  async function clearAll() {
    if (!confirm('清空全部错题记录?此操作不可撤销。')) return
    await clearAllMistakes()
    refresh()
  }

  return (
    <div className="card">
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <h2>错题本</h2>
        {all.length > 0 && (
          <button onClick={clearAll} style={{ fontSize: 12, padding: '4px 10px' }}>清空</button>
        )}
      </div>
      <div className="meta">记录所有错题与没记住的单词 · 自动归类</div>

      {/* 统计 */}
      <div className="mb-stats">
        <div className="mb-stat"><div className="mb-num">{stats.total}</div><div className="muted">未掌握</div></div>
        <div className="mb-stat"><div className="mb-num">{stats.question}</div><div className="muted">题目错</div></div>
        <div className="mb-stat"><div className="mb-num">{stats.word}</div><div className="muted">单词</div></div>
        <div className="mb-stat"><div className="mb-num">{stats.mastered}</div><div className="muted">已掌握</div></div>
      </div>

      {/* 类型筛选 */}
      <div className="seg" style={{ marginTop: 12 }}>
        {(['all', 'question', 'word'] as Filter[]).map((f) => (
          <button
            key={f}
            className={`seg-btn ${filter === f ? 'active' : ''}`}
            onClick={() => { setFilter(f); setSourceFilter('all') }}
          >
            {f === 'all' ? '全部' : f === 'question' ? '题目错题' : '没记住的词'}
          </button>
        ))}
      </div>

      {/* 来源筛选 */}
      {sources.length > 1 && (
        <div className="seg" style={{ marginTop: 8 }}>
          <button className={`seg-btn ${sourceFilter === 'all' ? 'active' : ''}`} onClick={() => setSourceFilter('all')}>全部来源</button>
          {sources.map((s) => (
            <button
              key={s}
              className={`seg-btn ${sourceFilter === s ? 'active' : ''}`}
              onClick={() => setSourceFilter(s)}
            >
              {SOURCE_LABEL[s] || s} · {stats.bySource[s] || 0}
            </button>
          ))}
        </div>
      )}

      <label className="muted" style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: 13 }}>
        <input type="checkbox" checked={showMastered} onChange={(e) => setShowMastered(e.target.checked)} />
        显示已掌握({stats.mastered})
      </label>

      {/* 列表 */}
      <div style={{ marginTop: 12 }}>
        {visible.length === 0 && <div className="empty">暂无记录 · 做题或默写出错会自动收录</div>}
        {visible.map((m) => (
          <div key={m.id} className={`mb-item ${m.status === 'mastered' ? 'mastered' : ''}`}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <span className="mb-tag">{SOURCE_LABEL[m.source] || m.source}</span>
              <span className="muted" style={{ fontSize: 11 }}>
                {m.category === 'word' ? '单词' : '题目'} · 错 {m.wrongCount} 次
              </span>
            </div>
            <div className="mb-stem">
              {m.category === 'word' && (
                <button
                  className="primary"
                  style={{ padding: '2px 8px', marginRight: 8, fontSize: 12 }}
                  onClick={() => speak(m.ref)}
                >🔊</button>
              )}
              {m.stem}
            </div>
            <div className="mb-ans">
              <span style={{ color: 'var(--danger)' }}>你的:{m.yourAnswer}</span>
              <span style={{ color: 'var(--success)', marginLeft: 12 }}>正确:{m.correctAnswer}</span>
            </div>
            {m.explain && <Explain title="解析">{md(m.explain)}</Explain>}
            <div className="row" style={{ marginTop: 6 }}>
              <button style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => toggleMastered(m)}>
                {m.status === 'mastered' ? '↩ 标为未掌握' : '✓ 我会了'}
              </button>
              <button style={{ fontSize: 12, padding: '4px 10px' }} onClick={() => del(m)}>删除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
