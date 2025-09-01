import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Palette, ArrowRight, CheckCircle, Eye, Target, Layers, Users, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function DesignExperiencePage() {
  const services = [
    {
      title: 'UI/UX Design',
      description: 'User interface and experience design for digital products.',
      icon: Eye,
      color: 'from-pink-500 to-pink-600',
      features: [
        'User interface design',
        'User experience optimization',
        'Wireframing and prototyping',
        'Visual design systems',
        'Usability testing',
        'Design handoff'
      ],
      href: '/services/design-experience/ui-ux-design'
    },
    {
      title: 'Product Design & Strategy',
      description: 'Strategic product design and development planning.',
      icon: Target,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Product strategy',
        'Design thinking workshops',
        'User research',
        'Product roadmapping',
        'Feature prioritization',
        'Market analysis'
      ],
      href: '/services/design-experience/product-design-strategy'
    },
    {
      title: 'Design Systems & Prototyping',
      description: 'Comprehensive design systems and rapid prototyping.',
      icon: Layers,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Design system creation',
        'Component libraries',
        'Rapid prototyping',
        'Interactive prototypes',
        'Design documentation',
        'Design tokens'
      ],
      href: '/services/design-experience/design-systems-prototyping'
    },
    {
      title: 'User Research & Journey Mapping',
      description: 'In-depth user research and customer journey optimization.',
      icon: Users,
      color: 'from-green-500 to-green-600',
      features: [
        'User interviews',
        'Surveys and analytics',
        'Journey mapping',
        'Persona development',
        'Usability studies',
        'Behavioral analysis'
      ],
      href: '/services/design-experience/user-research-journey-mapping'
    },
    {
      title: 'Branding & Visual Design',
      description: 'Complete branding and visual identity design services.',
      icon: Sparkles,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Brand identity design',
        'Logo and visual assets',
        'Brand guidelines',
        'Marketing materials',
        'Digital assets',
        'Brand strategy'
      ],
      href: '/services/design-experience/branding-visual-design'
    }
  ]

  const benefits = [
    {
      icon: Eye,
      title: 'User-Centered Design',
      description: 'Designs that prioritize user needs and experiences'
    },
    {
      icon: Target,
      title: 'Strategic Approach',
      description: 'Design solutions aligned with business objectives'
    },
    {
      icon: CheckCircle,
      title: 'Consistent Experience',
      description: 'Unified design systems across all touchpoints'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Cutting-edge design trends and best practices'
    }
  ]

  const stats = [
    { number: '200+', label: 'Design Projects' },
    { number: '95%', label: 'User Satisfaction' },
    { number: '40%', label: 'Conversion Increase' },
            { number: 'Dedicated', label: 'Design Support' }
  ]

  const designTools = [
    'Figma & Sketch',
    'Adobe Creative Suite',
    'InVision & Marvel',
    'Principle & Framer',
    'Miro & FigJam',
    'Hotjar & Analytics'
  ]

  const designProcess = [
    'Research & Discovery',
    'Ideation & Sketching',
    'Wireframing & Prototyping',
    'Visual Design',
    'Testing & Iteration',
    'Implementation & Handoff'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-yellow-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/services" className="hover:text-pink-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-900">Design & Experience</span>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg">
                <Palette className="h-8 w-8" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Design & Experience
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              User experience and visual design services that create meaningful 
              connections with your audience. From UI/UX design to branding, we 
              craft experiences that delight users and drive business results.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-pink-600 mb-1">
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
              Our Design & Experience Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive design services that create engaging, user-centered 
              experiences across all digital touchpoints.
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
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-pink-600 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300">
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
                    <span className="text-sm font-medium text-pink-600 group-hover:text-pink-700 transition-colors duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Design Tools We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading design tools to create exceptional 
              user experiences and visual designs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designTools.map((tool, index) => (
              <div key={index} className="flex items-center p-4 bg-pink-50 rounded-lg border border-pink-100">
                <Palette className="h-5 w-5 text-pink-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Design Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology for creating user-centered design solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {designProcess.map((process, index) => (
              <div key={index} className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </div>
                <span className="text-gray-700 font-medium">{process}</span>
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
              Why Choose Our Design Services?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of professional design with our 
              comprehensive design services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg">
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
              Our Design Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to creating exceptional design solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Research',
                description: 'Understand users, business goals, and market context'
              },
              {
                step: '02',
                title: 'Design',
                description: 'Create wireframes, prototypes, and visual designs'
              },
              {
                step: '03',
                title: 'Test',
                description: 'Validate designs through user testing and feedback'
              },
              {
                step: '04',
                title: 'Iterate',
                description: 'Refine and improve based on insights and feedback'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 to-pink-600 text-white flex items-center justify-center font-bold text-lg">
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
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Create Exceptional User Experiences
          </h2>
          <p className="text-xl text-pink-100 mb-8 max-w-3xl mx-auto">
            Transform your digital products with user-centered design. Get started 
            with a free design consultation and project assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get Design Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-pink-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Design Portfolio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 