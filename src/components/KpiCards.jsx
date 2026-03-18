import { Ticket, Users, Bot, MessageCircleOff, TrendingUp, Clock } from 'lucide-react'
import './KpiCards.css'

const kpis = [
  {
    id: 'total',
    label: 'Tickets Totais',
    value: '341',
    sub: 'no período de 17 dias',
    icon: Ticket,
    gradient: 'var(--gradient-blue)',
    glow: 'rgba(59,130,246,0.15)',
    change: null,
  },
  {
    id: 'human',
    label: 'Respondido por Humano',
    value: '325',
    sub: '95.3% do total',
    icon: Users,
    gradient: 'var(--gradient-green)',
    glow: 'rgba(16,185,129,0.15)',
    change: '+95%',
    positive: true,
  },
  {
    id: 'bot',
    label: 'Respondido por Bot',
    value: '10',
    sub: '2.9% do total',
    icon: Bot,
    gradient: 'var(--gradient-purple)',
    glow: 'rgba(139,92,246,0.15)',
    change: null,
  },
  {
    id: 'ignored',
    label: 'Ignorou o Bot',
    value: '15',
    sub: '4.4% dos atendimentos',
    icon: MessageCircleOff,
    gradient: 'var(--gradient-orange)',
    glow: 'rgba(245,158,11,0.15)',
    change: null,
  },
  {
    id: 'weekly',
    label: 'Tickets Semana',
    value: '172',
    sub: '09/03 – 17/03/2026',
    icon: Clock,
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #3B82F6 100%)',
    glow: 'rgba(59,130,246,0.15)',
    change: null,
  },
  {
    id: 'rate',
    label: 'Taxa de Escalada',
    value: '97%',
    sub: 'bot → humano',
    icon: TrendingUp,
    gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
    glow: 'rgba(236,72,153,0.15)',
    change: null,
  },
]

export default function KpiCards() {
  return (
    <section className="kpi-section">
      <div className="container">
        <div className="section-label">
          <span>📊</span> Indicadores Principais
        </div>
        <h2 className="section-title">
          Visão <span className="gradient-text">KPIs</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Resumo dos principais indicadores coletados no período analisado.
        </p>

        <div className="kpi-grid">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon
            return (
              <div
                className="kpi-card card animate-fade-up"
                key={kpi.id}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="kpi-card-header">
                  <div
                    className="kpi-icon"
                    style={{
                      background: kpi.gradient,
                      boxShadow: `0 8px 16px ${kpi.glow}`,
                    }}
                  >
                    <Icon size={22} color="white" />
                  </div>
                  {kpi.change && (
                    <span className={`badge ${kpi.positive ? 'badge-green' : 'badge-red'}`}>
                      {kpi.change}
                    </span>
                  )}
                </div>
                <div className="kpi-value">{kpi.value}</div>
                <div className="kpi-label">{kpi.label}</div>
                <div className="kpi-sub">{kpi.sub}</div>
                <div
                  className="kpi-glow-bar"
                  style={{ background: kpi.gradient }}
                ></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
