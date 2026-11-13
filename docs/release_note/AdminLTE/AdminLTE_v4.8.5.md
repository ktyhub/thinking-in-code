---
title: "AdminLTE v4.8.5"
project: "AdminLTE"
repo: "ColorlibHQ/AdminLTE"
tag: "v4.8.5"
published: "2026-08-20"
type: "patch"
lang: "en"
summary: "A housekeeping patch: building AdminLTE from source is quiet again. Nothing in dist/ changed behaviour — the compiled CSS is byte-identical to 4.8.4, so this release matters only if you compile the Sass yourself."
---

# AdminLTE v4.8.5

A housekeeping patch: building AdminLTE from source is quiet again. Nothing in `dist/` changed behaviour — the compiled CSS is byte-identical to 4.8.4, so this release matters only if you compile the Sass yourself.

### Fixed

**`npm run production` printed six Sass deprecation warnings.**

Sass 1.95.0 deprecated the ternary `if($condition, $if-true, $if-false)` in favour of the CSS `if()`. The palette sheets used it in three places — `lte-needs-aa()` in `colors/_variables.scss`, and the text-colour pick in `colors/_primary.scss` twice — and since both `adminlte-colors.scss` and `adminlte-colors-v3.scss` pull those partials in, three call sites produced six warnings.

They are now plain `@if` statements. Deliberately **not** the `if(sass(cond): a; else: b)` syntax Sass suggests: that would require Sass >= 1.95 of everyone compiling AdminLTE from source, and we ship the SCSS. `@if` compiles on every version, produces byte-identical CSS, and stays stylelint-clean.

Worth recording for anyone who chases this upstream: Bootstrap uses the ternary `if()` 82 times across `bootstrap/scss` and warns too — but `css-compile` already passes `--quiet-deps`, so none of that reaches your console. Every warning in this report was AdminLTE's own code (#6111, reported by [@lfiorini](https://github.com/lfiorini)).

### Maintenance

- **Dev dependencies refreshed** — sass 1.102.0 → 1.103.0, astro 7.2.3 → 7.2.4, @astrojs/mdx 7.0.6 → 7.0.7, happy-dom 20.11.2 → 20.11.6. All within their current majors.
- **The docs build moved off Astro's deprecated `markdown.rehypePlugins`.** Astro 7.2.4 deprecates the top-level `remarkPlugins` / `rehypePlugins` / `remarkRehype` keys in favour of an explicit `markdown.processor` — which would have put a fresh warning into the very command this release is about. The responsive-tables plugin now goes through `unified()` from `@astrojs/markdown-remark`; same pipeline, all 90 built pages byte-identical.
- **`nanoid` bumped to 3.3.18 in the lockfile** — GHSA-2v37-7h3g-55p8 (high), transitive and dev-only. `npm audit` now reports zero vulnerabilities. Nothing shipped in `dist/` was ever affected.
- **TypeScript stays on 6.0.3.** 7.0.2 is out, but `typescript-eslint` still declares `peerDependencies.typescript: ">=4.8.4 <6.1.0"` and `@astrojs/check` accepts `^5 || ^6`, so the toolchain still cannot move.

### Install

```bash
npm install admin-lte@4.8.5
```

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/admin-lte@4.8.5/dist/css/adminlte.min.css" />
<script src="https://cdn.jsdelivr.net/npm/admin-lte@4.8.5/dist/js/adminlte.min.js"></script>
```

Full notes: [CHANGELOG](https://github.com/ColorlibHQ/AdminLTE/blob/master/CHANGELOG.md#485---2026-08-20)


**Full Changelog**: https://github.com/ColorlibHQ/AdminLTE/compare/v4.8.4...v4.8.5

---

> **Source** [ColorlibHQ/AdminLTE](https://github.com/ColorlibHQ/AdminLTE) · `v4.8.5` · 2026-08-20 · [upstream release](https://github.com/ColorlibHQ/AdminLTE/releases/tag/v4.8.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
