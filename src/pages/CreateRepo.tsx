import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'

export default function CreateRepo() {
  return (
    <SectionLayout
      title="Creating a Repository"
      subtitle="Two common professional workflows."
    >
      <h2 className="text-xl font-semibold">Option 1: Create on GitHub first</h2>
      <p className="text-[var(--color-github-muted)]">
        Best when starting a brand-new project that will live on GitHub from day one.
      </p>
      <FlowDiagram
        steps={[
          { label: 'Create repository', sublabel: 'On github.com', color: '#a371f7' },
          { label: 'git clone', sublabel: 'Download to your machine', color: '#58a6ff' },
          { label: 'Open project', sublabel: 'Start coding', color: '#238636' },
        ]}
      />
      <Terminal
        lines={[
          { type: 'command', text: 'git clone https://github.com/username/project.git' },
          { type: 'output', text: 'Cloning into \'project\'...' },
          { type: 'command', text: 'cd project' },
        ]}
      />

      <h2 className="text-xl font-semibold mt-10">Option 2: Create local project first</h2>
      <p className="text-[var(--color-github-muted)]">
        Common when you already have code or want to experiment before pushing.
      </p>
      <Terminal
        lines={[
          { type: 'command', text: 'mkdir project && cd project' },
          { type: 'command', text: 'git init' },
          { type: 'output', text: 'Initialized empty Git repository in .../project/.git/' },
          { type: 'comment', text: '# Now create files, then add a remote later' },
          { type: 'command', text: 'git remote add origin https://github.com/username/project.git' },
          { type: 'command', text: 'git push -u origin main' },
        ]}
      />

      <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22] mt-6">
        <p className="text-sm">
          <strong className="text-[var(--color-github-text)]">git init</strong> creates a hidden{' '}
          <code className="text-[var(--color-github-blue)]">.git</code> folder. That folder is the entire
          local repository contains history, branches, and configuration. Without it, the folder is just ordinary files.
        </p>
      </div>
    </SectionLayout>
  )
}
