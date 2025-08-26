import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Tag, Shield, Users, CheckCircle, BarChart3, Award, Sparkles, TrendingUp, Zap, Globe, Building2, Target, Star, Eye, Heart, MessageCircle, Code } from 'lucide-react'
import Button from '../../../components/ui/Button'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Case study data - in a real app, this would come from a database or CMS
const caseStudies = {
  "1": {
    id: 1,
    title: "Digital Banking Transformation",
    client: "Global Bank",
    industry: "Banking & Finance",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    challenge: "Modernize legacy banking systems and improve customer experience while maintaining security compliance.",
    solution: "Implemented cloud-native banking platform with AI-powered fraud detection and mobile-first design.",
    results: [
      "40% reduction in transaction processing time",
      "99.9% uptime achieved",
      "50% increase in mobile app adoption",
      "Enhanced security with zero breaches"
    ],
    image: "/dubai.png",
    duration: "18 months",
    team: "25+ experts",
    fullDescription: "Our team worked closely with Global Bank to completely transform their digital banking infrastructure. The project involved migrating from legacy mainframe systems to a modern, cloud-native platform that could scale with their growing customer base while maintaining the highest security standards required in the financial industry.",
    detailedChallenge: "Global Bank was facing significant challenges with their aging banking infrastructure. Their legacy mainframe systems were struggling to handle increasing transaction volumes, their mobile banking app was outdated and slow, and they needed to implement stronger fraud detection capabilities to meet regulatory requirements. Additionally, their customer experience was falling behind competitors, leading to customer churn.",
    detailedSolution: "We designed and implemented a comprehensive digital transformation solution that included:\n\n• Cloud-native microservices architecture for scalability and reliability\n• AI-powered fraud detection system with real-time monitoring\n• Modern mobile-first banking application with intuitive UX\n• Advanced security measures including multi-factor authentication and encryption\n• Real-time data analytics and reporting capabilities\n• Seamless integration with existing banking systems",
    technologies: [
      "AWS Cloud Infrastructure",
      "React Native Mobile App",
      "Node.js Backend Services",
      "PostgreSQL Database",
      "Redis Caching",
      "Kubernetes Orchestration",
      "TensorFlow AI Models",
      "Docker Containers"
    ],
    process: [
      {
        phase: "Discovery & Analysis",
        description: "Comprehensive analysis of existing systems, security requirements, and business needs",
        duration: "2 months"
      },
      {
        phase: "Architecture Design",
        description: "Design of scalable cloud architecture and security framework",
        duration: "3 months"
      },
      {
        phase: "Development & Testing",
        description: "Agile development with continuous integration and security testing",
        duration: "10 months"
      },
      {
        phase: "Deployment & Training",
        description: "Phased deployment with comprehensive staff training",
        duration: "3 months"
      }
    ],
    testimonials: [
      {
        quote: "The transformation exceeded our expectations. Our customers love the new mobile experience, and our operational efficiency has improved dramatically.",
        author: "Sarah Johnson",
        role: "CTO, Global Bank"
      },
      {
        quote: "The security implementation is world-class. We've had zero security incidents since the launch.",
        author: "Michael Chen",
        role: "Head of Security, Global Bank"
      }
    ]
  }
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies[params.id as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/case-studies" className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors duration-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${caseStudy.color} rounded-2xl flex items-center justify-center`}>
                  <caseStudy.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary-500">{caseStudy.industry}</span>
                  <p className="text-sm text-gray-500">Client: {caseStudy.client}</p>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8">
                {caseStudy.fullDescription}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>{caseStudy.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>{caseStudy.team}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Building2 className="h-5 w-5" />
                  <span>{caseStudy.client}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary" icon={ArrowRight}>
                  Start Your Project
                </Button>
                <Button href="/services" variant="outline">
                  Explore Services
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
              </div>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {caseStudy.detailedChallenge}
              </p>
            </div>
            
            <div className="card p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Solution</h2>
              </div>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                {caseStudy.detailedSolution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies Used</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leveraged cutting-edge technologies to deliver a robust, scalable, and secure banking platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {caseStudy.technologies.map((tech, index) => (
              <div key={index} className="card p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We followed a structured approach to ensure successful delivery and minimal disruption to banking operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.process.map((phase, index) => (
              <div key={index} className="relative">
                <div className="card p-6 text-center h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                  <p className="text-gray-600 text-sm mb-3">{phase.description}</p>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                    {phase.duration}
                  </span>
                </div>
                
                {index < caseStudy.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The transformation delivered measurable improvements across all key performance indicators.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.results.map((result, index) => (
              <div key={index} className="card p-6 flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Client Testimonials</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear directly from our clients about the impact of our solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.testimonials.map((testimonial, index) => (
              <div key={index} className="card p-8">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our proven technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline">
              Start Your Project
            </Button>
            <Button href="/case-studies" variant="ghost">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
