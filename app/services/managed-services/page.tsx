import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, ArrowRight, CheckCircle, Clock, Shield, Zap, Globe, Headphones } from 'lucide-react'
import Link from 'next/link'

export default function ManagedServicesPage() {
  const services = [
    {
      title: 'End-to-End IT Support & Outsourcing',
      description: 'Comprehensive IT infrastructure management and support services for businesses of all sizes.',
      icon: Headphones,
      color: 'from-blue-500 to-blue-600',
      features: [
        '24/7 IT support and monitoring',
        'Infrastructure management',
        'Help desk services',
        'Proactive maintenance',
        'Performance optimization',
        'Cost-effective outsourcing'
      ],
      href: '/services/managed-services/end-to-end-it-support'
    },
    {
      title: 'AMC & Vendor Support',
      description: 'Annual maintenance contracts for Fortinet, Sophos, Juniper, Microsoft solutions with expert support.',
      icon: Shield,
      color: 'from-green-500 to-green-600',
      features: [
        'Fortinet security solutions',
        'Sophos endpoint protection',
        'Juniper networking',
        'Microsoft ecosystem support',
        'Regular updates and patches',
        'Vendor relationship management'
      ],
      href: '/services/managed-services/amc-vendor-support'
    },
    {
      title: 'Project & Facility Management',
      description: 'End-to-end project delivery and facility IT infrastructure management for seamless operations.',
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Project planning and execution',
        'Facility IT infrastructure',
        'Resource management',
        'Timeline and budget control',
        'Risk mitigation',
        'Stakeholder communication'
      ],
      href: '/services/managed-services/project-facility-management'
    },
    {
      title: 'Incident Response & IT Consulting',
      description: '24/7 incident response and strategic IT consulting services to keep your business running smoothly.',
      icon: Clock,
      color: 'from-red-500 to-red-600',
      features: [
        '24/7 incident response',
        'Strategic IT consulting',
        'Emergency support',
        'Root cause analysis',
        'Prevention strategies',
        'Compliance guidance'
      ],
      href: '/services/managed-services/incident-response-consulting'
    },
    {
      title: 'Infrastructure & Software Migration',
      description: 'Seamless migration of infrastructure and software systems with minimal business disruption.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Infrastructure migration',
        'Software system migration',
        'Data migration',
        'Testing and validation',
        'Rollback planning',
        'Post-migration support'
      ],
      href: '/services/managed-services/infrastructure-software-migration'
    },
    {
      title: 'Virtualization & Telecom Services',
      description: 'Advanced virtualization solutions and telecommunications services for modern business needs.',
      icon: Users,
      color: 'from-indigo-500 to-indigo-600',
      features: [
        'Server virtualization',
        'Desktop virtualization',
        'Network virtualization',
        'Telecom infrastructure',
        'VoIP solutions',
        'Unified communications'
      ],
      href: '/services/managed-services/virtualization-telecom-services'
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Reduced IT Costs',
      description: 'Lower operational costs through efficient outsourcing and automation'
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Comprehensive security measures and compliance management'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock monitoring and support for uninterrupted operations'
    },
    {
      icon: Zap,
      title: 'Scalable Solutions',
      description: 'Flexible services that grow with your business needs'
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
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/services" className="hover:text-blue-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-900">Managed Services</span>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
                <Users className="h-8 w-8" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Managed Services
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Complete IT outsourcing and support solutions that keep your business running smoothly, 
              securely, and efficiently. From 24/7 monitoring to strategic consulting, we handle your 
              IT infrastructure so you can focus on your core business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>150+ Clients Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>&lt;15min Response Time</span>
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
              Our Managed Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT management solutions designed to optimize your operations, 
              reduce costs, and enhance security across your entire technology infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="group block"
              >
                <div className="service-card h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors duration-300">
                      Learn More →
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
              Why Choose Our Managed Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of professional IT management with our comprehensive 
              managed services portfolio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg">
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
            Ready to Transform Your IT Operations?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let our expert team handle your IT infrastructure while you focus on growing your business. 
            Get started with a free consultation today.
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