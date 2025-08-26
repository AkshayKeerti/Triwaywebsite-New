import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Tag, Shield, Users, CheckCircle, BarChart3, Award, Sparkles, TrendingUp, Zap, Globe, Building2, Target, Star, Eye, MessageCircle, Code, Database, CreditCard, Monitor, Server, Rocket, Target as TargetIcon, Network } from 'lucide-react'
import Button from '../../../components/ui/Button'
import Image from 'next/image'
import { notFound } from 'next/navigation'

// Case study data - in a real app, this would come from a database or CMS
const caseStudies = {
  "1": {
    id: 1,
    title: "Sahara Bank - Digital Banking Transformation",
    client: "Sahara Bank",
    industry: "Banking & Finance",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
    image: "/dubai.png",
    duration: "18 months",
    team: "25+ experts",
    location: "Libya",
    
    // Executive Summary
    executiveSummary: "Sahara Bank partnered with Triway to modernize their entire banking infrastructure, transforming from legacy systems to a fully digital, real-time banking platform. This comprehensive initiative enhanced customer experience, strengthened regulatory compliance, and positioned the bank as a technology leader in Libya's financial sector.",
    
    // Client Background
    clientBackground: "Sahara Bank is one of Libya's premier commercial banks, serving thousands of retail and corporate customers across multiple branches. As customer expectations evolved and digital banking became essential, Sahara Bank recognized the need for a complete technological transformation to maintain their market leadership position.",
    
    // Business Challenges
    challenges: [
      "Outdated Core Systems: Legacy banking infrastructure caused significant delays and operational inefficiencies",
      "Limited Digital Capabilities: Absence of real-time processing and modern payment options",
      "Compliance Gaps: Existing systems struggled to meet evolving regulatory requirements",
      "Customer Experience Issues: Slow, manual processes frustrated customers and limited service quality",
      "Operational Visibility: Management lacked real-time insights for strategic decision-making"
    ],
    
    // Solution Components
    solutionComponents: [
      {
        title: "Enterprise Command Center (ECC) Interface",
        description: "Centralized management platform for all banking operations with real-time monitoring and automated workflow management",
        icon: Monitor,
        color: "from-blue-500 to-blue-600"
      },
      {
        title: "LyPay Digital Payment Platform",
        description: "Complete digital payment processing ecosystem with mobile banking application and multi-channel integration",
        icon: CreditCard,
        color: "from-green-500 to-green-600"
      },
      {
        title: "Credit Bureau Integration",
        description: "Seamless connectivity with national and international credit agencies for automated credit scoring and risk assessment",
        icon: Database,
        color: "from-purple-500 to-purple-600"
      },
      {
        title: "Comprehensive Support Framework",
        description: "24/7 system monitoring, proactive maintenance, disaster recovery, and continuous improvement services",
        icon: Server,
        color: "from-orange-500 to-orange-600"
      }
    ],
    
    // Implementation Phases
    implementationPhases: [
      {
        phase: "Discovery & Architecture",
        duration: "Months 1-3",
        description: "Comprehensive system assessment, solution architecture design, and detailed project planning",
        icon: TargetIcon,
        color: "from-blue-500 to-blue-600"
      },
      {
        phase: "Core Platform Development",
        duration: "Months 4-10",
        description: "ECC implementation, system integration, data migration, and comprehensive testing",
        icon: Code,
        color: "from-green-500 to-green-600"
      },
      {
        phase: "Digital Services Launch",
        duration: "Months 11-15",
        description: "LyPay deployment, mobile application development, and staff training programs",
        icon: Rocket,
        color: "from-purple-500 to-purple-600"
      },
      {
        phase: "Go-Live & Optimization",
        duration: "Months 16-18",
        description: "Phased production rollout, performance tuning, and knowledge transfer",
        icon: TrendingUp,
        color: "from-orange-500 to-orange-600"
      }
    ],
    
    // Results by Category
    results: {
      operational: [
        { metric: "99.9%", label: "System Uptime", description: "Eliminated service interruptions" },
        { metric: "75%", label: "Faster Processing", description: "Reduced transaction times from minutes to seconds" },
        { metric: "Real-time", label: "Capabilities", description: "Instant account updates and balance inquiries" },
        { metric: "100%", label: "Automated Operations", description: "Eliminated manual, error-prone processes" }
      ],
      customer: [
        { metric: "50,000+", label: "Mobile Users", description: "Successful digital adoption" },
        { metric: "60%", label: "Reduced Wait Times", description: "Streamlined service delivery" },
        { metric: "40%", label: "Higher Satisfaction", description: "Improved customer experience scores" },
        { metric: "24/7", label: "Service Availability", description: "Round-the-clock banking access" }
      ],
      compliance: [
        { metric: "100%", label: "Regulatory Compliance", description: "Met all Central Bank requirements" },
        { metric: "Enhanced", label: "AML Capabilities", description: "Automated compliance monitoring" },
        { metric: "Complete", label: "Audit Trails", description: "Full transaction visibility" },
        { metric: "Strengthened", label: "KYC Processes", description: "Improved customer verification" }
      ],
      business: [
        { metric: "300%", label: "Digital Transaction Growth", description: "Massive adoption of digital services" },
        { metric: "25%", label: "Cost Reduction", description: "Operational efficiency improvements" },
        { metric: "80%", label: "Faster Loan Processing", description: "Automated approval workflows" },
        { metric: "Enhanced", label: "Risk Management", description: "Better decision-making capabilities" }
      ]
    },
    
    // Technologies
    technologies: [
      { name: "Enterprise Command Center", category: "Management System", icon: Monitor },
      { name: "LyPay Platform", category: "Digital Payment Processing", icon: CreditCard },
      { name: "Credit Bureau APIs", category: "Integration Services", icon: Database },
      { name: "Oracle Enterprise Database", category: "Database Systems", icon: Database },
      { name: "IBM WebSphere", category: "Application Infrastructure", icon: Server },
      { name: "Cisco Architecture", category: "Network & Security", icon: Network }
    ],
    
    // Success Factors
    successFactors: [
      {
        title: "Strategic Partnership Approach",
        description: "Deep understanding of Libya's banking regulations and market dynamics, collaborative engagement with all stakeholders throughout the transformation, comprehensive change management and staff development programs."
      },
      {
        title: "Proven Methodology",
        description: "Phased implementation approach minimizing business risk, rigorous testing and quality assurance at every stage, continuous monitoring and optimization during rollout."
      },
      {
        title: "Technical Excellence",
        description: "Robust, scalable architecture designed for future growth, industry-leading security and compliance frameworks, seamless integration with existing banking ecosystems."
      }
    ],
    

  }
}

