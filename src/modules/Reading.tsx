import type { ReadingPassage } from '../types'
import { QuestionView } from '../components/QuestionView'
import { speak } from '../core/tts'

export function Reading({ passage, day }: { passage: ReadingPassage; day?: number }) {
  return (
    <div className="card">
      <h2>阅读 · {passage.title}</h2>
      <div className="meta">{passage.questions.length} 题</div>

      <div
        style={{
          background: 'var(--surface-2)',
          borderRadius: 10,
          padding: 14,
          lineHeight: 1.8,
          marginBottom: 12,
        }}
      >
        {passage.text}
        <div style={{ marginTop: 10 }}>
          <button onClick={() => speak(passage.text, 0.9)}>🔊 朗读全文</button>
        </div>
      </div>

      {passage.questions.map((q, i) => (
        <QuestionView key={q.id} q={q} index={i} source="reading" day={day} />
      ))}
    </div>
  )
}
