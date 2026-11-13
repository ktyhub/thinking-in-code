---
title: "AdminLTE v4.8.3"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.8.3"
published: "2026-08-19"
type: "patch"
lang: "en"
summary: "Every page scrolled sideways on a phone."
---

# AdminLTE v4.8.3

### Fixed

**Every page scrolled sideways on a phone.**

At 390px the header's right-hand item row — messages, notifications, fullscreen, user menu — is a few pixels wider than the viewport at Bootstrap's default `1rem` nav-link padding. `document.scrollWidth` measured **412 against a 390 `clientWidth` on all 90 demo pages**: a horizontal scrollbar on every screen, on every AdminLTE 4 page.

Below `sm` the header now halves `--bs-navbar-nav-link-padding-x`. From `sm` up nothing changes — the user menu keeps its 182px width and its label. Measured 412/390 before and 390/390 after; desktop unaffected.

If you check this yourself: compare `scrollWidth` with **`clientWidth`**, not `window.innerWidth`. The layout viewport widens to match the overflow, so the `innerWidth` comparison silently passes — which is how this survived this long.

```bash
npm install admin-lte@4.8.3
```

Full notes: [CHANGELOG](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#483---2026-08-19)

**Full Changelog**: https://github.com/ColorlibHQ/AdminLTE/compare/v4.8.2...v4.8.3

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.8.3` · 2026-08-19 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.8.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
