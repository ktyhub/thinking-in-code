---
title: "claude-mem v15.18.5"
project: "claude-mem"
repo: "thedotmack/claude-mem"
tag: "v15.18.5"
version: "v15.18.5"
published: "2026-11-15"
type: "patch"
lang: "en"
summary: "The tree-sitter CLI installs on networks where its download script keeps failing (#6110, thanks @rigel905, closes #6109). On some networks tree-sitter-cli's own install.js had its request reset every time, or exited 0…"
---

# claude-mem v15.18.5

## Critical fixes

- **The tree-sitter CLI installs on networks where its download script keeps failing** (#6110, thanks @rigel905, closes #6109). On some networks tree-sitter-cli's own `install.js` had its request reset every time, or exited 0 on a truncated file. The pinned SHA-256 check correctly refused the file, but nothing recovered after that, so `smart_search`, `smart_outline`, `smart_unfold` and the File Read Gate stayed off on every worker start, and `npx claude-mem repair` aborted. Now, when the script fails or leaves anything but the pinned executable, claude-mem fetches the same release asset directly, once, inside the same install time budget, and runs it only after it unpacks to the same pinned SHA-256. The script still runs first, so `HTTPS_PROXY` keeps working. A script that used up the whole budget gets no second attempt.
- **A corrupt Chroma collection is dropped once, not once per parallel backfill** (#6115, thanks @mohitdixit02 and @0xABCD01, closes #6113). When the HNSW segment of a large collection was corrupt, every parallel per-project backfill that hit it passed the "drop only once" check before the first delete finished, and queued its own delete against chroma-mcp. In #6113 that ran 19 drops at once and pushed chroma-mcp to a 312 GB memory footprint, stalling a 32 GB Mac. Callers now join the one drop already running for that collection and share its outcome. A failed drop costs one attempt from the retry budget, not one per caller, and different collections still drop independently. The remaining asks from that report (a memory bound on chroma-mcp, stopping writes when a drop can't be confirmed, measuring footprint on macOS) are tracked in #3610.

## Fixes

- **`--help` prints help instead of running the command** (#6142, thanks @liuyinchu). `npx claude-mem mcp --help` used to start the stdio server, and `status`, `doctor` and `hook` entered their runtime paths; `t3code` and its aliases rejected the flag. `-h` and `--help` are now handled before dispatch for these commands. Plain `mcp` still starts the server.

## Docs

- **OmO Native recall guide** (#6087, thanks @mschoi0411). How to connect OmO Native to the local worker through the existing stdio MCP server: tool discovery, recall by project and observation ID, troubleshooting and disconnect.

---

> **Source** [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) · `v15.18.5` · 2026-11-15 · [upstream release](https://github.com/thedotmack/claude-mem/releases/tag/v15.18.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
