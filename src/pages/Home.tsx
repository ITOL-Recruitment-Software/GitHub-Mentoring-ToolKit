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
  Settings,
  GitCommit,
  Shield,
  Wrench,
  FileText,
  CheckCircle,
  ClipboardCheck,
  Workflow,
  History,
  MessageSquare,
} from 'lucide-react'

const features = [
  {
    icon: BookOpen,
    title: 'Visual explanations',
    desc: 'Git graphs and flow diagrams for shared-screen teaching.',
  },
  {
    icon: GitBranch,
    title: 'Git fundamentals',
    desc: 'Status → add → commit → branch → push.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'GitHub-style PR open → review → merge.',
  },
  {
    icon: Zap,
    title: 'Live practice',
    desc: 'Persistent footer terminal + practice labs.',
  },
]

const projectJumps = [
  {
    title: 'Project 1 · Basics',
    desc: 'Config, status, commit, branch, push, PRs.',
    to: '/setup',
    icon: GitBranch,
    accent: 'border-l-[var(--color-github-accent)]',
  },
  {
    title: 'Project 2 · Conflicts',
    desc: 'Markers, resolve, commit the fix.',
    to: '/conflicts',
    icon: AlertTriangle,
    accent: 'border-l-[var(--color-github-yellow)]',
  },
  {
    title: 'Live Practices',
    desc: 'Branch sim, commit challenge, conflict arena.',
    to: '/practice/branch-simulator',
    icon: Play,
    accent: 'border-l-[var(--color-github-blue)]',
  },
  {
    title: 'PR & Merge (GitHub UI)',
    desc: 'Looks like github.com — open, approve, merge.',
    to: '/practice/pr-merge',
    icon: GitPullRequest,
    accent: 'border-l-[var(--color-github-purple)]',
  },
]

const sessionModes = [
  { label: 'Demo', detail: 'You type in the footer; students watch.' },
  { label: 'Drive', detail: 'Student types; you coach the next command.' },
  { label: 'PR lab', detail: 'GitHub UI only — no Bash required.' },
]

const curriculum = [
  {
    group: 'Start',
    links: [
      { to: '/intro', label: 'Welcome & License', icon: BookOpen },
      { to: '/ready-for-class', label: 'Getting Ready', icon: ClipboardCheck },
      { to: '/what-is-github', label: 'What is GitHub?', icon: Users },
      { to: '/github-flow', label: 'GitHub Flow', icon: Workflow },
    ],
  },
  {
    group: 'Project 1 · Basics',
    links: [
      { to: '/setup', label: 'Git Configuration', icon: Settings },
      { to: '/status', label: 'Git Status', icon: Monitor },
      { to: '/add-commit', label: 'Add & Commit', icon: GitCommit },
      { to: '/branching', label: 'Branching', icon: GitBranch },
      { to: '/collaboration', label: 'Push & Collaborate', icon: Users },
      { to: '/pull-requests', label: 'Pull Requests', icon: GitPullRequest },
      { to: '/merge', label: 'Merging PRs', icon: GitBranch },
      { to: '/local-history', label: 'git log', icon: History },
    ],
  },
  {
    group: 'Projects 2–4',
    links: [
      { to: '/conflicts', label: 'Merge Conflicts', icon: AlertTriangle },
      { to: '/protected-branches', label: 'Protected Branches', icon: Shield },
      { to: '/helpful-commands', label: 'Helpful Commands', icon: Wrench },
      { to: '/commit-messages', label: 'Commit Messages', icon: MessageSquare },
    ],
  },
  {
    group: 'Reference',
    links: [
      { to: '/readme', label: 'README.md', icon: FileText },
      { to: '/gitignore', label: '.gitignore', icon: FileText },
      { to: '/best-practices', label: 'Best Practices', icon: CheckCircle },
      { to: '/mistakes', label: 'Common Mistakes', icon: AlertTriangle },
    ],
  },
]

