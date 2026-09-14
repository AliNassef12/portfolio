import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-600/10 py-8 dark:border-mist-300/10">
      <div className="section-container flex flex-col items-center justify-between gap-3 text-center text-sm text-navy-700/60 dark:text-mist-200/60 sm:flex-row sm:text-left">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <p>{profile.name} · Full Stack Developer</p>
        <a href={profile.github} target="_blank" rel="noreferrer" className="font-medium hover:text-accent-500 dark:hover:text-accent-400">GitHub</a>
      </div>
    </footer>
  )
}
