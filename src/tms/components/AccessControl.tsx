import { orgRoles, projectRoles } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { ScrollReveal } from '../../components/ScrollReveal'
import '../styles/roles.css'

export function AccessControl() {
  return (
    <section id="roles" style={{ background: 'var(--surface)', padding: '5rem 2rem' }}>
      <SectionHeader tag="Access Control" title="Role-Based Permissions" description="Two-tier RBAC — organization-level roles and project-level roles — with a clean hierarchy." />

      <div className="roles-hierarchy">
        {/* Org roles — 3 columns */}
        <ScrollReveal><p className="roles-label">Organization Roles</p></ScrollReveal>
        <div className="roles-grid roles-grid-3">
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

        {/* Connector from Member down to project roles */}
        <ScrollReveal>
          <div className="roles-connector" aria-hidden="true">
            <div className="connector-line connector-vertical" />
            <div className="connector-label">assigns to project as</div>
            <div className="connector-branch">
              <div className="connector-line connector-horizontal" />
            </div>
            <div className="connector-drops">
              <div className="connector-drop" />
              <div className="connector-drop" />
              <div className="connector-drop" />
              <div className="connector-drop" />
            </div>
          </div>
        </ScrollReveal>

        {/* Project roles — 4 columns */}
        <ScrollReveal><p className="roles-label">Project Roles</p></ScrollReveal>
        <div className="roles-grid roles-grid-4">
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
      </div>

      <ScrollReveal>
        <p className="roles-note">Org Owners and Admins automatically have implicit access to all org projects — no explicit membership needed.</p>
      </ScrollReveal>
    </section>
  )
}
