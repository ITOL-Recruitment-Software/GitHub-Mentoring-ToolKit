import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import LivePractice from '../components/LivePractice'
import InteractiveTerminal from '../components/InteractiveTerminal'

export default function Setup() {
  return (
    <SectionLayout
      title="Setting Up Git"
      subtitle="Install and configure Git so every commit is attributed to you."
    >
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">1. Install Git</h2>
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          Verify installation with <code className="text-[var(--color-github-blue)] text-sm">git --version</code>. If needed, install from{' '}
          <a href="https://git-scm.com" className="text-[var(--color-github-blue)] hover:underline" target="_blank" rel="noreferrer">
            git-scm.com
          </a>{' '}or your package manager.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">2. Configure identity</h2>
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          Every commit records author name and email. Set them once globally:
        </p>
        <CodeBlock
          title="Global configuration"
          code={`git config --global user.name "Your Name"\ngit config --global user.email "email@example.com"`}
        />
        <div className="p-4 rounded-lg border border-[var(--color-github-yellow)]/40 bg-[#161b22]">
          <p className="text-sm font-medium text-[var(--color-github-yellow)]">Why this is required</p>
          <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
            Without these settings Git may refuse commits or use placeholders. Use the same email registered on GitHub so commits link to your profile.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">3. Useful defaults</h2>
        <CodeBlock
          title="Recommended global settings"
          code={`git config --global init.defaultBranch main\ngit config --global color.ui auto\ngit config --global pull.rebase false`}
        />
      </section>

      <LivePractice
        variant="terminal"
        title="Configure Git in the terminal"
        subtitle="Type the real commands in order. This page uses Git Bash only — no GitHub UI."
      >
        <ol className="text-sm text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-4 font-mono">
          <li>git --version</li>
          <li>git config --global user.name &quot;Your Real Name&quot;</li>
          <li>git config --global user.email &quot;your@email.com&quot;</li>
          <li>git config --global --list</li>
        </ol>
        <InteractiveTerminal
          title="Git Bash – setup"
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
