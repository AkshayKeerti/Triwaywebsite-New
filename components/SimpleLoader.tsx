'use client'

import React from 'react'
import { Sparkles } from 'lucide-react'

interface SimpleLoaderProps {
  size?: 'sm' | 'md' | 'lg'
  message?: string
  className?: string
}

const SimpleLoader = ({ size = 'md', message, className = '' }: SimpleLoaderProps) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  }

  return (
    <div className={`flex flex-col items-center justify-center space-y-4 ${className}`}>
      {/* Animated Logo */}
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-primary-500/30 animate-spin-slow"></div>
        
        {/* Inner Ring */}
        <div className="absolute inset-2 rounded-full border-2 border-secondary-500/30 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
        
        {/* Center Icon */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center animate-pulse">
          <Sparkles className="w-1/2 h-1/2 text-white" />
        </div>
        
        {/* Floating Particles */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent-500 rounded-full animate-float"></div>
        <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary-500 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -top-1 -left-1 w-1.5 h-1.5 bg-secondary-500 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Message */}
      {message && (
        <div className="text-center">
          <p className={`text-gray-600 ${textSizes[size]} font-medium`}>{message}</p>
          <div className="flex justify-center space-x-1 mt-2">
            <div className="w-1 h-1 bg-primary-500 rounded-full animate-bounce"></div>
            <div className="w-1 h-1 bg-secondary-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-1 bg-accent-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SimpleLoader 