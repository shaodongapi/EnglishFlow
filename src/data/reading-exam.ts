import type { ReadingPassage } from '../types'
import { READING_EXAM_A } from './reading-exam-A'
import { READING_EXAM_B } from './reading-exam-B'
import { READING_EXAM_C } from './reading-exam-C'
import { READING_EXAM_D } from './reading-exam-D'

// 考试级阅读(250-300 词/篇),按天覆盖 Day 1-60。被 plan.ts 动态 import(懒加载)。
export const READING_EXAM: Record<number, ReadingPassage> = {
  ...READING_EXAM_A,
  ...READING_EXAM_B,
  ...READING_EXAM_C,
  ...READING_EXAM_D,
}
