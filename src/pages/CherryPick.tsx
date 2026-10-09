import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function CherryPick() {
  return (
    <SectionLayout title="Cherry Picking" subtitle="Apply one commit onto your current branch; recover work via reflog after reset.">
      <CodeBlock code={`git reflog\ngit cherry-pick <SHA>\ngit reset --hard <SHA-from-reflog>`} />
      <p className="text-[var(--color-github-muted)] mt-4">Cherry-pick creates a new commit ID even when content matches.</p>
    </SectionLayout>
  )
}
