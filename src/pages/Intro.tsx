import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Cloud,
  Code2,
  GitBranch,
  GitCommitHorizontal,
  GitPullRequest,
  Laptop,
  RefreshCw,
  ShieldCheck,
} from 'lucide-react'
import { motion } from 'framer-motion'
import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import CodeBlock from '../components/CodeBlock'

const comparison = [
  {
    label: 'Git',
    eyebrow: 'ON YOUR COMPUTER',
    description: 'The version-control tool that remembers how your project changes over time.',
    points: ['Track edits and snapshots', 'Create branches to experiment safely', 'Review history and restore earlier work'],
    icon: Code2,
    tone: 'text-emerald-300',
    surface: 'bg-emerald-400/10',
  },
  {
    label: 'GitHub',
    eyebrow: 'ONLINE WITH YOUR TEAM',
    description: 'The platform where Git repositories can be shared, reviewed, and worked on together.',
    points: ['Share repositories remotely', 'Discuss changes with pull requests and issues', 'Coordinate work and automate checks'],
    icon: Cloud,
    tone: 'text-sky-300',
    surface: 'bg-sky-400/10',
  },
]

const steps = [
  { number: '01', title: 'Edit', detail: 'Make a change to your project files.', icon: Laptop },
  { number: '02', title: 'Commit', detail: 'Save a useful checkpoint with Git.', icon: GitCommitHorizontal },
  { number: '03', title: 'Push', detail: 'Send your commits to the remote repository.', icon: Cloud },
  { number: '04', title: 'Review', detail: 'Collaborate on a pull request before merging.', icon: GitPullRequest },
]

