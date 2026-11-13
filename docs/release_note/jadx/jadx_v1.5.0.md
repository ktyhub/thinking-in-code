---
title: "jadx v1.5.0"
project: "jadx"
repo: "skylot/jadx"
tag: "v1.5.0"
published: "2024-04-20"
type: "minor"
lang: "en"
summary: "Both features in preview state, API is stable but limited (especially in UI customizations)"
---

# jadx v1.5.0

### Main features

- Added support for:
  - Scripting, uses Kotlin, check [short guide](https://github.com/skylot/jadx/wiki/Jadx-scripts-guide)
  - External plugins, [guide](https://github.com/skylot/jadx/wiki/Jadx-plugins-guide)
  Both features in preview state, API is stable but limited (especially in UI customizations)
- Jadx GUI:
  - Improved code cache, allow use common directory, view/delete exist caches in preferences
  - jadx-gui configuration moved into plain json files in system config directory
  - Allow to set custom shortcuts
  - Tabs drag and drop reorder support
  - Hex-viewer for binary asset files
  - Add 'go to main activity' action
- Other:
  - Java 11+ is required now
  - Parse and use Kotlin metadata for renames
  - Add support for XApk files
  - Allow to move class to another package
  - Support jsr/ret opcodes (java-input) 
- A lot of bug fixes ... and regressions :rofl:

**Full Changelog**: https://github.com/skylot/jadx/compare/v1.4.7...v1.5.0

### Download files:
- [jadx-gui-1.5.0-with-jre-win.zip](https://github.com/skylot/jadx/releases/download/v1.5.0/jadx-gui-1.5.0-with-jre-win.zip) - jadx-gui with bundled JRE
- [jadx-gui-1.5.0-no-jre-win.exe](https://github.com/skylot/jadx/releases/download/v1.5.0/jadx-gui-1.5.0-no-jre-win.exe) - jadx-gui single exe (system JRE must be installed)
- [jadx-1.5.0.zip](https://github.com/skylot/jadx/releases/download/v1.5.0/jadx-1.5.0.zip) - cross-platform cli and gui bundle (system JRE must be installed)

For system JRE the latest version is always preferred, Java 11+ is required, download at [oracle.com](https://www.oracle.com/java/technologies/downloads/#jdk21-windows)

---

> **Source** [skylot/jadx](https://github.com/skylot/jadx) · `v1.5.0` · 2024-04-20 · [upstream release](https://github.com/skylot/jadx/releases/tag/v1.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
