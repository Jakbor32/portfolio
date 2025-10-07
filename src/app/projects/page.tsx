import Link from 'next/link'
import type { Metadata } from 'next'
import { defaultMetadata } from '@/lib/seo'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Projects – Jakub Borowy',
  description:
    'Jakub Borowy IT projects: automation workflows, PowerApps, PowerShell scripts, and web applications.',
}

export default function Projects() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="mb-6 text-4xl font-bold">Hello World</h1>
      <Link
        href="/"
        className="text-accent-light dark:text-accent-dark hover:underline"
      >
        Back to Home
      </Link>
    </section>
  )
}
