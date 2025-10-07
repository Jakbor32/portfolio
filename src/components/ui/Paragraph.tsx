import ReactMarkdown from 'react-markdown'

type ParagraphProps = {
  children: string
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <ReactMarkdown
      components={{
        p: ({ node, ...props }) => (
          <p
            className="mb-6 max-w-2xl text-base text-gray-600 md:text-lg dark:text-gray-400"
            {...props}
          />
        ),
        a: ({ node, ...props }) => (
          <a className="text-amber-800 underline" {...props} />
        ),
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
