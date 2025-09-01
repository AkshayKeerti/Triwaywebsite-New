'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown, Zap, Cloud, Shield, Server, Code, Palette, Users, ArrowRight, Sparkles, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  
  // Check if we're on the home page
  const isHomePage = pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper function to generate service URLs
  const getServiceUrl = (categoryId: string, serviceTitle: string) => {
    const slugMap: { [key: string]: string } = {
      'End-to-End IT Support & Outsourcing': 'end-to-end-it-support',
      'AMC & Vendor Support': 'amc-vendor-support',
      'Project & Facility Management': 'project-facility-management',
      'Incident Response & IT Consulting': 'incident-response-consulting',
      'Infrastructure & Software Migration': 'infrastructure-software-migration',
      'Virtualization & Telecom Services': 'virtualization-telecom-services',
      'Cloud Infrastructure': 'cloud-infrastructure',
      'Cloud Migrations & Management': 'cloud-migrations-management',
      'SaaS Tools': 'saas-tools',
      'Microsoft & Zoho Ecosystems': 'microsoft-zoho-ecosystems',
      'Network, Application & Endpoint Security': 'network-application-endpoint-security',
      'Threat Detection': 'threat-detection',
      'Identity & Access Management': 'identity-access-management',
      'Cybersecurity Consulting': 'cybersecurity-consulting',
      'On-Prem Servers & Networking': 'on-prem-servers-networking',
      'Hardware Solutions': 'hardware-solutions',
      'Power Backup & Physical Infra Setup': 'power-backup-physical-infra',
      'Infrastructure Monitoring & Support': 'infrastructure-monitoring-support',
      'Generative AI': 'generative-ai',
      'Conversational AI': 'conversational-ai',
      'Agentic AI': 'agentic-ai',
      'Predictive AI': 'predictive-ai',
      'CoPilot Solutions': 'copilot-solutions',
      'RPA & Workflow Automation': 'rpa-workflow-automation',
      'Custom Software & App Development': 'custom-software-app-development',
      'Industry-Specific Solutions': 'industry-specific-solutions',
      'Web & Mobile Technologies': 'web-mobile-technologies',
      'UI/UX Design & Product Consulting': 'ui-ux-design-product-consulting',
      'UI/UX Design': 'ui-ux-design',
      'Product Design & Strategy': 'product-design-strategy',
      'Design Systems & Prototyping': 'design-systems-prototyping',
      'User Research & Journey Mapping': 'user-research-journey-mapping',
      'Branding & Visual Design': 'branding-visual-design'
    };
    
    const slug = slugMap[serviceTitle];
    return slug ? `/services/${categoryId}/${slug}` : '#';
  };

  const services = [
    {
      id: 'managed-services',
      name: 'Managed Services',
      icon: Users,
      color: 'from-blue-500 to-blue-600',
      description: 'Complete IT outsourcing and support solutions',
      items: [
        { title: 'End-to-End IT Support & Outsourcing', description: 'Comprehensive IT infrastructure management and support services.' },
        { title: 'AMC & Vendor Support', description: 'Annual maintenance contracts for Fortinet, Sophos, Juniper, Microsoft solutions.' },
        { title: 'Project & Facility Management', description: 'End-to-end project delivery and facility IT infrastructure management.' },
        { title: 'Incident Response & IT Consulting', description: 'Rapid incident response and strategic IT consulting services.' },
        { title: 'Infrastructure & Software Migration', description: 'Seamless migration of infrastructure and software systems.' },
        { title: 'Virtualization & Telecom Services', description: 'Advanced virtualization solutions and telecommunications services.' }
      ]
    },
    {
      id: 'cloud-services',
      name: 'Cloud Services',
      icon: Cloud,
      color: 'from-purple-500 to-purple-600',
      description: 'Scalable cloud infrastructure and migration',
      items: [
        { title: 'Cloud Infrastructure', description: 'Servers, VMs, and hybrid cloud setup for optimal performance.' },
        { title: 'Cloud Migrations & Management', description: 'Seamless cloud migration and ongoing management services.' },
        { title: 'SaaS Tools', description: 'CRM, ERP, and document management solutions implementation.' },
        { title: 'Microsoft & Zoho Ecosystems', description: 'Complete Microsoft and Zoho cloud ecosystem integration.' }
      ]
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-red-600',
      description: 'Advanced threat detection and security',
      items: [
        { title: 'Network, Application & Endpoint Security', description: 'Comprehensive security for networks, applications, and endpoints.' },
        { title: 'Threat Detection', description: 'SOC, EDR, and email security monitoring and response.' },
        { title: 'Identity & Access Management', description: 'Advanced IAM solutions for secure access control.' },
        { title: 'Cybersecurity Consulting', description: 'Strategic cybersecurity consulting and incident response.' }
      ]
    },
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      icon: Server,
      color: 'from-green-500 to-green-600',
      description: 'On-premise and hybrid infrastructure solutions',
      items: [
        { title: 'On-Prem Servers & Networking', description: 'Enterprise-grade on-premise server and networking solutions.' },
        { title: 'Hardware Solutions', description: 'Dell, Fortinet, Juniper, APC hardware implementation and support.' },
        { title: 'Power Backup & Physical Infra Setup', description: 'Comprehensive power backup and physical infrastructure setup.' },
        { title: 'Infrastructure Monitoring & Support', description: 'Continuous infrastructure monitoring and proactive support.' }
      ]
    },
    {
      id: 'ai-automation',
      name: 'AI & Automation',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      description: 'Intelligent automation and AI integrations',
      items: [
        { title: 'Generative AI', description: 'Advanced generative AI solutions for content creation and automation.' },
        { title: 'Conversational AI', description: 'Intelligent chatbots and conversational AI implementations.' },
        { title: 'Agentic AI', description: 'Autonomous AI agents for complex task automation.' },
        { title: 'Predictive AI', description: 'Predictive analytics and AI-driven insights.' },
        { title: 'CoPilot Solutions', description: 'Microsoft CoPilot and AI assistant implementations.' },
        { title: 'RPA & Workflow Automation', description: 'UiPath and workflow automation solutions.' }
      ]
    },
    {
      id: 'software-solutions',
      name: 'Software Solutions',
      icon: Code,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Custom software and application development',
      items: [
        { title: 'Custom Software & App Development', description: 'Tailored software solutions for your unique business needs.' },
        { title: 'Industry-Specific Solutions', description: 'Specialized solutions for Banking, Retail, Travel, and Government sectors.' },
        { title: 'Web & Mobile Technologies', description: 'React, Flutter, Node.js, and modern web/mobile development.' },
        { title: 'UI/UX Design & Product Consulting', description: 'User-centered design and product strategy consulting.' }
      ]
    },
    {
      id: 'design-experience',
      name: 'Design & Experience',
      icon: Palette,
      color: 'from-pink-500 to-pink-600',
      description: 'User experience and visual design services',
      items: [
        { title: 'UI/UX Design', description: 'User interface and experience design for digital products.' },
        { title: 'Product Design & Strategy', description: 'Strategic product design and development planning.' },
        { title: 'Design Systems & Prototyping', description: 'Comprehensive design systems and rapid prototyping.' },
        { title: 'User Research & Journey Mapping', description: 'In-depth user research and customer journey optimization.' },
        { title: 'Branding & Visual Design', description: 'Complete branding and visual identity design services.' }
      ]
    }
  ]

  const navigation = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Industries', href: '/industries' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ]

  const handleServiceHover = (serviceId: string) => {
    // Clear any existing timeout to prevent state conflicts
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    // Immediately set the new service for instant response
    setSelectedService(serviceId)
  }

  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout)
      setDropdownTimeout(null)
    }
    setActiveDropdown(itemName)
    // Set the first service as default when opening the dropdown
    if (itemName === 'Services' && !selectedService) {
      setSelectedService('managed-services')
    }
  }

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null)
      setSelectedService(null)
    }, 50) // Minimal delay for smooth interaction
    setDropdownTimeout(timeout)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || !isHomePage
        ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <Image
                src={scrolled || !isHomePage ? "/TriwayTechnologies.png" : "/TriwayTechnologies (White).png"}
                alt="Triway Technologies"
                width={160}
                height={80}
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-auto">
            {navigation.map((item) => (
              <div key={item.name} className="relative border-0 outline-none">
                {item.hasDropdown ? (
                  <div
                    className="nav-link flex items-center cursor-pointer group border-0 outline-none"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <span className={`text-sm font-medium transition-colors duration-300 ${
                      scrolled || !isHomePage
                        ? 'text-gray-700 group-hover:text-blue-600' 
                        : 'text-white/90 group-hover:text-white'
                    }`}>{item.name}</span>
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${
                      scrolled || !isHomePage
                        ? 'text-gray-500 group-hover:text-blue-600' 
                        : 'text-white/70 group-hover:text-white'
                    }`} />
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`nav-link text-sm font-medium transition-colors duration-300 relative group border-0 outline-none ${
                      scrolled || !isHomePage
                        ? 'text-gray-700 hover:text-blue-600' 
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                      scrolled || !isHomePage ? 'bg-blue-600' : 'bg-white'
                    }`}></span>
                  </Link>
                )}

                {/* Redesigned Services Dropdown */}
                {item.hasDropdown && activeDropdown === item.name && (
                  <div
                    className="dropdown-menu show w-[900px] left-1/2 transform -translate-x-1/2 p-0 mt-4"
                    onMouseEnter={() => handleDropdownEnter(item.name)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="grid grid-cols-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden h-full">
                      {/* Left Column - Service Categories */}
                      <div className="bg-gradient-to-br from-gray-900/95 to-black/95 p-6 overflow-y-auto">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-white">IT Services</h3>
                          <ArrowUpRight className="h-5 w-5 text-blue-400" />
                        </div>
                        
                        <div className="space-y-1">
                          {services.map((service) => (
                            <Link
                              key={service.id}
                              href={`/services/${service.id}`}
                              className={`p-2 rounded-lg cursor-pointer service-item flex items-center justify-between group ${
                                selectedService === service.id ? 'selected' : ''
                              }`}
                              onMouseEnter={() => handleServiceHover(service.id)}
                            >
                              <div className="flex items-center space-x-3">
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                                  <service.icon className="h-4 w-4" />
                                </div>
                                <span className="text-white font-medium">{service.name}</span>
                              </div>
                              <ArrowRight className="h-4 w-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Right Column - Service Details */}
                      <div className="bg-white p-6 relative overflow-y-auto">
                        <div className="relative z-10 h-full">
                          {selectedService ? (
                            <div className="space-y-4">
                              <div className="flex items-center space-x-3 mb-4">
                                {(() => {
                                  const service = services.find(s => s.id === selectedService)
                                  return service ? (
                                    <>
                                      <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                                        <service.icon className="h-6 w-6" />
                                      </div>
                                      <div>
                                        <h4 className="text-xl font-bold text-gray-900">{service.name}</h4>
                                        <p className="text-gray-600">{service.description}</p>
                                      </div>
                                    </>
                                  ) : null
                                })()}
                              </div>
                              
                              <div className="grid grid-cols-2 gap-3">
                                {(() => {
                                  const service = services.find(s => s.id === selectedService)
                                  return service ? (
                                    service.items.map((item, index) => (
                                      <Link
                                        key={`${service.id}-${item.title}`}
                                        href={getServiceUrl(service.id, item.title)}
                                        className="block p-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                                      >
                                        <h5 className="font-semibold text-gray-900 mb-1 text-sm group-hover:text-primary-500 transition-colors">{item.title}</h5>
                                        <p className="text-xs text-gray-600 leading-relaxed">{item.description}</p>
                                        <div className="flex items-center justify-between mt-2">
                                          <span className="text-xs text-primary-500 font-medium">Learn More</span>
                                          <ArrowRight className="h-3 w-3 text-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                      </Link>
                                    ))
                                  ) : null
                                })()}
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-20">
                              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                <Sparkles className="h-8 w-8 text-white" />
                              </div>
                              <h4 className="text-xl font-bold text-gray-900 mb-2">Select a Service</h4>
                              <p className="text-gray-600">Hover over a service category to see detailed information</p>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center ml-8">
            <Link
              href="/contact"
              className={`px-6 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105 ${
                scrolled || !isHomePage
                  ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg' 
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20'
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors p-2 rounded-lg ${
                scrolled || !isHomePage
                  ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-100' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 backdrop-blur-xl rounded-b-2xl shadow-2xl ${
              scrolled || !isHomePage
                ? 'bg-white/95 border-t border-gray-200' 
                : 'bg-black/95 border-t border-white/10'
            }`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    scrolled || !isHomePage
                      ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-100' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className={`pt-4 border-t mt-4 ${
                scrolled || !isHomePage ? 'border-gray-200' : 'border-white/10'
              }`}>
                <Link
                  href="/contact"
                  className={`block px-3 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                    scrolled || !isHomePage
                      ? 'text-gray-600 hover:text-blue-600 hover:bg-gray-100' 
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>


    </header>
  )
}

export default Header 