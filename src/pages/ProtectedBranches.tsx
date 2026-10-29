import { Link } from 'react-router-dom'
import { ArrowRight, Shield, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import Callout from '../components/Callout'

export default function ProtectedBranches() {
  return (
    <SectionLayout
      title="Protected Branches & CODEOWNERS"
      subtitle="Protect the default branch so that changes can only land after review and required checks pass. CODEOWNERS automatically requests the right reviewers."
      eyebrow="Project 3 · GitHub Games · 1.5.2"
    >
      <Callout variant="note" title="Why protect main?">
        Branch protection rules prevent accidental force-pushes, require pull-request reviews, and can enforce status checks
        (tests, linting, security scans) before a merge is allowed.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Typical protection rules</h2>
        <ul className="space-y-2.5 text-sm text-[var(--color-github-muted)]">
          <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" /> Require a pull request before merging</li>
          <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" /> Require at least one approving review</li>
          <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" /> Require status checks to pass</li>
          <li className="flex gap-2"><CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" /> Block force pushes and branch deletion</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">CODEOWNERS</h2>
        <p className="text-sm leading-relaxed text-[var(--color-github-muted)]">
          Place a <code className="inline-code">CODEOWNERS</code> file in the root, <code className="inline-code">.github/</code>, or <code className="inline-code">docs/</code> directory.
          GitHub will automatically request reviews from the listed owners when matching files change.
        </p>
        <div className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-4 font-mono text-xs text-emerald-300">
          <pre>{`# .github/CODEOWNERS\n*.js    @frontend-team\n/docs/  @docs-team\n*`}</pre>
        </div>
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/git-bisect" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Git Bisect
          <ArrowRight size={15} />
        </Link>
        <Link to="/workflow-review" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Workflow Review
        </Link>
      </div>
    </SectionLayout>
  )
}
