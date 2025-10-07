type TitleProps = {
  title: string
  font: string
  className?: string
}

export default function Title({ title, font, className }: TitleProps) {
  return (
    <h1
      className={`${font} mb-4 text-lg font-semibold text-gray-700 dark:text-gray-300 ${className ?? ''}`}
    >
      {title}
    </h1>
  )
}
