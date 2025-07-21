'use client'

import React, { useEffect, useRef } from 'react'
import { ArrowRight, Play, Shield, Zap, Cloud, Users, Sparkles, Target, Award } from 'lucide-react'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        particle.x += particle.vx
        particle.y += particle.vy
        
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(242, 101, 33, ${particle.opacity})`
        ctx.fill()
      })
      
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients', color: 'text-primary-500' },
    { icon: Target, number: '1000+', label: 'Projects Delivered', color: 'text-secondary-500' },
    { icon: Award, number: '15+', label: 'Years Experience', color: 'text-accent-500' }
  ]

  const serviceCards = [
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable infrastructure & migration',
      gradient: 'from-secondary-500 to-secondary-600',
      delay: '0s'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced threat detection',
      gradient: 'from-accent-500 to-accent-600',
      delay: '0.2s'
    },
    {
      icon: Zap,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions',
      gradient: 'from-primary-500 to-primary-600',
      delay: '0.4s'
    },
    {
      icon: Users,
      title: 'Managed Services',
      description: 'Complete IT outsourcing',
      gradient: 'from-secondary-500 to-secondary-600',
      delay: '0.6s'
    }
  ]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-500 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2" />
              Leading IT Solutions Provider
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Transform Your Business with</span>
                <br />
                <span className="neon-text text-shadow-lg">Digital Innovation</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                We deliver cutting-edge IT solutions that drive growth, enhance security, 
                and streamline operations. From cloud migration to AI automation, 
                we're your strategic technology partner for the future.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`text-4xl font-bold ${stat.color} mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="btn-secondary group">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right Content - Service Cards */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {serviceCards.map((card, index) => (
                <div
                  key={index}
                  className="service-card group"
                  style={{ animationDelay: card.delay }}
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${card.gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <card.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-primary-500 transition-colors duration-300">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {card.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-secondary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              ))}
            </div>

            {/* Floating Tech Elements */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Tech Stack Icons */}
            <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 space-y-4">
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 animate-float shadow-lg">
                <span className="text-primary-500 font-bold text-sm">AI</span>
              </div>
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                <span className="text-secondary-500 font-bold text-sm">ML</span>
              </div>
              <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-200 animate-float shadow-lg" style={{ animationDelay: '2s' }}>
                <span className="text-accent-500 font-bold text-sm">IoT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator animate-bounce">
        </div>
        <div className="text-center mt-4">
          <span className="text-primary-500 text-sm font-mono">Scroll to explore</span>
        </div>
      </div>

      {/* Animated Lines */}
      <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-transparent via-secondary-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
    </section>
  )
}

export default Hero 