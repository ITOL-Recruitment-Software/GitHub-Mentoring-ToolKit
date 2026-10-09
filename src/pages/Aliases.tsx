import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function Aliases() {
  return (
    <SectionLayout title="Git Aliases" subtitle="Short commands for long Git invocations.">
      <CodeBlock code={`git config --global alias.lol "log --oneline --graph --decorate --all"\ngit config --global alias.s "status -s"\ngit config --global alias.cob "checkout -b"\ngit lol`} />
    </SectionLayout>
  )
}
