'use client'

import React from 'react'
import { LoaderType } from './Loader'

interface AdvancedFullPageLoaderProps {
  type: LoaderType
  message?: string
  isVisible: boolean
  onClose?: () => void
}

const AdvancedFullPageLoader: React.FC<AdvancedFullPageLoaderProps> = ({ 
  type, 
  message = "Loading...", 
  isVisible, 
  onClose 
}) => {
  if (!isVisible) return null

  const renderAdvancedLoader = () => {
    switch (type) {
      case 'liquid-morphing':
        return <LiquidMorphingFullPage />
      case 'holographic-portal':
        return <HolographicPortalFullPage />
      case 'quantum-field':
        return <QuantumFieldFullPage />
      case 'neural-evolution':
        return <NeuralEvolutionFullPage />
      case 'digital-ecosystem':
        return <DigitalEcosystemFullPage />
      case 'time-warp':
        return <TimeWarpFullPage />
      case 'cosmic-storm':
        return <CosmicStormFullPage />
      case 'bio-mechanical':
        return <BioMechanicalFullPage />
      case 'dimensional-rift':
        return <DimensionalRiftFullPage />
      case 'quantum-consciousness':
        return <QuantumConsciousnessFullPage />
      case 'dubai-skyline':
        return <DubaiSkylineFullPage />
      case 'service-grid':
        return <ServiceGridFullPage />
      case 'navigation-flow':
        return <NavigationFlowFullPage />
      case 'tech-dashboard':
        return <TechDashboardFullPage />
      case 'brand-gradient':
        return <BrandGradientFullPage />
      case 'neon-glow':
        return <NeonGlowFullPage />
      case 'floating-elements':
        return <FloatingElementsFullPage />
      case 'tech-circuit':
        return <TechCircuitFullPage />
      case 'code-editor':
        return <CodeEditorFullPage />
      case 'geometric-tech':
        return <GeometricTechFullPage />
      default:
        return <LiquidMorphingFullPage />
    }
  }

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50">
      <div className="text-center relative">
        <div className="mb-12">
          {renderAdvancedLoader()}
        </div>
        <p className="text-white text-xl font-medium mb-6">{message}</p>
        {onClose && (
          <button
            onClick={onClose}
            className="px-6 py-3 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors"
          >
            Cancel
          </button>
        )}
      </div>
    </div>
  )
}

// Advanced Full-Page Loader Components
const LiquidMorphingFullPage = () => (
  <div className="relative w-64 h-64">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 256 256">
      <defs>
        <linearGradient id="liquidGradientFull" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f26521" />
          <stop offset="25%" stopColor="#2f3a75" />
          <stop offset="50%" stopColor="#00a650" />
          <stop offset="75%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 50 128 Q 80 80 128 128 Q 176 176 206 128 Q 236 80 256 128"
        fill="none"
        stroke="url(#liquidGradientFull)"
        strokeWidth="6"
        className="animate-pulse"
        style={{ animationDuration: '3s' }}
        filter="url(#glow)"
      />
      <circle cx="128" cy="128" r="20" fill="url(#liquidGradientFull)" className="animate-pulse" />
      <circle cx="50" cy="128" r="8" fill="#f26521" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="206" cy="128" r="8" fill="#00a650" className="animate-pulse" style={{ animationDelay: '1s' }} />
    </svg>
  </div>
)

const HolographicPortalFullPage = () => (
  <div className="relative w-80 h-80 perspective-2000">
    <div className="relative w-full h-full animate-spin-slow" style={{ transformStyle: 'preserve-3d' }}>
      {/* Multiple portal rings with depth */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="absolute border-4 rounded-full animate-pulse"
          style={{
            inset: `${i * 8}px`,
            borderColor: i % 3 === 0 ? '#f26521' : i % 3 === 1 ? '#2f3a75' : '#00a650',
            opacity: 0.8 - (i * 0.1),
            transform: `rotateX(60deg) translateZ(${30 - i * 5}px)`,
            animationDelay: `${i * 0.2}s`
          }}
        />
      ))}
      {/* Center energy core */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-full animate-pulse" />
      </div>
    </div>
  </div>
)

