'use client'

import React, { useState, useEffect } from 'react'
import { 
  Zap, Shield, Cloud, Code, Target, Sparkles, 
  Cpu, Database, Network, Lock, Globe, Rocket,
  Hexagon, Square, Circle, Triangle
} from 'lucide-react'

interface LoaderVariationsProps {
  isLoading?: boolean
  message?: string
  onComplete?: () => void
  variant?: 'matrix' | 'particles' | 'geometric' | 'circuit' | 'hologram' | 'neural' | 'triangles' | 'waveform' | 'dataflow' | 'quantum'
}

// Matrix Rain Effect Loader
const MatrixLoader = ({ isLoading, message, onComplete }: LoaderVariationsProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
      setTimeout(() => onComplete?.(), 500)
      return
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isLoading, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Matrix Rain Background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-0 text-green-400 font-mono text-sm animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div
                key={j}
                className="mb-2"
                style={{ animationDelay: `${j * 0.1}s` }}
              >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-2xl mb-6 animate-pulse">
              <Cpu className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-400 mb-2 font-mono">TRIWAY SYSTEMS</h2>
            <p className="text-green-300 text-sm font-mono">INITIALIZING...</p>
          </div>

          {/* Progress */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-gray-900 rounded-full h-3 border border-green-500/30 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <div className="text-green-400 text-sm font-mono mt-2">{progress}% COMPLETE</div>
          </div>

          {/* Status */}
          <div className="text-green-300 font-mono text-sm">
            {message || 'LOADING SYSTEM COMPONENTS...'}
          </div>
        </div>
      </div>
    </div>
  )
}

// Particle System Loader
const ParticleLoader = ({ isLoading, message, onComplete }: LoaderVariationsProps) => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
      setTimeout(() => onComplete?.(), 500)
      return
    }

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + 1
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isLoading, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
      {/* Particle System */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Orbital Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-64 h-64 border border-primary-500/30 rounded-full animate-spin-slow"></div>
          {/* Middle Ring */}
          <div className="absolute top-8 left-8 w-48 h-48 border border-secondary-500/30 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
          {/* Inner Ring */}
          <div className="absolute top-16 left-16 w-32 h-32 border border-accent-500/30 rounded-full animate-spin-slow"></div>
          
          {/* Center */}
          <div className="absolute top-24 left-24 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center animate-pulse">
            <Rocket className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Triway Technologies</h2>
        <div className="max-w-md mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full h-2 border border-white/20 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="text-white/80 text-sm">{message || 'Launching innovation...'}</p>
      </div>
    </div>
  )
}

