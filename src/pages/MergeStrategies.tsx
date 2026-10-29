import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function MergeStrategies() {
  return (
    <SectionLayout
      title="Merge Strategies"
      subtitle="Git and GitHub offer several ways to combine branches. Choosing the right strategy keeps history clear and collaboration smooth."
      eyebrow="Project 4 · Local Repository · 1.6.5"
    >
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Common strategies</h2>
        <div className="space-y-3">
          {[
            { name: 'Merge commit', desc: 'Creates a new commit with two parents. Preserves exact branch history.' },
            { name: 'Fast-forward', desc: 'Simply moves the branch pointer forward when possible. No extra commit.' },
            { name: 'Squash', desc: 'Combines all commits from the feature branch into a single commit on the target.' },
            { name: 'Rebase', desc: 'Replays commits on top of the target branch, producing a linear history.' },
          ].map((s) => (
            <div key={s.name} className="lesson-card p-4">
              <h3 className="text-sm font-semibold">{s.name}</h3>
              <p className="mt-1 text-sm text-[var(--color-github-muted)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Command-line examples</h2>
        <CodeBlock title="Explicit merge strategies" language="bash" code={`git merge --no-ff feature/branch   # force a merge commit\ngit merge --ff-only feature/branch # only allow fast-forward\ngit merge --squash feature/branch  # stage a single combined change`} />
      </section>

      <Callout variant="tip" title="Team convention">
        Agree on one primary strategy (many teams prefer squash-and-merge for feature branches) and document it in CONTRIBUTING.md.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/readme" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: README files
          <ArrowRight size={15} />
        </Link>
        <Link to="/cherry-pick" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Cherry Pick
        </Link>
      </div>
    </SectionLayout>
  )
}
