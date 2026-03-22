import { useMemo } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface ParticleData {
  left: string
  size: string
  delay: string
  duration: string
  drift: string
}

export function BackgroundLayers() {
  const reducedMotion = useReducedMotion()

  const particles = useMemo(() => {
    if (reducedMotion) return []
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const count = isMobile ? 12 : 30
    const result: ParticleData[] = []
    for (let i = 0; i < count; i++) {
      const size = (Math.random() * 2 + 0.5) + 'px'
      result.push({
        left: Math.random() * 100 + 'vw',
        size,
        delay: (Math.random() * 20) + 's',
        duration: (Math.random() * 15 + 12) + 's',
        drift: (Math.random() * 30 - 15) + 'vw',
      })
    }
    return result
  }, [reducedMotion])

  return (
    <>
      <div className="bg-noise" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <div className="floating-particles" aria-hidden="true">
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
              '--drift': p.drift,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  )
}
