import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GitPullRequest,
  GitMerge,
  CheckCircle2,
  Circle,
  MessageSquare,
  FileDiff,
  ShieldCheck,
  X,
} from 'lucide-react'
import GitGraph from './GitGraph'

type Step = 'compare' | 'compose' | 'open' | 'review' | 'merge' | 'done'

export default function GitHubPRSimulator() {
  const [step, setStep] = useState<Step>('compare')
  const [title, setTitle] = useState('feat: add authentication flow')
  const [body, setBody] = useState(
    '## Summary\nAdds login and registration.\n\n## Test plan\n- [ ] Login with valid credentials\n- [ ] Reject invalid password'
  )
  const [approved, setApproved] = useState(false)
  const [checksPass] = useState(true)
  const [merged, setMerged] = useState(false)
  const [mergeMethod, setMergeMethod] = useState<'merge' | 'squash' | 'rebase'>('squash')

  const reset = () => {
    setStep('compare')
    setTitle('feat: add authentication flow')
    setBody(
      '## Summary\nAdds login and registration.\n\n## Test plan\n- [ ] Login with valid credentials\n- [ ] Reject invalid password'
    )
    setApproved(false)
    setMerged(false)
    setMergeMethod('squash')
  }

  const canMerge = approved && checksPass && !merged

  return (
    <div className="rounded-xl border border-[var(--color-github-border)] bg-[#0d1117] overflow-hidden shadow-lg">
      {/* GitHub-like top bar */}
      <div className="flex items-center gap-2 px-4 py-2 bg-[#010409] border-b border-[var(--color-github-border)] text-xs text-[var(--color-github-muted)]">
        <span className="font-semibold text-[var(--color-github-text)]">owner / demo-repo</span>
        <span className="text-[var(--color-github-border)]">/</span>
        <span className="flex items-center gap-1 text-[var(--color-github-purple)]">
          <GitPullRequest className="w-3.5 h-3.5" /> Pull requests
        </span>
        <span className="ml-auto font-mono text-[10px] tracking-wide text-[var(--color-github-accent)]">
          LIVE · GITHUB UI (not terminal)
        </span>
        <button
          onClick={reset}
          className="text-[var(--color-github-muted)] hover:text-[var(--color-github-text)] px-2 py-0.5 rounded border border-transparent hover:border-[var(--color-github-border)]"
        >
          Reset
        </button>
      </div>

      <div className="p-4 sm:p-6 space-y-5">
        {/* Step indicator */}
        <div className="flex flex-wrap gap-2 text-xs">
          {(
            [
              ['compare', '1. Compare'],
              ['compose', '2. Open PR'],
              ['open', '3. PR opened'],
              ['review', '4. Review'],
              ['merge', '5. Merge'],
              ['done', '6. Done'],
            ] as [Step, string][]
          ).map(([id, label]) => {
            const order: Step[] = ['compare', 'compose', 'open', 'review', 'merge', 'done']
            const active = step === id
            const done = order.indexOf(step) > order.indexOf(id)
            return (
              <span
                key={id}
                className={`px-2.5 py-1 rounded-full border ${
                  active
                    ? 'border-[var(--color-github-accent)] bg-[var(--color-github-accent)]/15 text-[var(--color-github-accent)]'
                    : done
                    ? 'border-green-500/40 text-green-400'
                    : 'border-[var(--color-github-border)] text-[var(--color-github-muted)]'
                }`}
              >
                {label}
              </span>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          {/* ── COMPARE ── */}
          {step === 'compare' && (
            <motion.div
              key="compare"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-[var(--color-github-text)]">
                Compare changes
              </h3>
              <p className="text-sm text-[var(--color-github-muted)]">
                On real GitHub you click <strong className="text-[var(--color-github-text)]">Compare &amp; pull request</strong> after pushing a branch.
              </p>

              <div className="flex flex-wrap items-center gap-3 p-3 rounded-lg bg-[#161b22] border border-[var(--color-github-border)]">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--color-github-muted)]">base:</span>
                  <span className="px-2 py-1 rounded bg-[#0d1117] border border-[var(--color-github-border)] text-sm font-mono text-[var(--color-github-accent)]">
                    main
                  </span>
                </div>
                <span className="text-[var(--color-github-muted)]">←</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[var(--color-github-muted)]">compare:</span>
                  <span className="px-2 py-1 rounded bg-[#0d1117] border border-[var(--color-github-border)] text-sm font-mono text-[var(--color-github-blue)]">
                    feature/auth
                  </span>
                </div>
              </div>

              <GitGraph
                width={420}
                height={160}
                nodes={[
                  { id: '1', label: 'main', branch: 'main', x: 50, y: 100 },
                  { id: '2', label: '', branch: 'main', x: 140, y: 100 },
                  { id: '3', label: 'feature/auth', branch: 'feature', x: 230, y: 40 },
                  { id: '4', label: 'HEAD', branch: 'feature', x: 320, y: 40 },
                ]}
                edges={[
                  { from: '1', to: '2' },
                  { from: '2', to: '3' },
                  { from: '3', to: '4' },
                ]}
              />

              <div className="rounded-lg border border-[var(--color-github-border)] overflow-hidden">
                <div className="px-3 py-2 bg-[#161b22] text-xs text-[var(--color-github-muted)] flex items-center gap-2">
                  <FileDiff className="w-3.5 h-3.5" />
                  Showing 3 changed files with 48 additions and 2 deletions
                </div>
                <div className="p-3 font-mono text-xs space-y-1 text-[var(--color-github-muted)]">
                  <div><span className="text-green-400">+48</span> <span className="text-red-400">−2</span>  src/Login.jsx</div>
                  <div><span className="text-green-400">+12</span>  src/api/auth.js</div>
                  <div><span className="text-green-400">+6</span>   src/App.jsx</div>
                </div>
              </div>

              <button
                onClick={() => setStep('compose')}
                className="px-4 py-2 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-medium"
              >
                Create pull request
              </button>
            </motion.div>
          )}

          {/* ── COMPOSE ── */}
          {step === 'compose' && (
            <motion.div
              key="compose"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold">Open a pull request</h3>
              <p className="text-sm text-[var(--color-github-muted)]">
                Fill in the title and description like on github.com
              </p>

              <div>
                <label className="block text-xs text-[var(--color-github-muted)] mb-1">Title</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#0d1117] border border-[var(--color-github-border)] text-[var(--color-github-text)] text-sm focus:outline-none focus:border-[var(--color-github-blue)]"
                />
              </div>
              <div>
                <label className="block text-xs text-[var(--color-github-muted)] mb-1">
                  Leave a comment
                </label>
                <textarea
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={6}
                  className="w-full px-3 py-2 rounded-lg bg-[#0d1117] border border-[var(--color-github-border)] text-[var(--color-github-text)] text-sm font-mono focus:outline-none focus:border-[var(--color-github-blue)]"
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setStep('open')}
                  disabled={!title.trim()}
                  className="px-4 py-2 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-medium disabled:opacity-40"
                >
                  Create pull request
                </button>
                <button
                  onClick={() => setStep('compare')}
                  className="px-4 py-2 rounded-lg border border-[var(--color-github-border)] text-sm text-[var(--color-github-muted)]"
                >
                  Back
                </button>
              </div>
            </motion.div>
          )}

          {/* ── OPEN / REVIEW / MERGE ── */}
          {(step === 'open' || step === 'review' || step === 'merge' || step === 'done') && (
            <motion.div
              key="pr"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              {/* PR header */}
              <div className="flex items-start gap-3">
                {merged ? (
                  <span className="mt-1 p-1.5 rounded-full bg-purple-500/20 text-purple-400">
                    <GitMerge className="w-5 h-5" />
                  </span>
                ) : (
                  <span className="mt-1 p-1.5 rounded-full bg-green-500/20 text-green-400">
                    <GitPullRequest className="w-5 h-5" />
                  </span>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-[var(--color-github-text)] break-words">
                    {title}{' '}
                    <span className="text-[var(--color-github-muted)] font-normal">#42</span>
                  </h3>
                  <p className="text-sm text-[var(--color-github-muted)] mt-1">
                    {merged ? (
                      <>
                        <span className="text-purple-400 font-medium">Merged</span> into main from{' '}
                        <code className="text-[var(--color-github-blue)]">feature/auth</code>
                      </>
                    ) : (
                      <>
                        <span className="text-green-400 font-medium">Open</span>{' '}
                        student-dev wants to merge 2 commits into{' '}
                        <code className="text-[var(--color-github-accent)]">main</code> from{' '}
                        <code className="text-[var(--color-github-blue)]">feature/auth</code>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-4 border-b border-[var(--color-github-border)] text-sm">
                <span className="pb-2 border-b-2 border-[var(--color-github-orange)] text-[var(--color-github-text)] flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" /> Conversation
                </span>
                <span className="pb-2 text-[var(--color-github-muted)] flex items-center gap-1.5">
                  <FileDiff className="w-3.5 h-3.5" /> Files changed{' '}
                  <span className="px-1.5 rounded-full bg-[#30363d] text-[10px]">3</span>
                </span>
              </div>

              {/* Description */}
              <div className="rounded-lg border border-[var(--color-github-border)] bg-[#161b22] p-4">
                <p className="text-xs text-[var(--color-github-muted)] mb-2">student-dev commented</p>
                <pre className="text-sm text-[var(--color-github-text)] whitespace-pre-wrap font-sans">
                  {body}
                </pre>
              </div>

              {/* Checks */}
              <div className="rounded-lg border border-[var(--color-github-border)] overflow-hidden">
                <div className="px-4 py-3 flex items-center gap-2 bg-[#161b22]">
                  {checksPass ? (
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  ) : (
                    <X className="w-5 h-5 text-red-400" />
                  )}
                  <span className="text-sm font-medium">
                    {checksPass ? 'All checks have passed' : 'Some checks failed'}
                  </span>
                </div>
                <div className="px-4 py-2 text-xs text-[var(--color-github-muted)] border-t border-[var(--color-github-border)] flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-400" />
                  CI / test — success in 42s
                </div>
              </div>

              {/* Review */}
              {!merged && (
                <div className="rounded-lg border border-[var(--color-github-border)] p-4 space-y-3">
                  <p className="text-sm font-medium flex items-center gap-2">
                    {approved ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        <span className="text-green-400">Approved</span>
                      </>
                    ) : (
                      <>
                        <Circle className="w-4 h-4 text-[var(--color-github-muted)]" />
                        Review required
                      </>
                    )}
                  </p>
                  {!approved && (
                    <button
                      onClick={() => {
                        setApproved(true)
                        setStep('review')
                      }}
                      className="px-3 py-1.5 rounded-lg border border-[var(--color-github-border)] text-sm hover:border-green-500/50 hover:text-green-400"
                    >
                      Approve this pull request
                    </button>
                  )}
                  {approved && step === 'review' && (
                    <button
                      onClick={() => setStep('merge')}
                      className="text-sm text-[var(--color-github-blue)] hover:underline"
                    >
                      Continue to merge →
                    </button>
                  )}
                </div>
              )}

              {/* Merge box */}
              {!merged && (step === 'merge' || step === 'review' || step === 'open') && (
                <div
                  className={`rounded-lg border p-4 space-y-3 ${
                    canMerge
                      ? 'border-green-500/40 bg-green-500/5'
                      : 'border-[var(--color-github-border)] bg-[#161b22]'
                  }`}
                >
                  <p className="text-sm font-medium">
                    {canMerge
                      ? 'This branch has no conflicts with the base branch'
                      : 'Review required before merging'}
                  </p>

                  {canMerge && (
                    <>
                      <div className="flex flex-wrap gap-2 text-xs">
                        {(['merge', 'squash', 'rebase'] as const).map((m) => (
                          <button
                            key={m}
                            onClick={() => setMergeMethod(m)}
                            className={`px-2.5 py-1 rounded border capitalize ${
                              mergeMethod === m
                                ? 'border-[var(--color-github-accent)] text-[var(--color-github-accent)] bg-[var(--color-github-accent)]/10'
                                : 'border-[var(--color-github-border)] text-[var(--color-github-muted)]'
                            }`}
                          >
                            {m === 'merge' ? 'Create a merge commit' : m === 'squash' ? 'Squash and merge' : 'Rebase and merge'}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => {
                          setMerged(true)
                          setStep('done')
                        }}
                        className="px-4 py-2 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white text-sm font-medium flex items-center gap-2"
                      >
                        <GitMerge className="w-4 h-4" />
                        {mergeMethod === 'squash'
                          ? 'Squash and merge'
                          : mergeMethod === 'rebase'
                          ? 'Rebase and merge'
                          : 'Merge pull request'}
                      </button>
                    </>
                  )}
                </div>
              )}

              {/* Done + graph */}
              {merged && (
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/30">
                    <p className="text-purple-300 font-medium flex items-center gap-2">
                      <GitMerge className="w-5 h-5" />
                      Pull request successfully merged and closed
                    </p>
                    <p className="text-sm text-[var(--color-github-muted)] mt-1">
                      Method: <strong className="text-[var(--color-github-text)]">{mergeMethod}</strong>.
                      You can delete the branch on real GitHub after merge.
                    </p>
                  </div>

                  <h4 className="text-sm font-medium text-[var(--color-github-muted)]">
                    Visual: after merge into main
                  </h4>
                  <GitGraph
                    width={440}
                    height={140}
                    nodes={[
                      { id: '1', label: '', branch: 'main', x: 40, y: 70 },
                      { id: '2', label: '', branch: 'main', x: 130, y: 70 },
                      { id: '3', label: '', branch: 'main', x: 220, y: 70 },
                      { id: '4', label: 'main (merged)', branch: 'main', x: 320, y: 70 },
                    ]}
                    edges={[
                      { from: '1', to: '2' },
                      { from: '2', to: '3' },
                      { from: '3', to: '4' },
                    ]}
                  />
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
