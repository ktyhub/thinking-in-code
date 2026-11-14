---
title: "feign 13.9.2"
project: "feign"
repo: "OpenFeign/feign"
tag: "13.9.2"
published: "2026-02-27"
type: "patch"
lang: "en"
summary: "feat: Generate nested result types as inner records in graphql-apt"
---

# feign 13.9.2

## What's Changed
* feat: Generate nested result types as inner records in graphql-apt by @velo in https://github.com/OpenFeign/feign/pull/3247
  * When a GraphQL schema contains nested object types (e.g., `Order { customer: Customer }`), the annotation processor now generates them as inner records instead of requiring separate top-level classes

**Full Changelog**: https://github.com/OpenFeign/feign/compare/13.9.1...13.9.2

---

> **Source** [OpenFeign/feign](https://github.com/OpenFeign/feign) · `13.9.2` · 2026-02-27 · [upstream release](https://github.com/OpenFeign/feign/releases/tag/13.9.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
