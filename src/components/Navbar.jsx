import { useState, useEffect } from 'react'
import { MessageCircle, Menu, X } from 'lucide-react'
import logo from '../icon/logo2.png'
import '../styles/Navbar.css'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Ações', href: '#acoes' },
  { label: 'Notícias', href: '#noticias' },
  { label: 'Arrecadações', href: '#arrecadacoes' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('Início')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className="navbar-custom"
      style={{ boxShadow: scrolled ? '0 2px 16px rgba(39,29,103,0.10)' : '0 1px 0 rgba(39,29,103,0.08)' }}
    >
      <div className="container">
        <div className="d-flex align-items-center justify-content-between w-100">
          {/* Logo */}
          <a href="#inicio" className="navbar-brand d-flex align-items-center gap-2">
            <img src={logo} alt="Grupo Bahamas" style={{ height: 36, width: 'auto' }} />
          </a>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link-custom ${activeLink === link.label ? 'active' : ''}`}
                onClick={() => setActiveLink(link.label)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="d-flex align-items-center gap-3">
            <a href="#formulario-contato" className="btn-fale d-none d-md-inline-flex">
              <MessageCircle size={15} />
              Fale Conosco
            </a>
            <button
              className="navbar-toggler-custom d-lg-none"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="d-lg-none"
            style={{
              borderTop: '1px solid var(--border-light)',
              paddingBottom: 16,
            }}
          >
            <div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="d-block"
                style={{
                  padding: '12px 0',
                  color: activeLink === link.label ? 'var(--primary-dark)' : 'var(--text-dark)',
                  fontWeight: activeLink === link.label ? 700 : 500,
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  borderBottom: '1px solid var(--border-light)',
                }}
                onClick={() => {
                  setActiveLink(link.label)
                  setMenuOpen(false)
                }}
              >
                {link.label}
              </a>
            ))}
            </div>
            <a
              href="#formulario-contato"
              className="btn-fale d-inline-flex mt-3"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle size={15} />
              Fale Conosco
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
