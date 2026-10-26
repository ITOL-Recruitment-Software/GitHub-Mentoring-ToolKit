import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function Appendix() {
  return (
    <SectionLayout title="Appendix: Everyday Git Configuration" subtitle="Extra settings and recovery commands to keep nearby as you build confidence.">
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Credential storage</h2>
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">Use a supported credential manager rather than saving passwords in plain text. Git Credential Manager is a common choice on Windows, macOS, and Linux when installed.</p>
        <CodeBlock title="Check configured helpers" code={`git config --show-origin --get-all credential.helper
git credential-manager --version`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">The exact helper command depends on how Git and the credential manager were installed. Follow the current installation instructions for your operating system; do not paste access tokens into terminal history or commit them to a repository.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Clean up remote-tracking branches</h2>
        <CodeBlock title="Prune deleted remote branches" code={`git fetch --prune
git branch -vv
git remote -v`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">Pruning removes local references to branches that no longer exist on the remote. It does not delete your local branches or remove remote branches.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Line endings</h2>
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">Line-ending settings should match your operating system and team conventions. Avoid changing these settings blindly in an existing project, because a mismatch can create noisy diffs.</p>
        <CodeBlock title="Inspect current configuration" code={`git config --show-origin --get core.autocrlf
git config --show-origin --get core.eol
git check-attr text eol -- path/to/file`} />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Find lost-looking commits</h2>
        <CodeBlock title="Inspect recent reference movements" code={`git reflog --date=relative
git show <commit-sha>`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">The reflog records recent movements of local references and can help you locate commits after a reset or rebase. It is local, expires over time, and is not a substitute for backups or a remote copy.</p>
      </section>

      <div className="rounded-lg border border-amber-400/25 bg-amber-400/[0.06] p-4">
        <p className="font-semibold text-amber-200">Before running a destructive command</p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Read the command, check <code>git status</code>, and confirm which branch and files it affects. Commands such as <code>git reset --hard</code> can discard uncommitted changes.</p>
      </div>
    </SectionLayout>
  )
}
