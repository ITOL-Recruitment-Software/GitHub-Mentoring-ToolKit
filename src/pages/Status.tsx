import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'

export default function Status() {
  return (
    <SectionLayout
      title="Understanding Git Status"
      subtitle="The first command every developer runs before and after changes."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        <code className="text-[var(--color-github-blue)] text-sm">git status</code> shows what Git sees: clean tree, modified files, or staged changes. Mentors should run it constantly during demos.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">Clean working tree</h2>
        <FlowDiagram
          steps={[{ label: 'Working directory', sublabel: 'Nothing to commit', color: '#238636' }]}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">After editing files</h2>
        <FlowDiagram
          steps={[{ label: 'Working directory', sublabel: 'Modified files detected', color: '#f0883e' }]}
        />
      </section>

      <div className="p-4 rounded-lg border border-[var(--color-github-blue)]/30 bg-[#161b22]">
        <p className="text-sm text-[var(--color-github-muted)] leading-relaxed">
          <strong className="text-[var(--color-github-text)]">Mentor tip:</strong> Always show{' '}
          <code className="text-[var(--color-github-blue)] text-xs">git status</code> before and after every action so students never guess Git’s state.
        </p>
      </div>

      <div className="mt-10 pt-6 border-t border-[var(--color-github-border)]">
        <p className="text-xs font-semibold tracking-wider text-[var(--color-github-accent)] mb-2">TRY IN FOOTER TERMINAL</p>
        <p className="text-sm text-[var(--color-github-muted)] leading-relaxed">
          Type <code className="text-[var(--color-github-accent)] text-sm">git status</code> in the Git Bash footer below.
        </p>
      </div>
    </SectionLayout>
  )
}
