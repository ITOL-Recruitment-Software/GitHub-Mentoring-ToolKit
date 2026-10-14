import SectionLayout from '../components/SectionLayout'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

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
          { type: 'output', text: "Cloning into 'repo'..." },
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

      <LivePractice
        title="Live Practice: Clone and inspect a repo"
        subtitle="Type the commands in the simulated Git Bash."
      >
        <p className="text-sm text-[var(--color-github-muted)] mb-2">Try:</p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-4">
          <li>git clone https://github.com/owner/demo-repo.git</li>
          <li>cd demo-repo</li>
          <li>git status</li>
          <li>git log --oneline</li>
        </ol>

        <InteractiveTerminal
          title="Git Bash – Working Locally"
          prompt="MINGW64:/c/Users/student$"
          height="280px"
          commandMap={{
            'git clone https://github.com/owner/demo-repo.git': [
              { type: 'output', text: "Cloning into 'demo-repo'..." },
              { type: 'output', text: 'remote: Enumerating objects: 12, done.' },
              { type: 'output', text: 'remote: Counting objects: 100% (12/12), done.' },
              { type: 'output', text: 'Receiving objects: 100% (12/12), done.' },
            ],
            'cd demo-repo': [
              { type: 'output', text: '' },
            ],
            'git status': [
              { type: 'output', text: 'On branch main' },
              { type: 'output', text: "Your branch is up to date with 'origin/main'." },
              { type: 'output', text: '' },
              { type: 'output', text: 'nothing to commit, working tree clean' },
            ],
            'git log --oneline': [
              { type: 'output', text: 'a1b2c3d (HEAD -> main, origin/main) Initial commit' },
              { type: 'output', text: 'e4f5g6h docs: add README' },
            ],
            'git branch': [
              { type: 'output', text: '* main' },
            ],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
