import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export interface RichTextProps {
  content?: any
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
