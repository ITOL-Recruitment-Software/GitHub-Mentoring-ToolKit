import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
}

export default function SectionLayout({ title, subtitle, children }: SectionLayoutProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12"
    >
      <header className="mb-8 sm:mb-10 pb-6 border-b border-[var(--color-github-border)]">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-github-text)]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-base sm:text-lg text-[var(--color-github-muted)] leading-relaxed">
            {subtitle}
          </p>
        )}
      </header>
      <div className="space-y-6 sm:space-y-8 text-[var(--color-github-text)]">{children}</div>
    </motion.article>
  )
}