export default function CaseStudyPage({ params }: { params: { id: string } }) {
  const caseStudy = caseStudies[params.id as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/case-studies" className="inline-flex items-center text-primary-500 hover:text-primary-600 transition-colors duration-300">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Case Studies
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-r ${caseStudy.color} rounded-2xl flex items-center justify-center`}>
                  <caseStudy.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <span className="text-sm font-medium text-primary-500">{caseStudy.industry}</span>
                  <p className="text-sm text-gray-500">Client: {caseStudy.client}</p>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {caseStudy.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {caseStudy.executiveSummary}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="h-5 w-5" />
                  <span>{caseStudy.duration}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-5 w-5" />
                  <span>{caseStudy.team}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Globe className="h-5 w-5" />
                  <span>{caseStudy.location}</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" variant="primary" icon={ArrowRight}>
                  Start Your Project
                </Button>
                <Button href="/services" variant="outline">
                  Explore Services
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src={caseStudy.image}
                alt={caseStudy.title}
                width={600}
                height={400}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Background Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Client Background</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              {caseStudy.clientBackground}
            </p>
          </div>
        </div>
      </section>

      {/* Business Challenges Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Business Challenges</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sahara Bank faced critical operational challenges that threatened their competitive position
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.challenges.map((challenge, index) => (
              <div key={index} className="card p-6 border-l-4 border-l-red-500">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Target className="h-4 w-4 text-red-600" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Components Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solution</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Triway delivered a comprehensive digital banking transformation through four integrated components
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudy.solutionComponents.map((component, index) => (
              <div key={index} className="card p-8 group hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${component.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <component.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{component.title}</h3>
                <p className="text-gray-600 leading-relaxed">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Core platforms deployed to deliver robust, scalable, and secure banking infrastructure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudy.technologies.map((tech, index) => (
              <div key={index} className="card p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Implementation Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The transformation was executed through a carefully orchestrated 18-month program
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.implementationPhases.map((phase, index) => (
              <div key={index} className="relative">
                <div className="card p-6 text-center h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl`}>
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.phase}</h3>
                  <p className="text-gray-600 text-sm mb-3">{phase.description}</p>
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                    {phase.duration}
                  </span>
                </div>
                
                {index < caseStudy.implementationPhases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transformational Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The transformation delivered measurable improvements across all key performance indicators
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Operational Excellence */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Operational Excellence Achieved</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudy.results.operational.map((result, index) => (
                  <div key={index} className="card p-6 text-center">
                    <div className="text-3xl font-bold text-primary-500 mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{result.label}</div>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Experience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Enhanced Customer Experience</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudy.results.customer.map((result, index) => (
                  <div key={index} className="card p-6 text-center">
                    <div className="text-3xl font-bold text-green-500 mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{result.label}</div>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Regulatory Compliance */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Regulatory Compliance Strengthened</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudy.results.compliance.map((result, index) => (
                  <div key={index} className="card p-6 text-center">
                    <div className="text-3xl font-bold text-purple-500 mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{result.label}</div>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Growth */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Business Growth Delivered</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudy.results.business.map((result, index) => (
                  <div key={index} className="card p-6 text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-2">{result.metric}</div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">{result.label}</div>
                    <p className="text-gray-600 text-sm">{result.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results with our proven technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline">
              Start Your Project
            </Button>
            <Button href="/case-studies" variant="ghost">
              View More Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
