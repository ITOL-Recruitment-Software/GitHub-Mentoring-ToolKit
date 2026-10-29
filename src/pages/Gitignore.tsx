import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'
import Callout from '../components/Callout'

export default function Gitignore() {
  return (
    <SectionLayout
      title=".gitignore"
      subtitle="Tell Git which files and folders should never be tracked. A well-written .gitignore keeps secrets, build artefacts, and editor noise out of the repository."
      eyebrow="Reference · 1.7"
    >
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Common patterns</h2>
        <CodeBlock title="Example .gitignore" language="text" code={`# Dependencies\nnode_modules/\nvendor/\n\n# Build output\ndist/\nbuild/\n*.o\n\n# Environment & secrets\n.env\n.env.local\n*.pem\n\n# Editor / OS\n.DS_Store\n.idea/\n.vscode/\n*.swp`} />
      </section>

      <Callout variant="tip" title="github/gitignore">
        GitHub maintains a large collection of language- and framework-specific templates at{' '}
        <a href="https://github.com/github/gitignore" className="text-sky-300 hover:underline" target="_blank" rel="noreferrer">
          github/gitignore
        </a>.
      </Callout>

      <div className="flex flex-wrap gap-3 pt-2">
        <Link to="/issues" className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-github-accent)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--color-github-accent-hover)]">
          Next: Issues
          <ArrowRight size={15} />
        </Link>
        <Link to="/readme" className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-github-border)] px-5 py-2.5 text-sm font-medium transition hover:bg-white/[0.03]">
          Back to README
        </Link>
      </div>
    </SectionLayout>
  )
}
