import Link from 'next/link'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center flex-1 text-black dark:text-white">
      <h1 className="text-4xl font-bold mb-6">Hello World</h1>
      <Link href="/projects" className="text-blue-600 dark:text-blue-400">
        Projects
      </Link>
    </section>
  )
}
