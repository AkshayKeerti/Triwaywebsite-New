import { createClient } from 'contentful'

// Contentful CMS client configuration
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
})

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  author: string
  publishDate: string
  readTime: string
  category: string
  image: {
    url: string
    alt: string
  }
  views: number
  likes: number
  tags: string[]
}

export interface Category {
  name: string
  slug: string
  count: number
}

// Helper function to safely get image URL
const getImageUrl = (featuredImage: any): string => {
  try {
    if (featuredImage && typeof featuredImage === 'object' && featuredImage.fields?.file?.url) {
      return String(featuredImage.fields.file.url)
    }
  } catch (error) {
    console.error('Error parsing image URL:', error)
  }
  return '/dubai.png'
}

// Helper function to safely get image alt text
const getImageAlt = (featuredImage: any, title: any): string => {
  try {
    if (featuredImage && typeof featuredImage === 'object' && featuredImage.fields?.description) {
      return String(featuredImage.fields.description)
    }
  } catch (error) {
    console.error('Error parsing image alt:', error)
  }
  return String(title || 'Blog post image')
}

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
    })

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: String(item.fields.title || ''),
      slug: String(item.fields.slug || ''),
      excerpt: String(item.fields.excerpt || ''),
      content: String(item.fields.content || ''),
      author: String(item.fields.author || ''),
      publishDate: String(item.fields.publishDate || new Date().toISOString()),
      readTime: String(item.fields.readTime || '5 min read'),
      category: String(item.fields.category || 'General'),
      image: {
        url: getImageUrl(item.fields.featuredImage),
        alt: getImageAlt(item.fields.featuredImage, item.fields.title),
      },
      views: Number(item.fields.views || 0),
      likes: Number(item.fields.likes || 0),
      tags: Array.isArray(item.fields.tags) ? item.fields.tags.map(String) : [],
    }))
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export const getBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    })

    if (response.items.length === 0) {
      return null
    }

    const item = response.items[0]
    return {
      id: item.sys.id,
      title: String(item.fields.title || ''),
      slug: String(item.fields.slug || ''),
      excerpt: String(item.fields.excerpt || ''),
      content: String(item.fields.content || ''),
      author: String(item.fields.author || ''),
      publishDate: String(item.fields.publishDate || new Date().toISOString()),
      readTime: String(item.fields.readTime || '5 min read'),
      category: String(item.fields.category || 'General'),
      image: {
        url: getImageUrl(item.fields.featuredImage),
        alt: getImageAlt(item.fields.featuredImage, item.fields.title),
      },
      views: Number(item.fields.views || 0),
      likes: Number(item.fields.likes || 0),
      tags: Array.isArray(item.fields.tags) ? item.fields.tags.map(String) : [],
    }
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export const getCategories = async (): Promise<Category[]> => {
  try {
    const posts = await getBlogPosts()
    const categoryCount: { [key: string]: number } = {}
    
    posts.forEach(post => {
      categoryCount[post.category] = (categoryCount[post.category] || 0) + 1
    })

    return Object.entries(categoryCount).map(([name, count]) => ({
      name,
      slug: name.toLowerCase().replace(/\s+/g, '-'),
      count,
    }))
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}
