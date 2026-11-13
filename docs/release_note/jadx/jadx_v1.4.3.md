---
title: "jadx v1.4.3"
project: "jadx"
repo: "skylot/jadx"
tag: "v1.4.3"
published: "2022-07-20"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/skylot/jadx/compare/v1.4.2...v1.4.3"
---

# jadx v1.4.3

## Bug Fixes
- [gui] Check user renames (#1557)
- [gui] Allow to use empty name to reset rename
- [gui] Ignore/limit waiting of canceled search task (#1568)
- [gui] Forbid rename method args in fallback mode (#1558)
- [gui] Set current dir directly in file chooser constructor (#1553)
- [gui] IndexOutOfBoundsException in JumpManager (#1576) (PR #1577)
- [gui] QuarkReport data validation added and other minor improvements (PR #1556)
- [gui] Resolve payload offset for switch insns in debug smali code (#1575)
- [gui] Ignore errors on code area dispose (#1545)
- Check synthetic methods before remove/inline (#1560)
- Correct inline/merge with overriden bridge method (#1580)
- Add more checks before remove or rename enum methods (#1572)
- Handle parent of inlined/moved classes (#1578)
- Update deps and fix proto resource loading (AAB) (#1129)
- Ignore anonymous classes in enclosing node search (#1580)
- Save classes with code generation error into cache (#1568)
- Resolve possible decompilation double execution
- Better dominators algorithms

**Full Changelog**: https://github.com/skylot/jadx/compare/v1.4.2...v1.4.3

#### Download files description:
- jadx-gui-1.4.3-with-jre-win.zip - jadx-gui with bundled JRE
- jadx-gui-1.4.3-no-jre-win.exe - jadx-gui single exe (system JRE must be installed)
- jadx-1.4.3.zip - cross-platform cli and gui bundle (system JRE must be installed)

For system JRE the latest version is always preferred, download at [oracle.com](https://www.oracle.com/java/technologies/downloads/#jdk18-windows)

---

> **Source** [skylot/jadx](https://github.com/skylot/jadx) · `v1.4.3` · 2022-07-20 · [upstream release](https://github.com/skylot/jadx/releases/tag/v1.4.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
