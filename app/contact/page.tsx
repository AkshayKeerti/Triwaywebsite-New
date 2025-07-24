import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ArrowRight, MapPin, Phone, Mail, Clock, Send, MessageCircle, Globe, Building, Users, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function ContactPage() {
  const offices = [
    {
      name: "Dubai Office",
      address: "Sheikh Zayed Road, Dubai, UAE",
      phone: "+971 4 123 4567",
      email: "dubai@triwaytech.com",
      hours: "Sun-Thu: 9:00 AM - 6:00 PM",
      image: "/dubai.png"
    },
    {
      name: "Abu Dhabi Office",
      address: "Corniche Road, Abu Dhabi, UAE",
      phone: "+971 2 123 4567",
      email: "abudhabi@triwaytech.com",
      hours: "Sun-Thu: 9:00 AM - 6:00 PM",
      image: "/dubai.png"
    }
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our experts",
      contact: "+971 4 123 4567",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message",
      contact: "hello@triwaytech.com",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our team",
      contact: "Available 24/7",
      action: "Start Chat"
    }
  ]

  const services = [
    "Managed Services",
    "Cloud Solutions",
    "Cybersecurity",
    "AI & Automation",
    "Software Development",
    "Design & UX"
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
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your business? Let's discuss how our technology solutions can help you achieve your goals.
            </p>
            <div className="flex justify-center">
              <a href="#contact-form" className="btn-primary">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="card p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="text-primary-500 font-semibold mb-4">{method.contact}</div>
                <button className="bg-primary-500 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary-600 transition-colors duration-300">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Offices */}
      <section id="contact-form" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Start Your Project</h2>
              <p className="text-lg text-gray-600 mb-8">
                Tell us about your project and we'll get back to you within 24 hours with a customized solution.
              </p>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service.toLowerCase().replace(/\s+/g, '-')}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-50k">Under $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k-250k">$100,000 - $250,000</option>
                    <option value="250k-500k">$250,000 - $500,000</option>
                    <option value="over-500k">Over $500,000</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Tell us about your project, goals, and requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    className="mt-1 h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    I agree to the <a href="/privacy" className="text-primary-500 hover:text-primary-600">Privacy Policy</a> and consent to being contacted about my project.
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-primary-500 text-white py-4 px-8 rounded-full font-semibold hover:bg-primary-600 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
            
            {/* Office Locations */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Offices</h2>
              <p className="text-lg text-gray-600 mb-8">
                Visit us at our offices or reach out to schedule a meeting.
              </p>
              
              <div className="space-y-8">
                {offices.map((office, index) => (
                  <div key={index} className="card overflow-hidden group">
                    <div className="relative">
                      <Image
                        src={office.image}
                        alt={office.name}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{office.name}</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-primary-500 mt-0.5" />
                          <span className="text-gray-600">{office.address}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Phone className="h-5 w-5 text-primary-500" />
                          <span className="text-gray-600">{office.phone}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-primary-500" />
                          <span className="text-gray-600">{office.email}</span>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <Clock className="h-5 w-5 text-primary-500" />
                          <span className="text-gray-600">{office.hours}</span>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex space-x-3">
                        <a
                          href={`tel:${office.phone}`}
                          className="flex-1 bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-600 transition-colors duration-300 text-center"
                        >
                          Call Office
                        </a>
                        <a
                          href={`mailto:${office.email}`}
                          className="flex-1 border border-primary-500 text-primary-500 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-500 hover:text-white transition-colors duration-300 text-center"
                        >
                          Send Email
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Triway Technologies?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through our proven expertise, innovative solutions, and dedicated support.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">50+ certified professionals with deep industry expertise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Track Record</h3>
              <p className="text-gray-600">500+ successful projects across 15+ industries</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600">Serving clients across the Middle East and beyond</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">ISO 27001 certified with 98% client satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" className="bg-white text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Start Your Project
            </a>
            <a href="/case-studies" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-500 transition-colors duration-300">
              View Our Work
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 