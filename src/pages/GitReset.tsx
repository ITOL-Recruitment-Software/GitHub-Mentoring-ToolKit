import { Link } from 'react-router-dom'
import { ArrowRight, AlertTriangle } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function GitReset() {
  return (
    <SectionLayout
      title="Rewriting History with Git Reset"
      subtitle="git reset moves the current branch pointer. Used carefully it is a powerful way to undo local commits; used carelessly it can discard work."
      eyebrow="Project 4 · Local Repository · 1.6.3"
    >
      <Callout variant="warning" title="Only reset commits that have not been pushed">
        Once a commit is on a shared remote branch, rewriting history with reset (or rebase) can cause problems for everyone
        else. Prefer <code className="inline-code">git revert</code> for published commits.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Three modes</h2>
        <div className="space-y-3">
          {[
            { flag: '--soft', desc: 'Move the branch pointer but keep changes staged.' },
            { flag: '--mixed (default)', desc: 'Move the pointer and unstage the changes, but leave the files in the working directory.' },
            { flag: '--hard', desc: 'Move the pointer and discard the changes completely. Use with extreme care.' },
          ].map((m) => (
            <div key={m.flag} className="lesson-card p-4">
              <code className="text-sm font-semibold text-emerald-300">{m.flag}</code>
              <p className="mt-1 text-sm text-[var(--color-github-muted)]">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Common examples</h2>
        <CodeBlock title="Undo the last commit, keep changes staged" language="bash" code={`git reset --soft HEAD~1`} />
        <CodeBlock title="Undo the last commit, keep changes unstaged" language="bash" code={`git reset HEAD~1`} />
        <CodeBlock title="Discard the last commit and its changes (dangerous)" language="bash" code={`git reset --hard HEAD~1`} />
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/cherry-pick" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Cherry Picking
          <ArrowRight size={15} />
        </Link>
        <Link to="/fixing-commits" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Fixing Commits
        </Link>
      </div>
    </SectionLayout>
  )
}
