import { stats } from '../tms-content'
import { useCountUp } from '../../hooks/useCountUp'
import { ScrollReveal } from '../../components/ScrollReveal'
import '../styles/stats.css'

function AnimatedStat({ value, label, isNumeric }: { value: string; label: string; isNumeric: boolean }) {
  const numericValue = isNumeric ? parseInt(value, 10) : 0
  const [count, ref] = useCountUp(numericValue, 1500, true)

  return (
    <div className="stat" ref={ref as React.Ref<HTMLDivElement>}>
      <div className="stat-num">{isNumeric ? count : value}</div>
      <div className="stat-label">{label}</div>
    </div>
  )
}

export function StatsBar() {
  return (
    <ScrollReveal>
      <div className="stats-bar">
        {stats.map((stat, i) => <AnimatedStat key={i} {...stat} />)}
      </div>
    </ScrollReveal>
  )
}
