---
title: "claude-mem v15.11.0"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.11.0"
version: "v15.11.0"
published: "2026-11-06"
type: "minor"
lang: "en"
summary: "Claude-Mem now records progress through the local setup screens, so the admin can show where setup continues, goes back, encounters a known error, or has no recorded next step."
---

# claude-mem v15.11.0

# Installer screen telemetry and runtime fixes

Claude-Mem now records progress through the local setup screens, so the admin can show where setup continues, goes back, encounters a known error, or has no recorded next step.

- Track the nine actual setup screens: Scan, Reveal, Choose memory, Review savings, Checkout, Finish setup, Import history, Launch, and Workspace.
- Count each rendered screen visit separately. Returning to a screen creates a new visit; failed hand-offs do not become successful forward transitions.
- Preserve the real setup branches. At Home and existing Pro configurations skip checkout, history import returns to Finish setup, and reduced-motion setup skips the launch animation.
- Record local setup completion only after the worker accepts the successful setup state write.
- Preserve pending screen events when setup finishes and retry temporary local-worker connection failures, so a fast completion or a slow telemetry request does not lose the visit history.
- Pass a fresh setup-attempt ID through the existing installer pairing when telemetry is enabled, allowing the matching admin report to connect setup progress to the authorized account flow.

The events follow the existing analytics settings, including `DO_NOT_TRACK`. Their schema accepts only known screen IDs, actions, error codes, timestamps, and random attempt/visit IDs. Prompts, filenames, URLs, credentials, and free-form error text are excluded. Sample previews do not emit setup events. The worker's long-lived anonymous identity is not aliased to an account.

Per-screen history starts with this release. Older installers did not record these screens, so their missing events are not treated as zero conversions or abandonment.

## Runtime fixes included since v15.10.1

- Stop replaying stale local observer work after quota or authentication recovery. Live capture uses a bounded handoff; pending inputs expire after five minutes and are discarded on quota/authentication failure. Saved memories and original transcripts remain intact. Capture skipped during an outage is not automatically backfilled.
- Restore the server viewer's read endpoints using the server's Postgres data and existing team/project authorization. Shared server log files remain unavailable to tenant keys.
- Stop advertising `dumb_search` on the server runtime, where only the local worker can execute it.
- Derive the default worker port per installation to avoid local port collisions while preserving the legacy Windows server port.
- Show files outside a project under the home directory as `~/…` in generated context, rather than long chains of parent-directory segments.
- Prefer the configured provider's agent for My Work refreshes.

Full comparison: https://github.com/thedotmack/claude-mem/compare/v15.10.1...v15.11.0

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.11.0` · 2026-11-06 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
