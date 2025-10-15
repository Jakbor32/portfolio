'use client'

import { headlineFont } from '@/styles/fonts'
import Link from 'next/link'
import { projects } from '@/constants/content'
import ProjectCard from './ui/ProjectCard'

export default function Projects() {
  return (
    <section className="flex min-h-screen flex-col items-start justify-start px-4 py-10 transition-colors">
      <div className="animate-fadeInBlur container mx-auto max-w-5xl">
        <h1
          className={`${headlineFont.className} mb-12 text-center text-4xl font-semibold`}
        >
          Projects
        </h1>

        <div className="flex flex-col gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link href="/" className="underline">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  )
}
