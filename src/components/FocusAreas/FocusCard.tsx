import { useRef, useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Activity, LayoutGrid, Cloud } from 'lucide-react'
import type { FocusArea } from '../../data/content'
import { useReducedMotion } from '../../hooks/useReducedMotion'

const iconMap = {
  brain: Brain,
  activity: Activity,
  grid: LayoutGrid,
  cloud: Cloud,
}

export function FocusCard({ icon, title, description }: FocusArea) {
  const Icon = iconMap[icon]
  const skip = useReducedMotion()
  const cardRef = useRef<HTMLDivElement>(null)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 })

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (skip || !cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }, [skip])

  return (
    <motion.div
      ref={cardRef}
      className="focus-card"
      onMouseMove={handleMouseMove}
      whileHover={skip ? {} : { y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        '--glow-x': `${glowPos.x}%`,
        '--glow-y': `${glowPos.y}%`,
      } as React.CSSProperties}
    >
      <div className="focus-card-glow" />
      <div className="focus-icon">
        <Icon size={24} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}
