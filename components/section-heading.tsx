import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  centered = false,
  inverted = false,
}: {
  eyebrow: string
  title: string
  centered?: boolean
  inverted?: boolean
}) {
  return (
    <div className={cn(centered && 'mx-auto max-w-2xl text-center')}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2
        className={cn(
          'mt-3 text-balance text-3xl font-bold sm:text-4xl',
          inverted ? 'text-white' : 'text-secondary',
        )}
      >
        {title}
      </h2>
      <span
        className={cn('mt-5 block h-1 w-14 rounded-full bg-primary', centered && 'mx-auto')}
        aria-hidden="true"
      />
    </div>
  )
}
