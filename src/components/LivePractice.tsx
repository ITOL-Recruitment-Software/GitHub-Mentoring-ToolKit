import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface LivePracticeProps {
  title: string
  subtitle?: string
  children: ReactNode
  onReset?: () => void
  /** github = web UI practice, terminal = Git Bash practice */
  variant?: 'default' | 'github' | 'terminal'
}

export default function LivePractice({
  title,
  subtitle,
  children,
  onReset,
  variant = 'default',
}: LivePracticeProps) {
  const badge =
    variant === 'github'
      ? 'GITHUB UI'
      : variant === 'terminal'
      ? 'GIT BASH'
      : 'LIVE PRACTICE'

  const badgeClass =
    variant === 'github'
      ? 'bg-[var(--color-github-purple)]/20 text-[var(--color-github-purple)]'
      : variant === 'terminal'
      ? 'bg-[var(--color-github-accent)]/20 text-[var(--color-github-accent)]'
      : 'bg-[var(--color-github-accent)]/20 text-[var(--color-github-accent)]'

  return (
    <section className="mt-12 pt-8 border-t border-[var(--color-github-border)]">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
        <div className="min-w-0">
          <span className={`inline-block text-[10px] font-semibold tracking-wider px-2 py-0.5 rounded ${badgeClass}`}>
            {badge}
          </span>
          <h2 className="text-xl font-semibold mt-2 text-[var(--color-github-text)] tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-[var(--color-github-muted)] mt-1.5 leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
        {onReset && (
          <button
            type="button"
            onClick={onReset}
            className="shrink-0 self-start text-sm text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] transition px-3 py-1.5 rounded-md border border-[var(--color-github-border)] hover:border-[var(--color-github-muted)]"
          >
            Reset
          </button>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="space-y-4"
      >
        {children}
      </motion.div>
    </section>
  )
}
