import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/profile'

const barHeights = [30, 55, 40, 70, 45, 85, 50, 65, 35, 60, 42, 75]

export function Hero() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-navy-600/10 bg-mist-100 dark:border-mist-300/10 dark:bg-navy-900"
    >
      <div className="absolute inset-0 bg-grid-lines bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_10%,transparent_75%)]" />

      <div className="section-container relative flex min-h-[88vh] flex-col justify-center py-24">
        <div className="grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-8">
          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="mb-6 flex items-end gap-1" aria-hidden="true">
              {barHeights.map((h, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-accent-500/70 dark:bg-accent-400/70 animate-wave"
                  style={{ height: `${h * 0.35}px`, animationDelay: `${i * 90}ms` }}
                />
              ))}
            </div>

            <p className="font-display text-sm font-medium text-accent-500 dark:text-accent-400">
              Hi, I'm
            </p>
            <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-navy-900 dark:text-mist-100 sm:text-5xl md:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 font-display text-lg font-medium text-navy-700 dark:text-mist-200 sm:text-xl">
              {profile.title}
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-700/80 dark:text-mist-200/75">
              {profile.usp}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-600"
              >
                View My Projects
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href={profile.cvPath}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-navy-600/20 px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-accent-500/40 hover:text-accent-500 dark:border-mist-300/20 dark:text-mist-100 dark:hover:text-accent-400"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="text-navy-700/70 transition-colors hover:text-accent-500 dark:text-mist-200/60 dark:hover:text-accent-400"
              >
                <Github size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="text-navy-700/70 transition-colors hover:text-accent-500 dark:text-mist-200/60 dark:hover:text-accent-400"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
            className="relative mx-auto w-full max-w-xs md:max-w-none"
          >
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent-500/20 via-transparent to-accent-400/10 blur-xl" aria-hidden="true" />
            <div className="relative overflow-hidden rounded-2xl border border-navy-600/15 dark:border-mist-300/15">
              <img
                src={`${import.meta.env.BASE_URL}images/ali-nassef.png`}
                alt={`Portrait of ${profile.name}`}
                className="aspect-[3/4] w-full object-cover"
                width={480}
                height={640}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
