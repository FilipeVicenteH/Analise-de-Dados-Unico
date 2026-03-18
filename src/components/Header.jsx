import { BarChart2, Activity } from 'lucide-react'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="header-logo">
          <div className="header-logo-icon">
            <BarChart2 size={20} />
          </div>
          <span className="header-logo-text">Análise de Dados</span>
        </div>

        <div className="header-meta">
          <div className="header-live">
            <span className="dot dot-live" style={{ background: '#10b981' }}></span>
            <span>01/03 – 17/03/2026</span>
          </div>
          <div className="badge badge-blue">
            <Activity size={12} />
            Relatório Semanal
          </div>
        </div>
      </div>
    </header>
  )
}
