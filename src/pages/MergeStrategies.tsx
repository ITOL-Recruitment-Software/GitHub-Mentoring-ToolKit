import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function MergeStrategies() {
  return (
    <SectionLayout title="Merge Strategies & Rebase" subtitle="Fast-forward, recursive, octopus — and rebase for linear history.">
      <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-2 ml-2">
        <li><strong className="text-[var(--color-github-text)]">Fast-forward</strong> — pointer slides; no merge commit.</li>
        <li><strong className="text-[var(--color-github-text)]">Recursive</strong> — both sides changed; merge commit with two parents.</li>
        <li><strong className="text-[var(--color-github-text)]">Octopus</strong> — three or more parents.</li>
      </ul>
      <CodeBlock code={`git checkout feature\ngit rebase -i main\ngit checkout main\ngit merge feature`} />
    </SectionLayout>
  )
}
