import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function Collaboration() {
  return (
    <SectionLayout
      title="GitHub Collaboration Workflow"
      subtitle="How professional teams ship code together."
    >
      <p className="text-[var(--color-github-muted)]">
        In a real team every developer works on their own feature branch. Changes only reach main
        through reviewed Pull Requests.
      </p>

      <FlowDiagram
        steps={[
          { label: 'Developer A', sublabel: 'feature/auth', color: '#58a6ff' },
          { label: 'Developer B', sublabel: 'feature/dashboard', color: '#a371f7' },
          { label: 'Pull Requests', sublabel: 'Open on GitHub', color: '#f0883e' },
          { label: 'Code Review', sublabel: 'Comments & approval', color: '#d29922' },
          { label: 'Main Branch', sublabel: 'Stable & shared', color: '#238636' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Key rules teams follow</h2>
      <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-2">
        <li>No direct pushes to main (protected branch).</li>
        <li>Every change goes through a PR.</li>
        <li>At least one approving review is required.</li>
        <li>CI must pass before merge is allowed.</li>
        <li>Branches are deleted after merge to keep the list clean.</li>
      </ul>

      <LivePractice
        title="Live Practice: Push your branch"
        subtitle="Type the commands used to publish a feature branch."
      >
        <p className="text-sm text-[var(--color-github-muted)] mb-2">Typical sequence:</p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-4">
          <li>git checkout -b feature/auth</li>
          <li>git add .</li>
          <li>git commit -m "feat: add authentication"</li>
          <li>git push -u origin feature/auth</li>
        </ol>

        <InteractiveTerminal
          title="Git Bash – Collaboration Practice"
          prompt="MINGW64:/c/Users/student/my-project$"
          height="280px"
          commandMap={{
            'git checkout -b feature/auth': [
              { type: 'output', text: "Switched to a new branch 'feature/auth'" },
            ],
            'git add .': [{ type: 'success', text: '' }],
            'git push -u origin feature/auth': [
              { type: 'output', text: 'Enumerating objects: 5, done.' },
              { type: 'output', text: 'Counting objects: 100% (5/5), done.' },
              { type: 'output', text: 'Writing objects: 100% (3/3), 412 bytes | 412.00 KiB/s, done.' },
              { type: 'output', text: 'Total 3 (delta 0), reused 0 (delta 0), pack-reused 0' },
              { type: 'output', text: "To https://github.com/owner/repo.git" },
              { type: 'output', text: ' * [new branch]      feature/auth -> feature/auth' },
              { type: 'output', text: "Branch 'feature/auth' set up to track remote branch 'feature/auth' from 'origin'." },
            ],
            'git push': [
              { type: 'output', text: 'Everything up-to-date' },
            ],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
