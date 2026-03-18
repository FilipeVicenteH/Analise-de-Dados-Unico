import {
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts'
import './AttendanceChart.css'

const pieData = [
  { name: 'Humano', value: 325, color: '#10B981' }, // Unico Green
  { name: 'Bot', value: 10, color: '#8B5CF6' },      // Unico Purple
  { name: 'Ignorou Bot', value: 15, color: '#F59E0B' }, // Unico Orange
]

const barData = [
  { name: 'Humano', value: 325, fill: '#10B981' },
  { name: 'Bot', value: 10, fill: '#8B5CF6' },
  { name: 'Ignorou Bot', value: 15, fill: '#F59E0B' },
]

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)
  return percent > 0.04 ? (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={13} fontWeight={700}>
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  ) : null
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const d = payload[0]
    return (
      <div className="custom-tooltip">
        <div className="tooltip-label">{d.name || d.payload?.name}</div>
        <div className="tooltip-value" style={{ color: d.payload?.color || d.fill || d.color }}>
          {d.value} tickets
        </div>
      </div>
    )
  }
  return null
}

export default function AttendanceChart() {
  return (
    <section className="attendance-section">
      <div className="container">
        <div className="section-label"><span>🤝</span> Distribuição de Atendimento</div>
        <h2 className="section-title">
          Como os tickets foram <span className="gradient-text">respondidos</span>
        </h2>
        <p className="section-subtitle" style={{ marginBottom: 40 }}>
          Análise comparativa entre atendimentos realizados por humanos, pelo bot e tickets ignorados.
        </p>

        <div className="attendance-grid">
          {/* Pie Chart */}
          <div className="card chart-card">
            <div className="chart-card-header">
              <h3 className="chart-title">Distribuição Geral</h3>
              <span className="badge badge-blue">Total: 341</span>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={130}
                  paddingAngle={3}
                  dataKey="value"
                  labelLine={false}
                  label={renderCustomizedLabel}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} stroke="var(--bg-card)" strokeWidth={2} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend
                  iconType="circle"
                  iconSize={10}
                  formatter={(value) => (
                    <span style={{ color: 'var(--text-secondary)', fontSize: 13, fontWeight: 500 }}>{value}</span>
                  )}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="card chart-card">
            <div className="chart-card-header">
              <h3 className="chart-title">Comparativo por Canal</h3>
              <span className="badge badge-green">Volume</span>
            </div>
            <ResponsiveContainer width="100%" height={320}>
              <BarChart data={barData} margin={{ top: 10, right: 10, left: -10, bottom: 10 }}
                barCategoryGap="40%">
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border-light)" vertical={false} />
                <XAxis dataKey="name" tick={{ fill: 'var(--text-secondary)', fontSize: 13 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: 'var(--text-secondary)', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.03)' }} />
                <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                  {barData.map((entry, index) => (
                    <Cell key={index} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Summary cards */}
          <div className="attendance-summary">
            {pieData.map((item) => {
              const pct = ((item.value / 341) * 100).toFixed(1)
              return (
                <div className="attendance-summary-item" key={item.name}>
                  <div className="attendance-summary-header">
                    <div className="attendance-summary-dot" style={{ background: item.color }}></div>
                    <span className="attendance-summary-name" style={{ color: 'var(--text-primary)' }}>{item.name}</span>
                    <span className="attendance-summary-pct" style={{ color: item.color }}>{pct}%</span>
                  </div>
                  <div className="progress-bar-wrap" style={{ marginTop: 8 }}>
                    <div
                      className="progress-bar-fill"
                      style={{ width: `${pct}%`, background: item.color }}
                    ></div>
                  </div>
                  <div className="attendance-summary-count">{item.value} tickets</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
