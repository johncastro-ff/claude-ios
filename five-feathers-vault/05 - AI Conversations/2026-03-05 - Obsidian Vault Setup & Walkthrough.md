---
date: 2026-03-05
platform: Claude Code (Web)
topic: Obsidian Vault Setup, Knowledge Management System Design
tags: [fivefeathers, vault, setup, session-log]
---

# Chat Summary — Obsidian Vault Setup & Walkthrough

## Platform
Claude Code on the Web (claude-opus-4-6)

## Topic
Setting up the Five Feathers Obsidian vault as a persistent knowledge management system for John Castro's business, creative, and personal projects.

## What Happened This Session

### 1. Vault Structure Was Created
The full `five-feathers-vault/` directory was scaffolded with 7 top-level folders and 18 template files covering:

- **00 - Inbox** — Quick capture / drop zone
- **01 - Context Docs** — Master context files for Five Feathers, John (personal), Strive Wellness (client), and Tsan-Usdi (creative project)
- **02 - Clients/Strive Wellness Lounge** — Ad creative ideas, FoLix campaign decisions log
- **03 - Five Feathers Business** — Decisions log, positioning & messaging, revenue tracker, service tiers
- **04 - Tsan-Usdi** — Cherokee history research, series bible
- **05 - AI Conversations** — This folder; chat summary template + session logs
- **06 - Personal Development** — A New Earth notes, Jung shadow work, morning routine
- **07 - Resources & Reference** — General reference materials

### 2. Current State: Templates Only
All 18 files contain structured templates (headings, prompts, frontmatter) but **no content has been filled in yet**. The scaffolding is complete; the knowledge still needs to be added.

### 3. How the System Works
The vault is just markdown files in a Git repo. The workflow is:
- **Claude Code writes the files** — John talks, Claude structures and saves
- **Obsidian is the viewer** — Browse, search, and review on any device
- **Git is the sync layer** — Commit and push to share across sessions/devices

John does NOT need to type into Obsidian manually. He talks to Claude Code, and Claude writes directly into the vault files.

## Key Decisions Made
- Obsidian vault lives inside this repo at `five-feathers-vault/`
- Vault uses numbered folder prefixes (00-07) for sort order
- Context docs are the highest-leverage files to fill in first
- The Master Context doc is designed to be pasted into any new AI conversation to eliminate repetition

## Open Questions
- What is Five Feathers? (Needs to be defined in Master Context)
- What are the service tiers and pricing?
- What is the current state of the Strive Wellness / FoLix work?
- What is Tsan-Usdi about? (Cherokee history creative project — details needed)
- What are John's current personal development focuses?

## Action Items
- [ ] Fill in Five Feathers - Master Context.md (highest priority)
- [ ] Fill in John - Personal Context.md
- [ ] Fill in Strive Wellness - Client Context.md
- [ ] Fill in Service Tiers with actual pricing
- [ ] Define Tsan-Usdi project in its context doc
- [ ] Set up this repo on John's laptop so he can use Claude Code locally
- [ ] Connect an MCP memory server if persistent cross-session memory is desired

## Notes for Future Sessions
- The `01 - Context Docs/Five Feathers - Master Context.md` file is the single most important file to fill in. Once complete, it can be pasted into any AI conversation to give full context immediately.
- All files use YAML frontmatter with tags for organization.
- The vault was designed for John Castro's specific projects: Five Feathers (business), Strive Wellness (client), Tsan-Usdi (creative), and personal development.
- This session was exploratory — John was understanding what the vault is and how to use it with Claude Code.

## Link to Original Chat
https://claude.ai/code/session_01DxQskfxzzoVWxde1AQtzon

## Session Branch
`claude/setup-obsidian-vault-stbFA`
