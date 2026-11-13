---
title: "bootstrap v5.3.1"
project: "bootstrap"
repo: "twbs/bootstrap"
tag: "v5.3.1"
published: "2023-07-26"
type: "patch"
lang: "en"
---

# bootstrap v5.3.1

## Highlights

- **Color modes:**
  - Increased color contrast for dark mode by replacing `$gray-500` with `$gray-300` for the body color
  - Added our color mode switcher JavaScript to our examples ZIP download
- **Components:**
  - Improved disabled styling for all `.nav-link`s, providing `.disabled` and `:disabled` for use with anchors and buttons
  - Add support for `Home` and `End` keys for navigating tabs by keyboard
  - Added some basic styling to toggle buttons when no modifier class is present
  - Fixed carousel colors in dark mode
- **Forms:**
  - Fixed floating label disabled text color
- **Utilities:**
  - `.text-bg-*` utilities now use CSS variables
- **Sass:**
  - Add new `$navbar-dark-icon-color` Sass variable
  - Removed duplicate `$alert` Sass variables
  - Added a new variable for `$vr-border-width` to customize the vertical rule helper width
- **Documentation:**
  - Added search to our homepage
  - Improved responsive behavior on Dashboard example
  - Improved dark mode rendering of Cheatsheet examples

---

## 🎨 CSS

- #38913: Floating labels: fix disabled with text inside
- #38772: `.text-bg-*` helpers now use theme CSS variables
- #38886: New Sass variable to change vertical rule width
- #38851: Fix Sass properties order for newer stylelint-config-recess-order
- #38815: Increase contrast in dark-mode (#38525)
- #38774: Generalize disabled nav links CSS rules
- #38673: Add `$navbar-dark-icon-color`
- #38674: Remove duplicate `$alert-*-scale` Sass vars

## ☕️ JavaScript

- #38498: Support `Home` and `End` keys in tabs

## 📖 Docs

- #38958: Examples: improve spinner buttons accessibility
- #38947: Fix postcss plugin options
- #38885: Docs: Update float responsive examples
- #38946: Docs: remove v4 reference on homepage
- #38948: Fix some typos in Customize > Sass doc
- #38840: Docs: fix carousel carousel colors of carousel examples in dark mode
- #38604: Add dropdown alignment options to button group example
- #38894: Docs: add blank target and `noopener` rel to footer external links
- #38902: Fix tooltip generated markup documentation
- #38883: Docs: Fix incorrect class name on migration guide
- #38708: add a base class style display for toggle buttons
- #38827: Docs: add missing `aria-disabled='true'` to disabled anchors
- #38844: Fix for text-reset example class name
- #38838: JS/SCSS shortcodes: Add new feature to remove nested calls inside.
- #38850: Add docs search to homepage
- #38872: Docs: Improve Text Alignment Example
- #38865: Fix custom-radio class name on migration guide
- #38786: Explicitly add missing opacity-0 helper class example for clarity.
- #38707: Update bottom border on dark navbar example
- #38726: Update flex utilities link in navs docs
- #38734: Minor fixes for Docs Versions page
- #38745: Fix stack examples
- #38751: Docs (tooltips): Fix "them" typo in markup section
- #38688: Fix missing word issue on nav-tabs page
- #38681: Docs: consistency between custom buttons, popovers and tooltips
- #38600: collate distribution interval
- #38632: docs(spinners): improve buttons examples accessibility
- #38583: Docs: add more details on accessibility tips
- #38554: Doc: fix 'Events' JS example
- #38592: docs(forms): switch to `aria-describedby`
- #38542: Use `.d-none` instead of inline styling
- #38616: Add 'Issues assignment' section to the Contributing Guidelines
- #38528: Adding a link to `clearfix`
- #38538: Update Sass docs to mention compiling and including
- #38623: Fix disabled element tooltip StackBlitz

## 🛠 Examples

- #38958: Examples: improve spinner buttons accessibility
- #38952: dashboard: fix offcanvas md display
- #38840: Docs: fix carousel carousel colors of carousel examples in dark mode
- #38905: Fix dark mode rendering of Cheatsheet examples
- #38711: Fix link colors in Sidebars example

## 🌎 Accessibility

- #38958: Examples: improve spinner buttons accessibility
- #38498: Support `Home` and `End` keys in tabs
- #38827: Docs: add missing `aria-disabled='true'` to disabled anchors
- #38850: Add docs search to homepage
- #38774: Generalize disabled nav links CSS rules
- #38632: docs(spinners): improve buttons examples accessibility
- #38583: Docs: add more details on accessibility tips
- #38592: docs(forms): switch to aria-describedby

## 🧰 Misc

- #38747: Add `color-modes.js` to `bootstrap-x.y.z-examples.zip`

## 📦 Dependencies

- Updated numerous [devDependencies](https://github.com/twbs/bootstrap/pulls?q=is%3Apr+label%3Adependencies+project%3Atwbs%2F26+is%3Aclosed)

---

> **Source** [twbs/bootstrap](https://github.com/twbs/bootstrap) · `v5.3.1` · 2023-07-26 · [upstream release](https://github.com/twbs/bootstrap/releases/tag/v5.3.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
