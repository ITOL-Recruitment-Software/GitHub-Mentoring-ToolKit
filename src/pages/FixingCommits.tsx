import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function FixingCommits() {
  return (
    <SectionLayout
      title="Fixing Commit Mistakes"
      subtitle="Safe ways to correct the last commit or un-stage files."
    >
      <h2 className="text-xl font-semibold">Amend the last commit</h2>
      <CodeBlock
        code={`# Change the message only\ngit commit --amend -m "Better message"\n\n# Add forgotten files to the last commit\ngit add forgotten-file.ts\ngit commit --amend --no-edit`}
      />

      <div className="p-4 rounded-lg border border-[var(--color-github-yellow)]/40 bg-[#161b22] my-4">
        <p className="text-sm text-[var(--color-github-yellow)] font-medium">Warning</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1">
          Only amend commits that have <strong>not</strong> been pushed yet.
          Amending a published commit rewrites history and forces everyone else to adapt.
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-8">Un-stage a file</h2>
      <CodeBlock code={`git restore --staged path/to/file\n# older syntax still works:\ngit reset HEAD path/to/file`} />

      <h2 className="text-xl font-semibold mt-8">Discard local changes</h2>
      <CodeBlock
        code={`# Discard unstaged changes in a file\ngit restore path/to/file\n\n# Discard everything (dangerous!)\ngit restore .`}
      />
    </SectionLayout>
  )
}
