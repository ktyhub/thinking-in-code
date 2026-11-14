---
title: "bootstrap v5.3.0-alpha2"
project: "bootstrap"
repo: "twbs/bootstrap"
tag: "v5.3.0-alpha2"
published: "2023-03-24"
type: "minor"
lang: "en"
summary: "#33126: Add .nav-underline modifier class · #37762: Add new link utilities, icon link helper, and update colored link helpers · #38199: Docs: Better scroll"
---

# bootstrap v5.3.0-alpha2

## 🚀 Features

- #33126: Add `.nav-underline` modifier class
- #37762: Add new link utilities, icon link helper, and update colored link helpers
- #38199: Docs: Better scroll

## 🎨 CSS

- #33125: Focus ring helper and utilities
- #33126: Add `.nav-underline` modifier class
- #35857: Add dark mode support
- #36029: Add SCSS testing of the utilities API
- #36143: Fix Android Chrome input date dimensions
- #36831: Rework progress bar markup and styles
- #37526: Fix var `--bs-body-font-family`. Keep quotes in the font stack.
- #37533: Visually-hidden: Remove `position: absolute` for captions
- #37617: CSS: `$prefix` to the whole assets
- #37621: Fix `--bs-form-check-bg` definition
- #37644: list-group-border-width variables
- #37687: Fix Sass compilation when `$color-mode-type` is set to `media-query`
- #37720: Improve consistency of navbar icon declaration
- #37731: Update color contrast formula with new constant from WCAG 2.2
- #37734: Add `color-scheme` to dark root selector
- #37759: Darken some text emphasis and syntax colors
- #37760: Fix selector for dark mode navbar toggler SVG change
- #37761: Docs: enhance callouts links on dark mode
- #37762: Add new link utilities, icon link helper, and update colored link helpers
- #37777: Fix cards color for contextual color mode
- #37781: Fix code color in callouts
- #37784: Change nav focus to focus-visible
- #37785: Update code syntax colors to use Bootstrap colors
- #37788: Change stylelint `property-blacklist` to `property-disallowed-list`
- #37800: Fix heading colors in dark mode
- #37804: CSS: rename some variables to be consistent
- #37809: Fix duplicate `--bs-emphasis-color` set value
- #37816: Remove unused comment in `scss/_maps.scss`
- #37817: Docs: remove some CSS from `.highlight-toolbar` def
- #37820: Remove duplicate definition of `--bs-highlight-bg` in `scss/_root.scss`
- #37822: Switch from none keyword value to a fake shadow for btn-link
- #37823: Docs: fix `.btn-clipboard` and `.btn-edit` link hover color
- #37824: Drop unused `.bg-body-emphasis`
- #37832: Keep shadows black regardless of color mode
- #37833: Update colored links, add new `.link-body-emphasis` helper
- #37835: Remove obsolete comment from `_variables.scss`
- #37843: Add theme maps specific to dark mode
- #37844: Reduce bootstrap-grid.css content
- #37857: Drop duplicate `--bs-body-bg-rgb` declaration + reorder props
- #37868: Remove outdated comment from `$input-border-color` variable
- #37888: List group: Better use of CSS var
- #37893: Fix `.form-control` in dark mode
- #37905: CSS: Proposal to add a border utility
- #37907: CSS: Proposal to rename the CSS and Sass variables for `.*-text-emphasis`
- #37936: Remove color picker borders on Chromium based browsers
- #37953: Theme color improvements
- #37955: Rewrite selector to help Parcel compiler
- #37956: Remove `list-style` reset on `.carousel-indicators`
- #37998: Use color mode adaptive color for disabled dropdown menu items
- #37999: Avoid inheritance issues on border-width utilities
- #38003: fix alert-color in v5.3.0-alpha2
- #38008: Fix list group colors by using `*-text-emphasis` CSS vars in Sass loop
- #38037: Fix `$grid-breakpoints` SCSS unit tests init
- #38038: Remove comments from `scss/_nav.scss`
- #38044: Update form validation styles to use new CSS variables for `color` and `border-color`
- #38059: Remove `-moz-padding-start` from `.form-select`
- #38060: Drop duplicate `$btn-close-focus-shadow` definition
- #38083: Drop duplicate `$nav-link-disabled-color` declaration
- #38086: Fix shadow of .btn-link
- #38088: Fix navbar-nav link styling
- #38095: Drop unused `--bs-focus-ring-box-shadow` and add documentation for `--bs-focus-ring-{x|y|blur}`
- #38104: Remove useless comment from `scss/_utilities.scss`
- #38115: Fix button visibility issue on dark theme
- #38123: Fix dropdown toggle visible focus in headers example
- #38144: Examples: color mode enhancement
- #38176: Fix missing modifications when `--bs-{color}-text` was changed to `--bs-{color}-text-emphasis`
- #38181: Remove comments from scss/_utilities.scss
- #38201: Sass: remove useless `import` inside `bootstrap-grid`
- #38209: fix  data-bs-theme="dark" on component carousel itself
- #38236: Docs: use core mixins in a couple of places

