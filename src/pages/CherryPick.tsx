import { Link } from 'react-router-dom'
import { ArrowRight, GitCommitHorizontal } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function CherryPick() {
  return (
    <SectionLayout title="Cherry-Picking Commits" subtitle="Apply a specific commit from one branch onto another without merging the entire branch.">
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><GitCommitHorizontal size={20} /></div>
          <div><h2 className="font-semibold">When is cherry-pick useful?</h2><p className="mt-1 text-sm text-[var(--color-github-muted)]">Move one focused fix without bringing in unrelated commits.</p></div>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--color-github-muted)]">For example, a bug fix may already exist on a development branch but also be needed urgently on a release branch. Cherry-pick applies the selected change to your current branch and creates a new commit there.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Apply a commit safely</h2>
        <CodeBlock title="Find the commit and apply it" code={`git log --oneline --all
git switch release
git status
git cherry-pick abc1234`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">Replace <code>abc1234</code> with the real commit ID. Check that your working tree is clean before switching branches or applying the change.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">If a conflict occurs</h2>
        <CodeBlock title="Resolve and continue" code={`git status
# edit each conflicted file and remove conflict markers
git add path/to/resolved-file
git cherry-pick --continue`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">To stop the in-progress cherry-pick and return to the state before it began, use <code>git cherry-pick --abort</code>. Resolve and test the change before pushing it.</p>
      </section>

      <div className="rounded-lg border border-amber-400/25 bg-amber-400/[0.06] p-4">
        <p className="font-semibold text-amber-200">Important distinction</p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Cherry-picking normally creates a new commit ID because the commit has a different parent on the destination branch. Avoid repeatedly cherry-picking the same change between branches without a plan, as this can complicate later merges.</p>
      </div>

      <Link to="/merge-strategies" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Compare merge and rebase <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
