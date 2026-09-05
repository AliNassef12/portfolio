import { SectionHeading } from './SectionHeading'
import { education } from '../data/education'

export function Education() {
  return (
    <section id="education" className="border-t border-navy-600/10 py-20 dark:border-mist-300/10 sm:py-28">
      <div className="section-container">
        <SectionHeading index="05" title="Education & Training" />

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((item) => (
            <div
              key={item.degree}
              className="rounded-xl border border-navy-600/10 bg-white/60 p-6 dark:border-mist-300/10 dark:bg-navy-800/60"
            >
              <h3 className="font-display text-base font-semibold text-navy-900 dark:text-mist-100">
                {item.degree}
              </h3>
              <p className="mt-1 text-sm text-navy-700/80 dark:text-mist-200/75">
                {item.institution}
              </p>
              {item.period && (
                <p className="mt-1 text-sm text-navy-700/60 dark:text-mist-200/60">{item.period}</p>
              )}
              {item.details && (
                <ul className="mt-3 space-y-1">
                  {item.details.map((detail) => (
                    <li key={detail} className="text-sm text-navy-700/75 dark:text-mist-200/70">
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
