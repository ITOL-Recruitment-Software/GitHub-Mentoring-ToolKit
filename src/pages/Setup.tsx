import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

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

      <div className="mt-10 pt-6 border-t border-[var(--color-github-border)]">
        <p className="text-xs font-semibold tracking-wider text-[var(--color-github-accent)] mb-2">TRY IN FOOTER TERMINAL</p>
        <p className="text-sm text-[var(--color-github-muted)] mb-3 leading-relaxed">
          Use the Git Bash bar at the bottom of the screen (same session on every page):
        </p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1">
          <li>git --version</li>
          <li>git config --global user.name &quot;Your Real Name&quot;</li>
          <li>git config --global user.email &quot;your@email.com&quot;</li>
          <li>git config --global --list</li>
        </ol>
      </div>
    </SectionLayout>
  )
}
