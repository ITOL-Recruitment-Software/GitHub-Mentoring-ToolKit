import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function WorkingLocally() {
  return (
    <SectionLayout
      title="Working Locally"
      subtitle="Clone a repository and inspect it on your machine."
    >
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">1. Clone</h2>
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          Copy the remote repository to your computer, then enter the project folder.
        </p>
        <CodeBlock
          title="Clone"
          code={`git clone https://github.com/owner/repo.git\ncd repo`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">2. Inspect</h2>
        <CodeBlock
          code={`git status\ngit branch\ngit log --oneline -5`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-semibold">3. Change locally</h2>
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          Edit files in your editor, then stage and commit. Nothing reaches GitHub until you push.
        </p>
      </section>

      <div className="mt-10 pt-6 border-t border-[var(--color-github-border)]">
        <p className="text-xs font-semibold tracking-wider text-[var(--color-github-accent)] mb-2">TRY IN FOOTER TERMINAL</p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1">
          <li>git clone https://github.com/owner/demo-repo.git</li>
          <li>cd demo-repo</li>
          <li>git status</li>
          <li>git log --oneline</li>
        </ol>
      </div>
    </SectionLayout>
  )
}
