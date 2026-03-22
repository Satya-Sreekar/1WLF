import { ScrollReveal } from '../../components/ScrollReveal'
import '../styles/cta.css'

export function CtaSection() {
  return (
    <section className="cta-section">
      <ScrollReveal><h2>Ready to ship faster?</h2></ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p>Try it live at <a href="https://tms.1wlf.com" target="_blank" rel="noopener noreferrer" className="cta-link">tms.1wlf.com</a> — no setup required.</p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="hero-actions">
          <a className="btn-primary" href="https://tms.1wlf.com" target="_blank" rel="noopener noreferrer">Try it Live</a>
          <a className="btn-secondary" href="#screenshots">View Screenshots</a>
        </div>
      </ScrollReveal>
    </section>
  )
}
