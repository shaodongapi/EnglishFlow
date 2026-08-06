import { useState } from 'react'
import type { ClozePassage } from '../types'
import { Explain, md } from '../components/Explain'
import { speak } from '../core/tts'
import { recordMistake } from '../core/mistakes'

export function Cloze({ passage, day }: { passage: ClozePassage; day?: number }) {
  return (
    <div className="card">
      <h2>完形填空</h2>
      <div className="meta">{passage.blanks.length} 空 · 北京学位英语真题题型</div>
      <ClozeContext passage={passage} />
      {passage.blanks.map((b) => (
        <Blank key={b.no} blank={b} day={day} />
      ))}
    </div>
  )
}

/** 完形篇章上下文(标题 + 带 __n__ 标记的正文 + 朗读),供 StudyFlow 单题屏顶部常驻。 */
export function ClozeContext({ passage }: { passage: ClozePassage }) {
  return (
    <div
      style={{
        background: 'var(--surface-2)',
        borderRadius: 10,
        padding: 14,
        lineHeight: 1.9,
        marginBottom: 12,
      }}
    >
      <strong>{passage.title}</strong>
      <div style={{ marginTop: 8 }}>{renderText(passage.text)}</div>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => speak(passage.text.replace(/__\d+__/g, '___'), 0.9)}>
          🔊 朗读全文
        </button>
      </div>
    </div>
  )
}

/** 把 __n__ 渲染成醒目的空格标记 */
function renderText(text: string) {
  const parts = text.split(/(__\d+__)/g)
  return parts.map((p, i) =>
    /^__\d+__$/.test(p) ? (
      <span
        key={i}
        style={{
          display: 'inline-block',
          minWidth: 28,
          textAlign: 'center',
          color: 'var(--accent)',
          fontWeight: 700,
          borderBottom: '2px solid var(--accent)',
          margin: '0 3px',
        }}
      >
        {p.replace(/__/g, '')}
      </span>
    ) : (
      <span key={i}>{p}</span>
    )
  )
}

export function Blank({ blank, day }: { blank: ClozePassage['blanks'][number]; day?: number }) {
  const [picked, setPicked] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const correct = picked === blank.answer

  function submit() {
    setSubmitted(true)
    if (picked !== blank.answer) {
      recordMistake({
        category: 'question',
        source: 'cloze',
        ref: `cloze-${blank.no}`,
        stem: `完形第 ${blank.no} 空`,
        yourAnswer: picked != null ? blank.options[picked] : '(未作答)',
        correctAnswer: blank.options[blank.answer],
        explain: blank.explain,
        day,
      }).catch(() => {})
    }
  }

  return (
    <div className="q">
      <div className="stem">
        <strong>{blank.no}.</strong>
      </div>
      <div className="opts">
        {blank.options.map((opt, i) => {
          let cls = 'opt'
          if (submitted) {
            if (i === blank.answer) cls += ' correct'
            else if (i === picked) cls += ' wrong'
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => !submitted && setPicked(i)}
              disabled={submitted}
            >
              <strong>{String.fromCharCode(65 + i)}.</strong> {opt}
            </button>
          )
        })}
      </div>
      <div style={{ marginTop: 8 }}>
        {!submitted ? (
          <button className="primary" onClick={submit} disabled={picked === null}>
            提交
          </button>
        ) : (
          <span className="muted">
            {correct ? (
              <span style={{ color: 'var(--success)' }}>✓ 正确</span>
            ) : (
              <span style={{ color: 'var(--danger)' }}>
                ✗ 正确答案:{String.fromCharCode(65 + blank.answer)}
              </span>
            )}
          </span>
        )}
      </div>
      {submitted && <Explain>{md(blank.explain)}</Explain>}
    </div>
  )
}
