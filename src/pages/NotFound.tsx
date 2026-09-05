import { profile } from '../data/profile'

// This component isn't wired into routing (the site has no router — it's a
// single scrolling page). It's kept for reference in case you later add
// react-router and want an in-app 404 view. The GitHub Pages 404 that
// visitors actually see for unknown URLs lives in `public/404.html`.
export function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-mist-100 px-6 text-center dark:bg-navy-900">
      <h1 className="font-display text-3xl font-bold text-navy-900 dark:text-mist-100">
        Page not found
      </h1>
      <p className="text-navy-700/80 dark:text-mist-200/75">
        The page you're looking for doesn't exist.
      </p>
      <a
        href="#home"
        className="rounded-lg bg-accent-500 px-5 py-3 text-sm font-semibold text-white hover:bg-accent-600"
      >
        Back to {profile.name.split(' ')[0]}'s portfolio
      </a>
    </div>
  )
}
