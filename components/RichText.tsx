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
        const { url, width, height, description } = node.data.target.fields
        
        return (
          <div className="my-6">
            <Image
              src={`https:${url}`}
              alt={description || 'Rich text image'}
              width={width || 800}
              height={height || 600}
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
