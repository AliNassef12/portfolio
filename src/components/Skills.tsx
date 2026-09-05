import { SectionHeading } from './SectionHeading'
import { skillGroups, softSkills } from '../data/skills'

export function Skills() {
  return (
    <section id="skills" className="border-t border-navy-600/10 py-20 dark:border-mist-300/10 sm:py-28">
      <div className="section-container">
        <SectionHeading index="02" title="Technical Skills" />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-xl border border-navy-600/10 bg-white/60 p-5 dark:border-mist-300/10 dark:bg-navy-800/60"
            >
              <h3 className="font-display text-sm font-semibold text-navy-900 dark:text-mist-100">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="badge">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-navy-700 dark:text-mist-200">
            Soft Skills
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <span key={skill} className="badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