## ☕️ JavaScript

- #37590: fix live toast demo
- #37836: Remove autofocus on theme switch when page is loaded
- #38025: unify `offcanvas` `keydown` event logic with `modal`
- #38034: Minor fix to avoid creating void elements in tooltip test file
- #38071: Bump Chart.js from 2.9.4 to 4.2.1 in dashboard examples
- #38223: Fix wrong generation of `aria-labelledby` in tab navigation
- #38233: Remove empty script tag in js/tests/visual/input.html
- #38294: Remove version comment from JavaScript src files
- #38302: Remove version from index.{esm,umd}.js too

## 📖 Docs

- #33428: Use scrollspy on docs pages
- #34647: Improve readability in docs flex page
- #36831: Rework progress bar markup and styles
- #37275: Docs: add explanation of the base `.btn` class
- #37354: Docs: rewrite/reorganise carousel docs page
- #37400: Docs: change some title containing '&' to bypass Algolia issue
- #37535: Docs: Fix Thirteenth typo on Navbars example
- #37538: Docs: Add black text/background examples
- #37553: Docs: fix "Usage -> Enable dark mode" code example
- #37562: Docs: display examples based on the docs current color mode
- #37568: Remove title from `check2` SVG icon
- #37570: code-examples.js: switch to `firstElementChild`
- #37590: fix live toast demo
- #37608: Drop logo on homepage on mobile
- #37615: Add new team member to the Teams page
- #37616: Accessibility: Minor fixes
- #37617: CSS: `$prefix` to the whole assets
- #37625: Few miscellaneous docs fixes
- #37628: Rewrite some callouts to remove most headings and reduce their content
- #37658: docs: move color-mode script
- #37670: Docs: Fix typo in guide
- #37671: Docs: replace `twbs/bootstrap-npm-starter` by `twbs/examples/tree/main/icons-font`
- #37676: Docs: fix typo for Sass vars references in Customize > Color modes > Building with Sass
- #37694: Docs: fix overflow:auto horizontal scrollbars covering last line of code blocks
- #37698: Remove some unused SVGs in Dropdowns example
- #37717: docs: improve social image partial
- #37738: Docs: handle light/dark mode in Algolia search modal
- #37740: Update navbar color-schemes to v5.3
- #37741: Reduce size of guide dev server images
- #37742: Fix CSS variables mentioned in our docs
- #37757: Docs: remove `.btn-*-dark` from Button group docs to avoid issues in dark mode
- #37763: Include `twbs/examples` repo examples in the Examples page
- #37766: Docs: Remove unnecessary `id`/`aria-labelledby` from accordion examples
- #37772: Docs: enhance Focus ring example section desc
- #37779: Docs: remove remnants of Twitter / bump dates
- #37780: Docs: Make theme switcher accessible
- #37781: Fix code color in callouts
- #37782: Docs: add CSS variables section in close button section
- #37796: Add webpack build to webpack guide
- #37798: Docs: fix accordion flush description
- #37802: Docs: fix headings color in light/dark mode
- #37803: Docs: Small enhancements
- #37811: Docs: enhance colors description table
- #37817: Docs: remove some CSS from `.highlight-toolbar` def
- #37823: Docs: fix `.btn-clipboard` and `.btn-edit` link hover color
- #37829: Docs: missing deprecated callout for `list-group-item-variant()` mixin
- #37836: Remove autofocus on theme switch when page is loaded
- #37839: Docs: add `.fw-medium` utility class example
- #37848: Docs: fix typo in migration guide
- #37855: docs: updates `.text-*-left` changes
- #37859: Docs: fix broken links in Color modes page
- #37861: Mention deprecated classes for color mode on offcanvas
- #37862: Migration guide changes for v5.3.0-alpha2
- #37863: Docs: update progress markup in Color modes page
- #37869: Docs: changed `popover` to `tooltip`
- #37871: Docs: Move form-text paragraph to Form control page
- #37890: Docs: Deprecate the Sass var and remove any occurence of the `.text-muted`
- #37894: Add docs callout for utilities that don't respond to color modes
- #37895: Include variables-dark in the import stacks, plus a customize overview fix
- #37896: Small color mode docs CSS fixes
- #37897: Sass docs updates
- #37898: Docs: Doc Scrollspy correction
- #37899: Docs: Harmonize the flex doc
- #37900: Docs: Enhancement proposal
- #37918: fix typo in gutters doc
- #37921: Docs: add overflow and text color info to progress bar page
- #37923: Docs: tweak icon link and callouts
- #37926: Docs: add scroll-margin-top for keyboard navigation
- #37965: Attempt to fix focus ring being cut off in table of contents
- #37994: Docs: remove redundant space in forms/validation.md
- #38004: Remove unused partials and add some way to automatically detect it
- #38006: Docs: Use ESM Popper CDN reference in 'Using Bootstrap as a module'
- #38014: Docs: Progress fix + proposal
- #38032: Remove `debug` references from DocSearch v2
- #38040: Docs: uniformize disabled nav links for underline nav
- #38057: More updates to migration guide
- #38074: Fix console error in examples pages due to no theme switcher
- #38087: Docs: Drop unused `.focused` style
- #38095: Drop unused `--bs-focus-ring-box-shadow` and add documentation for `--bs-focus-ring-{x|y|blur}`
- #38103: Docs: drop unused icons
- #38112: Fix code indentation in homepage JavaScript plugins section
- #38123: Fix dropdown toggle visible focus in headers example
- #38130: Icon link: envariable + enhance the documentation
- #38131: Utilities: Add one value for link-underline-opacity
- #38151: Docs: replace 'popover' by 'tooltip' in tooltip's page's options section
- #38152: Docs: rollback some modification about `.text-muted` deprecation messages
- #38153: Docs: `.text-body-secondary` appears two times in Utilities > Colors
- #38161: Fixed some grammar issues
- #38164: Drop unused `bootstrap-social-logo.png`
- #38169: Update buttons.md
- #38175: Docs: consistent usage of CSS sections
- #38177: Docs: minor modifications in our migration guide for the v5.3.0-alpha2
- #38179: Docs: vertically align starters images in example page
- #38182: Improve docs on Modals, Alerts, Offcanvas and Toasts close triggers examples
- #38191: Docs: fix focus issue
- #38192: Remove nesting color modes docs section
- #38194: Fix typo in `utilities/colors.md`
- #38196: Docs: Remove unnecessary `href` and `tabindex="-1"`
- #38197: `scss-docs`: link enhancement
- #38198: Docs: fix punctuation on Color modes page (it's -> its)
- #38199: Docs: Better scroll
- #38220: Docs: Proposal to use `scroll-margin-top` instead `padding` and `margin`
- #38236: Docs: use core mixins in a couple of places
- #38246: icon-link.md: remove moot aliases
- #38247: Docs: consistent deprecation messages in Close Button dark variant
- #38262: Docs: make all headings use `var(--bs-emphasis-color)`
- #38263: Fix `placeholder` shortcode color and background params when 'img' markup
- #38270: Slightly improve examples PNG files
- #38301: docs: remove moot `v` from docs-versions.yml
- #38305: Update Vite, Parcel and Webpack guides
- #38308: Docs: `scss-docs` unindent automatically the code inside shortcode
- #38310: Fix reference to twbs/examples/icons-font + fine-tune index.html SB location target
- #38317: Docs: fix two class attributes on same button

