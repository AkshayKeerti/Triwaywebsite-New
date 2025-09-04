import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'

export interface RichTextProps {
  content?: any
}

export function RichText(props: RichTextProps) {
  if (!props.content) {
    return null
  }

  // Custom renderer for embedded assets (images)
  const options = {
    renderNode: {
      'embedded-asset-block': (node: any) => {
        // Access the file URL correctly from Contentful's asset structure
        const fileUrl = node.data.target.fields?.file?.url
        const description = node.data.target.fields?.description
        const width = node.data.target.fields?.file?.details?.image?.width || 800
        const height = node.data.target.fields?.file?.details?.image?.height || 600
        
        if (!fileUrl) {
          return <div className="my-6 text-gray-500">Image not available</div>
        }
        
        return (
          <div className="my-6">
            <Image
              src={`https:${fileUrl}`}
              alt={description || 'Rich text image'}
              width={width}
              height={height}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )
      },
    },
  }

  return (
    <article className="prose prose-lg max-w-none">
      {documentToReactComponents(props.content as any, options)}
    </article>
  )
}
