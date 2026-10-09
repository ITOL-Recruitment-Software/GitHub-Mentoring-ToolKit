import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function Appendix() {
  return (
    <SectionLayout
      title="Appendix"
      subtitle="Extra config from the Official GitHub Training Manual."
    >
      <h2 className="text-xl font-semibold">Credential helpers</h2>
      <CodeBlock code={`# Windows
git config --global credential.helper wincred
# macOS
git config --global credential.helper osxkeychain`} />
      <h2 className="text-xl font-semibold mt-8">Prune remote-tracking branches</h2>
      <CodeBlock code={`git config --global fetch.prune true`} />
      <h2 className="text-xl font-semibold mt-8">Line endings</h2>
      <CodeBlock code={`# Windows
git config --global core.autocrlf true
# macOS / Linux
git config --global core.autocrlf input`} />
      <h2 className="text-xl font-semibold mt-8">License</h2>
      <p className="text-[var(--color-github-muted)]">
        Training manual prose is licensed CC BY 4.0. GitHub logos and trademarks are not covered by that license.
      </p>
    </SectionLayout>
  )
}
