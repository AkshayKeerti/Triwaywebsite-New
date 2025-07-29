import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Shield, ArrowRight, CheckCircle, Network, Eye, Lock, AlertTriangle, Zap } from 'lucide-react'
import Link from 'next/link'

export default function CybersecurityPage() {
  const services = [
    {
      title: 'Network, Application & Endpoint Security',
      description: 'Comprehensive security for networks, applications, and endpoints with advanced threat protection.',
      icon: Network,
      color: 'from-red-500 to-red-600',
      features: [
        'Network security monitoring',
        'Application security testing',
        'Endpoint protection',
        'Firewall management',
        'Intrusion detection',
        'Vulnerability assessment'
      ],
      href: '/services/cybersecurity/network-application-endpoint-security'
    },
    {
      title: 'Threat Detection',
      description: 'SOC, EDR, and email security monitoring and response for proactive threat management.',
      icon: Eye,
      color: 'from-orange-500 to-orange-600',
      features: [
        'Security Operations Center',
        'Endpoint Detection & Response',
        'Email security monitoring',
        'Threat intelligence',
        'Incident response',
        '24/7 monitoring'
      ],
      href: '/services/cybersecurity/threat-detection'
    },
    {
      title: 'Identity & Access Management',
      description: 'Advanced IAM solutions for secure access control and user management.',
      icon: Lock,
      color: 'from-blue-500 to-blue-600',
      features: [
        'Single sign-on (SSO)',
        'Multi-factor authentication',
        'Role-based access control',
        'Privileged access management',
        'Identity governance',
        'Password management'
      ],
      href: '/services/cybersecurity/identity-access-management'
    },
    {
      title: 'Cybersecurity Consulting',
      description: 'Strategic cybersecurity consulting and incident response for comprehensive protection.',
      icon: AlertTriangle,
      color: 'from-purple-500 to-purple-600',
      features: [
        'Security strategy development',
        'Risk assessment',
        'Compliance consulting',
        'Incident response planning',
        'Security training',
        'Policy development'
      ],
      href: '/services/cybersecurity/cybersecurity-consulting'
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Comprehensive Protection',
      description: 'Multi-layered security approach covering all attack vectors'
    },
    {
      icon: Zap,
      title: 'Proactive Defense',
      description: 'Advanced threat detection and prevention capabilities'
    },
    {
      icon: CheckCircle,
      title: 'Compliance Ready',
      description: 'Meet industry standards and regulatory requirements'
    },
    {
      icon: Eye,
      title: '24/7 Monitoring',
      description: 'Round-the-clock security monitoring and response'
    }
  ]

  const stats = [
    { number: '10M+', label: 'Threats Blocked' },
    { number: '0', label: 'Security Incidents' },
    { number: '100%', label: 'Coverage' },
    { number: '24/7', label: 'Monitoring' }
  ]

  const threats = [
    'Ransomware attacks',
    'Phishing campaigns',
    'Data breaches',
    'Insider threats',
    'Advanced persistent threats',
    'Zero-day exploits'
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-orange-500/10 to-purple-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/services" className="hover:text-red-600 transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gray-900">Cybersecurity</span>
          </div>
          
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
                <Shield className="h-8 w-8" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Cybersecurity
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Advanced threat detection and security solutions that protect your business 
              from evolving cyber threats. From network security to identity management, 
              we provide comprehensive protection for your digital assets.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-red-600 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions designed to protect your business from 
              modern cyber threats and ensure compliance with industry standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index} 
                href={service.href}
                className="group block"
              >
                <div className="service-card h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} text-white shadow-lg`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-red-600 transition-colors duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <span className="text-sm font-medium text-red-600 group-hover:text-red-700 transition-colors duration-300">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Threats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Threats We Protect Against
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive security solutions defend against the most sophisticated 
              cyber threats targeting modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {threats.map((threat, index) => (
              <div key={index} className="flex items-center p-4 bg-red-50 rounded-lg border border-red-100">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{threat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Cybersecurity?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience enterprise-grade security with our comprehensive 
              cybersecurity portfolio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Security Assessment Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to identifying and mitigating security risks
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Comprehensive security audit and vulnerability assessment'
              },
              {
                step: '02',
                title: 'Analysis',
                description: 'Identify security gaps and prioritize remediation efforts'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'Deploy security solutions and monitoring systems'
              },
              {
                step: '04',
                title: 'Monitoring',
                description: 'Continuous monitoring and threat response'
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center font-bold text-lg">
                    {process.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
            Don't wait for a security breach. Get started with a comprehensive 
            security assessment and protect your business from cyber threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
            >
              Get Security Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300 inline-flex items-center justify-center"
            >
              View Security Cases
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 