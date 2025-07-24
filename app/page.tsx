import Header from '../components/Header'
import Hero from '../components/Hero'
import CompanyOverviewSection from '../components/CompanyOverviewSection'
import ExpertiseSection from '../components/ExpertiseSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <CompanyOverviewSection />
      <ExpertiseSection />
      <AboutSection />
      <Footer />
    </main>
  )
} 