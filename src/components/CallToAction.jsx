import { MessageCircle, ArrowRight } from 'lucide-react'
import '../styles/CallToAction.css'

export default function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row align-items-center g-4">
          {/* Left */}
          <div className="col-lg-8">
            <div className="cta-icon-wrap">
              <MessageCircle size={28} />
            </div>
            <h2 className="cta-title">
              Faça parte dessa corrente do bem.
            </h2>
            <p className="cta-text">
              O Bahamas Solidário já arrecadou mais de R$ 5 milhões e beneficiou mais de 239
              instituições em Minas Gerais. Você também pode contribuir — doe seu troco,
              participe das campanhas ou entre em contato para saber mais.
            </p>
          </div>

          {/* Right */}
          <div className="col-lg-4 d-flex justify-content-lg-end">
            <a href="#formulario-contato" className="btn-cta">
              Fale Conosco
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
