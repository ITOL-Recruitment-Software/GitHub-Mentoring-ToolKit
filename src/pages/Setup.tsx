import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Settings } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function Setup() {
  return (
    <SectionLayout
      title="Local Git Configuration"
      subtitle="Tell Git who you are and set a few defaults so every commit is correctly attributed and comfortable to work with."
      eyebrow="Project 1 · Caption This · 1.3.2"
    >
      <Callout variant="note" title="Why configure Git first?">
        Every commit records an author name and email. Setting these globally once means you never have to think about
        them again on this machine.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Set your identity</h2>
        <p className="text-sm leading-relaxed text-[var(--color-github-muted)]">
          Replace the placeholders with the name and email you use on GitHub (the same email helps link commits to your profile).
        </p>
        <CodeBlock
          title="Global identity"
          language="bash"
          code={`git config --global user.name "Your Name"
git config --global user.email "you@example.com"`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Useful defaults</h2>
        <CodeBlock
          title="Recommended global settings"
          language="bash"
          code={`# Default branch name for new repositories
git config --global init.defaultBranch main

# Colourful output
git config --global color.ui auto

# Pull with rebase by default (optional but common)
git config --global pull.rebase false`}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Check what is set</h2>
        <CodeBlock
          title="List all global config"
          language="bash"
          code={`git config --global --list`}
        />
        <p className="text-sm text-[var(--color-github-muted)]">
          You can also inspect a single key:
        </p>
        <CodeBlock
          title="Inspect one value"
          language="bash"
          code={`git config --global user.email`}
        />
      </section>

      <Callout variant="tip" title="Local vs global">
        <code className="inline-code">--global</code> applies to every repository on this machine.
        Omit it (or use <code className="inline-code">--local</code>) to set a value only for the current repository.
      </Callout>

      <section className="rounded-2xl border border-[var(--color-github-border)] bg-[var(--color-github-surface)] p-6">
        <h3 className="mb-3 text-base font-semibold">You are ready when</h3>
        <ul className="space-y-2.5 text-sm text-[var(--color-github-muted)]">
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            <code className="inline-code">git config --global user.name</code> prints your name
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-emerald-400" />
            <code className="inline-code">git config --global user.email</code> prints your email
          </li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link
          to="/working-locally"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]"
        >
          Next: Working Locally
          <ArrowRight size={15} />
        </Link>
        <Link
          to="/branching"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]"
        >
          Back to Branching
        </Link>
      </div>
    </SectionLayout>
  )
}
