import type {
  DayPlan,
  DictationItem,
  MatchItem,
  ScrambleItem,
  Word,
} from '../types'

/**
 * 交互「派生」:从当天已有的考纲数据(translation / vocab)自动生成
 * 句子拼装 / 语境选词 / 听力听写 的题目。这样每个阶段都能用,无需逐天手写。
 *
 * 派生结果可与 DayPlan 上手写的 scramble/match/dictation 合并:手写优先,
 * 缺失部分由派生补齐(见 App.tsx 的合并逻辑)。
 */

/** Fisher–Yates 打乱(运行期可用 Math.random) */
export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/** 去掉首尾标点,便于切词 */
function cleanSentence(en: string): string {
  return en.replace(/[.!?,;:"'()]+$/g, '').replace(/^[.!?,;:"'()]+/g, '').trim()
}

/** 从翻译句派生「句子拼装」:按空格切词,打乱顺序 */
export function deriveScramble(plan: DayPlan, limit = 5): ScrambleItem[] {
  const out: ScrambleItem[] = []
  for (const t of plan.translation) {
    const cleaned = cleanSentence(t.en)
    // 去掉句中标点,避免拼装时处理逗号
    const words = cleaned.replace(/[.,!?:;]+/g, '').split(/\s+/).filter(Boolean)
    if (words.length < 3 || words.length > 12) continue
    let shuffled = shuffle(words)
    // 避免打乱后恰好等于原序
    let guard = 0
    while (shuffled.join(' ') === words.join(' ') && guard++ < 5) {
      shuffled = shuffle(words)
    }
    out.push({
      id: `sc-${out.length}-${t.en.slice(0, 6)}`,
      words,
      translation: t.zh,
      tip: t.tip,
    })
    if (out.length >= limit) break
  }
  return out
}

/**
 * 从当天新词派生「语境选词」:中文释义 → 选英文词(4 选 1)。
 * 干扰项从词库随机取其他词。需要词库 map 提供 meaning/word。
 */
export function deriveMatch(
  plan: DayPlan,
  wordMap: Record<string, Word>,
  bank: Word[],
  limit = 5
): MatchItem[] {
  const words = plan.vocab.map((w) => wordMap[w]).filter(Boolean) as Word[]
  if (words.length === 0) return []

  // 干扰词池:词库中除当日词以外的词
  const dayWordSet = new Set(words.map((w) => w.word))
  const distractorPool = bank.filter((w) => !dayWordSet.has(w.word))

  const out: MatchItem[] = []
  const targets = shuffle(words).slice(0, Math.min(limit, words.length))
  for (const target of targets) {
    const cue = target.meaning.split(/[;;,，]/)[0].trim() || target.meaning
    const distractors = shuffle(distractorPool)
      .slice(0, 3)
      .map((d) => d.word)
    const options = shuffle([target.word, ...distractors])
    out.push({
      id: `mt-${out.length}-${target.word}`,
      cue,
      options,
      answer: options.indexOf(target.word),
      explain: `${target.word} /${target.phonetic}/ — ${target.meaning}`,
    })
  }
  return out
}

/**
 * 从翻译句派生「听力听写」:挖空 1~2 个较长的实词(长度≥4,跳过虚词)。
 */
const STOP_BLANK = new Set(
  `the a an of to in on at by for with from and or but is am are was were be been being have has had do does did will would can could should may might must i you he she it we they this that these those my your his her our their as so not no`.split(
    /\s+/
  )
)

export function deriveDictation(plan: DayPlan, limit = 4): DictationItem[] {
  const out: DictationItem[] = []
  for (const t of plan.translation) {
    const cleaned = cleanSentence(t.en)
    const tokens = cleaned.split(/\s+/).filter(Boolean)
    if (tokens.length < 4) continue
    // 可挖空的候选:长度≥4 且非虚词,去掉标点后比较
    const candidates: number[] = tokens
      .map((tok, i) => {
        const bare = tok.replace(/[.,!?:;'"()]+/g, '').toLowerCase()
        return { i, bare, len: bare.length }
      })
      .filter((x) => x.len >= 4 && !STOP_BLANK.has(x.bare))
      .map((x) => x.i)
    if (candidates.length === 0) continue
    const blanks = shuffle(candidates).slice(0, Math.min(2, candidates.length)).sort()
    out.push({
      id: `dt-${out.length}-${t.en.slice(0, 6)}`,
      en: cleaned,
      blanks,
      translation: t.zh,
    })
    if (out.length >= limit) break
  }
  return out
}
