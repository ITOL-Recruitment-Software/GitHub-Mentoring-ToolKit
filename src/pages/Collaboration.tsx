import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function Collaboration() {
  return (
    <SectionLayout
      title="Push & Collaborate"
      subtitle="Local commits only exist on your machine until you push them. Pushing publishes your branch to GitHub so the rest of the team can see and review it."
      eyebrow="Project 1 · Caption This · 1.3.4"
    >
      <Callout variant="note" title="Git is explicit">
        Git does nothing until you tell it to. Editing and committing locally do not automatically publish your changes.
        You choose when to send snapshots to the remote.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">First push of a new branch</h2>
        <CodeBlock title="Publish a feature branch" language="bash" code={`git push -u origin feature/add-caption`} />
        <p className="text-sm text-[var(--color-github-muted)]">
          The <code className="inline-code">-u</code> flag sets the upstream so later you can simply run <code className="inline-code">git push</code>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Subsequent pushes</h2>
        <CodeBlock title="After more commits" language="bash" code={`git push`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Bring remote changes down</h2>
        <CodeBlock title="Fetch and merge (or pull)" language="bash" code={`git fetch origin\ngit merge origin/main\n\n# or in one step\ngit pull origin main`} />
      </section>

      <Callout variant="tip" title="After the first push">
        GitHub will often show a “Compare & pull request” button. That is the next step in the GitHub Flow —
        opening a pull request so the team can review your work.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/pull-requests" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Pull Requests
          <ArrowRight size={15} />
        </Link>
        <Link to="/working-locally" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Working Locally
        </Link>
      </div>
    </SectionLayout>
  )
}
