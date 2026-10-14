import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Terminal from '../components/Terminal'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function Conflicts() {
  return (
    <SectionLayout
      title="Merge Conflicts"
      subtitle="What happens when two people change the same lines."
    >
      <p className="text-[var(--color-github-muted)]">
        A conflict occurs when Git cannot automatically decide which change to keep.
        This is normal and not a failure — it is a signal that human judgment is needed.
      </p>

      <h2 className="text-xl font-semibold mt-6">Visual conflict markers</h2>
      <CodeBlock
        title="src/App.jsx (conflicted)"
        language="jsx"
        code={`<<<<<<< HEAD\nCurrent code (your branch / main)\n=======\nIncoming code (the branch being merged)\n>>>>>>> feature-login`}
      />

      <h2 className="text-xl font-semibold mt-8">How to resolve</h2>
      <ol className="list-decimal list-inside space-y-2 text-[var(--color-github-muted)]">
        <li>Open the file that contains the conflict markers.</li>
        <li>Decide which code (or combination) is correct.</li>
        <li>Delete the markers <code className="text-[var(--color-github-red)]">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</code>, <code className="text-[var(--color-github-muted)]">=======</code>, and <code className="text-[var(--color-github-blue)]">&gt;&gt;&gt;&gt;&gt;&gt;&gt;</code>.</li>
        <li>Stage the resolved file and commit.</li>
      </ol>

      <Terminal
        lines={[
          { type: 'command', text: 'git add .' },
          { type: 'command', text: 'git commit -m "fix: resolve merge conflict"' },
        ]}
      />

      <div className="p-4 rounded-lg border border-[var(--color-github-yellow)]/40 bg-[#161b22] mt-6">
        <p className="text-sm text-[var(--color-github-yellow)] font-medium">Mentor tip</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1">
          Create a live conflict in a demo repo during the meeting. Let students see the markers,
          resolve them together, and feel the relief when the commit succeeds.
        </p>
      </div>

      <LivePractice
        title="Live Practice: Resolve a conflict"
        subtitle="Simulate the commands after you have fixed the conflict markers."
      >
        <p className="text-sm text-[var(--color-github-muted)] mb-2">After editing the file, type:</p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-4">
          <li>git status</li>
          <li>git add .</li>
          <li>git commit -m "fix: resolve merge conflict"</li>
        </ol>

        <InteractiveTerminal
          title="Git Bash – Conflict Resolution"
          prompt="MINGW64:/c/Users/student/my-project$"
          height="280px"
          commandMap={{
            'git status': [
              { type: 'output', text: 'On branch main' },
              { type: 'output', text: 'You have unmerged paths.' },
              { type: 'output', text: '  (fix conflicts and run "git commit")' },
              { type: 'output', text: '  (use "git merge --abort" to abort the merge)' },
              { type: 'output', text: '' },
              { type: 'output', text: 'Unmerged paths:' },
              { type: 'output', text: '  (use "git add <file>..." to mark resolution)' },
              { type: 'output', text: '\tboth modified:   src/App.jsx' },
            ],
            'git add .': [{ type: 'success', text: '' }],
            'git add src/App.jsx': [{ type: 'success', text: '' }],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
