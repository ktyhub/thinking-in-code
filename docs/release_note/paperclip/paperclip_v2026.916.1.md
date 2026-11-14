---
title: "paperclip v2026.916.1"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.916.1"
version: "v2026.916.1"
published: "2026-09-21"
type: "patch"
lang: "en"
summary: "A patch on top of 2026.916.0 that fixes sending messages in the task conversation view. It carries one targeted fix (plus its regression tests and a small server error-classification repair that rode along in the same…"
---

# paperclip v2026.916.1

# Paperclip v2026.916.1

> Released: 2026-09-21

A patch on top of [2026.916.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.916.0) that fixes sending messages in the task conversation view. It carries one targeted fix (plus its regression tests and a small server error-classification repair that rode along in the same commit); everything else in 2026.916.0 is unchanged.

## Fixes

- **The chat composer's send button no longer starts out disabled on desktop.** The task page disables the composer while it checks whether the task is paused, and in React Query v5 that pending state is true from mount until the first *successful* response — so every desktop task page loaded with the send button disabled, and it stayed disabled for good if the pause-status request stalled. Sends are now allowed while the check is pending: the server remains authoritative and rejects messages to paused tasks with a 409 before saving a comment or waking an agent, and a confirmed pause hold or a failed status check still blocks the composer as before. ([#13562](https://github.com/paperclipai/paperclip/pull/13562))
- **Duplicate document inserts wrapped by the ORM are classified as retryable conflicts again**, instead of surfacing as opaque database errors; unrelated database failures keep their original identity. (Part of [#13562](https://github.com/paperclipai/paperclip/pull/13562))

## Upgrade Guide

- No migrations, no configuration changes, no API changes. Upgrade in place.

---

> **Source** [paperclipai/paperclip](https://github.com/paperclipai/paperclip) · `v2026.916.1` · 2026-09-21 · [upstream release](https://github.com/paperclipai/paperclip/releases/tag/v2026.916.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
