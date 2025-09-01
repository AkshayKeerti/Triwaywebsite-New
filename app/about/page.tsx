import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { Users, Target, Award, Globe, Heart, Zap, Shield, Code, Palette, Cloud, Server, Sparkles, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Button from '../../components/ui/Button'

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We push boundaries and embrace cutting-edge technologies to deliver exceptional solutions."
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through trust and results."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Every solution undergoes rigorous testing to ensure reliability and performance."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and transparent communication."
    }
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "/dubai.png",
      bio: "Visionary leader with 15+ years in technology consulting and digital transformation."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "/dubai.png",
      bio: "Expert in cloud architecture and emerging technologies with a passion for innovation."
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "/dubai.png",
      bio: "Creative director specializing in user experience and brand identity design."
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      image: "/dubai.png",
      bio: "Seasoned engineer leading our development teams and technical strategy."
    }
  ]

  const stats = [
    { number: "200+", label: "Projects Delivered" },
    { number: "50+", label: "Team Members" },
    { number: "98%", label: "Client Satisfaction" },
            { number: "Dedicated", label: "Support Available" }
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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Triway</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're a forward-thinking technology company dedicated to transforming businesses through innovative IT solutions, 
              cutting-edge AI, and exceptional design experiences.
            </p>
            <div className="flex justify-center">
              <Button href="#story" variant="primary" icon={ArrowRight}>
                Our Story
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2018, Triway Technologies emerged from a simple vision: to make advanced technology accessible 
                and beneficial for businesses of all sizes. What started as a small team of passionate technologists has 
                grown into a comprehensive IT solutions provider.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, we serve clients across multiple industries, from startups to Fortune 500 companies, delivering 
                innovative solutions that drive growth, enhance security, and create exceptional user experiences.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent-500" />
                  <span className="text-gray-700">ISO 27001 Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent-500" />
                  <span className="text-gray-700">Microsoft Gold Partner</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/dubai.png"
                  alt="Triway Technologies Office"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core principles guide everything we do and shape the way we serve our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-8 text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to delivering exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center group">
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={120}
                    height={120}
                    className="rounded-full mx-auto group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline">
              Get Started
            </Button>
            <Button href="/case-studies" variant="ghost">
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 