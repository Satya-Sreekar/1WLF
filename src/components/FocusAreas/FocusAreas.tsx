import { motion } from 'framer-motion'
import { SectionHeader } from '../SectionHeader'
import { FocusCard } from './FocusCard'
import { focusAreas } from '../../data/content'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import './focus.css'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export function FocusAreas() {
  const skip = useReducedMotion()

  return (
    <section id="focus" className="focus" aria-label="Focus Areas">
      <div className="container">
        <SectionHeader label="Focus" title="What I build" />

        <motion.div
          className="focus-grid"
          variants={skip ? undefined : containerVariants}
          initial={skip ? undefined : 'hidden'}
          whileInView={skip ? undefined : 'visible'}
          viewport={{ once: true, margin: '-10%' }}
        >
          {focusAreas.map(area => (
            <motion.div key={area.title} variants={skip ? undefined : itemVariants}>
              <FocusCard {...area} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
