import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function Aliases() {
  return (
    <SectionLayout
      title="Streamline Workflow with Aliases"
      subtitle="Git aliases let you create short, memorable shortcuts for the commands you type most often."
      eyebrow="Project 1 · Caption This · 1.3.8"
    >
      <Callout variant="note" title="Why aliases?">
        Typing the same long commands every day is tedious. Aliases keep your fingers on the home row and make your
        terminal history easier to read.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Create useful aliases</h2>
        <CodeBlock title="Popular shortcuts" language="bash" code={`git config --global alias.st status\ngit config --global alias.co checkout\ngit config --global alias.br branch\ngit config --global alias.ci commit\ngit config --global alias.last "log -1 HEAD"\ngit config --global alias.lg "log --oneline --graph --decorate --all"`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Use them</h2>
        <CodeBlock title="After the aliases are set" language="bash" code={`git st\ngit lg\ngit last`} />
      </section>

      <Callout variant="tip" title="See all aliases">
        Run <code className="inline-code">git config --global --get-regexp alias</code> to list every alias you have defined.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/conflicts" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Merge Conflicts
          <ArrowRight size={15} />
        </Link>
        <Link to="/local-history" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Local History
        </Link>
      </div>
    </SectionLayout>
  )
}
