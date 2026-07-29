import { useState } from 'react'
import type { DictationItem } from '../types'
import { speak } from '../core/tts'
import { Explain, md } from '../components/Explain'
import { recordMistake } from '../core/mistakes'

interface Props {
  items: DictationItem[]
  day?: number
}

const inputStyle: React.CSSProperties = {
  display: 'inline-block',
  minWidth: 80,
  padding: '4px 8px',
  margin: '0 4px',
  background: 'var(--surface-2)',
  border: '1px solid var(--border)',
  borderRadius: 6,
  color: 'var(--text)',
  fontSize: 15,
  textAlign: 'center',
}

/** 单道听写题:🔊 朗读 + 挖空填词。 */
function DictationQ({ item, index, day }: { item: DictationItem; index: number; day?: number }) {
  const tokens = item.en.split(/\s+/)
  const blankSet = new Set(item.blanks)
  const [values, setValues] = useState<string[]>(item.blanks.map(() => ''))
  const [submitted, setSubmitted] = useState(false)

  const answers = item.blanks.map((bi) => tokens[bi].replace(/[.,!?:;'"()]+/g, ''))
  const results = submitted
    ? values.map((v, i) => v.trim().toLowerCase() === answers[i].toLowerCase())
    : []
  const correctCount = results.filter(Boolean).length
  const allRight = submitted && correctCount === item.blanks.length

  function submit() {
    setSubmitted(true)
    const wrong = values
      .map((v, i) => (v.trim().toLowerCase() !== answers[i].toLowerCase() ? i : -1))
      .filter((i) => i >= 0)
    if (wrong.length > 0) {
      recordMistake({
        category: 'question',
        source: 'dictation',
        ref: item.id,
        stem: `听写:${item.translation}`,
        yourAnswer: values.map((v, i) => (wrong.includes(i) ? `×${v || '空'}` : answers[i])).join(' / '),
        correctAnswer: answers.join(' / '),
        explain: item.en,
        day,
      }).catch(() => {})
    }
  }

  // 渲染:把 token 流铺成句子,挖空处变 input
  let blankCursor = 0
  return (
    <div className="q">
      <div className="stem">
        <strong>Q{index + 1}.</strong> 🔊 听句子,补全空缺的词
        <button
          className="primary"
          style={{ marginLeft: 10, padding: '4px 10px' }}
          onClick={() => speak(item.en, 0.9)}
        >
          🔊 朗读
        </button>
      </div>

      <div style={{ lineHeight: 2.4, marginTop: 6 }}>
        {tokens.map((tok, i) => {
          if (!blankSet.has(i)) {
            return (
              <span key={i} style={{ marginRight: 4 }}>
                {tok}
              </span>
            )
          }
          const bi = blankCursor++
          const ok = results[bi]
          const cls = `dict-input ${submitted ? (ok ? 'correct' : 'wrong') : ''}`
          return (
            <input
              key={i}
              className={cls}
              style={inputStyle}
              value={values[bi]}
              onChange={(e) =>
                setValues((vs) => vs.map((v, k) => (k === bi ? e.target.value : v)))
              }
              disabled={submitted}
            />
          )
        })}
      </div>

      {!submitted ? (
        <div style={{ marginTop: 10 }}>
          <button className="primary" onClick={submit}>
            检查
          </button>
        </div>
      ) : (
        <>
          <div className="muted" style={{ marginTop: 8 }}>
            {allRight ? (
              <span style={{ color: 'var(--success)' }}>✓ 全对</span>
            ) : (
              <span style={{ color: 'var(--danger)' }}>
                ✗ 对 {correctCount}/{item.blanks.length} 空
              </span>
            )}
          </div>
          <Explain title="参考答案与译文">
            {md(`**${item.en}**\n\n译文:${item.translation}`)}
          </Explain>
        </>
      )}
    </div>
  )
}

export function Dictation({ items, day }: Props) {
  return (
    <div className="card">
      <h2>听力听写</h2>
      <div className="meta">🔊 听句子,补全空缺词 · 共 {items.length} 题</div>
      {items.map((it, i) => (
        <DictationQ key={it.id} item={it} index={i} day={day} />
      ))}
    </div>
  )
}
