import { useState, useEffect } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'
import '../styles/navbar.css'

const sections = [
  { label: 'Projects', id: 'projects' },
  { label: 'Focus', id: 'focus' },
  { label: 'Philosophy', id: 'philosophy' },
  { label: 'Contact', id: 'contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = sections
      .map(s => document.getElementById(s.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )

    els.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={`home-navbar${scrolled ? ' scrolled' : ''}`}>
      <a href="#" className="home-nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <img src="/logo-png.png" alt="" className="home-nav-logo-img" />
        <span>1WLF</span>
      </a>

      <div className="home-nav-links">
        {sections.map(s => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={activeSection === s.id ? 'active' : ''}
          >
            {s.label}
          </a>
        ))}
      </div>

      <a href="https://tms.1wlf.com" className="home-nav-flagship home-nav-flagship-desktop">
        <span className="flagship-badge">Flagship</span>
        1WLF TMS
        <ArrowRight size={14} />
      </a>

      <button
        className="home-nav-hamburger"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation menu"
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div className={`home-nav-mobile${mobileOpen ? ' open' : ''}`}>
        {sections.map(s => (
          <a key={s.id} href={`#${s.id}`} onClick={() => setMobileOpen(false)}>
            {s.label}
          </a>
        ))}
        <a href="https://tms.1wlf.com" className="home-nav-flagship" onClick={() => setMobileOpen(false)}>
          <span className="flagship-badge">Flagship</span>
          1WLF TMS
          <ArrowRight size={14} />
        </a>
      </div>
    </nav>
  )
}
