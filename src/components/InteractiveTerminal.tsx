import { useState, useRef, useEffect, useCallback } from 'react'

export type TermLine = {
  type: 'command' | 'output' | 'error' | 'success' | 'prompt'
  text: string
}

interface InteractiveTerminalProps {
  title?: string
  /** Initial lines shown when the terminal opens */
  initialLines?: TermLine[]
  /** Map of command (or prefix) → response lines */
  commandMap?: Record<string, TermLine[]>
  /** Called when a recognised command is entered */
  onCommand?: (cmd: string) => void
  /** Placeholder hint shown in the input */
  placeholder?: string
  /** Prompt string, e.g. "MINGW64:/c/Users/you$" or simply "$" */
  prompt?: string
  /** Height of the scrollable area */
  height?: string
}

const DEFAULT_COMMANDS: Record<string, TermLine[]> = {
  'git --version': [{ type: 'output', text: 'git version 2.45.2.windows.1' }],
  'git status': [
    { type: 'output', text: 'On branch main' },
    { type: 'output', text: 'Your branch is up to date with \'origin/main\'.' },
    { type: 'output', text: '' },
    { type: 'output', text: 'nothing to commit, working tree clean' },
  ],
  help: [
    { type: 'output', text: 'Available practice commands:' },
    { type: 'output', text: '  git --version          Show Git version' },
    { type: 'output', text: '  git status             Show working tree status' },
    { type: 'output', text: '  git config --list      List configuration' },
    { type: 'output', text: '  clear                  Clear the terminal' },
    { type: 'output', text: '  help                   Show this help' },
  ],
  clear: [],
}

