import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function GitReset() {
  return (
    <SectionLayout
      title="Rewriting History with Git Reset"
      subtitle="Move the branch pointer and optionally change staging and the working tree. Local only."
    >
      <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-2 ml-2">
        <li><strong className="text-[var(--color-github-text)]">--soft</strong> — move branch only; changes stay staged.</li>
        <li><strong className="text-[var(--color-github-text)]">--mixed</strong> (default) — move branch + staging; keep working tree.</li>
        <li><strong className="text-[var(--color-github-text)]">--hard</strong> — move all three; discards uncommitted work.</li>
      </ul>
      <CodeBlock code={`git log --oneline --decorate
git reset --soft HEAD~2
git reset HEAD~
git reset --hard <SHA>
git reflog`} />
      <p className="text-[var(--color-github-muted)] mt-4">Reflog is local only (~90 days reachable). Use it to recover after a mistaken hard reset.</p>
    </SectionLayout>
  )
}
