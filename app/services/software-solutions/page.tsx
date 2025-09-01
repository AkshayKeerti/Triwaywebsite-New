import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Code, ArrowRight, CheckCircle, Smartphone, Globe, Palette, Building, Zap } from 'lucide-react'
import Link from 'next/link'

export default function SoftwareSolutionsPage() {
  const services = [
    {
      title: 'Custom Software & App Development',
      description: 'Tailored software solutions for your unique business needs.',
      icon: Code,
      color: 'from-indigo-500 to-indigo-600',
      features: [
        'Custom application development',
        'Business process automation',
        'Legacy system modernization',
        'API development',
        'Database design',
        'Integration services'
      ],
      href: '/services/software-solutions/custom-software-app-development'
    },
    {
      title: 'Industry-Specific Solutions',
      description: 'Specialized solutions for Banking, Retail, Travel, and Government sectors.',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Banking software solutions',
        'Retail management systems',
        'Travel booking platforms',
        'Government applications',
        'Compliance management',
        'Sector-specific features'
      ],
      href: '/services/software-solutions/industry-specific-solutions'
    },
    {
      title: 'Web & Mobile Technologies',
      description: 'React, Flutter, Node.js, and modern web/mobile development.',
      icon: Smartphone,
      color: 'from-green-500 to-green-600',
      features: [
        'React web applications',
        'Flutter mobile apps',
        'Node.js backend services',
        'Progressive web apps',
        'Cross-platform development',
        'Performance optimization'
      ],
      href: '/services/software-solutions/web-mobile-technologies'
    },
    {
      title: 'UI/UX Design & Product Consulting',
      description: 'User-centered design and product strategy consulting.',
      icon: Palette,
      color: 'from-purple-500 to-purple-600',
      features: [
        'User interface design',
        'User experience optimization',
        'Product strategy',
        'Design systems',
        'Usability testing',
        'Product roadmapping'
      ],
      href: '/services/software-solutions/ui-ux-design-product-consulting'
    }
  ]

  const benefits = [
    {
      icon: Code,
      title: 'Custom Solutions',
      description: 'Tailored software designed specifically for your business needs'
    },
    {
      icon: Zap,
      title: 'Modern Technology',
      description: 'Built with cutting-edge technologies and best practices'
    },
    {
      icon: CheckCircle,
      title: 'Scalable Architecture',
      description: 'Solutions that grow with your business requirements'
    },
    {
      icon: Globe,
      title: 'Cross-Platform',
      description: 'Web and mobile solutions for maximum reach'
    }
  ]

  const stats = [
    { number: '200+', label: 'Projects Delivered' },
    { number: '150+', label: 'Happy Clients' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support' }
  ]

  const technologies = [
    'React & Next.js',
    'Flutter & React Native',
    'Node.js & Python',
    'AWS & Azure',
    'PostgreSQL & MongoDB',
    'Docker & Kubernetes'
  ]

  const industries = [
    'Banking & Finance',
    'Retail & E-commerce',
    'Travel & Hospitality',
    'Healthcare',
    'Education',
    'Government'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/services" className="hover:text-indigo-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-900">Software Solutions</span>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg">
                <Code className="h-8 w-8" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Software Solutions
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Custom software and application development that transforms your business 
              operations. From web applications to mobile apps, we create innovative 
              solutions that drive growth and efficiency.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-600 mb-1">
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
              Our Software Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development services designed to create innovative, 
              scalable, and user-friendly solutions for your business needs.
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
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
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
                    <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-700 transition-colors duration-300">
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
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust and scalable 
              software solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center p-4 bg-indigo-50 rounded-lg border border-indigo-100">
                <Code className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized software solutions for various industries with deep 
              domain expertise and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <Building className="h-5 w-5 text-indigo-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Software Solutions?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of custom software development with our 
              comprehensive solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white shadow-lg">
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
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for successful software development projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Understand requirements and define project scope'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create architecture and design user experience'
              },
              {
                step: '03',
                title: 'Development',
                description: 'Build the solution with agile methodology'
              },
              {
                step: '04',
                title: 'Deployment',
                description: 'Launch and provide ongoing support'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg">
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
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build Your Custom Software Solution
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
            Transform your business with custom software solutions. Get started with 
            a free consultation and project assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Software Projects
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 