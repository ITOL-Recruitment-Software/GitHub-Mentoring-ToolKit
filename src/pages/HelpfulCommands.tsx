import SectionLayout from '../components/SectionLayout'
import CodeBlock from '../components/CodeBlock'

export default function HelpfulCommands() {
  return (
    <SectionLayout
      title="Helpful Git Commands"
      subtitle="A quick reference of everyday commands that save time."
    >
      <CodeBlock
        title="Status & inspection"
        code={`git status\ngit status -s          # short format\ngit diff\ngit diff --staged\ngit show HEAD`}
      />

      <CodeBlock
        title="Staging & committing"
        code={`git add .\ngit add -p             # interactive staging\ngit commit -m "msg"\ngit commit --amend     # fix last commit message`}
      />

      <CodeBlock
        title="Branches"
        code={`git branch\ngit branch -a\ngit checkout -b feature/name\ngit switch main\ngit branch -d feature/name`}
      />

      <CodeBlock
        title="Remote"
        code={`git remote -v\ngit fetch origin\ngit pull\ngit push -u origin HEAD`}
      />
    </SectionLayout>
  )
}
