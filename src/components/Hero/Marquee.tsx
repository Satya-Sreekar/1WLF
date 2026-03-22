import { useReducedMotion } from '../hooks/useReducedMotion'
import '../styles/marquee.css'

interface MarqueeProps {
  items: string[]
  speed?: number
}

export function Marquee({ items, speed = 30 }: MarqueeProps) {
  const skip = useReducedMotion()
  const repeated = [...items, ...items]

  return (
    <div className="marquee-wrapper" aria-hidden="true">
      <div
        className="marquee-track"
        style={{
          animationDuration: skip ? '0s' : `${speed}s`,
          animationPlayState: skip ? 'paused' : 'running',
        }}
      >
        {repeated.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
