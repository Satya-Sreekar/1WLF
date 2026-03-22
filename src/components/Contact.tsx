import { motion } from 'framer-motion'
import { Github, Linkedin } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'
import { socialLinks, contactEmail } from '../data/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import '../styles/contact.css'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
}

export function Contact() {
  const skip = useReducedMotion()

  return (
    <section className="contact" aria-label="Contact">
      <div className="container">
        <SectionHeader label="Connect" />

        <ScrollReveal>
          <h2 className="contact-command">
            <span className="terminal-prompt-text">user@1wlf:~$</span>{' '}
            ./connect --serious-inquiries-only
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <motion.div className="contact-email">
            <motion.a
              href={`mailto:${contactEmail}`}
              whileHover={skip ? {} : { scale: 1.03 }}
              whileTap={skip ? {} : { scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              {contactEmail}
            </motion.a>
          </motion.div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <nav className="social-links" aria-label="Social links">
            {socialLinks.map(link => {
              const Icon = iconMap[link.icon]
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} Profile`}
                  className="social-link"
                  whileHover={skip ? {} : { scale: 1.05, y: -2 }}
                  whileTap={skip ? {} : { scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  <Icon size={22} />
                  <span>{link.label}</span>
                </motion.a>
              )
            })}
          </nav>
        </ScrollReveal>
      </div>
    </section>
  )
}
