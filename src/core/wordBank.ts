import type { Word } from '../types'

// 词库运行时懒加载容器:主 chunk 不再静态 import words-degree,
// 改为 ensureBank() 动态 import,加载完成后同步 getter 即可安全使用。
let bank: Word[] = []
let map: Record<string, Word> = {}
let p: Promise<void> | null = null

/** 同步获取词库数组(需在 ensureBank() 完成后调用)。 */
export function getBank(): Word[] {
  return bank
}

/** 同步获取 word -> Word 映射(需在 ensureBank() 完成后调用)。 */
export function getMap(): Record<string, Word> {
  return map
}

/** 动态加载词库 + 核心词例句(幂等)。两者并行懒加载,完成后填充 bank / map。 */
export function ensureBank(): Promise<void> {
  if (p) return p
  p = Promise.all([import('../data/words-degree'), import('../data/examples')]).then(
    ([mw, me]) => {
      const ex = me.EXAMPLES
      // 用例句覆盖核心词的空 example / exampleTrans
      bank = mw.DEGREE_WORDS.map((w) =>
        ex[w.word] ? { ...w, example: ex[w.word].example, exampleTrans: ex[w.word].exampleTrans } : w
      )
      map = Object.fromEntries(bank.map((w) => [w.word, w]))
    }
  )
  return p
}
