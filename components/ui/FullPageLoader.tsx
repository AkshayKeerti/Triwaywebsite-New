'use client'

import React from 'react'
import { LoaderType } from './Loader'

interface FullPageLoaderProps {
  type: LoaderType
  message?: string
  isVisible: boolean
  onClose?: () => void
}

const FullPageLoader: React.FC<FullPageLoaderProps> = ({ 
  type, 
  message = "Loading...", 
  isVisible, 
  onClose 
}) => {
  if (!isVisible) return null

  const renderFullPageLoader = () => {
    switch (type) {
      case 'triway-pulse':
        return <TriwayPulseFullPage />
      case 'orbital-rings':
        return <OrbitalRingsFullPage />
      case 'waveform':
        return <WaveformFullPage />
      case 'hexagon-grid':
        return <HexagonGridFullPage />
      case 'particle-flow':
        return <ParticleFlowFullPage />
      case 'spiral-orbit':
        return <SpiralOrbitFullPage />
      case 'matrix-rain':
        return <MatrixRainFullPage />
      case 'morphing-shapes':
        return <MorphingShapesFullPage />
      case 'energy-pulse':
        return <EnergyPulseFullPage />
      case 'neural-network':
        return <NeuralNetworkFullPage />
      default:
        return <TriwayPulseFullPage />
    }
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <div className="mb-8">
          {renderFullPageLoader()}
        </div>
        <p className="text-white text-lg font-medium mb-4">{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  )
}

// Full-Page Loader Components
const TriwayPulseFullPage = () => (
  <div className="flex space-x-4">
    {[0, 1, 2, 3, 4].map((i) => (
      <div
        key={i}
        className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"
        style={{
          animationDelay: `${i * 0.2}s`,
          animationDuration: '1.5s'
        }}
      />
    ))}
  </div>
)

const OrbitalRingsFullPage = () => (
  <div className="relative w-32 h-32">
    <div className="absolute inset-0 border-4 border-primary-500/30 rounded-full animate-spin-slow" />
    <div className="absolute inset-4 border-4 border-secondary-500/50 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '3s' }} />
    <div className="absolute inset-8 border-4 border-accent-500/70 rounded-full animate-spin-slow" style={{ animationDuration: '2s' }} />
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-4 h-4 bg-primary-500 rounded-full animate-pulse" />
    </div>
  </div>
)

const WaveformFullPage = () => (
  <div className="flex items-end space-x-2 h-24">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
      <div
        key={i}
        className="w-2 bg-gradient-to-t from-primary-500 to-secondary-500 rounded-full animate-pulse"
        style={{
          height: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.1}s`,
          animationDuration: '1s'
        }}
      />
    ))}
  </div>
)

const HexagonGridFullPage = () => (
  <div className="relative w-40 h-40">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <div
        key={i}
        className="absolute w-12 h-12 border-2 border-primary-500 transform rotate-60"
        style={{
          left: '50%',
          top: '50%',
          marginLeft: '-24px',
          marginTop: '-24px',
          animation: 'hexagonExpand 2s ease-in-out infinite',
          animationDelay: `${i * 0.3}s`
        }}
      />
    ))}
  </div>
)

const ParticleFlowFullPage = () => (
  <div className="relative w-40 h-40 overflow-hidden">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
      <div
        key={i}
        className="absolute w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
        style={{
          left: '0%',
          top: `${i * 10}%`,
          animation: 'particleFlow 2s linear infinite',
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
  </div>
)

const SpiralOrbitFullPage = () => (
  <div className="relative w-40 h-40">
    <div className="absolute inset-0 animate-spin-slow">
      <div className="absolute top-0 left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2" />
    </div>
    <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '3s' }}>
      <div className="absolute bottom-0 left-1/2 w-4 h-4 bg-secondary-500 rounded-full transform -translate-x-1/2" />
    </div>
    <div className="absolute inset-0 animate-spin-slow" style={{ animationDuration: '2s' }}>
      <div className="absolute left-0 top-1/2 w-4 h-4 bg-accent-500 rounded-full transform -translate-y-1/2" />
    </div>
  </div>
)

const MatrixRainFullPage = () => (
  <div className="relative w-40 h-40 overflow-hidden">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
      <div
        key={i}
        className="absolute text-sm font-mono text-primary-500"
        style={{
          left: `${i * 8}%`,
          top: '-10px',
          animation: 'matrixRain 1.5s linear infinite',
          animationDelay: `${i * 0.1}s`
        }}
      >
        {['1', '0', 'T', 'R', 'I', 'W', 'A', 'Y', '1', '0', 'T', 'R'][i]}
      </div>
    ))}
  </div>
)

const MorphingShapesFullPage = () => (
  <div className="relative w-40 h-40">
    <div className="absolute inset-0 animate-spin-slow">
      <div className="w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
    </div>
    <div className="absolute inset-4 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
      <div className="w-full h-full bg-gradient-to-r from-secondary-500 to-accent-500 rounded-lg animate-pulse" />
    </div>
    <div className="absolute inset-8 animate-spin-slow">
      <div className="w-full h-full bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-pulse" />
    </div>
  </div>
)

const EnergyPulseFullPage = () => (
  <div className="relative w-40 h-40">
    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
    <div className="absolute inset-4 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
    <div className="absolute inset-8 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute inset-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
  </div>
)

const NeuralNetworkFullPage = () => (
  <div className="relative w-40 h-40">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
      <div
        key={i}
        className="absolute w-3 h-3 bg-primary-500 rounded-full animate-pulse"
        style={{
          left: `${20 + (i % 4) * 20}%`,
          top: `${20 + Math.floor(i / 4) * 20}%`,
          animationDelay: `${i * 0.1}s`
        }}
      />
    ))}
    {/* Connection lines */}
    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
      <line x1="30%" y1="30%" x2="50%" y2="30%" stroke="#f26521" strokeWidth="2" opacity="0.5" />
      <line x1="50%" y1="30%" x2="70%" y2="30%" stroke="#2f3a75" strokeWidth="2" opacity="0.5" />
      <line x1="30%" y1="50%" x2="50%" y2="50%" stroke="#00a650" strokeWidth="2" opacity="0.5" />
      <line x1="50%" y1="50%" x2="70%" y2="50%" stroke="#f26521" strokeWidth="2" opacity="0.5" />
      <line x1="30%" y1="70%" x2="50%" y2="70%" stroke="#2f3a75" strokeWidth="2" opacity="0.5" />
      <line x1="50%" y1="70%" x2="70%" y2="70%" stroke="#00a650" strokeWidth="2" opacity="0.5" />
    </svg>
  </div>
)

export default FullPageLoader 