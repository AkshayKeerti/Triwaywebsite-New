'use client'

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
  Globe,
  Database,
  Smartphone,
  Network,
  BarChart3
} from 'lucide-react'
import Link from 'next/link'
import Button from './ui/Button'

const ServicesShowcaseSection = () => {
  const services = [
    {
      icon: Users,
      title: 'Managed IT Services',
      description: 'Complete IT outsourcing and support solutions for businesses of all sizes',
      features: [
        '24/7 IT Support & Helpdesk',
        'Network Monitoring & Management',
        'Hardware & Software Maintenance',
        'Vendor Management & AMC',
        'IT Consulting & Strategy',
        'Disaster Recovery Planning'
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-500/5',
      borderColor: 'border-primary-500/30'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services',
      features: [
        'Cloud Infrastructure Setup',
        'Migration & Optimization',
        'SaaS Implementation (CRM, ERP)',
        'Microsoft 365 & Google Workspace',
        'Cloud Security & Compliance',
        'Cost Optimization & Management'
      ],
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-500/5',
      borderColor: 'border-secondary-500/30'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your business',
      features: [
        'Network & Endpoint Security',
        'Threat Detection & Response',
        'Email Security & Phishing Protection',
        'Identity & Access Management',
        'Security Audits & Compliance',
        'Incident Response Planning'
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-500/5',
      borderColor: 'border-accent-500/30'
    },
    {
      icon: Server,
      title: 'Infrastructure',
      description: 'On-premise and hybrid infrastructure solutions',
      features: [
        'Server Setup & Configuration',
        'Network Design & Implementation',
        'Data Center Solutions',
        'Backup & Recovery Systems',
        'Power & UPS Solutions',
        'Infrastructure Monitoring'
      ],
      color: 'from-primary-500 to-primary-600',
      bgColor: 'bg-primary-500/5',
      borderColor: 'border-primary-500/30'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software and application development',
      features: [
        'Custom Web Applications',
        'Mobile App Development',
        'API Development & Integration',
        'Database Design & Management',
        'UI/UX Design Services',
        'Software Testing & QA'
      ],
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'bg-secondary-500/5',
      borderColor: 'border-secondary-500/30'
    },
    {
      icon: Zap,
      title: 'AI & Automation',
      description: 'Intelligent automation and AI-powered solutions',
      features: [
        'AI Integration & Implementation',
        'RPA (Robotic Process Automation)',
        'Chatbot Development',
        'Data Analytics & BI',
        'Machine Learning Solutions',
        'Process Optimization'
      ],
      color: 'from-accent-500 to-accent-600',
      bgColor: 'bg-accent-500/5',
      borderColor: 'border-accent-500/30'
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float floating-light"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float floating-light" style={{ animationDelay: '2s' }}></div>
      
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
            We offer a complete range of technology services designed to meet your business needs. 
            From infrastructure to innovation, we provide the tools and expertise to drive your success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative overflow-hidden"
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
                
                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA */}
                <Link
                  href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More
                  <ArrowRight className="inline ml-2 h-4 w-4" />
                </Link>
              </div>
              
              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl ${service.borderColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesShowcaseSection 