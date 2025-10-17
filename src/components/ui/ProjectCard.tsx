'use client'

import Image from 'next/image'
import Link from 'next/link'
import { socialFont } from '@/styles/fonts'

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  link?: string
  private?: boolean
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      key={project.title}
      className="flex flex-col items-start gap-8 rounded-lg p-6 transition sm:flex-row sm:items-stretch"
    >
      <div className="relative flex h-56 w-full items-center justify-center overflow-hidden rounded-lg sm:w-1/3">
        <Image
          src={project.image}
          alt={project.title}
          fill
          loading="lazy"
          className="object-fit"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between text-left">
        <div>
          <h2 className={`${socialFont.className} mb-3 text-2xl font-semibold`}>
            {project.title}
          </h2>

          <p className="mb-4 text-sm leading-relaxed opacity-90">
            {project.description}
          </p>

          <div className="mb-4 flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="rounded-md bg-neutral-200 px-2 py-0.5 text-xs dark:bg-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-2 flex gap-3">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-4 py-2 text-sm font-medium transition"
              style={{
                backgroundColor: 'var(--color-accent-dark)',
                color: 'var(--color-text-dark)',
              }}
            >
              GitHub
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-4 py-2 text-sm font-medium transition"
              style={{
                backgroundColor: 'var(--color-accent-light)',
                color: 'var(--color-text-dark)',
              }}
            >
              View Live
            </Link>
          )}
          {project.private && (
            <span
              className="cursor-not-allowed rounded-md px-4 py-2 text-sm font-medium opacity-40 transition"
              style={{
                backgroundColor: 'var(--color-accent-dark)',
                color: 'var(--color-text-dark)',
              }}
            >
              Private Project
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
