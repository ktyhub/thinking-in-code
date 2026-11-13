---
title: "consul v4.1.3"
project: "consul"
repo: "go-jose/go-jose"
tag: "v4.1.3"
published: "2025-10-03"
type: "patch"
lang: "en"
summary: "This release drops Go 1.23 support as that Go release is no longer supported. With that, we can drop x/crypto and no longer have any external dependencies in go-jose outside of the standard library!"
---

# consul v4.1.3

This release drops Go 1.23 support as that Go release is no longer supported. With that, we can drop `x/crypto` and no longer have any external dependencies in go-jose outside of the standard library!

This release fixes a bug where a critical b64 header was ignored if in an unprotected header. It is now rejected instead of ignored.

## What's Changed
* Remove Go 1.23 support by @mcpherrinm in https://github.com/go-jose/go-jose/pull/205
* Reject JWS with an unprotected critical b64 header by @mcpherrinm in https://github.com/go-jose/go-jose/pull/210

**Full Changelog**: https://github.com/go-jose/go-jose/compare/v4.1.2...v4.1.3

---

> **Source** [go-jose/go-jose](https://github.com/go-jose/go-jose) · `v4.1.3` · 2025-10-03 · [upstream release](https://github.com/go-jose/go-jose/releases/tag/v4.1.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
