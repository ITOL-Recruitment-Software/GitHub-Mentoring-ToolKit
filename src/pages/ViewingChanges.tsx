import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Terminal from '../components/Terminal'

export default function ViewingChanges() {
  return (
    <SectionLayout
      title="Viewing Local Changes (diff)"
      subtitle="See exactly what you changed before you commit."
    >
      <h2 className="text-xl font-semibold">Unstaged changes</h2>
      <Terminal
        lines={[
          { type: 'command', text: 'git diff' },
          { type: 'output', text: 'diff --git a/src/App.tsx b/src/App.tsx' },
          { type: 'output', text: '--- a/src/App.tsx' },
          { type: 'output', text: '+++ b/src/App.tsx' },
          { type: 'output', text: '@@ -10,7 +10,7 @@' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Staged changes</h2>
      <CodeBlock code={`git diff --staged\ngit diff --cached     # same thing`} />

      <h2 className="text-xl font-semibold mt-8">Compare commits</h2>
      <CodeBlock
        code={`git diff HEAD~1 HEAD\ngit diff main..feature/my-branch\ngit diff --stat`}
      />

      <p className="text-[var(--color-github-muted)] mt-4">
        Always run <code>git diff</code> (or <code>git status</code>) before committing
        so you never accidentally include unrelated files.
      </p>
    </SectionLayout>
  )
}
