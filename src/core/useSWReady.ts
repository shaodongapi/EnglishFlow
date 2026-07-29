import { useEffect, useState } from 'react'

/**
 * 返回 true 当 Service Worker 已激活并控制本页。
 * 此时预缓存已完成,断网(离线)后仍可正常使用。
 */
export function useSWReady(): boolean {
  const [ready, setReady] = useState<boolean>(
    typeof navigator !== 'undefined' && !!navigator.serviceWorker?.controller
  )

  useEffect(() => {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return
    const sw = navigator.serviceWorker
    const check = () => setReady(!!sw.controller)
    check()
    sw.addEventListener('controllerchange', check)
    sw.ready.then(check).catch(() => {})
    return () => sw.removeEventListener('controllerchange', check)
  }, [])

  return ready
}
