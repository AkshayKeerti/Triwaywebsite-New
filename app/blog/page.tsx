import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Link from 'next/link'
import { ArrowRight, Calendar, Clock, User, Tag, Search, Filter, TrendingUp, Zap, Shield, Cloud, Code, Palette, Users, Globe, BookOpen, Eye, Heart, MessageCircle, ShoppingCart, GraduationCap, Film, Gamepad2, Megaphone, Smartphone, BarChart3, Brain, Settings, Link as LinkIcon, Database, Monitor, Server, Layers, Target, CheckCircle, Lock, AlertTriangle } from 'lucide-react'
import Button from '../../components/ui/Button'
import Image from 'next/image'
import { getBlogPosts, getCategories, BlogPost, Category } from '../../lib/contentful'
import { fallbackBlogPosts, fallbackCategories } from '../../lib/fallbackData'

// Enable ISR for automatic content updates
export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  // Try to fetch from Contentful, fallback to static data
  let blogPosts: BlogPost[] = []
  let categories: Category[] = []
  
  try {
    blogPosts = await getBlogPosts()
    categories = await getCategories()
  } catch (error) {
    console.log('Using fallback data')
    blogPosts = fallbackBlogPosts
    categories = fallbackCategories
  }

  const featuredPost = blogPosts[0] || fallbackBlogPosts[0]

  const categoryIcons = {
    "Artificial Intelligence": Zap,
    "Cybersecurity": Shield,
    "Cloud Computing": Cloud,
    "Software Development": Code,
    "Design & UX": Palette,
    "Digital Transformation": TrendingUp,
    "Healthcare Tech": Users,
    "IoT & Edge Computing": Globe,
    "Banking & Finance": BookOpen,
    "E-commerce": ShoppingCart,
    "Education": GraduationCap,
    "Entertainment": Film,
    "Gaming": Gamepad2,
    "Marketing": Megaphone,
    "Mobile Development": Smartphone,
    "Data Analytics": BarChart3,
    "Machine Learning": Brain,
    "DevOps": Settings,
    "API Development": LinkIcon,
    "Database": Database,
    "Frontend": Monitor,
    "Backend": Server,
    "Full Stack": Layers,
    "UI/UX": Eye,
    "Product Management": Target,
    "Agile": Users,
    "Testing": CheckCircle,
    "Security": Lock,
    "Compliance": Shield,
    "Risk Management": AlertTriangle
  }

  const categoryColors = {
    "Artificial Intelligence": "from-yellow-500 to-orange-500",
    "Cybersecurity": "from-red-500 to-red-600",
    "Cloud Computing": "from-blue-500 to-blue-600",
    "Software Development": "from-indigo-500 to-indigo-600",
    "Design & UX": "from-pink-500 to-pink-600",
    "Digital Transformation": "from-green-500 to-green-600",
    "Healthcare Tech": "from-purple-500 to-purple-600",
    "IoT & Edge Computing": "from-teal-500 to-teal-600",
    "Banking & Finance": "from-emerald-500 to-emerald-600",
    "E-commerce": "from-orange-500 to-orange-600",
    "Education": "from-blue-500 to-blue-600",
    "Entertainment": "from-purple-500 to-purple-600",
    "Gaming": "from-pink-500 to-pink-600",
    "Marketing": "from-red-500 to-red-600",
    "Mobile Development": "from-indigo-500 to-indigo-600",
    "Data Analytics": "from-cyan-500 to-cyan-600",
    "Machine Learning": "from-yellow-500 to-yellow-600",
    "DevOps": "from-gray-500 to-gray-600",
    "API Development": "from-blue-500 to-blue-600",
    "Database": "from-green-500 to-green-600",
    "Frontend": "from-purple-500 to-purple-600",
    "Backend": "from-orange-500 to-orange-600",
    "Full Stack": "from-indigo-500 to-indigo-600",
    "UI/UX": "from-pink-500 to-pink-600",
    "Product Management": "from-red-500 to-red-600",
    "Agile": "from-blue-500 to-blue-600",
    "Testing": "from-green-500 to-green-600",
    "Security": "from-red-500 to-red-600",
    "Compliance": "from-yellow-500 to-yellow-600",
    "Risk Management": "from-orange-500 to-orange-600"
  }

  const popularTags = [
    "AI", "Machine Learning", "Cybersecurity", "Cloud", "DevOps", "UX Design", 
    "Digital Transformation", "IoT", "Blockchain", "API", "Microservices", "Data Analytics"
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
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Insights, trends, and expert perspectives on technology, innovation, and digital transformation.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-gray-600">Explore our content by topic or technology</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const IconComponent = categoryIcons[category.name as keyof typeof categoryIcons] || TrendingUp
              const color = categoryColors[category.name as keyof typeof categoryColors] || "from-gray-500 to-gray-600"
              
              return (
                <Link key={index} href={`/blog?category=${category.name}`} className="card p-6 group hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                      <p className="text-gray-600">{category.count} articles</p>
                    </div>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <Link href={`/blog/${featuredPost.slug}`} className="card overflow-hidden group cursor-pointer block">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <Image
                  src={featuredPost.image.url}
                  alt={featuredPost.image.alt}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.publishDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">{featuredPost.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{featuredPost.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                  </div>
                  
                  <div className="inline-flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors duration-300">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-primary-500 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-900">Blog</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
                <div className="flex items-center space-x-2">
                  <Filter className="h-5 w-5 text-gray-400" />
                  <span className="text-sm text-gray-600">Filter</span>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.slice(1).map((post, index) => (
                  <Link key={post.id} href={`/blog/${post.slug}`} className="card overflow-hidden group cursor-pointer">
                    <div className="relative">
                      <Image
                        src={post.image.url}
                        alt={post.image.alt}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.publishDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Eye className="h-4 w-4" />
                            <span>{post.views.toLocaleString()}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        
                        <div className="inline-flex items-center text-primary-500 font-semibold group-hover:text-primary-600 transition-colors duration-300">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-12">
                <Button variant="primary" icon={ArrowRight}>
                  Load More Articles
                </Button>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="space-y-8">
                {/* Popular Tags */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-primary-500 hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Newsletter Signup */}
                <div className="card p-6 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                  <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
                  <p className="mb-4 text-white/90">Get the latest insights and trends delivered to your inbox.</p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                    />
                    <Button variant="outline" fullWidth>
                      Subscribe
                    </Button>
                  </div>
                </div>
                
                {/* Recent Posts */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <div key={index} className="flex space-x-3">
                        <Image
                          src={post.image.url}
                          alt={post.image.alt}
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">{post.title}</h4>
                          <p className="text-gray-500 text-xs">{new Date(post.publishDate).toLocaleDateString('en-US', { 
                            year: 'numeric', 
                            month: 'short', 
                            day: 'numeric' 
                          })}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Stay Connected</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest insights, case studies, and technology trends.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <Button variant="outline">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 