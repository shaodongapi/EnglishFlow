import { useState } from 'react'
import type { TranslationItem } from '../types'
import { Explain } from '../components/Explain'
import { speak } from '../core/tts'

export function Translation({ items }: { items: TranslationItem[] }) {
  const [shown, setShown] = useState<boolean[]>(() => items.map(() => false))

  return (
    <div className="card">
      <h2>翻译(英译汉)</h2>
      <div className="meta">{items.length} 句 · 先自己译,再看参考译文</div>

      {items.map((it, i) => (
        <div key={i} style={{ marginBottom: 16, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
          <div className="row" style={{ justifyContent: 'space-between' }}>
            <div style={{ flex: 1, lineHeight: 1.7 }}>
              {i + 1}. {it.en}
            </div>
            <button onClick={() => speak(it.en)}>🔊</button>
          </div>

          <div style={{ marginTop: 8 }}>
            {shown[i] ? (
              <div style={{ color: 'var(--success)' }}>参考译文:{it.zh}</div>
            ) : (
              <button onClick={() => setShown((s) => s.map((v, j) => (j === i ? true : v)))}>
                显示参考译文
              </button>
            )}
          </div>

          {it.tip && shown[i] && (
            <Explain title="翻译技巧">
              <strong>技巧:</strong> {it.tip}
            </Explain>
          )}
        </div>
      ))}
    </div>
  )
}
