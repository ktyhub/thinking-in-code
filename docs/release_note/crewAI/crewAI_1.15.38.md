---
title: "crewAI 1.15.38"
project: "crewAI"
repo: "crewAIInc/crewAI"
tag: "1.15.38"
version: "1.15.38"
published: "2026-11-08"
type: "patch"
lang: "en"
summary: "@joaomdmoura"
---

# crewAI 1.15.38

## What's Changed

### Features
- Make gpt-6-luna crewAI's default model everywhere
- Read spreadsheet URLs in an agent's input with tools over every row
- Tag eval usage spans with target and a per-evaluation id
- Add --no-open to crewai eval for headless use

### Bug Fixes
- Count a crewai eval run that exits with an error as run_failed
- Create the project .env owner-only when crewai eval turns tracing on
- Upload a failed anonymous run that crewai eval started
- Check openai-compatible providers' API key on the first call
- Scope memoized crew methods to their instance
- Exit non-zero when crewai run's project script fails
- Eval asks to share the trace with Enter meaning yes, and explains why

### Documentation
- Document required_inputs on GET /inputs and which flow fields are inputs

## Contributors

@joaomdmoura

---

> **Source** [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) · `1.15.38` · 2026-11-08 · [upstream release](https://github.com/crewAIInc/crewAI/releases/tag/1.15.38)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
