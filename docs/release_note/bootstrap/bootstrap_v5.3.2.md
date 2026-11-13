---
title: "bootstrap v5.3.2"
project: "bootstrap"
repo: "twbs/bootstrap"
tag: "v5.3.2"
published: "2023-09-14"
type: "patch"
lang: "en"
---

# bootstrap v5.3.2

## Highlights

- Passing a percentage unit to the global `abs()` is deprecated since Dart Sass v1.65.0. It resulted in a deprecation warning when compiling Bootstrap with Dart Sass. This has been fixed internally by changing the values passed to the `divide()` function. The `divide()` function has not been fixed itself so that we can keep supporting node-sass cross-compatibility. In v6, this won't be an issue as we plan to drop support for node-sass.
- Using multiple `id`s in a collapse target wasn't working anymore and has been fixed.

## Color modes

- Increased color contrast of form range track background in light and dark modes.
- Fixed table state rendering for color modes with a focus on the striped table in dark mode to increase color contrast.
- Allow `<mark>` color customization for color modes.

## Docs

- Added alternative CDNs section in [Getting started -> Download](https://getbootstrap.com/docs/5.3/getting-started/download/#alternative-cdns).
- Added Discord and Bootstrap subreddit links in [README](https://github.com/twbs/bootstrap/blob/main/README.md) and [Getting started -> Introduction](https://getbootstrap.com/docs/5.3/getting-started/introduction/):
  - [Discord](https://discord.gg/bZUvakRU3M) maintained by the community
  - [Bootstrap subreddit](https://reddit.com/r/bootstrap)

---

## 🎨 CSS

- #38816: Use `box-shadow` CSS variables shadow utilities
- #38955: Fix radios looking like ellipse on responsive mode
- #38976: Use box-shadow CSS vars instead of Sass vars in assets and variables
- #39030: Fix dart-sass deprecation warning
- #39033: Color mode: fix table state rendering
- #39095: Make form range track background more contrasted
- #39119: New Sass var `$btn-link-focus-shadow-rgb` to allow customization
- #39141: New Sass variable to handle `<mark>` dark mode bg color

## ☕️ JavaScript

- #38989: Collapse: Fix multiple `id`s calls
- #39046: Dropdown: reuse variable

## 📖 Docs

- #38873: Discord reddit bootstrap
- #38970: docs: add BootstrapVueNext to docs
- #38977: Docs: Add missing form elements in focusable elements
- #38978: Docs: Fix popover template role error
- #38995: introduction: drop `details` element
- #39037: Further improve image compression with oxipng and the latest jpegoptim
- #39054: Docs: Remove incorrect mention of `.left-` and `.right-` utilities from migration guide
- #39060: Migration: add back v5.0.0 heading
- #39145: Docs: add warning callout to add a workaround when jsDelivr is not available
- #39177: Fix: make theme selector tick icon visible when active in examples layout
- #39179: download: Reword CDN paragraph

## 🛠 Examples

- #38994: examples: update 3rd-party packages
- #39086: Correct grammar error in examples/starter-template

## 🌎 Accessibility

- #38978: Docs: Fix popover template role error
- #39095: Make form range track background more contrasted

## 🧰 Misc

- #38983: Improve change-version script
- #38984: Convert build scripts to ESM
- #39021: CI: update permissions for calibreapp-image-actions.yml

## 📦 Dependencies

- Updated numerous [devDependencies](https://github.com/twbs/bootstrap/pulls?q=is%3Apr+label%3Adependencies+project%3Atwbs%2F30+is%3Aclosed)

---

> **Source** [twbs/bootstrap](https://github.com/twbs/bootstrap) · `v5.3.2` · 2023-09-14 · [upstream release](https://github.com/twbs/bootstrap/releases/tag/v5.3.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
