import { Moon, Sun } from 'lucide-react'

interface ThemeToggleProps {
  theme: 'light' | 'dark'
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-navy-600/15 text-navy-700 transition-colors hover:border-accent-500/40 hover:text-accent-500 dark:border-mist-300/15 dark:text-mist-200 dark:hover:text-accent-400"
    >
      {isDark ? <Sun size={17} strokeWidth={2} /> : <Moon size={17} strokeWidth={2} />}
    </button>
  )
}
