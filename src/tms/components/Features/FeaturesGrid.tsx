import { features } from '../../tms-content'
import { SectionHeader } from '../SectionHeader'
import { FeatureCard } from './FeatureCard'
import { ScrollReveal } from '../../../shared'
import './features.css'

export function FeaturesGrid() {
  return (
    <section id="features" style={{ padding: '6rem 2rem' }}>
      <SectionHeader tag="Everything You Need" title="Built for real teams, real workflows" description="From solo freelancers to multi-org enterprises — TMS adapts to how you work." />
      <div className="features-grid">
        {features.map((feature, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <FeatureCard {...feature} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
