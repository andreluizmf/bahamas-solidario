import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Heart, Linkedin, LinkedinIcon, InstagramIcon } from 'lucide-react'
import logo from '../icon/logo.png'
import '../styles/Footer.css'

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Nossas Ações', href: '#acoes' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'Contato', href: '#contato' },
]

const actionLinks = [
  { label: 'Educação', href: '#' },
  { label: 'Saúde', href: '#' },
  { label: 'Meio Ambiente', href: '#' },
  { label: 'Assistência Social', href: '#' },
  { label: 'Cultura', href: '#' },
]

export default function Footer() {
  return (
    <footer className="footer" id="contato">
      <div className="container">
        <div className="row g-5">
          {/* Brand */}
          <div className="col-lg-4 col-md-6">
            <a href="#inicio" className="footer-brand d-flex align-items-center gap-2 mb-3">
              <img src={logo} alt="Grupo Bahamas" style={{ height: 40, width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </a>
            <p className="footer-desc">
              O braço social do Grupo Bahamas. Conectando pessoas, ideias e
              ações para gerar impacto positivo nas comunidades.
            </p>

            {/* Social */}
            <div className="footer-social">
              <a href="https://www.instagram.com/supermercadosbahamas/" aria-label="Instagram">
                <InstagramIcon size={16} />
              </a>
              <a href="https://br.linkedin.com/company/grupo-bahamas" aria-label="Linkedin">
                <LinkedinIcon size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading">Navegação</h6>
            <ul className="footer-links">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Actions */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6 className="footer-heading">Ações</h6>
            <ul className="footer-links">
              {actionLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-lg-4 col-md-6">
            <h6 className="footer-heading">Contato</h6>
            <div className="footer-contact-item">
              <MapPin size={15} />
              <span>Escritório Central: BR 040, KM 780, Distrito Industrial, Juiz de Fora - MG</span>
            </div>
           
            <div className="footer-contact-item">
              <Mail size={15} />
              <span>contatosolidario@bahamas.com.br</span>
            </div>

            {/* Newsletter */}
            <div style={{ marginTop: 24 }}>
              <p
                style={{
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.55)',
                  marginBottom: 10,
                }}
              >
                Receba nossas novidades:
              </p>
              <div className="d-flex gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  style={{
                    flex: 1,
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 8,
                    padding: '9px 14px',
                    color: '#fff',
                    fontSize: '0.85rem',
                    outline: 'none',
                  }}
                />
                <button
                  style={{
                    background: 'var(--primary-medium)',
                    border: 'none',
                    borderRadius: 8,
                    padding: '9px 16px',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: '0.82rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => (e.target.style.background = 'var(--primary-dark)')}
                  onMouseLeave={(e) => (e.target.style.background = 'var(--primary-medium)')}
                >
                  Inscrever
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Bahamas Solidário. Todos os direitos reservados.
          </p>
          <div className="d-flex gap-3">
            <a href="#">Privacidade</a>
            <a href="#">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
