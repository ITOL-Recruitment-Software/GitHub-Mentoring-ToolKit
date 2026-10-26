import { Link } from 'react-router-dom'
import { ArrowRight, FolderGit2 } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'

export default function LocalRepo() {
  return (
    <SectionLayout title="Create a Local Repository" subtitle="Start tracking a project with Git, then connect it to a remote repository when you are ready to share.">
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><FolderGit2 size={20} /></div>
          <div><h2 className="font-semibold">Local first, remote when ready</h2><p className="mt-1 text-sm text-[var(--color-github-muted)]">Git can track history on your computer before a GitHub repository exists.</p></div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Create and commit a project</h2>
        <Terminal lines={[
          { type: 'command', text: 'mkdir my-project && cd my-project' },
          { type: 'command', text: 'git init' },
          { type: 'output', text: 'Initialized empty Git repository in .../my-project/.git/' },
          { type: 'command', text: 'echo "# My Project" > README.md' },
          { type: 'command', text: 'git status' },
          { type: 'command', text: 'git add README.md' },
          { type: 'command', text: 'git commit -m "Add project README"' },
        ]} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">The terminal above is a demonstration. Run the commands in your own Git Bash or Terminal to create a real local repository.</p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Connect to GitHub</h2>
        <ol className="ml-5 list-decimal space-y-2 text-sm leading-6 text-[var(--color-github-muted)]">
          <li>Create an empty repository on GitHub. If you already have a local README, do not initialise the remote with a second README.</li>
          <li>Copy the repository's HTTPS or SSH URL.</li>
          <li>Add the remote and push your current branch.</li>
        </ol>
        <CodeBlock title="Publish the first branch" code={`git remote add origin https://github.com/YOUR-USERNAME/my-project.git
git branch -M main
git push -u origin main
git remote -v`} />
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">Replace the example URL with your own repository. GitHub may ask you to authenticate with a credential manager, token, or SSH key depending on your setup.</p>
      </section>

      <div className="rounded-lg border border-sky-400/20 bg-sky-400/[0.06] p-4">
        <p className="font-semibold text-sky-200">Remote is not the same as backup</p>
        <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Pushing shares commits with GitHub, but a remote does not protect uncommitted files or replace a proper backup. Commit meaningful work and follow your organisation's backup and access policies.</p>
      </div>

      <Link to="/working-locally" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Continue working locally <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
