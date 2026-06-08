import { useState } from 'react'
import { Users, Heart, MapPin, ChevronDown } from 'lucide-react'
import '../styles/Stats.css'

const stats = [
  {
    icon: <Users size={24} />,
    number: '+239',
    label: 'Instituições beneficiadas',
    detail: 'Mais de 239 instituições sociais já foram beneficiadas pelo Bahamas Solidário desde o início do Troco Solidário em 2016, incluindo hospitais, abrigos, creches e entidades filantrópicas.',
  },
  {
    icon: <Users size={24} />,
    number: '+ R$ 5 mi',
    label: 'Arrecadados pelo Troco Solidário',
    detail: 'Mais de R$ 5 milhões já foram arrecadados até dezembro de 2025 por meio do programa Troco Solidário, onde clientes doam centavos do troco diretamente nos caixas das lojas.',
  },
  {
    icon: <MapPin size={24} />,
    number: '87',
    label: 'Unidades do Grupo Bahamas',
    detail: 'O Grupo Bahamas conta com 87 unidades em Minas Gerais — 54 lojas na Zona da Mata e Campo das Vertentes e 33 lojas no Triângulo Mineiro e Alto Paranaíba.',
  },
  {
    icon: <Heart size={24} />,
    number: '439 t',
    label: 'Toneladas distribuídas em 2026',
    detail: 'A campanha Aniversário Solidário 2026 registrou o maior resultado da história: 439,2 toneladas distribuídas para 116 instituições sociais, dobrando o impacto com a contrapartida do Grupo Bahamas.',
  },
]

export default function Stats() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row g-0">
          {stats.map((stat, i) => (
            <div key={i} className="col-6 col-md-3">
              <div
                className={`stat-item${openIndex === i ? ' stat-item--open' : ''}`}
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggle(i)}
                aria-expanded={openIndex === i}
              >
                <div className="stat-icon-wrap">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-chevron">
                  <ChevronDown size={16} />
                </div>
                <div className="stat-detail">
                  <p>{stat.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
