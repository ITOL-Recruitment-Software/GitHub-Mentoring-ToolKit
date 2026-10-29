import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function GitBisect() {
  return (
    <SectionLayout
      title="Finding Bugs with Git Bisect"
      subtitle="When a bug appears, git bisect performs a binary search through history to find the commit that introduced it."
      eyebrow="Project 3 · GitHub Games · 1.5.3"
    >
      <Callout variant="note" title="How it works">
        You mark a known good commit and a known bad commit. Git checks out the midpoint; you test and tell Git whether
        that commit is good or bad. It repeats until it isolates the first bad commit.
      </Callout>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Basic session</h2>
        <CodeBlock title="Start and mark endpoints" language="bash" code={`git bisect start\ngit bisect bad                 # current commit is broken\ngit bisect good v1.2.0         # this tag (or commit) was fine`} />
        <CodeBlock title="After testing each step" language="bash" code={`git bisect good    # or\ngit bisect bad`} />
        <CodeBlock title="When finished" language="bash" code={`git bisect reset`} />
      </section>

      <Callout variant="tip" title="Automate with a script">
        You can run <code className="inline-code">git bisect run ./test.sh</code> if you have a script that exits 0 for good and non-zero for bad.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/reverting" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Reverting Commits
          <ArrowRight size={15} />
        </Link>
        <Link to="/protected-branches" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to Protected Branches
        </Link>
      </div>
    </SectionLayout>
  )
}
