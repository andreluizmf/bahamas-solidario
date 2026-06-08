import { useState } from 'react'
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react'
import '../styles/Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulação de envio
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section className="contact-section" id="formulario-contato">
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
            Fale Conosco
          </div>
          <h2 className="section-title">Entre em contato</h2>
          <p className="section-subtitle mx-auto">
            Tem dúvidas, sugestões ou quer saber como participar? Envie uma
            mensagem e retornaremos em breve.
          </p>
        </div>

        <div className="row g-5 align-items-start">
          {/* Info */}
          <div className="col-lg-4">
            <div className="contact-info-card">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <h6>Endereço</h6>
                  <p>Escritório Central: BR 040, KM 780, Distrito Industrial<br />Juiz de Fora, MG</p>
                </div>
              </div>
              
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <h6>E-mail</h6>
                  <p>contatosolidario@bahamas.com.br</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="col-lg-8">
            {sent ? (
              <div className="contact-success">
                <CheckCircle size={48} />
                <h4>Mensagem enviada!</h4>
                <p>Obrigado pelo contato. Retornaremos em breve.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="name">Nome completo</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="email">E-mail</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="subject">Assunto</label>
                    <select
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecione um assunto</option>
                      <option value="voluntario">Quero ser voluntário</option>
                      <option value="parceria">Parceria institucional</option>
                      <option value="informacoes">Informações sobre ações</option>
                      <option value="imprensa">Imprensa</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Escreva sua mensagem..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="contact-submit">
                      <Send size={16} />
                      Enviar mensagem
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
