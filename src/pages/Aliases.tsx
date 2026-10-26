import { Link } from 'react-router-dom'
import { ArrowRight, Terminal } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function Aliases() {
  return (
    <SectionLayout title="Git Aliases" subtitle="Create short, memorable names for commands you use frequently.">
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><Terminal size={20} /></div>
          <div><h2 className="font-semibold">What is an alias?</h2><p className="mt-1 text-sm text-[var(--color-github-muted)]">A personal shortcut saved in Git configuration.</p></div>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--color-github-muted)]">Aliases do not change Git's behaviour. They give a long command a shorter name, which can make common tasks easier to remember. The <code className="text-emerald-300">--global</code> flag saves an alias for your user account across repositories.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Create useful shortcuts</h2>
        <CodeBlock title="Add aliases" code={`git config --global alias.st "status --short"
git config --global alias.lol "log --oneline --graph --decorate --all"
git config --global alias.last "log -1 HEAD"`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">Run <code>git st</code> for a compact status, <code>git lol</code> to view branches and history, or <code>git last</code> to inspect the latest commit.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Inspect and remove aliases</h2>
        <CodeBlock title="Manage your configuration" code={`git config --get-regexp '^alias\\.'
git config --global --get alias.st
git config --global --unset alias.st`} />
        <div className="rounded-lg border border-sky-400/20 bg-sky-400/[0.06] p-4">
          <p className="font-semibold text-sky-200">Remember</p>
          <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Git aliases are typed after <code>git</code>. They do not automatically replace shell commands, and a shell alias such as <code>ll</code> is configured separately.</p>
        </div>
      </section>

      <Link to="/helpful-commands" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Explore useful Git commands <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
