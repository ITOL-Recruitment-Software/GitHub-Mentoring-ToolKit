import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'

export default function Collaboration() {
  return (
    <SectionLayout
      title="Push & Collaborate"
      subtitle="Publish a feature branch so the team can open a pull request."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        Each developer works on a feature branch. Changes reach main only through reviewed pull requests on GitHub.
      </p>

      <FlowDiagram
        steps={[
          { label: 'Dev A', sublabel: 'feature/auth', color: '#58a6ff' },
          { label: 'Dev B', sublabel: 'feature/ui', color: '#a371f7' },
          { label: 'Pull requests', sublabel: 'On GitHub', color: '#f0883e' },
          { label: 'Review', sublabel: 'Approve', color: '#d29922' },
          { label: 'main', sublabel: 'Stable', color: '#238636' },
        ]}
      />

      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Team rules</h2>
        <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-1.5 leading-relaxed">
          <li>No direct pushes to main (protected branch)</li>
          <li>Every change goes through a PR</li>
          <li>At least one approving review</li>
          <li>CI must pass before merge</li>
          <li>Delete the branch after merge</li>
        </ul>
      </section>

      <div className="mt-10 pt-6 border-t border-[var(--color-github-border)]">
        <p className="text-xs font-semibold tracking-wider text-[var(--color-github-accent)] mb-2">TRY IN FOOTER TERMINAL</p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1">
          <li>git checkout -b feature/auth</li>
          <li>git add .</li>
          <li>git commit -m &quot;feat: add authentication&quot;</li>
          <li>git push -u origin feature/auth</li>
        </ol>
      </div>
    </SectionLayout>
  )
}
