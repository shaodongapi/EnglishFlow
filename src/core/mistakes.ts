import type { Mistake, MistakeCategory } from '../types'
import {
  clearMistakes,
  deleteMistake,
  getAllMistakes,
  getMistake,
  putMistake,
} from './db'

/** 来源模块 → 中文标签(展示与分类用) */
export const SOURCE_LABEL: Record<string, string> = {
  grammar: '语法',
  reading: '阅读',
  match: '选词',
  scramble: '拼装',
  dictation: '听写',
  cloze: '完形',
  errorid: '挑错',
  spelling: '默写',
}

export interface MistakeInput {
  category: MistakeCategory
  source: string // SOURCE_LABEL 的 key,如 'grammar'
  ref: string // 题目 id 或单词
  stem: string
  yourAnswer: string
  correctAnswer: string
  explain?: string
  day?: number
}

/**
 * 记录一条错题。按 `source:ref` 去重:
 * - 已存在:wrongCount +1,ts 更新,status 重置为 'wrong'(重新未掌握),
 *   yourAnswer 更新为本次错误答案。
 * - 不存在:新建,wrongCount = 1。
 * 重复答对不会调用本函数,因此不会误删记录。
 */
export async function recordMistake(input: MistakeInput): Promise<void> {
  const id = `${input.source}:${input.ref}`
  const existing = await getMistake(id)
  const now = Date.now()
  if (existing) {
    await putMistake({
      ...existing,
      yourAnswer: input.yourAnswer,
      correctAnswer: input.correctAnswer || existing.correctAnswer,
      explain: input.explain ?? existing.explain,
      day: input.day ?? existing.day,
      ts: now,
      status: 'wrong',
      wrongCount: existing.wrongCount + 1,
    })
    return
  }
  const m: Mistake = {
    id,
    category: input.category,
    source: input.source,
    ref: input.ref,
    stem: input.stem,
    yourAnswer: input.yourAnswer,
    correctAnswer: input.correctAnswer,
    explain: input.explain,
    day: input.day,
    ts: now,
    status: 'wrong',
    wrongCount: 1,
  }
  await putMistake(m)
}

/** 标记为已掌握(不删除,可在「显示已掌握」里查看) */
export async function markMastered(id: string, mastered = true): Promise<void> {
  const m = await getMistake(id)
  if (!m) return
  await putMistake({ ...m, status: mastered ? 'mastered' : 'wrong' })
}

export async function removeMistake(id: string): Promise<void> {
  await deleteMistake(id)
}

export async function clearAllMistakes(): Promise<void> {
  await clearMistakes()
}

/** 全部错题,按最近出错时间倒序 */
export async function listMistakes(): Promise<Mistake[]> {
  const all = await getAllMistakes()
  return all.sort((a, b) => b.ts - a.ts)
}

export interface MistakeStats {
  total: number
  question: number
  word: number
  mastered: number
  /** 各来源未掌握计数 */
  bySource: Record<string, number>
}

export function summarize(mistakes: Mistake[]): MistakeStats {
  const active = mistakes.filter((m) => m.status === 'wrong')
  const bySource: Record<string, number> = {}
  let question = 0
  let word = 0
  let mastered = 0
  for (const m of mistakes) {
    if (m.status === 'mastered') {
      mastered++
      continue
    }
    if (m.category === 'word') word++
    else question++
    bySource[m.source] = (bySource[m.source] || 0) + 1
  }
  return { total: active.length, question, word, mastered, bySource }
}
