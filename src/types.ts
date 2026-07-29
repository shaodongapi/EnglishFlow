// 英语等级 —— 数据隔离用,扩展四级只加 cet4 词库即可
export type Level = 'degree' | 'cet4'

// ===== 学习交互类型(一切围绕大纲:每个阶段决定启用哪些) =====
export type Interaction =
  | 'vocab' // 单词卡片(SM-2)
  | 'spelling' // 单词默写(看释义拼写)
  | 'grammar' // 语法微课
  | 'reading' // 阅读
  | 'scramble' // 句子拼装/语序
  | 'match' // 语境选词
  | 'dictation' // 听力听写
  | 'errorid' // 挑错
  | 'cloze' // 完形
  | 'translation' // 翻译
  | 'writing' // 写作

// ===== 大纲阶段:难度 / 每日词量 / 阅读词数区间 / 启用模块,全由此驱动 =====
export interface Phase {
  id: string
  name: string
  goal: string
  /** 难度等级 1-5(⭐) */
  level: number
  dayStart: number
  dayEnd: number
  vocabPerDay: number
  /** 阅读目标词数区间 [min, max] */
  readingWords: [number, number]
  /** 本阶段启用的模块(顺序即推荐学习顺序) */
  modules: Interaction[]
}

export interface Word {
  word: string
  phonetic: string
  pos: string
  meaning: string
  example: string
  exampleTrans: string
  level: Level
  frequency: number // 1=核心高频
  tags?: string[]
}

// 单词学习记录 (持久化到 IndexedDB)
export interface WordProgress {
  word: string
  /** SM-2 ease factor */
  ease: number
  /** 间隔天数 */
  interval: number
  /** 上次复习的 day index (从首次学习起算的天数) */
  lastDay: number
  /** 下次到期 day index */
  due: number
  /** 复习次数 */
  reps: number
  /** 0=新词, 1+=学习中, -1=已掌握 */
  stage: number
  /** 累计错误次数 */
  lapses: number
}

export interface Question {
  id: string
  type: 'single' | 'multi' | 'judge' | 'blank'
  stem: string
  options?: string[]
  answer: number | number[] | string
  /** 折叠式详解 */
  explain: string
}

export interface ReadingPassage {
  title: string
  text: string
  questions: Question[]
}

export interface TranslationItem {
  en: string
  zh: string
  tip?: string
}

export interface GrammarLesson {
  title: string
  /** markdown-ish 知识点说明 */
  body: string
  questions: Question[]
}

export interface WritingTask {
  prompt: string
  /** 填空模板 (离线) */
  template?: string
  /** 范文 (离线对照) */
  sample?: string
  /** 要求用到的关键词 */
  keyWords?: string[]
}

/** 挑错题(Error Identification):一句完整句子,4 段画线,其中一段有错 */
export interface ErrorIDItem {
  id: string
  /** 完整句子(可读,供整体理解) */
  sentence: string
  /** 画线段 A/B/C/D */
  segments: { key: string; text: string }[]
  /** 错误段的 key,如 "B" */
  answer: string
  /** 正确形式 */
  correction?: string
  explain: string
}

/** 完形填空的一道空 */
export interface ClozeBlank {
  no: number
  options: string[]
  answer: number // 0-based
  explain: string
}

/** 完形填空篇章:text 中用 __序号__ 标空 */
export interface ClozePassage {
  title: string
  text: string
  blanks: ClozeBlank[]
}

// ===== 新增交互数据模型 =====

/** 句子拼装/语序:给出打乱的词块,学习者拼回正确语序(专治中英语序差异) */
export interface ScrambleItem {
  id: string
  /** 正确语序的词/语块序列 */
  words: string[]
  /** 中文释义(题面) */
  translation: string
  tip?: string
}

/** 语境选词:中文释义(或 emoji/场景)→ 选英文词,4 选 1 */
export interface MatchItem {
  id: string
  /** 题面:中文释义 / emoji / 场景描述 */
  cue: string
  /** 候选(英文词或短语) */
  options: string[]
  /** 正确选项 index(0-based) */
  answer: number
  explain?: string
}

/** 听力听写:🔊 朗读英文句,挖空 1~2 个实词让学习者填 */
export interface DictationItem {
  id: string
  /** 完整英文句(供朗读与挖空) */
  en: string
  /** 需要挖空填写的词(en 按空格切分后的 index) */
  blanks: number[]
  translation: string
}

export interface DayPlan {
  day: number
  /** 所属大纲阶段 id(由组装时注入) */
  phaseId?: string
  /** 难度等级 1-5(由阶段决定) */
  level?: number
  title: string
  vocab: string[] // 引用 Word.word
  grammar: GrammarLesson
  reading: ReadingPassage
  translation: TranslationItem[]
  writing: WritingTask
  /** 挑错题(可选,由 errorid 数据注入) */
  errorId?: ErrorIDItem[]
  /** 完形填空(可选,由 cloze 数据注入) */
  cloze?: ClozePassage
  /** 句子拼装(手写精选;缺失时由 derive.ts 从 translation 派生) */
  scramble?: ScrambleItem[]
  /** 语境选词(手写精选;缺失时由 derive.ts 从 vocab 派生) */
  match?: MatchItem[]
  /** 听力听写(手写精选;缺失时由 derive.ts 从 translation 派生) */
  dictation?: DictationItem[]
}

export interface Phrase {
  phrase: string
  meaning: string
}

// ===== 错题本 =====

/** 错题大类:题目错题 / 单词没记住 */
export type MistakeCategory = 'question' | 'word'

/** 错题状态 */
export type MistakeStatus = 'wrong' | 'mastered'

/**
 * 一条错题记录。按 `source:ref` 去重:同一题/同一个词反复错会累加 wrongCount,
 * 而不是产生多条。ts 用 Date.now() 记录最近一次出错时间。
 */
export interface Mistake {
  /** 稳定 id = `${source}:${ref}`,用于去重 */
  id: string
  category: MistakeCategory
  /** 来源模块标签(中文):语法/阅读/选词/拼装/听写/完形/挑错/默写 */
  source: string
  /** 稳定引用:题目 id 或单词 */
  ref: string
  /** 题干 / 单词释义(展示用) */
  stem: string
  /** 学习者的错误答案 */
  yourAnswer: string
  /** 正确答案 */
  correctAnswer: string
  /** 解析(可选) */
  explain?: string
  /** 出错时所在学习日 */
  day?: number
  /** 最近一次出错时间戳 */
  ts: number
  /** wrong=未掌握 / mastered=已掌握 */
  status: MistakeStatus
  /** 累计出错次数 */
  wrongCount: number
}
