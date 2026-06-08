import { useState, useEffect } from 'react'
import { Eye, Target, Zap } from 'lucide-react'
import '../styles/About.css'

const values = [
  {
    icon: <Eye size={20} />,
    title: 'Transparência',
    description: 'Atuamos de forma ética e clara em todas as nossas ações.',
  },
  {
    icon: <Target size={20} />,
    title: 'Compromisso',
    description: 'Nos dedicamos integralmente a quem mais precisa.',
  },
  {
    icon: <Zap size={20} />,
    title: 'Impacto',
    description: 'Geramos mudanças reais e duradouras nas comunidades.',
  },
]

const slides = [
  {
    main: {
      src: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&auto=format&fit=crop',
      alt: 'Comunidade unida',
    },
    bl: {
      src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&auto=format&fit=crop',
      alt: 'Doação de alimentos',
    },
    br: {
      src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop',
      alt: 'Crianças estudando',
    },
  },
  {
    main: {
      src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&auto=format&fit=crop',
      alt: 'Voluntários em ação',
    },
    bl: {
      src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&auto=format&fit=crop',
      alt: 'Ajuda humanitária',
    },
    br: {
      src: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&auto=format&fit=crop',
      alt: 'Educação infantil',
    },
  },
  {
    main: {
      src: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&auto=format&fit=crop',
      alt: 'Impacto social',
    },
    bl: {
      src: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=400&auto=format&fit=crop',
      alt: 'Meio ambiente',
    },
    br: {
      src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=400&auto=format&fit=crop',
      alt: 'Parceria comunitária',
    },
  },
]

export default function About() {
  const [activeDot, setActiveDot] = useState(0)
  const [fading, setFading] = useState(false)

  // Auto-advance every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      goTo((activeDot + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [activeDot])

  const goTo = (index) => {
    if (index === activeDot) return
    setFading(true)
    setTimeout(() => {
      setActiveDot(index)
      setFading(false)
    }, 300)
  }

  const current = slides[activeDot]

  return (
    <section className="about-section" id="sobre">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-5">
          {/* Left: Text */}
          <div className="col-lg-6">
            <span className="about-label">Sobre o projeto</span>

            <h2 className="about-title">
              Bahamas
              <span className="italic-script">Solidário</span>
            </h2>

            <p className="about-description">
              O Bahamas Solidário é o braço social do Grupo Bahamas, uma das maiores redes
              supermercadistas de Minas Gerais. O projeto ganhou força através do programa
              Troco Solidário, iniciado em 2016, e evoluiu para campanhas maiores de arrecadação,
              ações comunitárias e apoio contínuo a centenas de instituições beneficentes em toda
              a região.
            </p>

            {/* Value cards */}
            <div className="d-flex flex-column gap-3">
              {values.map((v, i) => (
                <div key={i} className="value-card">
                  <div className="value-icon">{v.icon}</div>
                  <div>
                    <h5>{v.title}</h5>
                    <p>{v.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel dots */}
            <div className="about-dots mt-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`about-dot ${activeDot === i ? 'active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  style={{ border: 'none', padding: 0 }}
                />
              ))}
            </div>
          </div>

          {/* Right: Photo collage */}
          <div className="col-lg-6">
            <div className={`about-photos${fading ? ' about-photos--fading' : ''}`}>
              <img
                className="about-photo-main"
                src={current.main.src}
                alt={current.main.alt}
              />
              <img
                className="about-photo-bl"
                src={current.bl.src}
                alt={current.bl.alt}
              />
              <img
                className="about-photo-br"
                src={current.br.src}
                alt={current.br.alt}
              />

              {/* Decorative element */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 60,
                  height: 60,
                  background: 'var(--primary-dark)',
                  borderRadius: '50%',
                  border: '4px solid rgba(255,255,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 10,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                }}
              >
                <span
                  style={{
                    color: 'var(--primary-medium)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                  }}
                >
                  ♥
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
