type ParagraphProps = {
  children: React.ReactNode
}

export default function Paragraph({ children }: ParagraphProps) {
  return (
    <p className="mb-6 max-w-2xl text-base md:text-lg text-gray-600 dark:text-gray-400">
      {children}
    </p>
  )
}
