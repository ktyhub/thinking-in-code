---
title: "haystack v3.4.1"
project: "haystack"
repo: "deepset-ai/haystack"
tag: "v3.4.1"
version: "v3.4.1"
published: "2026-10-21"
type: "patch"
lang: "en"
---

# haystack v3.4.1

## 🔒 Security Notes

- Haystack now requires `certifi>=2026.10.19`. `certifi` is installed transitively through `httpx` and `posthog`; earlier versions trust eMudhra/emSign certificate authorities whose private keys were compromised (GHSA-6q48-6c7w-9gw2). If you pin `certifi`, raise the pin to at least 2026.10.19.

---

> **Source** [deepset-ai/haystack](https://github.com/deepset-ai/haystack) · `v3.4.1` · 2026-10-21 · [upstream release](https://github.com/deepset-ai/haystack/releases/tag/v3.4.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
