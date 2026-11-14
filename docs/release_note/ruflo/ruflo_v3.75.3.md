---
title: "ruflo v3.75.3"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.75.3"
version: "v3.75.3"
published: "2026-11-10"
type: "patch"
lang: "en"
summary: "Security and fix release."
---

# ruflo v3.75.3

Security and fix release.

## Security

- **`@claude-flow/shared` 3.0.8 on zod 4** (#4905). Fixes the 4 high-severity `npm audit` findings (GHSA-mrhx-c7xc-m3w5) on a fresh `ruflo` install.
- **Pinned-key verification for pattern downloads** (#4936). With `requireVerification` on, downloaded patterns must verify against a pinned key. Off by default.
- **Helper files are written without following symlinks** (#4934). If `.claude` itself is a symlink, the helpers are skipped.

## Fixes

- **Insight lookup by key** (#4942, fixes #4911; `@claude-flow/memory` 3.3.1). `onInsightAccessed` now finds insights by their key, not only by row id.
- **Reopened tasks clear `completedAt`** (#4935).
- **Raft voting** (#4938, closes #4937; `@claude-flow/swarm` 3.0.6). The legacy `requestVote()` now enforces one vote per term and the log up-to-date check.
- **Doctor test isolation** (#4943).

## Packages released with this train

`@claude-flow/memory` 3.3.1, `@claude-flow/swarm` 3.0.6 (published standalone; the CLI does not depend on swarm). `@claude-flow/shared` 3.0.8 was already on npm.

`alpha` and `v3alpha` stay on 3.75.2.

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.75.3` · 2026-11-10 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.75.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
