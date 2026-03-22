import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import './loader.css'

interface LoaderProps {
  onComplete: () => void
}

/**
 * Plain dark overlay that covers everything except the hero logo
 * (which has z-index above this). Fades out to reveal the page.
 */
export function Loader({ onComplete }: LoaderProps) {
  const skip = useReducedMotion()

  if (skip) {
    onComplete()
    return null
  }

  return (
    <motion.div
      className="loader-overlay"
      aria-hidden="true"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 1.8, ease: [0.4, 0, 0.2, 1] }}
      onAnimationComplete={onComplete}
    />
  )
}