const footerCommands = [
  'git status',
  'git add .',
  'git commit -m "…"',
  'git checkout -b feature/x',
  'git push -u origin feature/x',
  'git log --oneline',
  'help',
]

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="w-full min-h-[calc(100vh-280px)] px-4 sm:px-6 lg:px-8 xl:px-10 py-6 sm:py-8"
    >
      {/* ── Hero row: title + CTAs ── */}
      <div className="grid lg:grid-cols-12 gap-6 mb-8">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-xs font-semibold tracking-wider text-[var(--color-github-accent)] mb-2">
            ITOL · MENTORING
          </p>
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-[var(--color-github-text)] leading-tight">
            GitHub Mentoring Toolkit
          </h1>
          <p className="mt-3 text-base sm:text-lg text-[var(--color-github-muted)] leading-relaxed max-w-2xl">
            Live demos for mentors — persistent Git Bash footer and GitHub-style PR practice.
            Not an LMS: open on a shared screen during sessions.
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--color-github-accent)]/15 border border-[var(--color-github-accent)]/30">
              <Terminal className="w-3.5 h-3.5 text-[var(--color-github-accent)]" />
              <span className="text-[10px] sm:text-xs font-semibold tracking-wide text-[var(--color-github-accent)]">
                LIVE TERMINAL · ALWAYS ON
              </span>
            </span>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/ready-for-class"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-github-accent)] text-white font-medium hover:bg-[#2ea043] transition-colors"
            >
              Start session
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/practice/pr-merge"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--color-github-border)] text-[var(--color-github-text)] font-medium hover:bg-[#161b22] transition-colors"
            >
              <GitPullRequest size={16} className="text-[var(--color-github-purple)]" />
              Live practices
            </Link>
            <Link
              to="/intro"
              className="inline-flex items-center gap-1.5 px-3 py-2.5 text-sm text-[var(--color-github-muted)] hover:text-[var(--color-github-text)]"
            >
              Welcome &amp; license
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Session modes + how-to stacked */}
        <div className="lg:col-span-5 grid sm:grid-cols-3 lg:grid-cols-1 gap-3">
          {sessionModes.map((m) => (
            <div
              key={m.label}
              className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22] flex sm:flex-col lg:flex-row lg:items-center gap-2"
            >
              <span className="shrink-0 text-xs font-semibold px-2 py-0.5 rounded bg-[#21262d] text-[var(--color-github-text)]">
                {m.label}
              </span>
              <p className="text-sm text-[var(--color-github-muted)] leading-snug">{m.detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Jump tracks (4-col on xl) ── */}
      <section className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-github-muted)] mb-3">
          Jump to a track
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {projectJumps.map((j, i) => (
            <motion.div
              key={j.to}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={j.to}
                className={`flex gap-3 h-full p-4 rounded-lg border border-[var(--color-github-border)] border-l-4 bg-[#0d1117] hover:bg-[#161b22] transition-colors group ${j.accent}`}
              >
                <j.icon size={20} className="shrink-0 mt-0.5 text-[var(--color-github-muted)] group-hover:text-[var(--color-github-text)]" />
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-[var(--color-github-text)] text-sm">{j.title}</p>
                  <p className="text-xs text-[var(--color-github-muted)] mt-1 leading-relaxed">{j.desc}</p>
                </div>
                <ArrowRight size={14} className="shrink-0 text-[var(--color-github-muted)] self-center opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Main grid: curriculum + sidebar column ── */}
      <div className="grid lg:grid-cols-12 gap-6 mb-8">
        {/* Curriculum map */}
        <section className="lg:col-span-8">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-github-muted)] mb-3">
            Curriculum map
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {curriculum.map((block) => (
              <div
                key={block.group}
                className="rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] p-4"
              >
                <p className="text-xs font-semibold text-[var(--color-github-text)] mb-3 pb-2 border-b border-[var(--color-github-border)]">
                  {block.group}
                </p>
                <ul className="space-y-1.5">
                  {block.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="flex items-center gap-2 text-sm text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] py-0.5 rounded transition-colors"
                      >
                        <link.icon size={14} className="shrink-0 opacity-70" />
                        <span className="truncate">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Right column */}
        <div className="lg:col-span-4 space-y-4">
          <section className="rounded-lg border border-[var(--color-github-border)] bg-[#161b22] p-4">
            <h2 className="text-sm font-semibold text-[var(--color-github-text)] mb-3">
              How to run a session
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-sm text-[var(--color-github-muted)] leading-relaxed">
              <li>Pick a topic in the sidebar.</li>
              <li>Talk through graphs and flows on the page.</li>
              <li>
                Students type in the <strong className="text-[var(--color-github-text)]">footer Git Bash</strong>.
              </li>
              <li>
                For PRs use <strong className="text-[var(--color-github-text)]">PR &amp; Merge (GitHub UI)</strong>.
              </li>
            </ol>
          </section>

          <section className="rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] p-4">
            <h2 className="text-sm font-semibold text-[var(--color-github-text)] mb-2 flex items-center gap-2">
              <Terminal size={14} className="text-[var(--color-github-accent)]" />
              Try in the footer
            </h2>
            <p className="text-xs text-[var(--color-github-muted)] mb-3">
              Same terminal on every page — type any of these:
            </p>
            <div className="flex flex-wrap gap-1.5">
              {footerCommands.map((cmd) => (
                <code
                  key={cmd}
                  className="text-[11px] font-mono px-2 py-1 rounded bg-[#21262d] text-[var(--color-github-accent)] border border-[var(--color-github-border)]"
                >
                  {cmd}
                </code>
              ))}
            </div>
          </section>

          <div className="rounded-lg border border-[var(--color-github-border)] bg-[#161b22] p-4 flex gap-3">
            <Monitor className="w-5 h-5 text-[var(--color-github-muted)] shrink-0 mt-0.5" />
            <p className="text-xs text-[var(--color-github-muted)] leading-relaxed">
              Collapse the footer terminal anytime. History is kept when you change pages.
            </p>
          </div>
        </div>
      </div>

      {/* ── Features full width ── */}
      <section>
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-github-muted)] mb-3">
          What you get
        </h2>
        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] hover:border-[#484f58] transition-colors"
            >
              <f.icon size={18} className="text-[var(--color-github-blue)] mb-2" />
              <h3 className="font-semibold text-sm text-[var(--color-github-text)] mb-1">{f.title}</h3>
              <p className="text-xs text-[var(--color-github-muted)] leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  )
}
