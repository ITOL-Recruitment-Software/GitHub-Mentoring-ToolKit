import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function Conflicts() {
  return (
    <SectionLayout
      title="Merge Conflicts"
      subtitle="A merge conflict happens when Git cannot automatically decide which change to keep. You resolve it by choosing (or combining) the correct content and then completing the merge."
      eyebrow="Project 2 · 1.4"
    >
      <Callout variant="warning" title="Defining a merge conflict">
        A merge conflict occurs when two branches have changed the same lines of the same file in different ways,
        and Git cannot automatically reconcile the differences. Git marks the conflicted files and pauses the merge
        so you can decide what the final content should be.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">How Git shows a conflict</h2>
        <p className="text-sm leading-relaxed text-[var(--color-github-muted)]">
          Inside a conflicted file you will see markers like this:
        </p>
        <CodeBlock
          title="Conflict markers inside a file"
          language="text"
          code={`<<<<<<< HEAD
This is the content from the current branch (usually the branch you are merging into).
=======
This is the content from the branch being merged in.
>>>>>>> feature/other-branch`}
        />
        <p className="text-sm text-[var(--color-github-muted)]">
          Your job is to edit the file so that only the correct final content remains, then remove the conflict markers.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Resolving a merge conflict (step by step)</h2>
        <ol className="space-y-3">
          {[
            {
              title: 'Start the merge',
              code: 'git merge feature/other-branch',
              note: 'Git will stop and tell you which files have conflicts.',
            },
            {
              title: 'See the conflicted files',
              code: 'git status',
              note: 'Look for the “Unmerged paths” section.',
            },
            {
              title: 'Open and edit each conflicted file',
              code: '# remove <<<<<<< ======= >>>>>>> markers\n# keep the correct final content',
              note: 'Decide what the combined result should look like.',
            },
            {
              title: 'Stage the resolved files',
              code: 'git add path/to/resolved-file.js',
              note: 'Tell Git the conflict is resolved for that file.',
            },
            {
              title: 'Complete the merge',
              code: 'git commit',
              note: 'Git opens a default merge commit message. Save and close to finish.',
            },
          ].map((step, i) => (
            <li key={i} className="rounded-xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)] p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="step-badge bg-emerald-400/15 text-emerald-300">{i + 1}</span>
                <span className="text-sm font-semibold">{step.title}</span>
              </div>
              <CodeBlock title="" language="bash" code={step.code} />
              <p className="mt-2 text-sm text-[var(--color-github-muted)]">{step.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <Callout variant="tip" title="Abort if needed">
        If the merge becomes too messy you can always cancel it and return to the previous state with{' '}
        <code className="inline-code">git merge --abort</code>.
      </Callout>

      <section className="rounded-2xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)] p-6">
        <h3 className="mb-3 text-base font-semibold">Prevention tips</h3>
        <ul className="space-y-2.5 text-sm text-[var(--color-github-muted)]">
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            Pull (or rebase) frequently so your branch does not drift far from main.
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            Keep feature branches short-lived and focused on one change.
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            Communicate with teammates when you both need to edit the same files.
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          to="/practice/merge-conflict"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]"
        >
          Practise in the Merge Conflict Arena
          <ArrowRight size={15} />
        </Link>
        <Link
          to="/workflow-review"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]"
        >
          Next: Workflow Review
        </Link>
      </div>
    </SectionLayout>
  )
}
