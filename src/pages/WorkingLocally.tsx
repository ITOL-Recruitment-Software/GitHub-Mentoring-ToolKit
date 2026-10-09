import SectionLayout from '../components/SectionLayout'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'

export default function WorkingLocally() {
  return (
    <SectionLayout
      title="Working Locally"
      subtitle="Clone a repository and make your first local changes."
    >
      <h2 className="text-xl font-semibold">1. Clone the repository</h2>
      <p className="text-[var(--color-github-muted)]">
        Get a full copy of the remote repository onto your machine:
      </p>
      <Terminal
        lines={[
          { type: 'command', text: 'git clone https://github.com/owner/repo.git' },
          { type: 'output', text: 'Cloning into \'repo\'...' },
          { type: 'command', text: 'cd repo' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">2. Check the current state</h2>
      <CodeBlock
        code={`git status\ngit branch\ngit log --oneline -5`}
      />

      <h2 className="text-xl font-semibold mt-8">3. Make a change</h2>
      <p className="text-[var(--color-github-muted)]">
        Edit any file with your editor, then stage and commit the change.
        You are now working entirely on your local machine until you push.
      </p>
    </SectionLayout>
  )
}
