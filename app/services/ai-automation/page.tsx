import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Zap, ArrowRight, CheckCircle, Brain, MessageSquare, Bot, TrendingUp, Sparkles, Cpu } from 'lucide-react'
import Link from 'next/link'

export default function AIAutomationPage() {
  const services = [
    {
      title: 'Generative AI',
      description: 'Advanced generative AI solutions for content creation and automation.',
      icon: Sparkles,
      color: 'from-yellow-500 to-orange-500',
      features: [
        'Content generation',
        'Image and video creation',
        'Text summarization',
        'Code generation',
        'Creative automation',
        'Custom AI models'
      ],
      href: '/services/ai-automation/generative-ai'
    },
    {
      title: 'Conversational AI',
      description: 'Intelligent chatbots and conversational AI implementations.',
      icon: MessageSquare,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Chatbot development',
        'Natural language processing',
        'Voice assistants',
        'Multi-language support',
        'Integration services',
        'Analytics and insights'
      ],
      href: '/services/ai-automation/conversational-ai'
    },
    {
      title: 'Agentic AI',
      description: 'Autonomous AI agents for complex task automation.',
      icon: Bot,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Autonomous agents',
        'Task automation',
        'Decision making',
        'Process optimization',
        'Learning capabilities',
        'Integration with workflows'
      ],
      href: '/services/ai-automation/agentic-ai'
    },
    {
      title: 'Predictive AI',
      description: 'Predictive analytics and AI-driven insights.',
      icon: TrendingUp,
      color: 'from-green-500 to-green-600',
      features: [
        'Predictive analytics',
        'Data modeling',
        'Trend analysis',
        'Forecasting',
        'Risk assessment',
        'Performance optimization'
      ],
      href: '/services/ai-automation/predictive-ai'
    },
    {
      title: 'CoPilot Solutions',
      description: 'Microsoft CoPilot and AI assistant implementations.',
      icon: Brain,
      color: 'from-indigo-500 to-indigo-600',
      features: [
        'Microsoft CoPilot setup',
        'AI assistant integration',
        'Productivity enhancement',
        'Workflow automation',
        'Training and support',
        'Custom configurations'
      ],
      href: '/services/ai-automation/copilot-solutions'
    },
    {
      title: 'RPA & Workflow Automation',
      description: 'UiPath and workflow automation solutions.',
      icon: Cpu,
      color: 'from-red-500 to-red-600',
      features: [
        'RPA implementation',
        'Workflow design',
        'Process automation',
        'UiPath development',
        'Integration services',
        'Monitoring and analytics'
      ],
      href: '/services/ai-automation/rpa-workflow-automation'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and boost productivity'
    },
    {
      icon: Brain,
      title: 'Intelligent Insights',
      description: 'AI-powered analytics and decision support'
    },
    {
      icon: CheckCircle,
      title: 'Cost Reduction',
      description: 'Reduce operational costs through automation'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge AI solutions'
    }
  ]

  const stats = [
    { number: '60%', label: 'Efficiency Gain' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '24/7', label: 'Automation' },
    { number: '100+', label: 'AI Models' }
  ]

  const useCases = [
    'Customer service automation',
    'Data processing and analysis',
    'Content creation and management',
    'Process optimization',
    'Predictive maintenance',
    'Intelligent decision making'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-orange-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/services" className="hover:text-orange-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-900">AI & Automation</span>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white shadow-lg">
                <Zap className="h-8 w-8" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              AI & Automation
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Intelligent automation and AI integrations that transform your business 
              operations. From generative AI to robotic process automation, we help 
              you leverage the power of artificial intelligence for growth and efficiency.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">
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
              Our AI & Automation Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and automation solutions designed to enhance productivity, 
              reduce costs, and drive innovation across your organization.
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
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-orange-600 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
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
                    <span className="text-sm font-medium text-orange-600 group-hover:text-orange-700 transition-colors duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              AI & Automation Use Cases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI and automation can transform your business processes 
              and drive operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="flex items-center p-4 bg-orange-50 rounded-lg border border-orange-100">
                <Sparkles className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{useCase}</span>
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
              Why Choose AI & Automation?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the transformative power of AI and automation with our 
              comprehensive solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg">
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
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to implementing AI and automation solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'Identify automation opportunities and AI use cases'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Develop AI strategy and automation roadmap'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deploy AI solutions with minimal business disruption'
              },
              {
                step: '04',
                title: 'Optimization',
                description: 'Continuous improvement and performance optimization'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white flex items-center justify-center font-bold text-lg">
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
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Transform Your Business with AI
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
            Unlock the power of AI and automation to drive growth and efficiency. 
            Get started with a free AI assessment and automation consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get AI Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-orange-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              View AI Success Stories
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 