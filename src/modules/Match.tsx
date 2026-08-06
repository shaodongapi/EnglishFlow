import type { MatchItem, Question } from '../types'
import { QuestionView } from '../components/QuestionView'

interface Props {
  items: MatchItem[]
  day?: number
}

/**
 * 语境选词:中文释义(或 emoji)→ 选英文词。
 * MatchItem 与 single 型 Question 结构同构,直接映射后复用 QuestionView(DRY)。
 */
export function Match({ items, day }: Props) {
  return (
    <div className="card">
      <h2>语境选词</h2>
      <div className="meta">释义 / 场景 → 选英文词 · 共 {items.length} 题</div>
      {items.map((it, i) => (
        <MatchOne key={it.id || `match-${i}`} item={it} index={i} day={day} />
      ))}
    </div>
  )
}

/** 单道语境选词题。供 StudyFlow 单题屏使用。 */
export function MatchOne({ item, index, day }: { item: MatchItem; index: number; day?: number }) {
  const q: Question = {
    id: item.id || `match-${index}`,
    type: 'single',
    stem: `选出与「${item.cue}」对应的词`,
    options: item.options.map((o, idx) => `${String.fromCharCode(65 + idx)}) ${o}`),
    answer: item.answer,
    explain: item.explain || '',
  }
  return <QuestionView q={q} index={index} source="match" day={day} />
}
