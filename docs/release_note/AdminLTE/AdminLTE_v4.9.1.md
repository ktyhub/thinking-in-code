---
title: "AdminLTE v4.9.1"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.9.1"
published: "2026-08-26"
type: "patch"
lang: "en"
summary: "A page whose content ended near a sheet boundary still printed one blank sheet."
---

# AdminLTE v4.9.1

### Fixed

**A page whose content ended near a sheet boundary still printed one blank sheet.**

`.app-main` carries `padding-bottom: $grid-gutter-width * .5` — breathing room above the fold on screen, trailing whitespace on paper. 12px of it was enough to push a page that otherwise ended 1px inside the second sheet onto a third, empty one. In the demo set `UI/ribbons.html` was the case: three sheets for two sheets of content.

The padding is now cleared in print, along with the negative `margin-bottom` on `.app-content-bottom-area` that exists only to cancel it — zeroing one without the other would have pulled the bottom area up over the content.

This is the last of what #6113 reported. Every one of the 90 pages in `dist/` was printed to PDF and its final sheet checked: none prints a blank trailing sheet. One page changes page count; nothing else moves.

If you are coming from 4.8.x, the headline change is in [4.9.0](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.9.0) — the header, sidebar and footer no longer print, and `data-lte-print="app"` brings them back.

```bash
npm install admin-lte@4.9.1
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@4.9.1/dist/css/adminlte.min.css" />
<script src="https://cdn.jsdelivr.net/npm/admin-lte@4.9.1/dist/js/adminlte.min.js"></script>
```

Full notes: [CHANGELOG](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#491---2026-08-26)


**Full Changelog**: https://github.com/ColorlibHQ/AdminLTE/compare/v4.9.0...v4.9.1

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.9.1` · 2026-08-26 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.9.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
