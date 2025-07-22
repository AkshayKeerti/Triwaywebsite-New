'use client'

import React, { useState, useEffect } from 'react'
import { Zap, Shield, Cloud, Code, Target, Sparkles } from 'lucide-react'

interface LoaderProps {
  isLoading?: boolean
  message?: string
  onComplete?: () => void
}

const Loader = ({ isLoading = true, message = 'Loading...', onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [showLoader, setShowLoader] = useState(isLoading)

  const steps = [
    { icon: Shield, text: 'Initializing Security', color: 'from-accent-500 to-accent-600' },
    { icon: Cloud, text: 'Connecting to Cloud', color: 'from-secondary-500 to-secondary-600' },
    { icon: Code, text: 'Loading Applications', color: 'from-primary-500 to-primary-600' },
    { icon: Target, text: 'Optimizing Performance', color: 'from-accent-500 to-accent-600' },
    { icon: Zap, text: 'Ready to Launch', color: 'from-secondary-500 to-secondary-600' }
  ]

  useEffect(() => {
    if (!isLoading) {
      setShowLoader(false)
      onComplete?.()
      return
    }

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval)
          return steps.length - 1
        }
        return prev + 1
      })
    }, 800)

    return () => {
      clearInterval(progressInterval)
      clearInterval(stepInterval)
    }
  }, [isLoading, onComplete, steps.length])

  if (!showLoader) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      {/* Main Loader Container */}
      <div className="relative z-10 max-w-md w-full mx-4">
        {/* Logo/Brand Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 shadow-2xl mb-6 animate-pulse">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Triway Technologies</h2>
          <p className="text-gray-400 text-sm">Powering Digital Innovation</p>
        </div>

        {/* Progress Container */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-2xl">
          {/* Current Step */}
          <div className="flex items-center justify-center mb-6">
            <div className={`p-3 rounded-full bg-gradient-to-r ${steps[currentStep].color} shadow-lg animate-pulse`}>
              {React.createElement(steps[currentStep].icon, { className: "w-6 h-6 text-white" })}
            </div>
            <span className="ml-4 text-white font-medium">{steps[currentStep].text}</span>
          </div>

          {/* Progress Bar */}
          <div className="relative mb-6">
            <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full transition-all duration-300 ease-out shadow-lg"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <div className="absolute -top-8 right-0 text-white text-sm font-mono">
              {progress}%
            </div>
          </div>

          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className={`w-2 h-2 rounded-full animate-bounce ${
                  progress > (dot + 1) * 33 ? 'bg-accent-500' : 'bg-gray-500'
                }`}
                style={{ animationDelay: `${dot * 0.2}s` }}
              ></div>
            ))}
          </div>

          {/* Status Message */}
          <div className="text-center mt-4">
            <p className="text-gray-300 text-sm">{message}</p>
          </div>
        </div>

        {/* Floating Tech Elements */}
        <div className="absolute -top-8 -left-8 w-16 h-16 border border-primary-500/30 rounded-lg animate-float"></div>
        <div className="absolute -bottom-8 -right-8 w-12 h-12 border border-secondary-500/30 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 -right-12 w-8 h-8 border border-accent-500/30 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/2 -left-12 w-6 h-6 border border-primary-500/30 rounded-full animate-float" style={{ animationDelay: '6s' }}></div>

        {/* Circuit Lines */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-primary-500 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-t from-transparent via-secondary-500 to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-8 left-8 w-32 h-32 border border-primary-500/20 rounded-lg transform rotate-12 animate-float"></div>
      <div className="absolute bottom-8 right-8 w-24 h-24 border border-secondary-500/20 rounded-lg transform -rotate-12 animate-float" style={{ animationDelay: '3s' }}></div>
    </div>
  )
}

export default Loader 