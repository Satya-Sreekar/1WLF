import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { ShowcaseData } from '../../tms-content'
import { ScrollReveal } from '../../../shared'
import { useReducedMotion } from '../../../hooks/useReducedMotion'

export function Showcase({ imageSrc, imageAlt, title, description, features, chips, reversed }: ShowcaseData) {
  const imgRef = useRef<HTMLDivElement>(null)
  const skip = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: imgRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], skip ? [0, 0] : [40, -40])

  return (
    <div className={`showcase${reversed ? ' reverse' : ''}`}>
      <ScrollReveal direction={reversed ? 'right' : 'left'}>
        <div className="showcase-img" ref={imgRef}>
          <motion.img src={imageSrc} alt={imageAlt} loading="lazy" style={{ y: imgY }} />
        </div>
      </ScrollReveal>
      <div className="showcase-text">
        <ScrollReveal direction={reversed ? 'left' : 'right'}>
          <h3>{title}</h3>
        </ScrollReveal>
        <ScrollReveal direction={reversed ? 'left' : 'right'} delay={0.1}>
          <p>{description}</p>
        </ScrollReveal>
        <ScrollReveal direction={reversed ? 'left' : 'right'} delay={0.2}>
          <ul className="feature-list">
            {features.map((f, i) => <li key={i}>{f}</li>)}
          </ul>
        </ScrollReveal>
        {chips && (
          <ScrollReveal direction={reversed ? 'left' : 'right'} delay={0.3}>
            <div className="chips">
              {chips.map((c, i) => (
                <span key={i} className={`chip ${c.variant}`}>{c.label}</span>
              ))}
            </div>
          </ScrollReveal>
        )}
      </div>
    </div>
  )
}
