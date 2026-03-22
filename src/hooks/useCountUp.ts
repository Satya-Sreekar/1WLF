import { useState, useEffect, useRef } from 'react'
import { useReducedMotion } from './useReducedMotion'

export function useCountUp(target: number, duration = 2000, startOnView = false): [number, React.RefObject<HTMLElement | null>] {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLElement | null>(null)
  const hasStarted = useRef(false)
  const skip = useReducedMotion()

  useEffect(() => {
    if (skip) {
      setValue(target)
      return
    }

    if (!startOnView) {
      animate()
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true
          animate()
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, startOnView, skip])

  function animate() {
    const start = performance.now()
    function tick(now: number) {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  return [value, ref]
}
