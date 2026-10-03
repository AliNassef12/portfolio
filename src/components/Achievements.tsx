import { SectionHeading } from './SectionHeading'

const certifications = [
  { title: 'Full Stack .NET Web Development — DEPI', period: 'July 2026 – February 2027' },
  { title: 'AI for You — Oracle University', period: 'August 2026' },
  { title: 'Forward Learners — McKinsey.org', period: 'June 2026' },
  { title: 'Digital Forensics — Mahara-Tech / MCIT', period: 'August 2025' },
  { title: 'Python Programming — Sprints × Microsoft', period: 'June 2025' },
  { title: 'Web Development — Sprints × Microsoft', period: 'June 2025' },
  { title: 'Digital Marketing — Sprints × Microsoft', period: 'June 2025' },
  { title: 'Problem Solving in C++ — Pixels', period: 'February 2025' },
  { title: 'Machine Learning — Pixels', period: 'February 2025' },
  { title: 'Full Stack Development — freeCodeCamp', period: '' },
  { title: 'English — British Council', period: 'June 2021 – August 2021' },
]

export function Achievements() {
  return (
    <section id="certifications" className="border-t border-navy-600/10 py-20 dark:border-mist-300/10 sm:py-28">
      <div className="section-container">
        <SectionHeading index="03" title="Certifications & Training" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item) => (
            <li key={item.title} className="rounded-xl border border-navy-600/10 bg-white/60 p-5 text-sm text-navy-800 dark:border-mist-300/10 dark:bg-navy-800/60 dark:text-mist-100">
              <p>{item.title}</p>
              {item.period && (
                <p className="mt-2 text-sm text-navy-700/60 dark:text-mist-200/60">{item.period}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
