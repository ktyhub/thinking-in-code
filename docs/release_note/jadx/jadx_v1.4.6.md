---
title: "jadx v1.4.6"
project: "jadx"
repo: "skylot/jadx"
tag: "v1.4.6"
published: "2023-02-20"
type: "patch"
lang: "en"
summary: "[core] Support polymorphic invoke (#384)(#1777) · [gui] Add alternative file open dialog (#1709) · [gui] Add native libs info to summary (#1717) · [gui] Add Russian Translation (PR #1744)"
---

# jadx v1.4.6

### Features

- [core] Support polymorphic invoke (#384)(#1777)
- [gui] Add alternative file open dialog (#1709)
- [gui] Add native libs info to summary (#1717)
- [gui] Add Russian Translation (PR #1744)
- [gui] Added keyboard shortcut ctrl+w to close tab (#1765)(PR #1766)

### Bug Fixes

- [core] Check full signature for search method override (#1743)
- [core] Escape special characters in AAB resources (PR #1747)
- [core] Allow `altMetafactory` method in lambda call site (#1760)
- [core] Resolve JavaNode caching issues (#1775)
- [core] Output unknown `invoke-custom` as polymorphic call (#1760)
- [core] Process manifest before other resources (#1740)
- [gui] Disable `shell folders` in file open dialog (#1709)
- [gui] Correct html disabling in search results
- [gui] Try to handle exception in `RSTA.getPreferredSize()` (#1712)
- [gui] Show all code sources in summary (remove dex filter) (#1716)
- [gui] Change callMethodName of constructors in Frida action (#1714)(PR #1715)
- [gui] Add template for constructor and void methods to Frida snippet (#1714)
- [gui] Hi-dpi main window initial size (#1728)(PR #1729)
- [gui] Correct html render in comments search results
- [gui] Resolve exception in smali method writer (#1739)(PR #1745)
- [gui] Improve smali disasm method param write (#1739)
- [gui] Make `bytecode` output closer to smali (#1739)
- [gui] Quick fix for duplicate/overlapping logcat windows (#1752)(PR #1761)
- [gui] Allow html in JVariable to render renaming of variables correctly (#1769)(PR #1770)
- [gui] Print the renamed function name in a frida snippet log (#1772)(PR #1773)
- [gui] Split tabs loading to prevent ui dead lock

### New Contributors
* @daMatz made their first contribution in https://github.com/skylot/jadx/pull/1715
* @SnowVolf made their first contribution in https://github.com/skylot/jadx/pull/1744
* @zach-snell made their first contribution in https://github.com/skylot/jadx/pull/1761
* @Ran-Naor made their first contribution in https://github.com/skylot/jadx/pull/1766

**Full Changelog**: https://github.com/skylot/jadx/compare/v1.4.5...v1.4.6

### Download files:
- [jadx-gui-1.4.6-with-jre-win.zip](https://github.com/skylot/jadx/releases/download/v1.4.6/jadx-gui-1.4.6-with-jre-win.zip) - jadx-gui with bundled JRE
- [jadx-gui-1.4.6-no-jre-win.exe](https://github.com/skylot/jadx/releases/download/v1.4.6/jadx-gui-1.4.6-no-jre-win.exe) - jadx-gui single exe (system JRE must be installed)
- [jadx-1.4.6.zip](https://github.com/skylot/jadx/releases/download/v1.4.6/jadx-1.4.6.zip) - cross-platform cli and gui bundle (system JRE must be installed)

For system JRE the latest version is always preferred, download at [oracle.com](https://www.oracle.com/java/technologies/downloads/#jdk19-windows)

---

> **Source** [skylot/jadx](https://github.com/skylot/jadx) · `v1.4.6` · 2023-02-20 · [upstream release](https://github.com/skylot/jadx/releases/tag/v1.4.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
