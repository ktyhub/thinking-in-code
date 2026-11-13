---
title: "AdminLTE v4.6.0"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.6.0"
published: "2026-08-18"
type: "minor"
lang: "en"
summary: "Two reports from @johnnyq, both fixed — and the second one turned into the feature the AdminLTE 3 palettes were missing."
---

# AdminLTE v4.6.0

Two reports from [@johnnyq](https://github.com/johnnyq), both fixed — and the second one turned into the feature the AdminLTE 3 palettes were missing.

## Any colour can be your `primary` — `data-lte-primary` (#6107)

Bootstrap compiles `$primary` into its components: `.btn-primary` ships with `--bs-btn-bg: #0d6efd`, not `var(--bs-primary)`. Overriding the token repainted the utilities and left every button, pagination, checkbox and focus ring blue — which is why picking a skin looked half-applied.

Both colour sheets now rewire those components and point them at a palette colour with one attribute:

```html
<html lang="en" data-lte-primary="lightblue">
```

Nothing changes without the attribute, and it works on any container, so one page can carry more than one primary.

**What follows the colour:** `.btn-primary` and `.btn-outline-primary` (hover, active and disabled states shaded exactly as Bootstrap shades its own), `.btn-link`, links and `.link-primary`, the `--bs-primary` token trio, `.nav-pills`, `.pagination`, `.progress-bar`, `.list-group-item.active`, `.dropdown-item.active`, `.accordion`, `.form-control` / `.form-select` focus, checkboxes, radios, switches, `.form-range`, `--bs-focus-ring-color`, plus AdminLTE's `.card-primary`, `.direct-chat-primary` and `.toast-primary` — in both colour modes, with Bootstrap's dark-mode link tint.

- Bootstrap's own theme colours are presets too: `data-lte-primary="danger"` needs no palette colour.
- A brand colour outside the palette needs only `--bs-primary`; in Sass, `$lte-palette-custom: ("brand": #7a5af8)` generates a full preset, shades and contrast text included.
- Every skin preset now names the primary that goes with it, so applying **skin-blue** on [UI → Colors](https://adminlte.io/themes/v4/UI/colors.html) or [Theme Customize](https://adminlte.io/themes/v4/generate/theme.html) recolours the buttons too. Both pages gained a picker with a live preview.

Documented on the [Colors page](https://adminlte.io/themes/v4/docs/colors.html#making-one-of-them-your-primary).

## Fixes

- **`d-print-none` did nothing on the sidebar and the app wrapper** (#6106). The print layout fix from 4.0.0 set `display: grid !important` / `display: block !important` on those two elements and, being later in the cascade, beat Bootstrap's `.d-print-none`. Both rules are now scoped with `:not(.d-print-none)` — the print layout still applies by default, and the display utilities win where a page asks them to.
- **The skip link went invisible on hover.** `.skip-link:hover` painted `var(--bs-primary-emphasis)`, which Bootstrap does not define, so the background computed to transparent and left white text on the page background.

## Maintenance

Computed colours in both palette sheets are emitted as hex instead of Sass's `rgb(5.647%, 40.784%, 39.216%)` (cleancss leaves values inside custom properties alone), which pays for most of the new feature: `adminlte-colors.css` is 7.8 kB gzipped, `adminlte-colors-v3.css` 9.1 kB. **`adminlte.css` is unchanged.**

## Install

```bash
npm install admin-lte@4.6.0
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@4.6.0/dist/css/adminlte.min.css" />
<!-- optional: the extended palette, or adminlte-colors-v3.min.css for the AdminLTE 3 originals -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@4.6.0/dist/css/adminlte-colors.min.css" />
<script src="https://cdn.jsdelivr.net/npm/admin-lte@4.6.0/dist/js/adminlte.min.js"></script>
```

Full notes: [CHANGELOG](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#460---2026-08-18)

**Full Changelog**: https://github.com/ColorlibHQ/AdminLTE/compare/v4.5.0...v4.6.0

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.6.0` · 2026-08-18 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
