---
title: "AdminLTE v4.8.4"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.8.4"
published: "2026-08-19"
type: "patch"
lang: "en"
summary: "Reference tables on the documentation pages pushed the page sideways on a phone."
---

# AdminLTE v4.8.4

### Fixed

**Reference tables on the documentation pages pushed the page sideways on a phone.**

Markdown pipe-tables render as a bare `<table>` with no scroll container, so anything wider than about three columns overflowed the viewport — 265px of it on the Colors page at 390px wide, right after 4.8.3 fixed the header's own overflow.

They are now wrapped in `.table-responsive` with a tab stop, exactly like the hand-written tables beside them: the table scrolls inside the content column, and the scrollable region stays keyboard-reachable. Desktop layout is unchanged.

Only affects the documentation pages shipped in `dist/docs/`; `adminlte.css` and `adminlte.js` are untouched.

```bash
npm install admin-lte@4.8.4
```

Full notes: [CHANGELOG](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#484---2026-08-19)

**Full Changelog**: https://github.com/ColorlibHQ/AdminLTE/compare/v4.8.3...v4.8.4

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.8.4` · 2026-08-19 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.8.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
