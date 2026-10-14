import SectionLayout from '../../components/SectionLayout'
import LivePractice from '../../components/LivePractice'
import GitHubPRSimulator from '../../components/GitHubPRSimulator'
import GitGraph from '../../components/GitGraph'
import InteractiveTerminal from '../../components/InteractiveTerminal'

export default function PRMergePractice() {
  return (
    <SectionLayout
      title="PR & Merge Practice"
      subtitle="GitHub-style environment: open a pull request, approve, and merge — with graphs."
    >
      <p className="text-[var(--color-github-muted)]">
        This practice mimics the <strong className="text-[var(--color-github-text)]">GitHub website</strong>,
        not a terminal. Use it in mentoring sessions to show Compare → Create PR → Checks → Approve → Merge.
      </p>

      <h2 className="text-xl font-semibold mt-6">Big picture graph</h2>
      <GitGraph
        width={480}
        height={200}
        nodes={[
          { id: '1', label: 'main', branch: 'main', x: 40, y: 140 },
          { id: '2', label: '', branch: 'main', x: 130, y: 140 },
          { id: '3', label: 'feature', branch: 'feature', x: 220, y: 50 },
          { id: '4', label: 'PR open', branch: 'feature', x: 320, y: 50 },
          { id: '5', label: 'merged', branch: 'main', x: 420, y: 140 },
        ]}
        edges={[
          { from: '1', to: '2' },
          { from: '2', to: '3' },
          { from: '3', to: '4' },
          { from: '2', to: '5' },
          { from: '4', to: '5' },
        ]}
      />

      <LivePractice
        title="GitHub UI: full PR lifecycle"
        subtitle="Click through every step. Looks like github.com."
      >
        <GitHubPRSimulator />
      </LivePractice>

      <LivePractice
        title="Still available: Git Bash after merge"
        subtitle="Terminal is kept for local git pull / branch cleanup."
      >
        <InteractiveTerminal
          title="Git Bash – sync after GitHub merge"
          prompt="MINGW64:/c/Users/student/my-project$"
          height="220px"
        />
      </LivePractice>
    </SectionLayout>
  )
}
