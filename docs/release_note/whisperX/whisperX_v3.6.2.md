---
title: "whisperX v3.6.2"
project: "whisperX"
repo: "m-bain/whisperX"
tag: "v3.6.2"
version: "v3.6.2"
published: "2026-03-25"
type: "patch"
lang: "en"
summary: "Backport of word-level timestamp fixes from v3.8.4."
---

# whisperX v3.6.2

Backport of word-level timestamp fixes from v3.8.4.

## Bug Fixes

- **Restore timestamps for unalignable characters** (39aa9f5): Words containing digits, symbols, or foreign script (e.g. `4,9`, `£13.60`) now get proper timestamps via a wildcard emission column. The previous patch (v3.X.Y) reverted PR #986 which removed wildcard support entirely. Fixes #1372.

## Testing

- Add regression test for #1372 (da072d6)
- Add pytest dev dependency and CI test workflow (f9a3f8f)

**Full Changelog**: https://github.com/m-bain/whisperX/compare/v3.6.1...v3.6.2

---

> **Source** [m-bain/whisperX](https://github.com/m-bain/whisperX) · `v3.6.2` · 2026-03-25 · [upstream release](https://github.com/m-bain/whisperX/releases/tag/v3.6.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
