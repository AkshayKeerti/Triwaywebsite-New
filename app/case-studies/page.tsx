import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ArrowRight, TrendingUp, Users, Shield, Zap, Globe, Building, CreditCard, Car, GraduationCap, Briefcase, Award, Clock, DollarSign, CheckCircle, ShoppingBag, Heart, Settings, Truck } from 'lucide-react'
import Image from 'next/image'

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Digital Banking Transformation",
      client: "Global Bank",
      industry: "Banking & Finance",
      icon: CreditCard,
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
      team: "25+ experts"
    },
    {
      id: 2,
      title: "E-commerce Platform Overhaul",
      client: "Retail Chain",
      industry: "Retail & E-commerce",
      icon: ShoppingBag,
      color: "from-green-500 to-green-600",
      challenge: "Scale e-commerce operations to handle 10x traffic increase during peak seasons.",
      solution: "Built scalable microservices architecture with AI-powered inventory management and personalized recommendations.",
      results: [
        "300% increase in peak season capacity",
        "35% improvement in conversion rates",
        "60% faster page load times",
        "Real-time inventory synchronization"
      ],
      image: "/dubai.png",
      duration: "12 months",
      team: "20+ experts"
    },
    {
      id: 3,
      title: "Healthcare Data Analytics",
      client: "Hospital Network",
      industry: "Healthcare",
      icon: Heart,
      color: "from-red-500 to-red-600",
      challenge: "Implement secure, HIPAA-compliant data analytics platform for patient care optimization.",
      solution: "Developed secure cloud-based analytics platform with machine learning for predictive healthcare insights.",
      results: [
        "25% improvement in patient outcomes",
        "30% reduction in operational costs",
        "100% HIPAA compliance achieved",
        "Real-time patient monitoring"
      ],
      image: "/dubai.png",
      duration: "15 months",
      team: "18+ experts"
    },
    {
      id: 4,
      title: "Manufacturing IoT Integration",
      client: "Manufacturing Corp",
      industry: "Manufacturing",
      icon: Settings,
      color: "from-purple-500 to-purple-600",
      challenge: "Implement IoT sensors and predictive maintenance across 50+ manufacturing facilities.",
      solution: "Deployed comprehensive IoT infrastructure with AI-powered predictive analytics and real-time monitoring.",
      results: [
        "45% reduction in equipment downtime",
        "20% increase in production efficiency",
        "Predictive maintenance accuracy: 95%",
        "Real-time facility monitoring"
      ],
      image: "/dubai.png",
      duration: "24 months",
      team: "30+ experts"
    },
    {
      id: 5,
      title: "Government Digital Services",
      client: "State Government",
      industry: "Government",
      icon: Building,
      color: "from-indigo-500 to-indigo-600",
      challenge: "Modernize citizen services and improve government efficiency through digital transformation.",
      solution: "Built comprehensive digital government platform with secure authentication and automated workflows.",
      results: [
        "80% reduction in service processing time",
        "90% citizen satisfaction rate",
        "50% reduction in operational costs",
        "Enhanced data security and compliance"
      ],
      image: "/dubai.png",
      duration: "20 months",
      team: "35+ experts"
    },
    {
      id: 6,
      title: "Logistics Optimization",
      client: "Shipping Company",
      industry: "Logistics & Transportation",
      icon: Truck,
      color: "from-orange-500 to-orange-600",
      challenge: "Optimize global logistics operations and reduce delivery times by 30%.",
      solution: "Implemented AI-powered route optimization and real-time tracking system with predictive analytics.",
      results: [
        "35% reduction in delivery times",
        "25% decrease in fuel costs",
        "Real-time shipment tracking",
        "99% on-time delivery rate"
      ],
      image: "/dubai.png",
      duration: "16 months",
      team: "22+ experts"
    }
  ]

  const industries = [
    { name: "Banking & Finance", icon: CreditCard, count: 15 },
    { name: "Healthcare", icon: Heart, count: 12 },
    { name: "Retail & E-commerce", icon: ShoppingBag, count: 18 },
    { name: "Manufacturing", icon: Settings, count: 10 },
    { name: "Government", icon: Building, count: 8 },
    { name: "Logistics", icon: Truck, count: 14 }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Studies</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how we've helped organizations across industries transform their operations 
              and achieve remarkable results through innovative technology solutions.
            </p>
            <div className="flex justify-center">
              <a href="#case-studies" className="btn-primary">
                Explore Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">$2B+</div>
              <div className="text-gray-600 font-medium">Value Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have deep expertise across multiple industries, delivering tailored solutions that drive real business impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="card p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{industry.name}</h3>
                    <p className="text-gray-600">{industry.count} projects</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section id="case-studies" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our most impactful projects and see how we've helped organizations achieve their goals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="card overflow-hidden group">
                <div className="relative">
                  <Image
                    src={study.image}
                    alt={study.title}
                    width={600}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center`}>
                      <study.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-primary-500">{study.industry}</span>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{study.team}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">Client: {study.client}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Results</h4>
                    <div className="space-y-2">
                      {study.results.map((result, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent-500 flex-shrink-0" />
                          <span className="text-sm text-gray-600">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <a href={`/case-studies/${study.id}`} className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
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
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Start Your Success Story?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our proven technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </a>
            <a href="/services" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-colors duration-300">
              Explore Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 