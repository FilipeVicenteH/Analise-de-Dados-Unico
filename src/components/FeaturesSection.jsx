import { Sparkles, Globe, Package, Truck, ShoppingCart, Smartphone, Store, Plus, Users, Link } from 'lucide-react'
import { useState } from 'react'
import './FeaturesSection.css'

const features = [
  {
    icon: Smartphone,
    name: 'API WhatsApp',
    requests: 4,
    color: '#10B981', // Green
    desc: 'Conexão com a API oficial do WhatsApp',
  },
  {
    icon: Truck,
    name: 'Movimentações Anjun',
    requests: 2,
    color: '#3B82F6', // Blue
    desc: 'Atualizações internacionais do código Anjun',
  },
  {
    icon: Store,
    name: 'Checkout Luna',
    requests: 2,
    color: '#EC4899', // Pink
    desc: 'Integração com checkout da Luna',
  },
  {
    icon: Truck,
    name: 'Movimentações 888',
    requests: 1,
    color: '#F59E0B', // Orange
    desc: 'Atualizações internacionais do código 888',
  },
  {
    icon: Package,
    name: 'Atualização 17 Tracking',
    requests: 1,
    color: '#8B5CF6', // Purple
    desc: 'Integração e melhorias do 17 Tracking',
  },
  {
    icon: Users,
    name: 'Grupo de Membros',
    requests: 1,
    color: '#4F46E5', // Indigo
    desc: 'Comunidade para networking e troca de cases',
  },
  {
    icon: Link,
    name: 'Conexão entre Contas',
    requests: 1,
    color: '#06B6D4', // Cyan
    desc: 'Administrar múltiplos e-commerces',
  },
  // Restore old requested items:
  {
    icon: Package,
    name: 'Dropi',
    requests: 1,
    color: '#8B5CF6', // Purple
    desc: 'Integração com plataforma Dropi',
  },
  {
    icon: Truck,
    name: 'Plugin de Rastreio Nuvem',
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
    icon: Plus,
    name: 'Multi Rastreios por Pedido',
    requests: 1,
    color: '#F59E0B', // Orange
    desc: 'Adicionar mais de um rastreio',
  },
]

const totalRequests = features.reduce((a, b) => a + b.requests, 0)
const maxRequests = Math.max(...features.map(f => f.requests), 1)
const mostRequested = features.reduce((prev, current) => (prev.requests > current.requests) ? prev : current)

export default function FeaturesSection() {
  const [showAll, setShowAll] = useState(false)
  
  // Sort them naturally if needed, but they are arranged properly above.
  const sortedFeatures = [...features].sort((a, b) => b.requests - a.requests)
  const displayFeatures = showAll ? sortedFeatures : sortedFeatures.slice(0, 7)

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
          {displayFeatures.map((feat, i) => {
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
                      width: `${(feat.requests / maxRequests) * 100}%`,
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
              <span className="badge badge-green" style={{ background: `${mostRequested.color}20`, color: mostRequested.color, borderColor: `${mostRequested.color}40` }}>
                {mostRequested.name} &times;{mostRequested.requests}
              </span>
            </div>
          </div>
        </div>
        
        {features.length > 7 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: 32 }}>
            <button 
              onClick={() => setShowAll(!showAll)}
              style={{
                background: 'var(--bg-card)', 
                border: '1px solid var(--border)', 
                padding: '10px 24px', 
                borderRadius: '100px',
                color: 'var(--text-primary)', 
                fontWeight: 600, 
                cursor: 'pointer',
                display: 'flex', 
                alignItems: 'center', 
                gap: 8,
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--text-secondary)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'none' }}
            >
              {showAll ? 'Mostrar menos' : `Ver outras solicitações (${features.length - 7})`}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
