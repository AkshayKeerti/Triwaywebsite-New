import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { 
  Users, 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Code, 
  Palette, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  Globe,
  Target
} from 'lucide-react'
import Link from 'next/link'

export default function ServicesPage() {
  const serviceCategories = [
    {
      id: 'managed-services',
      title: 'Managed Services',
      description: 'Complete IT outsourcing and support solutions',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      features: [
        'IT Support & Outsourcing',
        'AMC & Vendor Support',
        'Project & Facility Management',
        'Incident Response & IT Consulting',
        'Infrastructure & Software Migration',
        'Virtualization & Telecom'
      ],
      stats: { clients: '200+', uptime: '99.9%', response: '<15min' },
      href: '/services/managed-services'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration',
      icon: Cloud,
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      features: [
        'Cloud Infrastructure',
        'Cloud Migrations & Management',
        'SaaS Tools (CRM, ERP, Docs)',
        'Microsoft & Zoho Ecosystems'
      ],
      stats: { deployments: '500+', savings: '40%', uptime: '99.95%' },
      href: '/services/cloud-services'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Advanced threat detection and security',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      features: [
        'Network & Endpoint Security',
        'Threat Detection (SOC, EDR, Email Security)',
        'Identity & Access Management (IAM)',
        'Cybersecurity Consulting'
      ],
      stats: { threats: '10M+', incidents: '0', coverage: '100%' },
      href: '/services/cybersecurity'
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure',
      description: 'On-premise and hybrid infrastructure solutions',
      icon: Server,
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      features: [
        'On-Prem Servers & Networking',
        'Hardware Solutions',
        'Power Backup & Infra Setup',
        'Monitoring & Support'
      ],
      stats: { uptime: '99.9%', deployments: '500+', response: '15min' },
      href: '/services/infrastructure'
    },
    {
      id: 'ai-automation',
      title: 'AI & Automation',
      description: 'Intelligent automation and AI integrations',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      features: [
        'AI Integrations & CoPilot',
        'RPA & Workflow Automation',
        'Predictive Analytics & Dashboards',
        'Generative AI Solutions'
      ],
      stats: { efficiency: '60%', costReduction: '40%', models: '100+' },
      href: '/services/ai-automation'
    },
    {
      id: 'software-solutions',
      title: 'Software Solutions',
      description: 'Custom software and application development',
      icon: Code,
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200',
      features: [
        'Custom Software & Apps',
        'Industry-Specific Solutions',
        'Web & Mobile Tech',
        'UI/UX & Product Consulting'
      ],
      stats: { projects: '200+', clients: '50+', satisfaction: '99%' },
      href: '/services/software-solutions'
    },
    {
      id: 'design-experience',
      title: 'Design & Experience',
      description: 'User experience and visual design services',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
      features: [
        'UI/UX Design',
        'Product Strategy',
        'Design Systems',
        'Journey Mapping',
        'Branding & Visual Design'
      ],
      stats: { projects: '150+', satisfaction: '95%', conversion: '40%' },
      href: '/services/design-experience'
    }
  ]

  const benefits = [
    {
      icon: Target,
      title: 'Comprehensive Solutions',
      description: 'End-to-end IT services covering all aspects of your business'
    },
    {
      icon: Sparkles,
      title: 'Innovation Focus',
      description: 'Cutting-edge technologies and modern approaches'
    },
    {
      icon: CheckCircle,
      title: 'Proven Expertise',
      description: 'Years of experience across diverse industries'
    },
    {
      icon: Globe,
      title: 'Global Standards',
      description: 'International best practices and quality assurance'
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                <Sparkles className="h-8 w-8" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive IT solutions that transform your business operations. 
              From managed services to AI automation, we provide the expertise and 
              technology you need to succeed in the digital age.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>7 Service Categories</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of IT services designed to meet 
              every aspect of your business technology needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <Link 
                key={index} 
                href={category.href}
                className="group block"
              >
                <div className={`service-card h-full ${category.bgColor} ${category.borderColor} border-2`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}>
                      <category.icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {category.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(category.stats).map(([key, value], statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-lg font-bold text-blue-600">{value}</div>
                        <div className="text-xs text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      Explore {category.title} →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Triway?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of working with a comprehensive IT services 
              provider that understands your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our comprehensive IT services can help you achieve 
            your business goals. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 