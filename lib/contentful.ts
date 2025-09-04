import { createClient } from 'contentful'

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

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: ['-sys.createdAt'],
    })

    return response.items.map((item: any) => ({
      id: item.sys.id,
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      author: item.fields.author,
      publishDate: item.fields.publishDate,
      readTime: item.fields.readTime,
      category: item.fields.category,
      image: {
        url: item.fields.featuredImage?.fields?.file?.url || '/dubai.png',
        alt: item.fields.featuredImage?.fields?.description || item.fields.title,
      },
      views: item.fields.views || 0,
      likes: item.fields.likes || 0,
      tags: item.fields.tags || [],
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
      title: item.fields.title,
      slug: item.fields.slug,
      excerpt: item.fields.excerpt,
      content: item.fields.content,
      author: item.fields.author,
      publishDate: item.fields.publishDate,
      readTime: item.fields.readTime,
      category: item.fields.category,
      image: {
        url: item.fields.featuredImage?.fields?.file?.url || '/dubai.png',
        alt: item.fields.featuredImage?.fields?.description || item.fields.title,
      },
      views: item.fields.views || 0,
      likes: item.fields.likes || 0,
      tags: item.fields.tags || [],
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
