import type { WordProgress } from '../types'

/**
 * 简化版 SM-2 间隔重复算法
 * 自评等级:0=不认识(重来) 1=模糊(困难) 2=认识(简单)
 */

export function newProgress(word: string, todayDay: number): WordProgress {
  return {
    word,
    ease: 2.5,
    interval: 0,
    lastDay: todayDay,
    due: todayDay, // 新词当天到期
    reps: 0,
    stage: 0,
    lapses: 0,
  }
}

/** 自评后更新进度。grade: 0=again 1=hard 2=easy */
export function review(p: WordProgress, grade: 0 | 1 | 2, todayDay: number): WordProgress {
  const next = { ...p }
  next.lastDay = todayDay
  next.reps += 1

  if (grade === 0) {
    // 不认识:重置,10 分钟后(用 0.0 天表示当天内重排),ease 略降
    next.interval = 0
    next.due = todayDay // 当天队列里再出现
    next.stage = 1
    next.lapses += 1
    next.ease = Math.max(1.3, next.ease - 0.2)
    return next
  }

  if (p.stage === 0 || p.reps === 1) {
    // 第一次学会
    next.interval = grade === 2 ? 2 : 1
  } else {
    const factor = grade === 2 ? next.ease : 1.2
    next.interval = Math.max(1, Math.round(p.interval * factor))
  }

  if (grade === 2) {
    next.ease = Math.min(3.0, next.ease + 0.1)
  }

  next.due = todayDay + next.interval
  // 连续答对 5 次以上且间隔 >= 21 天视为掌握
  next.stage = next.interval >= 21 && next.lapses === 0 ? -1 : 2
  return next
}

/** 该词今天是否到期 */
export function isDue(p: WordProgress | undefined, todayDay: number): boolean {
  if (!p) return true
  return p.due <= todayDay && p.stage !== -1
}
