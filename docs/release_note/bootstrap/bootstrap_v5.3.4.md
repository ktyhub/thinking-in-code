---
title: "bootstrap v5.3.4"
project: "bootstrap"
repo: "twbs/bootstrap"
tag: "v5.3.4"
published: "2025-04-03"
type: "patch"
lang: "en"
summary: "#40888: Dependabot: switch to grouped updates"
---

# bootstrap v5.3.4

## Changes
- #40888: Dependabot: switch to grouped updates

## 🚀 Features

- #41299: Typo fixed
- #41187: Docs: mention removal of `util.js` in migration guide
- #41228: Docs: Simplify ids for checks, radios and switches
- #41150: Update fixtureId to FIXTURE_ID for consistency
- #40965: Docs: Use `<article>` element for example cards
- #40932: Docs: add ngx-bootstrap to JavaScript frameworks list
- #40790: Docs: Drop `.grid` where it shouldn't be used
- #40821: Docs: precise how to add new `.order-*` classes in 'Layout > Columns'
- #40914: Docs: drop useless `.justify-content-start` class in homepage
- #40876: Remove unneeded flexbug workaround
- #40870: Docs: Update modal min-height inline style
- #40844: Docs: Remove mention about Safari's limited support flexbox gap
- #40620: Docs: minor accessibility improvements for Examples
- #40619: Docs: Fix a minor accessibility issue (checkout example missing h1)
- #40577: Docs: Add main element to Cheatsheet Examples
- #39815: Docs: drop unused `.bi-exclamation-triangle-fill` class
- #40507: Docs: HTTPS link to ikons iconset
- #39777: Docs: fix Reddit URL to avoid redirection
- #39697: refactor(accordion): merge selectors for `border-radius` rule

## 🎨 CSS

- #41336: Fix modal and offcanvas header collapse
- #41126: Fix display issues of close button in contextual light and dark modes
- #40695: Fix light mode carousel in dark mode
- #41004: Add workarounds for postcss-values-parser error (negative values in calc())
- #41013: Align floating labels with form-select sizes
- #40931: Fix: correct typo in background-blend-mode value
- #40900: Remove unnecessary duplicated CSS class name
- #40876: Remove unneeded flexbug workaround
- #40844: Docs: Remove mention about Safari's limited support flexbox gap
- #40623: Fix use of declarations after nested rules (deprecated in Sass 1.77.7)
- #39720: Floating labels: Fix `max-width` and `background-color`
- #40488: button-group: Fix `btn-group-vertical` by using same rules as `btn-group`
- #39804: Optimize Sass SVG files
- #39494: Change floating label placeholder's color
- #39697: refactor(accordion): merge selectors for `border-radius` rule

## ☕️ JavaScript

- #38411: Add note about cancelling modal events to modal.md
- #41150: Update fixtureId to FIXTURE_ID for consistency
- #40803: Fix popover toggle twice to close
- #38725: Fix this reference for functions
- #39791: Fix broken comment link for reflow hack

## 📖 Docs

