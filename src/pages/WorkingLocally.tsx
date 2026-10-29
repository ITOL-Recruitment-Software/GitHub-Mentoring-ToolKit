import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function WorkingLocally() {
  return (
    <SectionLayout
      title="Working Locally"
      subtitle="Once Git is configured you can create commits on your machine. The two-stage process (stage → commit) is the heart of everyday Git work."
      eyebrow="Project 1 · Caption This · 1.3.3"
    >
      <Callout variant="note" title="Snapshots, not deltas">
        Git takes a snapshot of the entire project at a given point in time. That snapshot is called a commit.
        You decide exactly which files belong in each snapshot by staging them first.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">The three areas</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { title: 'Working directory', desc: 'The files you edit in your editor.' },
            { title: 'Staging area', desc: 'The files you have chosen for the next commit (git add).' },
            { title: 'Repository', desc: 'The permanent history of commits (git commit).' },
          ].map((a) => (
            <div key={a.title} className="lesson-card p-4">
              <h3 className="text-sm font-semibold">{a.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-github-muted)]">{a.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Everyday commands</h2>
        <CodeBlock title="See what changed" language="bash" code={`git status`} />
        <CodeBlock title="Stage specific files or everything" language="bash" code={`git add README.md\ngit add .`} />
        <CodeBlock title="Create a commit" language="bash" code={`git commit -m "Add project README"`} />
      </section>

      <Callout variant="tip" title="Write clear messages">
        A good commit message explains the <em>why</em>, not just the <em>what</em>. Future you (and your teammates)
        will thank you.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">See the history</h2>
        <CodeBlock title="Compact log" language="bash" code={`git log --oneline`} />
      </section>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/collaboration" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Push & Collaborate
          <ArrowRight size={15} />
        </Link>
        <Link to="/setup" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Setup
        </Link>
      </div>
    </SectionLayout>
  )
}
