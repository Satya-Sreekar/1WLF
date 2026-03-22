import { orgRoles, projectRoles } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { ScrollReveal } from '../../components/ScrollReveal'
import '../styles/roles.css'

export function AccessControl() {
  return (
    <section id="roles" style={{ background: 'var(--surface)', padding: '5rem 2rem' }}>
      <SectionHeader tag="Access Control" title="Role-Based Permissions" description="Two-tier RBAC — organization-level roles and project-level roles — with a clean hierarchy." />
      <ScrollReveal><p className="roles-label">Organization Roles</p></ScrollReveal>
      <div className="roles-grid">
        {orgRoles.map((role, i) => (
          <ScrollReveal key={role.title} delay={i * 0.08}>
            <div className="role-card">
              <div className={`role-badge ${role.badgeVariant}`}>{role.badge}</div>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal><p className="roles-label" style={{ marginTop: '3rem' }}>Project Roles</p></ScrollReveal>
      <div className="roles-grid">
        {projectRoles.map((role, i) => (
          <ScrollReveal key={role.title} delay={i * 0.08}>
            <div className="role-card">
              <div className={`role-badge ${role.badgeVariant}`}>{role.badge}</div>
              <h3>{role.title}</h3>
              <p>{role.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
      <ScrollReveal>
        <p className="roles-note">Org Owners and Admins automatically have implicit access to all org projects — no explicit membership needed.</p>
      </ScrollReveal>
    </section>
  )
}