const QuantumFieldFullPage = () => (
  <div className="relative w-80 h-80">
    {/* Quantum field grid */}
    <svg className="absolute inset-0 w-full h-full">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <line
          key={i}
          x1="0"
          y1={`${i * 9}%`}
          x2="100%"
          y2={`${(i + 1) * 9}%`}
          stroke="#f26521"
          strokeWidth="2"
          opacity="0.2"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <line
          key={`v-${i}`}
          x1={`${i * 9}%`}
          y1="0"
          x2={`${(i + 1) * 9}%`}
          y2="100%"
          stroke="#2f3a75"
          strokeWidth="2"
          opacity="0.2"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
        />
      ))}
    </svg>
    {/* Quantum particles */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
      <div
        key={i}
        className="absolute w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
        style={{
          left: `${10 + (i % 4) * 25}%`,
          top: `${10 + Math.floor(i / 4) * 25}%`,
          animation: 'quantumField 4s ease-in-out infinite',
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
  </div>
)

const NeuralEvolutionFullPage = () => (
  <div className="relative w-80 h-80">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      {/* Evolving neural paths */}
      <path
        d="M 40 160 Q 80 80 160 160 Q 240 240 280 160"
        stroke="#f26521"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
        style={{ animationDuration: '3s' }}
      />
      <path
        d="M 40 120 Q 100 40 160 120 Q 220 200 280 120"
        stroke="#2f3a75"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
        style={{ animationDuration: '3s', animationDelay: '0.5s' }}
      />
      <path
        d="M 40 200 Q 100 120 160 200 Q 220 280 280 200"
        stroke="#00a650"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
        style={{ animationDuration: '3s', animationDelay: '1s' }}
      />
      {/* Growing neural nodes */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <circle
          key={i}
          cx={`${60 + i * 20}`}
          cy={`${120 + Math.sin(i * 0.8) * 60}`}
          r="4"
          fill="#f26521"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </svg>
  </div>
)

const DigitalEcosystemFullPage = () => (
  <div className="relative w-80 h-80">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
        <g key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
          <circle
            cx={`${40 + (i % 4) * 80}`}
            cy={`${40 + Math.floor(i / 4) * 80}`}
            r="8"
            fill={i % 4 === 0 ? "#f26521" : i % 4 === 1 ? "#2f3a75" : i % 4 === 2 ? "#00a650" : "#6366f1"}
          />
          <path
            d={`M ${40 + (i % 4) * 80} ${40 + Math.floor(i / 4) * 80} Q ${60 + (i % 4) * 80} ${20 + Math.floor(i / 4) * 80} ${80 + (i % 4) * 80} ${40 + Math.floor(i / 4) * 80}`}
            stroke={i % 4 === 0 ? "#f26521" : i % 4 === 1 ? "#2f3a75" : i % 4 === 2 ? "#00a650" : "#6366f1"}
            strokeWidth="2"
            fill="none"
            opacity="0.6"
          />
        </g>
      ))}
    </svg>
  </div>
)

const TimeWarpFullPage = () => (
  <div className="relative w-80 h-80">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      {/* Time spiral */}
      <path
        d="M 160 160 Q 200 120 240 160 Q 200 200 160 160 Q 120 200 80 160 Q 120 120 160 160"
        stroke="#f26521"
        strokeWidth="4"
        fill="none"
        className="animate-spin-slow"
      />
      <path
        d="M 160 160 Q 180 140 200 160 Q 180 180 160 160 Q 140 180 120 160 Q 140 140 160 160"
        stroke="#2f3a75"
        strokeWidth="4"
        fill="none"
        className="animate-spin-slow"
        style={{ animationDirection: 'reverse' }}
      />
      {/* Time particles */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <circle
          key={i}
          cx="160"
          cy="160"
          r={`${20 + i * 8}`}
          fill="none"
          stroke="#00a650"
          strokeWidth="2"
          opacity="0.2"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </svg>
  </div>
)

const CosmicStormFullPage = () => (
  <div className="relative w-80 h-80">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      {/* Storm clouds */}
      <path
        d="M 40 120 Q 80 80 120 120 Q 160 160 200 120 Q 240 80 280 120"
        fill="none"
        stroke="#2f3a75"
        strokeWidth="6"
        className="animate-pulse"
      />
      <path
        d="M 60 200 Q 100 160 140 200 Q 180 240 220 200 Q 260 160 300 200"
        fill="none"
        stroke="#f26521"
        strokeWidth="6"
        className="animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
      <path
        d="M 20 160 Q 60 120 100 160 Q 140 200 180 160 Q 220 120 260 160"
        fill="none"
        stroke="#00a650"
        strokeWidth="6"
        className="animate-pulse"
        style={{ animationDelay: '1s' }}
      />
    </svg>
    {/* Cosmic particles */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white rounded-full animate-pulse"
        style={{
          left: `${5 + (i % 5) * 20}%`,
          top: `${10 + Math.floor(i / 5) * 20}%`,
          animationDelay: `${i * 0.05}s`
        }}
      />
    ))}
  </div>
)

