'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeft, Play, Pause, Maximize2, X } from 'lucide-react'
import FullPageLoader from '@/components/ui/FullPageLoader'
import AdvancedFullPageLoader from '@/components/ui/AdvancedFullPageLoader'

// Loader Components
const TriwayPulseLoader = () => (
  <div className="flex space-x-2">
    {[0, 1, 2].map((i) => (
      <div
        key={i}
        className="w-4 h-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"
        style={{
          animationDelay: `${i * 0.2}s`,
          animationDuration: '1.5s'
        }}
      />
    ))}
  </div>
)

const DataStreamLoader = () => (
  <div className="relative w-20 h-20">
    {/* Data stream lines */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
      <path
        d="M 10 20 L 30 20 L 30 40 L 50 40 L 50 60 L 70 60"
        stroke="#f26521"
        strokeWidth="2"
        fill="none"
        className="animate-pulse"
      />
      <path
        d="M 10 40 L 25 40 L 25 60 L 45 60 L 45 20 L 70 20"
        stroke="#2f3a75"
        strokeWidth="2"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '0.5s' }}
      />
      <path
        d="M 10 60 L 35 60 L 35 20 L 55 20 L 55 40 L 70 40"
        stroke="#00a650"
        strokeWidth="2"
        fill="none"
        className="animate-pulse"
        style={{ animationDelay: '1s' }}
      />
    </svg>
    {/* Data nodes */}
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full animate-pulse"
        style={{
          left: `${15 + i * 6}%`,
          top: `${20 + Math.sin(i * 0.5) * 20}%`,
          animationDelay: `${i * 0.2}s`
        }}
      />
    ))}
    {/* Binary data */}
    <div className="absolute top-2 left-2 text-xs font-mono text-primary-500 animate-pulse">
      1010
    </div>
    <div className="absolute top-2 right-2 text-xs font-mono text-secondary-500 animate-pulse" style={{ animationDelay: '0.5s' }}>
      1101
    </div>
    <div className="absolute bottom-2 left-2 text-xs font-mono text-accent-500 animate-pulse" style={{ animationDelay: '1s' }}>
      0110
    </div>
  </div>
)

const DubaiSkylineLoader = () => (
  <div className="relative w-20 h-20">
    {/* Skyline silhouette */}
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 80 80">
      {/* Buildings */}
      <rect x="10" y="40" width="8" height="30" fill="#2f3a75" className="animate-pulse" />
      <rect x="20" y="35" width="6" height="35" fill="#f26521" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
      <rect x="28" y="30" width="8" height="40" fill="#00a650" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
      <rect x="38" y="45" width="6" height="25" fill="#6366f1" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      <rect x="46" y="25" width="10" height="45" fill="#ec4899" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
      <rect x="58" y="40" width="8" height="30" fill="#2f3a75" className="animate-pulse" style={{ animationDelay: '1s' }} />
      <rect x="68" y="35" width="6" height="35" fill="#f26521" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
    </svg>
    {/* Tech elements floating */}
    <div className="absolute top-2 left-4 w-2 h-2 bg-blue-400 rounded-full animate-float" />
    <div className="absolute top-4 right-6 w-1 h-1 bg-purple-400 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    <div className="absolute top-6 left-1/2 w-1.5 h-1.5 bg-green-400 rounded-full animate-float" style={{ animationDelay: '4s' }} />
  </div>
)

