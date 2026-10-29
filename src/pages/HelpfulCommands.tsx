import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function HelpfulCommands() {
  return (
    <SectionLayout
      title="Helpful Git Commands"
      subtitle="A compact reference of commands that save time once you have mastered the basics."
      eyebrow="Project 3 · GitHub Games · 1.5.5"
    >
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Inspection</h2>
        <CodeBlock title="Useful status and diff commands" language="bash" code={`git status -sb          # short branch status\ngit diff                # unstaged changes\ngit diff --staged       # staged changes\ngit show HEAD           # last commit details\ngit blame path/to/file  # who changed each line`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Cleanup & recovery</h2>
        <CodeBlock title="Stash, clean, and recover" language="bash" code={`git stash               # set changes aside temporarily\ngit stash pop           # bring them back\ngit clean -fd           # remove untracked files (careful!)\ngit reflog              # history of HEAD movements`} />
      </section>

      <Callout variant="tip" title="git help">
        Every command has built-in documentation: <code className="inline-code">git help &lt;command&gt;</code> or{' '}
        <code className="inline-code">git &lt;command&gt; --help</code>.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/viewing-changes" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Viewing Local Changes
          <ArrowRight size={15} />
        </Link>
        <Link to="/reverting" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Reverting
        </Link>
      </div>
    </SectionLayout>
  )
}
