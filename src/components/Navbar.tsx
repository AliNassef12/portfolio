import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
  activeSection: string
}

const links = [
  { href: '#about', label: 'About' },
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Training' },
  { href: '#languages', label: 'Languages' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar({ theme, onToggleTheme, activeSection }: NavbarProps) {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-navy-600/10 bg-mist-100/80 backdrop-blur-md dark:border-mist-300/10 dark:bg-navy-900/80">
      <nav className="section-container flex h-16 items-center justify-between">
        <a
          href="#home"
          className="font-display text-base font-semibold tracking-tight text-navy-900 dark:text-mist-100"
        >
          Ali Nassef
        </a>

        <ul className="hidden items-center gap-0.5 lg:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-accent-500 dark:text-accent-400'
                      : 'text-navy-700/80 hover:text-navy-900 dark:text-mist-200/70 dark:hover:text-mist-100'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-600/15 text-navy-700 dark:border-mist-300/15 dark:text-mist-200 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-navy-600/10 bg-mist-100 px-6 py-4 dark:border-mist-300/10 dark:bg-navy-900 lg:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-2 py-2.5 text-sm font-medium text-navy-700 dark:text-mist-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