const BioMechanicalFullPage = () => (
  <div className="relative w-80 h-80">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      {/* Biological elements */}
      <circle cx="120" cy="120" r="32" fill="none" stroke="#00a650" strokeWidth="4" className="animate-pulse" />
      <circle cx="200" cy="200" r="32" fill="none" stroke="#00a650" strokeWidth="4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="120" cy="200" r="32" fill="none" stroke="#00a650" strokeWidth="4" className="animate-pulse" style={{ animationDelay: '1s' }} />
      <circle cx="200" cy="120" r="32" fill="none" stroke="#00a650" strokeWidth="4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      {/* Mechanical elements */}
      <rect x="100" y="100" width="40" height="40" fill="none" stroke="#f26521" strokeWidth="4" className="animate-pulse" />
      <rect x="180" y="180" width="40" height="40" fill="none" stroke="#2f3a75" strokeWidth="4" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <rect x="100" y="180" width="40" height="40" fill="none" stroke="#6366f1" strokeWidth="4" className="animate-pulse" style={{ animationDelay: '1s' }} />
      <rect x="180" y="100" width="40" height="40" fill="none" stroke="#ec4899" strokeWidth="4" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
      {/* Connections */}
      <line x1="140" y1="140" x2="180" y2="180" stroke="#f26521" strokeWidth="2" opacity="0.6" />
      <line x1="120" y1="120" x2="200" y2="200" stroke="#2f3a75" strokeWidth="2" opacity="0.6" />
      <line x1="120" y1="200" x2="200" y2="120" stroke="#00a650" strokeWidth="2" opacity="0.6" />
    </svg>
  </div>
)

const DimensionalRiftFullPage = () => (
  <div className="relative w-80 h-80">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      {/* Rift lines */}
      <path d="M 0 160 L 320 160" stroke="#f26521" strokeWidth="4" className="animate-pulse" />
      <path d="M 160 0 L 160 320" stroke="#2f3a75" strokeWidth="4" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <path d="M 0 0 L 320 320" stroke="#00a650" strokeWidth="4" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      <path d="M 0 320 L 320 0" stroke="#6366f1" strokeWidth="4" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
    </svg>
    {/* Dimensional particles */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
      <div
        key={i}
        className="absolute w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
        style={{
          left: `${10 + (i % 4) * 25}%`,
          top: `${10 + Math.floor(i / 4) * 25}%`,
          animation: 'dimensionalRift 3s ease-in-out infinite',
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
  </div>
)

const QuantumConsciousnessFullPage = () => (
  <div className="relative w-80 h-80">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      {/* Consciousness waves */}
      <path
        d="M 40 160 Q 80 80 160 160 Q 240 240 280 160"
        stroke="#f26521"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
      />
      <path
        d="M 40 140 Q 80 60 160 140 Q 240 220 280 140"
        stroke="#2f3a75"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '0.3s' }}
      />
      <path
        d="M 40 180 Q 80 100 160 180 Q 240 260 280 180"
        stroke="#00a650"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '0.6s' }}
      />
      <path
        d="M 40 120 Q 80 40 160 120 Q 240 200 280 120"
        stroke="#6366f1"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '0.9s' }}
      />
      <path
        d="M 40 200 Q 80 120 160 200 Q 240 280 280 200"
        stroke="#ec4899"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '1.2s' }}
      />
    </svg>
    {/* Quantum states */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-white rounded-full"
        style={{
          left: `${10 + (i % 5) * 20}%`,
          top: `${120 + Math.sin(i * 0.8) * 40}%`,
          animation: 'quantumConsciousness 3s ease-in-out infinite',
          animationDelay: `${i * 0.1}s`
        }}
      />
    ))}
  </div>
)

