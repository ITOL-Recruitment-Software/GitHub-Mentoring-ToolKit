import { Link } from 'react-router-dom'
import { ArrowRight, ShieldCheck, Zap } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import FlowDiagram from '../components/FlowDiagram'
import CodeBlock from '../components/CodeBlock'

export default function Actions() {
  return (
    <SectionLayout title="GitHub Actions & CI" subtitle="Automate repeatable checks when code is pushed or a pull request is opened.">
      <p className="max-w-3xl text-sm leading-6 text-[var(--color-github-muted)]">Continuous integration (CI) runs checks on proposed changes so problems can be found before merge. Workflows are YAML files stored in <code>.github/workflows/</code>. Deployment can be a later job, but it should only happen after the required checks succeed.</p>

      <FlowDiagram steps={[
        { label: 'Push or PR', sublabel: 'Trigger', color: '#58a6ff' },
        { label: 'Install', sublabel: 'Dependencies', color: '#f0883e' },
        { label: 'Lint & Build', sublabel: 'Quality checks', color: '#a371f7' },
        { label: 'Review result', sublabel: 'Before merge', color: '#238636' },
      ]} />

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Example CI workflow</h2>
        <p className="text-sm leading-6 text-[var(--color-github-muted)]">This example matches the toolkit's current Node.js 24 and lint/build scripts. If you use <code>npm ci</code>, commit a matching <code>package-lock.json</code> first; otherwise use <code>npm install</code>.</p>
        <CodeBlock title=".github/workflows/ci.yml" language="yaml" code={`name: Validate application

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

permissions:
  contents: read

jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 24
      - run: npm install --no-audit --no-fund
      - run: npm run lint
      - run: npm run build`} />
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5">
          <div className="flex items-center gap-2 text-emerald-300"><ShieldCheck size={18} /><h2 className="font-semibold">Use least privilege</h2></div>
          <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Give workflows only the permissions they need. Store deployment credentials in repository or environment secrets, never directly in YAML or source files.</p>
        </article>
        <article className="rounded-xl border border-[var(--color-github-border)] bg-[#161b22] p-5">
          <div className="flex items-center gap-2 text-sky-300"><Zap size={18} /><h2 className="font-semibold">Keep checks useful</h2></div>
          <p className="mt-2 text-sm leading-6 text-[var(--color-github-muted)]">Run checks that exist in your project. Add unit tests when a test suite is available, and protect the default branch with checks that report consistently.</p>
        </article>
      </section>

      <Link to="/protected-branches" className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-4 py-3 text-sm font-semibold hover:border-emerald-400/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-300">Configure branch protection <ArrowRight size={16} /></Link>
    </SectionLayout>
  )
}
