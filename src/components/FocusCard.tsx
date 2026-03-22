import { Brain, Activity, LayoutGrid, Cloud } from 'lucide-react'
import type { FocusArea } from '../data/content'

const iconMap = {
  brain: Brain,
  activity: Activity,
  grid: LayoutGrid,
  cloud: Cloud,
}

export function FocusCard({ icon, title, description }: FocusArea) {
  const Icon = iconMap[icon]

  return (
    <div className="focus-card">
      <div className="focus-icon">
        <Icon size={24} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
