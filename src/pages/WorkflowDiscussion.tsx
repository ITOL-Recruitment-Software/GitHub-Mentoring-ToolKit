import { Link } from 'react-router-dom'
import { ArrowRight, MessageSquare, Scale } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'

const scenarios = [
  { title: 'Small team, frequent releases', question: 'Would short-lived branches and a fast review cycle reduce integration risk?', tradeoff: 'Smaller changes are easier to review, but teams still need automated checks and a clear release process.' },
  { title: 'A release needs one urgent fix', question: 'Should the team cherry-pick a fix or merge the whole development branch?', tradeoff: 'Cherry-pick can isolate a fix, but creates a new commit and needs careful tracking across branches.' },
  { title: 'A critical production repository', question: 'Which changes should require approval and passing checks?', tradeoff: 'Rules improve consistency, but must match real checks and include a safe maintainer recovery path.' },
]

export default function WorkflowDiscussion() {
  return (
    <SectionLayout title="Workflow Discussion" subtitle="Use realistic scenarios to compare branching, merging, review, and release decisions.">
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
        <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><MessageSquare size={20} /></div><div><h2 className="font-semibold">How to run the discussion</h2><p className="mt-1 text-sm text-[var(--color-github-muted)]">Ask learners to explain the reason for a choice, not just name a command.</p></div></div>
        <p className="mt-4 text-sm leading-6 text-[var(--color-github-muted)]">There is rarely one workflow that fits every team. The goal is to understand the trade-offs and be able to explain why a team chooses a particular approach.</p>
      </section>

      <div className="space-y-4">
        {scenarios.map((scenario, index) => (
          <article key={scenario.title} className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
            <p className="font-mono text-xs text-emerald-300">SCENARIO 0{index + 1}</p>
            <h2 className="mt-2 text-lg font-semibold">{scenario.title}</h2>
            <p className="mt-3 flex items-start gap-2 text-sm leading-6 text-[var(--color-github-text)]"><Scale size={17} className="mt-0.5 shrink-0 text-sky-300" />{scenario.question}</p>
            <p className="mt-3 text-sm leading-6 text-[var(--color-github-muted)]"><strong className="text-[var(--color-github-text)]">Trade-off to explore:</strong> {scenario.tradeoff}</p>
          </article>
        ))}
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Questions to ask the group</h2>
        <ul className="ml-5 list-disc space-y-2 text-sm leading-6 text-[var(--color-github-muted)]">
          <li>What risks does a pull request reduce, and what can it not guarantee?</li>
          <li>When does a squash merge make history easier to understand?</li>
          <li>Why should shared commits usually not be rebased without coordination?</li>
          <li>Which automated checks would provide meaningful confidence for this project?</li>
          <li>How should a team recover when a bad change has already reached main?</li>
        </ul>
      </section>

      <Link to="/best-practices" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Review professional practices <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
