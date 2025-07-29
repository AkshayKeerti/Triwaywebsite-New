'use client'

import React from 'react'

export type LoaderType = 
  | 'triway-pulse'
  | 'orbital-rings'
  | 'waveform'
  | 'hexagon-grid'
  | 'particle-flow'
  | 'spiral-orbit'
  | 'matrix-rain'
  | 'morphing-shapes'
  | 'energy-pulse'
  | 'neural-network'
  | 'digital-dna'
  | 'quantum-particles'
  | 'holographic-cube'
  | 'data-stream'
  | 'solar-system'
  | 'fractal-tree'
  | 'circuit-board'
  | 'galaxy-spiral'
  | 'crystal-formation'
  | 'neural-synapse'
  | 'liquid-morphing'
  | 'holographic-portal'
  | 'quantum-field'
  | 'neural-evolution'
  | 'digital-ecosystem'
  | 'time-warp'
  | 'cosmic-storm'
  | 'bio-mechanical'
  | 'dimensional-rift'
  | 'quantum-consciousness'
  | 'dubai-skyline'
  | 'service-grid'
  | 'navigation-flow'
  | 'tech-dashboard'
  | 'brand-gradient'
  | 'neon-glow'
  | 'floating-elements'
  | 'tech-circuit'
  | 'code-editor'
  | 'geometric-tech'

