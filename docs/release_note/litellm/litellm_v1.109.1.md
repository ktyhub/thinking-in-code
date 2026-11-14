---
title: "litellm v1.109.1"
project: "litellm"
repo: "BerriAI/litellm"
tag: "v1.109.1"
version: "v1.109.1"
published: "2026-11-12"
type: "patch"
lang: "en"
summary: "All LiteLLM Docker images are signed with cosign. This release is signed with the key introduced in commit e82a3c6."
---

# litellm v1.109.1

## Verify Docker Image Signature

All LiteLLM Docker images are signed with [cosign](https://docs.sigstore.dev/cosign/overview/). This release is signed with the key introduced in [commit `e82a3c6`](https://github.com/BerriAI/litellm/commit/e82a3c646908ba0a6ee0beddc4310d7a6cac4065).

**Verify using the pinned commit hash (recommended):**

A commit hash is cryptographically immutable, so this is the strongest way to ensure you are using the published signing key:

```bash
cosign verify \
  --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub \
  ghcr.io/berriai/litellm:v1.109.1
```

**Verify using the release tag (convenience):**

Tags are protected in this repository and resolve to the same key. This option is easier to read but relies on tag protection rules:

```bash
cosign verify \
  --key https://raw.githubusercontent.com/BerriAI/litellm/v1.109.1/cosign.pub \
  ghcr.io/berriai/litellm:v1.109.1
```

Expected output:

```
The following checks were performed on each of these signatures:
  - The cosign claims were validated
  - The signatures were verified against the specified public key
```

---
## What's Changed
* security(proxy): backport #51254 to stable/1.109.x by @shrey-berri in https://github.com/BerriAI/litellm/pull/51264
* chore: bump litellm 1.109.0 -> 1.109.1 by @yuneng-berri in https://github.com/BerriAI/litellm/pull/51298


**Full Changelog**: https://github.com/BerriAI/litellm/compare/v1.109.0...v1.109.1

---

> **Source** [BerriAI/litellm](https://github.com/BerriAI/litellm) · `v1.109.1` · 2026-11-12 · [upstream release](https://github.com/BerriAI/litellm/releases/tag/v1.109.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
