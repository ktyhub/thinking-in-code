---
title: "context7 @upstash/context7-mcp@4.6.0"
project: "context7"
repo: "upstash/context7"
tag: "@upstash/context7-mcp@4.6.0"
version: "@upstash/context7-mcp@4.6.0"
published: "2026-11-09"
type: "release"
lang: "en"
summary: "2111b92: Add the query-code MCP tool and the ctx7 code command. They search and read a library's source code at the version its docs describe: grep with ripgrep's options, plus definition, references, outline, read and…"
---

# context7 @upstash/context7-mcp@4.6.0

### Minor Changes

- 2111b92: Add the `query-code` MCP tool and the `ctx7 code` command. They search and read a library's source code at the version its docs describe: `grep` with ripgrep's options, plus `definition`, `references`, `outline`, `read` and `list`. `ctx7 library` marks the libraries whose source is searchable, and `resolve-library-id` does so with the research preview on. The MCP tool is part of the research preview: it is listed only with `--research-preview`, `CONTEXT7_RESEARCH_PREVIEW=1` or `?research_preview=1`.
- 7765f35: Add the `get-upgrade-guide` research preview tool: everything that changes between two versions of a library in one response, from the release notes and guides of every release in between and the public API diff of both versions.

---

> **Source** [upstash/context7](https://github.com/upstash/context7) · `@upstash/context7-mcp@4.6.0` · 2026-11-09 · [upstream release](https://github.com/upstash/context7/releases/tag/%40upstash/context7-mcp%404.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
