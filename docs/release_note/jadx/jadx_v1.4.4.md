---
title: "jadx v1.4.4"
project: "jadx"
repo: "skylot/jadx"
tag: "v1.4.4"
published: "2022-08-20"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/skylot/jadx/compare/v1.4.3...v1.4.4"
---

# jadx v1.4.4

### Features
- [gui] Add manual search, stop and sort actions to search dialog (#1600)
- [gui] Save project search history
- [gui] Show start page on jadx open
- [gui] Add Brazilian Portuguese translation (PR #1596)
- Select better resource name (#1581)
- Add option to disable finally block extraction (#1592)

### Bug Fixes
- Resolve inherited method to use correct alias (#1582)
- Check variables before merge in finally block (#1592)
- Checks for field init reorder (#1599)
- Handle empty endless loop (#1611)
- Improve top block search for try/catch (#1633)
- UnsupportedOperationException on adding a field (#1645)(PR #1646)
- Don't inline anonymous in self inner class (#1645)
- [gui] Improve search dialog performance
- [gui] Improve resources search (#1648)
- [gui] Improve log viewer dialog (#1311)(PR #1649)
- [gui] Add constructors usage into class usage (#1591)
- [gui] Sort resources by deobfuscated name (#1595)(PR #1598)
- [gui] Correct Frida snippet for constructor (PR #1605)
- [gui] Fix broken FileDialog by using legacy sort (#1628)(PR #1630)
- [gui] Handle possible classes overlap in disk cache (#1633)
- [gui] Disable actions if files not loaded (#1644)
- [debugger] Resolve NPE in adb device viewer (#1585) (PR #1586)
- [res] XML "null" decoding (#1583)(PR #1594)

**Full Changelog**: https://github.com/skylot/jadx/compare/v1.4.3...v1.4.4

#### Download files description:
- jadx-gui-1.4.4-with-jre-win.zip - jadx-gui with bundled JRE
- jadx-gui-1.4.4-no-jre-win.exe - jadx-gui single exe (system JRE must be installed)
- jadx-1.4.4.zip - cross-platform cli and gui bundle (system JRE must be installed)

For system JRE the latest version is always preferred, download at [oracle.com](https://www.oracle.com/java/technologies/downloads/#jdk18-windows)

---

> **Source** [skylot/jadx](https://github.com/skylot/jadx) · `v1.4.4` · 2022-08-20 · [upstream release](https://github.com/skylot/jadx/releases/tag/v1.4.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
