'use client'

import { 
  Award, 
  Users, 
  Target, 
  Clock, 
  Sparkles, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react'

const CompanyOverviewSection = () => {
  const achievements = [
    {
      icon: Users,
      number: '500+',
      label: 'Happy Clients',
      description: 'Trusted by businesses across industries',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Target,
      number: '1000+',
      label: 'Projects Delivered',
      description: 'Successfully completed projects worldwide',
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Clock,
      number: '15+',
      label: 'Years Experience',
      description: 'Deep expertise in technology solutions',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: Shield,
      number: '99.9%',
      label: 'Uptime Guarantee',
      description: 'Reliable infrastructure and support',
      color: 'from-primary-500 to-primary-600'
    }
  ]

  const highlights = [
    {
      title: 'Global Presence',
      description: 'Serving clients across multiple continents with local expertise and global reach.',
      icon: Globe,
      color: 'from-primary-500 to-primary-600'
    },
    {
      title: 'Innovation Hub',
      description: 'Cutting-edge technology solutions that keep you ahead of the competition.',
      icon: Sparkles,
      color: 'from-secondary-500 to-secondary-600'
    },
    {
      title: 'Security First',
      description: 'Enterprise-grade security protocols protecting your business data and systems.',
      icon: Shield,
      color: 'from-accent-500 to-accent-600'
    },
    {
      title: 'Rapid Deployment',
      description: 'Quick implementation and fast turnaround times for all projects.',
      icon: Zap,
      color: 'from-primary-500 to-primary-600'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechCorp',
      content: 'Triway transformed our entire IT infrastructure. Their expertise and dedication are unmatched.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'CEO, StartupXYZ',
      content: 'The team at Triway delivered beyond our expectations. Highly recommended for any tech project.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'IT Director, Global Inc',
      content: 'Professional, reliable, and innovative. Triway has been our trusted technology partner for years.',
      rating: 5
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
            About Triway Technologies
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="neon-text text-shadow-lg">Leading</span>
            <br />
            <span className="text-gray-900">Technology Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are a premier technology company delivering innovative solutions that drive business growth 
            and digital transformation across industries worldwide.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                <achievement.icon className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-primary-500 transition-colors duration-300">
                {achievement.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{achievement.label}</div>
              <div className="text-sm text-gray-500">{achievement.description}</div>
            </div>
          ))}
        </div>

        {/* Company Highlights */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Why Choose Triway?
            </h3>
            <div className="space-y-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="group flex items-start space-x-6"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${highlight.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                    <highlight.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              What Our Clients Say
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="card p-6 group hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="card-glow p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-5"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Partner with Us?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="btn-primary group">
                  <span className="relative z-10 flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Start Your Journey
                  </span>
                </a>
                <a href="/about" className="btn-secondary group">
                  <span className="relative z-10 flex items-center">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Learn More About Us
                  </span>
                </a>
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

export default CompanyOverviewSection 