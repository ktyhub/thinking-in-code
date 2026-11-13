---
title: "AdminLTE v4.7.0"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.7.0"
published: "2026-08-18"
type: "minor"
lang: "en"
summary: "A print follow-up to 4.6.0, from @johnnyq again (#6108) — plus a printing bug that turned out to be worse than reported."
---

# AdminLTE v4.7.0

A print follow-up to 4.6.0, from [@johnnyq](https://github.com/johnnyq) again (#6108) — plus a printing bug that turned out to be worse than reported.

## Print a page as a document — `data-lte-print="plain"`

Two rules in AdminLTE's print stylesheet restyle content unconditionally: the target of every external link is printed after it, and buttons are outlined in black. Both are HTML5 Boilerplate conventions, sensible when you're printing a copy of a web page — and wrong for an invoice, quote or work order that goes to a customer, where `Pay online (https://pay.example.com/inv/12345?token=…)` is not what anyone wants on paper.

```html
<html lang="en" data-lte-print="plain">
```

That turns both off. Text still prints black on white, so nothing becomes unreadable, and it works on any container if only part of the page is the document:

```html
<div class="card" data-lte-print="plain">…the invoice…</div>
```

Setting it from JavaScript right before `window.print()` works too. Hide the chrome with Bootstrap's own `.d-print-none`, which has worked on the sidebar and header since 4.6.0.

Note `.d-print-none` could not have been the opt-out here: it *hides* an element, and these rules restyle elements that are meant to print.

## Fixes

- **Every sidebar item printed inside a black box.** The outline rule listed `.nav-link` alongside `.btn`, and the sidebar prints by design (since the 4.0.0 print fix), so a printed page came out with a black rectangle around all 85 menu items. The outline now applies to `.btn` only — a button still reads as a button on paper — while nav links keep the ink-saving black-on-transparent treatment and print as ordinary text.
- **The FAQ was giving the advice that caused #6107.** “How do I change the primary colour?” told people to override `--bs-primary` on `:root`, which is exactly what leaves `.btn-primary` blue. It now gives the two approaches that work: `$primary` in Sass, or `data-lte-primary` with the palette sheet.

## Documentation

New recipe: **Printing a page as a document** — the attribute, scoping it to part of a page, hiding chrome, and printing from a button.

## Install

```bash
npm install admin-lte@4.7.0
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@4.7.0/dist/css/adminlte.min.css" />
<script src="https://cdn.jsdelivr.net/npm/admin-lte@4.7.0/dist/js/adminlte.min.js"></script>
```

Full notes: [CHANGELOG](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#470---2026-08-18)

**Full Changelog**: https://github.com/ColorlibHQ/AdminLTE/compare/v4.6.0...v4.7.0

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.7.0` · 2026-08-18 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
