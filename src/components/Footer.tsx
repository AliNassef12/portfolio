import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-600/10 py-8 dark:border-mist-300/10">
      <div className="section-container flex flex-col items-center justify-between gap-2 text-sm text-navy-700/60 dark:text-mist-200/60 sm:flex-row">
        <p>© {year} {profile.name}. All rights reserved.</p>
        <p>Built with React, Vite & Tailwind CSS.</p>
      </div>
    </footer>
  )
}
