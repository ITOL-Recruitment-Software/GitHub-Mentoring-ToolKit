import { FormEvent, useState } from 'react'
import { Bot, BookOpen, ChevronDown, MessageCircle, Send, Sparkles, X } from 'lucide-react'

type ChatMessage = {
  role: 'assistant' | 'user'
  text: string
}

const quickQuestions = [
  'What is Git vs GitHub?',
  'How do I make a commit?',
  'What is a pull request?',
]

function getReply(question: string) {
  const q = question.toLowerCase()
  if (q.includes('branch')) {
    return 'A branch is a separate line of work. It lets you make changes without disturbing the main version. Try: git switch -c feature/my-change'
  }
  if (q.includes('commit') || q.includes('save')) {
    return 'A commit is a named snapshot of your changes. A simple flow is: git status → git add README.md → git commit -m "Add project overview". Keep each commit focused and write a message that explains the change.'
  }
  if (q.includes('pull request') || q.includes('pr') || q.includes('merge')) {
    return 'A pull request (PR) proposes changes for others to review. Push your branch, open a PR on GitHub, explain what changed, respond to feedback, then merge when it is approved and checks pass.'
  }
  if (q.includes('git vs github') || (q.includes('git') && q.includes('github'))) {
    return 'Git is the version-control tool that tracks changes on your computer. GitHub is an online platform for hosting Git repositories and collaborating through pull requests, issues, reviews, and automation.'
  }
  if (q.includes('repository') || q.includes('repo')) {
    return 'A repository is a project space that contains files and their history. Create one for a project, add a README to explain it, and make small commits as you work.'
  }
  if (q.includes('install') || q.includes('setup') || q.includes('config')) {
    return 'Start with the Setup lesson in the sidebar. After installing Git, check it with git --version, then configure your name and email with git config --global user.name "Your Name" and git config --global user.email "you@example.com".'
  }
  if (q.includes('help') || q.includes('start') || q.includes('begin')) {
    return 'A good learning path is: Intro → What is GitHub? → GitHub Flow → Setup → Getting Ready for Class. Use the live example on the home page to practise a tiny change, commit, and pull request.'
  }
  return 'I can help with the toolkit’s Git and GitHub basics: repositories, commits, branches, pull requests, Git setup, and workflow. Ask me about one of those topics, or choose a quick question below. I work locally in this demo and do not send messages to an external AI service.'
}

export default function AssistantChat() {
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState('')
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', text: 'Hi! I’m your Toolkit helper. Ask a Git or GitHub question and I’ll point you in the right direction.' },
  ])

  function sendMessage(text = draft) {
    const question = text.trim()
    if (!question) return
    setMessages((current) => [
      ...current,
      { role: 'user', text: question },
      { role: 'assistant', text: getReply(question) },
    ])
    setDraft('')
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    sendMessage()
  }

  return (
    <>
      <aside className="hidden lg:flex w-[320px] xl:w-[350px] shrink-0 flex-col border-l border-[var(--color-github-border)] bg-[#0d1117]">
        <ChatContents
          messages={messages}
          draft={draft}
          setDraft={setDraft}
          sendMessage={sendMessage}
          handleSubmit={handleSubmit}
        />
      </aside>

      <div className="lg:hidden">
        {open && (
          <div className="fixed bottom-20 right-3 z-[70] flex h-[min(68vh,560px)] w-[min(380px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-[var(--color-github-border)] bg-[#0d1117] shadow-2xl shadow-black/50">
            <div className="flex items-center justify-between border-b border-[var(--color-github-border)] px-4 py-3">
              <div className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300"><Bot size={17} /></span><div><p className="text-sm font-semibold text-[var(--color-github-text)]">Toolkit helper</p><p className="text-[11px] text-[var(--color-github-muted)]">Git & GitHub basics</p></div></div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="rounded-md p-2 text-[var(--color-github-muted)] hover:bg-white/5 hover:text-white"><X size={17} /></button>
            </div>
            <ChatContents messages={messages} draft={draft} setDraft={setDraft} sendMessage={sendMessage} handleSubmit={handleSubmit} compact />
          </div>
        )}
        <button type="button" onClick={() => setOpen((value) => !value)} aria-label={open ? 'Close toolkit chat' : 'Open toolkit chat'} className="fixed bottom-20 right-4 z-[60] flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-500 px-4 py-3 text-sm font-semibold text-[#07120b] shadow-xl shadow-black/30 transition hover:bg-emerald-400">
          {open ? <ChevronDown size={18} /> : <MessageCircle size={18} />}
          {open ? 'Minimise chat' : 'Ask the toolkit'}
        </button>
      </div>
    </>
  )
}

function ChatContents({
  messages,
  draft,
  setDraft,
  sendMessage,
  handleSubmit,
  compact = false,
}: {
  messages: ChatMessage[]
  draft: string
  setDraft: (value: string) => void
  sendMessage: (text?: string) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  compact?: boolean
}) {
  return (
    <>
      {!compact && (
        <div className="border-b border-[var(--color-github-border)] p-5">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"><Bot size={20} /></span>
            <div><h2 className="text-sm font-semibold text-[var(--color-github-text)]">Toolkit helper</h2><p className="mt-0.5 text-xs text-[var(--color-github-muted)]">Your Git & GitHub study buddy</p></div>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[var(--color-github-muted)]">Ask a question while you learn. Answers are built into this demo, so no chat data is sent to an external AI service.</p>
        </div>
      )}
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="flex-1 space-y-3 overflow-y-auto p-4" aria-live="polite">
          {messages.map((message, index) => (
            <div key={index} className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
              <div className={`max-w-[94%] rounded-xl px-3 py-2.5 text-xs leading-relaxed ${message.role === 'user' ? 'bg-emerald-500/15 text-emerald-100' : 'border border-[var(--color-github-border)] bg-[#161b22] text-[var(--color-github-text)]'}`}>
                {message.role === 'assistant' && <p className="mb-1 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300"><Sparkles size={11} /> Toolkit helper</p>}
                {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-[var(--color-github-border)] p-3">
          <p className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-[var(--color-github-muted)]"><BookOpen size={12} /> Try asking</p>
          <div className="mb-3 flex flex-wrap gap-1.5">
            {quickQuestions.map((question) => <button key={question} type="button" onClick={() => sendMessage(question)} className="rounded-full border border-[var(--color-github-border)] px-2.5 py-1.5 text-[10px] text-[var(--color-github-muted)] transition hover:border-emerald-400/40 hover:text-emerald-300">{question}</button>)}
          </div>
          <form onSubmit={handleSubmit} className="flex items-end gap-2">
            <label className="sr-only" htmlFor={compact ? 'mobile-chat-input' : 'desktop-chat-input'}>Ask a GitHub question</label>
            <textarea id={compact ? 'mobile-chat-input' : 'desktop-chat-input'} value={draft} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendMessage() } }} rows={2} placeholder="Ask about Git, commits..." className="min-h-[44px] max-h-28 min-w-0 flex-1 resize-y rounded-lg border border-[var(--color-github-border)] bg-[#010409] px-3 py-2.5 text-xs text-[var(--color-github-text)] outline-none placeholder:text-[var(--color-github-muted)] focus:border-emerald-400/60" />
            <button type="submit" aria-label="Send message" disabled={!draft.trim()} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-[#07120b] transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-40"><Send size={15} /></button>
          </form>
          <p className="mt-2 text-[10px] text-[var(--color-github-muted)]">Enter to send · Shift+Enter for a new line</p>
        </div>
      </div>
    </>
  )
}
