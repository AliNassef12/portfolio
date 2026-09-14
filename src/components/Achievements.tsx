import { SectionHeading } from './SectionHeading'

const certifications = [
  'Full Stack .NET Web Development — DEPI', 'AI for You — Oracle University',
  'Forward Learners — McKinsey.org', 'Digital Forensics — Mahara-Tech / MCIT',
  'Python Programming — Sprints × Microsoft', 'Web Development — Sprints × Microsoft',
  'Digital Marketing — Sprints × Microsoft', 'Problem Solving in C++ — Pixels',
  'Machine Learning — Pixels', 'Full Stack Development — freeCodeCamp', 'English — British Council',
]

export function Achievements() {
  return (
    <section id="certifications" className="border-t border-navy-600/10 py-20 dark:border-mist-300/10 sm:py-28">
      <div className="section-container">
        <SectionHeading index="06" title="Certifications & Training" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((item) => <li key={item} className="rounded-xl border border-navy-600/10 bg-white/60 p-5 text-sm text-navy-800 dark:border-mist-300/10 dark:bg-navy-800/60 dark:text-mist-100">{item}</li>)}
        </ul>
      </div>
    </section>
  )
}
