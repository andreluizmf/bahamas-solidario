import { useState } from 'react'
import { Heart, Leaf, Users, ArrowRight } from 'lucide-react'
import '../styles/Actions.css'

const actions = [
  {
    category: 'Troco Solidário',
    icon: <Heart size={14} />,
    title: 'Troco Solidário',
    description:
      'Principal ação permanente do projeto. Ao finalizar as compras, o cliente doa centavos do troco para instituições sociais da própria região. Desde 2016, já arrecadou quase R$ 5 milhões.',
    image:
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&auto=format&fit=crop',
    alt: 'Troco Solidário',
  },
  {
    category: 'Aniversário Solidário',
    icon: <Users size={14} />,
    title: 'Aniversário Solidário',
    description:
      'Campanha anual realizada em março, aniversário do Grupo Bahamas. Clientes doam alimentos, produtos de higiene e limpeza. O Grupo dobra a doação, multiplicando o impacto social.',
    image:
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&auto=format&fit=crop',
    alt: 'Campanha Aniversário Solidário',
  },
  {
    category: 'Assistência Social',
    icon: <Heart size={14} />,
    title: 'Apoio a Instituições',
    description:
      'Apoio contínuo a hospitais, abrigos, creches, lares de idosos, APAEs, comunidades terapêuticas e projetos sociais religiosos e comunitários em toda a região de atuação.',
    image:
      'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&auto=format&fit=crop',
    alt: 'Apoio a instituições sociais',
  },
  {
    category: 'ESG',
    icon: <Leaf size={14} />,
    title: 'Responsabilidade Social',
    description:
      'Ações de ESG com foco em diversidade, inclusão, saúde, desenvolvimento, apoio comunitário e causa animal. Em 2026, o Grupo recebeu certificado e reconhecimento do Legislativo municipal.',
    image:
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&auto=format&fit=crop',
    alt: 'Responsabilidade social e ESG',
  },
  {
    category: 'Esporte',
    icon: <Users size={14} />,
    title: 'Circuito Bahamas de Esportes',
    description:
      'Ações esportivas ligadas à qualidade de vida e integração comunitária. Em 2026, foi anunciada a 1ª Meia Maratona Bahamas em Juiz de Fora, integrando o Circuito Bahamas de Esportes.',
    image:
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&auto=format&fit=crop',
    alt: 'Esporte e eventos sociais',
  },
  {
    category: 'Assistência Social',
    icon: <Heart size={14} />,
    title: 'Mesa Brasil / SESC',
    description:
      'Parceria com o Mesa Brasil/SESC para distribuição de alimentos arrecadados nas campanhas, garantindo que os produtos cheguem com eficiência às famílias em situação de vulnerabilidade.',
    image:
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&auto=format&fit=crop',
    alt: 'Distribuição de alimentos',
  },
]

const categories = ['Todas', 'Troco Solidário', 'Aniversário Solidário', 'Assistência Social', 'ESG', 'Esporte']

export default function Actions() {
  const [activeFilter, setActiveFilter] = useState('Todas')

  const filtered =
    activeFilter === 'Todas'
      ? actions
      : actions.filter((a) => a.category === activeFilter)

  return (
    <section className="actions-section" id="acoes">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div className="mb-5">
          <div className="section-label">
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--primary-medium)',
                display: 'inline-block',
              }}
            />
            O que fazemos
          </div>
          <div className="d-flex align-items-end justify-content-between flex-wrap gap-3">
            <h2 className="section-title mb-0">Nossas ações</h2>
            <a
              href="#"
              style={{
                color: 'var(--primary-dark)',
                fontWeight: 600,
                fontSize: '0.9rem',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              Ver todas <ArrowRight size={15} />
            </a>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-tab ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="row g-4">
          {filtered.map((action, i) => (
            <div key={i} className="col-sm-6 col-xl-3">
              <div className="action-card">
                <div className="action-card-img">
                  <img src={action.image} alt={action.alt} />
                  <div className="action-card-badge">
                    {action.icon}
                    {action.category}
                  </div>
                </div>
                <div className="action-card-body">
                  <h4>{action.title}</h4>
                  <p>{action.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
