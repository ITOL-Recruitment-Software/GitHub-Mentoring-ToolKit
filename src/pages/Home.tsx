import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  GitBranch,
  GitCommitHorizontal,
  GitPullRequest,
  Globe2,
  History,
  Lightbulb,
  MessageSquare,
  Rocket,
  ShieldCheck,
  CheckCircle2,
  Play,
  RotateCcw,
  Users,
  Workflow,
} from 'lucide-react'
import SectionLayout from '../components/SectionLayout'

const learningCards = [
  {
    number: '01',
    title: 'Repositories',
    description: 'A home for your project files, history, notes, and collaboration.',
    detail: 'Think of a repository as a project folder with a memory.',
    icon: BookOpen,
    to: '/intro',
    className: 'md:col-span-2',
  },
  {
    number: '02',
    title: 'Commits',
    description: 'Save a named snapshot of your work so you can understand what changed and when.',
    detail: 'Small, clear snapshots make progress easier to follow.',
    icon: GitCommitHorizontal,
    to: '/setup',
    className: '',
  },
  {
    number: '03',
    title: 'Branches',
    description: 'Work on a new idea or fix without disturbing the version everyone relies on.',
    detail: 'A safe workspace for experimenting.',
    icon: GitBranch,
    to: '/setup',
    className: '',
  },
  {
    number: '04',
    title: 'Pull requests',
    description: 'Share proposed changes, discuss them, review the code, and merge when ready.',
    detail: 'Collaboration before changes become part of the main project.',
    icon: GitPullRequest,
    to: '/workflow-review',
    className: 'md:col-span-2',
  },
]

const workflowSteps = [
  { label: 'Create', detail: 'Start a repository for your project.' },
  { label: 'Branch', detail: 'Make a separate space for a change.' },
  { label: 'Commit', detail: 'Save a meaningful checkpoint.' },
  { label: 'Review', detail: 'Open a pull request and discuss the work.' },
  { label: 'Merge', detail: 'Bring approved changes together.' },
]

const history = [
  { year: '2008', title: 'GitHub launches', description: 'GitHub opens its doors and makes sharing Git repositories and collaborating online easier.' },
  { year: '2010s', title: 'A home for open source', description: 'Projects, pull requests, issues, and community contributions become familiar parts of software development.' },
  { year: '2018', title: 'Microsoft acquisition', description: 'Microsoft announces its acquisition of GitHub, which continues to operate as a platform for developers.' },
  { year: 'Today', title: 'More than code storage', description: 'Teams use GitHub to plan work, review changes, automate checks, document projects, and build together.' },
]

