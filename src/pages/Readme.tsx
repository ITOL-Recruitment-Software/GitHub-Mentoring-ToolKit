import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import Callout from '../components/Callout'

export default function Readme() {
  return (
    <SectionLayout
      title="README Files"
      subtitle="A good README is the front door of your project. It tells visitors what the project is, how to use it, and how to contribute."
      eyebrow="Reference · 1.7"
    >
      <Callout variant="note" title="From the Training Manual">
        Every repository should have a README.md at the root. GitHub automatically renders it on the repository home page.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Recommended sections</h2>
        <ul className="space-y-2 text-sm text-[var(--color-github-muted)]">
          <li>• Project title and one-sentence description</li>
          <li>• Badges (build status, license, version)</li>
          <li>• Features / what it does</li>
          <li>• Getting started / installation</li>
          <li>• Usage examples</li>
          <li>• Contributing guidelines (or link to CONTRIBUTING.md)</li>
          <li>• License</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/gitignore" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: .gitignore
          <ArrowRight size={15} />
        </Link>
        <Link to="/merge-strategies" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Merge Strategies
        </Link>
      </div>
    </SectionLayout>
  )
}
