import { BlogPost, Category } from './contentful'

export const fallbackBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: "The Future of AI in Enterprise: 2024 Trends and Predictions",
    slug: "the-future-of-ai-in-enterprise-2024-trends-and-predictions",
    excerpt: "Discover how artificial intelligence is reshaping enterprise operations and what businesses need to know to stay competitive in the rapidly evolving AI landscape.",
    content: `
      <h2>Introduction</h2>
      <p>Artificial Intelligence has become the cornerstone of modern enterprise operations, driving innovation across industries and reshaping how businesses approach problem-solving and decision-making.</p>
      
      <h2>Key Trends in Enterprise AI</h2>
      <p>As we move through 2024, several key trends are emerging that will define the future of AI in enterprise environments:</p>
      
      <h3>1. Generative AI Integration</h3>
      <p>Generative AI is moving beyond experimental phases into practical enterprise applications. Companies are now implementing AI-powered content creation, code generation, and design tools that significantly improve productivity.</p>
      
      <h3>2. AI-Powered Decision Intelligence</h3>
      <p>Decision intelligence platforms are combining AI with business intelligence to provide actionable insights in real-time, enabling faster and more accurate decision-making processes.</p>
      
      <h3>3. Responsible AI Implementation</h3>
      <p>As AI becomes more prevalent, organizations are prioritizing ethical AI practices, transparency, and governance frameworks to ensure responsible deployment.</p>
      
      <h2>Predictions for 2024</h2>
      <p>Based on current trends and technological advancements, here are our predictions for AI in enterprise:</p>
      
      <ul>
        <li>Increased adoption of AI-powered automation in customer service</li>
        <li>Growth in AI-driven predictive analytics for business planning</li>
        <li>Expansion of AI in cybersecurity and threat detection</li>
        <li>Rise of AI-powered personalization in marketing and sales</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>The future of AI in enterprise is bright, with organizations increasingly recognizing the value of intelligent automation and data-driven decision-making. Success will depend on strategic implementation and continuous adaptation to emerging technologies.</p>
    `,
    author: "Sarah Johnson",
    publishDate: "2024-03-15",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    image: {
      url: "/dubai.png",
      alt: "AI in Enterprise"
    },
    views: 2500,
    likes: 156,
    tags: ["AI", "Enterprise", "Technology", "Innovation"]
  },
  {
    id: '2',
    title: "Cybersecurity Best Practices for Remote Work",
    slug: "cybersecurity-best-practices-for-remote-work",
    excerpt: "Essential security measures organizations should implement to protect their data and systems in the remote work era.",
    content: `
      <h2>Introduction</h2>
      <p>With the rise of remote work, organizations face new cybersecurity challenges that require updated security protocols and best practices.</p>
      
      <h2>Key Security Measures</h2>
      <p>Implementing robust cybersecurity measures is crucial for protecting sensitive data in remote work environments.</p>
      
      <h3>1. Multi-Factor Authentication</h3>
      <p>MFA should be mandatory for all remote access to company systems and applications.</p>
      
      <h3>2. VPN Usage</h3>
      <p>Virtual Private Networks provide secure connections for remote workers accessing company resources.</p>
      
      <h3>3. Regular Security Training</h3>
      <p>Ongoing education about phishing attacks and social engineering tactics is essential.</p>
    `,
    author: "Michael Chen",
    publishDate: "2024-03-12",
    readTime: "6 min read",
    category: "Cybersecurity",
    image: {
      url: "/dubai.png",
      alt: "Cybersecurity"
    },
    views: 1800,
    likes: 89,
    tags: ["Cybersecurity", "Remote Work", "Security"]
  },
  {
    id: '3',
    title: "Cloud Migration Strategies: A Comprehensive Guide",
    slug: "cloud-migration-strategies-comprehensive-guide",
    excerpt: "Step-by-step approach to successfully migrating your infrastructure to the cloud while minimizing downtime and risks.",
    content: `
      <h2>Introduction</h2>
      <p>Cloud migration is a complex process that requires careful planning and execution to ensure success.</p>
      
      <h2>Migration Strategies</h2>
      <p>Several approaches can be taken when migrating to the cloud, each with its own benefits and considerations.</p>
      
      <h3>1. Lift and Shift</h3>
      <p>Moving applications to the cloud without significant modifications.</p>
      
      <h3>2. Replatforming</h3>
      <p>Making minor optimizations to take advantage of cloud-native features.</p>
      
      <h3>3. Refactoring</h3>
      <p>Completely redesigning applications for cloud-native architecture.</p>
    `,
    author: "Emily Rodriguez",
    publishDate: "2024-03-10",
    readTime: "10 min read",
    category: "Cloud Computing",
    image: {
      url: "/dubai.png",
      alt: "Cloud Migration"
    },
    views: 2100,
    likes: 124,
    tags: ["Cloud", "Migration", "Infrastructure"]
  },
  {
    id: '4',
    title: "Building Scalable Microservices Architecture",
    slug: "building-scalable-microservices-architecture",
    excerpt: "Learn the principles and best practices for designing and implementing scalable microservices for modern applications.",
    content: `
      <h2>Introduction</h2>
      <p>Microservices architecture offers flexibility and scalability for modern applications.</p>
      
      <h2>Design Principles</h2>
      <p>Successful microservices implementation requires adherence to key design principles.</p>
      
      <h3>1. Single Responsibility</h3>
      <p>Each service should have a single, well-defined responsibility.</p>
      
      <h3>2. Loose Coupling</h3>
      <p>Services should be independent and communicate through well-defined interfaces.</p>
      
      <h3>3. High Cohesion</h3>
      <p>Related functionality should be grouped together within services.</p>
    `,
    author: "David Kim",
    publishDate: "2024-03-08",
    readTime: "12 min read",
    category: "Software Development",
    image: {
      url: "/dubai.png",
      alt: "Microservices"
    },
    views: 1600,
    likes: 78,
    tags: ["Microservices", "Architecture", "Development"]
  },
  {
    id: '5',
    title: "UX Design Trends That Will Dominate 2024",
    slug: "ux-design-trends-2024",
    excerpt: "Explore the latest user experience design trends that are shaping the digital landscape and user expectations.",
    content: `
      <h2>Introduction</h2>
      <p>User experience design continues to evolve with new technologies and user expectations.</p>
      
      <h2>Emerging Trends</h2>
      <p>Several trends are shaping the future of UX design in 2024.</p>
      
      <h3>1. Voice User Interfaces</h3>
      <p>Voice interactions are becoming more prevalent in digital experiences.</p>
      
      <h3>2. Augmented Reality</h3>
      <p>AR is enhancing user experiences across various applications.</p>
      
      <h3>3. Personalization</h3>
      <p>Tailored experiences based on user behavior and preferences.</p>
    `,
    author: "Emily Rodriguez",
    publishDate: "2024-03-05",
    readTime: "7 min read",
    category: "Design & UX",
    image: {
      url: "/dubai.png",
      alt: "UX Design"
    },
    views: 1900,
    likes: 95,
    tags: ["UX", "Design", "Trends"]
  },
  {
    id: '6',
    title: "Digital Transformation in Healthcare",
    slug: "digital-transformation-healthcare",
    excerpt: "How technology is revolutionizing patient care and healthcare operations in the digital age.",
    content: `
      <h2>Introduction</h2>
      <p>Digital transformation is revolutionizing healthcare delivery and patient outcomes.</p>
      
      <h2>Key Technologies</h2>
      <p>Several technologies are driving change in healthcare.</p>
      
      <h3>1. Telemedicine</h3>
      <p>Remote consultations and virtual care delivery.</p>
      
      <h3>2. Electronic Health Records</h3>
      <p>Digital patient data management and sharing.</p>
      
      <h3>3. AI in Diagnostics</h3>
      <p>Machine learning for improved diagnosis and treatment planning.</p>
    `,
    author: "Sarah Johnson",
    publishDate: "2024-03-03",
    readTime: "9 min read",
    category: "Healthcare Tech",
    image: {
      url: "/dubai.png",
      alt: "Healthcare Technology"
    },
    views: 1400,
    likes: 67,
    tags: ["Healthcare", "Digital Transformation", "Technology"]
  }
]

export const fallbackCategories: Category[] = [
  { name: "Artificial Intelligence", slug: "artificial-intelligence", count: 15 },
  { name: "Cybersecurity", slug: "cybersecurity", count: 12 },
  { name: "Cloud Computing", slug: "cloud-computing", count: 18 },
  { name: "Software Development", slug: "software-development", count: 22 },
  { name: "Design & UX", slug: "design-ux", count: 14 },
  { name: "Digital Transformation", slug: "digital-transformation", count: 16 }
]
