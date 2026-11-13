---
title: "AdminLTE v4.8.2"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.8.2"
published: "2026-08-19"
type: "patch"
lang: "en"
summary: "A maintenance release: the build toolchain is current again. dist/ is byte-identical to 4.8.1, so there is nothing to change in your project — upgrade only if you build AdminLTE from source."
---

# AdminLTE v4.8.2

A maintenance release: the build toolchain is current again. **`dist/` is byte-identical to 4.8.1**, so there is nothing to change in your project — upgrade only if you build AdminLTE from source.

### Dev dependencies refreshed

astro 7.1.6 → 7.2.3 · @astrojs/mdx 7.0.5 → 7.0.6 · eslint 10.8.0 → 10.8.1 · @typescript-eslint/{eslint-plugin,parser} + typescript-eslint 8.66.0 → 8.67.0 · vitest 4.1.10 → 4.1.11 · happy-dom 20.11.1 → 20.11.2 · axe-core 4.12.1 → 4.13.0 · terser 5.49.2 → 5.50.0 · postcss 8.5.25 → 8.5.26 · globals 17.9.0 → 17.11.0 · concurrently 10.0.4 → 10.0.5 · lockfile-lint 5.0.0 → 5.0.1

All within their current majors. Lint, 74 unit tests, bundlewatch and the axe accessibility gate are green.

### TypeScript stays on 6.0.3

TypeScript 7.0.2 is out, but `typescript-eslint` still declares `peerDependencies.typescript: ">=4.8.4 <6.1.0"` and `@astrojs/check` accepts `^5 || ^6`. The toolchain moves when they do.

```bash
npm install admin-lte@4.8.2
```

Full notes: [CHANGELOG](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#482---2026-08-19)

**Full Changelog**: https://github.com/ColorlibHQ/AdminLTE/compare/v4.8.1...v4.8.2

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.8.2` · 2026-08-19 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.8.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
