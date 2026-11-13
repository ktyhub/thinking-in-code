---
title: "bootstrap v5.3.3"
project: "bootstrap"
repo: "twbs/bootstrap"
tag: "v5.3.3"
published: "2024-02-20"
type: "patch"
lang: "en"
---

# bootstrap v5.3.3

## Highlights

- Fixed a breaking change introduced with color modes where it was required to manually import `variables-dark.scss` when building Bootstrap with Sass. Now, `_variables.scss` will automatically import `_variables-dark.scss`. If you were already importing `_variables-dark.scss` manually, you should keep doing it as it won't break anything and will be the way to go in v6.
- Fixed a regression in the selector engine that wasn't able to handle multiple IDs anymore.

## Color modes

- Badges now use the `.text-bg-*` text utilities to be certain that the text is always readable (especially when the customized colors are different in light and dark modes).
- Fixed our `color-modes.js` script to handle the case where the OS is set to light mode and the auto color mode is used on the website. If you copied the script from our docs, you should apply [this change](https://github.com/twbs/bootstrap/commit/73e1dcf43eff8371dde52ce41bd1d9fdc2b47d1f) to your own script.
- Fixed color schemes description in the color modes documentation to show that `color-scheme()` only accept `light` and `dark` values as parameters.

## Miscellaneous

- Allowed `<dl>`, `<dt>` and `<dd>` in the sanitizer.
- Dropped evenly items distribution for modal and offcanvas headers.
- Fixed the accordion CSS selectors to avoid inheritance issues when nesting accordions.
- Fixed the focus box-shadow for the validation stated form controls.
- Fixed the focus ring on focused checked buttons.
- Fixed the product example mobile navbar toggler.
- Changed the RTL processing of carousel control icons.

---

## 🎨 CSS

- #37508: Use child combinators to avoid inheriting parent accordion's flush styles
- #38719: Fix focus box-shadow for validation stated form-controls
- #38884: fix border-radius on radio-switch
- #39294: Tests: update navbar in visual modal test
- #39373: refactor css: modal and offcanvas header spacing
- #39380: Fix Sass compilation breaking change in v5.3
- #39387: docs: fix typo
- #39411: Optimize the accordion icon
- #39497: Fix a typo
- #39536: Changed RTL processing of carousel control icons
- #39560: Drop `--bs-accordion-btn-focus-border-color` and deprecate `$accordion-button-focus-border-color`
- #39595: CSS: Fix the focus ring on focused checked buttons

## ☕️ JavaScript

- #39201: Selector Engine: fix multiple IDs
- #39224: Fix edge case in `color-mode.js`
- #39376: Allow `dl`, `dt` and `dd` in sanitizer

## 📖 Docs

- #39200: Typo Fix
- #39214: Doc: use `.text-bg-{color}` for all badges
- #39246: Docs: fix for example code blocks have unnecessary 30px right-margin
- #39249: Doc: consistent rendering of 'Heads up!' callouts
- #39281: Fix `getOrCreateInstance()` doc example
- #39293: Update background.md
- #39304: Doc: add expanded accordion explanation
- #39320: Drop `.table-light` from table foot example
- #39340: Doc: add `dispose()` to Offcanvas methods
- #39378: Docs: fix sentence in modal
- #39417: Fix color schemes description in Sass customization documentation
- #39418: Docs: change vite config path import in vite guide
- #39435: Docs: add `shift-color()` usage example in sass customization page
- #39458: Docs: enhance `.card-img-*` description
- #39503: Minor image compression improvements
- #39519: Docs: use consistent HTML elements in Utilities -> Background page
- #39520: Docs: drop unused `.theme-icon` class
- #39528: docs: clean up example.html
- #39537: Docs: fix desc around deprecated Sass mixins for alerts and list groups
- #39539: Update links on get-started page
- #39592: Update vite.md
- #39604: Fix typo in 'media-breakpoint-between' in migration docs
- #39617: Docs: add missing comma in native font stack code source in Content -> Reboot
- #39663: updated table to be responsive

## 🛠 Examples

- #39657: Fix product example mobile navbar toggler
- #39585: Docs: Add missing type="button" to Cheatsheet nav buttons

## 🏭 Tests

- #39294: Tests: update navbar in visual modal test

## 🧰 Misc

- #39096: CI: stop running coveralls in forks
- #39501: CI: switch to Node.js 20

## 📦 Dependencies

- Updated numerous [devDependencies](https://github.com/twbs/bootstrap/pulls?q=is%3Apr+label%3Adependencies+project%3Atwbs%2F32+is%3Aclosed)

---

> **Source** [twbs/bootstrap](https://github.com/twbs/bootstrap) · `v5.3.3` · 2024-02-20 · [upstream release](https://github.com/twbs/bootstrap/releases/tag/v5.3.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
