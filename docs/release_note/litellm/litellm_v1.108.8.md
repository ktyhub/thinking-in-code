---
title: "litellm v1.108.8"
project: "litellm"
repo: "BerriAI/litellm"
tag: "v1.108.8"
version: "v1.108.8"
published: "2026-11-13"
type: "patch"
lang: "en"
summary: "Same command for litellm-database, litellm-non_root and the docker.io/litellm/ images"
---

# litellm v1.108.8

> [!TIP]
> The `lts` image tag always points to the latest LTS release. Pull `ghcr.io/berriai/litellm:lts` to stay on the newest LTS patch

## Verify this release

```bash
cosign verify \
  --key https://raw.githubusercontent.com/BerriAI/litellm/e82a3c646908ba0a6ee0beddc4310d7a6cac4065/cosign.pub \
  ghcr.io/berriai/litellm:v1.108.8
```

Same command for `litellm-database`, `litellm-non_root` and the `docker.io/litellm/*` images

## What's new in 1.108.8 (LTS)

4 PRs. 3 fixed. No action needed to upgrade

### Changes

- **Azure:** Fixed 400 on `/v1/decisions` for `azure/` deployments (#51460)
- **Batches and files:** Fixed file ownership checks missing other spellings of a Gemini file id, such as `files/<id>` or its URL (#51503)
- **MCP:** Fixed sign-in loop ending in `Authentication incomplete` on servers that answer `mcp_all` with detailed scopes, broken since v1.107.0 (#51578)

---

Backport #51640 · [Full changelog](https://github.com/BerriAI/litellm/compare/v1.108.7...v1.108.8)

---

> **Source** [BerriAI/litellm](https://github.com/BerriAI/litellm) · `v1.108.8` · 2026-11-13 · [upstream release](https://github.com/BerriAI/litellm/releases/tag/v1.108.8)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
