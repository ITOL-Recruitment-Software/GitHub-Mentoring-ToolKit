import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionLayoutProps {
  title: string
  subtitle?: string
  children: ReactNode
  fullWidth?: boolean
  eyebrow?: string
}

export default function SectionLayout({
  title,
  subtitle,
  children,
  fullWidth = true,
  eyebrow = 'GitHub Mentoring Toolkit',
}: SectionLayoutProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`w-full ${fullWidth ? 'max-w-none mx-0' : 'max-w-3xl lg:max-w-4xl mx-auto'} px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8 lg:py-10 box-border`}
    >
      <header className="mb-7 sm:mb-9 pb-5 border-b border-[var(--color-github-border)]">
        <p className="mb-2.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300/90">
          {eyebrow}
        </p>
        <h1 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-bold tracking-tight text-[var(--color-github-text)] break-words leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3.5 max-w-3xl text-[15px] sm:text-base text-[var(--color-github-muted)] leading-relaxed break-words">
            {subtitle}
          </p>
        )}
      </header>
      <div className="min-w-0 space-y-7 sm:space-y-8 text-[var(--color-github-text)]">
        {children}
      </div>
    </motion.article>
  )
}
