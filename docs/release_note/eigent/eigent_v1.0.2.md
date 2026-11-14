---
title: "eigent v1.0.2"
project: "eigent"
repo: "eigent-ai/eigent"
tag: "v1.0.2"
version: "v1.0.2"
published: "2026-07-21"
type: "patch"
lang: "en"
summary: "This release focuses on workflow reliability, connector setup, and desktop app polish."
---

# eigent v1.0.2

## Eigent v1.0.2

This release focuses on workflow reliability, connector setup, and desktop app polish.

### Highlights

- Added Connector Gateway UI and MCP wiring.
- Added typed workflow event infrastructure for app-level workflow events.
- Improved the in-session preview panel experience.
- Improved active form / single-agent work-log display.
- Added support for BYOK model parameters.
- Added clipboard image paste support in the chat box.
- Improved generated file cards and sandbox path handling.
- Improved update UX and log download flow.
- Refined chat box bottom area interactions and tooltip design.

### Reliability Fixes

- Fixed active Space hydration behavior.
- Prevented project switches from killing live runs.
- Allowed remote control background projects to continue working correctly.
- Fixed local sign-in losing the user account state in an empty read-only workspace.
- Ignored stale human replies after task lock cleanup.
- Fixed completed tasks being left as ongoing when answers exceed summary length.
- Fixed user-scoped project output file resolution.
- Hardened local backend startup.
- Fixed backend system trust store handling.
- Fixed Windows terminal capability detection.
- Fixed OAuth authorize URL parameter encoding.
- Kept `.git` in the build context so server Docker builds succeed.
- Fixed invisible chat code block text under mismatched OS/app theme settings.
- Fixed chat input caret jumps during fast typing.
- Restored the last visited session at launch.
- Stabilized the Single Agent option in the skill scope picker.

### Dependencies and Docs

- Bumped `camel-ai` to `0.2.91a5`.
- Updated server README Python requirement from 3.10 to 3.12.
- Updated the WeChat QR code.

---

> **Source** [eigent-ai/eigent](https://github.com/eigent-ai/eigent) · `v1.0.2` · 2026-07-21 · [upstream release](https://github.com/eigent-ai/eigent/releases/tag/v1.0.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
