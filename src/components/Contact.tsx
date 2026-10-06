import { ExternalLink, Github, Linkedin, Mail, MessageCircle, Phone } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <section id="contact" className="border-t border-navy-600/10 py-20 dark:border-mist-300/10 sm:py-28">
      <div className="section-container">
        <SectionHeading
          index="08"
          title="Contact"
          description="I'm open to internship, freelance, and junior developer opportunities. Feel free to reach out."
        />

        <div className="flex flex-wrap gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone}`}
            aria-label={`Call Ali Mohamed Nassef at ${profile.phone}`}
            className="inline-flex items-center gap-2 rounded-lg border border-navy-600/20 px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-accent-500/40 hover:text-accent-500 dark:border-mist-300/20 dark:text-mist-100 dark:hover:text-accent-400"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with Ali Mohamed Nassef on WhatsApp"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-600/20 px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-accent-500/40 hover:text-accent-500 dark:border-mist-300/20 dark:text-mist-100 dark:hover:text-accent-400"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-600/20 px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-accent-500/40 hover:text-accent-500 dark:border-mist-300/20 dark:text-mist-100 dark:hover:text-accent-400"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Connect with Ali Mohamed Nassef on LinkedIn"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-600/20 px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-accent-500/40 hover:text-accent-500 dark:border-mist-300/20 dark:text-mist-100 dark:hover:text-accent-400"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a
            href={profile.portfolio}
            target="_blank"
            rel="noreferrer"
            aria-label="Open Ali Mohamed Nassef's portfolio"
            className="inline-flex items-center gap-2 rounded-lg border border-navy-600/20 px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-accent-500/40 hover:text-accent-500 dark:border-mist-300/20 dark:text-mist-100 dark:hover:text-accent-400"
          >
            <ExternalLink size={16} />
            Portfolio
          </a>
        </div>
      </div>
    </section>
  )
}
