import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function CherryPick() {
  return (
    <SectionLayout
      title="Cherry Picking"
      subtitle="Apply the changes from a specific commit onto your current branch without merging the whole branch."
      eyebrow="Project 4 · Local Repository · 1.6.4"
    >
      <Callout variant="note" title="When to cherry-pick">
        Useful for backporting a bug fix to a release branch, or bringing a single useful commit from an experimental branch
        without taking everything else.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic usage</h2>
        <CodeBlock title="Apply one commit" language="bash" code={`git cherry-pick abc1234`} />
        <CodeBlock title="Apply a range of commits" language="bash" code={`git cherry-pick abc1234..def5678`} />
      </section>

      <Callout variant="tip" title="Conflicts">
        Cherry-pick can produce conflicts just like a merge. Resolve them, stage the files, then run{' '}
        <code className="inline-code">git cherry-pick --continue</code>.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/merge-strategies" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Merge Strategies
          <ArrowRight size={15} />
        </Link>
        <Link to="/git-reset" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Git Reset
        </Link>
      </div>
    </SectionLayout>
  )
}
