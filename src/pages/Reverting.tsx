import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function Reverting() {
  return (
    <SectionLayout
      title="Reverting Commits"
      subtitle="git revert creates a new commit that undoes the changes of a previous commit. Unlike reset, it is safe for shared history."
      eyebrow="Project 3 · GitHub Games · 1.5.4"
    >
      <Callout variant="note" title="Revert vs Reset">
        <strong>Reset</strong> moves the branch pointer (rewrites history). Use only on commits that have not been pushed.
        <br />
        <strong>Revert</strong> adds a new commit that applies the inverse of the original change. Prefer this for published commits.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Revert a single commit</h2>
        <CodeBlock title="Create a revert commit" language="bash" code={`git revert abc1234`} />
        <p className="text-sm text-[var(--color-github-muted)]">
          Git opens an editor with a default message. Save and close to complete the revert.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Revert a merge commit</h2>
        <CodeBlock title="Specify the parent" language="bash" code={`git revert -m 1 <merge-commit-sha>`} />
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/helpful-commands" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Helpful Commands
          <ArrowRight size={15} />
        </Link>
        <Link to="/git-bisect" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Git Bisect
        </Link>
      </div>
    </SectionLayout>
  )
}
