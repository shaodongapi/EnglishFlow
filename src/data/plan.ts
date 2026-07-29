import type { DayPlan } from '../types'
import { getBank } from '../core/wordBank'
import { PHASE_0 } from './phase0'
import { PHASE_A } from './phaseA'
import { PHASE_B } from './phaseB'
import { PHASE_C } from './phaseC'
import { PHASE_D } from './phaseD'
import { PHASE_E } from './phaseE'
import { phaseOfDay, TOTAL_DAYS } from './syllabus'

export { TOTAL_DAYS }

// ===== 大纲移位常量 =====
// Phase 0(启蒙)占用 Day 1–14;原考纲内容(authored day 1–60)整体后移 +14,
// 落在 Day 15–74。exam 数据(阅读升级/挑错/完形)按 authored day 注入到未移位的
// AUTHORED 上,再统一移位——因此键映射不会破坏。
const AUTHORED_SHIFT = 14

// 虚词/语法词黑名单:这些最高频但作为"生词卡"无意义(冠词/代词/介词/连词/助动词/情态)
const STOP = new Set(
  `the a an and or but if of to in on at by for with from as about into over after because when while where what which who whom whose that this these those it its he him his she her they them their we us our you your my mine be am is are was were been being do does did have has had having will would shall should can could may might must not no yes`.split(
    /\s+/
  )
)

// 实义词池(去虚词 + 按词频升序),作为每日生词来源。
// 词库懒加载后由 hydrateVocab() 计算;模块加载期保持空。
let VOCAB_POOL: string[] = []

// ===== Day 1 样例完整内容 =====
export const DAY1: DayPlan = {
  day: 1,
  title: 'New Beginnings · 新的开始',
  vocab: [],
  grammar: {
    title: '不定冠词 a / an',
    body: `用 **a** 接辅音音素开头的词,用 **an** 接元音音素开头的词。
判断依据是 **发音**,不是字母。

- a **university** (/ˈjuːn.../ 辅音音素 ✅)
- an **hour** (/aʊ/ 元音音素, h 不发音 ✅)
- an **MP3** (/em/ 元音音素 ✅)

口诀:**看音标,不看字母。**`,
    questions: [
      {
        id: 'g1-1',
        type: 'single',
        stem: 'She is ___ honest student.',
        options: ['A) a', 'B) an'],
        answer: 1,
        explain:
          '**B) an**。honest 中 h 不发音,首音素是元音 /ɒ/,因此用 an。同理 hour, honor。',
      },
      {
        id: 'g1-2',
        type: 'single',
        stem: 'I bought ___ useful tool.',
        options: ['A) a', 'B) an'],
        answer: 0,
        explain:
          '**A) a**。useful 首音素是辅音 /j/ (字母 u 读 /juː/),用 a。比较:an umbrella(此处 u 发 /ʌ/)。',
      },
      {
        id: 'g1-3',
        type: 'single',
        stem: 'There is ___ "s" in the word "sun".',
        options: ['A) a', 'B) an'],
        answer: 1,
        explain:
          '**B) an**。字母 s 单独读作 /es/,以元音 /e/ 开头,因此 an "s"。类似:an "f" (/ef/), an "m" (/em/)。',
      },
    ],
  },
  reading: {
    title: 'Why Daily Practice Works',
    text: `Learning a new language opens doors to new cultures. Many adults worry they are too old to learn, but research shows that regular practice matters more than age. Just 20 minutes a day can lead to steady progress over time. The key is to build a habit rather than to study for long hours once a week.`,
    questions: [
      {
        id: 'r1-1',
        type: 'single',
        stem: 'What is the main idea of the passage?',
        options: [
          'A) Age is the biggest barrier to learning',
          'B) Daily practice is key to language learning',
          'C) Adults cannot learn new languages',
          'D) 20 minutes is too short to learn',
        ],
        answer: 1,
        explain:
          '**B**。文章反复强调 regular practice / build a habit,核心论点是每天练习比年龄或时长更重要。',
      },
      {
        id: 'r1-2',
        type: 'blank',
        stem: 'The word "steady" most likely means ___ (中文).',
        answer: '稳定的 / 持续的',
        explain:
          '从 "steady progress over time" 推断,steady 修饰 progress(进步),意为"稳定持续的"。',
      },
      {
        id: 'r1-3',
        type: 'judge',
        stem: '判断对错:The passage suggests that studying for long hours once a week is the best way.',
        options: ['正确', '错误'],
        answer: 1,
        explain:
          '**错误**。文章最后一句明确说 build a habit 比一周突击一次更好,而非支持突击。',
      },
    ],
  },
  translation: [
    {
      en: 'Regular practice matters more than talent.',
      zh: '坚持练习比天赋更重要。',
      tip: 'matter v. 要紧、重要',
    },
    {
      en: 'She has the ability to solve problems quickly.',
      zh: '她有能力快速解决问题。',
      tip: 'have the ability to do sth.',
    },
    {
      en: "Don't abandon your dream because of one failure.",
      zh: '不要因为一次失败就放弃你的梦想。',
      tip: 'abandon = give up',
    },
  ],
  writing: {
    prompt: '用今天学的词 (abandon / ability / absorb) 写 3 句话,介绍"为什么我要学好英语"。',
    template: 'I will not ____ my goal. Learning English is a useful ____. I can ____ new ideas from books.',
    sample:
      'I will not abandon my goal. Learning English is a useful ability. I can absorb new ideas from English books, which benefits my career.',
    keyWords: ['abandon', 'ability', 'absorb'],
  },
}

