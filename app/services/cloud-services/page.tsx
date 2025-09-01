import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Cloud, ArrowRight, CheckCircle, Server, Database, Globe, Zap, Shield } from 'lucide-react'
import Link from 'next/link'

export default function CloudServicesPage() {
  const services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Servers, VMs, and hybrid cloud setup for optimal performance and scalability.',
      icon: Server,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Cloud server provisioning',
        'Virtual machine management',
        'Hybrid cloud solutions',
        'Auto-scaling capabilities',
        'Load balancing',
        'High availability setup'
      ],
      href: '/services/cloud-services/cloud-infrastructure'
    },
    {
      title: 'Cloud Migrations & Management',
      description: 'Seamless cloud migration and ongoing management services for your applications.',
      icon: Database,
      color: 'from-green-500 to-green-600',
      features: [
        'Application migration',
        'Data migration',
        'Cloud optimization',
        'Performance monitoring',
        'Cost optimization',
        'Ongoing management'
      ],
      href: '/services/cloud-services/cloud-migrations-management'
    },
    {
      title: 'SaaS Tools',
      description: 'CRM, ERP, and document management solutions implementation and integration.',
      icon: Globe,
      color: 'from-purple-500 to-purple-600',
      features: [
        'CRM implementation',
        'ERP solutions',
        'Document management',
        'Workflow automation',
        'Integration services',
        'User training'
      ],
      href: '/services/cloud-services/saas-tools'
    },
    {
      title: 'Microsoft & Zoho Ecosystems',
      description: 'Complete Microsoft and Zoho cloud ecosystem integration and management.',
      icon: Shield,
      color: 'from-indigo-500 to-indigo-600',
      features: [
        'Microsoft 365 setup',
        'Zoho CRM/ERP',
        'Email migration',
        'Single sign-on',
        'Security configuration',
        'User management'
      ],
      href: '/services/cloud-services/microsoft-zoho-ecosystems'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Scalability',
      description: 'Scale resources up or down based on demand automatically'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security with built-in compliance features'
    },
    {
      icon: CheckCircle,
      title: 'Cost Efficiency',
      description: 'Pay only for what you use with flexible pricing models'
    },
    {
      icon: Cloud,
      title: 'Global Reach',
      description: 'Deploy applications globally with low latency'
    }
  ]

  const stats = [
    { number: '500+', label: 'Cloud Deployments' },
    { number: '40%', label: 'Cost Savings' },
    { number: '99.95%', label: 'Uptime' },
            { number: 'Continuous', label: 'Monitoring' }
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
            <span className="text-gray-900">Cloud Services</span>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg">
                <Cloud className="h-8 w-8" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cloud Services
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Scalable cloud infrastructure and migration solutions that transform your business 
              operations. From infrastructure setup to SaaS implementation, we help you leverage 
              the power of the cloud for growth and efficiency.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
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
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive cloud solutions designed to modernize your infrastructure, 
              enhance collaboration, and drive business growth through scalable technology.
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
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-purple-600 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
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
                    <span className="text-sm font-medium text-purple-600 group-hover:text-purple-700 transition-colors duration-300">
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
              Why Choose Cloud Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of cloud computing with our comprehensive 
              cloud services portfolio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg">
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cloud Migration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful cloud transformation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Evaluate current infrastructure and identify migration opportunities'
              },
              {
                step: '02',
                title: 'Planning',
                description: 'Design cloud architecture and create detailed migration roadmap'
              },
              {
                step: '03',
                title: 'Migration',
                description: 'Execute migration with minimal downtime and business disruption'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Monitor performance and optimize for cost and efficiency'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 text-white flex items-center justify-center font-bold text-lg">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Move to the Cloud?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Transform your business with our cloud services. Get started with a free 
            cloud assessment and migration consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get Free Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 