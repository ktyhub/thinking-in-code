---
title: "Stirling-PDF_0.33.1 Docker hub move to stirlingtools v2.14.1"
project: "Stirling-PDF_0.33.1 Docker hub move to stirlingtools"
repo: "Stirling-Tools/Stirling-PDF"
tag: "v2.14.1"
published: "2026-07-07"
type: "patch"
lang: "en"
summary: "Quick hotfix release to get out some bug fixes including:"
---

# Stirling-PDF_0.33.1 Docker hub move to stirlingtools v2.14.1

Quick hotfix release to get out some bug fixes including:
- Stopping posthog prematurely loading (Note no data was received our end by this however posthog might have tried it's own calls during this time)
- Cert sign not working for certain installations
- Rearrange pages bug causing tool to fail

As well as a new settings menu page to show all licenses for frontend and backend 3rd party dependencies 

## What's Changed

### Bug Fixes
* fix(frontend): Stop posthog loading before opt flags are read by @Ludy87 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6812
* Fix rearrange-pages DUPLICATE producing shared page nodes (pypdf cyclic-references CI break) by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/6851
* Fix tooltip positioning on Add Page Numbers by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6885
* Disable update check and notification in SaaS mode by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/6863
* Fix missing app icon on Linux/Wayland by @LFd3v in https://github.com/Stirling-Tools/Stirling-PDF/pull/6875
* Fix cert sign not showing under certain instances by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/6908


### Enhancements
* feat(ui): add dedicated third-party license sections to settings by @Ludy87 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6820


### Other
* Set App version to v2.14.1 by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/6891

**Full Changelog**: https://github.com/Stirling-Tools/Stirling-PDF/compare/v2.14.0...v2.14.1

---

> **Source** [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) · `v2.14.1` · 2026-07-07 · [upstream release](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v2.14.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