## 🛠 Examples

- #36309: New snippet examples
- #37502: Fix grid and alignment in examples/features
- #37562: Docs: display examples based on the docs current color mode
- #37698: Remove some unused SVGs in Dropdowns example
- #37718: Examples: Remove unnecessary `id`/`aria-labelledby` from cheatsheet accordions
- #37763: Include `twbs/examples` repo examples in the Examples page
- #37834: Update snippet examples for dark mode
- #37889: Examples: Update grid example
- #38071: Bump Chart.js from 2.9.4 to 4.2.1 in dashboard examples
- #38074: Fix console error in examples pages due to no theme switcher
- #38103: Docs: drop unused icons
- #38123: Fix dropdown toggle visible focus in headers example
- #38144: Examples: color mode enhancement
- #38193: Fixes click area for header example snippet
- #38310: Fix reference to twbs/examples/icons-font + fine-tune index.html SB location target

## 🌎 Accessibility

- #36831: Rework progress bar markup and styles
- #37354: Docs: rewrite/reorganise carousel docs page
- #37533: Visually-hidden: Remove `position: absolute` for captions
- #37587: Use `aria-labelledby` to associate form-text (helper) with input field when it contains mandatory info (e.g. data format)
- #37616: Accessibility: Minor fixes
- #37731: Update color contrast formula with new constant from WCAG 2.2
- #37766: Docs: Remove unnecessary `id`/`aria-labelledby` from accordion examples
- #37780: Docs: Make theme switcher accessible
- #37836: Remove autofocus on theme switch when page is loaded
- #37926: Docs: add scroll-margin-top for keyboard navigation
- #38014: Docs: Progress fix + proposal
- #38040: Docs: uniformize disabled nav links for underline nav
- #38089: Tests: remove unnecessary `id`/`aria-labelledby` from collapse unit tests
- #38123: Fix dropdown toggle visible focus in headers example
- #38131: Utilities: Add one value for link-underline-opacity
- #38191: Docs: fix focus issue
- #38223: Fix wrong generation of `aria-labelledby` in tab navigation

