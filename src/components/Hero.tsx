import { motion } from 'framer-motion'
import { Terminal } from './Terminal'
import { useReducedMotion } from '../hooks/useReducedMotion'
import '../styles/hero.css'

const ease = [0.16, 1, 0.3, 1]

export function Hero() {
  const skip = useReducedMotion()
  const initial = skip ? {} : { opacity: 0, y: 30 }
  const animate = { opacity: 1, y: 0 }

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        <motion.div
          className="hero-tag"
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, ease }}
        >
          <span className="tag-dot" />
          builder · engineer · researcher
        </motion.div>

        <motion.h1
          className="hero-title"
          initial={skip ? {} : { opacity: 0, y: 50 }}
          animate={animate}
          transition={{ duration: 1, delay: skip ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          1WLF
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={initial}
          animate={animate}
          transition={{ duration: 0.7, delay: skip ? 0 : 0.35, ease }}
        >
          I don't just write code — I craft systems that ship.
        </motion.p>

        <motion.div
          initial={skip ? {} : { opacity: 0, y: 40 }}
          animate={animate}
          transition={{ duration: 0.9, delay: skip ? 0 : 0.5, ease }}
        >
          <Terminal />
        </motion.div>
      </div>

      <motion.div
        className="scroll-hint"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: skip ? 0 : 1.2 }}
      >
        <div className="scroll-hint-line" />
      </motion.div>
    </section>
  )
}
