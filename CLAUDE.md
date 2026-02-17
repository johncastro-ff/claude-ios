# CLAUDE.md

This file provides guidance for AI assistants working in this repository.

## Project Overview

**Repository**: `claude-ios`
**Status**: New project — initial setup phase
**Type**: Web project (hosted on GitHub)

## Repository Structure

```
claude-ios/
├── CLAUDE.md          # AI assistant guidance (this file)
└── .git/              # Git repository
```

This project is in its initial stage. Structure will be updated as the project develops.

## Development Workflow

### Branch Strategy

- Development branches follow the pattern: `claude/<descriptor>-<session-id>`
- Always push with: `git push -u origin <branch-name>`
- Never force-push to main/master

### Commit Conventions

- Write clear, descriptive commit messages
- Use imperative mood in commit subjects (e.g., "Add feature" not "Added feature")
- Keep subject line under 72 characters

### Getting Started

Since this is a new project, the first steps are:
1. Initialize the project structure (framework, build tools, etc.)
2. Add a README.md with project description
3. Set up any necessary configuration files
4. Add a .gitignore appropriate for the project type

## Key Conventions

### Code Style

- Follow standard conventions for the chosen language/framework
- Prefer clarity over cleverness
- Keep functions small and focused

### File Organization

- Group related files together
- Use clear, descriptive file and directory names
- Separate concerns (e.g., components, utilities, styles, tests)

### Testing

- Write tests alongside new features
- Run tests before committing

### Security

- Never commit secrets, API keys, or credentials
- Use environment variables for sensitive configuration
- Add sensitive files to .gitignore

## Notes for AI Assistants

- Read existing code before suggesting modifications
- Keep changes minimal and focused on the task at hand
- Do not over-engineer — solve the current problem simply
- Ask for clarification when requirements are ambiguous
- Always verify the build/tests pass before considering a task complete
