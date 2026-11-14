---
title: "nanobot v0.4.1"
project: "nanobot"
repo: "HKUDS/nanobot"
tag: "v0.4.1"
version: "v0.4.1"
published: "2026-11-06"
type: "patch"
lang: "en"
summary: "The platform wheels include the built WebUI and matching native TUI. Native installation, terminal and update/recovery checks passed on macOS arm64/x64, Linux arm64/x64 and Windows x64. Original public 0.3.5 and 0.4.0…"
---

# nanobot v0.4.1

## Changes

- Fix TLS certificate verification, sandboxed shell execution and workspace permissions for queued inputs.
- Keep idle maintenance from blocking active work or incorrectly refusing an update. Improve retry, reconnection and recovery behavior, and preserve native provider state through compaction.
- Add a file-context graph with file previews, local Markdown links and recent context snapshots. Switching topics keeps each conversation's context separate.
- Share syntax highlighting across code, source previews and read-only diffs, with complete source copying and plain-text fallbacks.
- Reduce unnecessary memory copies in file reads, session history and provider requests. Improve navigation, context-usage display, history loading and skill-source identification.
- Retain legacy history and proxy migration throughout 0.4.x, including original workspace ownership for unmigrated conversations.

## Upgrade notes

- Stop affected processes and back up configuration and conversations before an external upgrade. Use the original installer, package manager or container workflow, then verify the running version, old conversations, a new message and another restart. See [Updating nanobot](https://github.com/HKUDS/nanobot/blob/v0.4.1/docs/updating.md).
- **0.3.5 can upgrade directly to 0.4.1 through its original installation method.** No intermediate 0.4.0 installation is required. Legacy JSONL and proxy importers remain available throughout 0.4.x and are scheduled for removal in 0.5.0; retain original files and migration backups.
- **0.4.1 is the final release accepting the temporary OpenAI `apiType` / `api_type` conversion introduced in 0.4.0.** Save the migrated `api` configuration and replace old environment variables before a later upgrade; saving configuration does not rewrite the process environment.
- Managed program recovery is conditional and does not restore old chats over current data. Changed data can prevent safe program rollback; other installation owners retain their repair route.
- **In-app automatic installation is not enabled for this version.** Publishing packages does not enable release approval proof, change update subscriptions or activate a public Preview feed.
- Large or growing graphs and very large diffs can still be less responsive on slower devices. The memory changes are not a general latency guarantee; missing historical graph snapshots are not reconstructed from current files.

## Packages and verification

The platform wheels include the built WebUI and matching native TUI. Native installation, terminal and update/recovery checks passed on macOS arm64/x64, Linux arm64/x64 and Windows x64. Original public 0.3.5 and 0.4.0 upgrade paths were additionally tested on macOS with disposable data; this is not a guarantee for every environment.

Packages are attached below and available on [PyPI](https://pypi.org/project/nanobot-ai/0.4.1/).

**Full Changelog**: https://github.com/HKUDS/nanobot/compare/v0.4.0...v0.4.1

---

> **Source** [HKUDS/nanobot](https://github.com/HKUDS/nanobot) · `v0.4.1` · 2026-11-06 · [upstream release](https://github.com/HKUDS/nanobot/releases/tag/v0.4.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
