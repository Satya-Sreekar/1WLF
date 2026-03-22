import { Github, Linkedin } from 'lucide-react'
import { SectionHeader } from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'
import { socialLinks, contactEmail } from '../data/content'
import '../styles/contact.css'

const iconMap = {
  github: Github,
  linkedin: Linkedin,
}

export function Contact() {
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
          <div className="contact-email">
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <nav className="social-links" aria-label="Social links">
            {socialLinks.map(link => {
              const Icon = iconMap[link.icon]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${link.label} Profile`}
                  className="social-link"
                >
                  <Icon size={22} />
                  <span>{link.label}</span>
                </a>
              )
            })}
          </nav>
        </ScrollReveal>
      </div>
    </section>
  )
}
