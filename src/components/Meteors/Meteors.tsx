import { useMemo } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import './meteors.css'

interface MeteorData {
  left: string
  top: string
  delay: string
  duration: string
  size: string
}

export function Meteors() {
  const skip = useReducedMotion()

  const meteors = useMemo(() => {
    if (skip) return []
    const result: MeteorData[] = []
    for (let i = 0; i < 20; i++) {
      result.push({
        left: Math.random() * 100 + '%',
        top: Math.random() * 40 + '%',
        delay: (Math.random() * 12) + 's',
        duration: (Math.random() * 1.5 + 0.8) + 's',
        size: (Math.random() * 1.5 + 0.5) + 'px',
      })
    }
    return result
  }, [skip])

  if (skip) return null

  return (
    <div className="meteors-container" aria-hidden="true">
      {meteors.map((m, i) => (
        <div
          key={i}
          className="meteor"
          style={{
            left: m.left,
            top: m.top,
            animationDelay: m.delay,
            animationDuration: m.duration,
            width: m.size,
            height: m.size,
          }}
        />
      ))}
    </div>
  )
}
