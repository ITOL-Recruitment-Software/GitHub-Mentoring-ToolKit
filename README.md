# GitHub Mentoring ToolKit

A browser-based Git and GitHub learning toolkit for ITOL mentoring sessions. It combines guided lessons, interactive practice activities, a simulated Git terminal, and a contextual helper panel in a responsive dark interface.

## What is included

- Beginner-friendly introduction to Git, GitHub, repository history, and GitHub Flow.
- Lessons covering local setup, repositories, branching, status, staging, commits, remotes, pull requests, merges, conflicts, tags, releases, and recovery workflows.
- Reference material for README files, `.gitignore`, issues, projects, repository structure, GitHub Actions, common mistakes, and good practices.
- Interactive practice activities for branches, commit messages, merge conflicts, and pull-request review.
- A shared simulated terminal that keeps its practice state while navigating between lessons.
- A responsive Toolkit Helper with suggested questions and locally defined educational replies.
- Searchable sidebar navigation, a starter workflow lab, and a not-found page for unknown routes.

## Important behaviour

The terminal is an educational simulator. It does not execute commands on the visitor's computer or change a real repository. The starter lab is also a visual learning exercise.

The helper panel currently uses predefined responses. It is not connected to a live AI model or external chat service, and it does not send chat content to an AI provider. A real AI integration would need a secure server-side endpoint, server-held credentials, rate limiting, privacy guidance, and error handling before it should be enabled.

## Technology

- React 19 and TypeScript
- Vite
- Tailwind CSS 4
- React Router
- Framer Motion
- Lucide React icons

## Requirements

- Node.js 24.x
- npm

## Run locally

```bash
git clone https://github.com/ITOL-Recruitment-Software/GitHub-Mentoring-ToolKit.git
cd GitHub-Mentoring-ToolKit
npm install
npm run dev
```

Vite prints the local development URL after the server starts.

## Quality checks

```bash
npm run lint
npm run build
npm run preview
```

A GitHub Actions workflow runs lint and a production build for pull requests into `main` and pushes to `main`.

## Project structure

```text
src/
  components/    Shared layout, navigation, terminal, chat, and practice components
  data/          Sidebar section data and practice configuration
  pages/          Lesson, reference, and practice screens
  App.tsx         Application routes and persistent shell
public/           Static assets and public configuration examples
.github/workflows/ Automated pull-request and main-branch checks
```

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) before making changes. Work on a focused branch, preserve existing lesson routes, run lint and build, and submit a pull request with a concise summary.

## Security and ownership

This project is intended for authorised ITOL Recruitment Software mentoring activities. Do not commit credentials or confidential learner or company data. Review [LICENSE](./LICENSE) for the applicable proprietary terms. Access to this repository does not grant permission to redistribute or commercially reuse its contents.

Maintainer: Darren van der Velde  
Copyright © 2026 ITOL Recruitment Software.
