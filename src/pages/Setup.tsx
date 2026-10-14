import { useState } from 'react'
import SectionLayout from '../components/SectionLayout'
import Terminal from '../components/Terminal'
import CodeBlock from '../components/CodeBlock'
import LivePractice from '../components/LivePractice'

export default function Setup() {
  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [completed, setCompleted] = useState(false)

  const reset = () => {
    setStep(0)
    setName('')
    setEmail('')
    setCompleted(false)
  }

  const next = () => {
    if (step === 0 && name.trim()) setStep(1)
    else if (step === 1 && email.trim()) {
      setStep(2)
      setCompleted(true)
    }
  }

  return (
    <SectionLayout
      title="Setting Up Git"
      subtitle="Install and configure Git so every commit is correctly attributed to you."
    >
      <h2 className="text-xl font-semibold">1. Install Git</h2>
      <p className="text-[var(--color-github-muted)]">
        First verify whether Git is already installed:
      </p>
      <Terminal
        lines={[
          { type: 'command', text: 'git --version' },
          { type: 'output', text: 'git version 2.45.2' },
        ]}
      />
      <p className="text-[var(--color-github-muted)]">
        If you see a version number, you are ready. Otherwise install from{' '}
        <a href="https://git-scm.com" className="text-[var(--color-github-blue)] hover:underline" target="_blank" rel="noreferrer">
          git-scm.com
        </a>{' '}
        or via your package manager.
      </p>

      <h2 className="text-xl font-semibold mt-8">2. Configure your identity</h2>
      <p className="text-[var(--color-github-muted)]">
        Every commit records an author name and email. Set them once globally:
      </p>
      <CodeBlock
        title="Global configuration"
        code={`git config --global user.name "Your Name"\ngit config --global user.email "email@example.com"`}
      />

      <div className="p-4 rounded-lg border border-[var(--color-github-yellow)]/40 bg-[#161b22] my-4">
        <p className="text-sm text-[var(--color-github-yellow)] font-medium">Why this is required</p>
        <p className="text-sm text-[var(--color-github-muted)] mt-1">
          Without these settings Git refuses to create commits (or uses a placeholder).
          On GitHub the email is used to link commits to your account and show your avatar.
          Use the same email that is registered on GitHub.
        </p>
      </div>

      <h2 className="text-xl font-semibold mt-8">3. Useful extra settings</h2>
      <CodeBlock
        title="Default Branch name for new Repos"
        code={`git config --global init.defaultBranch main`}
      />
      <CodeBlock
        title="Better diff colors"
        code={`git config --global color.ui auto`}
      />
      <CodeBlock
        title="Simple pull Behavior"
        code={`git config --global pull.rebase false`}
      />

      {/* LIVE PRACTICE */}
      <LivePractice
        title="Live Practice: Configure Your Git Identity"
        subtitle="Type your real name and email, then see the exact commands you should run."
        onReset={reset}
      >
        {step === 0 && (
          <div className="space-y-3">
            <label className="block text-sm text-[var(--color-github-muted)]">
              What is your full name? (used for user.name)
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Darren van der Velde"
              className="w-full px-3 py-2 rounded-lg bg-[#0d1117] border border-[var(--color-github-border)] text-[var(--color-github-text)] focus:outline-none focus:border-[var(--color-github-accent)]"
            />
            <button
              onClick={next}
              disabled={!name.trim()}
              className="px-4 py-2 rounded-lg bg-[var(--color-github-accent)] text-black font-medium disabled:opacity-40"
            >
              Next →
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-3">
            <label className="block text-sm text-[var(--color-github-muted)]">
              What email do you use on GitHub?
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. you@example.com"
              className="w-full px-3 py-2 rounded-lg bg-[#0d1117] border border-[var(--color-github-border)] text-[var(--color-github-text)] focus:outline-none focus:border-[var(--color-github-accent)]"
            />
            <button
              onClick={next}
              disabled={!email.trim()}
              className="px-4 py-2 rounded-lg bg-[var(--color-github-accent)] text-black font-medium disabled:opacity-40"
            >
              Generate Commands →
            </button>
          </div>
        )}

        {completed && (
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30">
              <p className="text-green-400 font-medium">Ready! Copy and run these two commands in your terminal:</p>
            </div>
            <CodeBlock
              title="Your personal Git config commands"
              code={`git config --global user.name "${name}"\ngit config --global user.email "${email}"`}
            />
            <Terminal
              title="Expected result"
              lines={[
                { type: 'command', text: `git config --global user.name "${name}"` },
                { type: 'command', text: `git config --global user.email "${email}"` },
                { type: 'command', text: 'git config --global --list' },
                { type: 'output', text: `user.name=${name}` },
                { type: 'output', text: `user.email=${email}` },
              ]}
            />
          </div>
        )}
      </LivePractice>
    </SectionLayout>
  )
}