## 🔧 Utility API

- #38037: Fix `$grid-breakpoints` SCSS unit tests init

## 🏭 Tests

- #36029: Add SCSS testing of the utilities API
- #37713: Make scss tests work on Windows too
- #38034: Minor fix to avoid creating void elements in tooltip test file
- #38037: Fix `$grid-breakpoints` SCSS unit tests init
- #38089: Tests: remove unnecessary `id`/`aria-labelledby` from collapse unit tests

## 🧰 Misc

- #36325: CI: Add GitHub token permissions for workflows
- #37565: package.json: include index.{esm,umd}.js files too
- #37664: README.md: add logos to badges
- #37690: Update docs and package information
- #37712: package.json: exclude scss test files
- #37714: CI: test CSS after build
- #38195: Update `docs` workflow
- #38225: Update codeql.yml
- #38226: Specify lockfile-version=2 for older npm compatibility
- #38227: Move --printUnusedTemplates in hugo scripts
- #38228: Tweak stylelint config
- #38314: vnu-jar.js: add more logging

## 📦 Dependencies

Updated numerous devDependencies: https://github.com/twbs/bootstrap/pulls?q=is%3Apr+label%3Adependencies+project%3Atwbs%2F13+is%3Aclosed

---

Full changelog: https://github.com/twbs/bootstrap/compare/v5.3.0-alpha1...v5.3.0-alpha2

---

> **Source** [twbs/bootstrap](https://github.com/twbs/bootstrap) · `v5.3.0-alpha2` · 2023-03-24 · [upstream release](https://github.com/twbs/bootstrap/releases/tag/v5.3.0-alpha2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
