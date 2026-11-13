---
title: "AdminLTE v4.8.0"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.8.0"
published: "2026-08-19"
type: "minor"
lang: "en"
summary: "@johnnyq measured the AdminLTE 3 palette against WCAG AA and found eight colours that miss it with the text v3 assigns them (#6110). The values stay exactly as they were — there is now a switch for the text."
---

# AdminLTE v4.8.0

[@johnnyq](https://github.com/johnnyq) measured the AdminLTE 3 palette against WCAG AA and found eight colours that miss it with the text v3 assigns them (#6110). The values stay exactly as they were — there is now a switch for the text.

## `data-lte-contrast="aa"`

```html
<html lang="en" data-lte-contrast="aa">
```

Flips the text on the eight colours whose assigned ink falls short, leaving every background byte-identical:

| Colour | Default (v3 rule) | With `aa` |
|---|---|---|
| `teal` `#20c997` | white — **2.13:1** | black — 9.86:1 |
| `cyan` `#17a2b8` | white — **3.04:1** | black — 6.90:1 |
| `green` `#28a745` | white — **3.13:1** | black — 6.70:1 |
| `olive` `#3d9970` | white — **3.51:1** | black — 5.99:1 |
| `lightblue` `#3c8dbc` | white — **3.67:1** | black — 5.73:1 |
| `fuchsia` `#f012be` | white — **3.79:1** | black — 5.54:1 |
| `pink` `#e83e8c` | white — **3.82:1** | black — 5.50:1 |
| `blue` `#007bff` | white — **3.98:1** | black — 5.28:1 |

It covers everywhere the palette paints text on its own colour — `.text-bg-*`, `.bg-gradient-*`, `.card-*` headers, `.direct-chat-*`, and the button, badge and pill text that `data-lte-primary` produces, which is where this mattered most: one attribute puts a colour on buttons, pills, pagination and list groups at once.

Three details worth knowing:

- **It has to be true black.** AdminLTE 3's own dark ink `#1f2d3d` clears 4.5:1 on only *two* of the eight. The colours that already carry dark text — `lime`, `orange`, `yellow` — keep `#1f2d3d` and are left alone.
- **A flipped sidebar or header should pair with `data-bs-theme="light"`** so its nav links follow the heading. The demo pages do that for you when the switch is on.
- **It costs the designed palette nothing.** Rules are emitted per colour only where the sheet's own rule falls short, and every colour in the 4.4 palette clears AA with white by construction — so `adminlte-colors.css` emits not one byte for this and the attribute is safe to leave in your markup either way.

**UI → Colors** and **Theme Customize** gained a toggle, and the [Colors page](https://docs.adminlte.io/html/colors) documents it.

## Fixed

- **`data-lte-primary="info"` gave white text on cyan with the v3 sheet loaded.** The presets applied the active sheet's contrast rule to Bootstrap's own theme colours, and v3's YIQ test puts `#0dcaf0` at 149.8 against a threshold of 150 — a tenth of a point from dark text — so it produced 1.96:1 while `.btn-info` on the same page stayed black. Bootstrap's theme colours now keep Bootstrap's own contrast rule; the palette colours keep the sheet's.

## Install

```bash
npm install admin-lte@4.8.0
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@4.8.0/dist/css/adminlte.min.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@4.8.0/dist/css/adminlte-colors-v3.min.css" />
<script src="https://cdn.jsdelivr.net/npm/admin-lte@4.8.0/dist/js/adminlte.min.js"></script>
```

Full notes: [CHANGELOG](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#480---2026-08-19)

**Full Changelog**: https://github.com/ColorlibHQ/AdminLTE/compare/v4.7.0...v4.8.0

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.8.0` · 2026-08-19 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
