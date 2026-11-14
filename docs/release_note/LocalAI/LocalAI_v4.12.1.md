---
title: "LocalAI v4.12.1"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.12.1"
version: "v4.12.1"
published: "2026-10-23"
type: "patch"
lang: "en"
summary: "Patch release v4.12.1. Security fix only."
---

# LocalAI v4.12.1

Patch release v4.12.1. Security fix only.

**Security**

- Hardened the external URL policy for user-supplied URLs (chat vision image/audio/video URLs, image and audio endpoints). Redirect targets are now validated on every hop, 100.64.0.0/10 and 0.0.0.0/8 are treated as non-public, and the connection goes to the address that was validated. See #12853. Credits to @spicysharkco for the discovery.

**Full Changelog**: https://github.com/mudler/LocalAI/compare/v4.12.0...v4.12.1

---

> **Source** [mudler/LocalAI](https://github.com/mudler/LocalAI) · `v4.12.1` · 2026-10-23 · [upstream release](https://github.com/mudler/LocalAI/releases/tag/v4.12.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
