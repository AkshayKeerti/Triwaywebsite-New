import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Server, ArrowRight, CheckCircle, Network, HardDrive, Zap, Monitor, Settings } from 'lucide-react'
import Link from 'next/link'

export default function InfrastructurePage() {
  const services = [
    {
      title: 'On-Prem Servers & Networking',
      description: 'Enterprise-grade on-premise server and networking solutions for reliable performance.',
      icon: Server,
      color: 'from-green-500 to-green-600',
      features: [
        'Server hardware deployment',
        'Network infrastructure setup',
        'Storage solutions',
        'Backup and recovery',
        'Network monitoring',
        'Performance optimization'
      ],
      href: '/services/infrastructure/on-prem-servers-networking'
    },
    {
      title: 'Hardware Solutions',
      description: 'Dell, Fortinet, Juniper, APC hardware implementation and support.',
      icon: HardDrive,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Dell server solutions',
        'Fortinet security appliances',
        'Juniper networking equipment',
        'APC power solutions',
        'Hardware maintenance',
        'Vendor support'
      ],
      href: '/services/infrastructure/hardware-solutions'
    },
    {
      title: 'Power Backup & Physical Infra Setup',
      description: 'Comprehensive power backup and physical infrastructure setup for business continuity.',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'UPS systems',
        'Power backup solutions',
        'Physical infrastructure',
        'Data center setup',
        'Environmental controls',
        'Disaster recovery'
      ],
      href: '/services/infrastructure/power-backup-physical-infra'
    },
    {
      title: 'Infrastructure Monitoring & Support',
              description: 'Continuous infrastructure monitoring and proactive support for optimal performance.',
      icon: Monitor,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Continuous monitoring',
        'Proactive maintenance',
        'Performance tracking',
        'Alert management',
        'Capacity planning',
        'Troubleshooting'
      ],
      href: '/services/infrastructure/infrastructure-monitoring-support'
    }
  ]

  const benefits = [
    {
      icon: Server,
      title: 'Reliable Performance',
      description: 'Enterprise-grade infrastructure with high availability and uptime'
    },
    {
      icon: Settings,
      title: 'Scalable Solutions',
      description: 'Infrastructure that grows with your business needs'
    },
    {
      icon: CheckCircle,
      title: 'Expert Support',
              description: 'Continuous monitoring and support from certified professionals'
    },
    {
      icon: Zap,
      title: 'Cost Optimization',
      description: 'Optimized infrastructure for maximum efficiency and cost savings'
    }
  ]

  const stats = [
    { number: '99.9%', label: 'Uptime' },
            { number: 'Continuous', label: 'Monitoring' },
    { number: '500+', label: 'Deployments' },
    { number: '15min', label: 'Response Time' }
  ]

  const technologies = [
    'Dell PowerEdge Servers',
    'Fortinet Security',
    'Juniper Networks',
    'APC Power Solutions',
    'VMware Virtualization',
    'Cisco Networking'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/services" className="hover:text-green-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-900">Infrastructure</span>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
                <Server className="h-8 w-8" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Infrastructure
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              On-premise and hybrid infrastructure solutions that provide the foundation 
              for your business operations. From servers to networking, we build and 
              maintain robust infrastructure that keeps your business running.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Infrastructure Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive infrastructure solutions designed to provide reliable, 
              scalable, and secure foundation for your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-green-600 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
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
                    <span className="text-sm font-medium text-green-600 group-hover:text-green-700 transition-colors duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Work With
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with leading technology vendors to deliver enterprise-grade 
              infrastructure solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center p-4 bg-green-50 rounded-lg border border-green-100">
                <Server className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Infrastructure?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience reliable, scalable, and secure infrastructure with our 
              comprehensive solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg">
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

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Infrastructure Setup Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to building and maintaining your infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate current infrastructure and identify requirements'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create detailed infrastructure architecture and plan'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deploy infrastructure with minimal business disruption'
              },
              {
                step: '04',
                title: 'Management',
                description: 'Ongoing monitoring, maintenance, and optimization'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build Your Infrastructure Foundation
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Create a robust, scalable infrastructure that supports your business growth. 
            Get started with a free infrastructure assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get Infrastructure Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-green-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Infrastructure Cases
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 