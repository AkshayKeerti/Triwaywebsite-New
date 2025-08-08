'use client'

import { 
  Cpu, 
  Database, 
  Network, 
  Smartphone, 
  Cloud, 
  Shield, 
  Zap, 
  Globe,
  Code,
  BarChart3,
  Users,
  Target,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import Button from './ui/Button'

const ExpertiseSection = () => {
  const technologies = [
    {
      category: 'Cloud Platforms',
      items: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Oracle Cloud'],
      icon: Cloud,
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Programming Languages',
      items: ['JavaScript', 'Python', 'Java', 'C#', 'PHP', 'Go'],
      icon: Code,
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Databases',
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Oracle'],
      icon: Database,
      color: 'from-purple-500 to-purple-600'
    },
    {
      category: 'Frameworks',
      items: ['React', 'Angular', 'Vue.js', 'Node.js', 'Django', 'Spring'],
      icon: Cpu,
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const industries = [
    {
      name: 'Healthcare',
      description: 'HIPAA-compliant solutions for medical institutions',
      icon: Shield,
      color: 'from-red-500 to-red-600'
    },
    {
      name: 'Finance',
      description: 'Secure banking and fintech applications',
      icon: BarChart3,
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'E-commerce',
      description: 'Scalable online retail platforms',
      icon: Globe,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Manufacturing',
      description: 'IoT and automation solutions',
      icon: Cpu,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Education',
      description: 'Learning management systems and EdTech',
      icon: Users,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Real Estate',
      description: 'Property management and CRM solutions',
      icon: Target,
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const capabilities = [
    {
      title: 'Full-Stack Development',
      description: 'End-to-end application development from frontend to backend',
      features: ['Responsive Web Apps', 'Mobile Applications', 'API Development', 'Database Design']
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and infrastructure management',
      features: ['Docker & Kubernetes', 'Jenkins & GitLab CI', 'Infrastructure as Code', 'Monitoring & Logging']
    },
    {
      title: 'Data Analytics',
      description: 'Business intelligence and data-driven insights',
      features: ['Data Warehousing', 'Business Intelligence', 'Machine Learning', 'Predictive Analytics']
    },
    {
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and regulatory compliance',
      features: ['Penetration Testing', 'Security Audits', 'GDPR Compliance', 'SOC 2 Certification']
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float floating-light"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float floating-light" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-500/10 border border-secondary-500/30 text-secondary-500 text-sm font-medium backdrop-blur-sm mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="neon-text text-shadow-lg">Technical</span>
            <br />
            <span className="text-gray-900">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We combine deep technical expertise with industry knowledge to deliver 
            innovative solutions that drive business success.
          </p>
        </div>

        {/* Technology Stack */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Technology Stack
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="card p-6 group hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                  <tech.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-secondary-500 transition-colors duration-300">
                  {tech.category}
                </h4>
                <div className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-accent-500 mr-3 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Expertise */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Industry Expertise
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card p-8 h-full hover:shadow-xl transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <industry.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-secondary-500 transition-colors duration-300">
                    {industry.name}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Core Capabilities
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card p-8 hover:shadow-xl transition-all duration-300">
                  <h4 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-secondary-500 transition-colors duration-300">
                    {capability.title}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {capability.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {capability.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-accent-500 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-secondary-500/5 to-accent-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-glow p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-5"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's leverage our technical expertise to create innovative solutions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button href="/contact" variant="primary" icon={Code} iconPosition="left">
                  Start Your Project
                </Button>
                <Button href="/portfolio" variant="secondary" icon={ArrowRight} iconPosition="left">
                  View Our Work
                </Button>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-secondary-500/20 rounded-full animate-float floating-light"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent-500/20 rounded-full animate-float floating-light" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection 