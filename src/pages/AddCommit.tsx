import SectionLayout from '../components/SectionLayout'

export default function AddCommit() {
  return (
    <SectionLayout
      title="Git Add & Commit"
      subtitle="Stage changes, then create a permanent snapshot in history."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        A <strong className="text-[var(--color-github-text)]">commit</strong> is a save point you can return to. Stage with{' '}
        <code className="text-[var(--color-github-blue)] text-sm">git add</code>, then record with{' '}
        <code className="text-[var(--color-github-blue)] text-sm">git commit</code>.
      </p>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Good vs bad messages</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-[var(--color-github-red)]/40 bg-[#161b22]">
            <h3 className="text-[var(--color-github-red)] font-semibold mb-2 text-sm">Avoid</h3>
            <ul className="text-sm text-[var(--color-github-muted)] space-y-1 font-mono">
              <li>&quot;changes&quot;</li>
              <li>&quot;update&quot;</li>
              <li>&quot;fix&quot;</li>
              <li>&quot;wip&quot;</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg border border-[var(--color-github-accent)]/40 bg-[#161b22]">
            <h3 className="text-[var(--color-github-accent)] font-semibold mb-2 text-sm">Prefer</h3>
            <ul className="text-sm text-[var(--color-github-muted)] space-y-1 font-mono">
              <li>feat: add login form</li>
              <li>fix: navbar on mobile</li>
              <li>docs: install steps</li>
            </ul>
          </div>
        </div>
      </section>

      <p className="text-sm text-[var(--color-github-muted)] leading-relaxed">
        Prefer staging specific files for clean commits. Use{' '}
        <code className="text-[var(--color-github-blue)] text-xs">git add .</code> only when you intend to include everything.
      </p>

      <div className="mt-10 pt-6 border-t border-[var(--color-github-border)]">
        <p className="text-xs font-semibold tracking-wider text-[var(--color-github-accent)] mb-2">TRY IN FOOTER TERMINAL</p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1">
          <li>git status</li>
          <li>git add src/Login.jsx</li>
          <li>git commit -m &quot;feat: add login component&quot;</li>
          <li>git log --oneline</li>
        </ol>
      </div>
    </SectionLayout>
  )
}
