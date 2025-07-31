import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'
import InitialLoader from '../components/InitialLoader'

export const metadata: Metadata = {
  title: 'Triway - IT Solutions & Digital Transformation',
  description: 'Leading IT services company offering managed services, cloud solutions, cybersecurity, infrastructure, AI automation, and custom software development.',
  keywords: 'IT services, managed services, cloud solutions, cybersecurity, AI automation, software development',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <InitialLoader>
          {children}
        </InitialLoader>
      </body>
    </html>
  )
} 