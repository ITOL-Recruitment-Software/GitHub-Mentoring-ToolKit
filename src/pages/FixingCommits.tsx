import { Link } from 'react-router-dom'
import { ArrowRight, AlertTriangle } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function FixingCommits() {
  return (
    <SectionLayout title="Fixing Commit Mistakes" subtitle="Choose the smallest safe correction for a message, staged file, or local edit.">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Correct the most recent commit</h2>
        <CodeBlock title="Amend before publishing" code={`git status
git commit --amend -m "Describe the change clearly"

# Include a forgotten file in the latest commit
git add path/to/forgotten-file
git commit --amend --no-edit`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">Amend replaces the most recent commit with a new commit. Use it for a message correction or to include a file you forgot to stage.</p>
      </section>

      <div className="rounded-lg border border-amber-400/25 bg-amber-400/[0.06] p-4">
        <div className="flex items-center gap-2 text-amber-200"><AlertTriangle size={18} /><p className="font-semibold">Published history warning</p></div>
        <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Only amend commits that have not been shared unless your team explicitly agrees to rewriting history. A published amend changes the commit ID and can disrupt other collaborators.</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Unstage without deleting your edits</h2>
        <CodeBlock code={`git restore --staged path/to/file
git status`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">The file remains in your working tree; it is simply removed from the staging area. Review <code>git diff</code> and stage only the changes you intend to commit.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Discard edits only when you are sure</h2>
        <CodeBlock title="Destructive examples" code={`# Discard unstaged edits in one file
git restore path/to/file

# Discard all unstaged tracked-file edits
git restore .`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">These commands discard local edits that have not been committed. Check <code>git status</code> and save anything important before running them. They do not remove untracked files.</p>
      </section>

      <Link to="/git-reset" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Learn about reset <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
