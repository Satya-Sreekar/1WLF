import { useRef, useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Building2, ClipboardList, Puzzle, Zap, Timer, FlaskConical,
  ScrollText, BellRing, BarChart3, FileDown, Mail, Search,
  LockKeyhole, Landmark, FolderOpen, CheckCircle2, RadioTower, Clock,
} from 'lucide-react'
import type { Feature } from '../../tms-content'
import { useReducedMotion } from '../../../hooks/useReducedMotion'

const iconMap: Record<string, React.ComponentType<{ size: number }>> = {
  'building-2': Building2,
  'clipboard-list': ClipboardList,
  'puzzle': Puzzle,
  'zap': Zap,
  'timer': Timer,
  'flask-conical': FlaskConical,
  'scroll-text': ScrollText,
  'bell-ring': BellRing,
  'bar-chart-3': BarChart3,
  'file-down': FileDown,
  'mail': Mail,
  'search': Search,
  'lock-keyhole': LockKeyhole,
  'landmark': Landmark,
  'folder-open': FolderOpen,
  'check-circle-2': CheckCircle2,
  'radio-tower': RadioTower,
  'clock': Clock,
}

export function FeatureCard({ icon, title, description }: Feature) {
  const Icon = iconMap[icon] ?? Zap
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
      className="feature-card"
      onMouseMove={handleMouseMove}
      whileHover={skip ? {} : { y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        '--glow-x': `${glowPos.x}%`,
        '--glow-y': `${glowPos.y}%`,
      } as React.CSSProperties}
    >
      <div className="feature-card-glow" />
      <div className="feature-icon">
        <Icon size={22} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </motion.div>
  )
}
