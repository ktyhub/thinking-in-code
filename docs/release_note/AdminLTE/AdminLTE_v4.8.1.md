---
title: "AdminLTE v4.8.1"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.8.1"
published: "2026-08-19"
type: "patch"
lang: "en"
summary: "A keyboard-accessibility fix on top of 4.8.0, reported by @johnnyq (#6109)."
---

# AdminLTE v4.8.1

A keyboard-accessibility fix on top of 4.8.0, reported by [@johnnyq](https://github.com/johnnyq) (#6109).

## Pagination lost its focus ring under `data-lte-primary`

Both palette sheets shipped a literal Sass variable name in their compiled output:

```css
[data-lte-primary] .pagination {
  --bs-pagination-focus-box-shadow: 0 0 0 $pagination-focus-box-shadow-width rgba(var(--bs-primary-rgb), 0.25);
}
```

Sass does **not** evaluate `$variables` inside a custom property value — it emits them verbatim rather than failing — so the typo compiled cleanly, reached the browser as text, and made the declaration invalid. `--bs-pagination-focus-box-shadow` then resolved to nothing and keyboard focus on `.page-link` was invisible wherever `data-lte-primary` was in use. Introduced in 4.6.0.

The variable it named never existed in Bootstrap either (the pagination focus shadow comes from `$focus-ring-box-shadow`), so interpolating it would not have compiled. The value is now built from the focus-ring tokens and reuses the `--bs-focus-ring-color` the sheet already sets, so the ring follows the theme colour:

```css
--bs-pagination-focus-box-shadow: 0 0 0 0.25rem var(--bs-focus-ring-color);
```

A unit test now scans the compiled output of all three sheets for unresolved Sass variables. Compilation cannot catch this class of typo, which is exactly why it shipped — this was the only instance in the repo, and `adminlte.css` was never affected.

## Install

```bash
npm install admin-lte@4.8.1
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@4.8.1/dist/css/adminlte.min.css" />
<script src="https://cdn.jsdelivr.net/npm/admin-lte@4.8.1/dist/js/adminlte.min.js"></script>
```

Full notes: [CHANGELOG](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#481---2026-08-19)

**Full Changelog**: https://github.com/ColorlibHQ/AdminLTE/compare/v4.8.0...v4.8.1

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.8.1` · 2026-08-19 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.8.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
