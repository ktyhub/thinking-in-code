---
title: "haystack v2.31.1"
project: "haystack"
repo: "deepset-ai/haystack"
tag: "v2.31.1"
version: "v2.31.1"
published: "2026-11-03"
type: "patch"
lang: "en"
---

# haystack v2.31.1

## 🔒 Security Notes

- Haystack now requires `anyio>=4.14.2`. `anyio` is installed transitively through `httpx` and `openai`; versions before 4.14.2 are affected by CVE-2026-63374 (GHSA-82r6-8w77-94w6).
- Haystack now requires `certifi>=2026.10.19`. `certifi` is installed transitively through `httpx` and `posthog`; earlier versions trust eMudhra/emSign certificate authorities whose private keys were compromised (GHSA-6q48-6c7w-9gw2). If you pin `certifi`, raise the pin to at least 2026.10.19.

---

> **Source** [deepset-ai/haystack](https://github.com/deepset-ai/haystack) · `v2.31.1` · 2026-11-03 · [upstream release](https://github.com/deepset-ai/haystack/releases/tag/v2.31.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
