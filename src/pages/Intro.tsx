import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen, Users, Monitor, Terminal } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'

export default function Intro() {
  return (
    <SectionLayout
      title="Welcome & License"
      subtitle="How to use this toolkit in mentoring sessions."
    >
      <section className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
        <h2 className="text-base font-semibold text-[var(--color-github-text)] mb-2">
          Welcome
        </h2>
        <p className="text-[var(--color-github-muted)] leading-relaxed">
          This toolkit is built for <strong className="text-[var(--color-github-text)]">mentors teaching Git and GitHub</strong>.
          Open it on a shared screen during a session. Walk through a topic, show the diagrams, and let students practice in the footer Git Bash.
        </p>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-github-text)] mb-3">
          How to use it in a session
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="flex gap-3 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]">
            <BookOpen size={18} className="shrink-0 mt-0.5 text-[var(--color-github-blue)]" />
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-github-text)]">Pick a topic</h3>
              <p className="text-sm text-[var(--color-github-muted)] mt-0.5 leading-relaxed">
                Use the sidebar groups (Start, Projects, Live Practices, Reference).
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]">
            <Monitor size={18} className="shrink-0 mt-0.5 text-[var(--color-github-blue)]" />
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-github-text)]">Teach from the page</h3>
              <p className="text-sm text-[var(--color-github-muted)] mt-0.5 leading-relaxed">
                Read the explanations, show Git graphs and flow diagrams on screen.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]">
            <Terminal size={18} className="shrink-0 mt-0.5 text-[var(--color-github-accent)]" />
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-github-text)]">Practice in the footer</h3>
              <p className="text-sm text-[var(--color-github-muted)] mt-0.5 leading-relaxed">
                The Git Bash at the bottom stays open on every page. Same history when you navigate.
              </p>
            </div>
          </div>
          <div className="flex gap-3 p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117]">
            <Users size={18} className="shrink-0 mt-0.5 text-[var(--color-github-blue)]" />
            <div>
              <h3 className="text-sm font-semibold text-[var(--color-github-text)]">PR practice is different</h3>
              <p className="text-sm text-[var(--color-github-muted)] mt-0.5 leading-relaxed">
                Pull request flows use a GitHub-style UI lab, not the terminal.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg sm:text-xl font-semibold text-[var(--color-github-text)] mb-3">
          What students will learn
        </h2>
        <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-1.5 leading-relaxed">
          <li>Git on their machine: status, add, commit, branch, push</li>
          <li>GitHub collaboration: pull requests, review, merge</li>
          <li>Conflicts, history, and everyday professional habits</li>
          <li>Where the terminal ends and the GitHub website begins</li>
        </ul>
      </section>

      <section className="rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] p-5">
        <h2 className="text-base font-semibold text-[var(--color-github-text)] mb-2">
          License & use
        </h2>
        <p className="text-sm text-[var(--color-github-muted)] leading-relaxed mb-3">
          This material is for <strong className="text-[var(--color-github-text)]">ITOL mentoring and training sessions</strong>.
          You may use it live with students and adapt examples for class demos.
        </p>
        <ul className="text-sm text-[var(--color-github-muted)] space-y-1.5 list-disc list-inside leading-relaxed">
          <li>Do use it for live mentoring, workshops, and internal training.</li>
          <li>Do keep branding and attribution when you share or fork the project.</li>
          <li>Do not present it as an official Git or GitHub product.</li>
        </ul>
        <p className="text-xs text-[var(--color-github-muted)] mt-4 leading-relaxed">
          Git and GitHub are trademarks of their respective owners. This toolkit is an independent teaching aid.
        </p>
      </section>

      <div className="flex flex-wrap items-center gap-3 pt-2">
        <Link
          to="/ready-for-class"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-github-accent)] text-white font-medium hover:bg-[#2ea043] transition-colors"
        >
          Next: Getting Ready for Class
          <ArrowRight size={16} />
        </Link>
        <Link
          to="/what-is-github"
          className="text-sm text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] transition-colors"
        >
          What is GitHub?
        </Link>
      </div>
    </SectionLayout>
  )
}
