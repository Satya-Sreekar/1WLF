import { ScrollReveal } from '../../components/ScrollReveal'

interface SectionHeaderProps {
  tag: string
  title: string
  description?: string
}

export function SectionHeader({ tag, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <ScrollReveal>
        <div className="section-tag">{tag}</div>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2>{title}</h2>
      </ScrollReveal>
      {description && (
        <ScrollReveal delay={0.2}>
          <p>{description}</p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.25}>
        <div className="divider" />
      </ScrollReveal>
    </div>
  )
}
