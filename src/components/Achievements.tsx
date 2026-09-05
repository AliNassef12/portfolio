import { SectionHeading } from './SectionHeading'
import { softSkills } from '../data/skills'

// Add real awards, certifications, or leadership roles here as they become available.
const achievements: string[] = [
  // [ADD ACHIEVEMENT OR AWARD]
  // [ADD CERTIFICATION]
  // [ADD LEADERSHIP ROLE]
]

export function Achievements() {
  return (
    <section
      id="achievements"
      className="border-t border-navy-600/10 py-20 dark:border-mist-300/10 sm:py-28"
    >
      <div className="section-container">
        <SectionHeading index="06" title="Achievements & Leadership" />

        {achievements.length > 0 ? (
          <ul className="grid gap-4 sm:grid-cols-2">
            {achievements.map((item) => (
              <li
                key={item}
                className="rounded-xl border border-navy-600/10 bg-white/60 p-5 text-sm text-navy-800 dark:border-mist-300/10 dark:bg-navy-800/60 dark:text-mist-100"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : (
          <div className="rounded-xl border border-dashed border-navy-600/20 p-6 text-sm text-navy-700/70 dark:border-mist-300/20 dark:text-mist-200/70">
            <p>
              Awards, certifications, and leadership highlights will appear here. Edit{' '}
              <code className="rounded bg-navy-600/10 px-1.5 py-0.5 dark:bg-mist-100/10">
                src/components/Achievements.tsx
              </code>{' '}
              to add them.
            </p>
            <p className="mt-3">
              In the meantime, here are the strengths I bring to any team:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {softSkills.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
