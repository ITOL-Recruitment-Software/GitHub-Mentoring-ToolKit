import SectionLayout from '../components/SectionLayout'

export default function WorkflowDiscussion() {
  return (
    <SectionLayout
      title="Workflow Discussion"
      subtitle="Talk through the choices teams make about branching and merging."
    >
      <h2 className="text-xl font-semibold">Topics to discuss</h2>
      <ul className="list-disc list-inside space-y-2 text-[var(--color-github-muted)]">
        <li>Trunk-based development vs long-lived feature branches</li>
        <li>Squash-merge vs merge-commit vs rebase</li>
        <li>When to protect the main branch</li>
        <li>Required reviews and status checks</li>
        <li>How often should main be deployed?</li>
      </ul>

      <div className="p-4 rounded-lg border border-[var(--color-github-blue)]/40 bg-[#161b22] my-6">
        <p className="text-sm text-[var(--color-github-blue)] font-medium">Mentor tip</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1">
          There is no single correct answer. The goal is for students to understand
          the trade-offs so they can adapt to any team they join.
        </p>
      </div>

      <p className="text-[var(--color-github-muted)]">
        Use the earlier projects as concrete examples during the discussion.
      </p>
    </SectionLayout>
  )
}
