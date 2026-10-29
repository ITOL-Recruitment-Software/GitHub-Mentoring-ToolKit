import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function FixingCommits() {
  return (
    <SectionLayout
      title="Fixing Commit Mistakes"
      subtitle="Everyone makes mistakes in commits. Git gives you safe ways to correct the most recent commit and safer ways to adjust older history."
      eyebrow="Project 4 · Local Repository · 1.6.2"
    >
      <Callout variant="warning" title="Only amend commits that have not been pushed">
        Amending rewrites the commit SHA. If others already pulled the original commit, amending will cause confusion.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Amend the last commit</h2>
        <CodeBlock title="Change the message" language="bash" code={`git commit --amend -m "Better commit message"`} />
        <CodeBlock title="Add forgotten files to the last commit" language="bash" code={`git add forgotten-file.js\ngit commit --amend --no-edit`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Interactive rebase (advanced)</h2>
        <p className="text-sm text-[var(--color-github-muted)]">
          To edit, reorder, or squash several recent commits:
        </p>
        <CodeBlock title="Rebase the last 3 commits" language="bash" code={`git rebase -i HEAD~3`} />
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/git-reset" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Git Reset
          <ArrowRight size={15} />
        </Link>
        <Link to="/local-repo" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Local Repo
        </Link>
      </div>
    </SectionLayout>
  )
}
