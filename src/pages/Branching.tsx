import SectionLayout from '../components/SectionLayout'
import GitGraph from '../components/GitGraph'
import CodeBlock from '../components/CodeBlock'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function Branching() {
  return (
    <SectionLayout
      title="Branching Explained"
      subtitle="Isolated lines of development that keep main stable."
    >
      <p className="text-[var(--color-github-muted)]">
        Branches let multiple people (or one person) work on different features at the same time
        without stepping on each other.
      </p>

      <h2 className="text-xl font-semibold mt-6">Visual Git graph</h2>
      <GitGraph
        width={420}
        height={220}
        nodes={[
          { id: '1', label: 'Initial commit', branch: 'main', x: 40, y: 110 },
          { id: '2', label: 'Add README', branch: 'main', x: 140, y: 110 },
          { id: '3', label: 'feat: login form', branch: 'feature', x: 240, y: 50 },
          { id: '4', label: 'feat: validation', branch: 'feature', x: 340, y: 50 },
          { id: '5', label: 'docs: update', branch: 'main', x: 240, y: 170 },
        ]}
        edges={[
          { from: '1', to: '2' },
          { from: '2', to: '3' },
          { from: '3', to: '4' },
          { from: '2', to: '5' },
        ]}
      />

      <div className="grid sm:grid-cols-2 gap-4 mt-6">
        <div className="p-4 rounded-lg border border-[var(--color-github-accent)]/40 bg-[#161b22]">
          <h3 className="font-semibold text-[var(--color-github-accent)]">main branch</h3>
          <p className="text-sm text-[var(--color-github-muted)] mt-1">
            Production-ready code. Only tested, reviewed work should land here.
          </p>
        </div>
        <div className="p-4 rounded-lg border border-[var(--color-github-blue)]/40 bg-[#161b22]">
          <h3 className="font-semibold text-[var(--color-github-blue)]">feature branch</h3>
          <p className="text-sm text-[var(--color-github-muted)] mt-1">
            Safe area to develop, experiment, and break things without affecting main.
          </p>
        </div>
      </div>

      <CodeBlock
        title="Mental model"
        code={`main          ──●──●──────────────●──  (always stable)\n                 \\\nfeature-login     ●──●──●          (work in progress)`}
      />

      <LivePractice
        title="Live Practice: Create and switch branches"
        subtitle="Type the real Git commands in the terminal below."
      >
        <p className="text-sm text-[var(--color-github-muted)] mb-2">Try this sequence:</p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-4">
          <li>git branch</li>
          <li>git checkout -b feature/login</li>
          <li>git branch</li>
          <li>git checkout main</li>
        </ol>

        <InteractiveTerminal
          title="Git Bash – Branching Practice"
          prompt="MINGW64:/c/Users/student/my-project$"
          height="280px"
          commandMap={{
            'git branch': [
              { type: 'output', text: '* main' },
            ],
            'git checkout -b feature/login': [
              { type: 'output', text: "Switched to a new branch 'feature/login'" },
            ],
            'git checkout main': [
              { type: 'output', text: "Switched to branch 'main'" },
            ],
            'git switch -c feature/login': [
              { type: 'output', text: "Switched to a new branch 'feature/login'" },
            ],
            'git switch main': [
              { type: 'output', text: "Switched to branch 'main'" },
            ],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
