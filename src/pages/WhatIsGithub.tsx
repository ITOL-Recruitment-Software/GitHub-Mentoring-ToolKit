import SectionLayout from '../components/SectionLayout'

export default function WhatIsGithub() {
  return (
    <SectionLayout title="What is GitHub?" subtitle="Collaboration platform built on Git — snapshots, branches, and explicit commits.">
      <p className="text-[var(--color-github-muted)] leading-relaxed">GitHub hosts repositories and adds Issues, Pull Requests, Projects, Organizations, and Teams.</p>
      <h2 className="text-xl font-semibold mt-8">Git stores snapshots, not deltas</h2>
      <p className="text-[var(--color-github-muted)]">A commit is a full snapshot of the project at a point in time — not only a chain of patches.</p>
      <h2 className="text-xl font-semibold mt-8">Local-first</h2>
      <p className="text-[var(--color-github-muted)]">Clone receives full history. Work offline; queries run on your machine.</p>
      <h2 className="text-xl font-semibold mt-8">Branches are cheap</h2>
      <p className="text-[var(--color-github-muted)]">A branch is a pointer to the latest commit on a line of work until you merge.</p>
      <h2 className="text-xl font-semibold mt-8">Git is explicit</h2>
      <p className="text-[var(--color-github-muted)]">No auto-push. You choose when to commit and when to send changes to the remote.</p>
      <h2 className="text-xl font-semibold mt-8">User vs organization accounts</h2>
      <div className="grid sm:grid-cols-2 gap-4 my-4">
        <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]"><h3 className="font-semibold text-[var(--color-github-accent)] mb-2">User</h3><p className="text-sm text-[var(--color-github-muted)]">Collaborators get read-write on specific repos.</p></div>
        <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]"><h3 className="font-semibold text-[var(--color-github-accent)] mb-2">Organization</h3><p className="text-sm text-[var(--color-github-muted)]">Teams with read, write, or admin on selected repos.</p></div>
      </div>
    </SectionLayout>
  )
}
