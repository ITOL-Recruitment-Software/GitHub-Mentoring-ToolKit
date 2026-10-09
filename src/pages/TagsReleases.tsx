import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function TagsReleases() {
  return (
    <SectionLayout
      title="Tags & Releases"
      subtitle="Mark important points in history and publish releases on GitHub."
    >
      <h2 className="text-xl font-semibold">Lightweight vs annotated tags</h2>
      <CodeBlock
        code={`# Lightweight tag\ngit tag v1.0.0\n\n# Annotated tag (preferred for releases)\ngit tag -a v1.0.0 -m "Release version 1.0.0"\n\n# List tags\ngit tag -l\n\n# Push tags\ngit push origin v1.0.0\ngit push --tags`}
      />

      <h2 className="text-xl font-semibold mt-8">GitHub Releases</h2>
      <p className="text-[var(--color-github-muted)]">
        After pushing a tag, go to the repository on GitHub → Releases →
        "Draft a new release". Select the tag, write release notes, and publish.
        You can also attach binaries.
      </p>

      <div className="p-4 rounded-lg border border-[var(--color-github-yellow)]/40 bg-[#161b22] my-4">
        <p className="text-sm text-[var(--color-github-yellow)] font-medium">Semantic Versioning</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1">
          Use MAJOR.MINOR.PATCH (e.g. 2.1.0). Bump MAJOR for breaking changes,
          MINOR for new features, PATCH for bug fixes.
        </p>
      </div>
    </SectionLayout>
  )
}
