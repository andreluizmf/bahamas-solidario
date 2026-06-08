import { useState } from 'react'
import { GraduationCap, Heart, Leaf, Users, ChevronDown } from 'lucide-react'
import '../styles/Pillars.css'

const pillars = [
  {
    icon: <GraduationCap size={26} />,
    title: 'Educação',
    description:
      'Apoiamos projetos e iniciativas que transformam o futuro através do conhecimento e do aprendizado.',
    detail:
      'Financiamos bolsas de estudo, construção de espaços educativos e formação de professores em comunidades com baixo acesso à educação de qualidade.',
  },
  {
    icon: <Heart size={26} />,
    title: 'Saúde',
    description:
      'Promoção da saúde e bem-estar para todos, com acesso a cuidados preventivos e assistência médica.',
    detail:
      'Realizamos campanhas de prevenção, mutirões de atendimento médico e odontológico, e apoiamos unidades de saúde em regiões carentes de infraestrutura.',
  },
  {
    icon: <Leaf size={26} />,
    title: 'Meio Ambiente',
    description:
      'Ações que preservam o planeta para novas gerações, incentivando práticas sustentáveis.',
    detail:
      'Desenvolvemos projetos de reflorestamento, educação ambiental nas escolas e apoio a iniciativas de economia circular nas comunidades parceiras.',
  },
  {
    icon: <Users size={26} />,
    title: 'Assistência Social',
    description:
      'Apoio às comunidades em situação de vulnerabilidade, promovendo dignidade e inclusão.',
    detail:
      'Oferecemos suporte a famílias em situação de risco, programas de capacitação profissional e articulação com redes de proteção social nos territórios atendidos.',
  },
]

export default function Pillars() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section className="pillars-section" id="pilares">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="section-label justify-content-center">
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
          <h2 className="section-title">Nossos pilares</h2>
          <p className="section-subtitle mx-auto">
            Atuamos em quatro frentes essenciais para promover o desenvolvimento
            humano e social nas comunidades.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {pillars.map((pillar, i) => (
            <div key={i} className="col-sm-6 col-lg-3">
              <div
                className={`pillar-card${openIndex === i ? ' pillar-card--open' : ''}`}
                onClick={() => toggle(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && toggle(i)}
                aria-expanded={openIndex === i}
              >
                <div className="pillar-icon-wrap">{pillar.icon}</div>
                <h4>{pillar.title}</h4>
                <p>{pillar.description}</p>

                <div className="pillar-detail">
                  <p>{pillar.detail}</p>
                </div>

                <div className="pillar-chevron">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