// Geometric Pattern Loader
const GeometricLoader = ({ isLoading, message, onComplete }: LoaderVariationsProps) => {
  const [progress, setProgress] = useState(0)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
      setTimeout(() => onComplete?.(), 500)
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

    const rotationInterval = setInterval(() => {
      setRotation(prev => prev + 1)
    }, 50)

    return () => {
      clearInterval(progressInterval)
      clearInterval(rotationInterval)
    }
  }, [isLoading, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-primary-500/30 transform rotate-45 animate-float"
          style={{ animationDelay: '0s' }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-24 h-24 border-4 border-secondary-500/30 rounded-full animate-float"
          style={{ animationDelay: '1s' }}
        />
        <div 
          className="absolute bottom-1/4 left-1/3 w-20 h-20 border-4 border-accent-500/30 transform rotate-12 animate-float"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Main Geometric Assembly */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div 
          className="relative"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {/* Hexagon */}
          <div className="w-32 h-32 bg-gradient-to-r from-primary-500 to-primary-600 clip-path-hexagon animate-pulse"></div>
          
          {/* Square */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-r from-secondary-500 to-secondary-600 rotate-45 animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
          
          {/* Circle */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-accent-500 to-accent-600 rounded-full animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Triway Technologies</h2>
        <div className="max-w-md mx-auto mb-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-full h-3 border border-gray-200 overflow-hidden shadow-lg">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
        <p className="text-gray-600 font-medium">{message || 'Building the future...'}</p>
      </div>
    </div>
  )
}

// Circuit Board Loader
const CircuitLoader = ({ isLoading, message, onComplete }: LoaderVariationsProps) => {
  const [progress, setProgress] = useState(0)
  const [activeNodes, setActiveNodes] = useState<number[]>([])

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
      setTimeout(() => onComplete?.(), 500)
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

    const nodeInterval = setInterval(() => {
      setActiveNodes(prev => {
        const newNodes = [...prev]
        const randomNode = Math.floor(Math.random() * 12)
        if (!newNodes.includes(randomNode)) {
          newNodes.push(randomNode)
        }
        if (newNodes.length > 6) {
          newNodes.shift()
        }
        return newNodes
      })
    }, 200)

    return () => {
      clearInterval(progressInterval)
      clearInterval(nodeInterval)
    }
  }, [isLoading, onComplete])

  const nodes = Array.from({ length: 12 }, (_, i) => i)

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Circuit Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-6 grid-rows-4 gap-8 p-8 h-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="border border-green-500/30 rounded"></div>
          ))}
        </div>
      </div>

      {/* Circuit Nodes */}
      <div className="absolute inset-0">
        {nodes.map((node, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 rounded-full border-2 transition-all duration-300 ${
              activeNodes.includes(i) 
                ? 'bg-green-500 border-green-400 shadow-lg shadow-green-500/50' 
                : 'bg-transparent border-green-500/30'
            }`}
            style={{
              left: `${20 + (i % 4) * 20}%`,
              top: `${20 + Math.floor(i / 4) * 20}%`
            }}
          />
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0">
        {activeNodes.map((node, i) => {
          const nextNode = activeNodes[i + 1]
          if (nextNode !== undefined) {
            return (
              <div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-green-500 to-transparent animate-pulse"
                style={{
                  left: `${20 + (node % 4) * 20}%`,
                  top: `${20 + Math.floor(node / 4) * 20}%`,
                  width: `${Math.abs(nextNode - node) * 5}%`,
                  transform: `rotate(${Math.atan2(
                    Math.floor(nextNode / 4) - Math.floor(node / 4),
                    (nextNode % 4) - (node % 4)
                  ) * 180 / Math.PI}deg)`
                }}
              />
            )
          }
          return null
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-green-500 to-blue-500 shadow-2xl mb-6 animate-pulse">
              <Database className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-green-400 mb-2 font-mono">CIRCUIT INITIALIZATION</h2>
            <p className="text-green-300 text-sm font-mono">ESTABLISHING CONNECTIONS...</p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="bg-gray-900 rounded-full h-3 border border-green-500/30 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <div className="text-green-400 text-sm font-mono mt-2">{progress}% CONNECTED</div>
          </div>

          <div className="text-green-300 font-mono text-sm">
            {message || 'SYNCING NETWORK NODES...'}
          </div>
        </div>
      </div>
    </div>
  )
}

// Holographic Loader
const HolographicLoader = ({ isLoading, message, onComplete }: LoaderVariationsProps) => {
  const [progress, setProgress] = useState(0)
  const [hologramPhase, setHologramPhase] = useState(0)

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
      setTimeout(() => onComplete?.(), 500)
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

    const hologramInterval = setInterval(() => {
      setHologramPhase(prev => (prev + 1) % 360)
    }, 50)

    return () => {
      clearInterval(progressInterval)
      clearInterval(hologramInterval)
    }
  }, [isLoading, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-8 grid-rows-6 gap-4 p-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div 
              key={i} 
              className="border border-cyan-400/50 rounded animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Holographic Projection */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Base Layer */}
          <div 
            className="w-48 h-48 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full animate-pulse"
            style={{ 
              transform: `rotateY(${hologramPhase}deg)`,
              filter: 'blur(1px)'
            }}
          />
          
          {/* Middle Layer */}
          <div 
            className="absolute top-4 left-4 w-40 h-40 bg-gradient-to-r from-purple-500/30 to-cyan-500/30 rounded-full animate-pulse"
            style={{ 
              transform: `rotateY(${hologramPhase + 120}deg)`,
              filter: 'blur(0.5px)',
              animationDelay: '0.5s'
            }}
          />
          
          {/* Top Layer */}
          <div 
            className="absolute top-8 left-8 w-32 h-32 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full animate-pulse"
            style={{ 
              transform: `rotateY(${hologramPhase + 240}deg)`,
              animationDelay: '1s'
            }}
          />
          
          {/* Center Core */}
          <div className="absolute top-12 left-12 w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl shadow-cyan-500/50">
            <Globe className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 mb-4 font-mono">HOLOGRAPHIC INTERFACE</h2>
        <div className="max-w-md mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full h-3 border border-cyan-400/30 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
        <p className="text-cyan-300 font-mono text-sm">{message || 'PROJECTING REALITY...'}</p>
      </div>
    </div>
  )
}

// Triangle Assembly Loader (Brand Logo Animation)
const TriangleLoader = ({ isLoading, message, onComplete }: LoaderVariationsProps) => {
  const [progress, setProgress] = useState(0)
  const [assemblyPhase, setAssemblyPhase] = useState(0)

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
      setTimeout(() => onComplete?.(), 500)
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

    const assemblyInterval = setInterval(() => {
      setAssemblyPhase(prev => {
        if (prev >= 4) return 4
        return prev + 0.1
      })
    }, 100)

    return () => {
      clearInterval(progressInterval)
      clearInterval(assemblyInterval)
    }
  }, [isLoading, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-6 gap-4 p-4 h-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-gray-600 rounded"></div>
          ))}
        </div>
      </div>

      {/* Interlocking Triangle Assembly */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div 
          className="relative w-80 h-80"
          style={{
            transform: assemblyPhase >= 0.5 ? 'scale(1)' : 'scale(0.5)',
            transition: 'transform 1s ease-out'
          }}
        >
          <svg 
            viewBox="0 0 200 200" 
            className="w-full h-full"
            style={{
              opacity: assemblyPhase >= 0.5 ? 1 : 0,
              transition: 'opacity 1s ease-out'
            }}
          >
            {/* Phase 1: Orange Triangle appears (Top Right) */}
            <g style={{ 
              opacity: assemblyPhase >= 1 ? 1 : 0, 
              transition: 'opacity 0.5s ease-out'
            }}>
              <path 
                d="M160 20 L220 140 L100 140 Z" 
                fill="none" 
                stroke="#f26521" 
                strokeWidth="6"
                className="animate-pulse"
              />
            </g>

            {/* Phase 2: Blue Triangle appears (Top Left) */}
            <g style={{ 
              opacity: assemblyPhase >= 2 ? 1 : 0, 
              transition: 'opacity 0.5s ease-out'
            }}>
              <path 
                d="M40 20 L160 140 L-20 140 Z" 
                fill="none" 
                stroke="#2f3a75" 
                strokeWidth="6"
                className="animate-pulse"
                style={{ animationDelay: '0.3s' }}
              />
            </g>

            {/* Phase 3: Green Triangle appears (Bottom) */}
            <g style={{ 
              opacity: assemblyPhase >= 3 ? 1 : 0, 
              transition: 'opacity 0.5s ease-out'
            }}>
              <path 
                d="M100 80 L200 200 L0 200 Z" 
                fill="none" 
                stroke="#00a650" 
                strokeWidth="6"
                className="animate-pulse"
                style={{ animationDelay: '0.6s' }}
              />
            </g>

            {/* Final Phase: Proper Interlocking Valknut Pattern */}
            <g style={{ opacity: assemblyPhase >= 4 ? 1 : 0, transition: 'opacity 1s ease-out' }}>
              {/* Orange Triangle - Top Right */}
              <g className="triangle-layer-1">
                <path 
                  d="M160 20 L220 140 L100 140 Z" 
                  fill="none" 
                  stroke="#f26521" 
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </g>
              
              {/* Blue Triangle - Top Left */}
              <g className="triangle-layer-2">
                <path 
                  d="M40 20 L160 140 L-20 140 Z" 
                  fill="none" 
                  stroke="#2f3a75" 
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </g>
              
              {/* Green Triangle - Bottom */}
              <g className="triangle-layer-3">
                <path 
                  d="M100 80 L200 200 L0 200 Z" 
                  fill="none" 
                  stroke="#00a650" 
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </g>
            </g>
          </svg>

          {/* Center Glow Effect */}
          {assemblyPhase >= 4 && (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white rounded-full animate-pulse shadow-lg shadow-white/50"></div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 font-mono">TRIWAY TECHNOLOGIES</h2>
        <div className="max-w-md mx-auto mb-6">
          <div className="bg-gray-800 rounded-full h-3 border border-gray-600 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
        <p className="text-gray-300 font-mono text-sm">{message || 'ASSEMBLING BRAND IDENTITY...'}</p>
      </div>
    </div>
  )
}

// Waveform Loader
const WaveformLoader = ({ isLoading, message, onComplete }: LoaderVariationsProps) => {
  const [progress, setProgress] = useState(0)
  const [waveformData, setWaveformData] = useState<number[]>([])

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
      setTimeout(() => onComplete?.(), 500)
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

    const waveformInterval = setInterval(() => {
      setWaveformData(Array.from({ length: 20 }, () => Math.random() * 100))
    }, 200)

    return () => {
      clearInterval(progressInterval)
      clearInterval(waveformInterval)
    }
  }, [isLoading, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Audio Waveform Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="flex items-center justify-center h-full space-x-1">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="w-1 bg-gradient-to-t from-primary-500 to-secondary-500 animate-pulse"
              style={{
                height: `${20 + Math.random() * 60}px`,
                animationDelay: `${i * 0.1}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Main Waveform */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Waveform Bars */}
          <div className="flex items-center space-x-2">
            {waveformData.map((height, i) => (
              <div
                key={i}
                className="w-3 bg-gradient-to-t from-primary-500 via-secondary-500 to-accent-500 rounded-full animate-pulse"
                style={{
                  height: `${height}px`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '1s'
                }}
              />
            ))}
          </div>

          {/* Center Icon */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Audio Processing</h2>
        <div className="max-w-md mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full h-2 border border-white/20 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <p className="text-white/80 text-sm">{message || 'Processing audio signals...'}</p>
      </div>
    </div>
  )
}

// Data Flow Loader
const DataFlowLoader = ({ isLoading, message, onComplete }: LoaderVariationsProps) => {
  const [progress, setProgress] = useState(0)
  const [dataPoints, setDataPoints] = useState<Array<{x: number, y: number, active: boolean}>>([])

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
      setTimeout(() => onComplete?.(), 500)
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

    const dataInterval = setInterval(() => {
      setDataPoints(prev => {
        const newPoints = prev.map(point => ({
          ...point,
          active: Math.random() > 0.7
        }))
        
        if (newPoints.length < 20) {
          newPoints.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            active: true
          })
        }
        
        return newPoints.slice(-20)
      })
    }, 300)

    return () => {
      clearInterval(progressInterval)
      clearInterval(dataInterval)
    }
  }, [isLoading, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 overflow-hidden">
      {/* Data Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-10 grid-rows-10 gap-1 p-4 h-full">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="border border-blue-400/30 rounded"></div>
          ))}
        </div>
      </div>

      {/* Data Points */}
      <div className="absolute inset-0">
        {dataPoints.map((point, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full transition-all duration-500 ${
              point.active 
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50' 
                : 'bg-blue-400/30'
            }`}
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`
            }}
          />
        ))}
      </div>

      {/* Data Flow Lines */}
      <div className="absolute inset-0">
        {dataPoints.map((point, i) => {
          const nextPoint = dataPoints[i + 1]
          if (nextPoint && point.active && nextPoint.active) {
            return (
              <div
                key={`line-${i}`}
                className="absolute h-px bg-gradient-to-r from-cyan-400 to-transparent animate-pulse"
                style={{
                  left: `${point.x}%`,
                  top: `${point.y}%`,
                  width: `${Math.abs(nextPoint.x - point.x) * 2}%`,
                  transform: `rotate(${Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI}deg)`
                }}
              />
            )
          }
          return null
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-2xl mb-6 animate-pulse">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-cyan-400 mb-2 font-mono">DATA FLOW</h2>
            <p className="text-cyan-300 text-sm font-mono">PROCESSING INFORMATION...</p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="bg-gray-800 rounded-full h-3 border border-cyan-500/30 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <div className="text-cyan-400 text-sm font-mono mt-2">{progress}% PROCESSED</div>
          </div>

          <div className="text-cyan-300 font-mono text-sm">
            {message || 'ANALYZING DATA STREAMS...'}
          </div>
        </div>
      </div>
    </div>
  )
}

// Quantum Loader
const QuantumLoader = ({ isLoading, message, onComplete }: LoaderVariationsProps) => {
  const [progress, setProgress] = useState(0)
  const [quantumState, setQuantumState] = useState(0)

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
      setTimeout(() => onComplete?.(), 500)
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

    const quantumInterval = setInterval(() => {
      setQuantumState(prev => (prev + 1) % 360)
    }, 100)

    return () => {
      clearInterval(progressInterval)
      clearInterval(quantumInterval)
    }
  }, [isLoading, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 overflow-hidden">
      {/* Quantum Field */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Quantum Orbital */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Outer Orbit */}
          <div 
            className="w-80 h-80 border border-purple-400/30 rounded-full animate-spin-slow"
            style={{ animationDirection: 'reverse' }}
          />
          
          {/* Middle Orbit */}
          <div 
            className="absolute top-8 left-8 w-64 h-64 border border-indigo-400/30 rounded-full animate-spin-slow"
          />
          
          {/* Inner Orbit */}
          <div 
            className="absolute top-16 left-16 w-48 h-48 border border-blue-400/30 rounded-full animate-spin-slow"
            style={{ animationDirection: 'reverse' }}
          />
          
          {/* Quantum Particles */}
          <div 
            className="absolute top-8 left-8 w-64 h-64"
            style={{ transform: `rotate(${quantumState}deg)` }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          {/* Center Core */}
          <div className="absolute top-32 left-32 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center animate-pulse shadow-2xl shadow-purple-500/50">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
        <h2 className="text-3xl font-bold text-purple-400 mb-4 font-mono">QUANTUM PROCESSING</h2>
        <div className="max-w-md mx-auto mb-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-full h-3 border border-purple-400/30 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            >
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
        </div>
        <p className="text-purple-300 font-mono text-sm">{message || 'CALCULATING QUANTUM STATES...'}</p>
      </div>
    </div>
  )
}

// Neural Network Loader
const NeuralLoader = ({ isLoading, message, onComplete }: LoaderVariationsProps) => {
  const [progress, setProgress] = useState(0)
  const [activeConnections, setActiveConnections] = useState<number[]>([])

  useEffect(() => {
    if (!isLoading) {
      setProgress(100)
      setTimeout(() => onComplete?.(), 500)
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

    const connectionInterval = setInterval(() => {
      setActiveConnections(prev => {
        const newConnections = [...prev]
        const randomConnection = Math.floor(Math.random() * 20)
        if (!newConnections.includes(randomConnection)) {
          newConnections.push(randomConnection)
        }
        if (newConnections.length > 10) {
          newConnections.shift()
        }
        return newConnections
      })
    }, 150)

    return () => {
      clearInterval(progressInterval)
      clearInterval(connectionInterval)
    }
  }, [isLoading, onComplete])

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 overflow-hidden">
      {/* Neural Network Nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${
              activeConnections.includes(i) 
                ? 'bg-gradient-to-r from-primary-500 to-accent-500 shadow-lg shadow-primary-500/50' 
                : 'bg-gray-600'
            }`}
            style={{
              left: `${10 + (i % 5) * 20}%`,
              top: `${10 + Math.floor(i / 5) * 25}%`
            }}
          />
        ))}
      </div>

      {/* Neural Connections */}
      <div className="absolute inset-0">
        {activeConnections.map((node, i) => {
          const nextNode = activeConnections[i + 1]
          if (nextNode !== undefined) {
            return (
              <div
                key={`connection-${i}`}
                className="absolute h-px bg-gradient-to-r from-primary-500 to-accent-500 animate-pulse"
                style={{
                  left: `${10 + (node % 5) * 20}%`,
                  top: `${10 + Math.floor(node / 5) * 25}%`,
                  width: `${Math.abs(nextNode - node) * 4}%`,
                  transform: `rotate(${Math.atan2(
                    Math.floor(nextNode / 5) - Math.floor(node / 5),
                    (nextNode % 5) - (node % 5)
                  ) * 180 / Math.PI}deg)`
                }}
              />
            )
          }
          return null
        })}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 shadow-2xl mb-6 animate-pulse">
              <Network className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-primary-400 mb-2 font-mono">NEURAL NETWORK</h2>
            <p className="text-primary-300 text-sm font-mono">TRAINING IN PROGRESS...</p>
          </div>

          <div className="max-w-md mx-auto mb-8">
            <div className="bg-gray-800 rounded-full h-3 border border-primary-500/30 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <div className="text-primary-400 text-sm font-mono mt-2">{progress}% TRAINED</div>
          </div>

          <div className="text-primary-300 font-mono text-sm">
            {message || 'ESTABLISHING SYNAPTIC CONNECTIONS...'}
          </div>
        </div>
      </div>
    </div>
  )
}

// Main Loader Component
const LoaderVariations = ({ 
  isLoading = true, 
  message, 
  onComplete, 
  variant = 'matrix' 
}: LoaderVariationsProps) => {
  const loaders = {
    matrix: MatrixLoader,
    particles: ParticleLoader,
    geometric: GeometricLoader,
    circuit: CircuitLoader,
    hologram: HolographicLoader,
    neural: NeuralLoader,
    triangles: TriangleLoader,
    waveform: WaveformLoader,
    dataflow: DataFlowLoader,
    quantum: QuantumLoader
  }

  const LoaderComponent = loaders[variant]

  if (!isLoading) return null

  return <LoaderComponent isLoading={isLoading} message={message} onComplete={onComplete} />
}

export default LoaderVariations 