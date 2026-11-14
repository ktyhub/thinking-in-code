---
title: "jadx v1.4.7"
project: "jadx"
repo: "skylot/jadx"
tag: "v1.4.7"
published: "2023-04-20"
type: "patch"
lang: "en"
summary: "[core] Inline lambdas by instance field (#1800) · [plugins] Allow to load classes using input stream or byte array in jadx-input plugin (#1457)"
---

# jadx v1.4.7

### Features

- [core] Inline lambdas by instance field (#1800)
- [plugins] Allow to load classes using input stream or byte array in jadx-input plugin (#1457)


### Bug Fixes

- [core] Restore missing type parameter declarations (#1800)
- [core] Filter invalid chars in app name for gradle export (PR #1813)
- [core] Correct args shift for instance invoke-custom (#1816)
- [core] Additional checks to forbid inline of null consts (#1828)
- [core] Use strict patterns for synthetic methods inline (#1829)
- [res] Resolve manifest decoding error `Expected strings start` (#1797)(PR #1798)
- [res] Handle RES_TABLE_TYPE_OVERLAY (#1748) (PR #1804)
- [res] Parsing of sparse RES_TABLE_TYPE_TYPE and RES_TABLE_TYPE_STAGED_ALIAS chunks (#1806 #1803)(PR #1807)
- [res] Resolve int hex attributes
- [res] Resolve custom attributes
- [res] Resolve declare-styleable atrributes
- [res] Set empty parent for styles without a parent, remove duplicated code
- [xml] Use parent attribute only for styles (PR #1815)
- [gui] Search constant fields usage in all classes (#1801)
- [gui] Redirect jump from search for inlined classes
- [gui] Show skipped resources count during search (#1808)
- [gui] Update Messages_zh_CN.properties (PR #1811)
- [debugger] Process UI updates in correct thread (#1796)
- [cli] Make enum CLI arguments match documented format (PR #1787)

**Full Changelog**: https://github.com/skylot/jadx/compare/v1.4.6...v1.4.7

### Download files:
- [jadx-gui-1.4.7-with-jre-win.zip](https://github.com/skylot/jadx/releases/download/v1.4.7/jadx-gui-1.4.7-with-jre-win.zip) - jadx-gui with bundled JRE
- [jadx-gui-1.4.7-no-jre-win.exe](https://github.com/skylot/jadx/releases/download/v1.4.7/jadx-gui-1.4.7-no-jre-win.exe) - jadx-gui single exe (system JRE must be installed)
- [jadx-1.4.7.zip](https://github.com/skylot/jadx/releases/download/v1.4.7/jadx-1.4.7.zip) - cross-platform cli and gui bundle (system JRE must be installed)

For system JRE the latest version is always preferred, download at [oracle.com](https://www.oracle.com/java/technologies/downloads/#jdk20-windows)

---

> **Source** [skylot/jadx](https://github.com/skylot/jadx) · `v1.4.7` · 2023-04-20 · [upstream release](https://github.com/skylot/jadx/releases/tag/v1.4.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
