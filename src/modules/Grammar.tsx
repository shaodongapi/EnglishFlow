import type { GrammarLesson } from '../types'
import { QuestionView } from '../components/QuestionView'
import { Explain, md } from '../components/Explain'

export function Grammar({ lesson, day }: { lesson: GrammarLesson; day?: number }) {
  return (
    <div className="card">
      <h2>语法 · {lesson.title}</h2>
      <div className="meta">知识点 + {lesson.questions.length} 道练习</div>

      <div style={{ lineHeight: 1.8, marginBottom: 8 }}>
        {lesson.body.split('\n').map((line, i) => (
          <div key={i}>{md(line)}</div>
        ))}
      </div>

      <Explain title="展开:知识点速记">{md(lesson.body)}</Explain>

      <div style={{ marginTop: 12 }}>
        {lesson.questions.map((q, i) => (
          <QuestionView key={q.id} q={q} index={i} source="grammar" day={day} />
        ))}
      </div>
    </div>
  )
}
