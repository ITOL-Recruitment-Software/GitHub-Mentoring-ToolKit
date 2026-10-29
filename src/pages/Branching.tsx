import { Link } from 'react-router-dom'
import { ArrowRight, GitBranch, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function Branching() {
  return (
    <SectionLayout
      title="Branching with Git"
      subtitle="The first step in the GitHub Workflow is to create a branch. This lets you experiment with new features without accidentally introducing untested changes on the production branch."
      eyebrow="Project 1 · Caption This · 1.3.1"
    >
      <Callout variant="note" title="Branching defined">
        When you create a branch you are essentially creating an identical copy of the project at that point in time.
        This is not the same as creating a physical copy on disk. In the background a branch is just a pointer.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Create a new branch</h2>
        <p className="text-sm leading-relaxed text-[var(--color-github-muted)]">
          The modern, recommended way to create and switch to a new branch in one step:
        </p>
        <CodeBlock
          title="Create and switch to a feature branch"
          language="bash"
          code={`git switch -c feature/add-caption`}
        />
        <p className="text-sm text-[var(--color-github-muted)]">
          Older equivalent (still widely used):
        </p>
        <CodeBlock
          title="Classic form"
          language="bash"
          code={`git checkout -b feature/add-caption`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">See which branch you are on</h2>
        <CodeBlock
          title="List branches"
          language="bash"
          code={`git branch`}
        />
        <p className="text-sm text-[var(--color-github-muted)]">
          The current branch is marked with an asterisk (*). You can also use:
        </p>
        <CodeBlock
          title="Show current branch only"
          language="bash"
          code={`git branch --show-current`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Switch between existing branches</h2>
        <CodeBlock
          title="Move to another branch"
          language="bash"
          code={`git switch main
git switch feature/add-caption`}
        />
      </section>

      <Callout variant="tip" title="Naming tip">
        Use short, descriptive names: <code className="inline-code">feature/login-form</code>,{' '}
        <code className="inline-code">fix/typo-in-readme</code>, <code className="inline-code">docs/setup-guide</code>.
        Many teams prefer the prefixes <code className="inline-code">feature/</code>, <code className="inline-code">fix/</code> or{' '}
        <code className="inline-code">chore/</code>.
      </Callout>

      <section className="rounded-2xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)] p-6">
        <h3 className="mb-3 text-base font-semibold">Key ideas to remember</h3>
        <ul className="space-y-2.5 text-sm text-[var(--color-github-muted)]">
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            A branch is a movable pointer to a commit, not a full copy of every file.
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            Creating a branch is almost free — Git makes them lightweight on purpose.
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            Work on the feature branch until the change is ready to discuss in a pull request.
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          to="/setup"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]"
        >
          Next: Local Git Configuration
          <ArrowRight size={15} />
        </Link>
        <Link
          to="/github-flow"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]"
        >
          Back to GitHub Flow
        </Link>
      </div>
    </SectionLayout>
  )
}
