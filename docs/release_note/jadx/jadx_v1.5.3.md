---
title: "jadx v1.5.3"
project: "jadx"
repo: "skylot/jadx"
tag: "v1.5.3"
published: "2025-09-08"
type: "patch"
lang: "en"
summary: "[aab] Enhance AAB parsing (PR #2557) · [gui] New search options to search in text or binary resources (PR #2526) · [gui] Allow view and edit input smali files"
---

# jadx v1.5.3

### Features

- [aab] Enhance AAB parsing (PR #2557)
- [gui] New search options to search in text or binary resources (PR #2526)
- [gui] Allow view and edit input smali files
- [export] Use `compileSdkVersion` from manifest, update AGP to 8.10.1, other improvements (PR #2528)

### Bug Fixes

- Correct loading for plain text XML files (PR #2537)
- Correct hex format for negative numbers (#2531)
- Use 'dev.dirs' JNI implementation only on x86-64 (#2578)
- Use proper newlines when generating CFG (PR #2592)
- [cli] Improve memory usage in jadx-cli (#2524)
- [cli] Add missing '-XX:+IgnoreUnrecognizedVMOptions' JVM flag (#2554)
- [gui] Workaround for wrap layout repaint issue in search dialog (PR #2521)
- [gui] Remove duplicate class of Frida snippet (PR #2525)
- [gui] Use `var` instead `let` for class variable in Frida script (PR #2527)
- [gui] Prevent IndexOutOfBoundsException in MethodSearchProvider (PR #2542)
- [gui] Disable debugger action if project not loaded (#2547)
- [gui] Minor UI fixes (PR #2549)
- [gui] Resolve NPE on code area close
- [gui] Fix NullPointerException in copyAllSearchResults (#2580) (PR #2581)
- [gui] Various tabs related fixes (PR #2595)
- [zip] Allow to load zip with duplicate names in entries
- [gui] Improve menu icon, such as 'Select in Tree' and 'Go to AndroidManifest.xml' buttons (PR #2543)
- [export] Disable targetSDKVersion checks in AndroidStudio (PR #2533)
- [export] Add missing `ExpiringTargetSdkVersion` in #2533 (PR #2538)


**Full Changelog**: https://github.com/skylot/jadx/compare/v1.5.2...v1.5.3

### New Contributors
* @TheDauntless made their first contribution in https://github.com/skylot/jadx/pull/2527
* @akexorcist made their first contribution in https://github.com/skylot/jadx/pull/2528
* @MartLintz made their first contribution in https://github.com/skylot/jadx/pull/2538
* @TinyServal made their first contribution in https://github.com/skylot/jadx/pull/2549
* @LoyieKing made their first contribution in https://github.com/skylot/jadx/pull/2557
* @beaverxsheet made their first contribution in https://github.com/skylot/jadx/pull/2592

### Download files:
- [jadx-gui-1.5.3-with-jre-win.zip](https://github.com/skylot/jadx/releases/download/v1.5.3/jadx-gui-1.5.3-with-jre-win.zip) - jadx-gui with bundled JRE
- [jadx-gui-1.5.3-win.zip](https://github.com/skylot/jadx/releases/download/v1.5.3/jadx-gui-1.5.3-win.zip) - jadx-gui Windows executable (system JRE must be installed)
- [jadx-1.5.3.zip](https://github.com/skylot/jadx/releases/download/v1.5.3/jadx-1.5.3.zip) - cross-platform cli and gui bundle (system JRE must be installed)

For system JRE the latest version is always preferred, download at [oracle.com](https://www.oracle.com/java/technologies/downloads/#jdk21-windows)

---

> **Source** [skylot/jadx](https://github.com/skylot/jadx) · `v1.5.3` · 2025-09-08 · [upstream release](https://github.com/skylot/jadx/releases/tag/v1.5.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
