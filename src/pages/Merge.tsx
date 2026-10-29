import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function Merge() {
  return (
    <SectionLayout
      title="Merging Pull Requests"
      subtitle="When the changes in a pull request are approved, the feature branch is merged into the main branch. The project moves forward with the new work included."
      eyebrow="Project 1 · Caption This · 1.3.6"
    >
      <Callout variant="note" title="From the Training Manual">
        When the changes contained in the pull request are approved, the feature branch is merged onto the main branch.
        In practice most teams do this through the GitHub web UI, which also gives you options for how the history is recorded.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Merge via the GitHub UI</h2>
        <p className="text-sm leading-relaxed text-[var(--color-github-muted)]">
          On the pull request page you will see a green “Merge pull request” button (when all required checks and reviews have passed).
          GitHub offers three common strategies:
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { title: 'Create a merge commit', desc: 'Preserves the exact history of the feature branch.' },
            { title: 'Squash and merge', desc: 'Combines all commits into a single commit on main.' },
            { title: 'Rebase and merge', desc: 'Replays the commits on top of main without a merge commit.' },
          ].map((s) => (
            <div key={s.title} className="lesson-card p-4">
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-github-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Merge from the command line</h2>
        <CodeBlock title="Classic merge" language="bash" code={`git switch main\ngit pull origin main\ngit merge feature/add-caption\ngit push origin main`} />
      </section>

      <Callout variant="tip" title="Delete the branch after merge">
        Once the feature is on main, delete the feature branch (both locally and on GitHub) to keep the repository tidy.
        GitHub offers a button for this right after the merge.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/local-history" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Local History
          <ArrowRight size={15} />
        </Link>
        <Link to="/pull-requests" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Pull Requests
        </Link>
      </div>
    </SectionLayout>
  )
}
