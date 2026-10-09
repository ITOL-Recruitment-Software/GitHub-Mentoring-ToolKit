import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function EditingOnGithub() {
  return (
    <SectionLayout
      title="Editing on GitHub"
      subtitle="Make quick changes directly in the browser without cloning."
    >
      <h2 className="text-xl font-semibold">When to edit on GitHub</h2>
      <p className="text-[var(--color-github-muted)]">
        The web editor is perfect for small documentation fixes, typos, or
        one-line config changes. For anything larger, prefer a local clone.
      </p>

      <h2 className="text-xl font-semibold mt-8">How it works</h2>
      <ol className="list-decimal list-inside space-y-2 text-[var(--color-github-muted)]">
        <li>Open the file on GitHub and click the pencil icon.</li>
        <li>Make your edits in the browser editor.</li>
        <li>Scroll down, write a commit message, and choose "Commit directly" or "Create a new branch + PR".</li>
      </ol>

      <div className="p-4 rounded-lg border border-[var(--color-github-yellow)]/40 bg-[#161b22] my-4">
        <p className="text-sm text-[var(--color-github-yellow)] font-medium">Tip</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1">
          Always create a new branch when editing on main/master if the repository
          has branch protection rules.
        </p>
      </div>

      <CodeBlock
        title="Equivalent local workflow"
        code={`git checkout -b fix/typo\n# edit file\ngit add .\ngit commit -m "fix: correct typo in README"\ngit push -u origin fix/typo`}
      />
    </SectionLayout>
  )
}
