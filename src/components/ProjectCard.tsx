import { ExternalLink, Github } from 'lucide-react'
import type { Project } from '../types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-navy-600/10 bg-white/60 p-6 transition-colors hover:border-accent-500/30 dark:border-mist-300/10 dark:bg-navy-800/60">
      <h3 className="font-display text-lg font-semibold text-navy-900 dark:text-mist-100">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-navy-700/85 dark:text-mist-200/80">{project.description}</p>
      <ul className="mt-4 space-y-1.5">{project.details.map((detail) => <li key={detail} className="flex gap-2 text-sm leading-relaxed text-navy-700/75 dark:text-mist-200/70"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500/70" aria-hidden="true" />{detail}</li>)}</ul>
      <div className="mb-5 mt-5 flex flex-wrap gap-2">{project.technologies.map((tech) => <span key={tech} className="badge">{tech}</span>)}</div>
      {(project.repoUrl || project.demoUrl) && <div className="mt-auto flex flex-wrap items-center gap-4 border-t border-navy-600/10 pt-4 text-sm font-medium dark:border-mist-300/10">
        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} source code on GitHub`} className="inline-flex items-center gap-1.5 text-navy-800 hover:text-accent-500 dark:text-mist-100 dark:hover:text-accent-400"><Github size={15} /> GitHub</a>}
        {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Open the ${project.title} live demo`} className="inline-flex items-center gap-1.5 text-navy-800 hover:text-accent-500 dark:text-mist-100 dark:hover:text-accent-400"><ExternalLink size={15} /> Live Demo</a>}
      </div>}
    </article>
  )
}
