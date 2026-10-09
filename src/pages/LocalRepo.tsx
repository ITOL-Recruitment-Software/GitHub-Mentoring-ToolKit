import SectionLayout from '../components/SectionLayout'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'

export default function LocalRepo() {
  return (
    <SectionLayout
      title="Create a Local Repo"
      subtitle="Initialize a brand-new Git repository from scratch."
    >
      <h2 className="text-xl font-semibold">Start from zero</h2>
      <Terminal
        lines={[
          { type: 'command', text: 'mkdir my-project && cd my-project' },
          { type: 'command', text: 'git init' },
          { type: 'output', text: 'Initialized empty Git repository in .../my-project/.git/' },
          { type: 'command', text: 'echo "# My Project" > README.md' },
          { type: 'command', text: 'git add README.md' },
          { type: 'command', text: 'git commit -m "Initial commit"' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-8">Connect to GitHub</h2>
      <CodeBlock
        code={`# Create the empty repo on GitHub first, then:\ngit remote add origin https://github.com/you/my-project.git\ngit branch -M main\ngit push -u origin main`}
      />

      <p className="text-[var(--color-github-muted)] mt-4">
        You now have a full local repository that is also backed up on GitHub.
      </p>
    </SectionLayout>
  )
}
