import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function WorkingLocally() {
  return (
    <SectionLayout
      title="Working Locally"
      subtitle="Clone a repository and inspect it on your machine."
    >
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">1. Clone</h2>
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          Copy the remote repository to your computer, then enter the project folder.
        </p>
        <CodeBlock
          title="Clone"
          code={`git clone https://github.com/owner/repo.git\ncd repo`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">2. Inspect</h2>
        <CodeBlock
          code={`git status\ngit branch\ngit log --oneline -5`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">3. Change locally</h2>
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          Edit files in your editor, then stage and commit. Nothing reaches GitHub until you push.
        </p>
      </section>

      <LivePractice
        variant="terminal"
        title="Clone and inspect"
        subtitle="Practice the commands in Git Bash."
      >
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-4">
          <li>git clone https://github.com/owner/demo-repo.git</li>
          <li>cd demo-repo</li>
          <li>git status</li>
          <li>git log --oneline</li>
        </ol>
        <InteractiveTerminal
          title="Git Bash – local clone"
          prompt="MINGW64:/c/Users/student$"
          height="280px"
          commandMap={{
            'git clone https://github.com/owner/demo-repo.git': [
              { type: 'output', text: "Cloning into 'demo-repo'..." },
              { type: 'output', text: 'Receiving objects: 100% (12/12), done.' },
            ],
            'cd demo-repo': [{ type: 'output', text: '' }],
            'git status': [
              { type: 'output', text: 'On branch main' },
              { type: 'output', text: 'nothing to commit, working tree clean' },
            ],
            'git log --oneline': [
              { type: 'output', text: 'a1b2c3d (HEAD -> main) Initial commit' },
              { type: 'output', text: 'e4f5g6h docs: add README' },
            ],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
