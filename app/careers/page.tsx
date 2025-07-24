import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ArrowRight, MapPin, Clock, DollarSign, Users, Heart, Zap, Shield, Code, Palette, Cloud, Server, Briefcase, Award, Globe, Star, CheckCircle, Send, Filter, Search } from 'lucide-react'
import Image from 'next/image'

export default function CareersPage() {
  const openPositions = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "5+ years",
      salary: "$80k - $120k",
      description: "We're looking for a talented Full Stack Developer to join our engineering team and help build innovative solutions for our clients.",
      requirements: [
        "Strong experience with React, Node.js, and TypeScript",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Knowledge of microservices architecture",
        "Experience with CI/CD pipelines"
      ],
      benefits: [
        "Competitive salary and benefits",
        "Flexible work arrangements",
        "Professional development opportunities",
        "Health insurance coverage"
      ],
      icon: Code,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$60k - $90k",
      description: "Join our design team to create exceptional user experiences and beautiful interfaces for our digital products.",
      requirements: [
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Experience with user research and testing",
        "Strong portfolio showcasing web and mobile designs",
        "Understanding of design systems and accessibility"
      ],
      benefits: [
        "Creative and collaborative environment",
        "Latest design tools and resources",
        "Conference and workshop opportunities",
        "Flexible work schedule"
      ],
      icon: Palette,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Cloud Services",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "7+ years",
      salary: "$100k - $150k",
      description: "Lead our cloud architecture initiatives and help clients design scalable, secure cloud solutions.",
      requirements: [
        "Expert knowledge of AWS, Azure, and GCP",
        "Experience with containerization and Kubernetes",
        "Strong understanding of security best practices",
        "Excellent communication and client-facing skills"
      ],
      benefits: [
        "Competitive compensation package",
        "Certification and training opportunities",
        "Work with cutting-edge technologies",
        "Career growth and advancement"
      ],
      icon: Cloud,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 4,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "4+ years",
      salary: "$70k - $110k",
      description: "Protect our clients' digital assets and help build robust security frameworks for their organizations.",
      requirements: [
        "Experience with security tools and frameworks",
        "Knowledge of threat detection and response",
        "Understanding of compliance standards",
        "Certifications like CISSP, CEH preferred"
      ],
      benefits: [
        "Comprehensive security training",
        "Latest security tools and technologies",
        "Professional certification support",
        "Competitive benefits package"
      ],
      icon: Shield,
      color: "from-red-500 to-red-600"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      salary: "$75k - $115k",
      description: "Streamline our development processes and maintain our infrastructure with modern DevOps practices.",
      requirements: [
        "Experience with Docker, Kubernetes, and CI/CD",
        "Knowledge of cloud platforms and infrastructure",
        "Scripting skills (Python, Bash, PowerShell)",
        "Experience with monitoring and logging tools"
      ],
      benefits: [
        "Modern DevOps toolset",
        "Continuous learning opportunities",
        "Flexible remote work options",
        "Competitive salary and benefits"
      ],
      icon: Server,
      color: "from-green-500 to-green-600"
    },
    {
      id: 6,
      title: "AI/ML Engineer",
      department: "AI & Automation",
      location: "Dubai, UAE",
      type: "Full-time",
      experience: "3+ years",
      salary: "$85k - $130k",
      description: "Build intelligent solutions and help us push the boundaries of what's possible with AI and machine learning.",
      requirements: [
        "Strong Python programming skills",
        "Experience with ML frameworks (TensorFlow, PyTorch)",
        "Knowledge of data science and statistics",
        "Experience with cloud ML services"
      ],
      benefits: [
        "Cutting-edge AI/ML projects",
        "Access to powerful computing resources",
        "Conference and research opportunities",
        "Competitive compensation package"
      ],
      icon: Zap,
      color: "from-yellow-500 to-orange-500"
    }
  ]

  const departments = [
    { name: "Engineering", icon: Code, count: 8 },
    { name: "Design", icon: Palette, count: 4 },
    { name: "Cloud Services", icon: Cloud, count: 6 },
    { name: "Security", icon: Shield, count: 5 },
    { name: "AI & Automation", icon: Zap, count: 3 },
    { name: "Sales & Marketing", icon: Users, count: 4 }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Globe,
      title: "Remote Work",
      description: "Flexible work arrangements and remote opportunities"
    },
    {
      icon: Award,
      title: "Professional Growth",
      description: "Continuous learning and career development programs"
    },
    {
      icon: Star,
      title: "Great Culture",
      description: "Collaborative environment with amazing team members"
    }
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
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Build the future with us. Join a team of passionate technologists creating innovative solutions 
              that transform businesses and impact millions of users worldwide.
            </p>
            <div className="flex justify-center">
              <a href="#positions" className="btn-primary">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">98%</div>
              <div className="text-gray-600 font-medium">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">30+</div>
              <div className="text-gray-600 font-medium">Open Positions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Triway Technologies, we believe in fostering a culture of innovation, collaboration, and continuous learning. 
                Our team members are passionate about technology and committed to delivering exceptional results for our clients.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We value diversity, creativity, and work-life balance. Join us in building solutions that make a difference 
                in the world while growing your career in a supportive and dynamic environment.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                      <benefit.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/dubai.png"
                alt="Triway Technologies Team"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore opportunities across our diverse departments and find your perfect role.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="card p-6 group hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <dept.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{dept.name}</h3>
                    <p className="text-gray-600">{dept.count} positions</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section id="positions" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 mb-12">
            <div className="lg:w-1/3">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-gray-600 mb-6">
                Find the perfect role that matches your skills and career goals.
              </p>
              
              {/* Search and Filter */}
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search positions..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Filter by department</span>
                </div>
              </div>
            </div>
            
            <div className="lg:w-2/3">
              <div className="space-y-6">
                {openPositions.map((position, index) => (
                  <div key={position.id} className="card p-6 group hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${position.color} rounded-xl flex items-center justify-center`}>
                          <position.icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{position.title}</h3>
                          <p className="text-primary-500 font-medium">{position.department}</p>
                        </div>
                      </div>
                      <a href={`/careers/${position.id}`} className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors duration-300">
                        Apply Now
                      </a>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <Briefcase className="h-4 w-4" />
                          <span>{position.experience}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-600">
                          <DollarSign className="h-4 w-4" />
                          <span>{position.salary}</span>
                        </div>
                      </div>
                      
                      <div>
                        <p className="text-gray-600 text-sm mb-3">{position.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {position.requirements.slice(0, 2).map((req, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {req.split(' ').slice(0, 3).join(' ')}...
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Posted 2 days ago</span>
                        <span>•</span>
                        <span>15 applicants</span>
                      </div>
                      <a href={`/careers/${position.id}`} className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300">
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </div>
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
          <h2 className="text-4xl font-bold text-white mb-6">Don't See Your Role?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="bg-white text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Send Resume
            </a>
            <a href="/about" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-colors duration-300">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 