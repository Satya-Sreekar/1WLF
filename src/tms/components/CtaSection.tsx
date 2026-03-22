import { ScrollReveal } from '../../components/ScrollReveal'
import '../styles/cta.css'

export function CtaSection() {
  return (
    <section className="cta-section">
      <ScrollReveal><h2>Ready to ship faster?</h2></ScrollReveal>
      <ScrollReveal delay={0.1}>
        <p>Deploy TMS locally in minutes with Docker, or connect to the hosted API at apitms.1wlf.com.</p>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <div className="hero-actions">
          <a className="btn-primary" href="#screenshots">View Screenshots</a>
          <a className="btn-secondary" href="#tech">See the Stack</a>
        </div>
      </ScrollReveal>
    </section>
  )
}
