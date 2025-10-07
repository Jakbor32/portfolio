type HeadlineProps = {
  headline: string
  font: string
  className?: string
}

export default function Headline({ headline, font, className }: HeadlineProps) {
  return (
    <h2
      className={`${font} mb-6 text-5xl leading-tight tracking-tight whitespace-pre-line text-gray-900 md:text-6xl dark:text-gray-100 ${className ?? ''}`}
    >
      {headline}
    </h2>
  )
}
