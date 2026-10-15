import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import CodeBlock from '../components/CodeBlock'

export default function Intro() {
  return (
    <SectionLayout
      title="Introduction to Git & GitHub"
      subtitle="The two tools every modern developer uses together."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        Students often mix up Git and GitHub. This page separates them clearly, then shows how they connect.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-github-text)]">What is Git?</h2>
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          Git is a <strong className="text-[var(--color-github-text)]">distributed version control system</strong>.
          It runs on your computer, records every change to your project files, and lets you move through history when you need an older version.
        </p>
        <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-1.5 leading-relaxed">
          <li>Installed and used on your machine</li>
          <li>Tracks changes to files over time</li>
          <li>Works offline</li>
          <li>Usually driven from the command line (or a GUI built on top of it)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-github-text)]">What is GitHub?</h2>
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          GitHub is a <strong className="text-[var(--color-github-text)]">cloud platform built around Git</strong>.
          It hosts repositories online so teams can share history, review code, and ship together.
        </p>
        <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-1.5 leading-relaxed">
          <li>Stores Git repositories on the internet</li>
          <li>Adds collaboration: Pull Requests, Issues, Projects</li>
          <li>Adds automation: Actions (CI/CD) and protections on important branches</li>
          <li>Used in the browser and through the GitHub API</li>
        </ul>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-github-text)] mb-3">
          Key difference
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]">
            <h3 className="font-semibold text-[var(--color-github-accent)] mb-2">Git</h3>
            <ul className="text-sm text-[var(--color-github-muted)] space-y-1.5">
              <li>Version control system</li>
              <li>Runs locally</li>
              <li>Records commits and branches</li>
              <li>Tool you run on your machine</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]">
            <h3 className="font-semibold text-[var(--color-github-blue)] mb-2">GitHub</h3>
            <ul className="text-sm text-[var(--color-github-muted)] space-y-1.5">
              <li>Cloud hosting platform</li>
              <li>Stores shared repositories</li>
              <li>Pull Requests, Issues, Actions</li>
              <li>Website + API + team tools</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-[var(--color-github-muted)] mt-3 leading-relaxed">
          Short version: <strong className="text-[var(--color-github-text)]">Git is the tool. GitHub is the place teams share Git history.</strong>
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-github-text)]">
          How they connect
        </h2>
        <FlowDiagram
          steps={[
            { label: 'Your computer', sublabel: 'Edit files', color: '#58a6ff' },
            { label: 'Local Git', sublabel: '.git folder', color: '#238636' },
            { label: 'GitHub', sublabel: 'Remote origin', color: '#a371f7' },
          ]}
        />
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          You work locally with Git. When the work is ready to share, you{' '}
          <code className="text-[var(--color-github-blue)] text-sm">push</code> commits to GitHub.
          Teammates <code className="text-[var(--color-github-blue)] text-sm">pull</code> those commits,
          open Pull Requests, and review before merging into{' '}
          <code className="text-[var(--color-github-blue)] text-sm">main</code>.
        </p>
      </section>

      <CodeBlock
        title="Mental model"
        code={`Local (Git)              Remote (GitHub)
─────────────────        ──────────────────
Working files            Shared repository
Commits on branches      Pull Requests
Your machine only        Team + CI + review`}
      />

      <div className="mt-2 pt-6 border-t border-[var(--color-github-border)]">
        <p className="text-xs font-semibold tracking-wider text-[var(--color-github-accent)] mb-2">
          TRY IN FOOTER TERMINAL
        </p>
        <p className="text-sm text-[var(--color-github-muted)] mb-2 leading-relaxed">
          Git runs on your machine. Type these in the practice terminal at the bottom:
        </p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1">
          <li>git --version</li>
          <li>help</li>
        </ol>
      </div>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          to="/ready-for-class"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-github-accent)] text-white font-medium hover:bg-[#2ea043] transition-colors"
        >
          Next: Getting Ready for Class
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/what-is-github"
          className="text-sm text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] transition-colors"
        >
          More on GitHub
        </Link>
      </div>
    </SectionLayout>
  )
}
