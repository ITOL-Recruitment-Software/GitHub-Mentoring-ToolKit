# Contributing to the GitHub Mentoring ToolKit

This project is an ITOL Recruitment Software mentoring resource. Keep contributions accurate, accessible, beginner-friendly, and consistent with the existing black and emerald interface.

## Development setup

Requirements: Node.js 24 and npm.

```bash
git clone https://github.com/ITOL-Recruitment-Software/GitHub-Mentoring-ToolKit.git
cd GitHub-Mentoring-ToolKit
npm install
npm run dev
```

## Before opening a pull request

Run the available quality checks:

```bash
npm run lint
npm run build
```

The GitHub Actions workflow runs these checks for pull requests targeting `main` and for pushes to `main`.

## Contribution workflow

1. Open or identify an issue that describes the change.
2. Create a focused feature branch from `main`.
3. Make small, clearly described commits.
4. Keep existing routes, lesson links, and the responsive layout working.
5. Run lint and build checks locally.
6. Open a pull request with a summary, rationale, and test results.
7. Address review feedback before merging.

## UI and learning-content standards

- Use the established dark theme, emerald accents, spacing, and responsive utility classes.
- Keep lessons practical, explain commands before asking learners to use them, and flag destructive commands clearly.
- Make interactive controls keyboard accessible and provide visible focus styles.
- Use semantic headings, descriptive link text, and accessible labels for icon-only controls.
- Do not present simulated terminal commands or sample chat replies as real system execution or live AI responses.
- Avoid adding external services that require credentials until a secure integration and configuration plan exists.

## Security

Never commit API keys, tokens, passwords, private learner information, or other confidential company data. Report suspected vulnerabilities privately to the repository maintainers rather than publishing sensitive details in an issue.
