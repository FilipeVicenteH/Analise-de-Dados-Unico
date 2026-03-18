import { BarChart2, Heart } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo-icon">
            <BarChart2 size={16} />
          </div>
          <span>Análise de Dados — Relatório de Atendimento UnicoDrop</span>
        </div>
        <div className="footer-meta">
          <span>Período: 01/03/2026 – 17/03/2026</span>
          <span className="footer-dot">·</span>
          <span>341 Tickets Analisados</span>
          <span className="footer-dot">·</span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            React
          </span>
        </div>
      </div>
    </footer>
  );
}
