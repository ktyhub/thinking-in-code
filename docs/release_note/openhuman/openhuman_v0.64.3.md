---
title: "openhuman v0.64.3"
project: "openhuman"
repo: "tinyhumansai/openhuman"
tag: "v0.64.3"
version: "v0.64.3"
published: "2026-09-25"
type: "patch"
lang: "en"
summary: "v0.64.0 → v0.64.3 is all about making OpenHuman feel steadier under real workloads—fewer loops, better recovery, faster turn startup, and clearer billing/usage surfaces. Ship it. 🚀"
---

# openhuman v0.64.3

# The Reliability & Speed Upgrade

v0.64.0 → v0.64.3 is all about making OpenHuman feel steadier under real workloads—fewer loops, better recovery, faster turn startup, and clearer billing/usage surfaces. Ship it. 🚀

## Highlights

### Agent stability & loop control 🧭
Agents now stay focused on the *latest* user request (even after tool search results arrive), avoid getting pulled back into earlier greetings, and stop unproductive tool loops sooner with smarter failure classification and bounded exploration. The result: fewer stalls, fewer repeat calls, and more deterministic “partial-but-useful” outcomes when tools are blocked. ([#6656](https://github.com/tinyhumansai/openhuman/pull/6656), [#6660](https://github.com/tinyhumansai/openhuman/pull/6660), [#6661](https://github.com/tinyhumansai/openhuman/pull/6661)) — Thank you @senamakel!

### Chat recovery, streaming resilience & warm-session correctness 🛠️
This release hardens the chat experience: warm-session completions now properly finalize progress and can optionally capture full successful inference SSE responses for debugging; completed model streams that return no answer get a bounded one-time retry; and transcript/app-state recovery is more robust after failed or torn writes—preserving history and keeping queued follow-ups stable. ([#6665](https://github.com/tinyhumansai/openhuman/pull/6665), [#6685](https://github.com/tinyhumansai/openhuman/pull/6685), [#6686](https://github.com/tinyhumansai/openhuman/pull/6686)) — Thank you @senamakel!

### Faster integrations & skill discovery 🔥
Turn startup and tool availability should feel snappier thanks to caching and warming of Composio integrations and skill metadata across turns/sessions (with clear invalidation rules). This also forwards Socket.IO WebSocket upgrades through the local inference capture proxy for more consistent event routing. ([#6684](https://github.com/tinyhumansai/openhuman/pull/6684)) — Thank you @senamakel!

### Time, time zones & scheduling correctness 🕒
OpenHuman now understands more natural time phrases (like “tomorrow 9am”, “since Monday”, and “in 2h30m”), and Composio connector calls include the user’s IANA time zone—helping downstream results (like Gmail timestamps) line up with what users actually mean. Durable subagents also resume more reliably when session IDs show up in multiple fields. ([#6670](https://github.com/tinyhumansai/openhuman/pull/6670), [#6673](https://github.com/tinyhumansai/openhuman/pull/6673), [#6674](https://github.com/tinyhumansai/openhuman/pull/6674)) — Thank you @senamakel and @M3gA-Mind!

### Observability & developer telemetry 📡
Production Langfuse tracing is enabled from the canonical production API host (while keeping unknown hosts closed), and child agent turns are grouped cleanly under parent conversation lineage—with more complete generation metadata and careful accounting to avoid double counting. ([#6677](https://github.com/tinyhumansai/openhuman/pull/6677)) — Thank you @senamakel!

### Clearer billing & usage UI 💳
Usage and billing surfaces got a reality check: “Usage & Limits” is now “Usage” (removing misleading local budget gauges), provider-call usage logging has a dedicated tab with better filters and bounded record semantics, and billing access is consolidated under Accounts with a hosted dashboard link (with `/settings/billing` preserved as a redirect). Also, chat no longer incorrectly blames empty model responses on insufficient credits—credit guidance now appears only for explicit billing errors. ([#6657](https://github.com/tinyhumansai/openhuman/pull/6657), [#6679](https://github.com/tinyhumansai/openhuman/pull/6679)) — Thank you @senamakel!

### Tooling & platform cleanup (Windows + retired components) 🧹
Windows users should see more reliable TinyMemory module loading thanks to a pinned TinyBus ACL fix, and the retired Medulla integration has been fully removed (while preserving a legacy config alias so older configs load safely as `local`). The orchestrator tool surface was also tightened by removing unused prompt tools and delegate entries. Finally, `file_read` is now unpacked so the orchestrator can read result previews without opening up the whole files tool pack. ([#6680](https://github.com/tinyhumansai/openhuman/pull/6680), [#6682](https://github.com/tinyhumansai/openhuman/pull/6682), [#6669](https://github.com/tinyhumansai/openhuman/pull/6669), [#6666](https://github.com/tinyhumansai/openhuman/pull/6666)) — Thank you @senamakel and @M3gA-Mind!

### Test coverage & regressions ✅
New regression coverage locks in the “greeting → deferred Gmail tool continuation” behavior end-to-end, helping ensure the agent keeps the active request and tool result together and doesn’t fall back into earlier context. ([#6659](https://github.com/tinyhumansai/openhuman/pull/6659)) — Thank you @senamakel!

## Contributor Credits

Big thanks to everyone who shipped v0.64.0 → v0.64.3: @senamakel, @M3gA-Mind.

## Full Compare

https://github.com/tinyhumansai/openhuman/compare/v0.64.0...v0.64.3

---

> **Source** [tinyhumansai/openhuman](https://github.com/tinyhumansai/openhuman) · `v0.64.3` · 2026-09-25 · [upstream release](https://github.com/tinyhumansai/openhuman/releases/tag/v0.64.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