- #39364: Docs: improve progress bar labels markup and explanations for accessibility
- #41308: Fix typo in Navbar docs
- #41299: Typo fixed
- #41281: Fixed minor typo in Sass documentation
- #41187: Docs: mention removal of `util.js` in migration guide
- #41228: Docs: Simplify ids for checks, radios and switches
- #38411: Add note about cancelling modal events to modal.md
- #40917: Fix: clipboard icon not showing after multiple press
- #40714: Docs: add descriptions for Webpack, Parcel and Vite
- #40928: Update css-grid.md
- #41098: Update a point in the RTL documentation
- #40965: Docs: Use `<article>` element for example cards
- #40756: Docs: missing aria-hidden on some decorative SVGs
- #41036: Docs: add warning callout for Yarn Berry
- #41052: Doc: Fix link endpoint in dropdown documentation
- #41030: Docs: fix `.order` values in the migration guide
- #40973: Docs: correct example formatting in 'Utilities > API' for linting compliance
- #40911: fix transparent navbar in windows high contrast mode
- #40932: Docs: add ngx-bootstrap to JavaScript frameworks list
- #40951: Docs: fix example hiding element except on medium and large devices in 'Utilities > Display > Hiding elements'
- #40931: Fix: correct typo in background-blend-mode value
- #40790: Docs: Drop `.grid` where it shouldn't be used
- #40821: Docs: precise how to add new `.order-*` classes in 'Layout > Columns'
- #40799: Fix Cheatsheet examples horizontal scrolling
- #40914: Docs: drop useless `.justify-content-start` class in homepage
- #40900: Remove unnecessary duplicated CSS class name
- #40766: Docs: Make "Edit in Stackblitz" links explicit
- #40767: Docs: Indicate links in foreign language
- #40818: Docs: fix `$enable-css-grid` → `$enable-cssgrid` in 'Customize > Options'
- #40870: Docs: Update modal min-height inline style
- #40844: Docs: Remove mention about Safari's limited support flexbox gap
- #40797: Docs: missing `$enable-css-grid` in options.md
- #40762: Docs: clarify the subject of the About page
- #40703: Docs: Update WCAG links and references
- #40689: Docs: change wording of single/split danger buttons
- #40691: Docs: add `aria-hidden="true"` to decorative SVGs
- #40686: docs: add `aria-hidden='true'` to decorative SVGs
- #40672: Update masthead wording
- #40639: Further image compression improvements
- #40620: Docs: minor accessibility improvements for Examples
- #40619: Docs: Fix a minor accessibility issue (checkout example missing h1)
- #39846: Fix Default values and Description content in options table
- #39815: Docs: drop unused `.bi-exclamation-triangle-fill` class
- #40522: docs: fix typo in the getting started introduction
- #40507: Docs: HTTPS link to ikons iconset
- #40504: docs: add missing `data-bs-theme="light"` in navbars color schemes markup
- #39980: Docs: add missing Accordion component in the list of JS components 
- #39951: docs: migrate to the built-in sitemap template
- #39863: Add PostCSS-RTLCSS approach to the documentation
- #39829: docs: move examples inline shortcode to a partial
- #39824: docs: resize docs bundler images and fix dimensions
- #39779: docs: add a new partial for responsive images and use `imageConfig`
- #39768: docs: add a render image hook
- #39819: docs: update sitemap template
- #39778: docs: use `urls.JoinPath` in more places
- #39807: Move theme toggler to a partial
- #39805: masthead.html: add `rel="noopener" target="_blank"`
- #39808: docs: move examples icons to a partial
- #39773: Further improve PNG compression
- #38993: docs: bundle assets with Hugo
- #39782: docs: mention text transform classes
- #39749: Update masthead to HeroDevs EOL
- #39781: docs: move fathom site to hugo config
- #39777: Docs: fix Reddit URL to avoid redirection
- #39772: examples: assorted tweaks
- #39766: Docs: drop `data-bs-scroll="true"` from navbar
- #39763: Switch to using `hugo.IsProduction`
- #39739: Search: Fix modal on mobile chromium based browsers
- #39757: footer: remove unneeded trailing slash
- #39724: Docs: minor tweaks
- #39745: docs: use a responsive image for bootstrap-logo-shadow.png
- #39741: More docs fixes
- #39740: Doc fixes
- #39738: Fix docs-versions.html
- #39725: docs: remove Google Analytics

## 🛠 Examples

- #40799: Fix Cheatsheet examples horizontal scrolling
- #40620: Docs: minor accessibility improvements for Examples
- #40619: Docs: Fix a minor accessibility issue (checkout example missing h1)
- #40577: Docs: Add main element to Cheatsheet Examples

## 🌎 Accessibility

- #40965: Docs: Use `<article>` element for example cards
- #40756: Docs: missing aria-hidden on some decorative SVGs
- #40911: fix transparent navbar in windows high contrast mode
- #40766: Docs: Make "Edit in Stackblitz" links explicit
- #40767: Docs: Indicate links in foreign language
- #40808: Docs: add aria-label to SVG with tooltip
- #40762: Docs: clarify the subject of the About page
- #40703: Docs: Update WCAG links and references
- #40691: Docs: add `aria-hidden="true"` to decorative SVGs
- #40686: docs: add `aria-hidden='true'` to decorative SVGs
- #40620: Docs: minor accessibility improvements for Examples
- #40619: Docs: Fix a minor accessibility issue (checkout example missing h1)
- #40577: Docs: Add main element to Cheatsheet Examples

