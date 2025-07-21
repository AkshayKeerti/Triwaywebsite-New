'use client'

import React from 'react'
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUp, Sparkles, Globe, Shield, Zap } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'Managed Services', href: '/services/managed-services' },
      { name: 'Cloud Services', href: '/services/cloud-services' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' },
      { name: 'Infrastructure', href: '/services/infrastructure' },
      { name: 'AI & Automation', href: '/services/ai-automation' },
      { name: 'Software Solutions', href: '/services/software-solutions' },
      { name: 'Design & Experience', href: '/services/design-experience' }
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Industries', href: '/industries' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' }
    ],
    support: [
      { name: 'Help Center', href: '/help' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Status Page', href: '/status' },
      { name: 'Support Portal', href: '/support' }
    ]
  }

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-400' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-cyan-400' },
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-400' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-8 group">
              <Image
                src="/TriwayTechnologies.png"
                alt="Triway Technologies"
                width={160}
                height={80}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              Your trusted technology partner for comprehensive IT solutions. 
              We help businesses transform and thrive in the digital age through 
              innovative technology solutions and expert consulting.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center text-gray-600 group">
                <div className="p-2 rounded-lg bg-primary-500/10 text-primary-500 mr-4 group-hover:bg-primary-500/20 transition-colors duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="group-hover:text-gray-900 transition-colors duration-300">contact@triway.com</span>
              </div>
              <div className="flex items-center text-gray-600 group">
                <div className="p-2 rounded-lg bg-secondary-500/10 text-secondary-500 mr-4 group-hover:bg-secondary-500/20 transition-colors duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="group-hover:text-gray-900 transition-colors duration-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-600 group">
                <div className="p-2 rounded-lg bg-accent-500/10 text-accent-500 mr-4 group-hover:bg-accent-500/20 transition-colors duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="group-hover:text-gray-900 transition-colors duration-300">123 Tech Street, Digital City, DC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Globe className="mr-2 h-5 w-5 text-primary-500" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-primary-500 transition-colors duration-300 group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Shield className="mr-2 h-5 w-5 text-secondary-500" />
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-secondary-500 transition-colors duration-300 group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <Zap className="mr-2 h-5 w-5 text-accent-500" />
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-600 hover:text-accent-500 transition-colors duration-300 group flex items-center"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="card p-8 mb-16 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-5"></div>
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated with Latest Tech Trends
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Subscribe to our newsletter for insights on emerging technologies, industry updates, and exclusive content.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500/50 transition-colors duration-300"
              />
              <button className="btn-primary">
                <span className="relative z-10 flex items-center">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Subscribe
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {currentYear} Triway. All rights reserved.
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-500 ${social.color} transition-colors duration-300 p-2 rounded-lg hover:bg-gray-100`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <ArrowUp className="h-6 w-6 text-white mx-auto" />
      </button>
    </footer>
  )
}

export default Footer 