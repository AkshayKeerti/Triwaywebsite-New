import React from 'react';
import { ArrowRight, Sparkles, FileText, Code, Users, Zap, Shield, BarChart3, Globe, Clock, CheckCircle } from 'lucide-react';
import Button from '../../../../components/ui/Button';
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export default function GenerativeaiPage() {
  const features = [
  "Content generation",
  "Image and video creation",
  "Text analysis and generation",
  "Creative automation",
  "Custom AI models",
  "Integration services",
  "Training and support",
  "Performance optimization"
]

  const benefits = [
    {
      icon: Clock,
      title: "Dedicated Support",
      description: "Round-the-clock support and monitoring for your systems."
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description: "Comprehensive security measures to protect your business."
    },
    {
      icon: Zap,
      title: "Improved Efficiency",
      description: "Streamlined processes and optimized performance."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Access to certified professionals with deep expertise."
    }
  ]

  const process = [
    {
      step: "01",
      title: "Assessment",
      description: "Comprehensive evaluation of your current needs and requirements."
    },
    {
      step: "02",
      title: "Planning",
      description: "Strategic planning and solution design tailored to your business."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Seamless deployment with minimal business disruption."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and performance optimization."
    }
  ]

  const relatedServices = [
    {
      title: "Conversational AI",
      description: "Intelligent chatbots and conversational AI implementations.",
      href: "/services/ai-automation/conversational-ai"
    },
    {
      title: "Agentic AI",
      description: "Autonomous AI agents for complex task automation.",
      href: "/services/ai-automation/agentic-ai"
    },
    {
      title: "Predictive AI",
      description: "Predictive analytics and AI-driven insights.",
      href: "/services/ai-automation/predictive-ai"
    },
    {
      title: "CoPilot Solutions",
      description: "Microsoft CoPilot and AI assistant implementations.",
      href: "/services/ai-automation/copilot-solutions"
    },
    {
      title: "RPA & Workflow Automation",
      description: "UiPath and workflow automation solutions.",
      href: "/services/ai-automation/rpa-workflow-automation"
    }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/services" className="hover:text-primary-500 transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/ai-automation" className="hover:text-primary-500 transition-colors">Ai Automation</Link>
            <span>/</span>
            <span className="text-gray-900">Generative AI</span>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Generative AI</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Advanced generative AI solutions for content creation and automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button href="#contact" variant="primary" icon={ArrowRight}>
                  Get Started
                </Button>
                <Button href="#features" variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/dubai.png"
                alt="Generative AI"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Provide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive generative ai services cover every aspect of your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-accent-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Generative Services?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of professional generative ai without the overhead.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="card p-6 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to implementing and managing your generative ai solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-8 w-8 text-primary-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Related Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore other Ai Automation that complement your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedServices.map((service, index) => (
              <div key={index} className="card p-6 group hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={service.href}
                  className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our generative ai can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
            <Button href="/case-studies" variant="ghost">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}