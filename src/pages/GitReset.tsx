import { Link } from 'react-router-dom'
import { ArrowRight, RotateCcw } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function GitReset() {
  return (
    <SectionLayout title="Rewriting History with Git Reset" subtitle="Move the current branch pointer and optionally change the staging area and working tree.">
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><RotateCcw size={20} /></div>
          <div><h2 className="font-semibold">Reset changes local history</h2><p className="mt-1 text-sm text-[var(--color-github-muted)]">Use it carefully, especially if the commits have already been pushed.</p></div>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--color-github-muted)]">Reset moves the current branch reference to another commit. The mode controls what happens to the staging area and working files. Before using reset, run <code>git status</code> and make sure you understand which work is committed and which is not.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Understand the three modes</h2>
        <div className="grid gap-3 md:grid-cols-3">
          <article className="rounded-lg border border-[var(--color-github-border)] bg-[#161b22] p-4"><h3 className="font-semibold text-emerald-300">--soft</h3><p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Moves the branch pointer. Changes from the removed commits remain staged.</p></article>
          <article className="rounded-lg border border-[var(--color-github-border)] bg-[#161b22] p-4"><h3 className="font-semibold text-sky-300">--mixed</h3><p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">The default mode. Moves the branch and resets the index, while keeping working-tree edits.</p></article>
          <article className="rounded-lg border border-amber-400/25 bg-[#161b22] p-4"><h3 className="font-semibold text-amber-200">--hard</h3><p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Moves the branch, index, and working tree. Uncommitted changes can be discarded.</p></article>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Practice with a known target</h2>
        <CodeBlock title="Inspect before resetting" code={`git status
git log --oneline --decorate -5
git reset --soft HEAD~1
git status
git reflog`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">This example moves the current branch back one commit while keeping that commit's changes staged. Try it only in a practice repository, and inspect the status after each command.</p>
      </section>

      <div className="rounded-lg border border-amber-400/25 bg-amber-400/[0.06] p-4">
        <p className="font-semibold text-amber-200">Recovery is not guaranteed</p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">The reflog can help locate recently moved local references, but it expires and is not a backup. Do not rely on it to recover uncommitted files discarded by <code>--hard</code>. For already-shared commits, prefer <code>git revert</code>.</p>
      </div>

      <Link to="/reverting" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Compare with git revert <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
