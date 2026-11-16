---
title: "context7 ctx7@0.10.0"
project: "context7"
repo: "upstash/context7"
tag: "ctx7@0.10.0"
version: "ctx7@0.10.0"
published: "2026-11-06"
type: "release"
lang: "en"
summary: "9783083: Add Pi to ctx7 setup and ctx7 remove. ctx7 setup --pi writes the Context7 MCP server to /.pi/agent/mcp.json (or .pi/mcp.json with --project) with direct tool exposure."
---

# context7 ctx7@0.10.0

### Minor Changes

- 9783083: Add Pi to `ctx7 setup` and `ctx7 remove`. `ctx7 setup --pi` writes the Context7 MCP server to `~/.pi/agent/mcp.json` (or `.pi/mcp.json` with `--project`) with `direct` tool exposure. It also adds the Context7 rule to Pi's context file and installs the skill in `~/.agents/skills`. Pi reads one context file per folder, so setup adds the rule to an existing `AGENTS.override.md` or `CLAUDE.md` instead of creating an `AGENTS.md` that would hide it. Setup honors `PI_CODING_AGENT_DIR`, and with `--oauth` it prints the `pi mcp login context7` step.

### Patch Changes

- 505b812: Keep your comments when `ctx7 setup` or `ctx7 remove` touches an MCP config. `.vscode/mcp.json` and `.cursor/mcp.json` are JSONC, and the CLI accepted them for reading but wrote them back through `JSON.stringify`, so every comment and any layout you kept in the file was silently dropped. The Context7 entry is now added or removed with an in-place edit that leaves the rest of the file alone, comments included. A file the edit cannot handle safely, such as one whose trailing comma would be stranded, is still rewritten whole as before.
- db66f7a: Fix `ctx7 setup` and `ctx7 remove` leaving the Context7 section in an AGENTS.md or GEMINI.md that has CRLF line endings.
- ff0422f: Add a T3 Code setup choice and --t3 setup/remove flag that configure its Claude Code and Codex providers.

---

> **Source** [upstash/context7](https://github.com/upstash/context7) · `ctx7@0.10.0` · 2026-11-06 · [upstream release](https://github.com/upstash/context7/releases/tag/ctx7%400.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
