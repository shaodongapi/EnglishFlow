import type { ReactNode } from 'react'

/** 折叠式详解 —— 用于所有练习题的答案解析 */
export function Explain({ title = '查看答案与解析', children }: { title?: string; children: ReactNode }) {
  return (
    <details className="explain">
      <summary>{title}</summary>
      <div className="body">{children}</div>
    </details>
  )
}

/** 把简单 markdown (粗体 **xx**) 渲染成 <strong> */
export function md(text: string): ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((p, i) =>
    p.startsWith('**') && p.endsWith('**') ? (
      <strong key={i}>{p.slice(2, -2)}</strong>
    ) : (
      <span key={i}>{p}</span>
    )
  )
}
