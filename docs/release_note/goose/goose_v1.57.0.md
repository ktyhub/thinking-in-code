---
title: "goose v1.57.0"
project: "goose"
repo: "aaif-goose/goose"
tag: "v1.57.0"
version: "v1.57.0"
published: "2026-10-28"
type: "minor"
lang: "en"
summary: "Allowlist: require HTTPS and validate redirects, block on policy failure #12619 · Allow callers to supply Goose session IDs #13098"
---

# goose v1.57.0

## ✨ Features

- Allowlist: require HTTPS and validate redirects, block on policy failure [#12619](https://github.com/aaif-goose/goose/pull/12619)
- Allow callers to supply Goose session IDs [#13098](https://github.com/aaif-goose/goose/pull/13098)

## 🐛 Bug Fixes

- Linux window icons restored in desktop app [#13120](https://github.com/aaif-goose/goose/pull/13120)
- OpenRouter: resolve variant suffixes like `:free` and `:nitro` to the base model [#12979](https://github.com/aaif-goose/goose/pull/12979)
- Use catalog_provider_id for vision lookup on custom providers [#12993](https://github.com/aaif-goose/goose/pull/12993)
- Desktop: start the agent only once after a fork [#13139](https://github.com/aaif-goose/goose/pull/13139)
- Scheduler: use recipe settings in scheduled runs [#13138](https://github.com/aaif-goose/goose/pull/13138)
- Voice: use system trust for WebSockets [#13075](https://github.com/aaif-goose/goose/pull/13075)
- Prompt: surface MiniJinja render errors in custom system prompts [#12794](https://github.com/aaif-goose/goose/pull/12794)
- Providers: request summarized thinking from Claude models [#13029](https://github.com/aaif-goose/goose/pull/13029)
- Code-mode: keep recipe final_output tool for the model [#13102](https://github.com/aaif-goose/goose/pull/13102)
- CLI: configure unavailable default provider [#13024](https://github.com/aaif-goose/goose/pull/13024)
- Windows build error [#13081](https://github.com/aaif-goose/goose/pull/13081)
- Developer: terminate owned shell process trees on cancellation [#12958](https://github.com/aaif-goose/goose/pull/12958)
- ACP: fail session/prompt when a turn ends on an error [#13043](https://github.com/aaif-goose/goose/pull/13043)
- Databricks: send the system prompt as system on the MLflow chat route [#13057](https://github.com/aaif-goose/goose/pull/13057)

## 🔧 Improvements

- Bump zstd to 0.14.3 for RUSTSEC advisories [#13162](https://github.com/aaif-goose/goose/pull/13162)
- Remove jsonwebtoken to avoid ignoring its cargo-deny advisories [#13141](https://github.com/aaif-goose/goose/pull/13141)
- Address cargo-deny failures on main [#13076](https://github.com/aaif-goose/goose/pull/13076)
- Bump @modelcontextprotocol/sdk from 1.30.0 to 1.32.0 [#13059](https://github.com/aaif-goose/goose/pull/13059)
- Remove ACP client-delegated developer tools [#13144](https://github.com/aaif-goose/goose/pull/13144)
- Build release candidate even if there are conflicts [#12780](https://github.com/aaif-goose/goose/pull/12780)

---

> **Source** [aaif-goose/goose](https://github.com/aaif-goose/goose) · `v1.57.0` · 2026-10-28 · [upstream release](https://github.com/aaif-goose/goose/releases/tag/v1.57.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
