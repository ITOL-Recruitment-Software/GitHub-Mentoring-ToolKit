import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import Callout from '../components/Callout'

export default function BestPractices() {
  return (
    <SectionLayout
      title="Best Practices"
      subtitle="A short list of habits that keep repositories healthy and collaboration pleasant."
      eyebrow="Reference · 1.7"
    >
      <section className="space-y-3">
        {[
          'Keep the default branch always deployable.',
          'Use short-lived feature branches and open pull requests early.',
          'Write clear commit messages that explain the why.',
          'Review every change — even your own — before merging.',
          'Protect the main branch with required reviews and status checks.',
          'Keep secrets out of the repository (use .gitignore and environment variables).',
          'Document how to run and contribute to the project in the README.',
          'Prefer revert over reset for commits that have already been shared.',
        ].map((item) => (
          <div key={item} className="flex gap-3 rounded-xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)] p-4">
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-400" />
            <p className="text-sm text-[var(--color-github-muted)]">{item}</p>
          </div>
        ))}
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/appendix" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Appendix
          <ArrowRight size={15} />
        </Link>
        <Link to="/mistakes" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Common Mistakes
        </Link>
      </div>
    </SectionLayout>
  )
}
