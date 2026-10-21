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
      className="w-full max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 box-border"
    >
      <header className="mb-6 sm:mb-8 pb-5 border-b border-[var(--color-github-border)]">
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--color-github-text)] break-words">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-base sm:text-lg text-[var(--color-github-muted)] leading-relaxed break-words">
            {subtitle}
          </p>
        )}
      </header>
      <div className="space-y-6 sm:space-y-8 text-[var(--color-github-text)] min-w-0">
        {children}
      </div>
    </motion.article>
  )
}
