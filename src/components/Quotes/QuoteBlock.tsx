import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface QuoteBlockProps {
  text: string
  index: number
}

export function QuoteBlock({ text, index }: QuoteBlockProps) {
  const skip = useReducedMotion()
  const words = text.split(' ')

  // Alternate entrance direction
  const directions = [
    { x: -30, y: 0 },
    { x: 30, y: 0 },
    { x: 0, y: 40 },
    { x: 0, y: -20 },
  ]
  const dir = directions[index % directions.length]

  return (
    <div className="quote-block">
      <motion.blockquote
        className="quote-text"
        initial={skip ? undefined : 'hidden'}
        whileInView={skip ? undefined : 'visible'}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ staggerChildren: 0.035, delayChildren: 0.1 }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="word"
            variants={
              skip
                ? undefined
                : {
                    hidden: {
                      opacity: 0,
                      x: dir.x,
                      y: dir.y,
                      filter: 'blur(8px)',
                      scale: 0.9,
                    },
                    visible: {
                      opacity: 1,
                      x: 0,
                      y: 0,
                      filter: 'blur(0px)',
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    },
                  }
            }
          >
            {word + (i < words.length - 1 ? ' ' : '')}
          </motion.span>
        ))}
      </motion.blockquote>
    </div>
  )
}
