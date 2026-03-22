import { useRef, useState, useCallback } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'
import { projectInfo } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import '../styles/projects.css'

export function Projects() {
  const skip = useReducedMotion()
  const cardRef = useRef<HTMLAnchorElement>(null)
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40])

  // 3D tilt
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    if (skip) return
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rotateX: y * -8, rotateY: x * 8 })
  }, [skip])

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 })
  }, [])

  return (
    <section id="projects" className="projects" aria-label="Projects">
      <div className="container">
        <SectionHeader label="Projects" title="What I've shipped" />

        <ScrollReveal>
          <motion.a
            href={projectInfo.href}
            className="project-card"
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: tilt.rotateX,
              rotateY: tilt.rotateY,
              transformPerspective: 1200,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            whileHover={skip ? {} : { scale: 1.01 }}
          >
            <div className="project-info">
              <div className="project-badge">{projectInfo.badge}</div>
              <h3 className="project-title">{projectInfo.title}</h3>
              <p className="project-desc">{projectInfo.description}</p>
              <div className="project-tech">
                {projectInfo.tech.map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-cta">
                <span>Explore Project</span>
                <ArrowRight size={18} />
              </div>
            </div>
            <div className="project-screenshots">
              {projectInfo.screenshots.map(s => (
                <motion.div
                  key={s.src}
                  className="screenshot-wrapper"
                  style={{ y: skip ? 0 : imgY }}
                >
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="project-screenshot"
                    loading="lazy"
                    width={550}
                    height={350}
                  />
                </motion.div>
              ))}
            </div>
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  )
}
