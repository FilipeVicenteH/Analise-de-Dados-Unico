import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  ReferenceLine
} from 'recharts'
import './WeeklyChart.css'

// Simulating daily ticket distribution for the 17-day period
const dailyData = [
  { day: '01/03', tickets: 18, label: 'Dom' },
  { day: '02/03', tickets: 22, label: 'Seg' },
  { day: '03/03', tickets: 19, label: 'Ter' },
  { day: '04/03', tickets: 21, label: 'Qua' },
  { day: '05/03', tickets: 17, label: 'Qui' },
  { day: '06/03', tickets: 14, label: 'Sex' },
  { day: '07/03', tickets: 12, label: 'Sáb' },
  { day: '08/03', tickets: 16, label: 'Dom' },
  { day: '09/03', tickets: 24, label: 'Seg' },
  { day: '10/03', tickets: 21, label: 'Ter' },
  { day: '11/03', tickets: 19, label: 'Qua' },
  { day: '12/03', tickets: 22, label: 'Qui' },
  { day: '13/03', tickets: 18, label: 'Sex' },
  { day: '14/03', tickets: 16, label: 'Sáb' },
  { day: '15/03', tickets: 17, label: 'Dom' },
  { day: '16/03', tickets: 19, label: 'Seg' },
  { day: '17/03', tickets: 16, label: 'Ter' },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div className="tooltip-label">{label}</div>
        <div className="tooltip-value" style={{ color: 'var(--accent-blue)' }}>
          {payload[0].value} tickets
        </div>
      </div>
    )
  }
  return null
}

export default function WeeklyChart() {
  const week1Total = dailyData.slice(0, 8).reduce((a, b) => a + b.tickets, 0)
  const week2Total = dailyData.slice(8).reduce((a, b) => a + b.tickets, 0)

  return (
    <section className="weekly-section">
      <div className="container">
        <div className="weekly-header">
          <div>
            <div className="section-label"><span>📅</span> Evolução Diária</div>
            <h2 className="section-title">
              Tickets por <span className="gradient-text">Período</span>
            </h2>
            <p className="section-subtitle">
              Volume diário de tickets ao longo dos 17 dias analisados, com marco da semana de pico.
            </p>
          </div>
          <div className="weekly-summary-cards">
            <div className="weekly-summary-card">
              <div className="weekly-summary-label">Semana 1</div>
              <div className="weekly-summary-value" style={{ color: 'var(--accent-cyan)' }}>{week1Total}</div>
              <div className="weekly-summary-sub">01/03 – 08/03</div>
            </div>
            <div className="weekly-summary-card highlight">
              <div className="weekly-summary-label">Semana 2</div>
              <div className="weekly-summary-value" style={{ color: 'var(--accent-blue)' }}>{week2Total}</div>
              <div className="weekly-summary-sub">09/03 – 17/03</div>
            </div>
          </div>
        </div>

        <div className="card" style={{ padding: '28px 20px 20px' }}>
          <ResponsiveContainer width="100%" height={340}>
            <AreaChart data={dailyData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
              <XAxis
                dataKey="day"
                tick={{ fill: 'var(--text-secondary)', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                interval={1}
              />
              <YAxis
                tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(59,130,246,0.2)', strokeWidth: 1 }} />
              <ReferenceLine x="09/03" stroke="rgba(59,130,246,0.3)" strokeDasharray="4 4" label={{ value: 'Semana 2', fill: '#3B82F6', fontSize: 11, position: 'top' }} />
              <Area
                type="monotone"
                dataKey="tickets"
                stroke="#3B82F6"
                strokeWidth={3}
                fill="url(#blueGrad)"
                dot={{ fill: '#3B82F6', r: 3, strokeWidth: 0 }}
                activeDot={{ fill: '#3B82F6', r: 6, strokeWidth: 3, stroke: 'rgba(59,130,246,0.3)' }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}
