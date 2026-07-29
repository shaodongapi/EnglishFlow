import { useEffect, useState } from 'react'
import { getMeta, setMeta } from './db'

const FIRST_USE_KEY = 'first_use_ts'

/** 从首次打开 App 起算的天数索引 (0-based) */
export function useTodayDay(): [number, boolean] {
  const [day, setDay] = useState(0)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      let first = await getMeta<number>(FIRST_USE_KEY)
      const now = Date.now()
      if (!first) {
        first = now
        await setMeta(FIRST_USE_KEY, first)
      }
      setDay(Math.floor((now - first) / 86400000))
      setReady(true)
    })()
  }, [])

  return [day, ready]
}
