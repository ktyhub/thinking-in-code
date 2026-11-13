---
title: "openai-agents-python v0.24.0-alpha.6"
project: "openai-agents-python"
repo: "openai/openai-agents-python"
tag: "v0.24.0-alpha.6"
published: "2026-11-03"
type: "pre"
lang: "en"
summary: "Use standard CPython 3.10–3.14 in a virtual environment. These wheels include the native runtime; no Rust toolchain or source build is needed. This preview is distributed through GitHub Releases, not PyPI."
---

# openai-agents-python v0.24.0-alpha.6

# Install the preview

Use standard CPython 3.10–3.14 in a virtual environment. These wheels include the native runtime; no Rust toolchain or source build is needed. This preview is distributed through GitHub Releases, not PyPI.

Run the command for your platform:

**Linux x86_64 (glibc 2.39 or newer)**

```sh
python -m pip install "https://github.com/openai/openai-agents-python/releases/download/v0.24.0-alpha.6/openai_agents-0.24.0a6-cp310-abi3-manylinux_2_39_x86_64.whl"
```

**macOS 11 or newer on Apple Silicon**

```sh
python -m pip install "https://github.com/openai/openai-agents-python/releases/download/v0.24.0-alpha.6/openai_agents-0.24.0a6-cp310-abi3-macosx_11_0_arm64.whl"
```

**Windows x64**

```powershell
python -m pip install "https://github.com/openai/openai-agents-python/releases/download/v0.24.0-alpha.6/openai_agents-0.24.0a6-cp310-abi3-win_amd64.whl"
```

Wheels are not provided for Intel Macs, ARM Linux, ARM Windows, Alpine/musl, PyPy or free-threaded Python. The `cp310-abi3` filenames also support standard CPython 3.11–3.14.

Check the installed version and native module:

```sh
python -c "from importlib.metadata import version; import agents._native; print(version('openai-agents'))"
```

Expect `0.24.0-alpha.6` or its equivalent Python packaging spelling, `0.24.0a6`. `SHA256SUMS` contains checksums for all three wheels.

# Release notes

Changes since `0.24.0-alpha.5`. This preview expands conversation control, state recovery, and tool policies, and includes public API changes.

### Added

- Control submitted work through a captured `Turn`, with `get_result()`, passive `events()`, manual request handling, steering, and cancellation. Queue prompts with `Session.submit(..., if_busy="queue")`, or steer the active Turn with `if_busy="steer"`.
- Add `LocalStorage` to reopen conversations from a local profile, and extend portable `SessionState` capture and recovery. Add idle forks, caller-supplied compaction summaries, and checks for feature support and checkpoint readiness. `LocalStorage` profiles cannot export portable checkpoints.
- Add `NativeOutput` for native strict output and `PromptedOutput` for JSON validated in Python. Optional `max_retries` performs bounded corrections without tools or replaying the task. `LocalStorage` requires `max_retries=0`.
- Handle live manual tool requests and resume supported pending requests from checkpoints. Add experimental external-job recovery through `agents.experimental.deferred` and an optional MCP Tasks adapter.
- Select tools for each submission or model step within the Session's opening permissions. Add native web search, native child checklists, and native goals for local-storage Sessions.
- Validate Python tool return annotations and add tool policies for inspecting arguments and results. Extend native MCP support with argument replacement, result transforms, and application-managed form and URL interactions over supported HTTP, stdio, and model WebSocket paths.
- Add `NetworkPolicy` for native commands on supported Linux and macOS executors, subject to each platform's network and Unix socket limits. Manage remote executor lifetimes through an `Environment` supplied when opening a Session or running an Agent.
- Enable native child approvals and form requests with `NativeAgents(interactions=True)`. Children continue to share the Session's tools and application context.
- Configure native OpenTelemetry export and inspect typed observations. `NativeError` now exposes available provider status codes, error codes, request IDs, and failure categories.
- Test real SDK sessions and Python tools against local scripted responses with `agents.testing.ScriptedResponses`, without a live model or API key.

### API changes

- Use `Agent.run()` or `Agent.run_sync()` for one-shot calls; the redundant `Runner` aliases have been removed.
- Replace `Turn.wait()` and `Session.wait()` with `Turn.get_result()` on the captured Turn.
- Replace `Session.interrupt()` with `Turn.cancel()` for one root Turn or `Session.cancel_all()` for the whole Session.
- Rename `Subagent.submit()` to `Subagent.start()`. Unify Python callbacks and manual tools under `FunctionTool`; remove the separate `ManualTool` declaration.
- Agent declarations are immutable. Create a new Agent to change defaults, use `with_output_type()` for an output-type variant, or use supported idle Session updates for an open conversation.
- Tool selection and Session updates cannot expand the permissions captured when the Session opened. Restored Sessions use current application tools, credentials, and policies.

### Fixed

- Keep each captured Turn's result stable across accepted steering, native continuations, and later submissions. Preserve one-shot manual checkpoints, matching interaction replies, and output-repair state across supported save and restore boundaries.
- Improve native child cancellation and Session cleanup. Stop native work when result policies expire, and preserve policy failure reasons when reporting root and child results.
- Reject malformed Python tool result envelopes and preserve server errors through MCP result transforms. Support nested OpenAI extension forms and HTTP telemetry export with client certificates.

### Documentation and examples

- Move the preview source to the public repository. Refocus installation guidance on prebuilt wheels and move SDK build instructions to `CONTRIBUTING.md`.
- Add examples for browser applications, AG-UI streaming, deferred jobs, evaluation, observability, and common application tasks. Remove migration guides from the preview documentation.

# Build and installation checks

Source: [2808233a56c32c9d7bb8b4f3bc739fe86e5fc282](https://github.com/openai/openai-agents-python/commit/2808233a56c32c9d7bb8b4f3bc739fe86e5fc282). Wheels come from the successful [Tests run](https://github.com/openai/openai-agents-python/actions/runs/41606126874).

Fresh-install checks passed on CPython 3.10 and 3.14 for Linux, macOS, and Windows: [installation verification](https://github.com/openai/openai-agents-python/actions/runs/41677304670).

---

> **Source** [openai/openai-agents-python](https://github.com/openai/openai-agents-python) · `v0.24.0-alpha.6` · 2026-11-03 · [upstream release](https://github.com/openai/openai-agents-python/releases/tag/v0.24.0-alpha.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
