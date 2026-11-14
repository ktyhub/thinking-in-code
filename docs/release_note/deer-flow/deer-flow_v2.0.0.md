---
title: "deer-flow v2.0.0"
project: "deer-flow"
repo: "bytedance/deer-flow"
tag: "v2.0.0"
version: "v2.0.0"
published: "2026-06-25"
type: "major"
lang: "en"
summary: "DeerFlow 2.0 is a ground-up rewrite around a 'super agent' harness that orchestrates sub-agents, persistent memory, sandboxed execution, and an extensible skills/tools system. It shares no code with the 1.x line, which…"
---

# deer-flow v2.0.0

# DeerFlow 2.0.0

DeerFlow 2.0 is a **ground-up rewrite** around a "super agent" harness that
orchestrates **sub-agents**, **persistent memory**, **sandboxed execution**,
and an extensible **skills/tools** system. It shares no code with the 1.x line,
which lives on the [`main-1.x` branch](https://github.com/bytedance/deer-flow/tree/main-1.x).

This release closes the [2.0.0 milestone](https://github.com/bytedance/deer-flow/milestone/1)
with **182 merged PRs** since the first 2.0 milestone tag.

> 📖 Full notes: [CHANGELOG.md](CHANGELOG.md) · [中文版](CHANGELOG_zh.md)

---

## ⚠️ Breaking change

- **Run hydration** — runs now hydrate from `RunStore` and persist `interrupted`
  status. Cancellation now requires the worker who owns the run; cross-worker
  cancels return `409` instead of silently appearing successful. ([#2932])

## ✨ Highlights

- **Custom agents that update themselves** — agents can persist edits to their
  own `SOUL.md` / `config.yaml` from a normal chat, with full per-user
  isolation. ([#2713])
- **User-owned IM channel connections** — users can bind their own Slack,
  Telegram, Discord, Feishu/Lark, DingTalk, WeChat, and WeCom accounts on top
  of operator-configured bots. ([#3487])
- **More models & community search** — StepFun and MiMo reasoning models,
  MiniMax for image/video/podcast skills plus a new music-generation skill,
  and Brave Search / SearXNG / Browserless / Serper Google Images tools.
  ([#3461], [#3298], [#3437], [#3528], [#3451], [#3575])
- **Richer channels** — Discord gets mention-only mode, thread routing, and
  typing indicators; Telegram streams replies by editing the placeholder
  message in place. ([#2842], [#3534])
- **Configurable loop detection** with per-tool frequency overrides and
  deferred warning injection. ([#2586], [#2711], [#2752])
- **Subagent token usage** streams to the header in real time, with spans
  attributed to the parent thread's Langfuse trace. ([#2882], [#3611])
- **Trace polish** — clean `lead_agent` / custom-agent trace names; `session_id`
  + `user_id` propagated to Langfuse; non-ASCII memory traces no longer escape.
  ([#3101], [#2944], [#3104])
- **Token-usage tracking on by default**, with refined display modes and usage
  attributed to the actual models. ([#2841], [#2329], [#3658])
- **Flexible memory & suggestions** — opt out of tiktoken in restricted
  networks via `memory.token_counting`; make AI follow-up suggestions optional.
  ([#3465], [#3591])

## 🚀 Performance

- Push thread metadata filters into SQL. ([#2865])
- Index runs by `thread_id` in `RunManager` to eliminate O(n) scans. ([#3499])
- Index messages in `MemoryRunEventStore` to eliminate O(n) scans. ([#3531])
- Cache `Base.to_dict` column reflection per class. ([#3654])
- Speed up `should_ignore_name` in glob/grep sandbox walks. ([#3657])

## 🔒 Security

- Reject symlinked upload destinations on Linux **and** Windows.
  ([#2623], [#2794])
- Mask sensitive values in MCP config responses; harden the endpoint.
  ([#2667], [#3425])
- Reject cross-site auth POSTs. ([#2740])
- Cap skill artifact preview decompression (zip-bomb defense). ([#2963])
- Mount the host Docker socket only in aio (DooD) sandbox mode. ([#3517])
- Don't bind-mount host CLI auth dirs by default. ([#3521])

## 🐛 Notable fixes

- **Memory** runs on a persistent event loop instead of a short-lived one
  `asyncio.run()`; queued updates isolated per agent; wrapped JSON responses
  parsed correctly. ([#2627], [#2941], [#3252])
- **Runs** hydrate from the persistent store after a gateway restart, return
  ISO 8601 timestamps, and have an idempotent cancel. ([#2989], [#2599], [#3058])
- **Subagents** isolated from the parent run's checkpointer; timeout terminal
  state atomic; respect model overrides for tools/middleware. ([#3559],
  [#2583], [#2641])
- **Sandbox** readiness polling no longer blocks the event loop;
  `/mnt/user-data` contract enforced at the API boundary; PVC data scoped per
  user; Windows/Git Bash MSYS path conversion disabled. ([#2822], [#2881],
  [#2973], [#2766])
- **Auth** auto-generated JWT secrets persist across restarts; setup-status
  uses cached responses instead of 429. ([#2933], [#2915])
- **Frontend** fixes a swallowed first message, login flicker / resize-observer
  loop, duplicate optimistic messages, deeply nested list render crashes, and
  thread isolation on new chats. ([#2731], [#2954], [#3002], [#3393], [#3570],
  [#3508])
- **Channels** — user-owned IM now requires a bound identity, scopes files, and
  helper commands to the owner, makes the provider state authoritative, and makes
  The connect flow is deterministic, backed by shared retry helpers and
  operational guardrails. ([#3578], [#3579], [#3580], [#3581], [#3582],
  [#3583], [#3584])
- **Streaming & history** — interrupts propagate through SSE values events for
  the LangGraph SDK, and base64 image payloads are stripped from streamed and
  history responses to keep the UI responsive. ([#3605], [#3631], [#3535])
- **Frontend (more)** — the workspace chat list paginates beyond 50 threads,
  stays interactive when the SSR auth probe can't reach the gateway, and gets a
  mobile-friendly layout. ([#3485], [#3495], [#3646])

## 📦 Deploy & ops

- **Docker** Gateway defaults to a single worker (multi-worker breakage).
  ([#3475])
- **Docker** nginx resolves upstream names at request time. ([#2717])
- **Packaging** adds `postgres` extra for store/checkpointer support. ([#2584])
- **Scripts** preserve `uv` extras across `make dev` restarts; clean up local
  nginx on stop; exclude runtime state from gateway reload. ([#2767], [#3005],
  [#3426])

## 🙌 Thanks

Huge thanks to the 40 contributors who landed 180 merged PRs in the 2.0.0 milestone, and to everyone who filed issues, tested builds, and shared feedback. DeerFlow 2.0 wouldn't exist without you.

In alphabetical order:

- @18062706139fcz — Ryker_Feng
- @64johnlee — john lee
- @airene — Airene Fang
- @AnoobFeng — AnoobFeng
- @chetan655 — Chetan Sharma
- @ech0hol — Zhipeng Zheng
- @Eilen6316 — Eilen Shin
- @fancyboi999 — Xinmin Zeng
- @ggnnggez — Nan Gao
- @greatmengqi — greatmengqi
- @hata33 — hataa
- @heart-scalpel — heart-scalpel
- @he-yufeng — Yufeng He
- @hetaoBackend — DanielWalnut
- @Hinotoi-agent — Hinotobi
- @Huixin615 — Huixin615
- @idefav — idefav
- @jinghuan-Chen — jinghuan-Chen
- @Kiteeater — KiteEater
- @kibabsquirrel — Lawrance_YXLiao
- @knight0940 — Amorend
- @Layau-code — YuJitang
- @liuchuan01 — liuchuan01
- @LittleChenLiya — Admire
- @ly-wang19 — ly-wang19
- @NewAmorend — Amorend
- @nguyen0096 — Nguyen DN
- @p-yf — yangyufan
- @player0718 — Lucy Shen
- @ShenAC-SAC — AochenShen99
- @shenlihust — 魔力鸟
- @sunshine-lang — sunsine
- @stphtt — stphtt
- @wahajahmed010 — Wahaj Ahmed
- @whhe — He Wang
- @WillemJiang — Willem Jiang
- @xunliu — Xun
- @yangzheli — yangzheli
- @yitang — Yi Tang
- @Yuyi-Ao — Yuyi Ao
- @zengxi — zengxi
- @zwj110610 — zgenu


See the full author and PR list on the
[milestone page](https://github.com/bytedance/deer-flow/milestone/1).

---

> **Source** [bytedance/deer-flow](https://github.com/bytedance/deer-flow) · `v2.0.0` · 2026-06-25 · [upstream release](https://github.com/bytedance/deer-flow/releases/tag/v2.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
