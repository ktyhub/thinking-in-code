---
title: "AdminLTE v4.10.1"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.10.1"
published: "2026-10-08"
type: "patch"
lang: "en"
summary: "AdminLTE 4.10.1 refreshes the build toolchain and demo integrations, fixes responsive and accessibility issues, and adds broader regression coverage. Public AdminLTE component APIs and the published package's Node.js…"
---

# AdminLTE v4.10.1

AdminLTE 4.10.1 refreshes the build toolchain and demo integrations, fixes responsive and accessibility issues, and adds broader regression coverage. Public AdminLTE component APIs and the published package's Node.js requirement remain unchanged.

### Changes

- Update compatible stable dependencies, including Astro 7.3.7, Rollup 4.64.2, Playwright 1.64.0, Vitest 5.0.3, Sass 1.105.1, and ESLint 10.12.0. Replace npm-run-all with its maintained npm-run-all2 successor.
- Update demo/integration CDN libraries, migrate FullCalendar to 7.1.1, correct jsVectorMap asset paths, and refresh existing integrity hashes.
- Fix tablet header overflow, fullscreen icon synchronization and isolation from card-maximize controls, local calendar dates, calendar accessible names, table filter labels/grid semantics, and light/dark contrast.
- Repair Astro source checking, the ESM Prettier configuration, and the Unicorn preset. Add Chromium/Firefox/WebKit and Node.js 22/24/26 CI, light/dark accessibility checks, and local gzip budget enforcement.

### Verification

- Clean npm installation and complete production build, lint, TypeScript declarations, and all 15 bundle-size budgets.
- 80 unit tests on Node.js 22, 24, and 26; 378 browser scenarios across Chromium, Firefox, and WebKit; accessibility checks on 24 representative pages in both themes.
- The exact publishing tarball installs successfully on Node.js 20/npm 10 with strict engine checks. Production dependencies audit clean.

### Compatibility and security

Source builds require Node.js 22.22.3+, 24.16.0+, or 26.3.0+ and npm 10+. These contributor requirements use devEngines; compiled-package consumers retain Node.js >=20 support.

TypeScript remains on 6.0.3 because the latest Astro checker and TypeScript ESLint versions do not support TypeScript 7. Development tooling retains twenty propagated high-severity npm audit findings from the unpatched [braces advisory](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm). This dependency is not included in the published runtime dependency tree.

Npm publication is handled separately by the maintainer. The attached npm tarball is the validated publishing artifact.

**Full changelog:** https://github.com/ColorlibHQ/AdminLTE/compare/v4.10.0...v4.10.1

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.10.1` · 2026-10-08 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.10.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
