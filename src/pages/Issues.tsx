import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import Callout from '../components/Callout'

export default function Issues() {
  return (
    <SectionLayout
      title="GitHub Issues"
      subtitle="Issues are the primary way to track bugs, feature requests, and tasks. They support Markdown, labels, assignees, milestones, and cross-references."
      eyebrow="Reference · 1.7"
    >
      <Callout variant="note" title="From the Training Manual">
        Issues are more than a bug tracker — they are a conversation space. Use @mentions, task lists, and references to
        pull requests to keep discussions connected to the code.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Useful Markdown in issues</h2>
        <ul className="space-y-2 text-sm text-[var(--color-github-muted)]">
          <li>• Task lists: <code className="inline-code">- [ ] item</code></li>
          <li>• Mentions: <code className="inline-code">@username</code></li>
          <li>• Cross-links: <code className="inline-code">#123</code> or full URLs</li>
          <li>• Code blocks and syntax highlighting</li>
          <li>• Emoji and reactions for lightweight feedback</li>
        </ul>
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/projects" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Projects
          <ArrowRight size={15} />
        </Link>
        <Link to="/gitignore" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to .gitignore
        </Link>
      </div>
    </SectionLayout>
  )
}
