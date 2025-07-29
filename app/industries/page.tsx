import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Button from '../../components/ui/Button'
import { ArrowRight, TrendingUp, Users, Shield, Zap, Globe, Building, CreditCard, Car, GraduationCap, Briefcase, Award, Clock, DollarSign, CheckCircle, ShoppingBag, Heart, Settings, Truck, Plane, Camera, BookOpen, Palette, Database, Wifi, Smartphone, Monitor, Server, Cloud, Lock, BarChart3 } from 'lucide-react'
import Image from 'next/image'

export default function IndustriesPage() {
  const industries = [
    {
      name: "Banking & Finance",
      icon: CreditCard,
      color: "from-blue-500 to-blue-600",
      description: "Secure, scalable financial technology solutions for modern banking operations.",
      challenges: [
        "Regulatory compliance and security",
        "Legacy system modernization",
        "Digital transformation",
        "Fraud detection and prevention"
      ],
      solutions: [
        "Cloud-native banking platforms",
        "AI-powered fraud detection",
        "Blockchain integration",
        "Mobile banking applications"
      ],
      stats: {
        projects: "50+",
        clients: "25+",
        satisfaction: "99%"
      },
      image: "/dubai.png"
    },
    {
      name: "Healthcare",
      icon: Heart,
      color: "from-red-500 to-red-600",
      description: "HIPAA-compliant healthcare solutions that improve patient care and operational efficiency.",
      challenges: [
        "HIPAA compliance and data security",
        "Patient data management",
        "Interoperability between systems",
        "Telemedicine infrastructure"
      ],
      solutions: [
        "Electronic Health Records (EHR)",
        "Telemedicine platforms",
        "Predictive analytics",
        "IoT health monitoring"
      ],
      stats: {
        projects: "35+",
        clients: "20+",
        satisfaction: "98%"
      },
      image: "/dubai.png"
    },
    {
      name: "Retail & E-commerce",
      icon: ShoppingBag,
      color: "from-green-500 to-green-600",
      description: "Omnichannel retail solutions that drive sales and enhance customer experience.",
      challenges: [
        "Omnichannel integration",
        "Inventory management",
        "Customer experience optimization",
        "Scalability during peak seasons"
      ],
      solutions: [
        "E-commerce platforms",
        "Inventory management systems",
        "Customer analytics",
        "Mobile shopping apps"
      ],
      stats: {
        projects: "60+",
        clients: "40+",
        satisfaction: "97%"
      },
      image: "/dubai.png"
    },
    {
      name: "Manufacturing",
      icon: Settings,
      color: "from-purple-500 to-purple-600",
      description: "Smart manufacturing solutions that optimize production and reduce operational costs.",
      challenges: [
        "Supply chain optimization",
        "Predictive maintenance",
        "Quality control automation",
        "IoT integration"
      ],
      solutions: [
        "IoT sensor networks",
        "Predictive maintenance systems",
        "Quality control automation",
        "Supply chain management"
      ],
      stats: {
        projects: "30+",
        clients: "15+",
        satisfaction: "96%"
      },
      image: "/dubai.png"
    },
    {
      name: "Government",
      icon: Building,
      color: "from-indigo-500 to-indigo-600",
      description: "Secure government technology solutions that improve citizen services and operational efficiency.",
      challenges: [
        "Security and compliance",
        "Legacy system modernization",
        "Citizen service delivery",
        "Data privacy protection"
      ],
      solutions: [
        "Digital government platforms",
        "Secure authentication systems",
        "Citizen portals",
        "Data analytics platforms"
      ],
      stats: {
        projects: "25+",
        clients: "12+",
        satisfaction: "95%"
      },
      image: "/dubai.png"
    },
    {
      name: "Logistics & Transportation",
      icon: Truck,
      color: "from-orange-500 to-orange-600",
      description: "Intelligent logistics solutions that optimize routes and improve delivery efficiency.",
      challenges: [
        "Route optimization",
        "Real-time tracking",
        "Fleet management",
        "Supply chain visibility"
      ],
      solutions: [
        "Route optimization algorithms",
        "Real-time tracking systems",
        "Fleet management platforms",
        "Supply chain analytics"
      ],
      stats: {
        projects: "40+",
        clients: "25+",
        satisfaction: "97%"
      },
      image: "/dubai.png"
    },
    {
      name: "Education",
      icon: GraduationCap,
      color: "from-teal-500 to-teal-600",
      description: "Digital learning solutions that enhance educational outcomes and student engagement.",
      challenges: [
        "Remote learning infrastructure",
        "Student engagement",
        "Learning analytics",
        "Content management"
      ],
      solutions: [
        "Learning Management Systems (LMS)",
        "Virtual classrooms",
        "Student analytics platforms",
        "Content delivery systems"
      ],
      stats: {
        projects: "20+",
        clients: "15+",
        satisfaction: "94%"
      },
      image: "/dubai.png"
    },
    {
      name: "Real Estate",
      icon: Building,
      color: "from-amber-500 to-amber-600",
      description: "Property technology solutions that streamline operations and enhance customer experience.",
      challenges: [
        "Property management automation",
        "Customer relationship management",
        "Market analysis",
        "Virtual property tours"
      ],
      solutions: [
        "Property management systems",
        "CRM platforms",
        "Market analytics tools",
        "Virtual tour platforms"
      ],
      stats: {
        projects: "15+",
        clients: "10+",
        satisfaction: "93%"
      },
      image: "/dubai.png"
    }
  ]

  const technologies = [
    { name: "Cloud Computing", icon: Cloud, description: "Scalable cloud infrastructure and migration services" },
    { name: "Artificial Intelligence", icon: Zap, description: "AI-powered solutions for automation and insights" },
    { name: "Cybersecurity", icon: Shield, description: "Advanced security solutions and threat protection" },
    { name: "IoT & Sensors", icon: Wifi, description: "Connected devices and sensor networks" },
    { name: "Mobile Development", icon: Smartphone, description: "Native and cross-platform mobile applications" },
    { name: "Data Analytics", icon: BarChart3, description: "Big data analytics and business intelligence" }
  ]

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-secondary-500/10 to-accent-500/10"></div>
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Industry <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We deliver tailored technology solutions across diverse industries, 
              helping organizations overcome unique challenges and achieve their goals.
            </p>
            <div className="flex justify-center">
              <Button href="#industries" variant="primary" icon={ArrowRight}>
                Explore Industries
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Industries Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">300+</div>
              <div className="text-gray-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">200+</div>
              <div className="text-gray-600 font-medium">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our expertise spans cutting-edge technologies that power modern business solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="card p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{tech.name}</h3>
                    <p className="text-gray-600 text-sm">{tech.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section id="industries" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped organizations across different sectors transform their operations.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="relative">
                  <Image
                    src={industry.image}
                    alt={industry.name}
                    width={600}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${industry.color} rounded-xl flex items-center justify-center`}>
                      <industry.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name}</h3>
                  <p className="text-gray-600 mb-6">{industry.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Challenges</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                            <span className="text-sm text-gray-600">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Our Solutions</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-accent-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-500">{industry.stats.projects}</div>
                      <div className="text-sm text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-500">{industry.stats.clients}</div>
                      <div className="text-sm text-gray-600">Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-500">{industry.stats.satisfaction}</div>
                      <div className="text-sm text-gray-600">Satisfaction</div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <a href={`/case-studies?industry=${industry.name.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300">
                      View Case Studies
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    <Button href="/contact" variant="primary" size="sm">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how our industry-specific solutions can help your organization achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline">
              Start Your Project
            </Button>
            <Button href="/case-studies" variant="ghost">
              View Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 