import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Sun, Moon, Play, Pause } from 'lucide-react'
import { screenshots } from '../tms-content'
import { SectionHeader } from './SectionHeader'
import { ScrollReveal } from '../../components/ScrollReveal'
import '../styles/gallery.css'

export function ScreenshotGallery() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const [current, setCurrent] = useState(0)
  const [playing, setPlaying] = useState(true)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const total = screenshots.length

  const goTo = useCallback((index: number) => {
    setCurrent((index + total) % total)
  }, [total])

  const prev = useCallback(() => goTo(current - 1), [current, goTo])
  const next = useCallback(() => goTo(current + 1), [current, goTo])

  // Autoplay
  useEffect(() => {
    if (playing) {
      intervalRef.current = setInterval(() => {
        setCurrent(c => (c + 1) % total)
      }, 4000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [playing, total])

  // Pause autoplay on interaction, resume after delay
  const interact = useCallback((action: () => void) => {
    setPlaying(false)
    action()
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') interact(prev)
      if (e.key === 'ArrowRight') interact(next)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next, interact])

  const shot = screenshots[current]

  return (
    <section id="screenshots" style={{ padding: '5rem 2rem' }}>
      <SectionHeader
        tag="Screenshots"
        title="See every screen"
        description="Real screenshots from the live application — no mockups."
      />
      <ScrollReveal>
        <div className="gallery">
          <div className="gallery-toggle">
            <button
              className={theme === 'light' ? 'active' : ''}
              onClick={() => setTheme('light')}
            >
              <Sun size={14} style={{ marginRight: 6, verticalAlign: -2 }} />
              Light
            </button>
            <button
              className={theme === 'dark' ? 'active' : ''}
              onClick={() => setTheme('dark')}
            >
              <Moon size={14} style={{ marginRight: 6, verticalAlign: -2 }} />
              Dark
            </button>
          </div>

          {/* Carousel */}
          <div className="carousel-viewport" role="region" aria-label="Screenshot carousel" aria-roledescription="carousel">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {screenshots.map((s, i) => (
                <div
                  key={i}
                  className="carousel-slide"
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}: ${s.title}`}
                >
                  <img
                    src={theme === 'dark' ? s.darkSrc : s.src}
                    alt={s.alt}
                    loading={i <= 1 ? 'eager' : 'lazy'}
                    draggable={false}
                  />
                  <div className="carousel-caption">
                    <strong>{s.title}</strong>
                    <span>{s.caption}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              className="carousel-arrow prev"
              onClick={() => interact(prev)}
              aria-label="Previous screenshot"
              disabled={false}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              className="carousel-arrow next"
              onClick={() => interact(next)}
              aria-label="Next screenshot"
              disabled={false}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Controls */}
          <div className="carousel-controls">
            <div className="carousel-dots">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  className={`carousel-dot${i === current ? ' active' : ''}`}
                  onClick={() => interact(() => goTo(i))}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>

            <span className="carousel-counter">
              {current + 1} / {total}
            </span>

            <div className="carousel-progress">
              <div
                className="carousel-progress-bar"
                style={{ width: `${((current + 1) / total) * 100}%` }}
              />
            </div>

            <button
              className="carousel-playpause"
              onClick={() => setPlaying(!playing)}
              aria-label={playing ? 'Pause autoplay' : 'Play autoplay'}
            >
              {playing ? <Pause size={14} /> : <Play size={14} />}
            </button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  )
}
