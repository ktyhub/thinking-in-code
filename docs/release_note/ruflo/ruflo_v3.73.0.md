---
title: "ruflo v3.73.0"
project: "ruflo"
repo: "ruvnet/ruflo"
tag: "v3.73.0"
version: "v3.73.0"
published: "2026-11-09"
type: "minor"
lang: "en"
summary: "init ends with your project, not a list of commands (#4871, #4875). It prints a quick local snapshot: tracked files, top languages, the most-changed file in the last 90 days, and your test command."
---

# ruflo v3.73.0

## Faster first five minutes

- **`init` ends with your project, not a list of commands** (#4871, #4875). It prints a quick local snapshot: tracked files, top languages, the most-changed file in the last 90 days, and your test command. Then it gives one prompt to paste into Claude Code about that file. The snapshot uses git only, with no network calls and a 2-second cap, and it never fails `init`.
- **README:** one recommended install path at the top (`npx ruflo@latest init`), plus a 30-second console tour (#4869). There's also a Chinese quick start and a sourced comparison page with CrewAI, LangGraph, AutoGen and Claude Code subagents (#4873, https://ruvnet.github.io/ruflo/compare.html).

## Telemetry: opt-outs honored, opt-in activation events

- **Opt-outs now stop the message fetch.** `ruflo funnel disable` and every other opt-out now stop the background messages fetch, not only the promo row (#4860). The fetch's User-Agent carries only the release and OS family. See `docs/privacy/funnel-legitimate-interest-assessment.md`.
- **Opt-in activation events** (#4870): `init_completed`, `first_agent_run` and `session_active` are sent only with an explicit `ruflo funnel telemetry on` consent. `init` asks once, defaulting to No. Skip the question with `--no-telemetry-prompt`.
- **Plugin-only users can be counted** (#4872). When the ruflo-core plugin starts the MCP server, the existing 6-hourly fetch is tagged `surface/plugin`, with the same opt-outs.

## Fixes and hardening

- transfer: Ed25519 signatures for pattern-store publish and download.
- healthcare-clinical: audit entries store a SHA-256 query fingerprint.
- browser: the postinstall step installs the pinned agent-browser range.
- deps: open ranges capped in plugins and performance; marketplace agentic-flow 3.4.0; federation midstreamer ^0.3.2; aidefence agentdb ^3.6.0 (#4858, #4868).
- ruflo/server.json and `mcpName` prepare the `io.github.ruvnet/ruflo` MCP registry listing (#4874).

## Upstream

- `@ruvector/ruvllm-gpu-loop@1.1.2` (engines `>=20`) fixes npm 10 / Node 20 dropping the ruvector subtree from fresh installs.
- **Node 20 keeps ruvector.** `agentic-flow` is now a regular dependency of `@claude-flow/cli`. On npm 10 / Node 20, an optional `pipenet` (engines >=22, reached via agentic-flow → fastmcp → mcp-proxy) made npm drop ruvector, agentic-flow, `@ruvector/attention` and transformers from fresh installs. This affected 3.72.2 as well. Verified with fresh `npm install ruflo@3.73.0` on node:20 and node:22.
- **Bundled `plugin-agent-federation` 1.0.7** excludes agentic-flow ≤2.0.13 (GHSA-vcv2-r9jh-99m5) from its peer range (#4890).
- **init keeps the ADR-150 `metaharness score` tip** under the project snapshot.

**Install:** `npx ruflo@latest init`. `latest` is 3.73.0 for `ruflo`, `claude-flow` and `@claude-flow/cli`.

---

> **Source** [ruvnet/ruflo](https://github.com/ruvnet/ruflo) · `v3.73.0` · 2026-11-09 · [upstream release](https://github.com/ruvnet/ruflo/releases/tag/v3.73.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