// Codebase-Inspired Full-Page Loaders
const DubaiSkylineFullPage = () => (
  <div className="relative w-80 h-80">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      {/* Buildings */}
      <rect x="40" y="160" width="32" height="120" fill="#2f3a75" className="animate-pulse" />
      <rect x="80" y="140" width="24" height="140" fill="#f26521" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <rect x="112" y="120" width="32" height="160" fill="#00a650" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
      <rect x="152" y="180" width="24" height="100" fill="#6366f1" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      <rect x="184" y="100" width="40" height="180" fill="#ec4899" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
      <rect x="232" y="160" width="32" height="120" fill="#2f3a75" className="animate-pulse" style={{ animationDelay: '1s' }} />
      <rect x="272" y="140" width="24" height="140" fill="#f26521" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
    </svg>
    {/* Tech elements floating */}
    <div className="absolute top-8 left-16 w-8 h-8 bg-blue-400 rounded-full animate-float" />
    <div className="absolute top-16 right-24 w-4 h-4 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    <div className="absolute top-24 left-1/2 w-6 h-6 bg-green-400 rounded-full animate-float" style={{ animationDelay: '4s' }} />
  </div>
)

const ServiceGridFullPage = () => (
  <div className="relative w-80 h-80">
    {/* Service grid layout */}
    <div className="grid grid-cols-4 gap-4 h-full">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
        <div
          key={i}
          className="bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded border border-primary-500/30 animate-pulse"
          style={{ animationDelay: `${i * 0.1}s` }}
        >
          <div className="w-3 h-3 bg-primary-500 rounded-full mx-auto mt-2" />
        </div>
      ))}
    </div>
    {/* Service icons */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
    </div>
  </div>
)

const NavigationFlowFullPage = () => (
  <div className="relative w-80 h-80">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      <path
        d="M 40 80 L 120 80 L 120 160 L 200 160 L 200 240 L 280 240"
        stroke="#f26521"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
      />
      <path
        d="M 80 160 L 100 160 L 100 240 L 180 240 L 180 80 L 280 80"
        stroke="#2f3a75"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
    </svg>
    {/* Navigation nodes */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
      <div
        key={i}
        className="absolute w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"
        style={{
          left: `${15 + (i % 3) * 25}%`,
          top: `${20 + Math.floor(i / 3) * 20}%`,
          animationDelay: `${i * 0.3}s`
        }}
      />
    ))}
  </div>
)

