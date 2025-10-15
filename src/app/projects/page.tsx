import type { Metadata } from 'next'
import { defaultMetadata } from '@/lib/seo'
import Projects from '@/components/Projects'

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Projects – Jakub Borowy',
  description:
    'Jakub Borowy IT projects: automation workflows, PowerApps, PowerShell scripts, and web applications.',
}

export default function ProjectsPage() {
  return <Projects />
}
