---
title: "AdminLTE v4.9.0"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.9.0"
published: "2026-08-26"
type: "minor"
lang: "en"
summary: "A printed page is a document again — the header, sidebar and footer no longer print."
---

# AdminLTE v4.9.0

### Changed

**A printed page is a document again — the header, sidebar and footer no longer print.**

AdminLTE 3 left all three off the paper. v4 printed them, and on a page that prints as a real document the result was the invoice in #6113: 200px of every sheet spent on a menu the reader cannot click, the invoice squeezed into what was left — its own table wrapping "Pro plan subscription" across three lines — and the sidebar's 85 menu items running past the foot of the first sheet. A one-page invoice printed as two, the second all but empty.

The content now gets the full width of the paper. Nothing else about the print styles changed: link targets are still printed after external links, buttons still keep an outline, everything is still black on white.

Both ways back are still there, and both are now honoured properly:

```html
<!-- print the whole shell, as 4.0–4.8 did -->
<html lang="en" data-lte-print="app">
```

```html
<!-- or bring back one piece: .d-print-flex for the header (it is a navbar),
     .d-print-block for the sidebar and footer -->
<aside class="app-sidebar bg-body-secondary shadow d-print-block">…</aside>
```

`.d-print-none` still hides anything you don't want on paper, in either mode. `data-lte-print` is now matched per token, so `data-lte-print="plain app"` sets both; `data-lte-print="plain"` is unaffected.

Reported by @johnnyq.

### Fixed

**The layout kept its viewport-sized dimensions in print (#6113).**

`.app-wrapper` carries `min-height: 100vh` and `max-width: 100vw`, and neither was cleared for print — even though the print block deliberately rewrites that same element's grid. Paper has no viewport to fill: the wrapper reserved a full sheet however short the page was, which is why the printed invoice put its footer at the foot of a sheet of empty grey with the content in the top third, and why anything following the wrapper opened a new page. Both are now reset in print, along with the `max-width: 100vw` on the header, main and footer.

**The print block set `display` on elements it did not need to.**

Forcing `display: block` on `.app-sidebar` is what made `.d-print-none` unable to hide it before 4.6.0, and the same shape would have made `.d-print-*` unable to show it now. Printing the shell is a matter of *not* hiding it, so the rules that hide it are scoped out instead, and nothing in the print block forces a `display` value on the header, sidebar or footer any more.

`adminlte.js` is untouched; `adminlte.css` grows by 64 bytes gzipped.

```bash
npm install admin-lte@4.9.0
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@4.9.0/dist/css/adminlte.min.css" />
<script src="https://cdn.jsdelivr.net/npm/admin-lte@4.9.0/dist/js/adminlte.min.js"></script>
```

Full notes: [CHANGELOG](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#490---2026-08-26)


**Full Changelog**: https://github.com/ColorlibHQ/AdminLTE/compare/v4.8.5...v4.9.0

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.9.0` · 2026-08-26 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
