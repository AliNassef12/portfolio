import { SectionHeading } from './SectionHeading'
import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="section-container">
        <SectionHeading index="01" title="About Me" />
        <div className="max-w-3xl">
          <p className="text-base leading-relaxed text-navy-700/90 dark:text-mist-200/85">
            I&apos;m {profile.name}, a Full Stack Developer and engineering student experienced in
            frontend and backend development with the MERN Stack and Django, and currently
            training in Full Stack .NET development. I build responsive web applications,
            RESTful APIs, authentication flows, and integrations backed by relational and NoSQL
            database design.
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy-700/90 dark:text-mist-200/85">
            I&apos;m also familiar with machine learning and AI API integration. I&apos;m interested in
            software engineering and complete web application development, using Git and GitHub
            alongside practical debugging, problem solving, and API integration.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-navy-900 dark:text-mist-100">
            <strong className="font-bold">Turning Your Vision into Intelligent Digital Experiences</strong>
          </p>
        </div>
      </div>
    </section>
  )
}
