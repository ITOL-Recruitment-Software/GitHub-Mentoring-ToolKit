import SectionLayout from '../components/SectionLayout'
import GitGraph from '../components/GitGraph'
import CodeBlock from '../components/CodeBlock'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function Branching() {
  return (
    <SectionLayout
      title="Branching with Git"
      subtitle="Isolated lines of work that keep main stable."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        Branches let people (or one person) build features without breaking production code on main.
      </p>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Visual graph</h2>
        <GitGraph
          width={420}
          height={200}
          nodes={[
            { id: '1', label: 'Initial', branch: 'main', x: 40, y: 110 },
            { id: '2', label: 'README', branch: 'main', x: 140, y: 110 },
            { id: '3', label: 'login form', branch: 'feature', x: 240, y: 45 },
            { id: '4', label: 'validation', branch: 'feature', x: 340, y: 45 },
            { id: '5', label: 'docs', branch: 'main', x: 240, y: 160 },
          ]}
          edges={[
            { from: '1', to: '2' },
            { from: '2', to: '3' },
            { from: '3', to: '4' },
            { from: '2', to: '5' },
          ]}
        />
      </section>

      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-[var(--color-github-accent)]/40 bg-[#161b22]">
          <h3 className="font-semibold text-[var(--color-github-accent)] text-sm">main</h3>
          <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
            Production-ready. Only reviewed, tested work lands here.
          </p>
        </div>
        <div className="p-4 rounded-lg border border-[var(--color-github-blue)]/40 bg-[#161b22]">
          <h3 className="font-semibold text-[var(--color-github-blue)] text-sm">feature</h3>
          <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
            Safe place to build and break things without affecting main.
          </p>
        </div>
      </div>

      <CodeBlock
        title="Mental model"
        code={`main       ──●──●──────────●──  (stable)\n              \\\nfeature        ●──●──●         (in progress)`}
      />

      <LivePractice
        variant="terminal"
        title="Create and switch branches"
        subtitle="Practice checkout / switch in Git Bash."
      >
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-4">
          <li>git branch</li>
          <li>git checkout -b feature/login</li>
          <li>git checkout main</li>
        </ol>
        <InteractiveTerminal
          title="Git Bash – branching"
          prompt="MINGW64:/c/Users/student/my-project$"
          height="260px"
          commandMap={{
            'git branch': [{ type: 'output', text: '* main' }],
            'git checkout -b feature/login': [
              { type: 'output', text: "Switched to a new branch 'feature/login'" },
            ],
            'git checkout main': [{ type: 'output', text: "Switched to branch 'main'" }],
            'git switch -c feature/login': [
              { type: 'output', text: "Switched to a new branch 'feature/login'" },
            ],
            'git switch main': [{ type: 'output', text: "Switched to branch 'main'" }],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
