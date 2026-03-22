import { useState, useEffect, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface GlitchTextProps {
  text: string
  className?: string
  delay?: number
}

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'

export function GlitchText({ text, className = '', delay = 0 }: GlitchTextProps) {
  const skip = useReducedMotion()
  const [display, setDisplay] = useState(text)
  const [hasRevealed, setHasRevealed] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  const scramble = useCallback(() => {
    if (hasRevealed) return
    let iteration = 0
    const interval = setInterval(() => {
      setDisplay(
        text
          .split('')
          .map((char, i) => {
            if (char === ' ') return ' '
            if (i < iteration) return text[i]
            return CHARS[Math.floor(Math.random() * CHARS.length)]
          })
          .join('')
      )
      if (iteration >= text.length) {
        clearInterval(interval)
        setHasRevealed(true)
      }
      iteration += 1 / 3
    }, 30)
    return () => clearInterval(interval)
  }, [text, hasRevealed])

  useEffect(() => {
    if (skip) {
      setDisplay(text)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRevealed) {
          const timer = setTimeout(scramble, delay * 1000)
          return () => clearTimeout(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [skip, scramble, delay, hasRevealed])

  return (
    <motion.span
      ref={ref}
      className={className}
      style={{ fontFamily: 'var(--font-mono)' }}
    >
      {display}
    </motion.span>
  )
}
