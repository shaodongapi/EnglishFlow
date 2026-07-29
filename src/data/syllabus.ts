import type { Interaction, Phase } from '../types'

/**
 * 大纲(Syllabus)—— 一等公民。
 * 一切围绕它:难度等级、每日词量、阅读词数区间、本阶段启用的模块,
 * 全部由「当前所处阶段」决定,从易到难逐步递进。
 *
 * 天数 1–74。原考纲内容(authored day 1–60)整体后移 +14 落在 15–74;
 * 1–14 为新增的「启蒙地基」Phase 0。
 */
export const SYLLABUS: Phase[] = [
  {
    id: 'p0',
    name: '启蒙地基',
    goal: '字母音标 · 自然拼读 · 最高频词 · 主谓宾简单句 · 听读跟读',
    level: 1,
    dayStart: 1,
    dayEnd: 14,
    vocabPerDay: 10,
    readingWords: [30, 60],
    modules: ['vocab', 'spelling', 'scramble', 'match', 'grammar', 'reading'],
  },
  {
    id: 'p1',
    name: '基础语法',
    goal: '冠词 / 代词 / 介词 / there be / 一般现在时与进行时',
    level: 2,
    dayStart: 15,
    dayEnd: 28,
    vocabPerDay: 12,
    readingWords: [60, 110],
    modules: ['vocab', 'spelling', 'grammar', 'match', 'scramble', 'reading', 'translation'],
  },
  {
    id: 'p2',
    name: '时态语态',
    goal: '八大时态 + 被动语态',
    level: 3,
    dayStart: 29,
    dayEnd: 41,
    vocabPerDay: 15,
    readingWords: [110, 180],
    modules: ['vocab', 'spelling', 'grammar', 'reading', 'dictation', 'translation', 'errorid'],
  },
  {
    id: 'p3',
    name: '从句专题',
    goal: '名词性 / 状语 / 定语 三大从句(学位英语重点)',
    level: 4,
    dayStart: 42,
    dayEnd: 53,
    vocabPerDay: 18,
    readingWords: [180, 250],
    modules: ['vocab', 'spelling', 'grammar', 'reading', 'dictation', 'errorid', 'cloze', 'translation'],
  },
  {
    id: 'p4',
    name: '非谓语·特殊句式',
    goal: '不定式 / 动名词 / 分词 / 虚拟语气 / 倒装强调',
    level: 5,
    dayStart: 54,
    dayEnd: 65,
    vocabPerDay: 22,
    readingWords: [250, 300],
    modules: ['vocab', 'spelling', 'grammar', 'reading', 'errorid', 'cloze', 'translation', 'writing'],
  },
  {
    id: 'p5',
    name: '考前冲刺',
    goal: '真题模考 · 查漏补缺',
    level: 5,
    dayStart: 66,
    dayEnd: 74,
    vocabPerDay: 20,
    readingWords: [250, 300],
    modules: ['vocab', 'spelling', 'reading', 'errorid', 'cloze', 'translation', 'writing'],
  },
]

/** 模块 → { label, ico } 用于 Tab 栏与 Dashboard 任务卡 */
export const MODULE_LABELS: Record<Interaction, { label: string; ico: string }> = {
  vocab: { label: '单词', ico: '📖' },
  spelling: { label: '默写', ico: '🔤' },
  grammar: { label: '语法', ico: '✏️' },
  reading: { label: '阅读', ico: '📚' },
  scramble: { label: '拼装', ico: '🧩' },
  match: { label: '选词', ico: '🎯' },
  dictation: { label: '听写', ico: '👂' },
  errorid: { label: '挑错', ico: '🔍' },
  cloze: { label: '完形', ico: '🔲' },
  translation: { label: '翻译', ico: '🔁' },
  writing: { label: '写作', ico: '✍️' },
}

/** 总学习天数(= 最后一阶段 dayEnd) */
export const TOTAL_DAYS = SYLLABUS[SYLLABUS.length - 1].dayEnd

/** 某天属于哪个阶段(天越界则夹到首/尾阶段) */
export function phaseOfDay(day: number): Phase {
  for (const p of SYLLABUS) {
    if (day >= p.dayStart && day <= p.dayEnd) return p
  }
  return day < SYLLABUS[0].dayStart ? SYLLABUS[0] : SYLLABUS[SYLLABUS.length - 1]
}

/** 某天在所属阶段内的进度 0~1 */
export function phaseProgress(day: number): number {
  const p = phaseOfDay(day)
  const span = p.dayEnd - p.dayStart
  if (span <= 0) return 1
  return Math.min(1, Math.max(0, (day - p.dayStart) / span))
}

/** 某天在整个大纲中的进度 0~1 */
export function syllabusProgress(day: number): number {
  return Math.min(1, Math.max(0, day / TOTAL_DAYS))
}
