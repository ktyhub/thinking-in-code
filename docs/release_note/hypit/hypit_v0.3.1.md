---
title: "hypit v0.3.1"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.3.1"
version: "v0.3.1"
published: "2026-10-09"
type: "patch"
lang: "en"
summary: "Existing 0.3.0 project components may need SDK import and dependency updates. Read the 0.3.1 migration guide before updating a production."
---

# hypit v0.3.1

## Upgrade notice

Existing 0.3.0 project components may need SDK import and dependency updates. Read the [0.3.1 migration guide](https://github.com/hypit-ai/hypit/blob/v0.3.1/migrations/0.3.1.md) before updating a production. Preserve existing Sources, Runs and Results; update the project lockfile deliberately.

## Changes

- Video-domain SDKs are independently versioned npm packages. Default video capabilities still install with Hypit; generic host APIs remain under @hypit/hypit.
- Studio resolves computed CaptionTiming references, displays named Instants even when no Track consumes them, and retains the compact unified Timeline header and projection rows. Windows remain visible through their consuming Track Items.
- Studio observes atomic Source-file replacement and updates watches as the loaded Source closure changes.
- Pricing reports Producer failures completely and exits unsuccessfully when planning fails.
- Skill and documentation use the current SDK package names and installed Studio paths. The Skill updates separately through `npx skills add hypit-ai/hypit -g`.

For an existing global CLI installation, use `npm install -g @hypit/hypit@0.3.1` after publication completes. For a project-local installation, update the existing package.json and lockfile using the project package manager and migration guide.

This release does not publish the optional partner Provider packages or the four optional ecosystem components.

---

> **Source** [hypit-ai/hypit](https://github.com/hypit-ai/hypit) · `v0.3.1` · 2026-10-09 · [upstream release](https://github.com/hypit-ai/hypit/releases/tag/v0.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
