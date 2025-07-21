'use client'

import React from 'react'
import { Play, ArrowRight, Zap, Shield, Cloud, Code } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Professional gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100"></div>
      
      {/* Abstract tech elements */}
      <div className="absolute inset-0">
        {/* Geometric shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-r from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-300 rounded-lg transform rotate-12"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-indigo-300 rounded-lg transform -rotate-12"></div>
        </div>
        
        {/* Circuit-like lines */}
        <div className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/3 right-0 w-32 h-px bg-gradient-to-l from-transparent via-indigo-400 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-600 text-sm font-medium backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2" />
              Leading Technology Solutions
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-slate-900">Transform Your Business</span>
                <br />
                <span className="text-blue-600">/with technology/</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                We deliver cutting-edge IT solutions that drive innovation, enhance security, 
                and streamline operations. From cloud infrastructure to AI automation, 
                we're your strategic technology partner for the digital future.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
              <button className="group bg-white hover:bg-gray-50 text-slate-900 font-semibold py-4 px-8 rounded-full border-2 border-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                <ArrowRight className="w-5 h-5" />
                <span>Get Started</span>
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm text-slate-600">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Cloud className="w-5 h-5 text-blue-500" />
                <span className="text-sm text-slate-600">Cloud Native</span>
              </div>
              <div className="flex items-center space-x-2">
                <Code className="w-5 h-5 text-purple-500" />
                <span className="text-sm text-slate-600">Custom Solutions</span>
              </div>
            </div>
          </div>

          {/* Right Content - Tech Visualization */}
          <div className="relative">
            {/* Main tech illustration */}
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border border-blue-200/50 shadow-xl overflow-hidden">
              {/* Tech stack visualization */}
              <div className="absolute inset-0 p-8">
                <div className="grid grid-cols-3 gap-4 h-full">
                  {/* AI/ML Layer */}
                  <div className="space-y-3">
                    <div className="h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">AI/ML</span>
                    </div>
                    <div className="h-6 bg-gradient-to-r from-purple-400 to-purple-500 rounded-md"></div>
                    <div className="h-4 bg-gradient-to-r from-purple-300 to-purple-400 rounded-md"></div>
                  </div>
                  
                  {/* Cloud Layer */}
                  <div className="space-y-3">
                    <div className="h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">Cloud</span>
                    </div>
                    <div className="h-6 bg-gradient-to-r from-blue-400 to-blue-500 rounded-md"></div>
                    <div className="h-4 bg-gradient-to-r from-blue-300 to-blue-400 rounded-md"></div>
                  </div>
                  
                  {/* Security Layer */}
                  <div className="space-y-3">
                    <div className="h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-semibold">Security</span>
                    </div>
                    <div className="h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-md"></div>
                    <div className="h-4 bg-gradient-to-r from-green-300 to-green-400 rounded-md"></div>
                  </div>
                </div>
                
                {/* Data flow lines */}
                <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-indigo-300 to-transparent"></div>
              </div>
              
              {/* Floating tech icons */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-200 animate-float shadow-lg">
                <span className="text-blue-600 font-bold text-sm">AI</span>
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-indigo-200 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                <span className="text-indigo-600 font-bold text-sm">ML</span>
              </div>
              <div className="absolute top-1/2 right-8 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-purple-200 animate-float shadow-lg" style={{ animationDelay: '2s' }}>
                <span className="text-purple-600 font-bold text-xs">IoT</span>
              </div>
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl p-6">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-slate-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">1000+</div>
                  <div className="text-sm text-slate-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-slate-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="scroll-indicator animate-bounce">
        </div>
        <div className="text-center mt-4">
          <span className="text-blue-600 text-sm font-mono">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default Hero 