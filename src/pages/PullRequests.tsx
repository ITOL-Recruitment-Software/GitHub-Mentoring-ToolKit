import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import GitGraph from '../components/GitGraph'
import LivePractice from '../components/LivePractice'
import GitHubPRSimulator from '../components/GitHubPRSimulator'

export default function PullRequests() {
  return (
    <SectionLayout
      title="Pull Requests"
      subtitle="Professional collaboration happens on GitHub: open a PR, review, then merge."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        A Pull Request (PR) is a formal request to merge your branch into another branch (usually{' '}
        <code className="text-[var(--color-github-blue)] text-sm">main</code>). Review, discussion, and CI checks all happen here, not in the local terminal.
      </p>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Why teams use PRs</h2>
        <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-1.5 leading-relaxed">
          <li>Code is reviewed before it reaches main</li>
          <li>Knowledge is shared across the team</li>
          <li>CI must pass before merge is allowed</li>
          <li>History stays intentional and auditable</li>
        </ul>
      </section>

      <FlowDiagram
        steps={[
          { label: 'Developer', color: '#58a6ff' },
          { label: 'Feature branch', color: '#a371f7' },
          { label: 'Pull request', color: '#f0883e' },
          { label: 'Review', color: '#d29922' },
          { label: 'Merge', color: '#238636' },
        ]}
      />

      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Visual: branch ready for a PR</h2>
        <GitGraph
          width={440}
          height={170}
          nodes={[
            { id: '1', label: 'main', branch: 'main', x: 50, y: 110 },
            { id: '2', label: '', branch: 'main', x: 150, y: 110 },
            { id: '3', label: 'feature/auth', branch: 'feature', x: 250, y: 45 },
            { id: '4', label: 'open PR', branch: 'feature', x: 360, y: 45 },
          ]}
          edges={[
            { from: '1', to: '2' },
            { from: '2', to: '3' },
            { from: '3', to: '4' },
          ]}
        />
      </section>

      <LivePractice
        variant="github"
        title="Open, review, and merge a pull request"
        subtitle="Simulated GitHub UI: Compare → Create PR → Checks → Approve → Merge. No terminal on this page."
      >
        <GitHubPRSimulator />
      </LivePractice>
    </SectionLayout>
  )
}
