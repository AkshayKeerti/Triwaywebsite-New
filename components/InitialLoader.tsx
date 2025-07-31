'use client'

import React, { useState, useEffect } from 'react'

interface InitialLoaderProps {
  children: React.ReactNode
}

const InitialLoader: React.FC<InitialLoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 200)

    // Hide loader after a minimum time and when progress is complete
    const timer = setTimeout(() => {
      if (progress >= 100) {
        setIsTransitioning(true)
        // Wait for transition animation to complete before hiding loader
        setTimeout(() => {
          setIsLoading(false)
        }, 800) // Match the transition duration
      }
    }, 2500)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [progress])

  if (!isLoading) {
    return (
      <div className="animate-fade-in-up">
        {children}
      </div>
    )
  }

  return (
    <div className={`fixed inset-0 bg-white z-50 flex flex-col items-center justify-center overflow-hidden transition-all duration-800 ease-in-out ${
      isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
    }`}>
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(242, 101, 33, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(242, 101, 33, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>
      <div className="relative w-96 h-96 mb-8">
        {/* Outer neon ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-80 h-80 border-4 border-neon-orange rounded-full animate-neon-pulse" />
        </div>
        
        {/* Middle neon ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 border-4 border-neon-blue rounded-full animate-neon-pulse-blue" style={{ animationDelay: '0.5s' }} />
        </div>
        
        {/* Inner neon ring */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-48 h-48 border-4 border-neon-green rounded-full animate-neon-pulse-green" style={{ animationDelay: '1s' }} />
        </div>
        
        {/* Center core */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green rounded-full animate-pulse animate-neon-pulse" />
        </div>
        
        {/* Rotating particles */}
        <div className="absolute inset-0 animate-spin-slow">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-neon-orange rounded-full animate-pulse"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(120px)`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
        
        {/* Counter-rotating particles */}
        <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={`reverse-${i}`}
              className="absolute w-2 h-2 bg-neon-blue rounded-full animate-pulse"
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) rotate(${i * 45}deg) translateX(100px)`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
        

        
        {/* Floating tech elements */}
        <div className="absolute top-8 left-8 w-4 h-4 bg-neon-purple rounded-full animate-float" />
        <div className="absolute top-16 right-12 w-3 h-3 bg-neon-pink rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-16 left-12 w-5 h-5 bg-neon-green rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-8 right-8 w-3 h-3 bg-neon-orange rounded-full animate-float" style={{ animationDelay: '3s' }} />
        
        {/* Matrix-style data streams */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div
              key={`stream-${i}`}
              className="absolute w-px h-8 bg-neon-green animate-pulse"
              style={{
                left: `${10 + i * 8}%`,
                top: '-2rem',
                animation: 'dataStream 3s linear infinite',
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
        
        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 384 384">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((i) => {
              const row = Math.floor(i / 5)
              const col = i % 5
              const x = 40 + col * 80
              const y = 40 + row * 80
              return (
                <g key={i}>
                  <polygon
                    points={`${x},${y-20} ${x+20},${y-10} ${x+20},${y+10} ${x},${y+20} ${x-20},${y+10} ${x-20},${y-10}`}
                    fill="none"
                    stroke="#f26521"
                    strokeWidth="1"
                    className="animate-pulse"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                </g>
              )
            })}
          </svg>
        </div>
        
        {/* Energy waves */}
        <div className="absolute inset-0">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={`wave-${i}`}
              className="absolute inset-0 border-2 border-neon-orange rounded-full animate-pulse"
              style={{
                animation: 'hexagonExpand 4s ease-in-out infinite',
                animationDelay: `${i * 1}s`,
                opacity: 0.3 - (i * 0.1)
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Loading text and progress bar below animation */}
      <div className="text-center">
        <p className="text-neon-orange text-lg font-mono mb-4">Loading Experience...</p>
        
        {/* Progress bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-neon-orange via-neon-blue to-neon-green rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Progress percentage */}
        <p className="text-neon-green text-sm font-mono mt-2">
          {Math.round(progress)}%
        </p>
      </div>
    </div>
  )
}

export default InitialLoader 