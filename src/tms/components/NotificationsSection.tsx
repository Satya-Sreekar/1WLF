import { notificationsShowcase } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { Showcase } from './Showcase'

export function NotificationsSection() {
  return (
    <section style={{ background: 'var(--surface)', padding: '5rem 2rem' }}>
      <SectionHeader tag="Notifications" title="Stay in the loop" description="Real-time in-app notifications for assignments, status changes, and testing requests." />
      <Showcase {...notificationsShowcase} />
    </section>
  )
}
