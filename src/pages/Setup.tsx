import SectionLayout from '../components/SectionLayout'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function Setup() {
  return (
    <SectionLayout
      title="Setting Up Git"
      subtitle="Install and configure Git so every commit is correctly attributed to you."
    >
      <h2 className="text-xl font-semibold">1. Install Git</h2>
      <p className="text-[var(--color-github-muted)]">
        First verify whether Git is already installed:
      </p>
      <Terminal
        lines={[
          { type: 'command', text: 'git --version' },
          { type: 'output', text: 'git version 2.45.2' },
        ]}
      />
      <p className="text-[var(--color-github-muted)]">
        If you see a version number, you are ready. Otherwise install from{' '}
        <a href="https://git-scm.com" className="text-[var(--color-github-blue)] hover:underline" target="_blank" rel="noreferrer">
          git-scm.com
        </a>{' '}
        or via your package manager.
      </p>

      <h2 className="text-xl font-semibold mt-8">2. Configure your identity</h2>
      <p className="text-[var(--color-github-muted)]">
        Every commit records an author name and email. Set them once globally:
      </p>
      <CodeBlock
        title="Global configuration"
        code={`git config --global user.name "Your Name"\ngit config --global user.email "email@example.com"`}
      />

      <div className="p-4 rounded-lg border border-[var(--color-github-yellow)]/40 bg-[#161b22] my-4">
        <p className="text-sm text-[var(--color-github-yellow)] font-medium">Why this is required</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1">
          Without these settings Git refuses to create commits (or uses a placeholder).
          On GitHub the email is used to link commits to your account and show your avatar.
          Use the same email that is registered on GitHub.
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-8">3. Useful extra settings</h2>
      <CodeBlock
        title="Default Branch name for new Repos"
        code={`git config --global init.defaultBranch main`}
      />
      <CodeBlock
        title="Better diff colors"
        code={`git config --global color.ui auto`}
      />
      <CodeBlock
        title="Simple pull Behavior"
        code={`git config --global pull.rebase false`}
      />

      {/* LIVE PRACTICE – real typeable terminal */}
      <LivePractice
        title="Live Practice: Type the commands yourself"
        subtitle="This is a simulated Git Bash. Type the real commands below and press Enter."
      >
        <p className="text-sm text-[var(--color-github-muted)] mb-2">
          Try these in order:
        </p>
        <ol className="text-sm text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-4 font-mono">
          <li>git --version</li>
          <li>git config --global user.name "Your Real Name"</li>
          <li>git config --global user.email "your@email.com"</li>
          <li>git config --global --list</li>
        </ol>

        <InteractiveTerminal
          title="Git Bash – Setup Practice"
          prompt="MINGW64:/c/Users/student$"
          placeholder="Type a command…"
          height="280px"
          commandMap={{
            'git --version': [{ type: 'output', text: 'git version 2.45.2.windows.1' }],
            'git config --global --list': [
              { type: 'output', text: 'user.name=Your Real Name' },
              { type: 'output', text: 'user.email=your@email.com' },
              { type: 'output', text: 'init.defaultBranch=main' },
              { type: 'output', text: 'color.ui=auto' },
            ],
            'git config --list': [
              { type: 'output', text: 'user.name=Your Real Name' },
              { type: 'output', text: 'user.email=your@email.com' },
            ],
          }}
        />
      </LivePractice>
    </SectionLayout>
  )
}
