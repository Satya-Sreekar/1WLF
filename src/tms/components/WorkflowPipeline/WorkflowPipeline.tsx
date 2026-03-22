import { workflowSteps } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { ScrollReveal } from '../../components/ScrollReveal'
import '../styles/workflow.css'

export function WorkflowPipeline() {
  return (
    <section id="workflow" style={{ background: 'var(--surface)', padding: '5rem 2rem' }}>
      <SectionHeader tag="QA Workflow" title="Built-in testing pipeline" description="Route tasks through a dedicated testing stage with full history tracking." />
      <div className="workflow">
        {workflowSteps.map((step, i) => (
          <div key={step.number} style={{ display: 'contents' }}>
            {i > 0 && (
              <ScrollReveal delay={i * 0.12 - 0.06}>
                <span className="workflow-arrow">→</span>
              </ScrollReveal>
            )}
            <ScrollReveal delay={i * 0.12}>
              <div className="workflow-step">
                <div className="workflow-dot" style={{ background: step.bgColor, color: step.color }}>
                  {step.number}
                </div>
                <strong>{step.title}</strong>
                <p>{step.description}</p>
              </div>
            </ScrollReveal>
          </div>
        ))}
      </div>
      <p className="workflow-note">Testing history with notes, timestamps, and tester names is stored on each task permanently.</p>
    </section>
  )
}
