import { motion } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface QuoteBlockProps {
  text: string
}

export function QuoteBlock({ text }: QuoteBlockProps) {
  const skip = useReducedMotion()
  const words = text.split(' ')

  return (
    <div className="quote-block">
      <motion.blockquote
        className="quote-text"
        initial={skip ? undefined : 'hidden'}
        whileInView={skip ? undefined : 'visible'}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ staggerChildren: 0.04 }}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            className="word"
            variants={
              skip
                ? undefined
                : {
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
