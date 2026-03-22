import { useState } from 'react'
import { screenshots } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { ScrollReveal } from '../../components/ScrollReveal'
import { Sun, Moon } from 'lucide-react'
import '../styles/gallery.css'

export function ScreenshotGallery() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  return (
    <section id="screenshots" style={{ padding: '5rem 2rem' }}>
      <SectionHeader tag="Screenshots" title="See every screen" description="Real screenshots from the live application — no mockups." />
      <div className="gallery">
        <div className="gallery-toggle">
          <button className={theme === 'light' ? 'active' : ''} onClick={() => setTheme('light')}>
            <Sun size={14} style={{ marginRight: 6, verticalAlign: -2 }} />Light
          </button>
          <button className={theme === 'dark' ? 'active' : ''} onClick={() => setTheme('dark')}>
            <Moon size={14} style={{ marginRight: 6, verticalAlign: -2 }} />Dark
          </button>
        </div>
        <div className="gallery-grid">
          {screenshots.map((shot, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className={`gallery-item${shot.span === 2 ? ' span-2' : ''}`}>
                <img src={theme === 'dark' ? shot.darkSrc : shot.src} alt={shot.alt} loading="lazy" />
                <div className="gallery-caption">
                  <strong>{shot.title}</strong>{shot.caption}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