export default function Intro() {
  return (
    <SectionLayout
      title="Introduction to Git & GitHub"
      subtitle="Two connected tools, two different jobs. Learn the difference and see how a developer's work travels from a computer to a team."
      fullWidth
    >
      <div className="space-y-8 pb-8">
        <section className="relative isolate overflow-hidden rounded-2xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 sm:p-7 lg:p-9">
          <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-emerald-300">
                <GitBranch size={14} />
                THE FOUNDATIONS
              </div>
              <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-[var(--color-github-text)] sm:text-4xl lg:text-5xl">
                One tool tracks your work. <span className="text-emerald-400">One place brings people together.</span>
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-github-muted)]">
                Git keeps a history of your project on your computer. GitHub hosts a copy online and adds tools that help people share, discuss, review, and improve work together.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/ready-for-class" className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2ea043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
                  Continue learning <ArrowRight size={16} />
                </Link>
                <a href="#the-difference" className="inline-flex min-h-11 items-center rounded-lg border border-[var(--color-github-border)] px-5 py-3 text-sm font-medium text-[var(--color-github-text)] transition hover:border-emerald-400/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
                  Compare Git and GitHub
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22]/90 p-4 sm:p-5">
              <div className="mb-4 flex items-center gap-2 border-b border-[var(--color-github-border)] pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b72]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#e3b341]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#3fb950]" />
                <span className="ml-2 text-xs text-[var(--color-github-muted)]">project journey</span>
              </div>
              <div className="space-y-3">
                {steps.map((step, index) => {
                  const Icon = step.icon
                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.08 }}
                      className="flex items-start gap-3 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] p-3"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                        <Icon size={17} />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-mono text-[var(--color-github-muted)]">{step.number}</span>
                          <h3 className="text-sm font-semibold text-[var(--color-github-text)]">{step.title}</h3>
                        </div>
                        <p className="mt-1 text-sm leading-5 text-[var(--color-github-muted)]">{step.detail}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="the-difference" className="scroll-mt-6 space-y-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">01 / Understand the difference</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-github-text)] sm:text-3xl">Meet the two tools</h2>
            <p className="mt-2 leading-7 text-[var(--color-github-muted)]">They work best together, but Git and GitHub are not the same thing.</p>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {comparison.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.label} className="rounded-2xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6 lg:p-7">
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.surface} ${item.tone}`}>
                      <Icon size={23} />
                    </div>
                    <div className="min-w-0">
                      <p className={`text-xs font-semibold tracking-widest ${item.tone}`}>{item.eyebrow}</p>
                      <h3 className="mt-1 text-xl font-semibold text-[var(--color-github-text)]">{item.label}</h3>
                      <p className="mt-2 leading-6 text-[var(--color-github-muted)]">{item.description}</p>
                    </div>
                  </div>
                  <ul className="mt-5 space-y-3 border-t border-[var(--color-github-border)] pt-5">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm leading-6 text-[var(--color-github-muted)]">
                        <ShieldCheck size={16} className={`mt-1 shrink-0 ${item.tone}`} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
          <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4 sm:p-5">
            <p className="text-sm font-semibold text-emerald-200">Remember it this way</p>
            <p className="mt-1 leading-6 text-[var(--color-github-muted)]">
              Git is the tool that records your project's history. GitHub is an online platform where you can store that repository and collaborate with other people.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">02 / Follow the journey</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-github-text)] sm:text-3xl">From your computer to collaboration</h2>
            <p className="mt-2 leading-7 text-[var(--color-github-muted)]">
              A typical workflow starts locally. You decide when to save a checkpoint and when to share it with the team.
            </p>
          </div>
          <FlowDiagram
            steps={[
              { label: 'Your computer', sublabel: 'Edit project files', color: '#58a6ff' },
              { label: 'Local Git', sublabel: 'Commit snapshots', color: '#238636' },
              { label: 'GitHub', sublabel: 'Share and review', color: '#a371f7' },
            ]}
          />
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-4">
              <Laptop size={19} className="text-sky-300" />
              <h3 className="mt-3 font-semibold text-[var(--color-github-text)]">Work locally</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Edit files and test your changes on your own computer, even offline.</p>
            </div>
            <div className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-4">
              <GitCommitHorizontal size={19} className="text-emerald-300" />
              <h3 className="mt-3 font-semibold text-[var(--color-github-text)]">Save a checkpoint</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Use a commit to record a meaningful snapshot in your project's history.</p>
            </div>
            <div className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-4">
              <RefreshCw size={19} className="text-violet-300" />
              <h3 className="mt-3 font-semibold text-[var(--color-github-text)]">Share the work</h3>
              <p className="mt-1 text-sm leading-6 text-[var(--color-github-muted)]">Push commits to GitHub so others can see, review, and build on them.</p>
            </div>
          </div>
          <p className="leading-7 text-[var(--color-github-muted)]">
            You work locally with Git. When your work is ready to share, you <code className="rounded bg-[#161b22] px-1.5 py-0.5 font-mono text-sm text-sky-300">push</code> commits to GitHub. Teammates can <code className="rounded bg-[#161b22] px-1.5 py-0.5 font-mono text-sm text-sky-300">pull</code> those commits, open pull requests, review changes, and merge approved work into <code className="rounded bg-[#161b22] px-1.5 py-0.5 font-mono text-sm text-sky-300">main</code>.
          </p>
        </section>

        <section className="grid gap-4 xl:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">03 / Quick recap</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-github-text)]">The mental model</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Keep this simple distinction in mind as you work through the rest of the toolkit.</p>
            <div className="mt-4 space-y-3">
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                <p className="text-sm leading-6 text-[var(--color-github-muted)]"><strong className="text-[var(--color-github-text)]">Git:</strong> history, branches, commits, and local version control.</p>
              </div>
              <div className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-sky-400" />
                <p className="text-sm leading-6 text-[var(--color-github-muted)]"><strong className="text-[var(--color-github-text)]">GitHub:</strong> hosting, collaboration, reviews, and online project tools.</p>
              </div>
            </div>
          </div>
          <CodeBlock
            title="A few commands to recognise"
            code={`git --version
git status
git add .
git commit -m "Describe the change"
git push`}
          />
        </section>

        <section className="flex flex-col gap-4 rounded-2xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">Ready for the next step?</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-github-text)]">Get your learning environment ready</h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--color-github-muted)]">Check your GitHub account and terminal before moving into the practical lessons.</p>
          </div>
          <Link to="/ready-for-class" className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2ea043] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400">
            Getting ready for class <ArrowRight size={16} />
          </Link>
        </section>
      </div>
    </SectionLayout>
  )
}
