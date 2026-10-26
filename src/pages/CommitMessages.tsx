import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function CommitMessages() {
  return (
    <SectionLayout
      title="Professional Commit Messages"
      subtitle="Conventional Commits, the industry standard for clear history."
    >
      <p className="text-[var(--color-github-muted)]">
        Conventional Commits give your history structure. Tools can automatically generate changelogs
        and determine version bumps from these messages.
      </p>

      <h2 className="text-xl font-semibold mt-6">Format</h2>
      <CodeBlock
        code={`<type>[optional scope]: <description>

[optional body]

[optional footer]`}
      />

      <h2 className="text-xl font-semibold mt-8">Common types</h2>
      <div className="space-y-3 mt-4">
        {[
          { type: 'feat', desc: 'A new feature', example: 'feat: add user profile page' },
          { type: 'fix', desc: 'A bug fix', example: 'fix: resolve login validation issue' },
          { type: 'docs', desc: 'Documentation only', example: 'docs: update installation guide' },
          { type: 'style', desc: 'Formatting, missing semi-colons, etc. (no code change)', example: 'style: improve dashboard layout' },
          { type: 'refactor', desc: 'Code change that neither fixes a bug nor adds a feature', example: 'refactor: clean API service' },
          { type: 'test', desc: 'Adding or correcting tests', example: 'test: add unit tests for auth' },
          { type: 'chore', desc: 'Maintenance tasks', example: 'chore: update dependencies' },
        ].map((item) => (
          <div key={item.type} className="flex flex-col sm:flex-row sm:items-center gap-2 p-3 rounded-lg border border-[var(--color-github-border)] bg-[#161b22]">
            <code className="text-[var(--color-github-accent)] font-semibold min-w-[80px]">{item.type}</code>
            <span className="text-sm text-[var(--color-github-muted)] flex-1">{item.desc}</span>
            <code className="text-xs text-[var(--color-github-blue)]">{item.example}</code>
          </div>
        ))}
      </div>

      <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#0d1117] mt-8">
        <p className="text-sm text-[var(--color-github-muted)]">
          Mentors: enforce this from day one. Students who write good commit messages produce
          repositories that are easy to review and maintain.
        </p>
      </div>
    </SectionLayout>
  )
}
