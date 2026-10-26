import { useState, useRef, useEffect, useCallback } from 'react'

export type TermLine = {
  type: 'command' | 'output' | 'error' | 'success' | 'prompt'
  text: string
}

interface InteractiveTerminalProps {
  title?: string
  initialLines?: TermLine[]
  commandMap?: Record<string, TermLine[]>
  onCommand?: (cmd: string) => void
  placeholder?: string
  prompt?: string
  height?: string
}

/* ─────────────────────────────────────────────────────────────
   Full Git Bash command simulator
   ───────────────────────────────────────────────────────────── */

function sha7() {
  return Math.floor(Math.random() * 0xfffffff)
    .toString(16)
    .padStart(7, '0')
    .slice(0, 7)
}

function out(text: string): TermLine {
  return { type: 'output', text }
}
function err(text: string): TermLine {
  return { type: 'error', text }
}
function ok(text: string): TermLine {
  return { type: 'success', text }
}

/** Resolve a typed command to response lines */
function resolveCommand(cmd: string): TermLine[] {
  const c = cmd.trim()
  const lower = c.toLowerCase()

  // ── Shell builtins ──────────────────────────────────────────
  if (lower === 'clear' || lower === 'cls') return [{ type: 'output', text: '__CLEAR__' }]
  if (lower === 'help' || lower === 'git help' || lower === 'git --help') {
    return [
      out('Git Bash Practice Terminal: common commands:'),
      out(''),
      out('  Setup & Config'),
      out('    git --version'),
      out('    git config --global user.name "Name"'),
      out('    git config --global user.email "email"'),
      out('    git config --list / --global --list'),
      out(''),
      out('  Repo basics'),
      out('    git init'),
      out('    git clone <url>'),
      out('    git status / git status -sb'),
      out('    git remote -v'),
      out(''),
      out('  Staging & commits'),
      out('    git add <file> | git add .'),
      out('    git commit -m "message"'),
      out('    git commit --amend'),
      out('    git rm <file> | git mv <old> <new>'),
      out(''),
      out('  History & diff'),
      out('    git log / git log --oneline / git log --graph'),
      out('    git diff / git diff --staged'),
      out('    git show'),
      out(''),
      out('  Branches'),
      out('    git branch / git branch -a / git branch -d <name>'),
      out('    git checkout <branch> | git checkout -b <name>'),
      out('    git switch <branch> | git switch -c <name>'),
      out(''),
      out('  Remote sync'),
      out('    git fetch / git pull / git push / git push -u origin <branch>'),
      out(''),
      out('  Merge & rebase'),
      out('    git merge <branch>'),
      out('    git rebase <branch> / git rebase --continue / --abort'),
      out(''),
      out('  Undo'),
      out('    git restore <file> / git restore --staged <file>'),
      out('    git reset / git reset --soft|--mixed|--hard HEAD~1'),
      out('    git revert <sha>'),
      out(''),
      out('  Stash'),
      out('    git stash / git stash list / git stash pop / git stash apply'),
      out(''),
      out('  Tags & misc'),
      out('    git tag / git tag v1.0.0 / git push --tags'),
      out('    git bisect start|good|bad|reset'),
      out('    git cherry-pick <sha>'),
      out('    git clean -fd / git reflog'),
      out(''),
      out('  Shell: clear, help, pwd, ls, cd, echo, whoami'),
    ]
  }

  if (lower === 'pwd') return [out('/c/Users/student/my-project')]
  if (lower === 'whoami') return [out('student')]
  if (lower === 'ls' || lower === 'ls -la' || lower === 'dir') {
    return [
      out('README.md'),
      out('package.json'),
      out('src/'),
      out('.git/'),
      out('.gitignore'),
    ]
  }
  if (lower.startsWith('echo ')) return [out(c.slice(5))]
  if (lower === 'cd' || lower.startsWith('cd ')) return [] // silent like real bash

  // ── git --version ───────────────────────────────────────────
  if (lower === 'git --version' || lower === 'git version') {
    return [out('git version 2.45.2.windows.1')]
  }

  // ── git config ──────────────────────────────────────────────
  if (c.startsWith('git config --global user.name')) {
    const name = c.match(/user\.name\s+["']?([^"']+)["']?/)?.[1] ?? 'Your Name'
    return [ok(`(set user.name = ${name})`)]
  }
  if (c.startsWith('git config --global user.email')) {
    const email = c.match(/user\.email\s+["']?([^"']+)["']?/)?.[1] ?? 'you@example.com'
    return [ok(`(set user.email = ${email})`)]
  }
  if (
    lower === 'git config --list' ||
    lower === 'git config --global --list' ||
    lower === 'git config -l'
  ) {
    return [
      out('user.name=Student Developer'),
      out('user.email=student@example.com'),
      out('core.editor=code --wait'),
      out('init.defaultBranch=main'),
      out('color.ui=auto'),
      out('pull.rebase=false'),
    ]
  }
  if (c.startsWith('git config --global init.defaultBranch')) {
    return [ok('(set init.defaultBranch)')]
  }
  if (c.startsWith('git config --global color.ui')) {
    return [ok('(set color.ui)')]
  }
  if (c.startsWith('git config --global pull.rebase')) {
    return [ok('(set pull.rebase)')]
  }
  if (c.startsWith('git config --global')) {
    return [ok('(configuration updated)')]
  }
  if (c.startsWith('git config ')) {
    return [ok('(configuration updated)')]
  }

  // ── git init ────────────────────────────────────────────────
  if (lower === 'git init') {
    return [out('Initialized empty Git repository in /c/Users/student/my-project/.git/')]
  }

  // ── git clone ───────────────────────────────────────────────
  if (c.startsWith('git clone ')) {
    const url = c.replace('git clone ', '').trim().split(' ')[0]
    const folder = url.split('/').pop()?.replace(/\.git$/, '') ?? 'repo'
    return [
      out(`Cloning into '${folder}'...`),
      out('remote: Enumerating objects: 42, done.'),
      out('remote: Counting objects: 100% (42/42), done.'),
      out('remote: Compressing objects: 100% (28/28), done.'),
      out('Receiving objects: 100% (42/42), 12.40 KiB | 1.24 MiB/s, done.'),
      out('Resolving deltas: 100% (12/12), done.'),
    ]
  }

  // ── git status ──────────────────────────────────────────────
  if (lower === 'git status -sb' || lower === 'git status --short') {
    return [out('## main...origin/main'), out(' M src/App.jsx'), out('?? notes.txt')]
  }
  if (lower === 'git status' || lower.startsWith('git status ')) {
    return [
      out('On branch main'),
      out("Your branch is up to date with 'origin/main'."),
      out(''),
      out('Changes not staged for commit:'),
      out('  (use "git add <file>..." to update what will be committed)'),
      out('  (use "git restore <file>..." to discard changes in working directory)'),
      out('\tmodified:   src/App.jsx'),
      out('\tmodified:   src/Login.jsx'),
      out(''),
      out('Untracked files:'),
      out('  (use "git add <file>..." to include in what will be committed)'),
      out('\tnotes.txt'),
      out(''),
      out('no changes added to commit (use "git add" and/or "git commit -a")'),
    ]
  }

  // ── git add ─────────────────────────────────────────────────
  if (lower === 'git add .' || lower === 'git add -A' || lower === 'git add --all') {
    return [] // silent success
  }
  if (c.startsWith('git add ')) {
    return [] // silent success like real git
  }

  // ── git commit ──────────────────────────────────────────────
  if (lower === 'git commit --amend' || lower.startsWith('git commit --amend')) {
    return [
      out(`[main ${sha7()}] feat: previous message (amended)`),
      out(' Date: Wed Oct 14 18:00:00 2026 +0200'),
      out(' 1 file changed, 3 insertions(+), 1 deletion(-)'),
    ]
  }
  if (c.startsWith('git commit')) {
    const msg =
      c.match(/-m\s+["']([^"']+)["']/)?.[1] ??
      c.match(/-m\s+(\S+)/)?.[1] ??
      'commit message'
    return [
      out(`[main ${sha7()}] ${msg}`),
      out(' 1 file changed, 12 insertions(+), 2 deletions(-)'),
    ]
  }

  // ── git rm / git mv ─────────────────────────────────────────
  if (c.startsWith('git rm ')) {
    const file = c.replace('git rm ', '').trim()
    return [out(`rm '${file}'`)]
  }
  if (c.startsWith('git mv ')) {
    const parts = c.replace('git mv ', '').trim().split(/\s+/)
    return [out(`Renamed ${parts[0]} -> ${parts[1] ?? parts[0]}`)]
  }

  // ── git log ─────────────────────────────────────────────────
  if (
    lower === 'git log --oneline' ||
    lower === 'git log --oneline -5' ||
    lower.startsWith('git log --oneline')
  ) {
    return [
      out(`${sha7()} (HEAD -> main, origin/main) feat: add login component`),
      out(`${sha7()} docs: update README`),
      out(`${sha7()} fix: navbar responsive layout`),
      out(`${sha7()} chore: setup project`),
      out(`${sha7()} Initial commit`),
    ]
  }
  if (lower === 'git log --graph' || lower.startsWith('git log --graph')) {
    return [
      out(`* ${sha7()} (HEAD -> main) feat: add login component`),
      out(`* ${sha7()} docs: update README`),
      out(`|\\  `),
      out(`| * ${sha7()} (feature/auth) feat: auth flow`),
      out(`|/  `),
      out(`* ${sha7()} Initial commit`),
    ]
  }
  if (lower === 'git log' || lower.startsWith('git log ')) {
    return [
      out(`commit ${sha7()}${'0'.repeat(33)} (HEAD -> main)`),
      out('Author: Student Developer <student@example.com>'),
      out('Date:   Wed Oct 14 17:30:00 2026 +0200'),
      out(''),
      out('    feat: add login component'),
      out(''),
      out(`commit ${sha7()}${'0'.repeat(33)}`),
      out('Author: Student Developer <student@example.com>'),
      out('Date:   Tue Oct 13 10:00:00 2026 +0200'),
      out(''),
      out('    docs: update README'),
    ]
  }

  // ── git diff ────────────────────────────────────────────────
  if (lower === 'git diff --staged' || lower === 'git diff --cached') {
    return [
      out('diff --git a/src/Login.jsx b/src/Login.jsx'),
      out('index a1b2c3d..e4f5g6h 100644'),
      out('--- a/src/Login.jsx'),
      out('+++ b/src/Login.jsx'),
      out('@@ -10,3 +10,6 @@'),
      out('+  const [email, setEmail] = useState("")'),
      out('+  const [password, setPassword] = useState("")'),
    ]
  }
  if (lower === 'git diff' || lower.startsWith('git diff ')) {
    return [
      out('diff --git a/src/App.jsx b/src/App.jsx'),
      out('index 111aaaa..222bbbb 100644'),
      out('--- a/src/App.jsx'),
      out('+++ b/src/App.jsx'),
      out('@@ -1,5 +1,6 @@'),
      out(' import React from "react"'),
      out('+import Login from "./Login"'),
      out(' function App() {'),
    ]
  }

  // ── git show ────────────────────────────────────────────────
  if (lower === 'git show' || lower.startsWith('git show ')) {
    return [
      out(`commit ${sha7()}${'0'.repeat(33)} (HEAD -> main)`),
      out('Author: Student Developer <student@example.com>'),
      out('Date:   Wed Oct 14 17:30:00 2026 +0200'),
      out(''),
      out('    feat: add login component'),
      out(''),
      out(' src/Login.jsx | 42 ++++++++++++++++++++++++++++++++++++++++++'),
      out(' 1 file changed, 42 insertions(+)'),
    ]
  }

  // ── git branch ──────────────────────────────────────────────
  if (lower === 'git branch -a' || lower === 'git branch --all') {
    return [
      out('* main'),
      out('  feature/auth'),
      out('  feature/dashboard'),
      out('  remotes/origin/main'),
      out('  remotes/origin/feature/auth'),
    ]
  }
  if (lower === 'git branch -v' || lower === 'git branch -vv') {
    return [
      out(`* main           ${sha7()} feat: add login component`),
      out(`  feature/auth   ${sha7()} feat: auth flow`),
    ]
  }
  if (c.startsWith('git branch -d ') || c.startsWith('git branch -D ')) {
    const name = c.replace(/git branch -[dD] /, '').trim()
    return [out(`Deleted branch ${name} (was ${sha7()}).`)]
  }
  if (lower === 'git branch' || lower.startsWith('git branch ')) {
    // create branch without checkout: git branch feature/x
    if (c.match(/^git branch\s+[\w./-]+$/) && !c.includes('-')) {
      return [] // silent when creating
    }
    return [out('* main'), out('  feature/auth'), out('  feature/dashboard')]
  }

  // ── git checkout / switch ───────────────────────────────────
  if (c.startsWith('git checkout -b ') || c.startsWith('git switch -c ')) {
    const branch = c
      .replace('git checkout -b ', '')
      .replace('git switch -c ', '')
      .trim()
      .split(' ')[0]
    return [out(`Switched to a new branch '${branch}'`)]
  }
  if (c.startsWith('git checkout ') || c.startsWith('git switch ')) {
    const branch = c
      .replace('git checkout ', '')
      .replace('git switch ', '')
      .trim()
      .split(' ')[0]
    if (branch === '--' || branch.startsWith('-')) {
      return [out('Updated 0 paths from the index')]
    }
    return [out(`Switched to branch '${branch}'`)]
  }

  // ── git remote ──────────────────────────────────────────────
  if (lower === 'git remote -v' || lower === 'git remote --verbose') {
    return [
      out('origin  https://github.com/owner/repo.git (fetch)'),
      out('origin  https://github.com/owner/repo.git (push)'),
    ]
  }
  if (lower === 'git remote') {
    return [out('origin')]
  }
  if (c.startsWith('git remote add ')) {
    return [] // silent
  }
  if (c.startsWith('git remote remove ') || c.startsWith('git remote rm ')) {
    return [] // silent
  }

  // ── git fetch / pull / push ─────────────────────────────────
  if (lower === 'git fetch' || lower.startsWith('git fetch ')) {
    return [
      out('From https://github.com/owner/repo'),
      out(` * [new branch]      feature/api  -> origin/feature/api`),
      out('   a1b2c3d..e4f5g6h  main        -> origin/main'),
    ]
  }
  if (lower === 'git pull' || lower.startsWith('git pull ')) {
    return [
      out('Updating a1b2c3d..e4f5g6h'),
      out('Fast-forward'),
      out(' README.md | 4 +++-'),
      out(' 1 file changed, 3 insertions(+), 1 deletion(-)'),
    ]
  }
  if (c.startsWith('git push -u origin ') || c.startsWith('git push --set-upstream origin ')) {
    const branch = c.split('origin ')[1]?.trim().split(' ')[0] ?? 'main'
    return [
      out('Enumerating objects: 5, done.'),
      out('Counting objects: 100% (5/5), done.'),
      out('Delta compression using up to 8 threads'),
      out('Compressing objects: 100% (3/3), done.'),
      out('Writing objects: 100% (3/3), 412 bytes | 412.00 KiB/s, done.'),
      out('Total 3 (delta 0), reused 0 (delta 0), pack-reused 0'),
      out('To https://github.com/owner/repo.git'),
      out(` * [new branch]      ${branch} -> ${branch}`),
      out(`Branch '${branch}' set up to track remote branch '${branch}' from 'origin'.`),
    ]
  }
  if (lower === 'git push' || lower.startsWith('git push ')) {
    if (lower.includes('--tags') || lower.includes('--follow-tags')) {
      return [
        out('To https://github.com/owner/repo.git'),
        out(` * [new tag]         v1.0.0 -> v1.0.0`),
      ]
    }
    return [
      out('Enumerating objects: 9, done.'),
      out('Counting objects: 100% (9/9), done.'),
      out('Writing objects: 100% (5/5), 1.02 KiB | 1.02 MiB/s, done.'),
      out('Total 5 (delta 2), reused 0 (delta 0), pack-reused 0'),
      out('To https://github.com/owner/repo.git'),
      out(`   a1b2c3d..${sha7()}  main -> main`),
    ]
  }

  // ── git merge ───────────────────────────────────────────────
  if (lower === 'git merge --abort') {
    return [out('Merge aborted successfully.')]
  }
  if (c.startsWith('git merge ')) {
    const branch = c.replace('git merge ', '').trim().split(' ')[0]
    if (branch === '--no-ff' || branch.startsWith('-')) {
      return [
        out('Merge made by the \'ort\' strategy.'),
        out(' src/App.jsx | 8 ++++++++'),
        out(' 1 file changed, 8 insertions(+)'),
      ]
    }
    // simulate possible conflict
    if (branch.includes('conflict') || branch.includes('feature/conflict')) {
      return [
        out('Auto-merging src/App.jsx'),
        err('CONFLICT (content): Merge conflict in src/App.jsx'),
        err('Automatic merge failed; fix conflicts and then commit the result.'),
      ]
    }
    return [
      out(`Updating a1b2c3d..${sha7()}`),
      out('Fast-forward'),
      out(' src/Feature.jsx | 20 ++++++++++++++++++++'),
      out(' 1 file changed, 20 insertions(+)'),
    ]
  }

  // ── git rebase ──────────────────────────────────────────────
  if (lower === 'git rebase --continue') {
    return [out('Successfully rebased and updated refs/heads/main.')]
  }
  if (lower === 'git rebase --abort') {
    return [out('Rebase aborted successfully.')]
  }
  if (lower === 'git rebase --skip') {
    return [out('Successfully rebased and updated refs/heads/main.')]
  }
  if (c.startsWith('git rebase ')) {
    const target = c.replace('git rebase ', '').trim().split(' ')[0]
    return [
      out(`Successfully rebased and updated refs/heads/${target === 'main' ? 'feature' : 'main'}.`),
    ]
  }

  // ── git restore / reset / revert ────────────────────────────
  if (c.startsWith('git restore --staged')) {
    return [] // silent
  }
  if (c.startsWith('git restore ')) {
    return [] // silent
  }
  if (lower === 'git reset' || lower === 'git reset HEAD' || lower === 'git reset mixed') {
    return [out('Unstaged changes after reset:'), out('M\tsrc/App.jsx')]
  }
  if (lower.startsWith('git reset --soft')) {
    return [] // silent
  }
  if (lower.startsWith('git reset --mixed') || lower.match(/^git reset HEAD~\d+$/)) {
    return [out('Unstaged changes after reset:'), out('M\tsrc/App.jsx')]
  }
  if (lower.startsWith('git reset --hard')) {
    return [out('HEAD is now at ' + sha7() + ' feat: add login component')]
  }
  if (c.startsWith('git reset ')) {
    return [out('Unstaged changes after reset:'), out('M\tsrc/App.jsx')]
  }
  if (c.startsWith('git revert ')) {
    return [
      out(`[main ${sha7()}] Revert "feat: previous change"`),
      out(' 1 file changed, 2 insertions(+), 12 deletions(-)'),
    ]
  }

  // ── git stash ───────────────────────────────────────────────
  if (lower === 'git stash' || lower === 'git stash push' || lower.startsWith('git stash push')) {
    return [out('Saved working directory and index state WIP on main: ' + sha7() + ' feat: add login component')]
  }
  if (lower === 'git stash list') {
    return [
      out(`stash@{0}: WIP on main: ${sha7()} feat: add login component`),
      out(`stash@{1}: On feature/auth: temp work`),
    ]
  }
  if (lower === 'git stash pop') {
    return [
      out('On branch main'),
      out('Changes not staged for commit:'),
      out('\tmodified:   src/App.jsx'),
      out('Dropped refs/stash@{0} (' + sha7() + '...)'),
    ]
  }
  if (lower === 'git stash apply' || lower.startsWith('git stash apply')) {
    return [
      out('On branch main'),
      out('Changes not staged for commit:'),
      out('\tmodified:   src/App.jsx'),
    ]
  }
  if (lower === 'git stash drop' || lower.startsWith('git stash drop')) {
    return [out('Dropped refs/stash@{0} (' + sha7() + '...)')]
  }
  if (lower === 'git stash clear') {
    return [] // silent
  }

  // ── git tag ─────────────────────────────────────────────────
  if (lower === 'git tag') {
    return [out('v0.1.0'), out('v0.2.0'), out('v1.0.0')]
  }
  if (c.startsWith('git tag -a ') || c.startsWith('git tag -m ') || c.match(/^git tag\s+v?[\d.]+/)) {
    return [] // silent when creating
  }
  if (c.startsWith('git tag -d ')) {
    const tag = c.replace('git tag -d ', '').trim()
    return [out(`Deleted tag '${tag}' (was ${sha7()})`)]
  }

  // ── git bisect ──────────────────────────────────────────────
  if (lower === 'git bisect start') {
    return [out('status: waiting for both good and bad commits')]
  }
  if (lower === 'git bisect bad' || lower.startsWith('git bisect bad')) {
    return [out('Bisecting: 3 revisions left to test after this (roughly 2 steps)')]
  }
  if (lower === 'git bisect good' || lower.startsWith('git bisect good')) {
    return [out('Bisecting: 1 revision left to test after this (roughly 1 step)')]
  }
  if (lower === 'git bisect reset') {
    return [out('Previous HEAD position was ' + sha7() + '...'), out("Switched to branch 'main'")]
  }

  // ── git cherry-pick ─────────────────────────────────────────
  if (c.startsWith('git cherry-pick ')) {
    const sha = c.replace('git cherry-pick ', '').trim().split(' ')[0]
    return [
      out(`[main ${sha7()}] feat: cherry-picked change`),
      out(' Date: Wed Oct 14 16:00:00 2026 +0200'),
      out(' 1 file changed, 5 insertions(+)'),
    ]
  }

  // ── git clean / reflog ──────────────────────────────────────
  if (lower === 'git clean -fd' || lower === 'git clean -f' || lower.startsWith('git clean')) {
    return [out('Removing notes.txt'), out('Removing tmp/')]
  }
  if (lower === 'git reflog' || lower.startsWith('git reflog')) {
    return [
      out(`${sha7()} HEAD@{0}: commit: feat: add login component`),
      out(`${sha7()} HEAD@{1}: commit: docs: update README`),
      out(`${sha7()} HEAD@{2}: checkout: moving from feature/auth to main`),
      out(`${sha7()} HEAD@{3}: commit: feat: auth flow`),
    ]
  }

  // ── git blame / shortlog ────────────────────────────────────
  if (c.startsWith('git blame ')) {
    return [
      out(`${sha7()} (Student Developer 2026-10-13 10:00:00 +0200  1) import React from "react"`),
      out(`${sha7()} (Student Developer 2026-10-14 17:30:00 +0200  2) import Login from "./Login"`),
      out(`${sha7()} (Student Developer 2026-10-12 09:00:00 +0200  3) `),
    ]
  }
  if (lower === 'git shortlog' || lower.startsWith('git shortlog')) {
    return [
      out('Student Developer (4):'),
      out('      feat: add login component'),
      out('      docs: update README'),
      out('      fix: navbar responsive layout'),
      out('      Initial commit'),
    ]
  }

  // ── Fallback: unknown git subcommand vs unknown binary ──────
  if (lower.startsWith('git ')) {
    const sub = c.split(/\s+/)[1] ?? ''
    return [
      err(`git: '${sub}' is not a git command. See 'git --help'.`),
      out(''),
      out('The most similar commands are'),
      out('        status'),
      out('        stash'),
      out('        stage'),
    ]
  }

  return [
    err(`bash: ${c.split(' ')[0]}: command not found`),
    out('Type "help" to see available practice commands.'),
  ]
}

