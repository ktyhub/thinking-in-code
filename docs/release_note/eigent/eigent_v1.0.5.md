---
title: "eigent v1.0.5"
project: "eigent"
repo: "eigent-ai/eigent"
tag: "v1.0.5"
version: "v1.0.5"
published: "2026-09-25"
type: "patch"
lang: "en"
summary: "Eigent v1.0.5 improves Session recovery, task queues, and the tools you use to inspect ongoing work. It also adds Meta Model API support, makes Space resources easier to configure, and introduces a limited, opt-in…"
---

# eigent v1.0.5

Eigent v1.0.5 improves Session recovery, task queues, and the tools you use to inspect ongoing work. It also adds Meta Model API support, makes Space resources easier to configure, and introduces a limited, opt-in preview of parallel Session execution.

### Highlights

- **More reliable Session recovery** — Recover task state, conversation history, elapsed time, and completed output more consistently after interrupted connections or app restarts. Resume Sessions with their accepted model configuration and handle model switching after usage limits more reliably.
- **A clearer task queue** — Reorder queued tasks with drag-and-drop or keyboard controls, choose which task starts next, and explicitly stop the current task before starting another. Clearer waiting, stopping, and starting states make the queue easier to follow.
- **Background processes and better previews** — Inspect running processes, open their terminal output or local server previews, and stop them from the Session side panel. Improve PDF rendering, preview failure recovery, and local browser loading; HTML previews now support files up to 10 MiB.
- **Easier Space configuration** — Browse configured Skills, Connectors, MCP servers, and models from Space settings. Apply a published and set-up Space's default model to new Sessions, while preserving manual Session selections and existing Session models.
- **Expanded model support** — Add Meta Model API and Muse Spark to custom model settings. Improve model discovery, API-key errors, reasoning-effort handling, OpenAI/Azure tool requests, Anthropic-compatible tool calls, and OpenAI Workforce initialization with saved credentials.

### Reliability and usability improvements

- Show clearer credit, access, connection, and provider errors, with fewer duplicate reminders.
- Preserve completed task results, file summaries, and historical durations more consistently; stop timers for failed historical tasks.
- Keep long-running trigger executions from being marked failed solely because a server-side time threshold elapsed.
- Improve workspace write coordination, process shutdown, provider retries, cancellation, and incremental memory processing.
- Complete Space deletion even when the local backend is temporarily unavailable.
- Improve Skills file browsing, reduce Connector loading flicker, and keep Settings headers visible.
- Separate network proxy Save, Reset, and Restart actions, and prevent edits while a save is pending.
- Connect thumbs-up and thumbs-down feedback to message-level events.
- Handle Git filenames containing spaces, Unicode, or line breaks correctly.
- Bundle Git with Windows x64 builds to prevent backend startup failures when Git is not installed.
- Save credential environment files atomically and enforce owner-only permissions on supported systems.

### Parallel Session execution preview

This release includes a **default-off, opt-in preview** for supported local Single Agent file workflows. On explicitly configured deployments, eligible new Sessions can run concurrently in isolated workspaces, with results automatically integrated back into their Space. Tasks within each Session still run in order.

The preview requires deployment setup, a supported custom or local model, existing file permissions, and explicit opt-in for each new Session. It does not include existing Sessions, attachments, MCP, general terminal/browser tools, Workforce, or cloud execution. See the [preview setup and scope](https://github.com/eigent-ai/eigent/blob/v1.0.5/docs/plans/parallel-session-execution/LOCAL_ACCEPTANCE.md).

### Upgrade notes

Existing Sessions keep their current execution path; upgrading does not automatically enable parallel execution. Some older interrupted tasks may require a new task if their saved model capabilities no longer match the current configuration.

**Full changelog:** [v1.0.4 → v1.0.5](https://github.com/eigent-ai/eigent/compare/v1.0.4...v1.0.5)

---

> **Source** [eigent-ai/eigent](https://github.com/eigent-ai/eigent) · `v1.0.5` · 2026-09-25 · [upstream release](https://github.com/eigent-ai/eigent/releases/tag/v1.0.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
