'use client'

import { useState } from 'react'
import LoaderVariations from '../../components/LoaderVariations'

const loaderVariants = [
  {
    id: 'matrix',
    name: 'Matrix Rain',
    description: 'Classic Matrix-style digital rain with green terminal aesthetics',
    icon: '💻',
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'particles',
    name: 'Particle System',
    description: 'Floating particles with orbital rings and cosmic effects',
    icon: '✨',
    color: 'from-primary-500 to-secondary-500'
  },
  {
    id: 'geometric',
    name: 'Geometric Assembly',
    description: 'Rotating geometric shapes with clean, modern design',
    icon: '🔷',
    color: 'from-primary-500 via-secondary-500 to-accent-500'
  },
  {
    id: 'circuit',
    name: 'Circuit Board',
    description: 'Interactive circuit nodes with dynamic connections',
    icon: '🔌',
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'hologram',
    name: 'Holographic Interface',
    description: '3D holographic projection with cyan/purple effects',
    icon: '🌐',
    color: 'from-cyan-500 via-blue-500 to-purple-500'
  },
  {
    id: 'neural',
    name: 'Neural Network',
    description: 'AI-inspired neural connections with synaptic patterns',
    icon: '🧠',
    color: 'from-primary-500 to-accent-500'
  },
  {
    id: 'triangles',
    name: 'Triangle Assembly',
    description: 'Brand logo animation with three interlocking triangles',
    icon: '🔺',
    color: 'from-primary-500 via-secondary-500 to-accent-500'
  },
  {
    id: 'waveform',
    name: 'Audio Waveform',
    description: 'Dynamic audio waveform visualization with real-time bars',
    icon: '🎵',
    color: 'from-primary-500 to-secondary-500'
  },
  {
    id: 'dataflow',
    name: 'Data Flow',
    description: 'Interactive data points with flowing connections',
    icon: '📊',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    id: 'quantum',
    name: 'Quantum Processing',
    description: 'Quantum orbital system with rotating particles',
    icon: '⚛️',
    color: 'from-purple-500 via-indigo-500 to-blue-500'
  }
]

export default function LoaderVariationsDemo() {
  const [activeLoader, setActiveLoader] = useState<string | null>(null)
  const [selectedVariant, setSelectedVariant] = useState('matrix')

  const triggerLoader = (variant: string) => {
    setSelectedVariant(variant)
    setActiveLoader(variant)
    setTimeout(() => setActiveLoader(null), 5000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Active Loader */}
      {activeLoader && (
        <LoaderVariations 
          isLoading={true}
          variant={selectedVariant as any}
          message={`Loading ${loaderVariants.find(v => v.id === selectedVariant)?.name}...`}
          onComplete={() => console.log(`${selectedVariant} loader completed`)}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            <span className="neon-text">Innovative</span> Loader Variations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience cutting-edge loading animations that match the Triway Technologies brand. 
            Each variation offers a unique visual experience while maintaining our tech-focused aesthetic.
          </p>
        </div>

        {/* Loader Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {loaderVariants.map((variant) => (
            <div key={variant.id} className="card p-8 text-center group hover:scale-105 transition-transform duration-300">
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${variant.color} text-white text-3xl mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}>
                {variant.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{variant.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{variant.description}</p>

              {/* Demo Button */}
              <button 
                onClick={() => triggerLoader(variant.id)}
                className="btn-primary w-full"
                disabled={activeLoader !== null}
              >
                {activeLoader === variant.id ? 'Loading...' : 'Launch Demo'}
              </button>

              {/* Features */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Features:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  {variant.id === 'matrix' && (
                    <>
                      <li>• Matrix-style digital rain</li>
                      <li>• Terminal aesthetics</li>
                      <li>• Monospace typography</li>
                    </>
                  )}
                  {variant.id === 'particles' && (
                    <>
                      <li>• Floating particle system</li>
                      <li>• Orbital ring animations</li>
                      <li>• Cosmic gradient backgrounds</li>
                    </>
                  )}
                  {variant.id === 'geometric' && (
                    <>
                      <li>• Rotating geometric shapes</li>
                      <li>• Clean modern design</li>
                      <li>• Brand color integration</li>
                    </>
                  )}
                  {variant.id === 'circuit' && (
                    <>
                      <li>• Interactive circuit nodes</li>
                      <li>• Dynamic connections</li>
                      <li>• Grid-based layout</li>
                    </>
                  )}
                  {variant.id === 'hologram' && (
                    <>
                      <li>• 3D holographic effects</li>
                      <li>• Layered projections</li>
                      <li>• Cyan/purple color scheme</li>
                    </>
                  )}
                                     {variant.id === 'neural' && (
                     <>
                       <li>• Neural network simulation</li>
                       <li>• Synaptic connections</li>
                       <li>• AI-inspired patterns</li>
                     </>
                   )}
                   {variant.id === 'triangles' && (
                     <>
                       <li>• Brand logo animation</li>
                       <li>• Three interlocking triangles</li>
                       <li>• Sequential assembly process</li>
                     </>
                   )}
                   {variant.id === 'waveform' && (
                     <>
                       <li>• Real-time audio visualization</li>
                       <li>• Dynamic waveform bars</li>
                       <li>• Audio processing theme</li>
                     </>
                   )}
                   {variant.id === 'dataflow' && (
                     <>
                       <li>• Interactive data points</li>
                       <li>• Flowing connections</li>
                       <li>• Data processing visualization</li>
                     </>
                   )}
                   {variant.id === 'quantum' && (
                     <>
                       <li>• Quantum orbital system</li>
                       <li>• Rotating particles</li>
                       <li>• Multi-layered orbits</li>
                     </>
                   )}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Details */}
        <div className="card p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Implementation</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Usage Examples */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Usage Examples</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Basic Usage:</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`<LoaderVariations 
  isLoading={true}
  variant="matrix"
  message="Loading..."
/>`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">With Custom Message:</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`<LoaderVariations 
  isLoading={isLoading}
  variant="hologram"
  message="Initializing holographic interface..."
  onComplete={() => setLoading(false)}
/>`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Dynamic Variant Selection:</h4>
                  <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                    <pre>{`const [variant, setVariant] = useState('matrix')

<LoaderVariations 
  isLoading={true}
  variant={variant}
  message="Loading..."
/>`}</pre>
                  </div>
                </div>
              </div>
            </div>

            {/* Available Variants */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Available Variants</h3>
              
              <div className="space-y-3">
                {loaderVariants.map((variant) => (
                  <div key={variant.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-semibold text-gray-900">{variant.name}</span>
                      <span className="text-gray-500 text-sm ml-2">({variant.id})</span>
                    </div>
                    <span className="text-2xl">{variant.icon}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">Props:</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• <code>isLoading</code> (boolean) - Controls loader visibility</li>
                  <li>• <code>variant</code> (string) - Loader style variant</li>
                  <li>• <code>message</code> (string) - Custom loading message</li>
                  <li>• <code>onComplete</code> (function) - Completion callback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Recommended Use Cases</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🚀
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Page Transitions</h3>
              <p className="text-gray-600 text-sm">
                Use Matrix or Holographic loaders for dramatic page transitions and app initialization.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-secondary-500 to-accent-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🔧
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">System Operations</h3>
              <p className="text-gray-600 text-sm">
                Circuit and Neural loaders are perfect for system updates, data processing, and AI operations.
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎨
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Creative Projects</h3>
              <p className="text-gray-600 text-sm">
                Geometric and Particle loaders work great for creative tools, design software, and artistic applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 