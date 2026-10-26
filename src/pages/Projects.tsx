import { Link } from 'react-router-dom'
import { ArrowRight, Kanban, Target } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'

export default function Projects() {
  return (
    <SectionLayout title="GitHub Projects / Kanban" subtitle="Plan work visually and keep issues, pull requests, and delivery status connected.">
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
        <div className="flex items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><Kanban size={20} /></div><div><h2 className="font-semibold">A shared view of the work</h2><p className="mt-1 text-sm text-[var(--color-github-muted)]">A project board helps a team see what is planned, active, blocked, and complete.</p></div></div>
        <p className="mt-4 text-sm leading-6 text-[var(--color-github-muted)]">GitHub Projects can use table, board, and roadmap layouts. Items can link to issues and pull requests, and custom fields can represent status, priority, iteration, or an owner. Keep the board simple enough that the team will maintain it.</p>
      </section>

      <FlowDiagram steps={[
        { label: 'Backlog', sublabel: 'Ideas and requests', color: '#8b949e' },
        { label: 'Ready', sublabel: 'Clear and prioritised', color: '#58a6ff' },
        { label: 'In progress', sublabel: 'Being worked on', color: '#f0883e' },
        { label: 'Review', sublabel: 'PR and checks', color: '#a371f7' },
        { label: 'Done', sublabel: 'Accepted outcome', color: '#238636' },
      ]} />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Set up a useful board</h2>
        <ol className="ml-5 list-decimal space-y-2 text-sm leading-6 text-[var(--color-github-muted)]">
          <li>Create a project for a team, course, or delivery goal.</li>
          <li>Add the issues and pull requests that represent real work.</li>
          <li>Create a status field and a small set of workflow states.</li>
          <li>Agree what “Done” means, such as reviewed, checks passed, and merged.</li>
          <li>Review the board regularly and close or reprioritise stale items.</li>
        </ol>
      </section>

      <div className="rounded-lg border border-sky-400/20 bg-sky-400/[0.06] p-4">
        <div className="flex items-center gap-2 text-sky-200"><Target size={18} /><p className="font-semibold">Mentoring exercise</p></div>
        <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Ask learners to create three issues for a small portfolio project, prioritise them, move one into progress, and open a pull request linked to the relevant issue. Discuss what information makes an item ready to start.</p>
      </div>

      <Link to="/issues" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Learn about GitHub Issues <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
