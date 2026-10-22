import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  fullWidth?: boolean
}

export default function SectionLayout({ title, subtitle, children, fullWidth = true }: SectionLayoutProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`w-full ${fullWidth ? 'max-w-none mx-0' : 'max-w-3xl lg:max-w-4xl mx-auto'} px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8 lg:py-10 box-border`}
    >
      <header className="mb-6 sm:mb-8 pb-5 border-b border-[var(--color-github-border)]">
        <p className="mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
          GitHub Mentoring Toolkit
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--color-github-text)] break-words">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-4xl text-base sm:text-lg text-[var(--color-github-muted)] leading-relaxed break-words">
            {subtitle}
          </p>
        )}
      </header>
      <div className="min-w-0 space-y-6 sm:space-y-8 text-[var(--color-github-text)]">
        {children}
      </div>
    </motion.article>
  )
}
