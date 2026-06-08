import { ArrowRight, Sparkles, Users } from 'lucide-react'
import '../styles/Hero.css'
import heroImage from '../icon/image.png'

export default function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="container">
        <div className="row align-items-center">
          {/* Left: Text */}
          <div className="col-lg-6 hero-content">
            <div className="hero-label">
              <Sparkles size={13} />
              Impacto Social Real
            </div>

            <h1 className="hero-title">
              Transformando{' '}
              <span className="italic-blue">vidas</span>
              ,<br />juntos.
            </h1>

            <p className="hero-subtitle">
              O Bahamas Solidário é o braço social do Grupo Bahamas, uma das maiores redes
              supermercadistas de Minas Gerais. Desde 2016, conectamos clientes, empresas e
              instituições para gerar impacto real nas comunidades mineiras.
            </p>

            <div className="hero-buttons">
              <a href="#sobre" className="btn-outline-dark-blue">
                Conheça o projeto
                <ArrowRight size={16} />
              </a>
              <a href="#acoes" className="btn-primary-dark">
                Nossas ações
              </a>
            </div>

            {/* Trust indicators */}
            <div
              className="d-flex align-items-center gap-3 mt-4"
              style={{ flexWrap: 'wrap' }}
            >
              <div className="d-flex align-items-center gap-2">
                <div
                  style={{
                    display: 'flex',
                    marginRight: 4,
                  }}
                >
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: '50%',
                        background: `hsl(${930 + i * 20}, 50%, ${30 + i * 8}%)`,
                        border: '2px solid #fff',
                        marginLeft: i > 1 ? -8 : 0,
                      }}
                    />
                  ))}
                </div>
                <span style={{ fontSize: '0.82rem', color: '#4a5568', fontWeight: 500 }}>
                  +239 instituições beneficiadas
                </span>
              </div>
              <div
                style={{
                  width: 1,
                  height: 20,
                  background: 'var(--border-light)',
                }}
              />
              <div className="d-flex align-items-center gap-2">
                <Users size={15} color="var(--primary-medium)" />
                <span style={{ fontSize: '0.82rem', color: '#4a5568', fontWeight: 500 }}>
                  Desde 2016 em MG
                </span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="col-lg-6 hero-image-wrapper">
            <img
              src={heroImage}
              alt="Funcionário do Bahamas no caixa do supermercado"
              loading="eager"
            />

            {/* Floating badge */}
            <div className="hero-image-badge">
              <div className="badge-icon">
                <Sparkles size={16} />
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 400 }}>
                  Desde 2016
                </div>
                <div>+239 instituições apoiadas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