export default function InteractiveTerminal({
  title = 'Git Bash',
  initialLines = [],
  commandMap = {},
  onCommand,
  placeholder = 'Type a git command and press Enter…',
  prompt = 'MINGW64:/c/Users/student$',
  height = '320px',
}: InteractiveTerminalProps) {
  const [lines, setLines] = useState<TermLine[]>([
    { type: 'output', text: 'Welcome to the live Git practice terminal.' },
    { type: 'output', text: 'Type a command and press Enter. Type "help" for available commands.' },
    { type: 'output', text: '' },
    ...initialLines,
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [histIdx, setHistIdx] = useState(-1)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const focusInput = () => inputRef.current?.focus()

  const runCommand = useCallback(
    (raw: string) => {
      const cmd = raw.trim()
      if (!cmd) return

      // Echo the command
      const newLines: TermLine[] = [
        ...lines,
        { type: 'command', text: cmd },
      ]

      // clear
      if (cmd.toLowerCase() === 'clear' || cmd === 'cls') {
        setLines([])
        setInput('')
        setHistory((h) => [...h, cmd])
        setHistIdx(-1)
        return
      }

      // Look up in page-specific map first, then defaults
      const map = { ...DEFAULT_COMMANDS, ...commandMap }
      let response: TermLine[] | undefined

      // Exact match
      if (map[cmd]) {
        response = map[cmd]
      } else {
        // Prefix / startsWith match (e.g. git config --global user.name "anything")
        const key = Object.keys(map).find(
          (k) => cmd.startsWith(k) || k.endsWith('*') && cmd.startsWith(k.slice(0, -1))
        )
        if (key) response = map[key]
      }

      // git config --global user.name / user.email special handling
      if (!response && cmd.startsWith('git config --global user.name')) {
        const name = cmd.match(/user\.name\s+["']?([^"']+)["']?/)?.[1] ?? 'Your Name'
        response = [{ type: 'success', text: `(set user.name = ${name})` }]
      }
      if (!response && cmd.startsWith('git config --global user.email')) {
        const email = cmd.match(/user\.email\s+["']?([^"']+)["']?/)?.[1] ?? 'you@example.com'
        response = [{ type: 'success', text: `(set user.email = ${email})` }]
      }
      if (!response && cmd.startsWith('git config --global')) {
        response = [{ type: 'success', text: '(configuration updated)' }]
      }

      // git add
      if (!response && (cmd.startsWith('git add ') || cmd === 'git add .')) {
        response = [{ type: 'success', text: '' }] // silent success like real git
      }

      // git commit
      if (!response && cmd.startsWith('git commit')) {
        const msg = cmd.match(/-m\s+["']([^"']+)["']/)?.[1] ?? 'commit message'
        response = [
          { type: 'output', text: `[main ${(Math.random() * 0xfffff).toString(16).slice(0, 7)}] ${msg}` },
          { type: 'output', text: ' 1 file changed, 12 insertions(+)' },
        ]
      }

      // git branch / checkout
      if (!response && cmd.startsWith('git checkout -b ')) {
        const branch = cmd.replace('git checkout -b ', '').trim()
        response = [{ type: 'output', text: `Switched to a new branch '${branch}'` }]
      }
      if (!response && cmd.startsWith('git checkout ')) {
        const branch = cmd.replace('git checkout ', '').trim()
        response = [{ type: 'output', text: `Switched to branch '${branch}'` }]
      }
      if (!response && cmd === 'git branch') {
        response = [
          { type: 'output', text: '* main' },
          { type: 'output', text: '  feature' },
        ]
      }

      // git log --oneline
      if (!response && (cmd === 'git log' || cmd.startsWith('git log'))) {
        response = [
          { type: 'output', text: 'a1b2c3d (HEAD -> main) feat: add login component' },
          { type: 'output', text: 'e4f5g6h docs: update README' },
          { type: 'output', text: 'i7j8k9l Initial commit' },
        ]
      }

      // Unknown
      if (!response) {
        response = [
          { type: 'error', text: `bash: ${cmd.split(' ')[0]}: command not found` },
          { type: 'output', text: 'Type "help" to see available practice commands.' },
        ]
      }

      setLines([...newLines, ...response])
      setHistory((h) => [...h, cmd])
      setHistIdx(-1)
      setInput('')
      onCommand?.(cmd)
    },
    [lines, commandMap, onCommand]
  )

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      runCommand(input)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (history.length === 0) return
      const next = histIdx === -1 ? history.length - 1 : Math.max(0, histIdx - 1)
      setHistIdx(next)
      setInput(history[next])
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (histIdx === -1) return
      const next = histIdx + 1
      if (next >= history.length) {
        setHistIdx(-1)
        setInput('')
      } else {
        setHistIdx(next)
        setInput(history[next])
      }
    }
  }

  const lineColor = (type: TermLine['type']) => {
    switch (type) {
      case 'command':
        return 'text-[#3fb950]'
      case 'error':
        return 'text-[#f85149]'
      case 'success':
        return 'text-[#3fb950]'
      case 'prompt':
        return 'text-[#58a6ff]'
      default:
        return 'text-[#e6edf3]'
    }
  }

  return (
    <div
      className="terminal my-6 overflow-hidden shadow-lg select-none"
      onClick={focusInput}
    >
      {/* Title bar – looks like Git Bash on Windows */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-b border-[#30363d]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs text-[#8b949e] ml-2 font-mono">{title}</span>
        <span className="ml-auto text-[10px] text-[#484f58] font-mono">LIVE PRACTICE</span>
      </div>

      {/* Scrollable output */}
      <div
        className="p-3 overflow-y-auto font-mono text-[13px] leading-relaxed bg-[#0c0c0c]"
        style={{ height }}
      >
        {lines.map((line, i) => (
          <div key={i} className={`whitespace-pre-wrap ${lineColor(line.type)}`}>
            {line.type === 'command' ? (
              <>
                <span className="text-[#c9d1d9] select-none">{prompt} </span>
                <span className="text-[#3fb950]">{line.text}</span>
              </>
            ) : (
              line.text || '\u00A0'
            )}
          </div>
        ))}

        {/* Active input line */}
        <div className="flex items-center mt-0.5">
          <span className="text-[#c9d1d9] select-none shrink-0">{prompt}&nbsp;</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            placeholder={placeholder}
            className="flex-1 bg-transparent border-none outline-none text-[#3fb950] font-mono text-[13px] caret-[#3fb950] placeholder:text-[#484f58]"
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  )
}
