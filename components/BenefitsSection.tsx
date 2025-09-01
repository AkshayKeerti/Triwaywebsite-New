'use client'

import { 
  Award, 
  Clock, 
  Users, 
  Target, 
  CheckCircle, 
  Sparkles, 
  Zap, 
  Globe, 
  Shield, 
  Cpu,
  TrendingUp,
  Star,
  ArrowRight,
  Headphones,
  DollarSign,
  Lightbulb
} from 'lucide-react'

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Award,
      title: '15+ Years of Excellence',
      description: 'Over a decade and a half of proven expertise in delivering successful technology solutions across industries.',
      color: 'from-primary-500 to-primary-600',
      delay: '0s'
    },
    {
      icon: Users,
      title: '150+ Happy Clients',
      description: 'Trusted by businesses worldwide, from startups to Fortune 500 companies, with a 98% client satisfaction rate.',
      color: 'from-secondary-500 to-secondary-600',
      delay: '0.2s'
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
              description: 'Bank-level security protocols, SOC 2 compliance, and continuous threat monitoring to protect your business.',
      color: 'from-accent-500 to-accent-600',
      delay: '0.4s'
    },
    {
      icon: Clock,
              title: 'Dedicated Support & Monitoring',
              description: 'Professional technical support, proactive monitoring, and rapid response times to keep your systems running.',
      color: 'from-primary-500 to-primary-600',
      delay: '0.6s'
    }
  ]

  const valuePropositions = [
    {
      title: 'Cost Savings',
      subtitle: 'Reduce IT expenses by up to 40%',
      description: 'Optimize your technology investments with our cost-effective solutions and transparent pricing models.',
      icon: DollarSign,
      color: 'from-green-500 to-green-600',
      features: ['Predictable monthly costs', 'No hidden fees', 'ROI-focused solutions', 'Scalable pricing']
    },
    {
      title: 'Innovation Leadership',
      subtitle: 'Stay ahead with cutting-edge technology',
      description: 'Access to the latest technologies and industry best practices to give you a competitive advantage.',
      icon: Lightbulb,
      color: 'from-blue-500 to-blue-600',
      features: ['AI & ML integration', 'Cloud-first approach', 'Automation solutions', 'Future-ready architecture']
    },
    {
      title: 'Expert Team',
      subtitle: 'Certified professionals at your service',
      description: 'Our team of certified experts brings deep technical knowledge and industry experience to every project.',
      icon: Users,
      color: 'from-purple-500 to-purple-600',
      features: ['Microsoft certified', 'AWS certified', 'Google Cloud certified', 'Industry specialists']
    },
    {
      title: 'Proven Results',
      subtitle: 'Track record of successful implementations',
      description: '200+ successful projects delivered on time and within budget, with measurable business outcomes.',
      icon: TrendingUp,
      color: 'from-orange-500 to-orange-600',
      features: ['99.9% project success rate', 'On-time delivery', 'Budget adherence', 'Measurable ROI']
    }
  ]


  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float floating-light"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-float floating-light" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary-500/10 border border-secondary-500/30 text-secondary-500 text-sm font-medium backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Why Choose Triway?
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="neon-text text-shadow-lg">Proven</span>
            <br />
            <span className="text-gray-900">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We don't just provide IT services – we deliver measurable business value, 
            innovation, and peace of mind to organizations worldwide.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: benefit.delay }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                <benefit.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-secondary-500 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Value Propositions */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What You Get with Triway
          </h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {valuePropositions.map((proposition, index) => (
              <div
                key={index}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="card p-8 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${proposition.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <proposition.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-secondary-500 transition-colors duration-300">
                        {proposition.title}
                      </h4>
                      <p className="text-lg font-semibold text-secondary-500 mb-2">
                        {proposition.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {proposition.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {proposition.features.map((feature, featureIndex) => (
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
      </div>
    </section>
  )
}

export default BenefitsSection 