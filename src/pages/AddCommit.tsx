import SectionLayout from '../components/SectionLayout'
import Terminal from '../components/Terminal'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function AddCommit() {
  return (
    <SectionLayout
      title="Git Add & Commit"
      subtitle="Staging changes and creating a permanent save point in history."
    >
      <p className="text-[var(--color-github-muted)]">
        A <strong className="text-[var(--color-github-text)]">commit</strong> is a snapshot of your
        project at a specific moment. Think of it as a save point you can always return to.
      </p>

      <h2 className="text-xl font-semibold mt-6">Interactive example</h2>
      <p className="text-sm text-[var(--color-github-muted)] mb-2">File changed: Login.jsx</p>

      <Terminal
        lines={[
          { type: 'command', text: 'git status' },
          { type: 'output', text: '        modified:   src/Login.jsx' },
          { type: 'comment', text: '# Stage the file' },
          { type: 'command', text: 'git add src/Login.jsx' },
          { type: 'command', text: 'git status' },
          { type: 'output', text: 'Changes to be committed:' },
          { type: 'output', text: '        modified:   src/Login.jsx' },
          { type: 'comment', text: '# Create the commit' },
          { type: 'command', text: 'git commit -m "feat: add login component"' },
          { type: 'output', text: '[main a1b2c3d] feat: add login component' },
          { type: 'output', text: ' 1 file changed, 42 insertions(+)' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Good vs Bad commit messages</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="p-4 rounded-lg border border-[var(--color-github-red)]/40 bg-[#161b22]">
          <h3 className="text-[var(--color-github-red)] font-semibold mb-2">Bad</h3>
          <ul className="text-sm text-[var(--color-github-muted)] space-y-1 font-mono">
            <li>"changes"</li>
            <li>"update"</li>
            <li>"fix"</li>
            <li>"wip"</li>
            <li>"asdf"</li>
          </ul>
        </div>
        <div className="p-4 rounded-lg border border-[var(--color-github-accent)]/40 bg-[#161b22]">
          <h3 className="text-[var(--color-github-accent)] font-semibold mb-2">Good</h3>
          <ul className="text-sm text-[var(--color-github-muted)] space-y-1 font-mono">
            <li>"Add user authentication"</li>
            <li>"Fix navbar responsive layout"</li>
            <li>"Create API service"</li>
            <li>"Remove unused imports"</li>
          </ul>
        </div>
      </div>

      <p className="text-[var(--color-github-muted)] mt-6">
        Use <code className="text-[var(--color-github-blue)]">git add .</code> to stage everything,
        or stage specific files for cleaner commits.
      </p>

      {/* LIVE PRACTICE */}
      <LivePractice
        title="Live Practice: Stage and commit yourself"
        subtitle="Type the real sequence in the Git Bash below."
      >
        <p className="text-sm text-[var(--color-github-muted)] mb-2">Suggested sequence:</p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-4">
          <li>git status</li>
          <li>git add src/Login.jsx</li>
          <li>git status</li>
          <li>git commit -m "feat: add login component"</li>
          <li>git log --oneline</li>
        </ol>

        <InteractiveTerminal
          title="Git Bash – Add & Commit Practice"
          prompt="MINGW64:/c/Users/student/my-project$"
          height="300px"
          commandMap={{
            'git status': [
              { type: 'output', text: 'On branch main' },
              { type: 'output', text: 'Changes not staged for commit:' },
              { type: 'output', text: '  (use "git add <file>..." to update what will be committed)' },
              { type: 'output', text: '\tmodified:   src/Login.jsx' },
              { type: 'output', text: '' },
              { type: 'output', text: 'no changes added to commit (use "git add" and/or "git commit -a")' },
            ],
            'git add src/Login.jsx': [{ type: 'success', text: '' }],
            'git add .': [{ type: 'success', text: '' }],
            'git log --oneline': [
              { type: 'output', text: 'a1b2c3d (HEAD -> main) feat: add login component' },
              { type: 'output', text: 'e4f5g6h docs: update README' },
              { type: 'output', text: 'i7j8k9l Initial commit' },
            ],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
