import SectionLayout from '../components/SectionLayout'

export default function GithubFlow() {
  return (
    <SectionLayout
      title="Understanding the GitHub Flow"
      subtitle="A lightweight workflow: branch, commit, open a pull request, discuss, then merge to the main line."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        The GitHub flow lets you experiment safely without compromising the project. Everything lives on a branch.
        By default the canonical version is often named <code className="text-[var(--color-github-accent)]">main</code> or <code className="text-[var(--color-github-accent)]">master</code>.
      </p>
      <h2 className="text-xl font-semibold mt-8">The essential steps</h2>
      <ol className="list-decimal list-inside text-[var(--color-github-muted)] space-y-2 ml-2">
        <li><strong className="text-[var(--color-github-text)]">Branch</strong> — create a feature branch from the default branch.</li>
        <li><strong className="text-[var(--color-github-text)]">Commit</strong> — snapshot your changes on that branch only.</li>
        <li><strong className="text-[var(--color-github-text)]">Open a pull request</strong> — start a discussion; it does not need to be perfect.</li>
        <li><strong className="text-[var(--color-github-text)]">Review and refine</strong> — improve through team feedback.</li>
        <li><strong className="text-[var(--color-github-text)]">Merge</strong> — when approved, merge into the default branch.</li>
      </ol>
      <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22] my-6">
        <p className="text-sm text-[var(--color-github-muted)]">
          Explore later: <a href="https://guides.github.com/introduction/flow/" className="text-[var(--color-github-blue)] hover:underline" target="_blank" rel="noreferrer">guides.github.com/introduction/flow</a>
        </p>
      </div>
    </SectionLayout>
  )
}
