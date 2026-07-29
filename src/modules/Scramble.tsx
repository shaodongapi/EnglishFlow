import { useState } from 'react'
import type { ScrambleItem } from '../types'
import { shuffle } from '../core/derive'
import { Explain, md } from '../components/Explain'
import { recordMistake } from '../core/mistakes'

interface Props {
  items: ScrambleItem[]
  day?: number
}

/** 单道拼装题:自管 state。沿用 .q / .opt / Explain 约定(参考 Cloze.tsx)。 */
function ScrambleQ({ item, index, day }: { item: ScrambleItem; index: number; day?: number }) {
  // 打乱一次(用 key 重置时 useMemo 不必要,组件每次挂载重算即可)
  const [pool] = useState(() => {
    let s = shuffle(item.words)
    let guard = 0
    while (s.join(' ') === item.words.join(' ') && guard++ < 6) s = shuffle(item.words)
    return s
  })
  const [answer, setAnswer] = useState<string[]>([]) // 已选的「词 + 原池索引」用占位串
  const [submitted, setSubmitted] = useState(false)

  // 用「词|序号」区分重复词:pool 里每个槽位唯一
  const slots = pool.map((w, i) => ({ w, i }))
  const usedSlot = new Set(answer.map((a) => Number(a.split('|')[1])))

  function pick(slotIdx: number) {
    if (submitted) return
    const slot = slots[slotIdx]
    setAnswer((a) => [...a, `${slot.w}|${slot.i}`])
  }
  function unpick(pos: number) {
    if (submitted) return
    setAnswer((a) => a.filter((_, i) => i !== pos))
  }

  const correct = item.words
  const answerWords = answer.map((a) => a.split('|')[0])
  const isRight = submitted && answerWords.join(' ') === correct.join(' ')

  function submit() {
    setSubmitted(true)
    if (answerWords.join(' ') !== correct.join(' ')) {
      recordMistake({
        category: 'question',
        source: 'scramble',
        ref: item.id,
        stem: `拼装:${item.translation}`,
        yourAnswer: answerWords.join(' '),
        correctAnswer: correct.join(' '),
        explain: item.tip,
        day,
      }).catch(() => {})
    }
  }

  return (
    <div className="q">
      <div className="stem">
        <strong>Q{index + 1}.</strong> 把下面的词按正确语序拼成英文句:{' '}
        <span className="muted">(释义:{item.translation})</span>
      </div>

      {/* 答题行 */}
      <div className="answer-row">
        {answer.map((a, pos) => {
          const w = a.split('|')[0]
          const rightAtPos = submitted && w === correct[pos]
          const wrongAtPos = submitted && w !== correct[pos]
          let cls = 'chip placed'
          if (rightAtPos) cls += ' correct'
          if (wrongAtPos) cls += ' wrong'
          return (
            <button key={pos} className={cls} onClick={() => unpick(pos)} disabled={submitted}>
              {w}
            </button>
          )
        })}
        {answer.length === 0 && <span className="muted" style={{ fontSize: 13 }}>↑ 点下面的词块放入此行</span>}
      </div>

      {/* 词块池 */}
      <div className="chip-pool">
        {slots.map((slot) => {
          const used = usedSlot.has(slot.i)
          return (
            <button
              key={slot.i}
              className={`chip ${used ? 'used' : ''}`}
              onClick={() => pick(slot.i)}
              disabled={used || submitted}
            >
              {slot.w}
            </button>
          )
        })}
      </div>

      {!submitted ? (
        <div style={{ marginTop: 10 }}>
          <button className="primary" onClick={submit} disabled={answer.length !== item.words.length}>
            检查
          </button>
        </div>
      ) : (
        <>
          <div className="muted" style={{ marginTop: 8 }}>
            {isRight ? (
              <span style={{ color: 'var(--success)' }}>✓ 正确</span>
            ) : (
              <span style={{ color: 'var(--danger)' }}>✗ 再看看</span>
            )}
            <span style={{ marginLeft: 10 }}>正确语序:</span>
            <strong style={{ color: 'var(--text)' }}>{correct.join(' ')}</strong>
          </div>
          {item.tip && <Explain title="提示">{md(item.tip)}</Explain>}
        </>
      )}
    </div>
  )
}

export function Scramble({ items, day }: Props) {
  return (
    <div className="card">
      <h2>句子拼装</h2>
      <div className="meta">点词块拼回正确语序(专治中英语序)· 共 {items.length} 题</div>
      {items.map((it, i) => (
        <ScrambleQ key={it.id} item={it} index={i} day={day} />
      ))}
    </div>
  )
}
