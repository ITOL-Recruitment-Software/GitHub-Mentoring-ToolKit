import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  BookOpen,
  GitBranch,
  AlertTriangle,
  Gamepad2,
  Wrench,
  Play,
  FileText,
  Terminal,
  Sidebar,
  Layout,
  GitPullRequest,
} from 'lucide-react'
import SectionLayout from '../components/SectionLayout'

/** High-level content groups — overview only, not a full curriculum dump */
const contentGroups = [
  {
    title: 'Start',
    summary: 'Welcome, class setup, what GitHub is, and GitHub Flow.',
    topics: '4 topics',
    to: '/intro',
    icon: BookOpen,
  },
  {
    title: 'Project 1 · Basics',
    summary: 'Config, local work, status, commit, branch, push, PRs, and merge.',
    topics: '12 topics',
    to: '/setup',
    icon: GitBranch,
  },
  {
    title: 'Project 2 · Conflicts',
    summary: 'How merge conflicts appear and how to resolve them.',
    topics: '1 topic',
    to: '/conflicts',
    icon: AlertTriangle,
  },
  {
    title: 'Project 3 · Games',
    summary: 'Workflow review, protection, bisect, revert, diff, tags, and more.',
    topics: '8 topics',
    to: '/workflow-review',
    icon: Gamepad2,
  },
  {
    title: 'Project 4 · Advanced',
    summary: 'Local repos, fixing commits, reset, cherry-pick, merge strategies.',
    topics: '5 topics',
    to: '/local-repo',
    icon: Wrench,
  },
  {
    title: 'Live Practices',
    summary: 'Interactive labs: branch simulator, commit challenge, conflicts, PR UI.',
    topics: '4 labs',
    to: '/practice/branch-simulator',
    icon: Play,
  },
  {
    title: 'Reference',
    summary: 'README, gitignore, Issues, Projects, Actions, mistakes, best practices.',
    topics: '9 topics',
    to: '/readme',
    icon: FileText,
  },
]

const appParts = [
  {
    icon: Sidebar,
    title: 'Sidebar',
    desc: 'Every section is listed by group. Search to jump quickly.',
  },
  {
    icon: Layout,
    title: 'Topic pages',
    desc: 'Explanations, diagrams, Git graphs, and “try in footer” command lists.',
  },
  {
    icon: Terminal,
    title: 'Footer Git Bash',
    desc: 'One practice terminal for the whole app. History stays when you change pages.',
  },
  {
    icon: GitPullRequest,
    title: 'GitHub UI labs',
    desc: 'PR & merge practice looks like github.com — not the terminal.',
  },
]

export default function Home() {
  return (
    <SectionLayout
      title="GitHub Mentoring Toolkit"
      subtitle="Overview of the app and what is inside."
    >
      {/* What this app is */}
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
        <h2 className="text-base font-semibold text-[var(--color-github-text)] mb-2">
          What this app is
        </h2>
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          A <strong className="text-[var(--color-github-text)]">presentation and practice tool for mentors</strong>.
          Open it on a shared screen during student sessions to walk through Git and GitHub workflows.
          It is not a course platform or LMS — content is organised for live teaching.
        </p>
      </section>

      {/* How the app is built */}
      <section>
        <h2 className="text-lg font-semibold text-[var(--color-github-text)] mb-3">
          How the app works
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {appParts.map((part, i) => (
            <motion.div
              key={part.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-3 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]"
            >
              <part.icon
                size={18}
                className="shrink-0 mt-0.5 text-[var(--color-github-blue)]"
              />
              <div>
                <h3 className="text-sm font-semibold text-[var(--color-github-text)]">{part.title}</h3>
                <p className="text-sm text-[var(--color-github-muted)] mt-0.5 leading-relaxed">
                  {part.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content overview */}
      <section>
        <h2 className="text-lg font-semibold text-[var(--color-github-text)] mb-1">
          What is inside
        </h2>
        <p className="text-sm text-[var(--color-github-muted)] mb-4">
          Content is grouped in the sidebar. Each card opens the first page of that group.
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          {contentGroups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.04 }}
            >
              <Link
                to={g.to}
                className="flex gap-3 h-full p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] hover:bg-[#161b22] hover:border-[#484f58] transition-colors group"
              >
                <g.icon
                  size={18}
                  className="shrink-0 mt-0.5 text-[var(--color-github-muted)] group-hover:text-[var(--color-github-text)]"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-[var(--color-github-text)]">
                      {g.title}
                    </h3>
                    <span className="text-[10px] text-[var(--color-github-muted)] shrink-0">
                      {g.topics}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
                    {g.summary}
                  </p>
                </div>
                <ArrowRight
                  size={14}
                  className="shrink-0 self-center text-[var(--color-github-muted)] opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Single start action */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        <Link
          to="/ready-for-class"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-github-accent)] text-white font-medium hover:bg-[#2ea043] transition-colors"
        >
          Start with Getting Ready for Class
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/intro"
          className="text-sm text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] transition-colors"
        >
          Welcome &amp; license
        </Link>
      </div>
    </SectionLayout>
  )
}
