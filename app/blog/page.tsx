import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { ArrowRight, Calendar, Clock, User, Tag, Search, Filter, TrendingUp, Zap, Shield, Cloud, Code, Palette, Users, Globe, BookOpen, Eye, Heart, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function BlogPage() {
  const featuredPost = {
    title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
    excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what businesses need to know to stay competitive in the rapidly evolving AI landscape.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    image: "/dubai.png",
    views: "2.5k",
    likes: "156"
  }

  const blogPosts = [
    {
      id: 1,
      title: "Cybersecurity Best Practices for Remote Work",
      excerpt: "Essential security measures organizations should implement to protect their data and systems in the remote work era.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "6 min read",
      category: "Cybersecurity",
      image: "/dubai.png",
      views: "1.8k",
      likes: "89"
    },
    {
      id: 2,
      title: "Cloud Migration Strategies: A Comprehensive Guide",
      excerpt: "Step-by-step approach to successfully migrating your infrastructure to the cloud while minimizing downtime and risks.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Cloud Computing",
      image: "/dubai.png",
      views: "2.1k",
      likes: "124"
    },
    {
      id: 3,
      title: "Building Scalable Microservices Architecture",
      excerpt: "Learn the principles and best practices for designing and implementing scalable microservices for modern applications.",
      author: "David Kim",
      date: "March 8, 2024",
      readTime: "12 min read",
      category: "Software Development",
      image: "/dubai.png",
      views: "1.6k",
      likes: "78"
    },
    {
      id: 4,
      title: "UX Design Trends That Will Dominate 2024",
      excerpt: "Explore the latest user experience design trends that are shaping the digital landscape and user expectations.",
      author: "Emily Rodriguez",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Design & UX",
      image: "/dubai.png",
      views: "1.9k",
      likes: "95"
    },
    {
      id: 5,
      title: "Digital Transformation in Healthcare",
      excerpt: "How technology is revolutionizing patient care and healthcare operations in the digital age.",
      author: "Sarah Johnson",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Healthcare Tech",
      image: "/dubai.png",
      views: "1.4k",
      likes: "67"
    },
    {
      id: 6,
      title: "The Rise of Edge Computing in IoT",
      excerpt: "Understanding how edge computing is enabling faster, more efficient IoT deployments and real-time data processing.",
      author: "Michael Chen",
      date: "March 1, 2024",
      readTime: "8 min read",
      category: "IoT & Edge Computing",
      image: "/dubai.png",
      views: "1.2k",
      likes: "56"
    }
  ]

  const categories = [
    { name: "Artificial Intelligence", icon: Zap, count: 15, color: "from-yellow-500 to-orange-500" },
    { name: "Cybersecurity", icon: Shield, count: 12, color: "from-red-500 to-red-600" },
    { name: "Cloud Computing", icon: Cloud, count: 18, color: "from-blue-500 to-blue-600" },
    { name: "Software Development", icon: Code, count: 22, color: "from-indigo-500 to-indigo-600" },
    { name: "Design & UX", icon: Palette, count: 14, color: "from-pink-500 to-pink-600" },
    { name: "Digital Transformation", icon: TrendingUp, count: 16, color: "from-green-500 to-green-600" }
  ]

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
            {categories.map((category, index) => (
              <div key={index} className="card p-6 group hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{category.name}</h3>
                    <p className="text-gray-600">{category.count} articles</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-primary-500 transition-colors duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <div className="card overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
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
                    <span>{featuredPost.date}</span>
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
                      <span>{featuredPost.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-4 w-4" />
                      <span>{featuredPost.likes}</span>
                    </div>
                  </div>
                  
                  <a href={`/blog/${featuredPost.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                {blogPosts.map((post, index) => (
                  <div key={post.id} className="card overflow-hidden group">
                    <div className="relative">
                      <Image
                        src={post.image}
                        alt={post.title}
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
                          <span>{post.date}</span>
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
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="h-4 w-4" />
                            <span>{post.likes}</span>
                          </div>
                        </div>
                        
                        <a href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors duration-300">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Load More Button */}
              <div className="text-center mt-12">
                <button className="btn-primary">
                  Load More Articles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
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
                    <button className="w-full bg-white text-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
                
                {/* Recent Posts */}
                <div className="card p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Posts</h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post, index) => (
                      <div key={index} className="flex space-x-3">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={60}
                          height={60}
                          className="w-15 h-15 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm line-clamp-2">{post.title}</h4>
                          <p className="text-gray-500 text-xs">{post.date}</p>
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
            <button className="bg-white text-primary-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 