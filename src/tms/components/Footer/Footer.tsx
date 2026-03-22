import './footer.css'

export function Footer() {
  return (
    <footer className="site-footer">
      <p><a href="https://tms.1wlf.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}><strong>1WLF TMS</strong></a> — Task Management System</p>
      <p className="footer-tech">Built with FastAPI · React 19 · MySQL · Docker · Tailwind CSS</p>
    </footer>
  )
}
