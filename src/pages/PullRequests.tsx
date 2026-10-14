import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import GitGraph from '../components/GitGraph'
import LivePractice from '../components/LivePractice'
import GitHubPRSimulator from '../components/GitHubPRSimulator'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function PullRequests() {
  return (
    <SectionLayout
      title="Pull Requests"
      subtitle="The heart of professional collaboration — on GitHub, not in the terminal."
    >
      <p className="text-[var(--color-github-muted)]">
        A Pull Request (PR) is a formal request to merge your branch into another branch (usually main).
        It is the place where code review, discussion, and automated checks happen.
      </p>

      <h2 className="text-xl font-semibold mt-6">Why companies use PRs</h2>
      <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-1">
        <li>Code quality is reviewed before it reaches main</li>
        <li>Knowledge is shared across the team</li>
        <li>CI tests must pass before merge</li>
        <li>History stays clean and intentional</li>
      </ul>

      <FlowDiagram
        steps={[
          { label: 'Developer', color: '#58a6ff' },
          { label: 'Feature Branch', color: '#a371f7' },
          { label: 'Pull Request', color: '#f0883e' },
          { label: 'Code Review', color: '#d29922' },
          { label: 'Approved', color: '#238636' },
          { label: 'Merge', color: '#238636' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Visual: branch waiting for PR</h2>
      <GitGraph
        width={440}
        height={180}
        nodes={[
          { id: '1', label: 'main', branch: 'main', x: 50, y: 120 },
          { id: '2', label: '', branch: 'main', x: 150, y: 120 },
          { id: '3', label: 'feature/auth', branch: 'feature', x: 250, y: 50 },
          { id: '4', label: 'open PR →', branch: 'feature', x: 360, y: 50 },
        ]}
        edges={[
          { from: '1', to: '2' },
          { from: '2', to: '3' },
          { from: '3', to: '4' },
        ]}
      />

      <LivePractice
        title="Live Practice: Open & merge a PR (GitHub UI)"
        subtitle="This looks like github.com — not Git Bash. Walk through compare → open → approve → merge."
      >
        <GitHubPRSimulator />
      </LivePractice>

      <LivePractice
        title="Optional: terminal commands after the PR is merged"
        subtitle="Keep using Git Bash for local sync. Terminal is still here."
      >
        <p className="text-sm text-[var(--color-github-muted)] mb-2 font-mono">
          After merge on GitHub, update local main:
        </p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-3">
          <li>git checkout main</li>
          <li>git pull origin main</li>
          <li>git branch -d feature/auth</li>
        </ol>
        <InteractiveTerminal
          title="Git Bash – after PR merge"
          prompt="MINGW64:/c/Users/student/my-project$"
          height="240px"
          commandMap={{
            'git checkout main': [{ type: 'output', text: "Switched to branch 'main'" }],
            'git pull origin main': [
              { type: 'output', text: 'Updating a1b2c3d..e4f5g6h' },
              { type: 'output', text: 'Fast-forward' },
              { type: 'output', text: ' src/Login.jsx | 42 ++++++++++++++++++++++' },
            ],
            'git branch -d feature/auth': [
              { type: 'output', text: 'Deleted branch feature/auth (was a1b2c3d).' },
            ],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
