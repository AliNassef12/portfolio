import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-navy-600/10 bg-white/60 p-6 transition-colors hover:border-accent-500/30 dark:border-mist-300/10 dark:bg-navy-800/60">
      <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-mist-100">
        {project.title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-navy-700/85 dark:text-mist-200/80">
        {project.description}
      </p>

      <ul className="mt-4 space-y-1.5">
        {project.details.map((detail, i) => (
          <li
            key={i}
            className="flex gap-2 text-sm leading-relaxed text-navy-700/75 dark:text-mist-200/70"
          >
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500/70 dark:bg-accent-400/70" />
            {detail}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-navy-600/10 pt-4 text-sm font-medium dark:border-mist-300/10">
        {project.repoUrl ? (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-navy-800 hover:text-accent-500 dark:text-mist-100 dark:hover:text-accent-400"
          >
            <Github size={15} /> Repository
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-navy-700/40 dark:text-mist-200/40">
            <Github size={15} /> Repository — coming soon
          </span>
        )}

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-navy-800 hover:text-accent-500 dark:text-mist-100 dark:hover:text-accent-400"
          >
            <ExternalLink size={15} /> Live Demo
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-navy-700/40 dark:text-mist-200/40">
            <ExternalLink size={15} /> Demo — coming soon
          </span>
        )}
      </div>
    </article>
  )
}
