import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, GitBranch, GitCommitHorizontal, GitPullRequest } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'

const stages = [
  { title: 'Start a branch', detail: 'Update your local view of the remote and create a focused branch from the latest main.', command: 'git fetch origin\ngit switch -c feature/short-description origin/main', icon: GitBranch },
  { title: 'Make and inspect changes', detail: 'Keep the change focused, check the diff, and commit work with a meaningful message.', command: 'git status\ngit diff\ngit add path/to/file\ngit commit -m "Describe the change"', icon: GitCommitHorizontal },
  { title: 'Push and open a PR', detail: 'Publish the branch and describe the purpose, approach, and checks in the pull request.', command: 'git push -u origin feature/short-description', icon: GitPullRequest },
]

export default function WorkflowReview() {
  return (
    <SectionLayout title="Workflow Review" subtitle="Review the full GitHub Flow and check each stage before a change is merged.">
      <div className="grid gap-4 lg:grid-cols-3">
        {stages.map((stage, index) => {
          const Icon = stage.icon
          return (
            <article key={stage.title} className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5">
              <div className="flex items-center justify-between"><span className="font-mono text-xs text-[var(--color-github-muted)]">STEP 0{index + 1}</span><Icon size={20} className="text-emerald-300" /></div>
              <h2 className="mt-4 text-lg font-semibold">{stage.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">{stage.detail}</p>
              <pre className="mt-4 overflow-x-auto rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] p-3 text-xs leading-6 text-sky-300"><code>{stage.command}</code></pre>
            </article>
          )
        })}
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Before requesting review</h2>
        <ul className="space-y-3">
          {[
            'The branch contains only changes relevant to the task.',
            'The diff has been reviewed and does not include secrets or generated files.',
            'The README or other documentation is updated where necessary.',
            'Lint, tests, and build checks that exist for the project have passed.',
            'The pull request explains the problem, the solution, and how it was tested.',
          ].map(item => <li key={item} className="flex items-start gap-3 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] p-3 text-sm leading-6 text-[var(--color-github-muted)]"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-emerald-300" />{item}</li>)}
        </ul>
      </section>

      <div className="rounded-lg border border-sky-400/20 bg-sky-400/[0.06] p-4">
        <p className="font-semibold text-sky-200">A review is a conversation</p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Respond to comments respectfully, make requested changes in the same branch, and re-check the final diff. Do not merge until required approvals and checks are satisfied.</p>
      </div>

      <Link to="/workflow-discussion" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Discuss team workflow choices <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
