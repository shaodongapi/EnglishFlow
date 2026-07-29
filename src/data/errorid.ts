import type { ErrorIDItem } from '../types'
import { ERROR_ID_A } from './errorid-A'
import { ERROR_ID_B } from './errorid-B'
import { ERROR_ID_C } from './errorid-C'
import { ERROR_ID_D } from './errorid-D'

// 挑错题(Error Identification),每天 4 题,覆盖 Day 1-60。被 plan.ts 动态 import。
export const ERROR_ID: Record<number, ErrorIDItem[]> = {
  ...ERROR_ID_A,
  ...ERROR_ID_B,
  ...ERROR_ID_C,
  ...ERROR_ID_D,
}
