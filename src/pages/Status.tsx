import SectionLayout from '../components/SectionLayout'
import Terminal from '../components/Terminal'
import FlowDiagram from '../components/FlowDiagram'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function Status() {
  return (
    <SectionLayout
      title="Understanding Git Status"
      subtitle="The first command every developer runs: git status"
    >
      <p className="text-[var(--color-github-muted)]">
        Before you change anything, the working directory is clean. After you edit files, Git knows
        they are modified and waits for you to stage them.
      </p>

      <h2 className="text-xl font-semibold mt-6">Before any changes</h2>
      <FlowDiagram
        steps={[
          { label: 'Working Directory', sublabel: 'Clean — nothing to commit', color: '#238636' },
        ]}
      />
      <Terminal
        lines={[
          { type: 'command', text: 'git status' },
          { type: 'output', text: 'On branch main' },
          { type: 'output', text: 'nothing to commit, working tree clean' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">After editing files</h2>
      <FlowDiagram
        steps={[
          { label: 'Working Directory', sublabel: 'Modified files detected', color: '#f0883e' },
        ]}
      />
      <Terminal
        lines={[
          { type: 'command', text: 'git status' },
          { type: 'output', text: 'On branch main' },
          { type: 'output', text: 'Changes not staged for commit:' },
          { type: 'output', text: '  (use "git add <file>..." to update what will be committed)' },
          { type: 'output', text: '        modified:   src/Login.jsx' },
          { type: 'output', text: '        modified:   src/App.jsx' },
        ]}
      />

      <div className="p-4 rounded-lg border border-[var(--color-github-blue)]/30 bg-[#161b22] mt-6">
        <p className="text-sm text-[var(--color-github-muted)]">
          <strong className="text-[var(--color-github-text)]">Pro tip for mentors:</strong> Always
          show students <code className="text-[var(--color-github-blue)]">git status</code> before
          and after every action. It is the safest way to understand what Git currently sees.
        </p>
      </div>

      {/* LIVE PRACTICE */}
      <LivePractice
        title="Live Practice: Type git status yourself"
        subtitle="Open the simulated Git Bash below and type the commands."
      >
        <p className="text-sm text-[var(--color-github-muted)] mb-3 font-mono">
          Try: <span className="text-[var(--color-github-accent)]">git status</span>
        </p>
        <InteractiveTerminal
          title="Git Bash – Status Practice"
          prompt="MINGW64:/c/Users/student/my-project$"
          height="260px"
          commandMap={{
            'git status': [
              { type: 'output', text: 'On branch main' },
              { type: 'output', text: 'Your branch is up to date with \'origin/main\'.' },
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
