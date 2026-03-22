import { SectionHeader } from '../SectionHeader'
import { QuoteBlock } from './QuoteBlock'
import { quotes } from '../../data/content'
import './quotes.css'

export function Quotes() {
  return (
    <section id="philosophy" className="quotes" aria-label="Philosophy">
      <div className="container">
        <SectionHeader label="Philosophy" title="Words I build by" />
        {quotes.map((q, i) => (
          <QuoteBlock key={q} text={q} index={i} />
        ))}
      </div>
    </section>
  )
}
