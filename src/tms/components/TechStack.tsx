import { techStack } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { ScrollReveal } from '../../components/ScrollReveal'
import '../styles/tech.css'

export function TechStack() {
  return (
    <section id="tech" style={{ padding: '5rem 2rem' }}>
      <SectionHeader tag="Tech Stack" title="Modern, proven technologies" description="A full-stack monorepo with independent backend and frontend, ready for Docker deployment." />
      <div className="tech-grid">
        {techStack.map((tech, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <div className="tech-item">
              <div className="tech-label">{tech.label}</div>
              <div className="tech-name">{tech.name}</div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