// 原考纲内容(authored day 1–60),exam 数据将注入到这里(按 authored day)。
const AUTHORED: DayPlan[] = [
  DAY1,
  ...PHASE_A,
  ...PHASE_B,
  ...PHASE_C,
  ...PHASE_D,
  ...PHASE_E,
]

/** 全局学习计划(Day 1 ~ TOTAL_DAYS),按天升序。 */
let PLAN: DayPlan[] = []

/** 把 Phase 0 + 移位后的 AUTHORED 重新组装成按天升序的 PLAN,并写入阶段元信息。 */
function reassemble(): void {
  const phase0 = PHASE_0.map((p) => ({ ...p }))
  const shifted = AUTHORED.map((p) => ({ ...p, day: p.day + AUTHORED_SHIFT }))
  ;[...phase0, ...shifted].forEach((p) => {
    const ph = phaseOfDay(p.day)
    p.phaseId = ph.id
    p.level = ph.level
  })
  PLAN = [...phase0, ...shifted].sort((a, b) => a.day - b.day)
  // 词库若已就绪,立即按阶段重新分配(防止 reassemble 重建对象后丢词)
  if (VOCAB_POOL.length > 0) assignVocab()
}

// 模块加载即组装一次(此时 vocab 为空 / exam 未注入,后续 hydrate* 会重建)。
reassemble()

/** 按阶段每日词量,用游标顺序切词库。Phase 0 拿最高频内容词。 */
function assignVocab(): void {
  let cursor = 0
  PLAN.forEach((p) => {
    const n = phaseOfDay(p.day).vocabPerDay
    p.vocab = VOCAB_POOL.slice(cursor, cursor + n)
    cursor += n
  })
}

/**
 * 词库懒加载完成后调用:计算实义词池(去虚词、按词频升序)并按阶段分配每日生词。
 * 幂等——多次调用只会重复赋同样的值。
 */
export function hydrateVocab(): void {
  if (VOCAB_POOL.length === 0) {
    VOCAB_POOL = getBank()
      .filter((w) => !STOP.has(w.word))
      .sort((a, b) => a.frequency - b.frequency || a.word.localeCompare(b.word))
      .map((w) => w.word)
    assignVocab()
  }
}

// 考试级内容(阅读升级 / 挑错 / 完形)懒加载注入。按 authored day 注入到 AUTHORED,
// 再重新组装 PLAN(移位 + 阶段元信息)。与词库并行加载,不进主 chunk。
let examLoaded = false
export async function hydrateExam(): Promise<void> {
  if (examLoaded) return
  const [{ READING_EXAM }, { ERROR_ID }, { CLOZE }] = await Promise.all([
    import('./reading-exam'),
    import('./errorid'),
    import('./cloze'),
  ])
  // 注入到未移位的 AUTHORED(authored day 1–60),键与数据文件一致
  AUTHORED.forEach((p) => {
    if (READING_EXAM[p.day]) p.reading = READING_EXAM[p.day]
    if (ERROR_ID[p.day]) p.errorId = ERROR_ID[p.day]
    if (CLOZE[p.day]) p.cloze = CLOZE[p.day]
  })
  examLoaded = true
  reassemble()
}

export function getDay(day: number): DayPlan | undefined {
  return PLAN.find((d) => d.day === day)
}
