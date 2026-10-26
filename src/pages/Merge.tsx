import SectionLayout from '../components/SectionLayout'
import GitGraph from '../components/GitGraph'
import CodeBlock from '../components/CodeBlock'
import LivePractice from '../components/LivePractice'
import GitHubPRSimulator from '../components/GitHubPRSimulator'

export default function Merge() {
  return (
    <SectionLayout
      title="Merging Pull Requests"
      subtitle="Bring feature work into main. On a team, merge through GitHub, not only with local git merge."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        Merging combines commit history from a feature branch into the target branch. In professional teams you merge via the{' '}
        <strong className="text-[var(--color-github-text)]">Pull Request UI on GitHub</strong> so checks and reviews are enforced.
      </p>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Before merge</h2>
        <GitGraph
          width={460}
          height={180}
          nodes={[
            { id: 'm1', label: 'main', branch: 'main', x: 50, y: 120 },
            { id: 'm2', label: '', branch: 'main', x: 160, y: 120 },
            { id: 'f1', label: 'feature', branch: 'feature', x: 270, y: 40 },
            { id: 'f2', label: '', branch: 'feature', x: 380, y: 40 },
          ]}
          edges={[
            { from: 'm1', to: 'm2' },
            { from: 'm2', to: 'f1' },
            { from: 'f1', to: 'f2' },
          ]}
        />
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">After merge into main</h2>
        <GitGraph
          width={460}
          height={130}
          nodes={[
            { id: 'm1', label: '', branch: 'main', x: 50, y: 65 },
            { id: 'm2', label: '', branch: 'main', x: 160, y: 65 },
            { id: 'm3', label: '', branch: 'main', x: 270, y: 65 },
            { id: 'm4', label: 'main', branch: 'main', x: 380, y: 65 },
          ]}
          edges={[
            { from: 'm1', to: 'm2' },
            { from: 'm2', to: 'm3' },
            { from: 'm3', to: 'm4' },
          ]}
        />
      </section>

      <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]">
        <p className="text-sm font-medium text-[var(--color-github-text)]">Team rule</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
          Prefer merge methods on the PR (merge commit, squash, or rebase) after approval and green CI. Local{' '}
          <code className="text-[var(--color-github-blue)] text-xs">git merge</code> is fine for solo projects or demos only.
        </p>
      </div>

      <CodeBlock
        title="Local-only (optional reference)"
        code={`git checkout main\ngit pull origin main\ngit merge feature/auth   # prefer PR merge on GitHub instead`}
      />

      <LivePractice
        variant="github"
        title="Merge on GitHub"
        subtitle="Use the same production flow as the Pull Requests page: approve, choose the merge method, and confirm."
      >
        <GitHubPRSimulator />
      </LivePractice>
    </SectionLayout>
  )
}
