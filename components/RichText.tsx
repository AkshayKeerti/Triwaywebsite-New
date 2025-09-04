import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { RichTextContent } from 'contentful'

export interface RichTextProps {
  content?: RichTextContent
}

export function RichText(props: RichTextProps) {
  if (!props.content) {
    return null
  }

  return (
    <article className="prose prose-lg max-w-none">
      {documentToReactComponents(props.content as any)}
    </article>
  )
}
