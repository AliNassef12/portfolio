interface SectionHeadingProps {
  index: string
  title: string
  description?: string
}

export function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-start gap-4 sm:mb-14">
      <span className="mt-1 font-display text-sm font-semibold text-accent-500 dark:text-accent-400">
        {index}
      </span>
      <div>
        <h2 className="font-display text-2xl font-semibold text-navy-900 dark:text-mist-100 sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-2 max-w-xl text-sm text-navy-700/80 dark:text-mist-200/70">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
