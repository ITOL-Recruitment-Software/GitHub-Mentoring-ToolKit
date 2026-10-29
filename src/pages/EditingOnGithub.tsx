import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import Callout from '../components/Callout'

export default function EditingOnGithub() {
  return (
    <SectionLayout
      title="Editing on GitHub"
      subtitle="You can make small changes directly in the browser without cloning the repository. This is perfect for typos, documentation updates, and quick fixes."
      eyebrow="Project 1 · Caption This · 1.3.5"
    >
      <Callout variant="note" title="When to edit on GitHub">
        The web editor is ideal for small, self-contained changes. For larger features or multi-file work you should still
        use a local clone and a proper branch.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Edit a single file</h2>
        <ol className="space-y-3 text-sm text-[var(--color-github-muted)]">
          <li className="flex gap-3">
            <span className="step-badge bg-emerald-400/15 text-emerald-300">1</span>
            <span>Navigate to the file in the repository on GitHub.</span>
          </li>
          <li className="flex gap-3">
            <span className="step-badge bg-emerald-400/15 text-emerald-300">2</span>
            <span>Click the pencil icon (Edit this file).</span>
          </li>
          <li className="flex gap-3">
            <span className="step-badge bg-emerald-400/15 text-emerald-300">3</span>
            <span>Make your changes in the browser editor.</span>
          </li>
          <li className="flex gap-3">
            <span className="step-badge bg-emerald-400/15 text-emerald-300">4</span>
            <span>Scroll down, write a commit message, and choose to commit directly to a branch or open a pull request.</span>
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Create a new file</h2>
        <p className="text-sm text-[var(--color-github-muted)]">
          On the repository Code tab, click “Add file” → “Create new file”. Give it a name, add content, and commit
          (preferably to a new branch so you can open a pull request).
        </p>
      </section>

      <Callout variant="tip" title="Branch protection">
        If the default branch is protected, GitHub will force you to create a new branch and open a pull request.
        That is exactly the GitHub Flow in action.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/merge" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Merging Pull Requests
          <ArrowRight size={15} />
        </Link>
        <Link to="/collaboration" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Collaboration
        </Link>
      </div>
    </SectionLayout>
  )
}
