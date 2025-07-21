'use client'

import React from 'react'
import { Zap, TrendingUp, Globe, Shield } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/dubai.png"
          alt="Dubai Skyline Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay for content visibility */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Additional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
      </div>
      
      {/* Subtle geometric elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium shadow-lg">
              <Zap className="w-4 h-4 mr-2 text-blue-300" />
              Leading Technology Solutions
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white drop-shadow-lg">Transform Your Business</span>
                <br />
                <span className="text-blue-300 drop-shadow-lg">/with technology/</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl drop-shadow-md">
                We deliver cutting-edge IT solutions that drive innovation, enhance security, 
                and streamline operations. From cloud infrastructure to AI automation, 
                we're your strategic technology partner for the digital future.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-300 drop-shadow-sm mb-2">500+</div>
                <div className="text-sm text-gray-300 font-medium">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-300 drop-shadow-sm mb-2">1000+</div>
                <div className="text-sm text-gray-300 font-medium">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-300 drop-shadow-sm mb-2">15+</div>
                <div className="text-sm text-gray-300 font-medium">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Content - Technology Innovation Hub */}
          <div className="relative">
            {/* Main innovation card */}
            <div className="relative bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl overflow-hidden p-8">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full"></div>
                <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-purple-500 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-white">Innovation Hub</h3>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Technology trends */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">AI Adoption</h4>
                        <p className="text-gray-300 text-sm">Growing 35% annually</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">85%</div>
                      <div className="text-xs text-gray-400">Companies</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <Globe className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Cloud Migration</h4>
                        <p className="text-gray-300 text-sm">Accelerating globally</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">92%</div>
                      <div className="text-xs text-gray-400">Adoption</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Cybersecurity</h4>
                        <p className="text-gray-300 text-sm">Critical priority</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-purple-400">$150B</div>
                      <div className="text-xs text-gray-400">Market Size</div>
                    </div>
                  </div>
                </div>
                
                {/* Innovation quote */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <p className="text-gray-300 text-sm italic mb-2">
                      "The future belongs to those who embrace technology today"
                    </p>
                    <div className="flex justify-center space-x-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full backdrop-blur-sm border border-white/20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/20 animate-float" style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator animate-bounce">
        </div>
        <div className="text-center mt-4">
          <span className="text-blue-300 text-sm font-mono drop-shadow-sm">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default Hero 