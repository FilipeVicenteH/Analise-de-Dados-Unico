import { ArrowRight, Headphones, MessageCircle, AlertTriangle } from 'lucide-react'
import './FlowsSection.css'

const flows = [
  {
    id: 1,
    icon: Headphones,
    color: '#3B82F6', // Unico Blue
    glow: 'rgba(59,130,246,0.15)',
    steps: [
      { label: 'Suporte', type: 'start' },
      { label: 'Comercial', type: 'end' },
    ],
    description: 'Cliente inicia no Suporte e é redirecionado para o atendimento Comercial.',
    badge: 'Redirecionamento',
    badgeColor: 'badge-blue',
  },
  {
    id: 2,
    icon: MessageCircle,
    color: '#8B5CF6', // Unico Purple
    glow: 'rgba(139,92,246,0.15)',
    steps: [
      { label: 'Dúvida', type: 'start' },
      { label: 'Automação\nWhatsApp', type: 'mid' },
      { label: 'Falar com\nAtendente', type: 'end' },
    ],
    description: 'Cliente com dúvida aciona a automação de WhatsApp e solicita atendente humano.',
    badge: 'Escalada WhatsApp',
    badgeColor: 'badge-purple',
  },
  {
    id: 3,
    icon: AlertTriangle,
    color: '#F59E0B', // Unico Orange
    glow: 'rgba(245,158,11,0.15)',
    steps: [
      { label: 'Erro', type: 'start' },
      { label: 'WhatsApp\nAutomação', type: 'mid' },
      { label: 'Falar com\nAtendente', type: 'end' },
    ],
    description: 'Cliente com erro é direcionado pela automação e necessita de suporte humano.',
    badge: 'Suporte Técnico',
    badgeColor: 'badge-orange',
  },
]

export default function FlowsSection() {
  return (
    <section className="flows-section">
      <div className="container">
        <div className="section-label"><span>🔀</span> Fluxos de Saída</div>
        <h2 className="section-title">
          Caminhos do <span className="gradient-text">Bot ao Humano</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Os três principais fluxos que causam a saída da automação e o encaminhamento para atendimento humano.
        </p>

        <div className="flows-grid">
          {flows.map((flow) => {
            const IconComp = flow.icon
            return (
              <div className="card flow-card" key={flow.id}>
                <div className="flow-card-top">
                  <div
                    className="flow-icon"
                    style={{ background: `linear-gradient(135deg, ${flow.color} 0%, ${flow.color}E6 100%)`, boxShadow: `0 8px 16px ${flow.glow}` }}
                  >
                    <IconComp size={20} color="white" />
                  </div>
                  <span className={`badge ${flow.badgeColor}`}>{flow.badge}</span>
                </div>

                <div className="flow-steps">
                  {flow.steps.map((step, i) => (
                    <div className="flow-step-group" key={i}>
                      <div
                        className={`flow-step flow-step-${step.type}`}
                        style={{
                          borderColor: step.type === 'mid' ? 'var(--border-light)' : step.type === 'end' ? flow.color : 'transparent',
                          color: step.type !== 'start' ? 'var(--text-primary)' : 'white',
                          background: step.type === 'start'
                            ? flow.color
                            : step.type === 'end' ? `rgba(${hexToRgb(flow.color)},0.05)` : 'var(--bg-primary)',
                        }}
                      >
                        {step.label.split('\n').map((line, li) => (
                          <span key={li} style={{ fontWeight: step.type === 'start' ? 700 : 600 }}>{line}</span>
                        ))}
                      </div>
                      {i < flow.steps.length - 1 && (
                        <ArrowRight size={16} color="var(--border-light)" className="flow-arrow" />
                      )}
                    </div>
                  ))}
                </div>

                <p className="flow-description">{flow.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
    : '59,130,246'
}
