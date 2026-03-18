import './index.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import KpiCards from './components/KpiCards'
import AttendanceChart from './components/AttendanceChart'
import WeeklyChart from './components/WeeklyChart'
import FlowsSection from './components/FlowsSection'
import TopicsChart from './components/TopicsChart'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <HeroSection />
      <KpiCards />
      <AttendanceChart />
      <WeeklyChart />
      <FlowsSection />
      <TopicsChart />
      <FeaturesSection />
      <Footer />
    </div>
  )
}

export default App
