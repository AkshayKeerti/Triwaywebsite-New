# Blog Setup Guide

## Contentful Integration

The blog is now integrated with Contentful CMS. Here's how to set it up:

### 1. Create a Contentful Account

1. Go to [contentful.com](https://contentful.com)
2. Sign up for a free account
3. Create a new space for your blog

### 2. Set Up Content Model

Create a content type called `blogPost` with these fields:

- **title** (Short text) - Required
- **slug** (Short text) - Required, unique
- **excerpt** (Long text) - Required
- **content** (Rich text) - Required
- **author** (Short text) - Required
- **publishDate** (Date) - Required
- **readTime** (Short text) - Required (e.g., "8 min read")
- **category** (Short text) - Required
- **featuredImage** (Media) - Optional
- **views** (Number) - Optional, default 0
- **likes** (Number) - Optional, default 0
- **tags** (Short text, multiple values) - Optional

### 3. Environment Variables

Create a `.env.local` file in your project root:

```env
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
```

### 4. Get Your Credentials

1. In Contentful, go to Settings > API keys
2. Create a new API key or use the default one
3. Copy the Space ID and Content Delivery API access token
4. Add them to your `.env.local` file

### 5. Create Your First Blog Post

1. In Contentful, go to Content > Add entry
2. Select the `blogPost` content type
3. Fill in all required fields
4. Publish the entry

### 6. Test the Integration

1. Run your development server: `npm run dev`
2. Visit `/blog` to see your blog posts
3. Click on a blog post to view the individual page

## Fallback Data

If Contentful is not configured, the blog will use fallback data that matches your existing design. This ensures the blog works immediately without any setup.

## Features

- ✅ Dynamic blog posts from Contentful
- ✅ Individual blog post pages
- ✅ Related posts suggestions
- ✅ Category filtering
- ✅ Search functionality (UI ready)
- ✅ SEO optimized
- ✅ Responsive design
- ✅ Fallback to static data

## Next Steps

1. Set up Contentful and add your first blog post
2. Customize the content model as needed
3. Add more blog posts
4. Consider adding analytics tracking
5. Set up email newsletter integration

## Migration Path

When you're ready to migrate to Strapi later:
1. Export content from Contentful
2. Import into Strapi
3. Update API endpoints in the code
4. No frontend changes needed