## 📦 Dependencies

- #41305: Build(deps-dev): Bump the development-dependencies group across 1 directory with 9 updates
- #41265: Build(deps-dev): Bump the development-dependencies group across 1 directory with 5 updates
- #41234: Build(deps-dev): Bump the development-dependencies group across 1 directory with 7 updates
- #41171: Build(deps-dev): Bump the development-dependencies group across 1 directory with 3 updates
- #41155: Build(deps-dev): Bump the development-dependencies group across 1 directory with 4 updates
- #41109: Build(deps-dev): Bump the development-dependencies group across 1 directory with 8 updates
- #41082: Build(deps-dev): Bump the development-dependencies group across 1 directory with 7 updates
- #41010: Build(deps-dev): Bump the development-dependencies group across 1 directory with 5 updates
- #40978: Build(deps-dev): Bump the development-dependencies group across 1 directory with 6 updates
- #40953: Build(deps-dev): Bump the development-dependencies group across 1 directory with 6 updates
- #40929: Build(deps): Bump the npm_and_yarn group with 2 updates
- #40920: Build(deps-dev): Bump the development-dependencies group across 1 directory with 6 updates
- #40895: Build(deps-dev): Bump the development-dependencies group across 1 directory with 9 updates
- #40883: Build(deps-dev): Bump terser from 5.31.6 to 5.34.1
- #40842: Build(deps-dev): Bump npm-run-all2 from 6.2.2 to 6.2.3
- #40882: Build(deps-dev): Bump hugo-bin from 0.130.1 to 0.132.0
- #40843: Build(deps-dev): Bump eslint from 8.57.0 to 8.57.1
- #40886: Build(deps-dev): Bump rollup from 4.21.2 to 4.23.0 in the npm_and_yarn group
- #40862: Build(deps): Bump body-parser from 1.20.2 to 1.20.3 in the npm_and_yarn group
- #40806: Build(deps-dev): Bump postcss from 8.4.44 to 8.4.45
- #40784: Build(deps-dev): Bump postcss from 8.4.41 to 8.4.44
- #40788: Build(deps-dev): Bump @babel/cli from 7.24.8 to 7.25.6
- #40782: Build(deps-dev): Bump rtlcss from 4.2.0 to 4.3.0
- #40783: Build(deps-dev): Bump eslint-plugin-import from 2.29.1 to 2.30.0
- #40785: Build(deps-dev): Bump rollup from 4.21.1 to 4.21.2
- #40786: Build(deps-dev): Bump stylelint-config-twbs-bootstrap from 14.2.0 to 15.0.0
- #40774: Build(deps-dev): Bump hugo-bin from 0.129.1 to 0.130.1
- #40773: Build(deps-dev): Bump @babel/preset-env from 7.25.3 to 7.25.4
- #40775: Build(deps-dev): Bump rollup from 4.20.0 to 4.21.1
- #40723: Build(deps-dev): Bump hugo-bin from 0.127.0 to 0.129.1
- #40721: Build(deps-dev): Bump terser from 5.31.3 to 5.31.6
- #40722: Build(deps-dev): Bump @babel/preset-env from 7.25.2 to 7.25.3
- #40720: Build(deps-dev): Bump postcss from 8.4.40 to 8.4.41
- #40697: Build(deps-dev): Bump autoprefixer from 10.4.19 to 10.4.20
- #40696: Build(deps-dev): Bump rollup from 4.19.1 to 4.20.0
- #40698: Build(deps-dev): Bump stylelint from 16.7.0 to 16.8.1
- #40678: Build(deps-dev): Bump @babel/core from 7.24.9 to 7.25.2
- #40680: Build(deps-dev): Bump karma from 6.4.3 to 6.4.4
- #40679: Build(deps-dev): Bump @babel/preset-env from 7.25.0 to 7.25.2
- #40673: Update devDependencies and regenerate package-lock.json
- #40662: Build(deps-dev): Bump bundlewatch from 0.3.3 to 0.4.0
- #40655: Update devDependencies
- #40638: Build(deps-dev): Bump @babel/core from 7.24.7 to 7.24.9
- #40637: Build(deps-dev): Bump @babel/preset-env from 7.24.7 to 7.24.8
- #40636: Build(deps-dev): Bump stylelint from 16.6.1 to 16.7.0
- #40633: Build(deps-dev): Bump @babel/cli from 7.24.7 to 7.24.8
- #40634: Build(deps-dev): Bump eslint-plugin-markdown from 5.0.0 to 5.1.0
- #40632: Build(deps-dev): Bump terser from 5.31.1 to 5.31.2
- #40635: Build(deps-dev): Bump sass from 1.77.6 to 1.77.8
- #40617: Build(deps-dev): Bump rollup from 4.18.0 to 4.18.1
- #40616: Build(deps-dev): Bump npm-run-all2 from 6.2.0 to 6.2.2
- #40615: Build(deps-dev): Bump hugo-bin from 0.125.0 to 0.125.2
- #40618: Build(deps-dev): Bump @stackblitz/sdk from 1.10.0 to 1.11.0
- #40601: Build(deps-dev): Bump terser from 5.31.0 to 5.31.1
- #40604: Build(deps-dev): Bump stylelint-config-twbs-bootstrap from 14.1.0 to 14.2.0
- #40603: Build(deps-dev): Bump @rollup/plugin-commonjs from 25.0.8 to 26.0.1
- #40602: Build(deps-dev): Bump postcss from 8.4.38 to 8.4.39
- #40600: Build(deps-dev): Bump npm-run-all2 from 6.1.2 to 6.2.0
- #40598: Build(deps-dev): Bump nodemon from 3.1.3 to 3.1.4
- #40599: Build(deps-dev): Bump hugo-bin from 0.123.3 to 0.125.0
- #40597: Build(deps-dev): Bump sass from 1.77.4 to 1.77.6
- #40596: Build(deps-dev): Bump lockfile-lint from 4.13.2 to 4.14.0
- #40595: Build(deps-dev): Bump @rollup/plugin-replace from 5.0.5 to 5.0.7
- #40565: Build(deps-dev): Bump eslint-plugin-unicorn from 52.0.0 to 54.0.0
- #40548: Build(deps-dev): Bump @babel/core from 7.24.5 to 7.24.7
- #40547: Build(deps-dev): Bump @babel/preset-env from 7.24.5 to 7.24.7
- #40594: Build(deps): Bump the npm_and_yarn group with 3 updates
- #40545: Build(deps-dev): Bump @babel/cli from 7.24.5 to 7.24.7
- #40546: Build(deps-dev): Bump @stackblitz/sdk from 1.9.0 to 1.10.0
- #39967: Build(deps-dev): Bump eslint-config-xo from 0.44.0 to 0.45.0
- #40530: Build(deps-dev): Bump nodemon from 3.1.0 to 3.1.3
- #40528: Build(deps-dev): Bump rollup from 4.17.2 to 4.18.0
- #40527: Build(deps-dev): Bump @rollup/plugin-commonjs from 25.0.7 to 25.0.8
- #39964: Build(deps-dev): Bump eslint-plugin-markdown from 4.0.1 to 5.0.0
- #40519: Build(deps-dev): Bump sass from 1.76.0 to 1.77.4
- #40520: Build(deps-dev): Bump stylelint from 16.4.0 to 16.6.1
- #40521: Build(deps-dev): Bump hugo-bin from 0.122.5 to 0.123.3
- #39950: package.json: ignore eslint for now and regenerate package-lock.json
- #39939: Build(deps-dev): Bump terser from 5.30.4 to 5.31.0
- #39949: Build(deps-dev): Bump hugo-bin from 0.122.3 to 0.122.5
- #39942: Build(deps-dev): Bump sass from 1.75.0 to 1.76.0
- #39943: Build(deps-dev): Bump @babel/preset-env from 7.24.4 to 7.24.5
- #39937: Build(deps-dev): Bump @babel/core from 7.24.4 to 7.24.5
- #39940: Build(deps-dev): Bump rollup from 4.16.3 to 4.17.2
- #39938: Build(deps-dev): Bump @babel/cli from 7.24.1 to 7.24.5
- #39936: Build(deps-dev): Bump stylelint from 16.3.1 to 16.4.0
- #39921: Build(deps-dev): Bump hugo-bin from 0.121.1 to 0.122.3
- #39922: Build(deps-dev): Bump eslint-plugin-html from 8.1.0 to 8.1.1
- #39919: Build(deps-dev): Bump terser from 5.30.3 to 5.30.4
- #39920: Build(deps-dev): Bump rollup from 4.14.3 to 4.16.3
- #39904: Build(deps-dev): Bump sass from 1.74.1 to 1.75.0
- #39903: Build(deps-dev): Bump rollup from 4.14.1 to 4.14.3
- #39902: Build(deps-dev): Bump eslint-plugin-html from 8.0.0 to 8.1.0
- #39890: Build(deps-dev): Bump @babel/preset-env from 7.24.3 to 7.24.4
- #39891: Build(deps-dev): Bump @babel/core from 7.24.3 to 7.24.4
- #39887: Build(deps-dev): Bump rollup from 4.13.2 to 4.14.1
- #39886: Build(deps-dev): Bump terser from 5.29.2 to 5.30.3
- #39884: Build(deps-dev): Bump sass from 1.72.0 to 1.74.1
- #39883: Build(deps-dev): Bump eslint-plugin-unicorn from 51.0.1 to 52.0.0
- #39859: Build(deps-dev): Bump stylelint-config-twbs-bootstrap from 14.0.0 to 14.1.0
- #39858: Build(deps-dev): Bump find-unused-sass-variables from 5.0.0 to 6.0.0
- #39857: Build(deps-dev): Bump stylelint from 16.3.0 to 16.3.1
- #39855: Build(deps-dev): Bump rollup from 4.13.0 to 4.13.2
- #39818: Update devDependencies
- #39806: package.json: stop ignoring jasmine
- #39802: Build(deps-dev): Bump @babel/preset-env from 7.24.0 to 7.24.1
- #39803: Build(deps-dev): Bump @babel/cli from 7.23.9 to 7.24.1
- #39801: Build(deps-dev): Bump @babel/core from 7.24.0 to 7.24.1
- #39800: Update dependencies
- #39792: Build(deps-dev): Bump follow-redirects from 1.15.5 to 1.15.6
- #39775: Update devDependencies and regenerate package-lock.json
- #39730: Build(deps): Bump streetsidesoftware/cspell-action from 5 to 6
- #39736: Build(deps-dev): Bump karma-firefox-launcher from 2.1.2 to 2.1.3
- #39734: Build(deps-dev): Bump @babel/preset-env from 7.23.9 to 7.24.0
- #39735: Build(deps-dev): Bump @babel/core from 7.23.9 to 7.24.0
- #39733: Build(deps-dev): Bump karma from 6.4.2 to 6.4.3
- #39732: Build(deps-dev): Bump autoprefixer from 10.4.17 to 10.4.18
- #39731: Build(deps-dev): Bump hugo-bin from 0.120.4 to 0.120.7
- #39714: Build(deps-dev): Bump sass-true from 7.0.1 to 8.0.0
- #39711: Build(deps-dev): Bump eslint from 8.56.0 to 8.57.0
- #39713: Build(deps-dev): Bump nodemon from 3.0.3 to 3.1.0
- #39715: Build(deps-dev): Bump hugo-bin from 0.120.2 to 0.120.4
- #39704: Build(deps-dev): Bump hugo-bin from 0.119.0 to 0.120.2
- #39703: Build(deps-dev): Bump lockfile-lint from 4.13.1 to 4.13.2
- #39699: Build(deps-dev): Bump sass from 1.71.0 to 1.71.1

---

> **Source** [twbs/bootstrap](https://github.com/twbs/bootstrap) · `v5.3.4` · 2025-04-03 · [upstream release](https://github.com/twbs/bootstrap/releases/tag/v5.3.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
