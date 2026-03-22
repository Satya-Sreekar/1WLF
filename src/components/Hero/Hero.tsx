import { motion } from 'framer-motion'
import { Terminal } from './Terminal'
import { GlitchText } from './GlitchText'
import { Marquee } from './Marquee'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import './hero.css'

const techStack = [
  'React', 'TypeScript', 'Python', 'FastAPI', 'Node.js', 'Flutter',
  'Docker', 'AWS', 'LLMs', 'Computer Vision', 'CI/CD', 'Linux',
  'MySQL', 'MongoDB', 'Nginx', 'Tailwind',
]

interface HeroProps {
  ready: boolean
}

export function Hero({ ready }: HeroProps) {
  const skip = useReducedMotion()
  const show = skip || ready

  const ease = [0.16, 1, 0.3, 1] as const

  return (
    <section className="hero" aria-label="Introduction">
      <div className="hero-content">
        <motion.div className="hero-logo-wrapper">
          <motion.img
            src="/logo-png.png"
            alt="1WLF Logo"
            className="hero-logo"
            draggable={false}
            initial={skip ? {} : { width: 500, opacity: 0 }}
            animate={{ width: 200, opacity: 1 }}
            transition={skip ? {} : {
              width: { duration: 1.6, delay: 0.4, ease },
              opacity: { duration: 0.4, delay: 0.05 },
            }}
            whileHover={skip ? {} : { scale: 1.08, rotate: 3 }}
          />
        </motion.div>

        <h1 className="sr-only">1WLF — Engineered for Impact</h1>

        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, y: 20 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15, ease }}
        >
          <span className="tag-dot" />
          builder · engineer · researcher
        </motion.div>

        <motion.div
          className="hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease }}
        >
          <GlitchText
            text="I don't just write code — I craft systems that ship."
            delay={1.2}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={show ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.45, ease }}
        >
          <Terminal />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={show ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Marquee items={techStack} speed={35} />
        </motion.div>
      </div>

      <motion.div
        className="scroll-hint"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={show ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="scroll-hint-line" />
      </motion.div>
    </section>
  )
}
