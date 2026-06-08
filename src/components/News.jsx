import { Calendar, ArrowRight } from 'lucide-react'
import '../styles/News.css'

const news = [
  {
    date: 'Mar 2026',
    category: 'Aniversário Solidário',
    title: 'Campanha 2026 bate recorde histórico com 439,2 toneladas distribuídas',
    summary:
      'A campanha Aniversário Solidário 2026 registrou o maior resultado da história do projeto. Clientes arrecadaram 219,6 toneladas e o Grupo Bahamas dobrou a doação, totalizando 439,2 toneladas para 116 instituições sociais.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop',
  },
  {
    date: 'Mar 2025',
    category: 'Aniversário Solidário',
    title: 'Campanha 2025 distribui 345,7 toneladas em parceria com Mesa Brasil/SESC',
    summary:
      'A edição de 2025 havia sido considerada recorde histórico até então, com 172.881 kg arrecadados pelos clientes e igual contrapartida do Grupo Bahamas, totalizando 345.762 kg distribuídos.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop',
  },
  {
    date: '2026',
    category: 'ESG',
    title: 'Grupo Bahamas recebe certificado de apoio à causa animal e reconhecimento do Legislativo',
    summary:
      'Em 2026, o Grupo Bahamas foi reconhecido pelo Legislativo municipal e recebeu certificado por suas ações de responsabilidade social, diversidade, inclusão e apoio à causa animal.',
    image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&auto=format&fit=crop',
  },
]

export default function News() {
  return (
    <section className="news-section" id="noticias">
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
            Fique por dentro
          </div>
          <h2 className="section-title">Últimas notícias</h2>
          <p className="section-subtitle mx-auto">
            Acompanhe as ações, campanhas e novidades do Bahamas Solidário.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">
          {/* Destaque */}
          <div className="col-lg-6">
            <div className="news-card news-card--featured">
              <div className="news-card-img">
                <img src={news[0].image} alt={news[0].title} />
                <span className="news-badge">{news[0].category}</span>
              </div>
              <div className="news-card-body">
                <div className="news-date">
                  <Calendar size={13} />
                  {news[0].date}
                </div>
                <h3>{news[0].title}</h3>
                <p>{news[0].summary}</p>
              </div>
            </div>
          </div>

          {/* Secundárias */}
          <div className="col-lg-6 d-flex flex-column gap-4">
            {news.slice(1).map((item, i) => (
              <div key={i} className="news-card news-card--horizontal">
                <div className="news-card-img-sm">
                  <img src={item.image} alt={item.title} />
                  <span className="news-badge">{item.category}</span>
                </div>
                <div className="news-card-body">
                  <div className="news-date">
                    <Calendar size={13} />
                    {item.date}
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
