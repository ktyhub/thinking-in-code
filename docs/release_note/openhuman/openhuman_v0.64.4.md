---
title: "openhuman v0.64.4"
project: "openhuman"
repo: "tinyhumansai/openhuman"
tag: "v0.64.4"
version: "v0.64.4"
published: "2026-09-26"
type: "patch"
lang: "en"
summary: "This release is all about making the Windows desktop experience more reliable, more polished, and smoother to operate—especially when you’re offline. 🎉"
---

# openhuman v0.64.4

# The Better Windows Desktop Upgrade

This release is all about making the Windows desktop experience more reliable, more polished, and smoother to operate—especially when you’re offline. 🎉

## Highlights

### Offline-ready Windows installers 📦
Windows desktop installers now bundle all registry-pinned native modules (and their extracted DLLs) directly into the installer, so key features don’t depend on a first-run download. Module resolution now prefers the read-only installer bundle before user cache or network, and the Windows checks/smoke steps were updated to verify offline module loading end-to-end. ([#6687](https://github.com/tinyhumansai/openhuman/pull/6687)) — Thank you @senamakel!

### Sharper Windows window controls & cleaner shutdown 🪟
Windows gets a more compact first-launch window and improved custom window controls (minimize, maximize/restore, close), with the drag strip staying available during boot and error screens. Shutdown behavior is also fixed so closing properly exits both the desktop host and embedded core (including support for the `app_quit` IPC command), plus the dev launcher was simplified with earlier architecture mismatch detection. ([#6692](https://github.com/tinyhumansai/openhuman/pull/6692)) — Thank you @stevent95-star!

## Contributor Credits
Thanks to everyone who contributed to this release: @senamakel, @stevent95-star.

## Full Compare
https://github.com/tinyhumansai/openhuman/compare/v0.64.3...v0.64.4

---

> **Source** [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) · `v0.64.4` · 2026-09-26 · [upstream release](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
