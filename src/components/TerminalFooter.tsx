import { useState } from 'react'
import { ChevronDown, ChevronUp, Terminal } from 'lucide-react'
import InteractiveTerminal from './InteractiveTerminal'

/**
 * Global practice terminal fixed at the bottom of the app.
 * Mounted once in App (outside <Routes>) so history and output
 * persist when the user navigates between pages.
 */
export default function TerminalFooter() {
  const [open, setOpen] = useState(true)

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 z-30 lg:left-72 border-t border-[var(--color-github-border)] bg-[#0c0c0c] shadow-[0_-4px_24px_rgba(0,0,0,0.45)]"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center gap-2 px-3 py-1.5 bg-[#161b22] hover:bg-[#1c2128] border-b border-[var(--color-github-border)] text-left transition-colors"
        aria-expanded={open}
        aria-label={open ? 'Collapse terminal' : 'Expand terminal'}
      >
        <Terminal className="w-3.5 h-3.5 text-[var(--color-github-accent)] shrink-0" />
        <span className="text-xs font-mono text-[var(--color-github-muted)]">
          Git Bash · practice terminal
        </span>
        <span className="text-[10px] text-[#484f58] font-mono hidden sm:inline">
          stays open when you change pages · type help
        </span>
        <span className="ml-auto flex items-center gap-1 text-[var(--color-github-muted)]">
          {open ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
        </span>
      </button>

      {/* Terminal body: always mounted so state never resets on route change */}
      <div
        className={`overflow-hidden transition-[max-height] duration-200 ease-out ${
          open ? 'max-h-[280px]' : 'max-h-0'
        }`}
        aria-hidden={!open}
      >
        <div className="[&_.terminal]:my-0 [&_.terminal]:rounded-none [&_.terminal]:border-0 [&_.terminal]:shadow-none">
          <InteractiveTerminal
            title="MINGW64 global practice"
            prompt="MINGW64:/c/Users/student/my-project$"
            placeholder="Type a git command… (persists across pages)"
            height="220px"
          />
        </div>
      </div>
    </footer>
  )
}
