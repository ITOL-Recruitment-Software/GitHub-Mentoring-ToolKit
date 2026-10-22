import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Command,
  Download,
  Fingerprint,
  Terminal,
} from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function Setup() {
  return (
    <SectionLayout
      title="Setting Up Git"
      subtitle="Install Git, configure your commit identity, and check that your terminal is ready for the practical lessons."
      fullWidth
    >
      <div className="space-y-8 pb-8">
        <section className="relative isolate overflow-hidden rounded-2xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-7 lg:p-9">
          <div className="pointer-events-none absolute -right-12 -top-14 -z-10 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-emerald-300">
                <Terminal size={14} />
                ONE-TIME SETUP
              </div>
              <h2 className="text-2xl font-semibold leading-tight tracking-tight text-[var(--color-github-text)] sm:text-3xl lg:text-4xl">
                Prepare your workstation before your first commit.
              </h2>
              <p className="mt-4 leading-7 text-[var(--color-github-muted)]">
                Git needs to be installed and know what name and email to record on your commits. You usually configure this once, then use Git in your terminal or editor.
              </p>
            </div>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300"><Command size={22} /></div>
              <div>
                <p className="text-sm font-semibold text-[var(--color-github-text)]">Git terminal</p>
                <p className="mt-1 text-xs text-[var(--color-github-muted)]">Install · Configure · Verify</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 xl:grid-cols-2">
          <article className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-400/10 text-sky-300"><Download size={20} /></div>
              <div>
                <p className="text-xs font-mono text-[var(--color-github-muted)]">STEP 01</p>
                <h2 className="text-lg font-semibold text-[var(--color-github-text)]">Install Git</h2>
              </div>
            </div>
            <p className="mt-4 leading-6 text-[var(--color-github-muted)]">
              Download Git for your operating system or use your usual package manager. After installation, open Git Bash, Terminal, or a terminal inside your code editor.
            </p>
            <a href="https://git-scm.com" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-sky-300 hover:underline" target="_blank" rel="noreferrer">
              Download from git-scm.com <ArrowRight size={15} />
            </a>
            <div className="mt-5 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] p-3">
              <p className="text-xs text-[var(--color-github-muted)]">Verify the installation</p>
              <code className="mt-2 block overflow-x-auto font-mono text-sm text-emerald-300">git --version</code>
            </div>
          </article>

          <article className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-400/10 text-violet-300"><Fingerprint size={20} /></div>
              <div>
                <p className="text-xs font-mono text-[var(--color-github-muted)]">STEP 02</p>
                <h2 className="text-lg font-semibold text-[var(--color-github-text)]">Set your identity</h2>
              </div>
            </div>
            <p className="mt-4 leading-6 text-[var(--color-github-muted)]">
              Git records a name and email address on each commit. Use a name you recognise and an email associated with your GitHub account if you want those commits linked to your profile.
            </p>
            <div className="mt-5 flex items-start gap-2 rounded-lg border border-amber-400/20 bg-amber-400/[0.06] p-3">
              <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-amber-300" />
              <p className="text-xs leading-5 text-[var(--color-github-muted)]">These settings identify the author recorded in Git history; they do not sign you in to GitHub.</p>
            </div>
          </article>
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">STEP 02 / Configure</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-github-text)] sm:text-3xl">Set your name and email</h2>
            <p className="mt-2 max-w-3xl leading-7 text-[var(--color-github-muted)]">Run these commands once in your terminal. Replace the example values with your own details.</p>
          </div>
          <CodeBlock
            title="Global identity"
            code={`git config --global user.name "Your Name"
git config --global user.email "email@example.com"`}
          />
        </section>

        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">STEP 03 / Useful defaults</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-github-text)] sm:text-3xl">Choose sensible starting settings</h2>
            <p className="mt-2 max-w-3xl leading-7 text-[var(--color-github-muted)]">These optional settings set the default branch name for new repositories, enable coloured output, and use a merge-based pull strategy.</p>
          </div>
          <CodeBlock
            title="Recommended settings"
            code={`git config --global init.defaultBranch main
git config --global color.ui auto
git config --global pull.rebase false`}
          />
        </section>

        <section className="rounded-2xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <Terminal size={18} className="text-emerald-300" />
            <h2 className="text-lg font-semibold text-[var(--color-github-text)]">Quick verification checklist</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Use the terminal at the bottom of the toolkit to check your setup.</p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              'git --version',
              'git config --global user.name',
              'git config --global user.email',
              'git config --global --list',
            ].map((command, index) => (
              <li key={command} className="flex min-w-0 items-start gap-3 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] p-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-400/10 text-xs font-semibold text-emerald-300">{index + 1}</span>
                <code className="min-w-0 break-all pt-1 font-mono text-xs text-sky-300">{command}</code>
              </li>
            ))}
          </ol>
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Next lesson</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-github-text)]">Start working locally</h2>
            <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Create or clone a repository and learn the everyday Git workflow.</p>
          </div>
          <Link to="/working-locally" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2ea043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
            Work locally <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </SectionLayout>
  )
}
