import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-1">
      <h1 className="text-4xl font-bold mb-6">Hello World</h1>
      <Link href="/projects">Projects</Link>
    </div>
  )
}
