import { useState } from 'react'
import type { WritingTask } from '../types'
import { Explain } from '../components/Explain'
import { getMeta, setMeta } from '../core/db'

const API_KEY_META = 'ai_api_key'
const API_BASE_META = 'ai_api_base'

export function Writing({ task }: { task: WritingTask }) {
  const [text, setText] = useState('')
  const [feedback, setFeedback] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [showSample, setShowSample] = useState(false)
  const [apiKey, setApiKey] = useState('')
  const [apiBase, setApiBase] = useState('')
  const [showSetup, setShowSetup] = useState(false)

  async function loadConfig() {
    const k = (await getMeta<string>(API_KEY_META)) || ''
    const b = (await getMeta<string>(API_BASE_META)) || ''
    setApiKey(k)
    setApiBase(b)
    return { k, b }
  }

  async function score() {
    const { k, b } = await loadConfig()
    if (!navigator.onLine) {
      setFeedback('⚠️ 当前离线,无法联网评分。可先对照范文自检,联网后再评分。')
      return
    }
    if (!k || !b) {
      setShowSetup(true)
      return
    }
    setLoading(true)
    setFeedback(null)
    try {
      // 通用 OpenAI 兼容接口 (可接国内中转 / 自建服务)
      const res = await fetch(`${b.replace(/\/$/, '')}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${k}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content:
                '你是英语写作老师。对用户的英文写作给出评分(0-10)、指出语法错误、并给出改进后的版本。用中文回复,简洁分点。',
            },
            {
              role: 'user',
              content: `题目:${task.prompt}\n要求用到:${task.keyWords?.join(', ')}\n学生写作:${text}`,
            },
          ],
        }),
      })
      const data = await res.json()
      setFeedback(data.choices?.[0]?.message?.content || '评分失败,请检查 API 配置。')
    } catch (e) {
      setFeedback('评分请求失败:' + (e as Error).message)
    } finally {
      setLoading(false)
    }
  }

  async function saveConfig() {
    await setMeta(API_KEY_META, apiKey)
    await setMeta(API_BASE_META, apiBase)
    setShowSetup(false)
    score()
  }

  return (
    <div className="card">
      <h2>写作</h2>
      <div className="meta">每天一小段 · 离线对照范文 / 联网 AI 评分</div>

      <div style={{ background: 'var(--surface-2)', borderRadius: 10, padding: 12, marginBottom: 10 }}>
        <strong>题目:</strong> {task.prompt}
        {task.keyWords && (
          <div className="muted" style={{ marginTop: 4 }}>
            建议用词:{task.keyWords.join(' · ')}
          </div>
        )}
      </div>

      {task.template && !showSample && (
        <div className="muted" style={{ marginBottom: 8 }}>
          模板填空:{task.template}
        </div>
      )}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="在这里写你的英文..."
      />

      <div className="row" style={{ marginTop: 10 }}>
        <button className="primary" onClick={score} disabled={loading || !text.trim()}>
          {loading ? '评分中...' : '✨ AI 评分(联网)'}
        </button>
        <button onClick={() => setShowSample((s) => !s)}>{showSample ? '隐藏范文' : '查看范文'}</button>
        <button onClick={() => setShowSetup(true)}>⚙️ AI 配置</button>
      </div>

      {feedback && (
        <div
          style={{
            marginTop: 12,
            background: 'var(--surface-2)',
            borderRadius: 10,
            padding: 12,
            whiteSpace: 'pre-wrap',
            lineHeight: 1.7,
          }}
        >
          {feedback}
        </div>
      )}

      {showSample && task.sample && (
        <Explain title="范文对照">
          {task.sample}
          <br />
          <span className="muted">对照范文检查:时态、冠词、用词是否到位。</span>
        </Explain>
      )}

      {showSetup && (
        <div
          style={{
            marginTop: 12,
            background: 'var(--surface-2)',
            borderRadius: 10,
            padding: 12,
          }}
        >
          <h3 style={{ margin: '0 0 8px', fontSize: 15 }}>AI 评分配置(仅本地存储)</h3>
          <input
            placeholder="API Base,如 https://api.openai.com/v1"
            value={apiBase}
            onChange={(e) => setApiBase(e.target.value)}
            style={{ width: '100%', marginBottom: 8, padding: 8, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)' }}
          />
          <input
            placeholder="API Key"
            value={apiKey}
            type="password"
            onChange={(e) => setApiKey(e.target.value)}
            style={{ width: '100%', marginBottom: 8, padding: 8, background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)' }}
          />
          <button className="primary" onClick={saveConfig}>保存并评分</button>
        </div>
      )}
    </div>
  )
}
