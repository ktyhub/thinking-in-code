---
title: "AionUi v2.2.2"
project: "AionUi"
repo: "iOfficeAI/AionUi"
tag: "v2.2.2"
version: "v2.2.2"
published: "2026-09-09"
type: "patch"
lang: "en"
summary: "The Files and Changes panel now has a single top-bar Refresh button that does the right thing per tab: on Files it re-mounts every root and revalidates project detail;"
---

# AionUi v2.2.2

## Highlights

### Explorer: tab-scoped refresh and Collapse All
- The Files and Changes panel now has a single top-bar Refresh button that does the right thing per tab: on Files it re-mounts every root and revalidates project detail; on Changes it re-discovers repositories and re-pulls their status.
- A git worktree created inside an already-open project now shows up on the Changes tab after a single refresh — no more switching projects away and back to make it appear.
- The Refresh button tracks real in-flight state (busy/spinner) and ignores repeated clicks until the refresh completes.
- New Collapse All action (Files tab) collapses the whole file tree in one click.
- The toolbar was regrouped to match VS Code: project actions (add folder, open workspace) first, view actions (refresh, collapse-all) at the far right, and tooltips on the right-docked panel are anchored so short labels no longer wrap. The scattered right-click "Refresh" and Changes-header refresh entries were consolidated into this single control.

### Engine updates (AionCore v0.2.1 → v0.2.2)
- Added agent-driven conversation creation, letting an agent start new conversations programmatically — supporting the cross-conversation (@@) messaging capabilities introduced in earlier releases.

## What's Changed
* feat(explorer): tab-scoped refresh with repo re-discovery and Collapse All by @piorpua in https://github.com/iOfficeAI/AionUi/pull/4202
* chore(docs): update WeChat group QR code to wx-23 by @IceyLiu in https://github.com/iOfficeAI/AionUi/pull/4229
* chore(docs): remove orphaned WeChat QR image wx-16.png by @IceyLiu in https://github.com/iOfficeAI/AionUi/pull/4230
* chore: bump version to 2.2.2 by @piorpua in https://github.com/iOfficeAI/AionUi/pull/4236


**Full Changelog**: https://github.com/iOfficeAI/AionUi/compare/v2.2.1...v2.2.2

---

## 📦 Download

Installers are no longer published on GitHub. Download the latest build from the official website — **https://www.aionui.com/**

---

> **Source** [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) · `v2.2.2` · 2026-09-09 · [upstream release](https://github.com/iOfficeAI/AionUi/releases/tag/v2.2.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
