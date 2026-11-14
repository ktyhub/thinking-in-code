---
title: "goose v1.56.0"
project: "goose"
repo: "aaif-goose/goose"
tag: "v1.56.0"
version: "v1.56.0"
published: "2026-10-23"
type: "minor"
lang: "en"
---

# goose v1.56.0

## ✨ Features

- Automatic thinking level operation for improved model reasoning [#12237](https://github.com/aaif-goose/goose/pull/12237)
- Resume failed or cancelled delegate subagents [#13015](https://github.com/aaif-goose/goose/pull/13015)
- Subagent session link in UI with view-only subagent sessions [#12998](https://github.com/aaif-goose/goose/pull/12998)
- Limit concurrent subagents with `GOOSE_MAX_CONCURRENT_SUBAGENTS` [#12946](https://github.com/aaif-goose/goose/pull/12946)
- Report session status via OSC 7501 in CLI [#12928](https://github.com/aaif-goose/goose/pull/12928)
- Windows NSIS installer for desktop [#12869](https://github.com/aaif-goose/goose/pull/12869)
- IO Intelligence provider [#12795](https://github.com/aaif-goose/goose/pull/12795)
- Provider-defined cache prices support [#12944](https://github.com/aaif-goose/goose/pull/12944)
- Dangerous include history option [#13051](https://github.com/aaif-goose/goose/pull/13051)
- Replace PCTX code mode with Boa JavaScript runtime [#12952](https://github.com/aaif-goose/goose/pull/12952)

## 🐛 Bug Fixes

- Windows build error [#13081](https://github.com/aaif-goose/goose/pull/13081)
- Omit stream_options for Databricks Gemini model services [#12675](https://github.com/aaif-goose/goose/pull/12675)
- Stale models issue [#13054](https://github.com/aaif-goose/goose/pull/13054)
- Show model changes when provider reports no resolved model [#12914](https://github.com/aaif-goose/goose/pull/12914)
- Show why an update install failed in desktop [#12628](https://github.com/aaif-goose/goose/pull/12628)
- Keep `!` in npx arguments on Windows [#12680](https://github.com/aaif-goose/goose/pull/12680)
- Inherit active chat folder for New Chat [#12941](https://github.com/aaif-goose/goose/pull/12941)
- Bound long conversation rendering in desktop [#12976](https://github.com/aaif-goose/goose/pull/12976)
- Drop ActionRequired and ToolConfirmationRequest blocks for Bedrock instead of sending blank text [#12843](https://github.com/aaif-goose/goose/pull/12843)
- Missing GLM models in OpenCode Go and Zen [#12057](https://github.com/aaif-goose/goose/pull/12057)
- Load the live model catalog in goose-acp [#12962](https://github.com/aaif-goose/goose/pull/12962)
- Load recipe extensions for slash commands and delegation [#12938](https://github.com/aaif-goose/goose/pull/12938)
- Use the context length OpenRouter reports [#12853](https://github.com/aaif-goose/goose/pull/12853)
- Context freeze preserved message must stay user-visible during compaction [#12692](https://github.com/aaif-goose/goose/pull/12692)
- Do not present compaction countdowns to models [#12902](https://github.com/aaif-goose/goose/pull/12902)
- Keep the agent's model list order in ACP [#12823](https://github.com/aaif-goose/goose/pull/12823)
- Send session id as prompt_cache_key on OpenAI Responses requests [#12420](https://github.com/aaif-goose/goose/pull/12420)
- Map Moonshot provider name to moonshotai for canonical model lookup [#12041](https://github.com/aaif-goose/goose/pull/12041)
- Tolerate missing created_at on OpenAI Responses stream events [#12241](https://github.com/aaif-goose/goose/pull/12241)

## 🔧 Improvements

- MCP tools now have provider-safe public names [#12875](https://github.com/aaif-goose/goose/pull/12875)
- Use global turn limit as subagent turn limit fallback [#12992](https://github.com/aaif-goose/goose/pull/12992)
- Optimise list session database query [#12940](https://github.com/aaif-goose/goose/pull/12940)
- Skills discovery moved into GDK [#12935](https://github.com/aaif-goose/goose/pull/12935)
- Run foreground subagents in the GDK [#12792](https://github.com/aaif-goose/goose/pull/12792)
- Leave the login-shell PATH to whoever launches goose [#12799](https://github.com/aaif-goose/goose/pull/12799)

## 📚 Documentation

- Distinguish native Rust APIs from shared bindings in GDK docs [#13026](https://github.com/aaif-goose/goose/pull/13026)
- Correct toggle sidebar shortcut [#12901](https://github.com/aaif-goose/goose/pull/12901)

---

> **Source** [aaif-goose/goose](https://github.com/aaif-goose/goose) · `v1.56.0` · 2026-10-23 · [upstream release](https://github.com/aaif-goose/goose/releases/tag/v1.56.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
