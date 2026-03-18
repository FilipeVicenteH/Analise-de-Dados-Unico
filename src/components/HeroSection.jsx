import { TrendingUp, Calendar, Bot, Users } from 'lucide-react'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-eyebrow animate-fade-up">
          <Calendar size={14} />
          <span>Período: 01/03/2026 – 17/03/2026 · 17 dias de coleta</span>
        </div>

        <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Relatório de <span className="gradient-text">Atendimento</span>
          <br />& Análise de Tickets
        </h1>

        <p className="hero-subtitle animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Visão consolidada de todos os atendimentos realizados no período, incluindo performance por canal,
          fluxos de automação, principais assuntos e solicitações de novas funcionalidades.
        </p>

        <div className="hero-stats animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="hero-stat">
            <div className="hero-stat-icon" style={{ background: 'rgba(79,124,255,0.15)', color: 'var(--accent-blue)' }}>
              <TrendingUp size={22} />
            </div>
            <div>
              <div className="hero-stat-value">341</div>
              <div className="hero-stat-label">Tickets Totais</div>
            </div>
          </div>

          <div className="hero-stat-divider"></div>

          <div className="hero-stat">
            <div className="hero-stat-icon" style={{ background: 'rgba(16,185,129,0.15)', color: 'var(--accent-green)' }}>
              <Users size={22} />
            </div>
            <div>
              <div className="hero-stat-value">325</div>
              <div className="hero-stat-label">Humano</div>
            </div>
          </div>

          <div className="hero-stat-divider"></div>

          <div className="hero-stat">
            <div className="hero-stat-icon" style={{ background: 'rgba(139,92,246,0.15)', color: 'var(--accent-purple)' }}>
              <Bot size={22} />
            </div>
            <div>
              <div className="hero-stat-value">10</div>
              <div className="hero-stat-label">Bot</div>
            </div>
          </div>

          <div className="hero-stat-divider"></div>

          <div className="hero-stat">
            <div className="hero-stat-icon" style={{ background: 'rgba(245,158,11,0.15)', color: 'var(--accent-orange)' }}>
              <Calendar size={22} />
            </div>
            <div>
              <div className="hero-stat-value">172</div>
              <div className="hero-stat-label">Tickets/Semana</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
