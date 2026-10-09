import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function Reverting() {
  return (
    <SectionLayout title="Reverting Commits" subtitle="Safe undo for public history — creates a new commit that reverses an earlier one.">
      <p className="text-[var(--color-github-muted)]">Prefer revert for shared history. Amend, reset, and rebase only on local commits.</p>
      <CodeBlock code={`git show <SHA>\ngit revert <SHA>\ngit push`} />
    </SectionLayout>
  )
}
