---
title: "ruflo v3.76.1"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.76.1"
version: "v3.76.1"
published: "2026-11-12"
type: "patch"
lang: "en"
summary: "Patch release."
---

# ruflo v3.76.1

Patch release.

- **Fix (#4963, PR #4974):** `auto-memory-hook import` and `sync` now exit 1 when `@claude-flow/memory` cannot be resolved. Before, they printed the "DISABLED" warning and exited 0, so a hook runner saw success although nothing was imported or synced. Applies to the packaged helper, the repo copy and the `init` generator fallback; the helpers manifest was re-signed.

Verified on the published packages: a fresh `ruflo@3.76.1` install imports all four bundled packages (security, codex, mcp, plugin-agent-federation) from the CLI's own resolution, and in a project with no memory package `import` and `sync` both exit 1.

Known: on release PR #4976 the `ruflo-console` `write-argv.spec.ts` append test (and the smoke step that runs it) failed three times in CI and passed locally and on main. Nothing in this release touches the console; it's tracked separately.

Published: `@claude-flow/cli`, `claude-flow`, `ruflo` at 3.76.1 (`latest`), and the MCP registry entry `io.github.ruvnet/ruflo@3.76.1`. `alpha`/`v3alpha` are unchanged at 3.75.2.

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.76.1` · 2026-11-12 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.76.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
