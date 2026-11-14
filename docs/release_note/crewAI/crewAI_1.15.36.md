---
title: "crewAI 1.15.36"
project: "crewAI"
repo: "crewAIInc/crewAI"
tag: "1.15.36"
version: "1.15.36"
published: "2026-11-06"
type: "patch"
lang: "en"
summary: "@Kiko0301, @StoyanD, @joaomdmoura, @lorenzejay"
---

# crewAI 1.15.36

# What's Changed

### Features
- Add experimental conversational Agent sessions.
- Ask for a missing API key when crewai run starts.
- Record the error class when crewai run cannot load a project.
- Name the apps CrewAI AMP cannot resolve for an agent.

### Bug Fixes
- Fix async call execution in the caller's context for sync tools.
- Resolve issue with empty value precedence in the run's key check.
- Stop a JSON crew run cleanly when its API key is missing.
- Call GPT-6 Astra and GPT-6.1 Sol tools through the Responses API.
- Handle the sourcedAnswer output shape correctly.
- Drop None metadata values before writing to ChromaDB.
- Add the chosen provider's crewai extra to new projects.
- Pin crewai-files in the file-processing extra like its siblings.

### Documentation
- Update snapshot and changelog for v1.15.35.

## Contributors

@Kiko0301, @StoyanD, @joaomdmoura, @lorenzejay

---

> **Source** [crewAIInc/crewAI](https://github.com/crewAIInc/crewAI) · `1.15.36` · 2026-11-06 · [upstream release](https://github.com/crewAIInc/crewAI/releases/tag/1.15.36)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
