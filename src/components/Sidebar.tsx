import { NavLink } from 'react-router-dom'
import {
  Home, GitBranch, FolderTree, Settings, Activity,
  GitCommit, MessageSquare, Workflow, GitPullRequestArrow,
  GitMerge, AlertTriangle, Users, FileText, EyeOff, CircleDot,
  Kanban, Zap, AlertCircle, CheckCircle, Search, Menu, X,
  BookOpen, ClipboardCheck, Monitor, Pencil, History,
  Command, RefreshCw, Shield, Wrench, Tag, MessagesSquare,
  FolderPlus, FilePen, RotateCcw, GitCommitHorizontal, GitCompare,
  BookMarked, Undo2
} from 'lucide-react'
import { useState, type ComponentType, type SVGProps } from 'react'
import sectionsData from '../data/sections.json'

/** Local GitHub icon (brand icons were removed in lucide-react v1) */
function Github({ size = 24, className, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const iconMap: Record<string, ComponentType<{ size?: number; className?: string }>> = {
  Home, GitBranch, FolderTree, Settings, Activity,
  GitCommit, MessageSquare, Workflow, GitPullRequestArrow,
  GitMerge, AlertTriangle, Users, FileText, EyeOff, CircleDot,
  Kanban, Zap, AlertCircle, CheckCircle, BookOpen, ClipboardCheck,
  Github, Monitor, Pencil, History, Command, RefreshCw, Shield,
  Search, Wrench, Tag, MessagesSquare, FolderPlus, FilePen,
  RotateCcw, GitCommitHorizontal, GitCompare, BookMarked, Undo2,
  FileDiff: GitCompare,
}

interface Section {
  id: string
  title: string
  icon: string
  path: string
  group?: string
}

interface SidebarProps {
  searchQuery: string
  setSearchQuery: (q: string) => void
}

export default function Sidebar({ searchQuery, setSearchQuery }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const sections = sectionsData.sections as Section[]

  const filtered = sections.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.group || '').toLowerCase().includes(searchQuery.toLowerCase())
  )

  const groups: { name: string; items: Section[] }[] = []
  for (const s of filtered) {
    const g = s.group || 'Other'
    const last = groups[groups.length - 1]
    if (last && last.name === g) last.items.push(s)
    else groups.push({ name: g, items: [s] })
  }

  const NavContent = () => (
    <>
      <div className="p-4 border-b border-[var(--color-github-border)]">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-github-accent)] flex items-center justify-center">
            <GitBranch size={18} className="text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold leading-tight">GitHub Mentor</h1>
            <p className="text-[10px] text-[var(--color-github-muted)]">Official Training Manual</p>
          </div>
        </div>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-github-muted)]" />
          <input
            type="text"
            placeholder="Search sections..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-[#0d1117] border border-[var(--color-github-border)] rounded-md focus:outline-none focus:border-[var(--color-github-blue)] text-[var(--color-github-text)] placeholder:text-[var(--color-github-muted)]"
          />
        </div>
      </div>
      <nav className="flex-1 overflow-y-auto p-2 space-y-3">
        {groups.map((group) => (
          <div key={group.name}>
            <p className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-github-muted)]">
              {group.name}
            </p>
            <div className="space-y-0.5">
              {group.items.map((section) => {
                const Icon = iconMap[section.icon] || GitBranch
                return (
                  <NavLink
                    key={section.id}
                    to={section.path}
                    end={section.path === '/'}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors ${
                        isActive
                          ? 'bg-[var(--color-github-accent)]/15 text-[var(--color-github-accent)] font-medium'
                          : 'text-[var(--color-github-muted)] hover:bg-[#161b22] hover:text-[var(--color-github-text)]'
                      }`
                    }
                  >
                    <Icon size={16} className="shrink-0 opacity-80" />
                    <span className="truncate">{section.title}</span>
                  </NavLink>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
    </>
  )

  return (
    <>
      <button
        type="button"
        className="lg:hidden fixed top-3 left-3 z-50 p-2 rounded-md bg-[#161b22] border border-[var(--color-github-border)]"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={18} /> : <Menu size={18} />}
      </button>
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50" onClick={() => setMobileOpen(false)} />
      )}
      <aside
        className={`fixed lg:sticky top-0 left-0 z-40 h-screen w-72 flex flex-col bg-[#0d1117] border-r border-[var(--color-github-border)] transition-transform lg:translate-x-0 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <NavContent />
      </aside>
    </>
  )
}
