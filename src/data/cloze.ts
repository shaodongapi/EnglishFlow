import type { ClozePassage } from '../types'
import { CLOZE_A } from './cloze-A'
import { CLOZE_B } from './cloze-B'
import { CLOZE_C } from './cloze-C'
import { CLOZE_D } from './cloze-D'

// 完形填空,每天 1 篇(8 空),覆盖 Day 1-60。被 plan.ts 动态 import。
export const CLOZE: Record<number, ClozePassage> = {
  ...CLOZE_A,
  ...CLOZE_B,
  ...CLOZE_C,
  ...CLOZE_D,
}
