---
title: "bootstrap v5.3.0-alpha1"
project: "bootstrap"
repo: "twbs/bootstrap"
tag: "v5.3.0-alpha1"
published: "2022-12-24"
type: "minor"
lang: "en"
---

# bootstrap v5.3.0-alpha1

## 🚀 Highlights

- #35566: Properly escape IDs in `getSelector()` to handle weird IDs (#35565)
- #35857: Add dark mode support
- #36854: Use explicit imports in our JavaScript source files

## 🚀 Features

- #36540: Add new `border-radius` utilities
- #36781: add `font-weight-medium` (500) / `fw-medium`
- #37317: Add `z-index` utilities, `.z-*`

## 🎨 CSS

- #36095: Added CSS variables for breakpoints
- #36456: Add color CSS variables for `.alert-link`
- #36457: Add color CSS variables for `.btn-close`
- #36511: Add parameters to caret-related mixins
- #36540: Add new `border-radius` utilities
- #36781: add `font-weight-medium` (500) / `fw-medium`
- #36815: Add new CSS variables for Offcanvas
- #36831: Rework progress bar markup and styles
- #36848: Add utilities for overflow and object fit
- #36979: Add support for customizing a card title color
- #37125: Floating labels: Add an artificial background to label
- #37252: Add `$enable-important-utilities` condition in colored links
- #37257: Remove duplicate CSS variable
- #37299: Fix disabled floating labels and add some examples of it in the docs
- #37317: Add `z-index` utilities, `.z-*`
- #37344: Use `--bs-border-width` for some components
- #37350: Prevent extraneous whitespace around date time inputs in WebKit
- #37356: fix negative `border-width` on inputgroup and buttongroup
- #37408: Fix disabled floating labels color
- #37413: Grid Gap Updates
- #37526: Fix var `--bs-body-font-family`; keep quotes in the font stack
- #37617: CSS: `$prefix` to the whole assets
- #37621: Fix `--bs-form-check-bg` definition
- #37644: `list-group-border-width` variables
- #37687: Fix Sass compilation when `$color-mode-type` is set to `media-query`

## ☕️ JavaScript

- #35566: Properly escape IDs in getSelector() to handle weird IDs
- #36027: Move `getElementFromSelector` & `getSelectorFromElement`
- #36652: Boost `execute` function, being able to handle arguments
- #36854: Use explicit imports in our JavaScript source files
- #37438: refactor `getSelector` not to be exported
- #37473: fix: change `replaceAll` usage introduced in #35566
- #37482: Use `Object.entries` in more places
- #37483: hydrateObj: use default param
- #37484: ESLint: enable `prefer-template` rule

## 📖 Docs

- #36523: Update navbars example to include a centered nav with utilities
- #36831: Rework progress bar markup and styles
- #37247: Docs: Minor grammatical fixes for Form validation page
- #37250: Fix typo in documentation for hiding elements
- #37255: Markdownlint fixes
- #37267: Rename examples CSS/JS files for consistency
- #37271: Docs: Slightly improve tooling setup description
- #37277: Doc: add Sass vars for switches
- #37279: Improve example of .flex-wrap and -reverse
- #37282: Docs: standardize usage of `<kbd>`
- #37299: Fix disabled floating labels and add some examples of it in the docs
- #37301: docs: fix text buttons to match behavior
- #37318: Home imports
- #37320: Organize callouts in partials
- #37341: Docs: use 'added' page information to display a tag on top of the pages
- #37354: Docs: rewrite/reorganize carousel docs page
- #37361: Font style utilities did not contain "-style-" in BS4
- #37397: Change title of color-background.md page
- #37399: Only show added in page badge if relevant
- #37406: Update input-group.md with form text example
- #37432: Docs: use `<button>` for dropdown/popover examples, explain preference over `<a>` for dropdowns, tweak collapse prose
- #37491: Make added-in badge page-level for z-index utilities
- #37492: Docs: add margin between buttons in tooltip examples
- #37493: Docs: fix margins between cards in examples
- #37498: Fix accessibility of examples buttons
- #37535: Docs: Fix Thirteenth typo on Navbars example
- #37538: Docs: Add black text/background examples
- #37553: Docs: fix "Usage -> Enable dark mode" code example
- #37568: Remove title from `check2` SVG icon
- #37570: code-examples.js: switch to `firstElementChild`
- #37615: Add new team member to the Teams page
- #37617: CSS: `$prefix` to the whole assets
- #37658: docs: move color-mode script
- #37670: Docs: Fix typo in guide
- #37676: Docs: fix typo for Sass vars references in Customize > Color modes > Building with Sass

## 🛠 Examples

- #36523: Update navbars example to include a centered nav with utilities
- #37123: Fix button hover color in the cover example
- #37267: Rename examples CSS/JS files for consistency
- #37502: Fix grid and alignment in examples/features

## 🌎 Accessibility

- #36831: Rework progress bar markup and styles
- #37354: Docs: rewrite/reorganize carousel docs page
- #37432: Docs: use `<button>` for dropdown/popover examples, explain preference over `<a>` for dropdowns, tweak collapse prose
- #37498: Fix accessibility of examples buttons

## 🏭 Tests

- #37248: Rename some variables in tab unit tests for consistency

## 🧰 Misc

- #36325: CI: Add GitHub token permissions for workflows
- #37348: Update authors and copyright to match npm, add repository reference
- #37459: CI: remove git credentials after checkout
- #37461: CI: switch to Node.js 18 LTS
- #37481: Update CodeQL workflow
- #37485: Update site/.eslintrc.json
- #37486: CodeQL: ignore dist folder

## 📦 Dependencies

- Updated numerous devDependencies: <https://github.com/twbs/bootstrap/pulls?q=is%3Apr+label%3Adependencies+project%3Atwbs%2F9+is%3Aclosed>

---

> **Source** [twbs/bootstrap](https://github.com/twbs/bootstrap) · `v5.3.0-alpha1` · 2022-12-24 · [upstream release](https://github.com/twbs/bootstrap/releases/tag/v5.3.0-alpha1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
