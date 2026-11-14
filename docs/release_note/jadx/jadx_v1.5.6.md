---
title: "jadx v1.5.6"
project: "jadx"
repo: "skylot/jadx"
tag: "v1.5.6"
published: "2026-07-10"
type: "patch"
lang: "en"
summary: "Reject absolute or path to CWD for zip entries · Sanitize all string values for gradle scripts on export · Add missing escaping on summary page"
---

# jadx v1.5.6

### Main features and fixes

Security fixes:
- Reject absolute or path to CWD for zip entries
- Sanitize all string values for gradle scripts on export
- Add missing escaping on summary page

Core:
- Use queue instead of recursion for type updates

GUI:
- Graph views, code pane sync, and more (PR #2784)
- Collapse single-child directory chains in resource tree (PR #2866)
- Handle pasted file lists in file chooser (PR #2876)
- Show simple message box for file exceptions (#2659)

API:
- Allow to create input category node even if no matching files found (#2806)
- New module/library for work with call graphs (#2890)

### All changes
<details>
  <summary>Click to expand</summary>

### Features

- [core] Graph views, code pane sync, and more (PR #2784)
- [core] Use queue instead of recursion for type updates
- [core] New module/library for work with call graphs (#2890)
- [gui] Add mimetype for desktop file
- [gui] Open single loaded class after load
- [gui] Add "copy reference" to context menu (PR #2863)
- [gui] Collapse single-child directory chains in resource tree (PR #2866)
- [gui] Handle pasted file lists in file chooser (PR #2876)
- [gui] Show simple message box for file exceptions (#2659)

### Bug Fixes

- [core] Insert generic casts for variable assigned from fields with known types (#2776)
- [core] Handle Kotlin 1.9+ $ENTRIES pattern in enum restoration (PR #2814)
- [core] Remove useless PHI for duplicate moves (#2813)
- [core] Support enum restore for constructor without args (#2821)
- [core] Handle null bounds in WindowLocation to prevent NPE on dialog dispose (PR #2826)
- [core] Stop type inference on exception (prevent endless loop)
- [core] Resolve class/package name conflicts on case-insensitive filesystems (PR #2828)
- [core] Use correct property for OS arch checks (#2830)
- [core] Use correct args copy/replace in wrapped insns (#2835)
- [core] Resolve minor decompilation issues (#2835)
- [core] Remove result in wrapped insntructions (#2835)
- [core] Limit ternary wrap to one level (#2844)
- [core] Disable ternary mod for duplicated blocks (#2844)
- [core] Harden XML parser in FileTypeDetector against XML bomb DoS (PR #2851)
- [core] Improve handler path check for regions
- [core] Limit 'if' region out block to current scope (#2791)
- [core] Build correct file path for class from default package (#2854)
- [core] Cover more situations for SwitchOverString (PR #2860)
- [core] Workaround for duplicated variables names index increment (#2868)
- [core] Resolve duplicated error attr in fallback codegen, allow to set whole attr list at once (#2842)
- [core] Keep all dimensions for anewarray of an array element type (PR #2887)
- [core] ImmutableList.lastIndexOf skipping index 0 (PR #2898)
- [api] Allow to create input category node even if no matching files found (#2806)
- [build] Set *nix executable permissions on start scripts (PR #2838)
- [cli] In 'progress' log mode show issues from input plugins (#2803)
- [gui] Update usage file data version (was changed in PR #2784)
- [gui] Resolve possible NPE during project data loading (#2794)
- [gui] Stop token process on `NULL` token in JadxTokenMaker (#2798)
- [gui] Use UI thread for scroll in code (#2798)
- [gui] Make the Split view checkbox correctly toggle between both modes (PR #2801)
- [gui] Use UI thread for refreshStackFrameList in debugger view (PR #2807)
- [gui] Use UI thread for adding logcat messages (#2811)
- [gui] Update zh_CN translation (PR #2812)
- [gui] Update zh_tw translation (PR #2818)
- [gui] Move scripts leftover code, save tree state on script run
- [gui] Resolve "launchScriptPath" is null
- [gui] Localize code cache mode labels (PR #2825)
- [gui] Use localized label for code cache preferences
- [gui] Add file end line feed for exported code (PR #2836)
- [gui] NullPointerException when changing line wrap mode (PR #2843)
- [gui] Ensure all fonts are 'composite' (#2856)
- [gui] Improve code tabs, sync and related code
- [gui] Improve dot graph viewer, CFG generation simplified
- [gui] Fix token type error leading to disables right-click context menu rename button (PR #2897)
- [gui] Verify files and show fix actions, save project inputs hash on load (#2659)
- [gui] Add missing escaping on summary page
- [gui] Workaround for CJK support in bundled fonts (#2856)
- [quark] Change from 'virtualenv' to 'venv' (PR #2879)
- [res] Use safe number parsing for android manifest, refactor params object (#2857)
- [script] Update imports in example scripts (#2795)
- [xapk] Support files in sub-dirs in xapk (#2834)

</details>


### New Contributors
* @gordon-f0 made their first contribution in https://github.com/skylot/jadx/pull/2784
* @HdShare made their first contribution in https://github.com/skylot/jadx/pull/2812
* @obus-globus made their first contribution in https://github.com/skylot/jadx/pull/2814
* @dartcv made their first contribution in https://github.com/skylot/jadx/pull/2818
* @peasoft made their first contribution in https://github.com/skylot/jadx/pull/2824
* @mango766 made their first contribution in https://github.com/skylot/jadx/pull/2826
* @johnwas made their first contribution in https://github.com/skylot/jadx/pull/2828
* @mbv06 made their first contribution in https://github.com/skylot/jadx/pull/2876
* @paraeee made their first contribution in https://github.com/skylot/jadx/pull/2879
* @vasiliy-mikhailov made their first contribution in https://github.com/skylot/jadx/pull/2898
* @amirdeljouyi made their first contribution in https://github.com/skylot/jadx/pull/2901
* @Plasion made their first contribution in https://github.com/skylot/jadx/pull/2897

**Full Changelog**: https://github.com/skylot/jadx/compare/v1.5.5...v1.5.6

### Download files:
- [jadx-gui-1.5.6-with-jre-win.zip](https://github.com/skylot/jadx/releases/download/v1.5.6/jadx-gui-1.5.6-with-jre-win.zip) - jadx-gui with bundled JRE
- [jadx-gui-1.5.6-win.zip](https://github.com/skylot/jadx/releases/download/v1.5.6/jadx-gui-1.5.6-win.zip) - jadx-gui Windows executable (system JRE must be installed)
- [jadx-1.5.6.zip](https://github.com/skylot/jadx/releases/download/v1.5.6/jadx-1.5.6.zip) - cross-platform cli and gui bundle (system JRE must be installed)

For system JRE the latest version is always preferred, download at [oracle.com](https://www.oracle.com/java/technologies/downloads/#jdk25-windows)

---

> **Source** [skylot/jadx](https://github.com/skylot/jadx) · `v1.5.6` · 2026-07-10 · [upstream release](https://github.com/skylot/jadx/releases/tag/v1.5.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
