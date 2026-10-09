import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function ProtectedBranches() {
  return (
    <SectionLayout title="Protected Branches & CODEOWNERS" subtitle="Require reviews and checks before merging to critical branches.">
      <ol className="list-decimal list-inside text-[var(--color-github-muted)] space-y-1 ml-2">
        <li>Settings → Branches → Add rule for main/master.</li>
        <li>Block force-pushes and deletion by default.</li>
        <li>Optionally require PR reviews, status checks, and Code Owners.</li>
      </ol>
      <CodeBlock title=".github/CODEOWNERS" code={`* @your-username\n*.js @js-expert\ndocs/ @docs-team`} />
      <p className="text-sm text-[var(--color-github-muted)] mt-2">Last matching pattern wins. Enable Require review from Code Owners on the branch rule.</p>
    </SectionLayout>
  )
}
