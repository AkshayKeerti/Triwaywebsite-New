'use client'

import { useState } from 'react'
import Loader from '../../components/Loader'
import SimpleLoader from '../../components/SimpleLoader'

export default function LoaderDemo() {
  const [showFullLoader, setShowFullLoader] = useState(false)
  const [showSimpleLoader, setShowSimpleLoader] = useState(false)

  const triggerFullLoader = () => {
    setShowFullLoader(true)
    setTimeout(() => setShowFullLoader(false), 5000)
  }

  const triggerSimpleLoader = () => {
    setShowSimpleLoader(true)
    setTimeout(() => setShowSimpleLoader(false), 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-8">
      {/* Full Screen Loader */}
      {showFullLoader && (
        <Loader 
          isLoading={showFullLoader} 
          message="Preparing your digital experience..."
          onComplete={() => console.log('Full loader completed')}
        />
      )}

      {/* Simple Loader Overlay */}
      {showSimpleLoader && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <SimpleLoader 
            size="lg" 
            message="Loading..." 
            className="bg-white p-8 rounded-2xl shadow-2xl"
          />
        </div>
      )}

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Innovative Loader Showcase</h1>
          <p className="text-xl text-gray-600">Experience our cutting-edge loading animations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Full Screen Loader Demo */}
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Full Screen Loader</h2>
            <p className="text-gray-600 mb-6">
              Immersive loading experience with progress tracking, step-by-step initialization, 
              and beautiful animations that match our brand theme.
            </p>
            <button 
              onClick={triggerFullLoader}
              className="btn-primary"
            >
              Launch Full Loader
            </button>
            
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Features:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Progress bar with gradient animation</li>
                <li>• Step-by-step initialization process</li>
                <li>• Floating tech elements and circuit lines</li>
                <li>• Brand-consistent color scheme</li>
                <li>• Glassmorphism design elements</li>
              </ul>
            </div>
          </div>

          {/* Simple Loader Demo */}
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Simple Loader</h2>
            <p className="text-gray-600 mb-6">
              Compact, reusable loader perfect for inline content loading, 
              form submissions, and component-level loading states.
            </p>
            <button 
              onClick={triggerSimpleLoader}
              className="btn-primary"
            >
              Show Simple Loader
            </button>

            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">Features:</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Multiple size options (sm, md, lg)</li>
                <li>• Rotating rings with brand colors</li>
                <li>• Floating particle effects</li>
                <li>• Customizable messages</li>
                <li>• Easy integration anywhere</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Inline Loader Examples */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Inline Loader Examples</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Small Loader</h3>
              <SimpleLoader size="sm" message="Loading..." />
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Medium Loader</h3>
              <SimpleLoader size="md" message="Processing..." />
            </div>
            
            <div className="card p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Large Loader</h3>
              <SimpleLoader size="lg" message="Initializing..." />
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="mt-16 card p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Full Screen Loader</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`<Loader 
  isLoading={true}
  message="Custom message..."
  onComplete={() => {
    // Handle completion
  }}
/>`}</pre>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Simple Loader</h3>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre>{`<SimpleLoader 
  size="md"
  message="Loading..."
  className="custom-class"
/>`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 