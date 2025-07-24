import Header from '../components/Header'
import Hero from '../components/Hero'
import ServicesShowcaseSection from '../components/ServicesShowcaseSection'
import BenefitsSection from '../components/BenefitsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ServicesShowcaseSection />
      <BenefitsSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
} 