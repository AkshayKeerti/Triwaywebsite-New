'use client'

import { Zap } from 'lucide-react'
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
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Additional gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      {/* Abstract tech elements on top */}
      <div className="absolute inset-0">
        {/* Geometric shapes - Fixed floating lights */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-2xl animate-float floating-light"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400/30 to-blue-400/30 rounded-full blur-2xl animate-float floating-light" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-1/3 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-float floating-light" style={{ animationDelay: '4s' }}></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-15">
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
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/30 border border-blue-400/60 text-blue-200 text-sm font-medium backdrop-blur-md shadow-lg">
              <Zap className="w-4 h-4 mr-2" />
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

          </div>

          {/* Right Content - Tech Visualization */}
          <div className="relative">
            {/* Main tech illustration */}
            <div className="relative w-full h-96 bg-white/15 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl overflow-hidden">
              {/* Modern Tech Dashboard */}
              <div className="absolute inset-0 p-8">
                {/* Top Row - Status Indicators */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-mono">SYSTEM ONLINE</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  </div>
                </div>
                
                {/* Main Content Area */}
                <div className="grid grid-cols-2 gap-6 h-64">
                  {/* Left Panel - Code Editor */}
                  <div className="bg-black/40 rounded-lg border border-white/20 p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white text-xs font-mono ml-2">main.js</span>
                    </div>
                    <div className="space-y-1">
                      <div className="text-green-400 text-xs font-mono">const <span className="text-blue-400">tech</span> = {<span className="text-yellow-400">'innovation'</span>};</div>
                      <div className="text-green-400 text-xs font-mono">const <span className="text-blue-400">future</span> = {<span className="text-yellow-400">'now'</span>};</div>
                      <div className="text-green-400 text-xs font-mono">const <span className="text-blue-400">triway</span> = {<span className="text-yellow-400">'excellence'</span>};</div>
                      <div className="text-purple-400 text-xs font-mono">// Building tomorrow's solutions</div>
                    </div>
                  </div>
                  
                  {/* Right Panel - Data Visualization */}
                  <div className="bg-black/40 rounded-lg border border-white/20 p-4">
                    <div className="flex items-center mb-3">
                      <span className="text-white text-xs font-mono">PERFORMANCE</span>
                    </div>
                    
                    {/* Data Bars */}
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-xs w-16">AI/ML</span>
                        <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="w-[98%] h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-xs w-16">Managed</span>
                        <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="w-[96%] h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-xs w-16">Cloud</span>
                        <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="w-[99%] h-full bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-xs w-16">Security</span>
                        <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="w-[97%] h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-xs w-16">Design</span>
                        <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="w-[95%] h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-xs w-16">Infra</span>
                        <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="w-[98%] h-full bg-gradient-to-r from-orange-400 to-red-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-white text-xs w-16">Software</span>
                        <div className="flex-1 h-2 bg-gray-600 rounded-full overflow-hidden">
                          <div className="w-[96%] h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                                 {/* Bottom Row - Network Status */}
                 <div className="mt-6 flex items-center justify-between">
                   <div className="flex items-center space-x-4">
                     <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                       <span className="text-white text-xs">CONNECTED</span>
                     </div>
                     <div className="flex items-center space-x-2">
                       <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                       <span className="text-white text-xs">SECURE</span>
                     </div>
                   </div>
                  
                  <div className="text-white text-xs font-mono">
                    <span className="text-green-400">●</span> LIVE
                  </div>
                </div>
                
                                 {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30 animate-float floating-light">
                  <span className="text-white text-sm font-bold">SD</span>
                </div>
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30 animate-float floating-light" style={{ animationDelay: '1s' }}>
                  <span className="text-white text-sm">AI</span>
                </div>
                <div className="absolute top-1/2 right-6 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center border border-white/30 animate-float floating-light" style={{ animationDelay: '2s' }}>
                  <span className="text-white text-sm">ML</span>
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
          <span className="text-blue-300 text-sm font-mono drop-shadow-sm">Scroll to explore</span>
        </div>
      </div>
    </section>
  )
}

export default Hero 