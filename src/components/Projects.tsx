import { SectionHeading } from './SectionHeading'
import { ProjectCard } from './ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section id="projects" className="border-t border-navy-600/10 py-20 dark:border-mist-300/10 sm:py-28">
      <div className="section-container">
        <SectionHeading
          index="06"
          title="Projects"
          description="Selected full stack, database, software engineering, signal-processing, and AI projects."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
