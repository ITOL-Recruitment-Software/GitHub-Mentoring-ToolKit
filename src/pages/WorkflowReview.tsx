import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import Callout from '../components/Callout'

export default function WorkflowReview() {
  return (
    <SectionLayout
      title="Workflow Review"
      subtitle="A quick recap of the GitHub Flow before we move into more advanced collaboration features."
      eyebrow="Project 3 · GitHub Games · 1.5.1"
    >
      <Callout variant="note" title="The essential loop">
        Branch → Commit → Open a Pull Request → Review → Merge. Everything else builds on this foundation.
      </Callout>

      <section className="space-y-3">
        {[
          { step: '1', title: 'Create a feature branch', desc: 'Keep main stable while you experiment.' },
          { step: '2', title: 'Make focused commits', desc: 'Each commit is a clear, reviewable snapshot.' },
          { step: '3', title: 'Open a pull request early', desc: 'Invite feedback before the work is “finished”.' },
          { step: '4', title: 'Discuss and improve', desc: 'Respond to reviews and push more commits to the same branch.' },
          { step: '5', title: 'Merge when ready', desc: 'Integrate the approved change into the default branch.' },
        ].map((s) => (
          <div key={s.step} className="flex gap-4 rounded-xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)] p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-sm font-bold text-emerald-300">{s.step}</div>
            <div>
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <p className="mt-0.5 text-sm text-[var(--color-github-muted)]">{s.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/protected-branches" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Protected Branches
          <ArrowRight size={15} />
        </Link>
        <Link to="/conflicts" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Merge Conflicts
        </Link>
      </div>
    </SectionLayout>
  )
}
