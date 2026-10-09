import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function GitBisect() {
  return (
    <SectionLayout
      title="Git Bisect"
      subtitle="Binary search through history to find the commit that introduced a bug or feature."
    >
      <p className="text-[var(--color-github-muted)]">
        Bisect checks out the midpoint between a known good and known bad commit. Always finish with <code className="text-[var(--color-github-accent)]">git bisect reset</code>.
      </p>
      <h2 className="text-xl font-semibold mt-8">Manual path</h2>
      <CodeBlock code={`git bisect start
git bisect bad <BAD-SHA>
git bisect good <GOOD-SHA>
# test, then git bisect bad or git bisect good
git bisect reset`} />
      <h2 className="text-xl font-semibold mt-8">Automated path</h2>
      <CodeBlock code={`git bisect start <bad-SHA> <good-SHA>
git bisect run ls index.html
git bisect reset`} />
    </SectionLayout>
  )
}
