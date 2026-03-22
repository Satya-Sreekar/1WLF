import { ScrollReveal } from './ScrollReveal'

interface SectionHeaderProps {
  label: string
  title?: string
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <>
      <ScrollReveal>
        <div className="section-label">
          <span className="label-line" />
          <span>{label}</span>
        </div>
      </ScrollReveal>
      {title && (
        <ScrollReveal>
          <h2 className="section-title">{title}</h2>
        </ScrollReveal>
      )}
    </>
  )
}
