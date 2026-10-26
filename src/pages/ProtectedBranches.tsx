import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function ProtectedBranches() {
  return (
    <SectionLayout title="Protected Branches & CODEOWNERS" subtitle="Use repository rules to keep important branches stable and route reviews to the right people.">
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><ShieldCheck size={20} /></div>
          <div><h2 className="font-semibold">What branch protection does</h2><p className="mt-1 text-sm text-[var(--color-github-muted)]">It adds rules before changes can reach an important branch such as <code>main</code>.</p></div>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--color-github-muted)]">Depending on repository settings and plan, rules can require pull requests, approvals, successful status checks, conversation resolution, signed commits, or linear history. Rules can also restrict force pushes and branch deletion.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Configure protection</h2>
        <ol className="ml-5 list-decimal space-y-2 text-sm leading-6 text-[var(--color-github-muted)]">
          <li>Open the repository's <strong className="text-[var(--color-github-text)]">Settings</strong>.</li>
          <li>Find <strong className="text-[var(--color-github-text)]">Rules</strong> and choose a ruleset, or use branch protection rules if that is the available option.</li>
          <li>Target the default branch, usually <code>main</code>.</li>
          <li>Enable pull requests, required reviews, and the checks your project actually runs.</li>
          <li>Save the rule and test it with a pull request rather than assuming it is active.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Route review requests with CODEOWNERS</h2>
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">Add a <code>.github/CODEOWNERS</code> file to define suggested owners for paths. The example below uses placeholder usernames and teams; replace them with real accounts that have repository access.</p>
        <CodeBlock title=".github/CODEOWNERS" language="text" code={`# Default owner for all files
* @your-username

# Front-end code
src/components/ @frontend-team

# Documentation
*.md @docs-team
docs/ @docs-team`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">More specific patterns can override earlier matches, and the last matching pattern takes precedence. To make code-owner approval mandatory, enable the corresponding review requirement in your repository rules.</p>
      </section>

      <div className="rounded-lg border border-amber-400/25 bg-amber-400/[0.06] p-4">
        <p className="font-semibold text-amber-200">A rule is only as useful as its checks</p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Do not require a status check by a name that never runs. Confirm the workflow reports the expected check on a pull request and keep at least one recovery path for maintainers.</p>
      </div>

      <Link to="/actions" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Learn about GitHub Actions <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
