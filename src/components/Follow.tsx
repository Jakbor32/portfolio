type FollowProps = {
  follow: string
  font: string
}

export default function Follow({ follow, font }: FollowProps) {
  return (
    <p
      className={`${font} mb-2 max-w-2xl text-xl text-gray-700 md:text-2xl dark:text-gray-300`}
    >
      {follow}
    </p>
  )
}
