import SectionLayout from '../components/SectionLayout'
import GitGraph from '../components/GitGraph'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'
import LivePractice from '../components/LivePractice'
import GitHubPRSimulator from '../components/GitHubPRSimulator'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function Merge() {
  return (
    <SectionLayout
      title="Merging Pull Requests"
      subtitle="Combine branches — prefer GitHub PR merge in teams; terminal merge for teaching."
    >
      <p className="text-[var(--color-github-muted)]">
        Merging brings the commits from a feature branch into the target branch (usually main).
        On a team, you almost always merge via a <strong className="text-[var(--color-github-text)]">Pull Request on GitHub</strong>, not with a local terminal command alone.
      </p>

      <h2 className="text-xl font-semibold mt-6">Before merge (visual)</h2>
      <GitGraph
        width={400}
        height={180}
        nodes={[
          { id: 'm1', label: 'main', branch: 'main', x: 60, y: 120 },
          { id: 'm2', label: '', branch: 'main', x: 150, y: 120 },
          { id: 'f1', label: 'feature', branch: 'feature', x: 240, y: 50 },
          { id: 'f2', label: '', branch: 'feature', x: 330, y: 50 },
        ]}
        edges={[
          { from: 'm1', to: 'm2' },
          { from: 'm2', to: 'f1' },
          { from: 'f1', to: 'f2' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">After merge into main (visual)</h2>
      <GitGraph
        width={400}
        height={140}
        nodes={[
          { id: 'm1', label: '', branch: 'main', x: 60, y: 70 },
          { id: 'm2', label: '', branch: 'main', x: 150, y: 70 },
          { id: 'm3', label: '', branch: 'main', x: 240, y: 70 },
          { id: 'm4', label: 'main', branch: 'main', x: 330, y: 70 },
        ]}
        edges={[
          { from: 'm1', to: 'm2' },
          { from: 'm2', to: 'm3' },
          { from: 'm3', to: 'm4' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Local merge commands (teaching only)</h2>
      <Terminal
        lines={[
          { type: 'command', text: 'git checkout main' },
          { type: 'command', text: 'git merge feature-login' },
          { type: 'output', text: 'Updating a1b2c3d..e4f5g6h' },
          { type: 'output', text: 'Fast-forward' },
          { type: 'output', text: ' src/Login.jsx | 42 ++++++++++++++++++++++' },
        ]}
      />

      <CodeBlock
        title="Team rule"
        code={`# Prefer merging via Pull Request on GitHub.\n# Local merge is useful for personal projects or when teaching.`}
      />

      <LivePractice
        title="Live Practice: Merge on GitHub (UI)"
        subtitle="Same flow as the Pull Requests page — looks like github.com, not the terminal."
      >
        <GitHubPRSimulator />
      </LivePractice>

      <LivePractice
        title="Live Practice: local merge in Git Bash"
        subtitle="Terminal kept for command practice."
      >
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-3">
          <li>git checkout main</li>
          <li>git merge feature/auth</li>
          <li>git log --oneline</li>
        </ol>
        <InteractiveTerminal
          title="Git Bash – local merge"
          prompt="MINGW64:/c/Users/student/my-project$"
          height="240px"
          commandMap={{
            'git checkout main': [{ type: 'output', text: "Switched to branch 'main'" }],
            'git merge feature/auth': [
              { type: 'output', text: 'Updating a1b2c3d..e4f5g6h' },
              { type: 'output', text: 'Fast-forward' },
              { type: 'output', text: ' src/Login.jsx | 42 ++++++++++++++++++++++' },
            ],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
