---
title: "consul v4.1.6"
project: "consul"
repo: "go-jose/go-jose"
tag: "v4.1.6"
published: "2026-10-14"
type: "patch"
lang: "en"
summary: "This release contains a fix for https://github.com/go-jose/go-jose/security/advisories/GHSA-mgcc-cww5-fp2q"
---

# consul v4.1.6

## Fixed Security Issues

This release contains a fix for https://github.com/go-jose/go-jose/security/advisories/GHSA-mgcc-cww5-fp2q

## Breaking Changes

The fix for https://github.com/go-jose/go-jose/security/advisories/GHSA-mgcc-cww5-fp2q involves capping the size of the RSA modulus of keys accepted by JWK parsing. This limit is 4096 bits. If you need this to be higher, set `MaxRSAModulusBits` before performing any JWK parsing.

## Changed
* Reject mismatched JWE CEK lengths by @akshithg in https://github.com/go-jose/go-jose/pull/266
* Add a tests containerfile and threat model by @mcpherrinm in https://github.com/go-jose/go-jose/pull/300
* Fix error message for future issued tokens by @inahga in https://github.com/go-jose/go-jose/pull/303

**Full Changelog**: https://github.com/go-jose/go-jose/compare/v4.1.5...v4.1.6

---

> **Source** [go-jose/go-jose](https://github.com/go-jose/go-jose) · `v4.1.6` · 2026-10-14 · [upstream release](https://github.com/go-jose/go-jose/releases/tag/v4.1.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
