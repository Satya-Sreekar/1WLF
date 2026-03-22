import { QuoteBlock } from './QuoteBlock'
import { quotes } from '../data/content'
import '../styles/quotes.css'

export function Quotes() {
  return (
    <section className="quotes" aria-label="Philosophy">
      <div className="container">
        {quotes.map((q, i) => (
          <QuoteBlock key={q} text={q} index={i} />
        ))}
      </div>
    </section>
  )
}
