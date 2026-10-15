import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function ReadyForClass() {
  return (
    <SectionLayout
      title="Getting Ready for Class"
      subtitle="Complete this checklist before the session: GitHub account and Git Bash (or Terminal)."
    >
      <p className="text-[var(--color-github-muted)] leading-relaxed">
        Mentors should confirm every student finishes both parts below. Class demos assume a free GitHub account and a working shell where Git commands match the trainer.
      </p>

      {/* ── Part A: GitHub account ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-github-accent)]/20 text-[var(--color-github-accent)] text-sm font-bold">
            A
          </span>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-github-text)]">
            GitHub account
          </h2>
        </div>

        <p className="text-[var(--color-github-muted)] leading-relaxed">
          Use a normal free account on <strong className="text-[var(--color-github-text)]">github.com</strong>.
          Practice repos are for learning. Do not put real production or client code in them.
        </p>

        <ol className="space-y-3">
          <li className="flex gap-3 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]">
            <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-[var(--color-github-muted)]" />
            <div>
              <p className="text-sm font-medium text-[var(--color-github-text)]">Create or sign in</p>
              <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
                Go to{' '}
                <a
                  href="https://github.com/signup"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-github-blue)] hover:underline inline-flex items-center gap-1"
                >
                  github.com/signup
                  <ExternalLink size={12} />
                </a>
                {' '}and create a free account, or sign in if you already have one.
              </p>
            </div>
          </li>
          <li className="flex gap-3 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]">
            <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-[var(--color-github-muted)]" />
            <div>
              <p className="text-sm font-medium text-[var(--color-github-text)]">Verify your email</p>
              <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
                Open the message from GitHub and confirm your address. Unverified accounts can hit limits on private repos and some features.
              </p>
            </div>
          </li>
          <li className="flex gap-3 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]">
            <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-[var(--color-github-muted)]" />
            <div>
              <p className="text-sm font-medium text-[var(--color-github-text)]">Profile basics</p>
              <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
                Set a username you are happy to show in class. Optional: add a profile photo so reviews and PRs are easier to recognise.
              </p>
            </div>
          </li>
          <li className="flex gap-3 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]">
            <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-[var(--color-github-muted)]" />
            <div>
              <p className="text-sm font-medium text-[var(--color-github-text)]">Network check</p>
              <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
                Confirm you can open github.com and sign in on the network you will use during class (office Wi‑Fi, VPN, or home).
              </p>
            </div>
          </li>
        </ol>

        <div className="p-4 rounded-lg border border-[var(--color-github-yellow)]/40 bg-[#161b22]">
          <p className="text-sm font-medium text-[var(--color-github-yellow)]">Two-factor authentication (2FA)</p>
          <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
            If 2FA is on, Git will not accept your GitHub password for HTTPS. You will need a{' '}
            <a
              href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"
              target="_blank"
              rel="noreferrer"
              className="text-[var(--color-github-blue)] hover:underline"
            >
              personal access token (PAT)
            </a>{' '}
            when you clone or push later. Mentors can demo this in class if needed.
          </p>
        </div>
      </section>

      {/* ── Part B: Git Bash ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-github-blue)]/20 text-[var(--color-github-blue)] text-sm font-bold">
            B
          </span>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-github-text)]">
            Git and Git Bash
          </h2>
        </div>

        <p className="text-[var(--color-github-muted)] leading-relaxed">
          Git is the command-line tool. On Windows, class uses <strong className="text-[var(--color-github-text)]">Git Bash</strong> so prompts and paths match the demos (MINGW64 style).
        </p>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]">
            <p className="text-sm font-semibold text-[var(--color-github-text)] mb-2">Windows</p>
            <ol className="text-sm text-[var(--color-github-muted)] space-y-2 list-decimal list-inside leading-relaxed">
              <li>
                Download the installer from{' '}
                <a
                  href="https://git-scm.com/download/win"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-github-blue)] hover:underline"
                >
                  git-scm.com/download/win
                </a>
              </li>
              <li>Run the installer. Default options are fine for class.</li>
              <li>
                Open <strong className="text-[var(--color-github-text)]">Git Bash</strong> from the Start menu (not Command Prompt or PowerShell unless the mentor says so).
              </li>
            </ol>
          </div>
          <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]">
            <p className="text-sm font-semibold text-[var(--color-github-text)] mb-2">Mac / Linux</p>
            <ol className="text-sm text-[var(--color-github-muted)] space-y-2 list-decimal list-inside leading-relaxed">
              <li>
                Mac: install Xcode Command Line Tools or Git from{' '}
                <a
                  href="https://git-scm.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--color-github-blue)] hover:underline"
                >
                  git-scm.com
                </a>
              </li>
              <li>Linux: install with your package manager (e.g. <code className="text-[var(--color-github-blue)] text-xs">sudo apt install git</code>).</li>
              <li>Open <strong className="text-[var(--color-github-text)]">Terminal</strong> and use the same Git commands as in class.</li>
            </ol>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-[var(--color-github-text)] mb-2">Verify the install</p>
          <CodeBlock
            title="In Git Bash or Terminal"
            code={`git --version`}
          />
          <p className="text-sm text-[var(--color-github-muted)] mt-2 leading-relaxed">
            You should see a version number (for example <code className="text-[var(--color-github-blue)] text-xs">git version 2.45.2</code>). Anything 2.0 or newer is fine for this course.
          </p>
        </div>

        <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]">
          <p className="text-sm font-medium text-[var(--color-github-text)]">What Git Bash looks like</p>
          <p className="text-sm text-[var(--color-github-muted)] mt-1 leading-relaxed">
            The yellow prompt often starts with <code className="text-[var(--color-github-accent)] text-xs">MINGW64</code> and a path like{' '}
            <code className="text-[var(--color-github-blue)] text-xs">/c/Users/YourName</code>.
            That is the same style as the practice terminal at the bottom of this site.
          </p>
        </div>
      </section>

      {/* ── Part C: quick checks ── */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#a371f7]/20 text-[#a371f7] text-sm font-bold">
            C
          </span>
          <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-github-text)]">
            Optional checks before class
          </h2>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-[var(--color-github-text)] mb-2">Test clone (HTTPS)</p>
            <CodeBlock
              title="Git Bash / Terminal"
              code={`git clone https://github.com/githubschool/scratch`}
            />
            <p className="text-sm text-[var(--color-github-muted)] mt-2 leading-relaxed">
              If this works, your network can reach GitHub over HTTPS. Prefer HTTPS on corporate networks.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-[var(--color-github-text)] mb-2">Text editor</p>
            <p className="text-sm text-[var(--color-github-muted)] leading-relaxed">
              Install any editor you can open project folders with. Common choices: Visual Studio Code, Sublime Text, or the default editor on your OS.
              From a project folder in Git Bash you can often run <code className="text-[var(--color-github-blue)] text-xs">code .</code> if VS Code is installed.
            </p>
          </div>
        </div>
      </section>

      {/* Ready checklist summary */}
      <section className="rounded-xl border border-[var(--color-github-accent)]/30 bg-[#161b22] p-5">
        <h2 className="text-base font-semibold text-[var(--color-github-text)] mb-3">
          You are ready when
        </h2>
        <ul className="space-y-2 text-sm text-[var(--color-github-muted)]">
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[var(--color-github-accent)]" />
            You can sign in at github.com
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[var(--color-github-accent)]" />
            Git Bash (Windows) or Terminal (Mac/Linux) is open
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="shrink-0 mt-0.5 text-[var(--color-github-accent)]" />
            <code className="text-[var(--color-github-blue)] text-xs">git --version</code> prints a version
          </li>
        </ul>
      </section>

      <div className="pt-2 border-t border-[var(--color-github-border)]">
        <p className="text-xs font-semibold tracking-wider text-[var(--color-github-accent)] mb-2">
          TRY IN FOOTER TERMINAL
        </p>
        <ol className="text-sm font-mono text-[var(--color-github-muted)] list-decimal list-inside space-y-1 mb-4">
          <li>git --version</li>
          <li>help</li>
        </ol>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          to="/setup"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-github-accent)] text-white font-medium hover:bg-[#2ea043] transition-colors"
        >
          Next: Local Git Configuration
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/intro"
          className="text-sm text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] transition-colors"
        >
          Back: Intro to Git &amp; GitHub
        </Link>
      </div>
    </SectionLayout>
  )
}
