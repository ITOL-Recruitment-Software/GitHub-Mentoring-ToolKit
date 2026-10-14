import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface LivePracticeProps {
  title: string
  subtitle?: string
  children: ReactNode
  onReset?: () => void
}

export default function LivePractice({ title, subtitle, children, onReset }: LivePracticeProps) {
  return (
    <div className="mt-10 pt-8 border-t border-[var(--color-github-border)]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="text-xs font-medium px-2 py-1 rounded bg-[var(--color-github-accent)]/20 text-[var(--color-github-accent)]">
            LIVE PRACTICE
          </span>
          <h2 className="text-xl font-semibold mt-2 text-[var(--color-github-text)]">{title}</h2>
          {subtitle && (
            <p className="text-sm text-[var(--color-github-muted)] mt-1">{subtitle}</p>
          )}
        </div>
        {onReset && (
          <button
            onClick={onReset}
            className="text-sm text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] transition px-3 py-1.5 rounded border border-[var(--color-github-border)] hover:border-[var(--color-github-accent)]/50"
          >
            Reset
          </button>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-4"
      >
        {children}
      </motion.div>
    </div>
  )
}
