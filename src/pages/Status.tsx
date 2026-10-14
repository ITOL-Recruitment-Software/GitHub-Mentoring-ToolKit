import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function Status() {
  return (
    <SectionLayout
      title="Understanding Git Status"
      subtitle="The first command every developer runs before and after changes."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        <code className="text-[var(--color-github-blue)] text-sm">git status</code> shows what Git sees: clean tree, modified files, or staged changes. Mentors should run it constantly during demos.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">Clean working tree</h2>
        <FlowDiagram
          steps={[{ label: 'Working directory', sublabel: 'Nothing to commit', color: '#238636' }]}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">After editing files</h2>
        <FlowDiagram
          steps={[{ label: 'Working directory', sublabel: 'Modified files detected', color: '#f0883e' }]}
        />
      </section>

      <div className="p-4 rounded-lg border border-[var(--color-github-blue)]/30 bg-[#161b22]">
        <p className="text-sm text-[var(--color-github-muted)] leading-relaxed">
          <strong className="text-[var(--color-github-text)]">Mentor tip:</strong> Always show{' '}
          <code className="text-[var(--color-github-blue)] text-xs">git status</code> before and after every action so students never guess Git’s state.
        </p>
      </div>

      <LivePractice
        variant="terminal"
        title="Type git status"
        subtitle="Simulated Git Bash — type the command and read the realistic output."
      >
        <p className="text-sm text-[var(--color-github-muted)] mb-3">
          Try: <code className="text-[var(--color-github-accent)] text-sm">git status</code>
        </p>
        <InteractiveTerminal
          title="Git Bash – status"
          prompt="MINGW64:/c/Users/student/my-project$"
          height="260px"
          commandMap={{
            'git status': [
              { type: 'output', text: 'On branch main' },
              { type: 'output', text: "Your branch is up to date with 'origin/main'." },
              { type: 'output', text: '' },
              { type: 'output', text: 'Changes not staged for commit:' },
              { type: 'output', text: '  (use "git add <file>..." to update what will be committed)' },
              { type: 'output', text: '  (use "git restore <file>..." to discard changes in working directory)' },
              { type: 'output', text: '\tmodified:   src/Login.jsx' },
              { type: 'output', text: '\tmodified:   src/App.jsx' },
              { type: 'output', text: '' },
              { type: 'output', text: 'no changes added to commit (use "git add" and/or "git commit -a")' },
            ],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
