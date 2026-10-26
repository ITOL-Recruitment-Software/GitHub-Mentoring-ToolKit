import { Link } from 'react-router-dom'
import { ArrowRight, Search } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function GitBisect() {
  return (
    <SectionLayout title="Git Bisect" subtitle="Use a binary search through commit history to identify when a regression was introduced.">
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><Search size={20} /></div>
          <div><h2 className="font-semibold">Why binary search helps</h2><p className="mt-1 text-sm text-[var(--color-github-muted)]">Test a midpoint instead of checking every commit one by one.</p></div>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--color-github-muted)]">You need one commit known to be good and one known to be bad. Git checks out a commit between them; you test it and tell Git which side it belongs on. Repeat until Git identifies the first bad commit.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Manual bisect</h2>
        <CodeBlock title="Start, test, and finish" code={`git bisect start
git bisect bad HEAD
git bisect good <known-good-sha>
# test the checked-out version
git bisect good
# or use: git bisect bad
git bisect log
git bisect reset`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">After each test, mark the current commit <code>good</code> or <code>bad</code>. Repeat until Git identifies the first bad commit. Use <code>git bisect reset</code> at the end to return to your original branch.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Automate the test when possible</h2>
        <CodeBlock title="Run a repeatable test command" code={`git bisect start HEAD <known-good-sha>
git bisect run npm test
git bisect reset`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">Only use <code>git bisect run</code> when the test command reliably returns exit code 0 for good commits and non-zero for bad commits. Replace <code>npm test</code> with a test that actually exists and reproduces the bug in your project.</p>
      </section>

      <div className="rounded-lg border border-amber-400/25 bg-amber-400/[0.06] p-4">
        <p className="font-semibold text-amber-200">Be careful with working changes</p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Commit or safely stash unrelated work before starting. During bisect, Git checks out historical snapshots, so your files may look different from the current branch.</p>
      </div>

      <Link to="/local-history" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Review Git history first <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
