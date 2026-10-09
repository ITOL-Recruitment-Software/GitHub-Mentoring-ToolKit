import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Terminal from '../components/Terminal'

export default function LocalHistory() {
  return (
    <SectionLayout
      title="Local History (git log)"
      subtitle="Inspect the commit history of your repository."
    >
      <h2 className="text-xl font-semibold">Basic history</h2>
      <Terminal
        lines={[
          { type: 'command', text: 'git log --oneline -10' },
          { type: 'output', text: 'a1b2c3d (HEAD -> main) Add feature X' },
          { type: 'output', text: 'e4f5g6h Fix bug in parser' },
          { type: 'output', text: 'i7j8k9l Initial commit' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Useful variants</h2>
      <CodeBlock
        code={`# Graph with branches and tags\ngit log --oneline --graph --decorate --all\n\n# Show only commits that touched a file\ngit log -- path/to/file\n\n# Search commit messages\ngit log --grep="fix"\n\n# Pretty custom format\ngit log --pretty=format:"%h %an %s" -5`}
      />

      <p className="text-[var(--color-github-muted)] mt-4">
        Understanding <code>git log</code> is essential before you start
        rewriting history or bisecting.
      </p>
    </SectionLayout>
  )
}
