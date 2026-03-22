import { apiFeatures } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { FeatureCard } from './FeatureCard'
import { ScrollReveal } from '../../components/ScrollReveal'

export function ApiFeatures() {
  return (
    <section style={{ background: 'var(--surface)', padding: '5rem 2rem' }}>
      <SectionHeader tag="API" title="Complete REST API" description="Every feature is powered by a clean, documented REST API. Interactive Swagger UI included." />
      <div className="features-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
        {apiFeatures.map((feature, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <FeatureCard {...feature} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
