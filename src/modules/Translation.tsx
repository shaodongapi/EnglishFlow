import { useState } from 'react'
import type { TranslationItem } from '../types'
import { Explain } from '../components/Explain'
import { speak } from '../core/tts'

/** 单条翻译题:自管 shown 状态。供 StudyFlow 单题屏使用(key 变化即重置)。 */
export function TranslationOne({ item, index }: { item: TranslationItem; index: number }) {
  const [shown, setShown] = useState(false)
  return (
    <div>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <div style={{ flex: 1, lineHeight: 1.7 }}>
          {index + 1}. {item.en}
        </div>
        <button onClick={() => speak(item.en)}>🔊</button>
      </div>
      <div style={{ marginTop: 8 }}>
        {shown ? (
          <div style={{ color: 'var(--success)' }}>参考译文:{item.zh}</div>
        ) : (
          <button onClick={() => setShown(true)}>显示参考译文</button>
        )}
      </div>
      {item.tip && shown && (
        <Explain title="翻译技巧">
          <strong>技巧:</strong> {item.tip}
        </Explain>
      )}
    </div>
  )
}

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
