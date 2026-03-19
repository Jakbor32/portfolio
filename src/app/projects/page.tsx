import type { Metadata } from 'next'
import { projects } from '@/constants/content'
import ProjectCard from '@/components/ui/ProjectCard'
import Link from 'next/link'
import { headlineFont } from '@/styles/fonts'

export const metadata: Metadata = {
  title:
    'Projects | SharePoint, SPFx, Power Platform, Cloud Automation | Jakub Borowy',
  description:
    'Selected projects by Jakub Borowy across SharePoint Online, SPFx, Microsoft Graph, Power Platform, PowerShell automation, cloud infrastructure, and modern web development.',
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start px-4 py-10 transition-colors">
      <div className="animate-fadeInBlur container mx-auto max-w-5xl">
        <header>
          <h1
            className={`${headlineFont.className} mb-6 text-center text-4xl font-semibold`}
          >
            Projects
          </h1>
          <p className="mb-12 text-center text-base opacity-80">
            Selected projects across SharePoint Online, SPFx, Microsoft Graph,
            Power Platform, PowerShell automation,
            <br className="hidden sm:inline" />
            cloud infrastructure, and modern web development.
          </p>
        </header>
        <section className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
        <footer className="mt-20 text-center">
          <Link href="/" className="underline">
            Back to Home
          </Link>
        </footer>
      </div>
    </main>
  )
}
