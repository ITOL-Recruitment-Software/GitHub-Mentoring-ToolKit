import SectionLayout from '../../components/SectionLayout'
import LivePractice from '../../components/LivePractice'
import GitHubPRSimulator from '../../components/GitHubPRSimulator'
import GitGraph from '../../components/GitGraph'

export default function PRMergePractice() {
  return (
    <SectionLayout
      title="PR & Merge Practice"
      subtitle="GitHub website flow only — open a PR, pass checks, approve, and merge."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        Use this in mentoring to demonstrate Compare → Create PR → Checks → Approve → Merge without leaving a browser-style UI. No Git Bash on this page.
      </p>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Lifecycle graph</h2>
        <GitGraph
          width={480}
          height={190}
          nodes={[
            { id: '1', label: 'main', branch: 'main', x: 40, y: 130 },
            { id: '2', label: '', branch: 'main', x: 130, y: 130 },
            { id: '3', label: 'feature', branch: 'feature', x: 220, y: 45 },
            { id: '4', label: 'PR open', branch: 'feature', x: 320, y: 45 },
            { id: '5', label: 'merged', branch: 'main', x: 420, y: 130 },
          ]}
          edges={[
            { from: '1', to: '2' },
            { from: '2', to: '3' },
            { from: '3', to: '4' },
            { from: '2', to: '5' },
            { from: '4', to: '5' },
          ]}
        />
      </section>

      <LivePractice
        variant="github"
        title="Full PR lifecycle"
        subtitle="Click through every step as you would on github.com."
      >
        <GitHubPRSimulator />
      </LivePractice>
    </SectionLayout>
  )
}
