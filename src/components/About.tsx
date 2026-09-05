import { SectionHeading } from './SectionHeading'
import { profile } from '../data/profile'
import { languages } from '../data/skills'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading index="01" title="About Me" />

        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-base leading-relaxed text-navy-700/90 dark:text-mist-200/85">
              I'm {profile.name}, a full-stack developer and AI engineering student. I enjoy
              working across the stack — from building usable interfaces to designing databases
              and experimenting with machine learning and signal-processing projects. My
              background spans web development, electronics, and AI, and I like turning technical
              ideas into things people can actually use.
            </p>
            <p className="mt-4 text-base leading-relaxed text-navy-700/90 dark:text-mist-200/85">
              I'm currently studying Intelligent Systems Engineering, with hands-on experience
              from internships and training programs in AI, electronics, and full-stack
              development. I'm looking for internship, freelance, and junior developer
              opportunities where I can keep learning and contribute to practical projects.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-navy-700 dark:text-mist-200">
              Languages
            </h3>
            <ul className="mt-4 space-y-3">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between text-sm">
                  <span className="text-navy-800 dark:text-mist-100">{lang.name}</span>
                  <span className="text-navy-700/60 dark:text-mist-200/60">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
