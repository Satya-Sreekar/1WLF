import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'left' | 'right'
  delay?: number
  className?: string
}

const directionMap = {
  up: { y: 50, x: 0 },
  left: { y: 0, x: -50 },
  right: { y: 0, x: 50 },
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className,
}: ScrollRevealProps) {
  const skip = useReducedMotion()
  const offset = directionMap[direction]

  return (
    <motion.div
      initial={skip ? {} : { opacity: 0, filter: 'blur(4px)', ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
