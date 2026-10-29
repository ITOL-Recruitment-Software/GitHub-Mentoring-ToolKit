import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function TagsReleases() {
  return (
    <SectionLayout
      title="Tags & Releases"
      subtitle="Tags mark specific points in history (usually releases). GitHub Releases turn those tags into polished, downloadable milestones."
      eyebrow="Project 3 · GitHub Games · 1.5.7"
    >
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Create a lightweight or annotated tag</h2>
        <CodeBlock title="Tag the current commit" language="bash" code={`git tag v1.0.0\ngit tag -a v1.0.0 -m "Release version 1.0.0"`} />
        <CodeBlock title="Push tags to the remote" language="bash" code={`git push origin v1.0.0\n# or push all tags\ngit push origin --tags`} />
      </section>

      <Callout variant="tip" title="GitHub Releases">
        On GitHub, open the Releases page and “Draft a new release”. Choose an existing tag (or create one), write release notes,
        and optionally attach binaries. This is the preferred way to publish versions to users.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/workflow-discussion" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Workflow Discussion
          <ArrowRight size={15} />
        </Link>
        <Link to="/viewing-changes" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Viewing Changes
        </Link>
      </div>
    </SectionLayout>
  )
}
