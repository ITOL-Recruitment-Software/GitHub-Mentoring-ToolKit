import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function LocalRepo() {
  return (
    <SectionLayout
      title="Create a Local Repo"
      subtitle="You can start a brand-new Git repository on your machine without cloning anything from GitHub first."
      eyebrow="Project 4 · Local Repository · 1.6.1"
    >
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Initialise a new repository</h2>
        <CodeBlock title="Create and enter a project folder" language="bash" code={`mkdir my-project\ncd my-project\ngit init`} />
        <p className="text-sm text-[var(--color-github-muted)]">
          Git creates a hidden <code className="inline-code">.git</code> directory that stores the entire history of the project.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Make the first commit</h2>
        <CodeBlock title="Add a README and commit" language="bash" code={`echo "# My Project" > README.md\ngit add README.md\ngit commit -m "Initial commit"`} />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Connect to GitHub later</h2>
        <CodeBlock title="Add a remote and push" language="bash" code={`# After creating an empty repo on GitHub\ngit remote add origin https://github.com/YOUR_USER/my-project.git\ngit push -u origin main`} />
      </section>

      <Callout variant="tip" title="Default branch name">
        If your Git is recent, <code className="inline-code">git init</code> already creates a branch called{' '}
        <code className="inline-code">main</code>. Older versions may still use <code className="inline-code">master</code>.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/fixing-commits" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Fixing Commit Mistakes
          <ArrowRight size={15} />
        </Link>
        <Link to="/workflow-discussion" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Workflow Discussion
        </Link>
      </div>
    </SectionLayout>
  )
}