const TechDashboardFullPage = () => (
  <div className="relative w-80 h-80">
    {/* Dashboard layout */}
    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
      {/* Status indicators */}
      <div className="absolute top-4 left-4 flex space-x-2">
        <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse" />
        <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
      </div>
      {/* Code lines */}
      <div className="absolute top-12 left-4 right-4 space-y-2">
        <div className="h-2 bg-green-400/60 rounded animate-pulse" />
        <div className="h-2 bg-blue-400/60 rounded animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="h-2 bg-yellow-400/60 rounded animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="h-2 bg-purple-400/60 rounded animate-pulse" style={{ animationDelay: '0.9s' }} />
      </div>
      {/* Data bars */}
      <div className="absolute bottom-8 left-4 right-4 flex space-x-2">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div
            key={i}
            className="flex-1 bg-gradient-to-t from-primary-500 to-secondary-500 rounded animate-pulse"
            style={{
              height: `${20 + i * 8}%`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
    </div>
  </div>
)

const BrandGradientFullPage = () => (
  <div className="relative w-80 h-80">
    {/* Brand gradient background */}
    <div className="absolute inset-0 bg-gradient-futuristic rounded-2xl animate-gradient" />
    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-secondary-500/20 to-accent-500/20 rounded-2xl animate-pulse" />
    {/* Center element */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 bg-white/20 rounded-full animate-pulse backdrop-blur-sm" />
    </div>
  </div>
)

const NeonGlowFullPage = () => (
  <div className="relative w-80 h-80">
    {/* Neon glow elements */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-32 h-32 border-4 border-neon-orange rounded-full animate-glow shadow-neon" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 border-4 border-neon-blue rounded-full animate-glow shadow-neon-blue" style={{ animationDelay: '0.5s' }} />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-neon-green rounded-full animate-glow shadow-neon-green" style={{ animationDelay: '1s' }} />
    </div>
    {/* Center dot */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 bg-white rounded-full animate-pulse" />
    </div>
  </div>
)

const FloatingElementsFullPage = () => (
  <div className="relative w-80 h-80">
    {/* Floating geometric shapes */}
    <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl animate-float" />
    <div className="absolute top-24 right-16 w-12 h-12 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    <div className="absolute bottom-16 left-24 w-20 h-20 bg-gradient-to-r from-accent-500 to-primary-500 rounded-2xl animate-float" style={{ animationDelay: '4s' }} />
    <div className="absolute bottom-8 right-8 w-8 h-8 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    {/* Center connection */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 bg-white/30 rounded-full animate-pulse backdrop-blur-sm" />
    </div>
  </div>
)

const TechCircuitFullPage = () => (
  <div className="relative w-80 h-80">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      <path
        d="M 40 80 L 120 80 L 120 160 L 200 160 L 200 240 L 280 240"
        stroke="#f26521"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
      />
      <path
        d="M 80 40 L 80 120 L 160 120 L 160 200 L 240 200"
        stroke="#2f3a75"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
      <path
        d="M 60 280 L 140 280 L 140 200 L 220 200 L 220 120 L 300 120"
        stroke="#00a650"
        strokeWidth="4"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '1s' }}
      />
    </svg>
    {/* Circuit nodes */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((i) => (
      <div
        key={i}
        className="absolute w-3 h-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"
        style={{
          left: `${15 + (i % 4) * 20}%`,
          top: `${15 + Math.floor(i / 4) * 20}%`,
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
  </div>
)

const CodeEditorFullPage = () => (
  <div className="relative w-80 h-80">
    {/* Code editor window */}
    <div className="absolute inset-0 bg-black/80 rounded-2xl border border-white/20">
      {/* Window controls */}
      <div className="absolute top-4 left-4 flex space-x-2">
        <div className="w-4 h-4 bg-red-400 rounded-full" />
        <div className="w-4 h-4 bg-yellow-400 rounded-full" />
        <div className="w-4 h-4 bg-green-400 rounded-full" />
      </div>
      {/* Code lines */}
      <div className="absolute top-12 left-4 right-4 space-y-2">
        <div className="h-2 bg-green-400/60 rounded animate-pulse" />
        <div className="h-2 bg-blue-400/60 rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
        <div className="h-2 bg-yellow-400/60 rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
        <div className="h-2 bg-purple-400/60 rounded animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="h-2 bg-red-400/60 rounded animate-pulse" style={{ animationDelay: '0.8s' }} />
        <div className="h-2 bg-cyan-400/60 rounded animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      {/* Cursor */}
      <div className="absolute bottom-8 left-4 w-2 h-8 bg-white animate-pulse" />
    </div>
  </div>
)

const GeometricTechFullPage = () => (
  <div className="relative w-80 h-80">
    {/* Geometric tech elements */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
      {/* Tech grid */}
      <rect x="40" y="40" width="240" height="240" fill="none" stroke="#f26521" strokeWidth="2" opacity="0.3" />
      <rect x="80" y="80" width="160" height="160" fill="none" stroke="#2f3a75" strokeWidth="2" opacity="0.3" />
      <rect x="120" y="120" width="80" height="80" fill="none" stroke="#00a650" strokeWidth="2" opacity="0.3" />
    </svg>
    {/* Rotating elements */}
    <div className="absolute inset-0 animate-spin-slow">
      <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-primary-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
    </div>
    <div className="absolute inset-0 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
      <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-secondary-500 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
    </div>
    {/* Center tech element */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse" />
    </div>
  </div>
)

export default AdvancedFullPageLoader 