export default function Home() {
  const [demoStep, setDemoStep] = useState(0)
  const demoStages = [
    { label: 'Create a project', command: 'mkdir hello-github && cd hello-github && git init', detail: 'Start a new folder and initialise Git so it can track your project history.' },
    { label: 'Add a file', command: 'echo "# Hello GitHub" > README.md\ngit status', detail: 'Create a README and ask Git which files are new or changed.' },
    { label: 'Save a commit', command: 'git add README.md\ngit commit -m "Add project README"', detail: 'Stage the file and save your first named snapshot in the project history.' },
    { label: 'Share your change', command: 'git switch -c feature/readme\ngit push -u origin feature/readme', detail: 'In a real repository, push a branch to GitHub and open a pull request for review.' },
  ]
  const activeDemo = demoStages[demoStep]

  return (
    <SectionLayout
      title="GitHub Mentoring Toolkit"
      subtitle="A friendly starting point for understanding GitHub, how it began, and how developers use it together."
      fullWidth
    >
      <div className="space-y-8 pb-8">
        <section className="relative isolate overflow-hidden rounded-2xl border border-[var(--color-github-border)] bg-[#0d1117] p-6 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 -z-10 h-36 w-36 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium tracking-wide text-emerald-300">
                <GitBranch size={14} />
                YOUR JOURNEY STARTS HERE
              </div>
              <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--color-github-text)] sm:text-4xl lg:text-5xl">
                Learn how developers <span className="text-emerald-400">build together.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-github-muted)]">
                GitHub helps people store projects, track changes, share ideas, and work as a team. You do not need to know everything on day one. Start with the basics, practise one step at a time, and build confidence as you go.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/intro" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2ea043]">
                  Start learning <ArrowRight size={16} />
                </Link>
                <a href="#github-story" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-3 text-sm font-medium text-[var(--color-github-text)] transition hover:border-emerald-400/50 hover:bg-white/5">
                  Discover the story <ArrowDownRight size={16} />
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.12 }} className="relative mx-auto w-full max-w-sm">
              <div className="rounded-2xl border border-emerald-400/20 bg-[#161b22]/90 p-4 shadow-2xl shadow-emerald-950/20">
                <div className="flex items-center gap-2 border-b border-[var(--color-github-border)] pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff7b72]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#e3b341]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#3fb950]" />
                  <span className="ml-2 text-xs text-[var(--color-github-muted)]">your-project</span>
                </div>
                <div className="space-y-3 py-5">
                  <div className="flex items-center gap-3 rounded-lg bg-[#0d1117] p-3">
                    <BookOpen size={18} className="text-emerald-400" />
                    <div className="flex-1"><p className="text-sm font-medium text-[var(--color-github-text)]">README.md</p><p className="text-xs text-[var(--color-github-muted)]">Explain your project</p></div>
                    <span className="text-xs text-emerald-400">+1</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-[#0d1117] p-3">
                    <GitCommitHorizontal size={18} className="text-emerald-400" />
                    <div className="flex-1"><p className="text-sm font-medium text-[var(--color-github-text)]">Add project overview</p><p className="text-xs text-[var(--color-github-muted)]">A saved checkpoint</p></div>
                    <span className="text-xs text-[var(--color-github-muted)]">2m</span>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg bg-[#0d1117] p-3">
                    <GitPullRequest size={18} className="text-emerald-400" />
                    <div className="flex-1"><p className="text-sm font-medium text-[var(--color-github-text)]">Improve homepage</p><p className="text-xs text-[var(--color-github-muted)]">Ready for review</p></div>
                    <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[10px] text-emerald-300">Open</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-[var(--color-github-border)] pt-3 text-xs text-[var(--color-github-muted)]">
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Project activity</span>
                  <span>Small steps add up</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 hidden rounded-xl border border-[var(--color-github-border)] bg-[#161b22] px-4 py-3 shadow-xl sm:block">
                <p className="text-xs text-[var(--color-github-muted)]">The goal</p>
                <p className="mt-1 text-sm font-semibold text-[var(--color-github-text)]">Learn by doing</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="live-example" className="overflow-hidden rounded-2xl border border-emerald-400/25 bg-[#0d1117]">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--color-github-border)] p-5 sm:p-6">
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300"><Play size={14} /> Interactive starter lab</p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--color-github-text)] sm:text-2xl">Try a Git workflow right here</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[var(--color-github-muted)]">Step through a tiny project from folder to shareable change. This is a safe visual simulation: it shows commands and progress without running anything on your computer.</p>
            </div>
            <button type="button" onClick={() => setDemoStep(0)} className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--color-github-border)] px-3 py-2 text-xs font-medium text-[var(--color-github-muted)] transition hover:border-emerald-400/40 hover:text-[var(--color-github-text)]"><RotateCcw size={13} /> Reset demo</button>
          </div>
          <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-2 p-4 sm:p-5">
              {demoStages.map((stage, index) => (
                <button key={stage.label} type="button" onClick={() => setDemoStep(index)} className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left transition ${demoStep === index ? 'border-emerald-400/50 bg-emerald-400/10' : 'border-[var(--color-github-border)] bg-[#161b22] hover:border-emerald-400/30'}`}>
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${index < demoStep ? 'bg-emerald-400 text-[#07120b]' : demoStep === index ? 'bg-emerald-400/20 text-emerald-300' : 'bg-[#0d1117] text-[var(--color-github-muted)]'}`}>{index < demoStep ? <CheckCircle2 size={16} /> : `0${index + 1}`}</span>
                  <span className="min-w-0 flex-1"><span className="block text-sm font-semibold text-[var(--color-github-text)]">{stage.label}</span><span className="mt-0.5 block text-xs text-[var(--color-github-muted)]">{index === 0 ? 'Initialise version control' : index === 1 ? 'Create your first file' : index === 2 ? 'Record the change' : 'Prepare to collaborate'}</span></span>
                </button>
              ))}
              <div className="pt-2">
                <div className="mb-2 flex items-center justify-between text-xs text-[var(--color-github-muted)]"><span>Demo progress</span><span>{demoStep + 1} of {demoStages.length}</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-[#21262d]"><div className="h-full rounded-full bg-emerald-400 transition-all duration-300" style={{ width: `${((demoStep + 1) / demoStages.length) * 100}%` }} /></div>
              </div>
            </div>
            <div className="border-t border-[var(--color-github-border)] p-4 sm:p-5 lg:border-l lg:border-t-0">
              <div className="overflow-hidden rounded-xl border border-[var(--color-github-border)] bg-[#010409]">
                <div className="flex items-center gap-2 border-b border-[var(--color-github-border)] px-3 py-2.5"><span className="h-2.5 w-2.5 rounded-full bg-[#ff7b72]" /><span className="h-2.5 w-2.5 rounded-full bg-[#e3b341]" /><span className="h-2.5 w-2.5 rounded-full bg-[#3fb950]" /><span className="ml-2 text-[11px] text-[var(--color-github-muted)]">terminal · hello-github</span></div>
                <div className="min-h-[130px] p-4">
                  <p className="mb-3 text-xs font-semibold text-emerald-300">$ {activeDemo.label}</p>
                  <pre className="whitespace-pre-wrap break-words font-mono text-xs leading-6 text-[var(--color-github-text)]">{activeDemo.command}</pre>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-github-muted)]">{activeDemo.detail}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <button type="button" disabled={demoStep === 0} onClick={() => setDemoStep((step) => Math.max(0, step - 1))} className="rounded-lg border border-[var(--color-github-border)] px-4 py-2 text-xs font-semibold text-[var(--color-github-text)] transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40">Previous step</button>
                <button type="button" onClick={() => setDemoStep((step) => (step + 1) % demoStages.length)} className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-xs font-semibold text-[#07120b] transition hover:bg-emerald-400">{demoStep === demoStages.length - 1 ? 'Run it again' : 'Next step'} <ArrowRight size={13} /></button>
              </div>
              {demoStep === demoStages.length - 1 && <p className="mt-3 text-xs leading-relaxed text-emerald-300">Next in real life: open GitHub, create a pull request, explain the change, and invite a review.</p>}
            </div>
          </div>
        </section>

        <section className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-4">
            <Globe2 className="mb-3 text-emerald-400" size={20} />
            <h3 className="text-sm font-semibold text-[var(--color-github-text)]">Share your work</h3>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-github-muted)]">Keep projects online so you can return to them and show others what you are building.</p>
          </div>
          <div className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-4">
            <History className="mb-3 text-emerald-400" size={20} />
            <h3 className="text-sm font-semibold text-[var(--color-github-text)]">Understand change</h3>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-github-muted)]">See what changed, why it changed, and how to go back when something breaks.</p>
          </div>
          <div className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-4">
            <Users className="mb-3 text-emerald-400" size={20} />
            <h3 className="text-sm font-semibold text-[var(--color-github-text)]">Work together</h3>
            <p className="mt-1 text-sm leading-relaxed text-[var(--color-github-muted)]">Discuss ideas, review contributions, and combine work without losing track of it.</p>
          </div>
        </section>

        <section>
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">The building blocks</p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--color-github-text)] sm:text-2xl">The GitHub basics, made simple</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-github-muted)]">You will meet these ideas repeatedly. Learn what each one does before worrying about every detail.</p>
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {learningCards.map((card, index) => (
              <motion.div key={card.number} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className={card.className}>
                <Link to={card.to} className="group flex h-full flex-col rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-5 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-400/40 hover:bg-[#111820]">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-mono text-emerald-400">{card.number}</span>
                    <card.icon size={20} className="text-[var(--color-github-muted)] transition group-hover:text-emerald-400" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-[var(--color-github-text)]">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-github-muted)]">{card.description}</p>
                  <p className="mt-4 border-t border-[var(--color-github-border)] pt-3 text-xs leading-relaxed text-emerald-300/90">{card.detail}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-github-text)]">Explore topic <ArrowRight size={13} className="transition group-hover:translate-x-1" /></span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="github-story" className="scroll-mt-6 rounded-2xl border border-[var(--color-github-border)] bg-[#161b22] p-5 sm:p-7">
          <div className="grid gap-7 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">A little history</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[var(--color-github-text)]">Why was GitHub created?</h2>
              <p className="mt-4 text-sm leading-6 text-[var(--color-github-muted)]">
                Git was already helping developers track versions of their code. GitHub added a shared online place where people could host Git repositories, see changes, discuss proposed updates, and contribute to projects together.
              </p>
              <div className="mt-5 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-4">
                <Lightbulb size={19} className="text-emerald-400" />
                <p className="mt-2 text-sm font-medium text-[var(--color-github-text)]">The big idea</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--color-github-muted)]">Make it easier for developers to share code, understand changes, and improve software together, wherever they are.</p>
              </div>
            </div>
            <div className="space-y-0">
              {history.map((item, index) => (
                <div key={item.year} className="relative grid grid-cols-[76px_1fr] gap-3 pb-6 last:pb-0">
                  <div className="relative">
                    {index !== history.length - 1 && <span className="absolute left-[31px] top-7 h-full w-px bg-[var(--color-github-border)]" />}
                    <span className="relative z-10 inline-flex min-w-[64px] items-center justify-center rounded-md border border-emerald-400/20 bg-[#0d1117] px-2 py-1.5 text-xs font-semibold text-emerald-300">{item.year}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--color-github-text)]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-github-muted)]">{item.description}</p>
                  </div>
                </div>
              ))}
              <div className="mt-2 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-[var(--color-github-muted)]">The original founding team</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-github-text)]">Tom Preston-Werner, Chris Wanstrath, PJ Hyett, and Scott Chacon are widely credited as GitHub's co-founders.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">A workflow you can remember</p>
            <h2 className="mt-2 text-xl font-semibold text-[var(--color-github-text)] sm:text-2xl">From first file to shared improvement</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <div key={step.label} className="relative rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-sm font-semibold text-emerald-300">{index + 1}</span>
                  {index === 0 ? <Rocket size={17} className="text-[var(--color-github-muted)]" /> : index === 1 ? <GitBranch size={17} className="text-[var(--color-github-muted)]" /> : index === 2 ? <GitCommitHorizontal size={17} className="text-[var(--color-github-muted)]" /> : index === 3 ? <MessageSquare size={17} className="text-[var(--color-github-muted)]" /> : <Workflow size={17} className="text-[var(--color-github-muted)]" />}
                </div>
                <h3 className="text-sm font-semibold text-[var(--color-github-text)]">{step.label}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[var(--color-github-muted)]">{step.detail}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-[var(--color-github-muted)]"><ShieldCheck size={15} className="mt-0.5 shrink-0 text-emerald-400" /> Real teams may use different review rules, but the key habit stays the same: make changes easy to understand and safe to share.</p>
        </section>

        <section className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/10 via-[#0d1117] to-[#0d1117] p-6 sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Ready to practise?</p>
              <h2 className="mt-2 text-xl font-semibold text-[var(--color-github-text)] sm:text-2xl">The best way to learn GitHub is to use it.</h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-github-muted)]">Move from the overview into guided lessons, practise the commands, and build a workflow you can use in your own projects.</p>
            </div>
            <Link to="/ready-for-class" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#2ea043]">Get started <ArrowRight size={16} /></Link>
          </div>
        </section>
      </div>
    </SectionLayout>
  )
}
