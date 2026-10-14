import { useState } from 'react'
import SectionLayout from '../../components/SectionLayout'
import LivePractice from '../../components/LivePractice'
import GitGraph from '../../components/GitGraph'
import CodeBlock from '../../components/CodeBlock'

type Branch = 'main' | 'feature'

export default function BranchSimulator() {
  const [currentBranch, setCurrentBranch] = useState<Branch>('main')
  const [commits, setCommits] = useState([
    { id: '1', label: 'Initial', branch: 'main' as Branch, x: 60, y: 120 },
    { id: '2', label: 'Add README', branch: 'main' as Branch, x: 160, y: 120 },
  ])
  const [nextId, setNextId] = useState(3)

  const createBranch = () => {
    if (currentBranch === 'feature') return
    setCurrentBranch('feature')
  }

  const makeCommit = () => {
    const last = commits[commits.length - 1]
    const newCommit = {
      id: String(nextId),
      label: currentBranch === 'main' ? `main-${nextId}` : `feat-${nextId}`,
      branch: currentBranch,
      x: last.x + 100,
      y: currentBranch === 'main' ? 120 : 50,
    }
    setCommits([...commits, newCommit])
    setNextId(nextId + 1)
  }

  const switchToMain = () => setCurrentBranch('main')

  const edges = commits.slice(1).map((c, i) => ({
    from: commits[i].id,
    to: c.id,
  }))

  return (
    <SectionLayout
      title="Branch Simulator"
      subtitle="Create branches and commits. Watch the graph update live."
    >
      <LivePractice
        title="Interactive Branch Practice"
        subtitle="Click the buttons to simulate real Git commands."
        onReset={() => {
          setCurrentBranch('main')
          setCommits([
            { id: '1', label: 'Initial', branch: 'main', x: 60, y: 120 },
            { id: '2', label: 'Add README', branch: 'main', x: 160, y: 120 },
          ])
          setNextId(3)
        }}
      >
        <div className="flex flex-wrap gap-3 mb-4">
          <button
            onClick={createBranch}
            disabled={currentBranch === 'feature'}
            className="px-4 py-2 rounded-lg bg-[var(--color-github-blue)] text-white disabled:opacity-40"
          >
            git checkout -b feature
          </button>
          <button
            onClick={makeCommit}
            className="px-4 py-2 rounded-lg bg-[var(--color-github-accent)] text-black font-medium"
          >
            git commit
          </button>
          <button
            onClick={switchToMain}
            className="px-4 py-2 rounded-lg border border-[var(--color-github-border)]"
          >
            git checkout main
          </button>
        </div>

        <p className="text-sm text-[var(--color-github-muted)] mb-4">
          Current branch: <strong className="text-[var(--color-github-text)]">{currentBranch}</strong>
        </p>

        <GitGraph
          width={500}
          height={220}
          nodes={commits.map(c => ({
            id: c.id,
            label: c.label,
            branch: c.branch,
            x: c.x,
            y: c.y,
          }))}
          edges={edges}
        />

        <CodeBlock
          title="What just happened"
          code={`# You are on: ${currentBranch}\n# Commits so far: ${commits.length}\n# Tip: Always create a feature branch before starting new work.`}
        />
      </LivePractice>
    </SectionLayout>
  )
}
