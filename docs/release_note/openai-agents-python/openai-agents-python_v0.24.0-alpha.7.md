---
title: "openai-agents-python v0.24.0-alpha.7"
project: "openai-agents-python"
repo: "openai/openai-agents-python"
tag: "v0.24.0-alpha.7"
published: "2026-11-08"
type: "pre"
lang: "en"
summary: "Use Classic workflows alongside native execution. Import the retained v0 runtime through agents.classic. This alpha also changes executor write defaults; review the upgrade actions before opening existing environments."
---

# openai-agents-python v0.24.0-alpha.7

# Agents SDK v0.24.0-alpha.7

## Highlights

- **Use Classic workflows alongside native execution.** Import the retained v0 runtime through `agents.classic`. This alpha also changes executor write defaults; review the upgrade actions before opening existing environments.
- **Keep conversations in your own storage.** Add durable root Sessions with `CustomStorage`, and reconcile uncertain tool effects before resuming work.
- **Add voice and hosted tools to native agents.** Connect speech workflows to a Session, or use `FileSearch`, `CodeInterpreter`, and `ImageGeneration` through compatible Responses providers.
- **Control context, completion, and usage.** Transform model input, retain selected context during compaction, review proposed answers, and limit observed root usage.

## Upgrading from 0.24.0-alpha.6