/* ─────────────────────────────────────────────────────────────
   Component
   ───────────────────────────────────────────────────────────── */

export default function InteractiveTerminal({
  title = 'Git Bash',
  initialLines = [],
  commandMap = {},
  onCommand,
  placeholder = 'Type a git command and press Enter…',
  prompt = 'MINGW64:/c/Users/student/my-project$',
  height = '320px',
}: InteractiveTerminalProps) {
  const [lines, setLines] = useState<TermLine[]>([
    { type: 'output', text: 'Welcome to the live Git practice terminal.' },
    { type: 'output', text: 'Type a command and press Enter. Type "help" for the full command list.' },
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

      const echo: TermLine = { type: 'command', text: cmd }

      // Page-specific override first
      let response: TermLine[] | undefined
      if (commandMap[cmd]) {
        response = commandMap[cmd]
      } else {
        const key = Object.keys(commandMap).find(
          (k) =>
            cmd.startsWith(k) ||
            (k.endsWith('*') && cmd.startsWith(k.slice(0, -1)))
        )
        if (key) response = commandMap[key]
      }

      if (!response) {
        response = resolveCommand(cmd)
      }

      // clear
      if (response.length === 1 && response[0].text === '__CLEAR__') {
        setLines([])
        setInput('')
        setHistory((h) => [...h, cmd])
        setHistIdx(-1)
        onCommand?.(cmd)
        return
      }

      setLines((prev) => [...prev, echo, ...response!])
      setHistory((h) => [...h, cmd])
      setHistIdx(-1)
      setInput('')
      onCommand?.(cmd)
    },
    [commandMap, onCommand]
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
    } else if (e.key === 'Tab') {
      e.preventDefault() // no autocomplete noise during demos
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
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#1e1e1e] border-b border-[#30363d]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-xs text-[#8b949e] ml-2 font-mono">{title}</span>
        <span className="ml-auto text-[10px] text-[#484f58] font-mono">LIVE PRACTICE</span>
      </div>

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
