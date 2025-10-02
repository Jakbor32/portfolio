import Link from 'next/link'

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Hello World</h1>
      <Link
        href="/projects"
        className="text-accent-light dark:text-accent-dark"
      >
        Projects
      </Link>
    </section>
  )
}
