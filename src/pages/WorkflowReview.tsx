import SectionLayout from '../components/SectionLayout'

export default function WorkflowReview() {
  return (
    <SectionLayout
      title="Workflow Review"
      subtitle="Recap of the standard GitHub Flow used in the projects."
    >
      <h2 className="text-xl font-semibold">The loop</h2>
      <ol className="list-decimal list-inside space-y-3 text-[var(--color-github-muted)]">
        <li>Create a feature branch from <code>main</code>.</li>
        <li>Make commits with clear messages.</li>
        <li>Push the branch and open a Pull Request.</li>
        <li>Request review, address feedback.</li>
        <li>Merge (squash or merge commit) and delete the branch.</li>
      </ol>

      <div className="p-4 rounded-lg border border-[var(--color-github-blue)]/40 bg-[#161b22] my-6">
        <p className="text-sm text-[var(--color-github-blue)] font-medium">Key principle</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1">
          Never commit directly to <code>main</code> in a shared repository.
          Always work on a branch and merge via PR.
        </p>
      </div>

      <p className="text-[var(--color-github-muted)]">
        Practice this loop until it becomes automatic. The later projects build on it.
      </p>
    </SectionLayout>
  )
}
