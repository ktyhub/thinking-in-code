---
title: "AionUi v2.1.58"
project: "AionUi"
repo: "iOfficeAI/AionUi"
tag: "v2.1.58"
version: "v2.1.58"
published: "2026-08-18"
type: "patch"
lang: "en"
---

# AionUi v2.1.58

## Highlights

### Internationalization & Right-to-Left (RTL) Support
- Persian (fa-IR) now renders with a full right-to-left layout — mirrored icons, panels, and reading direction across the entire app.
- Numbers, dates, and times now format according to the language you chose inside AionUi, not your OS locale — no more mismatched currency symbols or unexpected date orders.
- Filled in dozens of missing translations across French, German, Spanish, Portuguese and more; component strings in dropdowns and dialogs now render correctly in 11 of 13 supported languages instead of 5.
- Counted text (e.g. "1 file changed") now uses the correct plural form for each language, including Russian and Ukrainian's three-way plural rules.
- Scheduled task titles and file sizes now use locale-aware date and number formats instead of a hardcoded format.

### Custom Theming
- Themes can now define a validated set of color tokens for light and dark mode, and a new custom-theme guide walks you through building your own. Try the bundled Neo-Brutalism example under Settings → Appearance.

### Markdown Preview: Math Formulas
- Multi-line LaTeX/KaTeX math blocks in the file preview viewer no longer break apart mid-formula — math now renders cleanly in one piece.

### Team Mode Improvements
- Added a model-refresh button next to the model picker, so a model switch made elsewhere is reflected immediately in the session.
- Added a runtime-restart control that rebuilds an agent's process to pick up configuration changes while keeping the chat history.
- Team leads can now clear a member's context with `/clear`, and read all of a member's queued messages together instead of being interrupted one message at a time.
- Team members now get their own bound MCP tools, matching regular sessions.
- A member's selected model now persists, and leads can interrupt a member's current turn and immediately send a new instruction.
- Fixed team members occasionally getting stuck in a "processing" state.

### Engine Updates (AionCore v0.1.69)
- Claude tool-call steps are now labeled by what they actually do, making it easier to follow along in the conversation as tools run.

### Bug Fixes
- Fixed AionUi's internal `PREBUILDS_ONLY` setting leaking into agent subprocesses, which could crash third-party CLIs (such as cursor-agent) with a "No native build was found" error on startup.
- Fixed inconsistent send/draft action button colors in dark mode and removed a stray background artifact around the send button.
- Fixed directory paths in system settings being misaligned for left-to-right languages after a previous RTL fix.

## What's Changed
* fix(i18n): format numbers and dates against the app language, not the host locale by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4068
* fix(i18n): register missing Arco locales, tray French, stale title, hardcoded punctuation and units by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4071
* feat(i18n): right-to-left layout for Persian (fa-IR) by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4069
* fix(i18n): backfill all missing translations and wire webFsPicker keys by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4072
* fix(i18n): adopt i18next plural forms for count-bearing strings by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4074
* fix(i18n): locale-aware cron titles and byte sizes, Traditional Chinese mapping by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4075
* fix(i18n): RTL polish pass — LTR paths and file names, shorthand paddings, mirrored chevrons by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4077
* feat(team): runtime restart controls, model refresh button and team UX fixes by @baibai-git in https://github.com/iOfficeAI/AionUi/pull/3893
* fix(web-host): stop leaking PREBUILDS_ONLY into aioncore agent subprocesses by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4078
* chore(docs): update WeChat group QR code to wx-21 by @IceyLiu in https://github.com/iOfficeAI/AionUi/pull/4080
* feat(theme): activate structured token channel and add custom-theme guide by @tcp404 in https://github.com/iOfficeAI/AionUi/pull/4081
* fix(i18n): align directory paths to the page direction, not hardcoded end by @kaizhou-lab in https://github.com/iOfficeAI/AionUi/pull/4086
* feat(renderer): add math formula rendering support for markdown viewer by @heartacker in https://github.com/iOfficeAI/AionUi/pull/4079
* fix(chat): align compose actions and draft queue draining by @IceyLiu in https://github.com/iOfficeAI/AionUi/pull/4082
* chore: bump version to 2.1.58 by @piorpua in https://github.com/iOfficeAI/AionUi/pull/4089

## New Contributors
* @baibai-git made their first contribution in https://github.com/iOfficeAI/AionUi/pull/3893
* @heartacker made their first contribution in https://github.com/iOfficeAI/AionUi/pull/4079

**Full Changelog**: https://github.com/iOfficeAI/AionUi/compare/v2.1.57...v2.1.58

---

## 📦 Download

Installers are no longer published on GitHub. Download the latest build from the official website — https://www.aionui.com/

---

> **Source** [iOfficeAI/AionUi](https://github.com/iOfficeAI/AionUi) · `v2.1.58` · 2026-08-18 · [upstream release](https://github.com/iOfficeAI/AionUi/releases/tag/v2.1.58)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
