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
  const questions: Question[] = items.map((it, i) => ({
    id: it.id || `match-${i}`,
    type: 'single',
    stem: `选出与「${it.cue}」对应的词`,
    options: it.options.map((o, idx) => `${String.fromCharCode(65 + idx)}) ${o}`),
    answer: it.answer,
    explain: it.explain || '',
  }))

  return (
    <div className="card">
      <h2>语境选词</h2>
      <div className="meta">释义 / 场景 → 选英文词 · 共 {items.length} 题</div>
      {questions.map((q, i) => (
        <QuestionView key={q.id} q={q} index={i} source="match" day={day} />
      ))}
    </div>
  )
}
