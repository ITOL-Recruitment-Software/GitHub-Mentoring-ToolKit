import { Link } from 'react-router-dom'
import { ArrowRight, Undo2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function Reverting() {
  return (
    <SectionLayout title="Reverting Commits" subtitle="Undo the effect of an earlier commit by creating a new commit that reverses its changes.">
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><Undo2 size={20} /></div>
          <div><h2 className="font-semibold">A safe choice for shared history</h2><p className="mt-1 text-sm text-[var(--color-github-muted)]">Revert records an undo instead of rewriting the existing commit history.</p></div>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--color-github-muted)]">When a commit has already been pushed and shared with a team, <code>git revert</code> is usually safer than resetting the branch and force-pushing. The original commit remains in history, followed by a new commit that reverses its changes.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Revert one commit</h2>
        <CodeBlock title="Inspect, revert, and publish" code={`git log --oneline -10
git show abc1234
git revert abc1234
git push`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">Replace the example commit ID with the commit you want to undo. Git may open an editor for the revert message, or it may ask you to resolve conflicts if later changes overlap.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Undo a merge commit</h2>
        <CodeBlock title="Choose the mainline parent" code={`git log --oneline --graph
git revert -m 1 <merge-commit-sha>`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">The <code>-m 1</code> option tells Git which parent is the mainline to keep. Confirm the graph and your team's intended outcome before reverting a merge.</p>
      </section>

      <div className="rounded-lg border border-amber-400/25 bg-amber-400/[0.06] p-4">
        <p className="font-semibold text-amber-200">Do not confuse revert and reset</p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]"><code>git revert</code> adds a new commit. <code>git reset</code> moves the current branch reference and can discard local work, depending on the mode. Be especially careful with <code>--hard</code> and never rewrite shared history without team agreement.</p>
      </div>

      <Link to="/git-reset" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Learn about reset <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
