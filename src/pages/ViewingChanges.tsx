import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function ViewingChanges() {
  return (
    <SectionLayout
      title="Viewing Local Changes"
      subtitle="Before you stage or commit, inspect exactly what has changed. Clear visibility prevents accidental commits."
      eyebrow="Project 3 · GitHub Games · 1.5.6"
    >
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Diff commands</h2>
        <CodeBlock title="See unstaged and staged differences" language="bash" code={`git diff                  # working tree vs staging area\ngit diff --staged         # staging area vs last commit\ngit diff HEAD             # working tree vs last commit\ngit diff main...HEAD      # changes on this branch since it diverged from main`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Word and character level</h2>
        <CodeBlock title="Finer-grained diffs" language="bash" code={`git diff --word-diff\ngit diff --color-words`} />
      </section>

      <Callout variant="tip" title="Side-by-side tools">
        Many editors and GUIs (VS Code, GitHub Desktop, gitk) show side-by-side diffs that are easier to review for large changes.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/tags-releases" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Tags & Releases
          <ArrowRight size={15} />
        </Link>
        <Link to="/helpful-commands" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Helpful Commands
        </Link>
      </div>
    </SectionLayout>
  )
}
