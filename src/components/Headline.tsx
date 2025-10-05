type HeadlineProps = {
  headline: string
  font: string
}

export default function Headline({ headline, font }: HeadlineProps) {
  return (
    <h1
      className={`${font} mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 whitespace-pre-line leading-tight`}
    >
      {headline}
    </h1>
  )
}
