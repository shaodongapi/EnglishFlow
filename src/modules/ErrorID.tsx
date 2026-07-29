import { useState } from 'react'
import type { ErrorIDItem } from '../types'
import { Explain, md } from '../components/Explain'
import { recordMistake } from '../core/mistakes'

export function ErrorID({ items, day }: { items: ErrorIDItem[]; day?: number }) {
  return (
    <div className="card">
      <h2>挑错</h2>
      <div className="meta">{items.length} 题 · 选出有错误的一段(北京学位英语真题题型)</div>
      {items.map((it, i) => (
        <ErrorItem key={it.id} item={it} index={i} day={day} />
      ))}
    </div>
  )
}

function ErrorItem({ item, index, day }: { item: ErrorIDItem; index: number; day?: number }) {
  const [picked, setPicked] = useState<string | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const correct = picked === item.answer

  function submit() {
    setSubmitted(true)
    if (picked !== item.answer) {
      recordMistake({
        category: 'question',
        source: 'errorid',
        ref: item.id,
        stem: item.sentence,
        yourAnswer: picked ?? '(未作答)',
        correctAnswer: item.answer,
        explain: item.explain,
        day,
      }).catch(() => {})
    }
  }

  return (
    <div className="q">
      <div className="stem">
        <strong>{index + 1}.</strong> {item.sentence}
        <div className="muted" style={{ fontSize: 13, marginTop: 4 }}>
          请选出有错误的一项:
        </div>
      </div>
      <div className="opts">
        {item.segments.map((s) => {
          let cls = 'opt'
          if (submitted && s.key === item.answer) cls += ' wrong' // 标出错误所在
          return (
            <button
              key={s.key}
              className={cls}
              onClick={() => !submitted && setPicked(s.key)}
              disabled={submitted}
            >
              <strong>{s.key}.</strong> {s.text}
            </button>
          )
        })}
      </div>

      <div style={{ marginTop: 10, display: 'flex', gap: 8, alignItems: 'center' }}>
        {!submitted ? (
          <button className="primary" onClick={submit} disabled={!picked}>
            提交
          </button>
        ) : (
          <span className="muted">
            {correct ? (
              <span style={{ color: 'var(--success)' }}>✓ 正确</span>
            ) : (
              <span style={{ color: 'var(--danger)' }}>✗ 正确答案:{item.answer}</span>
            )}
            {item.correction && (
              <span style={{ marginLeft: 10 }}>
                应为:<strong style={{ color: 'var(--text)' }}>{item.correction}</strong>
              </span>
            )}
          </span>
        )}
      </div>

      {submitted && <Explain>{md(item.explain)}</Explain>}
    </div>
  )
}
