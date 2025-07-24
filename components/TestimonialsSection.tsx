'use client'

import { 
  Star, 
  Quote, 
  Users, 
  Award, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Target,
  Globe,
  Zap
} from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      company: 'TechCorp Solutions',
      content: 'Triway transformed our entire IT infrastructure. Their expertise and dedication are unmatched. We\'ve seen a 40% reduction in IT costs and 99.9% uptime since partnering with them.',
      rating: 5,
      image: '/api/placeholder/60/60',
      industry: 'Technology',
      results: ['40% cost reduction', '99.9% uptime', '24/7 support']
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupXYZ',
      content: 'The team at Triway delivered beyond our expectations. They understood our vision and built a scalable solution that grew with our business. Highly recommended for any tech project.',
      rating: 5,
      image: '/api/placeholder/60/60',
      industry: 'Startup',
      results: ['Scalable solution', 'On-time delivery', 'Business growth']
    },
    {
      name: 'Emily Rodriguez',
      role: 'IT Director',
      company: 'Global Manufacturing Inc',
      content: 'Professional, reliable, and innovative. Triway has been our trusted technology partner for years. Their cybersecurity solutions gave us peace of mind and protected our critical data.',
      rating: 5,
      image: '/api/placeholder/60/60',
      industry: 'Manufacturing',
      results: ['Enhanced security', 'Data protection', 'Peace of mind']
    },
    {
      name: 'David Thompson',
      role: 'Operations Manager',
      company: 'Healthcare Plus',
      content: 'Triway\'s HIPAA-compliant solutions were exactly what we needed. They implemented our systems seamlessly and provided excellent training. Our staff productivity increased by 35%.',
      rating: 5,
      image: '/api/placeholder/60/60',
      industry: 'Healthcare',
      results: ['HIPAA compliance', '35% productivity boost', 'Seamless implementation']
    },
    {
      name: 'Lisa Wang',
      role: 'Finance Director',
      company: 'FinTech Innovations',
      content: 'Working with Triway was a game-changer for our financial technology platform. Their cloud solutions improved our performance by 60% and reduced our infrastructure costs significantly.',
      rating: 5,
      image: '/api/placeholder/60/60',
      industry: 'Finance',
      results: ['60% performance boost', 'Cost reduction', 'Cloud optimization']
    },
    {
      name: 'Robert Martinez',
      role: 'VP of Operations',
      company: 'E-Commerce Express',
      content: 'Triway\'s e-commerce solutions helped us scale from a small online store to a major retail platform. Their support team is always available and their solutions are rock-solid.',
      rating: 5,
      image: '/api/placeholder/60/60',
      industry: 'E-commerce',
      results: ['Scalable growth', '24/7 support', 'Reliable platform']
    }
  ]

  const successMetrics = [
    {
      number: '500+',
      label: 'Happy Clients',
      description: 'Satisfied customers across industries'
    },
    {
      number: '1000+',
      label: 'Projects Delivered',
      description: 'Successful implementations worldwide'
    },
    {
      number: '98%',
      label: 'Satisfaction Rate',
      description: 'Client satisfaction and retention'
    },
    {
      number: '99.9%',
      label: 'Success Rate',
      description: 'Projects completed successfully'
    }
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Contained content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-500/10 border border-accent-500/30 text-accent-500 text-sm font-medium backdrop-blur-sm mb-6">
            <Sparkles className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="neon-text text-shadow-lg">Proven</span>
            <br />
            <span className="text-gray-900">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about working with Triway 
            and the measurable results we've delivered for their businesses.
          </p>
        </div>

        {/* Success Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {successMetrics.map((metric, index) => (
            <div
              key={index}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2 group-hover:text-accent-500 transition-colors duration-300">
                {metric.number}
              </div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{metric.label}</div>
              <div className="text-sm text-gray-500">{metric.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our Clients Say
          </h3>
        </div>
      </div>
      
      {/* Full-width carousel container */}
      <div className="w-full relative">
        {/* First Row - Moving Left */}
        <div className="relative overflow-hidden mb-8">
          <div className="flex animate-scroll-left">
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="card p-4 mx-2 min-w-[280px] max-w-[280px] group hover:shadow-xl transition-all duration-300 flex-shrink-0"
              >
                {/* Quote Icon */}
                <div className="mb-3">
                  <Quote className="h-5 w-5 text-accent-500" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">({testimonial.rating}.0)</span>
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-3 italic leading-relaxed text-xs line-clamp-3">
                  "{testimonial.content}"
                </p>

                {/* Results */}
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-900 mb-1">Key Results:</h4>
                  <div className="space-y-0.5">
                    {testimonial.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-accent-500 mr-1.5 flex-shrink-0" />
                        <span className="truncate">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-2">
                    <Users className="h-3 w-3 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-900 text-xs truncate">{testimonial.name}</div>
                    <div className="text-xs text-gray-500 truncate">{testimonial.role}</div>
                    <div className="text-xs text-accent-500 font-medium truncate">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row - Moving Right */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-right">
            {/* Duplicate testimonials in reverse order for opposite direction */}
            {[...testimonials.reverse(), ...testimonials.reverse()].map((testimonial, index) => (
              <div
                key={index}
                className="card p-4 mx-2 min-w-[280px] max-w-[280px] group hover:shadow-xl transition-all duration-300 flex-shrink-0"
              >
                {/* Quote Icon */}
                <div className="mb-3">
                  <Quote className="h-5 w-5 text-accent-500" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                  <span className="ml-1 text-xs text-gray-500">({testimonial.rating}.0)</span>
                </div>

                {/* Content */}
                <p className="text-gray-600 mb-3 italic leading-relaxed text-xs line-clamp-3">
                  "{testimonial.content}"
                </p>

                {/* Results */}
                <div className="mb-3">
                  <h4 className="text-xs font-semibold text-gray-900 mb-1">Key Results:</h4>
                  <div className="space-y-0.5">
                    {testimonial.results.slice(0, 2).map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="h-3 w-3 text-accent-500 mr-1.5 flex-shrink-0" />
                        <span className="truncate">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-2">
                    <Users className="h-3 w-3 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-semibold text-gray-900 text-xs truncate">{testimonial.name}</div>
                    <div className="text-xs text-gray-500 truncate">{testimonial.role}</div>
                    <div className="text-xs text-accent-500 font-medium truncate">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA Section - Back to contained layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-20">
        <div className="text-center">
          <div className="card-glow p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-pattern opacity-5"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                Ready to Experience the Triway Difference?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who have transformed their business with our proven solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="btn-primary group">
                  <span className="relative z-10 flex items-center">
                    <Zap className="mr-2 h-5 w-5" />
                    Start Your Success Story
                  </span>
                </a>
                <a href="/case-studies" className="btn-secondary group">
                  <span className="relative z-10 flex items-center">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    View Case Studies
                  </span>
                </a>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-secondary-500/20 rounded-full animate-float"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-accent-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 