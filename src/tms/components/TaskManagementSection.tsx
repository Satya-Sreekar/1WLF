import { taskDetailShowcase, taskEditShowcase } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { Showcase } from './Showcase'

export function TaskManagementSection() {
  return (
    <section style={{ padding: '5rem 2rem' }}>
      <SectionHeader tag="Task Management" title="Every detail, captured" description="Rich task metadata with a clean, focused editing experience." />
      <Showcase {...taskDetailShowcase} />
      <Showcase {...taskEditShowcase} />
    </section>
  )
}
