---
title: "AionUi v2.1.59"
project: "AionUi"
repo: "iOfficeAI/AionUi"
tag: "v2.1.59"
version: "v2.1.59"
published: "2026-08-19"
type: "patch"
lang: "en"
---

# AionUi v2.1.59

## Highlights

### File Explorer: Drag & Drop + New File/Folder
- You can now drag files and folders directly within the project tree to move them across directories, no more manual cut/paste or terminal commands.
- Added "New File / New Folder" entries plus a grouped right-click menu for related actions, making file operations more discoverable.
- The underlying engine now backs these transfers with proper copy/move commands, so drag-to-transfer and file creation are more reliable.

### Feedback Form
- The feedback form now has an optional contact email field, so the team can follow up on the issue you reported.

### Engine Update (AionCore v0.1.70)
- The session list now distinguishes Task subagents from regular background tasks, making task status clearer at a glance.

### Bug Fixes
- Fixed inline markup (bold/italic) inside chat Markdown headings incorrectly inheriting the heading's larger font size.
- Fixed chat KaTeX formulas occasionally rendering twice; they now render once inside a Shadow DOM.
- Fixed relative-path images in agent replies failing to display.
- Fixed a reload storm when the desktop renderer failed to launch; relaunches are now backed off and throttled.
- Fixed monochrome theme logos not following the active theme color.
- Fixed a path traversal issue when the HTML renderer inlined local resources.
- Improved how the image root directory is resolved for agent reply media, for more accurate image lookup.
- Fixed native media blocks (images/files) in agent replies not being paired with their corresponding file link.
- Fixed occasional garbled characters (U+FFFD) appearing when streaming text from Antigravity.
- Fixed Antigravity in Team mode not going through the same CLI path as other modes, causing inconsistent behavior.
- Fixed the data-directory instance lock not being released promptly during graceful app shutdown.
- Hardened the shutdown watchdog's force-exit fallback to prevent the app from hanging on quit.
- Fixed the backend binary path not being launchable by cmd.exe in some Windows setups.
- Fixed a potential issue when building cron task state by reusing the app-level conversation service.

## What's Changed
* feat(explorer): drag-to-transfer files across the project tree by @tcp404 in https://github.com/iOfficeAI/AionUi/pull/4090
* fix(markdown): render chat KaTeX formulas once in Shadow DOM by @tcp404 in https://github.com/iOfficeAI/AionUi/pull/4091
* feat(feedback): add optional contact email field by @tcp404 in https://github.com/iOfficeAI/AionUi/pull/4096
* fix(security): block path traversal in HTML renderer resource inlining by @tcp404 in https://github.com/iOfficeAI/AionUi/pull/4097
* fix(ui): make monochrome logos follow the theme color by @ChristianLuciani in https://github.com/iOfficeAI/AionUi/pull/3614
* fix(desktop): stop renderer launch-failed reload storm with backoff and throttled relaunch by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4100
* feat(explorer): new file/dir + grouped row menu by @tcp404 in https://github.com/iOfficeAI/AionUi/pull/4102
* fix(acp): render relative images in agent replies by @tcp404 in https://github.com/iOfficeAI/AionUi/pull/4103
* fix(markdown): keep inline markup at the heading's size inside chat headings by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4104
* refactor(media): read image root from ConversationContext by @tcp404 in https://github.com/iOfficeAI/AionUi/pull/4105
* chore: bump version to 2.1.59 by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4107

## New Contributors
* @ChristianLuciani made their first contribution in https://github.com/iOfficeAI/AionUi/pull/3614

**Full Changelog**: https://github.com/iOfficeAI/AionUi/compare/v2.1.58...v2.1.59

---

## 📦 Download

Installers are no longer published on GitHub. Download the latest build from the official website — https://www.aionui.com/

---

> **Source** [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) · `v2.1.59` · 2026-08-19 · [upstream release](https://github.com/iOfficeAI/AionUi/releases/tag/v2.1.59)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
