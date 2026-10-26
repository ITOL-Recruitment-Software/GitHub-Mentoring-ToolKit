import { Link } from 'react-router-dom'
import { ArrowRight, GitCompare } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function MergeStrategies() {
  return (
    <SectionLayout title="Merge Strategies & Rebase" subtitle="Understand how Git combines lines of work and when to preserve or replay commits.">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><GitCompare size={20} /></div>
          <h2 className="mt-4 text-lg font-semibold">Merge</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Combines two histories. A fast-forward merge moves the branch pointer when no divergent history needs joining; a three-way merge can create a merge commit with both parents.</p>
        </article>
        <article className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300"><GitCompare size={20} /></div>
          <h2 className="mt-4 text-lg font-semibold">Rebase</h2>
          <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Replays your commits on top of a new base, creating new commit IDs. This can make a feature branch easier to follow, but it rewrites the branch's commit history.</p>
        </article>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Update a feature branch with main</h2>
        <CodeBlock title="Rebase workflow" code={`git status
git switch feature/my-change
git fetch origin
git rebase origin/main
# resolve conflicts if Git pauses
git add path/to/resolved-file
git rebase --continue`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">If you need to abandon the rebase, use <code>git rebase --abort</code>. Only stage the files you have resolved, and run your checks before continuing with the work.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Choose how to merge</h2>
        <CodeBlock title="Fast-forward or explicit merge commit" code={`git switch main
git merge --ff-only feature/my-change
# or, if your team wants a merge commit:
git merge --no-ff feature/my-change`} />
        <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-[var(--color-github-muted)]">
          <li><strong className="text-[var(--color-github-text)]">Fast-forward:</strong> no merge commit is needed when the target can move forward directly.</li>
          <li><strong className="text-[var(--color-github-text)]">Three-way merge:</strong> Git combines changes since the common ancestor; conflicts may need manual resolution.</li>
          <li><strong className="text-[var(--color-github-text)]">Squash merge:</strong> GitHub can combine a pull request's changes into one commit on the base branch.</li>
        </ul>
      </section>

      <div className="rounded-lg border border-amber-400/25 bg-amber-400/[0.06] p-4">
        <p className="font-semibold text-amber-200">Shared-branch safety</p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Avoid rebasing commits that other people already depend on unless your team has agreed on the recovery plan. For published shared history, prefer collaboration-friendly workflows and follow your repository's rules.</p>
      </div>

      <Link to="/protected-branches" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Learn about branch protection <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
