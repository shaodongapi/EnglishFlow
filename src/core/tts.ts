// Web Speech API 封装 —— 离线朗读 (浏览器内置 TTS)

let cachedVoice: SpeechSynthesisVoice | null = null

function pickVoice(): SpeechSynthesisVoice | null {
  if (cachedVoice) return cachedVoice
  const voices = window.speechSynthesis?.getVoices?.() ?? []
  if (!voices.length) return null
  // 优先英语女声
  cachedVoice =
    voices.find((v) => /en[-_]US/i.test(v.lang) && /female|samantha|zira/i.test(v.name)) ||
    voices.find((v) => /en/i.test(v.lang)) ||
    null
  return cachedVoice
}

// 有些浏览器需要异步加载 voices
if (typeof window !== 'undefined' && window.speechSynthesis) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = null
    pickVoice()
  }
}

export function speak(text: string, rate = 0.95): void {
  if (typeof window === 'undefined' || !window.speechSynthesis) {
    console.warn('当前浏览器不支持语音朗读')
    return
  }
  window.speechSynthesis.cancel()
  const u = new SpeechSynthesisUtterance(text)
  const v = pickVoice()
  if (v) u.voice = v
  u.lang = v?.lang || 'en-US'
  u.rate = rate
  window.speechSynthesis.speak(u)
}

export function ttsSupported(): boolean {
  return typeof window !== 'undefined' && !!window.speechSynthesis
}
