import { Link } from 'react-router-dom'
import {
  ArrowRight,
  GitBranch,
  GitCommitHorizontal,
  GitMerge,
  GitPullRequest,
  MessageSquare,
  CheckCircle2,
} from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import Callout from '../components/Callout'

const workflow = [
  {
    number: '01',
    title: 'Create a branch',
    command: 'git switch -c feature/my-change',
    detail: 'Start from the default branch and make a separate space for your change. The new branch looks exactly like main at first.',
    icon: GitBranch,
  },
  {
    number: '02',
    title: 'Make commits',
    command: 'git add .  →  git commit -m "..."',
    detail: 'As you change files, commit your work to the feature branch. Each commit is a named snapshot.',
    icon: GitCommitHorizontal,
  },
  {
    number: '03',
    title: 'Open a pull request',
    command: 'feature branch  →  main',
    detail: 'A pull request does not need to be perfect. It is a starting point for discussion and refinement with the team.',
    icon: GitPullRequest,
  },
  {
    number: '04',
    title: 'Discuss and review',
    command: 'Review · comment · update',
    detail: 'Respond to feedback, push more commits to the same branch, and let automated checks run.',
    icon: MessageSquare,
  },
  {
    number: '05',
    title: 'Merge when ready',
    command: 'approved PR  →  main',
    detail: 'When the changes are approved, merge the feature branch into the main branch. The project moves forward safely.',
    icon: GitMerge,
  },
]

export default function GithubFlow() {
  return (
    <SectionLayout
      title="Understanding the GitHub Flow"
      subtitle="A lightweight workflow that lets you experiment with new ideas safely, without fear of compromising the project."
      eyebrow="GitHub Flow · 1.2.3"
    >
      <Callout variant="note" title="From the Official Training Manual">
        Everything in GitHub lives on a branch. By default the “blessed” or “canonical” version of your project lives on a branch
        called <code className="inline-code">main</code> (historically <code className="inline-code">master</code>). When you are ready to
        experiment with a new feature or fix an issue, you create a new branch.
      </Callout>

      <section className="relative isolate overflow-hidden rounded-2xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)] p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-emerald-500/8 blur-3xl" />
        <div className="relative max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium tracking-wide text-emerald-300">
            <GitBranch size={13} />
            THE ESSENTIAL GITHUB WORKFLOW
          </div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Keep the main branch stable while you work.
          </h2>
          <p className="mt-4 text-[15px] leading-7 text-[var(--color-github-muted)]">
            Branching is a key concept. The branch will look exactly like main at first, but any changes you make will only be
            reflected in your branch. Such a new branch is often called a “feature” branch.
          </p>
        </div>
      </section>

      <section>
        <h2 className="mb-5 text-lg font-semibold">The five steps</h2>
        <div className="space-y-3">
          {workflow.map((step) => (
            <div
              key={step.number}
              className="flex gap-4 rounded-xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)] p-4 sm:p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-400/15 text-sm font-bold text-emerald-300">
                {step.number}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <step.icon size={16} className="text-emerald-400" />
                  <h3 className="text-sm font-semibold">{step.title}</h3>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-github-muted)]">{step.detail}</p>
                <code className="mt-2 inline-block rounded bg-[#0d1117] px-2.5 py-1 font-mono text-xs text-emerald-300">
                  {step.command}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Callout variant="tip" title="A pull request is a conversation">
        A pull request doesn’t need to be a perfect work of art — it is meant to be a starting point that will be further
        refined and polished through the efforts of the project team.
      </Callout>

      <section className="rounded-2xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)] p-6">
        <h3 className="mb-3 text-base font-semibold">Why this workflow works</h3>
        <ul className="space-y-2.5 text-sm text-[var(--color-github-muted)]">
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            The default branch stays deployable and stable.
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            Every change is discussed before it becomes part of the main line of work.
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            You can experiment freely on a feature branch without breaking anyone else’s work.
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            History stays clear: each pull request tells the story of why a change was made.
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          to="/branching"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]"
        >
          Next: Branching with Git
          <ArrowRight size={15} />
        </Link>
        <Link
          to="/what-is-github"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]"
        >
          Back to What is GitHub?
        </Link>
      </div>
    </SectionLayout>
  )
}
