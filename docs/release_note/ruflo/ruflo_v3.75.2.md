---
title: "ruflo v3.75.2"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.75.2"
version: "v3.75.2"
published: "2026-11-10"
type: "patch"
lang: "en"
summary: "Socket flagged six files in ruflo@3.75.1. They were the Chat UI, MCP bridge and deploy scripts under ruflo/src/, which the CLI never reads."
---

# ruflo v3.75.2

Socket flagged six files in `ruflo@3.75.1`. They were the Chat UI, MCP bridge and deploy scripts under `ruflo/src/`, which the CLI never reads. This release stops shipping them and fixes the two real defects the alerts pointed at.

## Changes

- **`ruflo` ships the wrapper only.** The tarball drops from 531 files (8.2 MB unpacked) to 3 files. A test now fails if anything outside `bin/`, `dist/`, `package.json`, `README.md` or `LICENSE` is packed.
- **MCP bridge outbound URL guard** (both bridge copies, #4945). The old regex allowed `https://[::1]/`, `169.254.169.254`, `100.64.0.0/10`, `*.internal`, IPv4-mapped loopback and `LOCALHOST.`, and wrongly refused public hosts starting with `fc` or `fd`. The new `url-guard.js` also checks every address a hostname resolves to, and refuses redirects. If `SEARCH_API_URL` or `RESEARCH_API_URL` points to a private address or redirects, the bridge now refuses it.
- **Pinned bridge backends.** `agentic-flow@alpha` is pinned to `3.0.0-alpha.2`, the version that tag points at, so its tools are unchanged. The third-party `gemini-mcp-server` is pinned to `1.2.2`. Spawned backends no longer inherit the bridge's `MCP_AUTH_TOKEN`.
- **Removed `chat-ui/patch-mcp-url-safety.sh`.** On the current upstream image it matched nothing and exited 0. Where it did match, it loosened the URL check for every URL.

`@claude-flow/cli` and `claude-flow` change version only.

🤖 Generated with [RuFlo](https://github.com/ruvnet/ruflo)

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.75.2` · 2026-11-10 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.75.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
