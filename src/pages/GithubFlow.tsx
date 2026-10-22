import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  GitBranch,
  GitCommitHorizontal,
  GitMerge,
  GitPullRequest,
  MessageSquare,
} from 'lucide-react'
import SectionLayout from '../components/SectionLayout'

const workflow = [
  {
    number: '01',
    title: 'Create a branch',
    command: 'git switch -c feature/my-change',
    detail: 'Start from the default branch and make a separate space for your change.',
    icon: GitBranch,
  },
  {
    number: '02',
    title: 'Commit your work',
    command: 'git add .  →  git commit',
    detail: 'Save a small, meaningful checkpoint on your feature branch.',
    icon: GitCommitHorizontal,
  },
  {
    number: '03',
    title: 'Open a pull request',
    command: 'feature branch  →  main',
    detail: 'Explain what changed and why. A pull request invites feedback before merging.',
    icon: GitPullRequest,
  },
  {
    number: '04',
    title: 'Review and improve',
    command: 'Discuss · test · update',
    detail: 'Respond to questions, make follow-up commits, and check that the change works.',
    icon: MessageSquare,
  },
  {
    number: '05',
    title: 'Merge the change',
    command: 'approved change  →  main',
    detail: 'Once the team is happy with the result, merge it into the default branch.',
    icon: GitMerge,
  },
]

export default function GithubFlow() {
  return (
    <SectionLayout
      title="Understanding the GitHub Flow"
      subtitle="A repeatable way to make changes safely: branch, commit, open a pull request, review, and merge."
      fullWidth
    >
      <div className="space-y-8 pb-8">
        <section className="relative isolate overflow-hidden rounded-2xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-7 lg:p-9">
          <div className="pointer-events-none absolute -right-12 -top-16 -z-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-emerald-300">
                <GitBranch size={14} />
                A SAFE WAY TO SHIP CHANGES
              </div>
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[var(--color-github-text)] sm:text-3xl lg:text-4xl">
                Keep the main branch stable while you work.
              </h2>
              <p className="mt-4 leading-7 text-[var(--color-github-muted)]">
                GitHub Flow gives each change its own branch. The team can discuss and review the proposed work before it becomes part of the default branch, often called <code className="rounded bg-[#161b22] px-1.5 py-0.5 font-mono text-sm text-emerald-300">main</code>.
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-github-muted)]">The loop</p>
              <div className="mt-3 flex items-center gap-2 text-sm font-medium text-[var(--color-github-text)]">
                <span className="rounded-md bg-emerald-400/10 px-2.5 py-2 text-emerald-300">Branch</span>
                <ArrowRight size={14} className="text-[var(--color-github-muted)]" />
                <span className="rounded-md bg-sky-400/10 px-2.5 py-2 text-sky-300">Review</span>
                <ArrowRight size={14} className="text-[var(--color-github-muted)]" />
                <span className="rounded-md bg-violet-400/10 px-2.5 py-2 text-violet-300">Merge</span>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">The five steps</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-github-text)] sm:text-3xl">From idea to integrated change</h2>
            <p className="mt-2 max-w-3xl leading-7 text-[var(--color-github-muted)]">Work through the steps in order. For a small change, the cycle can be quick; for a bigger change, review and testing may take several rounds.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {workflow.map((step) => {
              const Icon = step.icon
              return (
                <article key={step.number} className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[var(--color-github-muted)]">{step.number} / 05</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><Icon size={20} /></span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[var(--color-github-text)]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">{step.detail}</p>
                  <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] px-3 py-2.5 font-mono text-xs text-sky-300">
                    {step.command}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-5 sm:p-6">
            <div className="flex items-center gap-2 text-emerald-200"><CheckCircle2 size={18} /><h2 className="font-semibold">Good habits</h2></div>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--color-github-muted)]">
              <li>Keep changes focused on one task.</li>
              <li>Use commit messages that explain the change.</li>
              <li>Describe the purpose and testing in the pull request.</li>
              <li>Review feedback and run checks before merging.</li>
            </ul>
          </div>
          <div className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
            <h2 className="font-semibold text-[var(--color-github-text)]">Explore the official guide</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Read GitHub's introduction to the flow for another explanation of this collaborative workflow.</p>
            <a href="https://guides.github.com/introduction/flow/" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:underline" target="_blank" rel="noreferrer">
              GitHub Flow guide <ArrowRight size={15} />
            </a>
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Next lesson</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-github-text)]">Set up Git on your computer</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Install Git and configure the identity used for your commits.</p>
          </div>
          <Link to="/setup" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2ea043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
            Set up Git <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </SectionLayout>
  )
}
