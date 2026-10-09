import SectionLayout from '../components/SectionLayout'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'

export default function ReadyForClass() {
  return (
    <SectionLayout
      title="Getting Ready for Class"
      subtitle="Set up your GitHub account, install Git, clone with HTTPS, and choose a text editor — before the session starts."
    >
      <h2 className="text-xl font-semibold">Step 1: Set Up Your GitHub.com Account</h2>
      <p className="text-[var(--color-github-muted)]">
        Use a public account on GitHub.com for class. Practice repos should not contain real production code —
        you will break things on purpose so you can learn how to fix them.
      </p>
      <ol className="list-decimal list-inside text-[var(--color-github-muted)] space-y-1 ml-2">
        <li>Go to GitHub.com and click <strong className="text-[var(--color-github-text)]">Sign up</strong>.</li>
        <li>Choose the free account.</li>
        <li>Verify the email GitHub sends you.</li>
        <li>If you already have an account, confirm github.com works on your network.</li>
      </ol>
      <h2 className="text-xl font-semibold mt-8">Step 2: Install Git</h2>
      <Terminal lines={[
        { type: 'command', text: 'git --version' },
        { type: 'output', text: 'git version 2.45.2' },
      ]} />
      <p className="text-[var(--color-github-muted)]">Anything over 2.0 is fine. Install from <a href="https://git-scm.com" className="text-[var(--color-github-blue)] hover:underline" target="_blank" rel="noreferrer">git-scm.com</a>.</p>
      <div className="p-4 rounded-lg border border-[var(--color-github-border)] bg-[#161b22] my-4">
        <p className="text-sm font-medium text-[var(--color-github-text)]">Where is your shell?</p>
        <ul className="text-sm text-[var(--color-github-muted)] mt-2 space-y-1 list-disc list-inside">
          <li><strong className="text-[var(--color-github-text)]">Windows:</strong> use Git Bash so commands match the trainer.</li>
          <li><strong className="text-[var(--color-github-text)]">Mac / Linux:</strong> use Terminal.</li>
        </ul>
      </div>
      <h2 className="text-xl font-semibold mt-8">Step 3: Try cloning with HTTPS</h2>
      <CodeBlock title="Test clone" code={`git clone https://github.com/githubschool/scratch`} />
      <p className="text-[var(--color-github-muted)]">Prefer HTTPS on corporate networks. With 2FA, use a personal access token instead of a password.</p>
      <CodeBlock title="Proxy (no auth)" code={`git config --global http.proxy https://YOUR.PROXY.SERVER:8080`} />
      <h2 className="text-xl font-semibold mt-8">Step 4: Set Up Your Text Editor</h2>
      <ul className="list-disc list-inside text-[var(--color-github-muted)] space-y-1 ml-2">
        <li>Visual Studio Code</li>
        <li>Sublime Text</li>
        <li>Notepad++ / Vim</li>
      </ul>
      <Terminal lines={[{ type: 'command', text: 'code .' }]} />
    </SectionLayout>
  )
}
