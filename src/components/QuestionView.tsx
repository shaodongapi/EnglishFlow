import { useState } from 'react'
import type { Question } from '../types'
import { Explain, md } from './Explain'
import { recordMistake } from '../core/mistakes'

interface Props {
  q: Question
  index: number
  /** 来源 key(写入错题本分类用):grammar/reading/match… */
  source?: string
  /** 当前学习日 */
  day?: number
}

export function QuestionView({ q, index, source = 'grammar', day }: Props) {
  const [picked, setPicked] = useState<number | null>(null)
  const [text, setText] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const correctIdx = typeof q.answer === 'number' ? q.answer : -1
  const isJudge = q.type === 'judge'
  const isBlank = q.type === 'blank'

  function check() {
    setSubmitted(true)
    if (!isCorrect()) {
      const your = yourAnswerText()
      const right = correctAnswerText()
      recordMistake({
        category: 'question',
        source,
        ref: q.id,
        stem: q.stem,
        yourAnswer: your,
        correctAnswer: right,
        explain: q.explain,
        day,
      }).catch(() => {})
    }
  }

  function yourAnswerText(): string {
    if (isBlank) return text.trim()
    if (q.options && picked != null) return q.options[picked]
    return picked == null ? '(未作答)' : String(picked)
  }

  function correctAnswerText(): string {
    if (isBlank) return String(q.answer)
    if (q.options && typeof q.answer === 'number') return q.options[q.answer]
    return String(q.answer)
  }

  function isCorrect(): boolean {
    if (isBlank) {
      return text.trim().toLowerCase().includes(String(q.answer).toLowerCase())
    }
    if (isJudge) return picked === q.answer
    return picked === correctIdx
  }

  return (
    <div className="q">
      <div className="stem">
        <strong>Q{index + 1}.</strong> {q.stem}
      </div>

      {q.options && (
        <div className="opts">
          {q.options.map((opt, i) => {
            let cls = 'opt'
            if (submitted) {
              if (i === correctIdx || (isJudge && i === q.answer)) cls += ' correct'
              else if (i === picked) cls += ' wrong'
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => !submitted && setPicked(i)}
                disabled={submitted}
              >
                {opt}
              </button>
            )
          })}
        </div>
      )}

      {isBlank && (
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="输入答案..."
          disabled={submitted}
          style={{
            width: '100%',
            padding: '10px 12px',
            background: 'var(--surface-2)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            color: 'var(--text)',
            fontSize: 15,
          }}
        />
      )}

      {!submitted ? (
        <div style={{ marginTop: 10 }}>
          <button className="primary" onClick={check} disabled={!isBlank && picked === null}>
            提交
          </button>
        </div>
      ) : (
        <>
          <div className="muted" style={{ marginTop: 8 }}>
            {isCorrect() ? <span style={{ color: 'var(--success)' }}>✓ 正确</span> : <span style={{ color: 'var(--danger)' }}>✗ 再看看</span>}
          </div>
          <Explain>{md(q.explain)}</Explain>
        </>
      )}
    </div>
  )
}