const NeonGlowLoader = () => (
  <div className="relative w-20 h-20">
    {/* Neon glow elements */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-neon-orange rounded-full animate-glow shadow-neon" />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-neon-blue rounded-full animate-glow shadow-neon-blue" style={{ animationDelay: '0.5s' }} />
    </div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-4 h-4 border-2 border-neon-green rounded-full animate-glow shadow-neon-green" style={{ animationDelay: '1s' }} />
    </div>
    {/* Center dot */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
    </div>
  </div>
)

const CodeEditorLoader = () => (
  <div className="relative w-20 h-20">
    {/* Code editor background */}
    <div className="absolute inset-0 bg-gray-900 rounded border border-gray-700">
      {/* Code lines */}
      <div className="absolute top-2 left-2 right-2 space-y-1">
        <div className="h-1 bg-green-400/60 rounded animate-pulse" />
        <div className="h-1 bg-blue-400/60 rounded animate-pulse" style={{ animationDelay: '0.3s' }} />
        <div className="h-1 bg-yellow-400/60 rounded animate-pulse" style={{ animationDelay: '0.6s' }} />
        <div className="h-1 bg-purple-400/60 rounded animate-pulse" style={{ animationDelay: '0.9s' }} />
      </div>
      {/* Cursor */}
      <div className="absolute top-2 left-2 w-1 h-4 bg-white rounded animate-pulse" style={{ animationDelay: '1.2s' }} />
      {/* Line numbers */}
      <div className="absolute top-2 left-1 text-xs text-gray-500 font-mono">
        1
      </div>
      <div className="absolute top-4 left-1 text-xs text-gray-500 font-mono">
        2
      </div>
      <div className="absolute top-6 left-1 text-xs text-gray-500 font-mono">
        3
      </div>
      <div className="absolute top-8 left-1 text-xs text-gray-500 font-mono">
        4
      </div>
    </div>
    {/* Syntax highlighting dots */}
    <div className="absolute top-3 left-4 w-1 h-1 bg-green-400 rounded-full animate-pulse" />
    <div className="absolute top-5 left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
    <div className="absolute top-7 left-4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
    <div className="absolute top-9 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.9s' }} />
  </div>
)

const LoaderVariations = () => {
  const [isPlaying, setIsPlaying] = useState(true)
  const [selectedLoader, setSelectedLoader] = useState<number | null>(null)
  const [showFullPage, setShowFullPage] = useState(false)
  const [fullPageType, setFullPageType] = useState<string>('triway-pulse')

  useEffect(() => {
    if (!isPlaying) {
      // Pause all animations
      document.documentElement.style.setProperty('animation-play-state', 'paused')
    } else {
      // Resume all animations
      document.documentElement.style.setProperty('animation-play-state', 'running')
    }
  }, [isPlaying])

  const loaders = [
    {
      id: 1,
      name: "Triway Pulse",
      description: "Brand-colored pulsing dots with gradient effect",
      component: <TriwayPulseLoader />
    },
    {
      id: 2,
      name: "Data Stream",
      description: "Flowing data stream with binary elements",
      component: <DataStreamLoader />
    },
    {
      id: 3,
      name: "Dubai Skyline",
      description: "Inspired by the hero background with tech elements",
      component: <DubaiSkylineLoader />
    },
    {
      id: 4,
      name: "Neon Glow",
      description: "Inspired by the neon color system",
      component: <NeonGlowLoader />
    },
    {
      id: 5,
      name: "Code Editor",
      description: "Based on the hero code editor visualization",
      component: <CodeEditorLoader />
    }
  ]

  const handleLoaderClick = (loader: any) => {
    setSelectedLoader(loader.id)
    setFullPageType(loader.name.toLowerCase().replace(/\s+/g, '-'))
  }

  const handleViewFullPage = () => {
    setShowFullPage(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors">
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Loader Animations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore innovative loader animations designed specifically for Triway's brand identity. 
            Each loader uses our signature colors and modern design principles.
          </p>
        </div>

        {/* Loader Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-12">
          {loaders.map((loader) => (
            <div
              key={loader.id}
              onClick={() => handleLoaderClick(loader)}
              className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105 ${
                selectedLoader === loader.id ? 'ring-2 ring-primary-500 shadow-lg' : ''
              }`}
            >
              <div className="flex items-center justify-center h-20 mb-4">
                {loader.component}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{loader.name}</h3>
              <p className="text-sm text-gray-600">{loader.description}</p>
            </div>
          ))}
        </div>

        {/* Selected Loader Preview */}
        {selectedLoader && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {loaders.find(l => l.id === selectedLoader)?.name}
              </h2>
              <button
                onClick={handleViewFullPage}
                className="flex items-center space-x-2 px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 transition-colors"
              >
                <Maximize2 className="w-4 h-4" />
                <span>View Full Page</span>
              </button>
            </div>
            <div className="flex items-center justify-center h-32 mb-4">
              {loaders.find(l => l.id === selectedLoader)?.component}
            </div>
            <p className="text-gray-600 text-center">
              {loaders.find(l => l.id === selectedLoader)?.description}
            </p>
          </div>
        )}

      {/* Full Page Loader */}
      {fullPageType.includes('dubai-skyline') || fullPageType.includes('neon-glow') || fullPageType.includes('code-editor') ? (
        <AdvancedFullPageLoader
          type={fullPageType as any}
          message="Loading your experience..."
          isVisible={showFullPage}
          onClose={() => setShowFullPage(false)}
        />
      ) : (
        <FullPageLoader
          type={fullPageType as any}
          message="Loading your experience..."
          isVisible={showFullPage}
          onClose={() => setShowFullPage(false)}
        />
      )}
      </div>
    </div>
  )
}

export default LoaderVariations 