- **Review Environment write policies.** New Environments default to `write_policy="strict"`, which requires a compatible Linux or macOS executor. The working directory remains writable; use `writable_roots` for additional directories. To retain the previous remote policy, including on Windows executors, set `write_policy="legacy"` and leave `writable_roots=None`. Local execution requires strict mode. When restoring legacy remote checkpoints or profiles, select legacy explicitly; reopening does not upgrade their policy. See the [executor policy and restore rules](https://github.com/openai/openai-agents-python/blob/4c1190046163c09e4f67ab7254f22bea60b14894/docs/sdk/state.md#restore-executor-policy).
- **Check implicit reasoning settings.** The bundled model catalog changes the default reasoning effort from `low` to `medium` for `gpt-6-astra`, `gpt-6.1-sol`, and `gpt-5.6-sol`. Set `model_settings={"reasoning_effort": "low"}` explicitly if you need the previous effort. This describes bundled metadata; an explicit setting or provider model metadata can select another value. (#5517)
- **Rename MCP approval modes.** Replace `approval_mode="auto"` with `"native"`, and `"approve"` with `"preapproved"`. The old values are rejected; the new names preserve their respective approval behavior.
- **Update child step callbacks.** `NativeAgents.before_step` now receives one `ChildStepContext`, with `context`, `child`, and `step_index`, instead of separate child and step-index arguments. Root `before_step` callbacks keep their existing signature.
- **Handle MCP forms and URLs separately.** `ElicitationRequest` is now the union `FormRequest | UrlRequest`. Use `FormRequest.reply()` or `respond()` for forms; use `UrlRequest.reply_url_accept()` or `accept_url()` for URL consent.

## Added

- **Application-owned conversation storage.** `SessionStore`, `SQLiteSessionStore`, and `CustomStorage` persist root history and automatic Python tool results. This initial profile excludes native tools, Environments, children, planning tools, generated-code execution, manual tools, and portable checkpoints. `SQLiteSessionStore` requires one host and a local POSIX filesystem. Both local profiles and custom stores can report uncertain root calls for explicit reconciliation; neither automatically replays those effects. (#5514, #5502)
- **Provider-hosted tools and storage.** Add `FileSearch`, `CodeInterpreter`, and `ImageGeneration`, Code Interpreter caller policies, and provider-managed storage. Hosted tools require an API-key provider and a compatible standard Responses model; they exclude Responses Lite and Codex login. Hosted web search adds domain and location controls and retains citations. (#5576, [hosted-tool guide](https://github.com/openai/openai-agents-python/blob/4c1190046163c09e4f67ab7254f22bea60b14894/docs/sdk/tools.md#provider-hosted-tools))
- **Context and completion hooks.** `Agent.transform_context` changes sampled input without changing stored history. `before_compact` and selected-item retention control compaction. `before_complete` can accept, return `ContinueTurn`, or stop a proposed answer; rejected text may already have streamed and remains in history. Advanced `prepare_request` editing supports a restricted HTTP profile. See the [hook contracts and limits](https://github.com/openai/openai-agents-python/blob/4c1190046163c09e4f67ab7254f22bea60b14894/docs/sdk/configuration.md#choose-a-model-context-hook).
- **Observed usage budgets.** `RunBudget` limits root request admissions, reported tokens, or estimated cost before the next request. An admitted request can exceed a limit. Children are excluded; missing usage stops further admission by default. Active budgeted operations cannot use portable checkpoints. (#5555)
- **MCP resources, prompts, and reconnection.** Use `Session.list_mcp_resources()`, `list_mcp_resource_templates()`, `read_mcp_resource()`, `list_mcp_prompts()`, and `get_mcp_prompt()` with a selected HTTP or stdio server while the Session is idle. Retrieved data does not enter model context automatically. Scoped tool selection and explicit reconnection preserve control over admitted tools without replaying uncertain calls. (#5597, #5604, #5556)
- **Local execution and project search.** `Environment.local()` runs supported executor tools locally. On Linux, `LocalStorageMount(source=path)` grants read-only access to an existing canonical directory; source and destination must match. `project_glob` and `project_grep` search beneath the Environment's fixed working directory without granting command execution. (#5501, #5575, #5574)
- **Integration and supervision.** Add native A2A client and server adapters through the `a2a` extra, explicit `TraceContext`, workflow tracing controls, API-key rate-limit snapshots, turn receipts, exact-turn steering, and attention waits. Classic integrations use the `classic` and `classic-*` extras; Classic and native objects and checkpoints remain separate.
- **Speech with native history and policies.** `agents.voice.NativeSessionVoiceWorkflow` uses a caller-owned text-output Session with the speech pipeline. It speaks accepted final text after completion review and output validation. The application handles interactions and Session lifetime. Install the `voice` extra; Realtime agents remain under `agents.classic.realtime`. (#5596)

## Changed

- **Choose function-tool timeout handling.** `timeout_behavior="error_as_result"` returns a timeout error to the model, with optional `timeout_error_function` formatting. Raising remains the default. (#5605)
- **Optional buffered Responses.** `NativeProvider(response_mode="buffered")` reads each complete HTTP JSON response before emitting model output. Select a standard Responses model explicitly; the default model uses Responses Lite. Buffered mode requires API-key authentication and excludes WebSockets, native children, and Codex login. Streaming remains the default. (#5589)
- **Experimental saved-login reuse.** `NativeProvider(auth=CodexLogin())` can use a saved Codex login over HTTP. Omit `api_key` and `base_url`. This experimental feature may change or be removed; see the [authentication guidance and limits](https://github.com/openai/openai-agents-python/blob/4c1190046163c09e4f67ab7254f22bea60b14894/docs/sdk/configuration.md#reuse-a-codex-login-experimental).

## Fixed

- Keep Classic mount credential files private during creation and replacement, and bound Classic sandbox archive extraction.
- Stop deferred work and automatic compaction after cancellation. Retain cleanup owners so callers can retry unfinished release of resources without repeating reconciliation or tool effects.
- Stop sampling retries after terminal provider authentication failures. Report typed output-failure reasons and captured context limits, and preserve cache-write token counts.
- Retain provider response observations and execution details under their configured policies. Reduce native startup and event-reading overhead.

## Release verification

Source: [`c27b24cc6c4fa7e89ab54fa9f795ef4f2d4d5fb9`](https://github.com/openai/openai-agents-python/commit/c27b24cc6c4fa7e89ab54fa9f795ef4f2d4d5fb9).

Built and tested by [Tests #42453125392](https://github.com/openai/openai-agents-python/actions/runs/42453125392).

Fresh-install checks passed on CPython 3.10 and 3.14 for Linux, macOS, and Windows: [installation verification](https://github.com/openai/openai-agents-python/actions/runs/42457339996).

---

> **Source** [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · `v0.24.0-alpha.7` · 2026-11-08 · [upstream release](https://github.com/openai/openai-agents-python/releases/tag/v0.24.0-alpha.7)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
