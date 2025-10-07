type HeadlineProps = {
  headline: string
  font: string
}

export default function Headline({ headline, font }: HeadlineProps) {
  return (
    <h1
      className={`${font} mb-6 text-5xl leading-tight tracking-tight whitespace-pre-line text-gray-900 md:text-6xl dark:text-gray-100`}
    >
      {headline}
    </h1>
  )
}
