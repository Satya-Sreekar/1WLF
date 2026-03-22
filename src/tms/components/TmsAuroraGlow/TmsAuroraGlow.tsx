import { useReducedMotion } from '../../../hooks/useReducedMotion'
import './aurora.css'

export function TmsAuroraGlow() {
  const skip = useReducedMotion()
  if (skip) return null

  return (
    <div className="aurora-container" aria-hidden="true">
      <div className="aurora-wave aurora-wave-1" />
      <div className="aurora-wave aurora-wave-2" />
      <div className="aurora-wave aurora-wave-3" />
    </div>
  )
}
