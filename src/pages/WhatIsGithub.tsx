import { Link } from 'react-router-dom'
import {
  ArrowRight,
  BookOpen,
  GitBranch,
  GitCommitHorizontal,
  Globe2,
  ShieldCheck,
  Users,
  Workflow,
} from 'lucide-react'
import SectionLayout from '../components/SectionLayout'

const platformFeatures = [
  {
    title: 'Repositories',
    description: 'Keep project files and their Git history together in a place your team can access.',
    icon: BookOpen,
  },
  {
    title: 'Pull requests',
    description: 'Propose changes, ask questions, review code, and agree on what should be merged.',
    icon: GitCommitHorizontal,
  },
  {
    title: 'Issues and Projects',
    description: 'Track bugs, ideas, tasks, and the work needed to move a project forward.',
    icon: Workflow,
  },
  {
    title: 'Teams and permissions',
    description: 'Organise collaborators and control who can view or change a repository.',
    icon: Users,
  },
]

const principles = [
  {
    number: '01',
    title: 'Your history is local',
    description: 'When you clone a repository, Git gives you its history on your computer. You can inspect commits and work offline.',
    icon: GitCommitHorizontal,
  },
  {
    number: '02',
    title: 'Branches are lightweight',
    description: 'A branch is a movable reference to a commit. It gives you a separate line of work without copying the whole project.',
    icon: GitBranch,
  },
  {
    number: '03',
    title: 'Sharing is deliberate',
    description: 'Editing and committing locally do not automatically publish your changes. You choose when to push them to a remote.',
    icon: ShieldCheck,
  },
]

export default function WhatIsGithub() {
  return (
    <SectionLayout
      title="What is GitHub?"
      subtitle="A place to host Git repositories and a set of tools that help people plan, discuss, review, and deliver work together."
      fullWidth
    >
      <div className="space-y-8 pb-8">
        <section className="relative isolate overflow-hidden rounded-2xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-7 lg:p-9">
          <div className="pointer-events-none absolute -right-10 -top-12 -z-10 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-sky-300">
                <Globe2 size={14} />
                COLLABORATION IN THE CLOUD
              </div>
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[var(--color-github-text)] sm:text-3xl lg:text-4xl">
                More than a place to upload code.
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-[var(--color-github-muted)]">
                Git keeps track of versions. GitHub makes it easier to share a repository with other people, talk about changes, review proposed work, manage tasks, and automate parts of a team's workflow.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-4 lg:min-w-52">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-400/10 text-sky-300">
                <Globe2 size={22} />
              </div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-github-text)]">GitHub</p>
                <p className="mt-1 text-xs text-[var(--color-github-muted)]">Git + collaboration</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">01 / What you can do</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-github-text)] sm:text-3xl">The platform toolkit</h2>
            <p className="mt-2 max-w-3xl leading-7 text-[var(--color-github-muted)]">These features turn a repository into a shared workspace for a project.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {platformFeatures.map((feature) => {
              const Icon = feature.icon
              return (
                <article key={feature.title} className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 transition-colors hover:border-emerald-400/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 font-semibold text-[var(--color-github-text)]">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">{feature.description}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">02 / How Git works</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-github-text)] sm:text-3xl">Three useful principles</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon
              return (
                <article key={principle.number} className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[var(--color-github-muted)]">{principle.number}</span>
                    <Icon size={20} className="text-emerald-300" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-[var(--color-github-text)]">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">{principle.description}</p>
                </article>
              )
            })}
          </div>
          <div className="rounded-xl border border-sky-400/20 bg-sky-400/[0.06] p-4 sm:p-5">
            <p className="font-semibold text-sky-200">A note about commits</p>
            <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">
              Git commits record snapshots of tracked project content, along with metadata and a link to parent commit(s). Git can calculate the differences between snapshots when needed.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">03 / Who owns the workspace?</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-github-text)] sm:text-3xl">Personal accounts and organisations</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300"><Users size={20} /></div>
                <h3 className="text-lg font-semibold text-[var(--color-github-text)]">Personal account</h3>
              </div>
              <p className="mt-3 leading-6 text-[var(--color-github-muted)]">A developer's account can own repositories and invite collaborators with access to specific projects.</p>
            </article>
            <article className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300"><Globe2 size={20} /></div>
                <h3 className="text-lg font-semibold text-[var(--color-github-text)]">Organisation</h3>
              </div>
              <p className="mt-3 leading-6 text-[var(--color-github-muted)]">A shared workspace can group repositories, teams, and permissions around a company, class, or community.</p>
            </article>
          </div>
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Keep going</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-github-text)]">See the workflow in action</h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--color-github-muted)]">Next, explore the GitHub workflow and how changes move from your computer to a shared repository.</p>
          </div>
          <Link to="/github-flow" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2ea043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
            Explore GitHub Flow <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </SectionLayout>
  )
}
