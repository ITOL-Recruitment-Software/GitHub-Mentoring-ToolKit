import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  GitBranch,
  BookOpen,
  Users,
  Zap,
  ArrowRight,
  Terminal,
  GitPullRequest,
  AlertTriangle,
  Play,
  Monitor,
} from 'lucide-react'
import SectionLayout from '../components/SectionLayout'

const features = [
  {
    icon: BookOpen,
    title: 'Visual explanations',
    desc: 'Git graphs and flow diagrams built for shared-screen teaching.',
  },
  {
    icon: GitBranch,
    title: 'Git fundamentals',
    desc: 'Status → add → commit → branch → push — the core professional loop.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'GitHub-style PR open → review → merge simulator, not only CLI.',
  },
  {
    icon: Zap,
    title: 'Live practice',
    desc: 'Persistent Git Bash footer plus dedicated practice pages for mentoring.',
  },
]

const projectJumps = [
  {
    title: 'Project 1 · Basics',
    desc: 'Config, status, commit, branch, push, PRs.',
    to: '/setup',
    icon: GitBranch,
    accent: 'text-[var(--color-github-accent)] border-[var(--color-github-accent)]/30',
  },
  {
    title: 'Project 2 · Conflicts',
    desc: 'See markers, resolve, commit the fix.',
    to: '/conflicts',
    icon: AlertTriangle,
    accent: 'text-[var(--color-github-yellow)] border-[var(--color-github-yellow)]/30',
  },
  {
    title: 'Live Practices',
    desc: 'Branch simulator, commit challenge, conflict arena.',
    to: '/practice/branch-simulator',
    icon: Play,
    accent: 'text-[var(--color-github-blue)] border-[var(--color-github-blue)]/30',
  },
  {
    title: 'PR & Merge (GitHub UI)',
    desc: 'Looks like github.com — open, approve, merge.',
    to: '/practice/pr-merge',
    icon: GitPullRequest,
    accent: 'text-[var(--color-github-purple)] border-[var(--color-github-purple)]/30',
  },
]

const sessionModes = [
  {
    label: 'Demo',
    detail: 'You type in the footer terminal while students watch.',
  },
  {
    label: 'Drive',
    detail: 'Student types in the footer; you coach the next command.',
  },
  {
    label: 'PR lab',
    detail: 'Only the GitHub UI practice page — no Bash needed.',
  },
]

export default function Home() {
  return (
    <SectionLayout
      title="GitHub Mentoring Toolkit"
      subtitle="Live demos for mentors — Git Bash footer and GitHub-style PR practice."
    >
      {/* Positioning */}
      <div className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          This is <strong className="text-[var(--color-github-text)]">not</strong> a learning management system.
          Open it on a shared screen during student meetings to show real workflows — similar to GitHub Docs, built for live mentoring.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[var(--color-github-accent)]/15 border border-[var(--color-github-accent)]/30">
          <Terminal className="w-3.5 h-3.5 text-[var(--color-github-accent)]" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-[var(--color-github-accent)]">
            LIVE TERMINAL · ALWAYS ON
          </span>
          <span className="text-[10px] text-[var(--color-github-muted)] hidden sm:inline">
            — same Git Bash in the footer on every page
          </span>
        </div>
      </div>

      {/* Dual CTAs */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <Link
          to="/ready-for-class"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-github-accent)] text-white font-medium hover:bg-[#2ea043] transition-colors"
        >
          Start session
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/practice/pr-merge"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-github-border)] text-[var(--color-github-text)] font-medium hover:border-[var(--color-github-muted)] hover:bg-[#161b22] transition-colors"
        >
          <GitPullRequest size={16} className="text-[var(--color-github-purple)]" />
          Live practices
        </Link>
        <Link
          to="/intro"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-sm text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] transition-colors"
        >
          Welcome &amp; license
          <ArrowRight size={14} />
        </Link>
      </div>

      {/* Session modes */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Session modes</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          {sessionModes.map((m) => (
            <div
              key={m.label}
              className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]"
            >
              <span className="inline-block text-xs font-semibold px-2 py-0.5 rounded bg-[#21262d] text-[var(--color-github-text)] mb-2">
                {m.label}
              </span>
              <p className="text-sm text-[var(--color-github-muted)] leading-relaxed">{m.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to run a session */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">How to run a session</h2>
        <ol className="list-decimal list-inside space-y-2 text-[var(--color-github-muted)] leading-relaxed">
          <li>Pick a topic in the sidebar for the current lesson.</li>
          <li>Talk through the graph or flow diagram on the page.</li>
          <li>
            Have students type in the <strong className="text-[var(--color-github-text)]">footer Git Bash</strong> — same terminal on every page.
          </li>
          <li>
            For pull requests, use <strong className="text-[var(--color-github-text)]">PR &amp; Merge (GitHub UI)</strong> — not the terminal.
          </li>
        </ol>
      </section>

      {/* Project jump cards */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Jump to a track</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {projectJumps.map((j, i) => (
            <motion.div
              key={j.to}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={j.to}
                className={`flex gap-3 p-4 rounded-lg border bg-[#0d1117] hover:bg-[#161b22] transition-colors group ${j.accent}`}
              >
                <j.icon size={20} className="shrink-0 mt-0.5 opacity-90" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[var(--color-github-text)] group-hover:underline decoration-[var(--color-github-muted)] underline-offset-2">
                    {j.title}
                  </p>
                  <p className="text-sm text-[var(--color-github-muted)] mt-0.5">{j.desc}</p>
                </div>
                <ArrowRight
                  size={16}
                  className="shrink-0 text-[var(--color-github-muted)] group-hover:text-[var(--color-github-text)] self-center"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">What you get</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="p-5 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] hover:border-[#484f58] transition-colors"
            >
              <f.icon size={20} className="text-[var(--color-github-blue)] mb-2.5" />
              <h3 className="font-semibold mb-1 text-[var(--color-github-text)]">{f.title}</h3>
              <p className="text-sm text-[var(--color-github-muted)] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer terminal reminder */}
      <div className="flex items-start gap-3 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]">
        <Monitor className="w-5 h-5 text-[var(--color-github-muted)] shrink-0 mt-0.5" />
        <p className="text-sm text-[var(--color-github-muted)] leading-relaxed">
          The practice terminal stays fixed at the bottom of the window. Collapse it anytime with the bar above the prompt — history is kept when you change pages.
        </p>
      </div>
    </SectionLayout>
  )
}
