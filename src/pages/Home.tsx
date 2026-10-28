import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  GitBranch,
  GitCommitHorizontal,
  GitPullRequest,
  Rocket,
  Users,
  Workflow,
  Terminal,
} from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import Callout from '../components/Callout'

const projects = [
  {
    id: '01',
    title: 'Project 1 · Caption This',
    description: 'Branching, local config, working locally, collaboration, editing on GitHub, merging pull requests, local history and aliases.',
    path: '/branching',
    color: 'emerald',
  },
  {
    id: '02',
    title: 'Project 2 · Merge Conflicts',
    description: 'Understand what a merge conflict is and practise the exact steps to resolve it cleanly.',
    path: '/conflicts',
    color: 'yellow',
  },
  {
    id: '03',
    title: 'Project 3 · GitHub Games',
    description: 'Protected branches, CODEOWNERS, git bisect, reverting, tags & releases, and workflow discussion.',
    path: '/workflow-review',
    color: 'blue',
  },
  {
    id: '04',
    title: 'Project 4 · Local Repository',
    description: 'Create a local repo, fix commit mistakes, rewrite history with reset, cherry-pick and merge strategies.',
    path: '/local-repo',
    color: 'purple',
  },
]

const pillars = [
  {
    icon: BookOpen,
    title: 'Learn the real workflow',
    text: 'Follow the same GitHub Flow used by teams worldwide — branch, commit, open a pull request, review, merge.',
  },
  {
    icon: Terminal,
    title: 'Practise in a safe terminal',
    text: 'A live simulated Git Bash stays open across every page so you can try commands without risking real repositories.',
  },
  {
    icon: Users,
    title: 'Built for mentoring sessions',
    text: 'Designed so mentors can walk students through the Official GitHub Training Manual in real time.',
  },
]

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)

  return (
    <SectionLayout
      title="The Official GitHub Training Manual"
      subtitle="Welcome. Today you embark on an exciting adventure: learning how to use Git and GitHub. This class is for you — follow along, try the activities, and ask lots of questions."
      eyebrow="GitHub Mentoring Toolkit"
      fullWidth
    >
      <div className="space-y-10 pb-10">
        <section className="relative isolate overflow-hidden rounded-2xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)]">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-emerald-500/8 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-purple-500/8 blur-3xl" />

          <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-center lg:p-10">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-emerald-300">
                <Rocket size={13} />
                YOUR JOURNEY STARTS HERE
              </div>

              <h2 className="max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-[var(--color-github-text)] sm:text-4xl lg:text-[2.75rem]">
                Learn how developers{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  build together
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-[var(--color-github-muted)]">
                GitHub is a collaboration platform built on top of Git. This toolkit follows the Official GitHub Training Manual
                so mentors and students share the same language, the same examples, and the same safe practice environment.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/ready-for-class"
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/30 transition hover:bg-[var(--color-github-accent-hover)]"
                >
                  Get ready for class
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/github-flow"
                  className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] bg-transparent px-5 py-3 text-sm font-medium text-[var(--color-github-text)] transition hover:border-emerald-400/40 hover:bg-white/[0.03]"
                >
                  <Workflow size={16} />
                  Explore GitHub Flow
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="relative mx-auto w-full max-w-xs"
            >
              <div className="rounded-xl border border-emerald-400/20 bg-[#0d1117] p-4 shadow-2xl shadow-black/40">
                <div className="flex items-center gap-2 border-b border-[var(--color-github-border)] pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b72]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e3b341]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3fb950]" />
                  <span className="ml-2 text-xs text-[var(--color-github-muted)]">training-project</span>
                </div>
                <div className="space-y-2.5 py-4">
                  <div className="flex items-center gap-3 rounded-lg bg-[var(--color-github-surface)] p-2.5">
                    <BookOpen size={16} className="text-emerald-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">README.md</p>
                      <p className="text-[11px] text-[var(--color-github-muted)]">Explain your project</p>
                    </div>
                    <span className="text-xs text-emerald-400">+1</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-[var(--color-github-surface)] p-2.5">
                    <GitCommitHorizontal size={16} className="text-emerald-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">First commit</p>
                      <p className="text-[11px] text-[var(--color-github-muted)]">A saved snapshot</p>
                    </div>
                    <span className="text-[11px] text-[var(--color-github-muted)]">now</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-[var(--color-github-surface)] p-2.5">
                    <GitPullRequest size={16} className="text-emerald-400" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">Open a pull request</p>
                      <p className="text-[11px] text-[var(--color-github-muted)]">Ready for review</p>
                    </div>
                    <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                      Open
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section>
          <h3 className="mb-5 text-lg font-semibold tracking-tight">Why this toolkit exists</h3>
          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="lesson-card p-5">
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-400">
                  <p.icon size={18} />
                </div>
                <h4 className="mb-1.5 text-sm font-semibold">{p.title}</h4>
                <p className="text-sm leading-relaxed text-[var(--color-github-muted)]">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold tracking-tight">Follow the four projects</h3>
              <p className="mt-1 text-sm text-[var(--color-github-muted)]">
                The Official GitHub Training Manual is organised around four hands-on projects.
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map((proj, idx) => (
              <Link
                key={proj.id}
                to={proj.path}
                onMouseEnter={() => setActiveProject(idx)}
                className={`lesson-card group p-5 transition ${
                  activeProject === idx ? 'border-emerald-400/40 bg-emerald-400/[0.04]' : ''
                }`}
              >
                <div className="mb-2 flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-400/15 text-xs font-bold text-emerald-300">
                    {proj.id}
                  </span>
                  <h4 className="text-sm font-semibold group-hover:text-emerald-300 transition-colors">
                    {proj.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed text-[var(--color-github-muted)]">{proj.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)] p-6 sm:p-8">
          <h3 className="mb-2 text-lg font-semibold">Recommended path for a mentoring session</h3>
          <p className="mb-6 text-sm text-[var(--color-github-muted)]">
            Mentors can walk the whole class through these pages in order.
          </p>

          <ol className="space-y-3">
            {[
              { step: '1', title: 'Getting Ready for Class', path: '/ready-for-class', desc: 'GitHub account + Git install + first clone' },
              { step: '2', title: 'What is GitHub & GitHub Flow', path: '/what-is-github', desc: 'Concepts before commands' },
              { step: '3', title: 'Project 1 – Branching & collaboration', path: '/branching', desc: 'The core daily workflow' },
              { step: '4', title: 'Live practice terminal', path: '/practice/branch-simulator', desc: 'Students try commands themselves' },
            ].map((item) => (
              <li key={item.step}>
                <Link
                  to={item.path}
                  className="flex items-start gap-4 rounded-xl border border-transparent p-3 transition hover:border-[var(--color-github-border)] hover:bg-[#0d1117]"
                >
                  <span className="step-badge bg-emerald-400/15 text-emerald-300">{item.step}</span>
                  <div>
                    <p className="text-sm font-medium text-[var(--color-github-text)]">{item.title}</p>
                    <p className="text-sm text-[var(--color-github-muted)]">{item.desc}</p>
                  </div>
                  <ArrowRight size={16} className="ml-auto mt-1 shrink-0 text-[var(--color-github-muted)]" />
                </Link>
              </li>
            ))}
          </ol>
        </section>

        <Callout variant="tip" title="For mentors">
          Keep the practice terminal open at the bottom of the screen. Students can type the same commands you demonstrate.
          The Toolkit Helper on the right answers common questions without leaving the page.
        </Callout>

        <section className="border-t border-[var(--color-github-border)] pt-6">
          <p className="text-xs leading-relaxed text-[var(--color-github-muted)]">
            Content structure and teaching flow are based on <em>The Official GitHub Training Manual</em> (CC BY 4.0).
            The Octocat, GitHub logo and other trademarks remain the property of GitHub. Modern wording and best practices
            are aligned with{' '}
            <a href="https://docs.github.com" target="_blank" rel="noreferrer" className="text-[var(--color-github-blue)] hover:underline">
              docs.github.com
            </a>
            .
          </p>
        </section>
      </div>
    </SectionLayout>
  )
}
