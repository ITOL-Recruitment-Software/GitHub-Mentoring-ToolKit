import { Link } from 'react-router-dom'
import { ArrowRight, CircleDot, Bug, Lightbulb, FileText } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

const types = [
  { title: 'Bug report', label: 'bug', detail: 'Describe what failed, what you expected, and the steps needed to reproduce it.', icon: Bug },
  { title: 'Feature request', label: 'enhancement', detail: 'Explain the user problem and the outcome that would make it better.', icon: Lightbulb },
  { title: 'Documentation', label: 'documentation', detail: 'Identify which instructions are missing, unclear, or out of date.', icon: FileText },
]

export default function Issues() {
  return (
    <SectionLayout title="GitHub Issues" subtitle="Track bugs, improvements, questions, and work that needs to be done.">
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
        <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><CircleDot size={20} /></div><div><h2 className="font-semibold">An issue should help someone take action</h2><p className="mt-1 text-sm text-[var(--color-github-muted)]">Clear context saves back-and-forth and helps teams prioritise work.</p></div></div>
        <p className="mt-4 text-sm leading-6 text-[var(--color-github-muted)]">Use labels to group related work, assignees to clarify ownership, and milestones or project boards when the team needs to plan delivery. Keep discussions focused on the problem and its solution.</p>
      </section>

      <div className="grid gap-3 md:grid-cols-3">
        {types.map(type => { const Icon = type.icon; return <article key={type.label} className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-4"><Icon size={20} className="text-emerald-300" /><p className="mt-3 font-semibold">{type.title}</p><span className="mt-2 inline-flex rounded-full bg-emerald-400/10 px-2 py-1 text-xs text-emerald-300">{type.label}</span><p className="mt-3 text-sm leading-6 text-[var(--color-github-muted)]">{type.detail}</p></article> })}
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">A useful issue template</h2>
        <CodeBlock title="Issue body" language="markdown" code={`## Problem
What is broken or what user need is not being met?

## Steps to reproduce
1. Open ...
2. Select ...
3. Observe ...

## Expected behaviour
What should happen?

## Actual behaviour
What happened instead?

## Evidence
Screenshots, logs, or relevant context (remove secrets and personal data).`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Triage before assigning</h2>
        <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-[var(--color-github-muted)]">
          <li>Check whether an issue already exists.</li>
          <li>Confirm the report has enough information to reproduce or discuss.</li>
          <li>Apply a small, consistent set of labels.</li>
          <li>Assign an owner only when responsibilities are clear.</li>
          <li>Close the issue when the work is complete, or explain why it will not be addressed.</li>
        </ul>
      </section>

      <Link to="/projects" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Plan work with GitHub Projects <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
