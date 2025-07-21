import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Triway - IT Solutions & Digital Transformation',
  description: 'Leading IT services company offering managed services, cloud solutions, cybersecurity, infrastructure, AI automation, and custom software development.',
  keywords: 'IT services, managed services, cloud solutions, cybersecurity, AI automation, software development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
} 