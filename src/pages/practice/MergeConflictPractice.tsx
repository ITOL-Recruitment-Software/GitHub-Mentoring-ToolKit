import { useState } from 'react'
import SectionLayout from '../../components/SectionLayout'
import LivePractice from '../../components/LivePractice'
import CodeBlock from '../../components/CodeBlock'

const conflictCode = `<<<<<<< HEAD
const greeting = "Hello from main";
=======
const greeting = "Hello from feature";
>>>>>>> feature`

export default function MergeConflictPractice() {
  const [resolved, setResolved] = useState(false)
  const [choice, setChoice] = useState<'main' | 'feature' | 'both' | null>(null)

  const resolve = (c: 'main' | 'feature' | 'both') => {
    setChoice(c)
    setResolved(true)
  }

  return (
    <SectionLayout
      title="Merge Conflict Arena"
      subtitle="Resolve a real conflict. There is often more than one correct answer."
    >
      <LivePractice
        title="Resolve This Conflict"
        subtitle="You are merging feature into main. Git found this conflict."
        onReset={() => {
          setResolved(false)
          setChoice(null)
        }}
      >
        <CodeBlock title="Conflict markers" language="javascript" code={conflictCode} />

        {!resolved ? (
          <div className="grid sm:grid-cols-3 gap-3">
            <button
              onClick={() => resolve('main')}
              className="p-4 rounded-lg border border-[var(--color-github-border)] hover:border-green-500/50 text-left"
            >
              <strong>Keep main version</strong>
              <p className="text-sm text-[var(--color-github-muted)] mt-1">Discard the feature change</p>
            </button>
            <button
              onClick={() => resolve('feature')}
              className="p-4 rounded-lg border border-[var(--color-github-border)] hover:border-green-500/50 text-left"
            >
              <strong>Keep feature version</strong>
              <p className="text-sm text-[var(--color-github-muted)] mt-1">Accept the new work</p>
            </button>
            <button
              onClick={() => resolve('both')}
              className="p-4 rounded-lg border border-[var(--color-github-border)] hover:border-green-500/50 text-left"
            >
              <strong>Combine both</strong>
              <p className="text-sm text-[var(--color-github-muted)] mt-1">When both changes matter</p>
            </button>
          </div>
        ) : (
          <div className="p-5 rounded-xl bg-green-500/10 border border-green-500/30">
            <p className="font-medium text-green-400">Conflict resolved!</p>
            <p className="mt-2 text-sm text-[var(--color-github-muted)]">
              {choice === 'main' && 'You kept the main version. Valid when the feature change is outdated.'}
              {choice === 'feature' && 'You kept the feature version. Common when the new work is intentional.'}
              {choice === 'both' && 'You combined both. Best when both changes are needed.'}
            </p>
            <CodeBlock
              title="Final code"
              language="javascript"
              code={
                choice === 'main'
                  ? 'const greeting = "Hello from main";'
                  : choice === 'feature'
                  ? 'const greeting = "Hello from feature";'
                  : 'const greeting = "Hello from main + feature";'
              }
            />
            <p className="mt-3 text-sm text-[var(--color-github-muted)]">
              After resolving, you would run: <code className="text-[var(--color-github-accent)]">git add .</code> then <code className="text-[var(--color-github-accent)]">git commit</code>
            </p>
          </div>
        )}
      </LivePractice>
    </SectionLayout>
  )
}
