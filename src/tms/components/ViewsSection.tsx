import { kanbanShowcase, listShowcase } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { Showcase } from './Showcase'
import '../styles/showcase.css'

export function ViewsSection() {
  return (
    <section id="views" style={{ background: 'var(--surface)', padding: '5rem 2rem' }}>
      <SectionHeader tag="Views" title="See your work, your way" description="Switch between Kanban swim lanes and a flat list view with a single click." />
      <Showcase {...kanbanShowcase} />
      <Showcase {...listShowcase} />
    </section>
  )
}
