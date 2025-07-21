'use client'

import React from 'react'
import { Award, Clock, Users, Target, CheckCircle, Sparkles, Zap, Globe, Shield, Cpu } from 'lucide-react'

const AboutSection = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients', color: 'text-primary-500', delay: '0s' },
    { icon: Target, number: '1000+', label: 'Projects Delivered', color: 'text-secondary-500', delay: '0.2s' },
    { icon: Award, number: '15+', label: 'Years Experience', color: 'text-accent-500', delay: '0.4s' },
    { icon: Clock, number: '24/7', label: 'Support Available', color: 'text-primary-500', delay: '0.6s' }
  ]

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage.',
      icon: '🚀',
      color: 'from-primary-500 to-primary-600',
      delay: '0s'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to understanding your business and delivering solutions that drive real results.',
      icon: '🎯',
      color: 'from-secondary-500 to-secondary-600',
      delay: '0.2s'
    },
    {
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing and quality checks to ensure reliability and performance.',
      icon: '✅',
      color: 'from-accent-500 to-accent-600',
      delay: '0.4s'
    },
    {
      title: 'Transparent Communication',
      description: 'We believe in open, honest communication throughout every project phase.',
      icon: '💬',
      color: 'from-primary-500 to-primary-600',
      delay: '0.6s'
    }
  ]

  const certifications = [
    { name: 'Microsoft Gold Partner', icon: Shield },
    { name: 'AWS Advanced Consulting', icon: Cpu },
    { name: 'Google Cloud Partner', icon: Globe },
    { name: 'ISO 27001 Certified', icon: CheckCircle }
  ]

  return (
    <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-500 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              About Triway
            </div>

            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Your Trusted
                <br />
                <span className="neon-text text-shadow-lg">Technology Partner</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                At Triway, we're more than just an IT services company. We're your strategic partner 
                in digital transformation, helping businesses of all sizes leverage technology to 
                achieve their goals and stay ahead of the competition.
              </p>
              <p className="text-lg text-gray-500 leading-relaxed">
                With over 15 years of experience and a team of certified professionals, we deliver 
                comprehensive solutions that drive growth, enhance security, and streamline operations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group"
                  style={{ animationDelay: stat.delay }}
                >
                  <div className={`text-5xl font-bold ${stat.color} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div>
              <a href="/about" className="btn-primary group">
                <span className="relative z-10 flex items-center">
                  <Zap className="mr-2 h-5 w-5" />
                  Learn More About Us
                </span>
              </a>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-8">
              Our Core Values
            </h3>
            
            <div className="space-y-8">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="group relative"
                  style={{ animationDelay: value.delay }}
                >
                  <div className="flex items-start space-x-6">
                    <div className={`p-4 rounded-2xl bg-gradient-to-r ${value.color} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110`}>
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-500 transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute inset-0 grid-pattern opacity-5"></div>
              <div className="relative z-10">
                <h4 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                  <Award className="mr-3 h-6 w-6 text-primary-500" />
                  Certifications & Partnerships
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-primary-500/50 transition-all duration-300 group">
                      <div className="p-2 rounded-lg bg-primary-500/10 text-primary-500 group-hover:bg-primary-500/20 transition-colors duration-300">
                        <cert.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300 font-medium">
                        {cert.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-primary-500/20 rounded-full animate-float"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 bg-secondary-500/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-20">
          <div className="card p-12 relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-5"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Triway?
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We combine cutting-edge technology with proven methodologies to deliver exceptional results
                </p>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <Cpu className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h4>
                  <p className="text-gray-600">Certified professionals with deep expertise</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Secure & Reliable</h4>
                  <p className="text-gray-600">Enterprise-grade security and reliability</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h4>
                  <p className="text-gray-600">Quick turnaround times and rapid deployment</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Global Reach</h4>
                  <p className="text-gray-600">Worldwide support and local expertise</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 