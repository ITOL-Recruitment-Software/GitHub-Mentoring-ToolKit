import SectionLayout from '../components/SectionLayout'
import { CheckCircle } from 'lucide-react'

export default function BestPractices() {
  const practices = [
    'Protect the main branch by requiring PRs and status checks.',
    'Use Conventional Commits for every message.',
    'Keep feature branches short-lived (days, not weeks).',
    'Write a clear README and keep it updated.',
    'Never commit secrets; use environment variables and .gitignore.',
    'Review every PR carefully, including small ones.',
    'Delete merged branches both locally and on the remote.',
    'Run tests (and lint) before opening a PR.',
    'Prefer small, focused PRs over giant ones.',
    'Document non-obvious decisions in the PR description.',
  ]

  return (
    <SectionLayout
      title="Best Practices"
      subtitle="Professional habits that scale from solo projects to large teams."
    >
      <ul className="space-y-3">
        {practices.map((p, i) => (
          <li key={i} className="flex items-start gap-3 p-3 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]">
            <CheckCircle size={18} className="text-[var(--color-github-accent)] shrink-0 mt-0.5" />
            <span className="text-sm text-[var(--color-github-muted)]">{p}</span>
          </li>
        ))}
      </ul>
    </SectionLayout>
  )
}
