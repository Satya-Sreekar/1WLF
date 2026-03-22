import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../tms-content'
import '../styles/navbar.css'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href) as HTMLElement).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection('#' + entry.target.id)
        }
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="navbar">
      <a href="/" className="nav-logo">
        <span className="nav-logo-icon">🐺</span>
        <span>1WLF TMS</span>
      </a>
      <div className="nav-links">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} className={activeSection === link.href ? 'active' : ''}>
            {link.label}
          </a>
        ))}
      </div>
      <a className="nav-cta" href="#screenshots">See it in action</a>
      <button className="nav-hamburger" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu">
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <div className={`nav-mobile${mobileOpen ? ' open' : ''}`}>
        {navLinks.map(link => (
          <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>{link.label}</a>
        ))}
      </div>
    </nav>
  )
}
