import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function LocalHistory() {
  return (
    <SectionLayout
      title="Local History (git log)"
      subtitle="Every commit is a snapshot. Learning to read the history is essential for understanding how a project evolved and for recovering from mistakes."
      eyebrow="Project 1 · Caption This · 1.3.7"
    >
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic log</h2>
        <CodeBlock title="Full history" language="bash" code={`git log`} />
        <CodeBlock title="Compact one-line view" language="bash" code={`git log --oneline`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Useful variations</h2>
        <CodeBlock title="Graph of all branches" language="bash" code={`git log --oneline --graph --decorate --all`} />
        <CodeBlock title="Last N commits" language="bash" code={`git log -5 --oneline`} />
        <CodeBlock title="Who changed a file" language="bash" code={`git log -- path/to/file`} />
      </section>

      <Callout variant="tip" title="Pretty formats">
        You can customise the output with <code className="inline-code">--pretty=format:"..."</code>. Many teams define an alias
        that shows a clean graph they like.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/aliases" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Git Aliases
          <ArrowRight size={15} />
        </Link>
        <Link to="/merge" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Merging
        </Link>
      </div>
    </SectionLayout>
  )
}
