'use client'

import { useState } from 'react'
import Loader, { LoaderType } from '@/components/ui/Loader'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const LoaderExample = () => {
  const [selectedType, setSelectedType] = useState<LoaderType>('triway-pulse')
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('md')
  const [isLoading, setIsLoading] = useState(false)

  const loaderTypes: { type: LoaderType; name: string; description: string }[] = [
    { type: 'triway-pulse', name: 'Triway Pulse', description: 'Brand-colored pulsing dots' },
    { type: 'orbital-rings', name: 'Orbital Rings', description: 'Rotating orbital rings' },
    { type: 'waveform', name: 'Waveform', description: 'Animated waveform bars' },
    { type: 'hexagon-grid', name: 'Hexagon Grid', description: 'Expanding hexagon grid' },
    { type: 'particle-flow', name: 'Particle Flow', description: 'Flowing particles' },
    { type: 'spiral-orbit', name: 'Spiral Orbit', description: 'Spiral orbiting elements' },
    { type: 'matrix-rain', name: 'Matrix Rain', description: 'Digital rain effect' },
    { type: 'morphing-shapes', name: 'Morphing Shapes', description: 'Morphing geometric shapes' },
    { type: 'energy-pulse', name: 'Energy Pulse', description: 'Energy pulse with waves' },
    { type: 'neural-network', name: 'Neural Network', description: 'Neural network nodes' }
  ]

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Loader Component Usage</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how to integrate the Loader component into your pages with different types and sizes.
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Customize Your Loader</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Loader Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Loader Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value as LoaderType)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {loaderTypes.map((loader) => (
                  <option key={loader.type} value={loader.type}>
                    {loader.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">Size</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value as 'sm' | 'md' | 'lg')}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>
          </div>
        </div>

        {/* Preview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Preview</h2>
          <div className="flex items-center justify-center h-32 border-2 border-dashed border-gray-300 rounded-lg">
            <Loader type={selectedType} size={selectedSize} />
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              {loaderTypes.find(l => l.type === selectedType)?.description}
            </p>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Example 1: Page Loading */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Page Loading</h3>
            <div className="space-y-4">
              <button
                onClick={simulateLoading}
                disabled={isLoading}
                className="w-full px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Loading...' : 'Simulate Page Load'}
              </button>
              {isLoading && (
                <div className="flex items-center justify-center py-8">
                  <Loader type="orbital-rings" size="md" />
                </div>
              )}
            </div>
          </div>

          {/* Example 2: Button Loading */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Button Loading</h3>
            <div className="space-y-4">
              <button
                onClick={simulateLoading}
                disabled={isLoading}
                className="w-full px-4 py-2 bg-secondary-500 text-white rounded-lg hover:bg-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
              >
                {isLoading && <Loader type="triway-pulse" size="sm" />}
                <span>{isLoading ? 'Processing...' : 'Submit Form'}</span>
              </button>
            </div>
          </div>

          {/* Example 3: Content Loading */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Loading</h3>
            <div className="space-y-4">
              <button
                onClick={simulateLoading}
                disabled={isLoading}
                className="w-full px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Loading Content...' : 'Load Data'}
              </button>
              {isLoading && (
                <div className="text-center py-8">
                  <Loader type="waveform" size="lg" />
                  <p className="text-sm text-gray-600 mt-4">Loading your content...</p>
                </div>
              )}
            </div>
          </div>

          {/* Example 4: Full Screen Loading */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Full Screen Loading</h3>
            <div className="space-y-4">
              <button
                onClick={simulateLoading}
                disabled={isLoading}
                className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? 'Loading...' : 'Show Full Screen Loader'}
              </button>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Code Example</h2>
          <div className="bg-gray-900 rounded-lg p-6 overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`import Loader from '@/components/ui/Loader'

// Basic usage
<Loader type="triway-pulse" size="md" />

// In a button
<button disabled={isLoading}>
  {isLoading && <Loader type="triway-pulse" size="sm" />}
  {isLoading ? 'Loading...' : 'Submit'}
</button>

// Full screen loading
{isLoading && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <Loader type="orbital-rings" size="lg" />
  </div>
)}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Full Screen Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 text-center">
            <Loader type="energy-pulse" size="lg" />
            <p className="text-gray-600 mt-4">Loading...</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default LoaderExample 