interface LoaderProps {
  type: LoaderType
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const Loader: React.FC<LoaderProps> = ({ type, size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }

  const renderLoader = () => {
    switch (type) {
      case 'triway-pulse':
        return <TriwayPulseLoader size={size} />
      case 'orbital-rings':
        return <OrbitalRingsLoader size={size} />
      case 'waveform':
        return <WaveformLoader size={size} />
      case 'hexagon-grid':
        return <HexagonGridLoader size={size} />
      case 'particle-flow':
        return <ParticleFlowLoader size={size} />
      case 'spiral-orbit':
        return <SpiralOrbitLoader size={size} />
      case 'matrix-rain':
        return <MatrixRainLoader size={size} />
      case 'morphing-shapes':
        return <MorphingShapesLoader size={size} />
      case 'energy-pulse':
        return <EnergyPulseLoader size={size} />
      case 'neural-network':
        return <NeuralNetworkLoader size={size} />
      default:
        return <TriwayPulseLoader size={size} />
    }
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {renderLoader()}
    </div>
  )
}

// Individual Loader Components
const TriwayPulseLoader: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-4 h-4',
    lg: 'w-6 h-6'
  }
  
  return (
    <div className="flex space-x-2">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${dotSizes[size]} bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.2}s`,
            animationDuration: '1.5s'
          }}
        />
      ))}
    </div>
  )
}

const OrbitalRingsLoader: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const containerSizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }
  
  const centerDotSizes = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }
  
  return (
    <div className={`relative ${containerSizes[size]}`}>
      <div className="absolute inset-0 border-2 border-primary-500/30 rounded-full animate-spin-slow" />
      <div className="absolute inset-2 border-2 border-secondary-500/50 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '3s' }} />
      <div className="absolute inset-4 border-2 border-accent-500/70 rounded-full animate-spin-slow" style={{ animationDuration: '2s' }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`${centerDotSizes[size]} bg-primary-500 rounded-full animate-pulse`} />
      </div>
    </div>
  )
}

const WaveformLoader: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const heights = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16'
  }
  
  const widths = {
    sm: 'w-0.5',
    md: 'w-1',
    lg: 'w-1.5'
  }
  
  return (
    <div className={`flex items-end space-x-1 ${heights[size]}`}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={i}
          className={`${widths[size]} bg-gradient-to-t from-primary-500 to-secondary-500 rounded-full animate-pulse`}
          style={{
            height: `${Math.random() * 100}%`,
            animationDelay: `${i * 0.1}s`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  )
}

const HexagonGridLoader: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const containerSizes = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-28 h-28'
  }
  
  const hexagonSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }
  
  return (
    <div className={`relative ${containerSizes[size]}`}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`absolute ${hexagonSizes[size]} border-2 border-primary-500 transform rotate-60`}
          style={{
            left: '50%',
            top: '50%',
            marginLeft: size === 'sm' ? '-12px' : size === 'md' ? '-16px' : '-24px',
            marginTop: size === 'sm' ? '-12px' : size === 'md' ? '-16px' : '-24px',
            animation: 'hexagonExpand 2s ease-in-out infinite',
            animationDelay: `${i * 0.3}s`
          }}
        />
      ))}
    </div>
  )
}

const ParticleFlowLoader: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const containerSizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }
  
  const particleSizes = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }
  
  return (
    <div className={`relative ${containerSizes[size]} overflow-hidden`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`absolute ${particleSizes[size]} bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full`}
          style={{
            left: '0%',
            top: `${20 + i * 15}%`,
            animation: 'particleFlow 2s linear infinite',
            animationDelay: `${i * 0.4}s`
          }}
        />
      ))}
    </div>
  )
}

const SpiralOrbitLoader: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const containerSizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }
  
  const dotSizes = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }
  
  return (
    <div className={`relative ${containerSizes[size]}`}>
      <div className="absolute inset-0 animate-spin-slow">
        <div className={`absolute top-0 left-1/2 ${dotSizes[size]} bg-primary-500 rounded-full transform -translate-x-1/2`} />
      </div>
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
        <div className={`absolute bottom-0 left-1/2 ${dotSizes[size]} bg-secondary-500 rounded-full transform -translate-x-1/2`} />
      </div>
      <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '2s' }}>
        <div className={`absolute left-0 top-1/2 ${dotSizes[size]} bg-accent-500 rounded-full transform -translate-y-1/2`} />
      </div>
    </div>
  )
}

const MatrixRainLoader: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const containerSizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }
  
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }
  
  return (
    <div className={`relative ${containerSizes[size]} overflow-hidden`}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`absolute ${textSizes[size]} font-mono text-primary-500`}
          style={{
            left: `${i * 16}%`,
            top: '-10px',
            animation: 'matrixRain 1.5s linear infinite',
            animationDelay: `${i * 0.2}s`
          }}
        >
          {['1', '0', 'T', 'W', 'A', 'Y'][i]}
        </div>
      ))}
    </div>
  )
}

const MorphingShapesLoader: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const containerSizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }
  
  return (
    <div className={`relative ${containerSizes[size]}`}>
      <div className="absolute inset-0 animate-spin-slow">
        <div className="w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
      </div>
      <div className="absolute inset-2 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
        <div className="w-full h-full bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg animate-pulse" />
      </div>
    </div>
  )
}

const EnergyPulseLoader: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const containerSizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }
  
  return (
    <div className={`relative ${containerSizes[size]}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
      <div className="absolute inset-2 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute inset-4 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  )
}

const NeuralNetworkLoader: React.FC<{ size: 'sm' | 'md' | 'lg' }> = ({ size }) => {
  const containerSizes = {
    sm: 'w-8 h-8',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  }
  
  const nodeSizes = {
    sm: 'w-1 h-1',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  }
  
  return (
    <div className={`relative ${containerSizes[size]}`}>
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className={`absolute ${nodeSizes[size]} bg-primary-500 rounded-full animate-pulse`}
          style={{
            left: `${20 + (i % 3) * 30}%`,
            top: `${20 + Math.floor(i / 3) * 30}%`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        <line x1="20%" y1="20%" x2="50%" y2="20%" stroke="#f26521" strokeWidth="1" opacity="0.5" />
        <line x1="50%" y1="20%" x2="80%" y2="20%" stroke="#2f3a75" strokeWidth="1" opacity="0.5" />
        <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="#00a650" strokeWidth="1" opacity="0.5" />
        <line x1="50%" y1="50%" x2="80%" y2="50%" stroke="#f26521" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  )
}

export default Loader 