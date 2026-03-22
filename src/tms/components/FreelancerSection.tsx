import { freelancerShowcase } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { Showcase } from './Showcase'

export function FreelancerSection() {
  return (
    <section style={{ padding: '5rem 2rem' }}>
      <SectionHeader tag="Freelancer Mode" title="Time tracking for solo work" description="Focus mode with automatic timers and a productivity dashboard." />
      <Showcase {...freelancerShowcase} />
    </section>
  )
}
