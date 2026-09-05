import { SectionHeading } from './SectionHeading'
import { experience } from '../data/experience'

export function Experience() {
  return (
    <section id="experience" className="border-t border-navy-600/10 py-20 dark:border-mist-300/10 sm:py-28">
      <div className="section-container">
        <SectionHeading index="03" title="Experience" />

        <ol className="space-y-8 border-l border-navy-600/15 pl-6 dark:border-mist-300/15">
          {experience.map((item) => (
            <li key={`${item.organization}-${item.role}`} className="relative">
              <span
                className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-500 dark:bg-accent-400"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-base font-semibold text-navy-900 dark:text-mist-100">
                  {item.role} · {item.organization}
                </h3>
                {item.period && (
                  <span className="text-sm text-navy-700/60 dark:text-mist-200/60">
                    {item.period}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-navy-700/85 dark:text-mist-200/80">
                {item.summary}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
