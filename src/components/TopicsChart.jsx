import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell
} from 'recharts'
import './TopicsChart.css'

const topicsData = [
  { name: 'Erro Extensão', value: 46, color: '#EF4444' }, // Reds
  { name: 'Erro Automação/Msgs', value: 21, color: '#F59E0B' }, // Orange
  { name: 'Rastreio Desatualizado', value: 18, color: '#8B5CF6' }, // Purple
  { name: 'Produto não integrado', value: 7, color: '#06b6d4' }, // Cyan
  { name: 'Plugin de Rastreio', value: 7, color: '#3B82F6' }, // Blue
  { name: 'Dúvidas Configurações', value: 7, color: '#10B981' }, // Green
  { name: 'Banimento', value: 7, color: '#EC4899' }, // Pink
  { name: 'Assinatura', value: 14, color: '#A78BFA' },
  { name: 'ADS Desatualizado', value: 5, color: '#FBBF24' },
  { name: 'Pedidos não integrados', value: 6, color: '#34D399' },
  { name: 'Integração Yampi', value: 6, color: '#60A5FA' },
  { name: 'Integração Shopify', value: 4, color: '#FB7185' },
  { name: 'Erro Dashboard', value: 4, color: '#C084FC' },
  { name: 'Conectar Automação', value: 4, color: '#38BDF8' },
  { name: 'Contato UnicoPag', value: 3, color: '#F97316' },
  { name: 'Automação de E-mail', value: 3, color: '#A3E635' },
  { name: 'Checkout Nativo Shopify', value: 2, color: '#22D3EE' },
  { name: 'Conta Equipe', value: 2, color: '#E879F9' },
  { name: 'Assinatura sem Acesso', value: 2, color: '#FACC15' },
]

const sortedTopics = [...topicsData].sort((a, b) => b.value - a.value)
const topTopics = sortedTopics.slice(0, 10)
const totalTopics = topicsData.reduce((a, b) => a + b.value, 0)

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const d = payload[0]
    const pct = ((d.value / totalTopics) * 100).toFixed(1)
    return (
      <div className="custom-tooltip">
        <div className="tooltip-label">{d.payload.name}</div>
        <div className="tooltip-value" style={{ color: d.payload.color }}>{d.value} tickets</div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2, fontWeight: 500 }}>{pct}% do total</div>
      </div>
    )
  }
  return null
}

export default function TopicsChart() {
  return (
    <section className="topics-section">
      <div className="container">
        <div className="section-label"><span>📋</span> Assuntos dos Tickets</div>
        <h2 className="section-title">
          Principais <span className="gradient-text">Problemas Relatados</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Distribuição e frequência de todos os assuntos abordados nos tickets do período.
        </p>

        <div className="topics-layout">
          {/* Bar Chart */}
          <div className="card" style={{ padding: '32px 24px 24px' }}>
            <div className="chart-card-header">
              <h3 className="chart-title">Top 10 Assuntos</h3>
              <span className="badge badge-red">Mais críticos</span>
            </div>
            <ResponsiveContainer width="100%" height={380}>
              <BarChart
                data={topTopics}
                layout="vertical"
                margin={{ top: 10, right: 40, left: 10, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" horizontal={false} />
                <XAxis type="number" tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={170}
                />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                <Bar dataKey="value" radius={[0, 6, 6, 0]} maxBarSize={22}>
                  {topTopics.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Full list */}
          <div className="topics-list-panel">
            <div className="topics-list-header">
              <span className="chart-title" style={{ fontSize: 16, fontWeight: 700 }}>Todos os Assuntos</span>
              <span className="badge badge-purple">{topicsData.length} categorias</span>
            </div>
            <div className="topics-list">
              {sortedTopics.map((topic, i) => {
                const pct = ((topic.value / totalTopics) * 100).toFixed(1)
                return (
                  <div className="topic-item" key={i}>
                    <div className="topic-item-header">
                      <div className="topic-dot" style={{ background: topic.color }}></div>
                      <span className="topic-name">{topic.name}</span>
                      <span className="topic-count" style={{ color: topic.color }}>{topic.value}</span>
                    </div>
                    <div className="progress-bar-wrap" style={{ marginTop: 8 }}>
                      <div
                        className="progress-bar-fill"
                        style={{ width: `${pct}%`, background: topic.color }}
                      ></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
