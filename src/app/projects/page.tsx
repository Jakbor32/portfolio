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
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-6">Hello World</h1>
      <Link href="/">Back to Home</Link>
    </section>
  )
}
