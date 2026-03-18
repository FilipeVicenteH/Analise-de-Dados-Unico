import { Sparkles, Globe, Package, Truck, ShoppingCart, Smartphone, Store, Plus } from 'lucide-react'
import './FeaturesSection.css'

const features = [
  {
    icon: Globe,
    name: 'Loja Internacional',
    requests: 2,
    color: '#3B82F6', // Blue
    desc: 'Suporte para vendas internacionais',
  },
  {
    icon: Package,
    name: 'Dropi',
    requests: 1,
    color: '#8B5CF6', // Purple
    desc: 'Integração com plataforma Dropi',
  },
  {
    icon: Truck,
    name: 'Plugin de Rastreio na Nuvem',
    requests: 1,
    color: '#06B6D4', // Cyan
    desc: 'Rastreio em tempo real cloud',
  },
  {
    icon: ShoppingCart,
    name: 'Checkout Zedy',
    requests: 1,
    color: '#10B981', // Green
    desc: 'Integração com checkout Zedy',
  },
  {
    icon: Smartphone,
    name: 'API WhatsApp',
    requests: 3,
    color: '#10B981', // WhatsApp Green (Unico Green here)
    desc: 'Acesso à API oficial do WhatsApp',
  },
  {
    icon: Store,
    name: 'Checkout da Luna',
    requests: 1,
    color: '#EC4899', // Pink
    desc: 'Integração com checkout Luna',
  },
  {
    icon: Plus,
    name: 'Múltiplos Rastreios por Pedido',
    requests: 1,
    color: '#F59E0B', // Orange
    desc: 'Adicionar mais de um rastreio',
  },
]

const totalRequests = features.reduce((a, b) => a + b.requests, 0)

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="section-label"><span>✨</span> Pedidos de Funcionalidades</div>
        <h2 className="section-title">
          Novas <span className="gradient-text">Solicitações</span> dos Clientes
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Funcionalidades mais requisitadas pelos clientes durante o período de atendimento.
        </p>

        <div className="features-grid">
          {features.map((feat, i) => {
            const IconComp = feat.icon
            return (
              <div className="card feature-card animate-fade-up" key={i}
                style={{ animationDelay: `${i * 0.07}s`, padding: '24px' }}>
                <div className="feature-card-top">
                  <div
                    className="feature-icon"
                    style={{ background: `${feat.color}15`, border: `1px solid ${feat.color}20` }}
                  >
                    <IconComp size={20} color={feat.color} />
                  </div>
                  <div
                    className="feature-requests"
                    style={{ color: feat.color, background: `${feat.color}10`, border: `1px solid ${feat.color}20` }}
                  >
                    {feat.requests}x
                  </div>
                </div>
                <div className="feature-name">{feat.name}</div>
                <div className="feature-desc">{feat.desc}</div>
                <div className="feature-bar-wrap">
                  <div
                    className="feature-bar-fill"
                    style={{
                      width: `${(feat.requests / 3) * 100}%`,
                      background: `linear-gradient(90deg, ${feat.color}, ${feat.color}CC)`,
                    }}
                  ></div>
                </div>
              </div>
            )
          })}

          {/* Summary card */}
          <div className="card feature-summary-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div className="feature-icon" style={{ background: 'var(--gradient-blue)', border: 'none' }}>
                <Sparkles size={18} color="white" />
              </div>
              <span className="chart-title" style={{ fontSize: 18 }}>Resumo Global</span>
            </div>
            <div className="feature-summary-stat">
              <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Funcionalidades pedidas</span>
              <span style={{ fontSize: 28, fontWeight: 900, color: 'var(--accent-blue)' }}>{features.length}</span>
            </div>
            <div className="divider" style={{ margin: '16px 0' }}></div>
            <div className="feature-summary-stat">
              <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Total de pedidos</span>
              <span style={{ fontSize: 28, fontWeight: 900, color: 'var(--accent-purple)' }}>{totalRequests}</span>
            </div>
            <div className="divider" style={{ margin: '16px 0' }}></div>
            <div className="feature-summary-stat">
              <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Pedido mais urgente</span>
              <span className="badge badge-green">API WhatsApp ×3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
