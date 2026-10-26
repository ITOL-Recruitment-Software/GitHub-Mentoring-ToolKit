import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function Conflicts() {
  return (
    <SectionLayout
      title="Merge Conflicts"
      subtitle="When two people change the same lines, Git asks you to decide."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        A conflict is not a failure. Git cannot choose for you. Resolve the file, stage it, and commit.
      </p>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">Conflict markers</h2>
        <CodeBlock
          title="src/App.jsx (conflicted)"
          language="jsx"
          code={`<<<<<<< HEAD\nCurrent code (your branch)\n=======\nIncoming code (branch being merged)\n>>>>>>> feature-login`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">Resolve steps</h2>
        <ol className="list-decimal list-inside space-y-2 text-[var(--color-github-muted)] leading-relaxed">
          <li>Open the conflicted file in your editor.</li>
          <li>Keep the correct code (or combine both).</li>
          <li>Delete all conflict markers.</li>
          <li>Stage and commit the resolution.</li>
        </ol>
      </section>

      <div className="p-4 rounded-lg border border-[var(--color-github-yellow)]/40 bg-[#161b22]">
        <p className="text-sm font-medium text-[var(--color-github-yellow)]">Mentor tip</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
          Create a real conflict in a demo repo during class. Resolve it together so students see the markers once in a safe setting.
        </p>
      </div>

      <div className="mt-10 pt-6 border-t border-[var(--color-github-border)]">
        <p className="text-xs font-semibold tracking-wider text-[var(--color-github-accent)] mb-2">TRY IN FOOTER TERMINAL</p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1">
          <li>git status</li>
          <li>git add src/App.jsx</li>
          <li>git commit -m &quot;fix: resolve merge conflict&quot;</li>
        </ol>
      </div>
    </SectionLayout>
  )
}
