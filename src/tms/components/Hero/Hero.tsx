import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { heroData } from '../../tms-content'
import { useReducedMotion } from '../../../hooks/useReducedMotion'
import './hero.css'

export function Hero() {
  const skip = useReducedMotion()
  const screenshotRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: screenshotRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], skip ? [0, 0] : [30, -30])

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] },
    }),
  }

  return (
    <section className="hero">
      <motion.div custom={0} variants={fadeUp} initial={skip ? 'visible' : 'hidden'} animate="visible" className="hero-badge">
        <span className="hero-badge-dot" />
        {heroData.badge}
      </motion.div>
      <motion.h1 custom={1} variants={fadeUp} initial={skip ? 'visible' : 'hidden'} animate="visible">
        {heroData.title}
      </motion.h1>
      <motion.p custom={2} variants={fadeUp} initial={skip ? 'visible' : 'hidden'} animate="visible" className="hero-sub">
        {heroData.subtitle}
      </motion.p>
      <motion.div custom={3} variants={fadeUp} initial={skip ? 'visible' : 'hidden'} animate="visible" className="hero-actions">
        <a className="btn-primary" href="#features">Explore Features</a>
        <a className="btn-secondary" href="#screenshots">View Screenshots</a>
      </motion.div>
      <motion.div custom={4} variants={fadeUp} initial={skip ? 'visible' : 'hidden'} animate="visible" className="hero-screenshot" ref={screenshotRef}>
        <motion.img src={heroData.screenshotSrc} alt={heroData.screenshotAlt} style={{ y: imgY }} />
        <div className="screenshot-glow" />
      </motion.div>
    </section>
  )
}
