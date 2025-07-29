'use client'

import { useState } from 'react'
import { 
  Cloud, 
  Shield, 
  Server, 
  Zap, 
  Code, 
  Palette, 
  Users, 
  ArrowRight,
  CheckCircle,
  Sparkles,
  Target,
  Globe
} from 'lucide-react'
import Button from './ui/Button'

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: Users,
      title: 'Managed Services',
      description: 'Complete IT outsourcing and support solutions',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-500/5',
      borderColor: 'border-primary-500/30',
      features: [
        'IT Support & Outsourcing',
        'AMC & Vendor Support',
        'Project & Facility Management',
        'Incident Response & IT Consulting',
        'Infrastructure & Software Migration',
        'Virtualization & Telecom'
      ],
      stats: { clients: '200+', uptime: '99.9%', response: '<15min' }
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud infrastructure and migration',
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-500/5',
      borderColor: 'border-secondary-500/30',
      features: [
        'Cloud Infrastructure',
        'Cloud Migrations & Management',
        'SaaS Tools (CRM, ERP, Docs)',
        'Microsoft & Zoho Ecosystems'
      ],
      stats: { deployments: '500+', savings: '40%', uptime: '99.95%' }
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced threat detection and security',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-500/5',
      borderColor: 'border-accent-500/30',
      features: [
        'Network & Endpoint Security',
        'Threat Detection (SOC, EDR, Email Security)',
        'Identity & Access Management (IAM)',
        'Cybersecurity Consulting'
      ],
      stats: { threats: '10M+', incidents: '0', coverage: '100%' }
    },
    {
      icon: Server,
      title: 'Infrastructure',
      description: 'On-premise and hybrid infrastructure solutions',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-500/5',
      borderColor: 'border-primary-500/30',
      features: [
        'On-Prem Servers & Networking',
        'Hardware Solutions',
        'Power Backup & Infra Setup',
        'Monitoring & Support'
      ],
      stats: { servers: '1000+', locations: '50+', uptime: '99.8%' }
    },
    {
      icon: Zap,
      title: 'AI & Automation',
      description: 'Intelligent automation and AI integrations',
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-500/5',
      borderColor: 'border-secondary-500/30',
      features: [
        'AI Integrations & CoPilot',
        'RPA & Workflow Automation',
        'Predictive Analytics & Dashboards'
      ],
      stats: { efficiency: '60%', accuracy: '95%', time: '80%' }
    },
    {
      icon: Code,
      title: 'Software Solutions',
      description: 'Custom software and application development',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-500/5',
      borderColor: 'border-accent-500/30',
      features: [
        'Custom Software & Apps',
        'Industry-Specific Solutions',
        'Web & Mobile Tech',
        'UI/UX & Product Consulting'
      ],
      stats: { apps: '300+', languages: '15+', platforms: '10+' }
    },
    {
      icon: Palette,
      title: 'Design & Experience',
      description: 'User experience and visual design services',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-500/5',
      borderColor: 'border-primary-500/30',
      features: [
        'UI/UX Design',
        'Product Strategy',
        'Design Systems',
        'Journey Mapping',
        'Branding & Visual Design'
      ],
      stats: { projects: '150+', satisfaction: '98%', awards: '25+' }
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-500 text-sm font-medium backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="neon-text text-shadow-lg">Comprehensive</span>
            <br />
            <span className="text-gray-900">IT Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer cutting-edge technology services to help your business thrive in the digital age. 
            From infrastructure to innovation, we've got you covered with future-ready solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card group relative overflow-hidden ${
                hoveredService === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                  <service.icon className="h-8 w-8" />
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-gray-50 border border-gray-200">
                  {Object.entries(service.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-primary-500">{value}</div>
                      <div className="text-xs text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <a 
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="inline-flex items-center text-primary-500 font-semibold hover:text-gray-900 transition-colors group-hover:translate-x-1"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
              
              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-glow p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-5"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how our comprehensive IT solutions can drive your success 
                and propel you into the future of technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button href="/contact" variant="primary" icon={Target} iconPosition="left">
                  Get Free Consultation
                </Button>
                <Button href="/case-studies" variant="secondary" icon={Globe} iconPosition="left">
                  View Case Studies
                </Button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-primary-500/20 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-secondary-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 