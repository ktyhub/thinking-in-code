---
title: "browser-use 1.0.0"
project: "browser-use"
repo: "browser-use/browser-use"
tag: "1.0.0"
version: "1.0.0"
published: "2026-11-10"
type: "major"
lang: "en"
summary: "We started over. The agent now writes Python in one persistent REPL, straight on Chrome DevTools Protocol. No DOM serializer, no action schema, nothing in between."
---

# browser-use 1.0.0

<img src="https://github.com/browser-use/browser-use/releases/download/1.0.0/browser-use-1.0-vs-0.x-bench.png" alt="browser-use 1.0 vs 0.x: higher score, cheaper, faster, 80% less code" width="100%">

## −136,866 lines. 80% of the library deleted.

We started over. The agent now writes Python in one persistent REPL, straight on Chrome DevTools Protocol. No DOM serializer, no action schema, nothing in between. Simplicity wins: it is now the [state-of-the-art web agent](https://browser-use.com/benchmarks).

```
  ● task
  │
  ● model writes a cell          new_tab(url); bu.click(41); js(...)
  │
  ● REPL runs it on Chrome (CDP) → output back to the model
  │
  ✓ finish(result)
```

**Same models: up to 33 points higher, 2.7–5.2x cheaper, 2–3x faster.**

```bash
uv add 'browser-use==1.0.0'
export BROWSER_USE_API_KEY=bu_...    # cloud.browser-use.com/new-api-key
```

```python
from browser_use import Agent

print(Agent('Find the number of stars of the browser-use repo').run_sync().final_result())
```

Pin with `==`. We ship fast from here.

<details>
<summary><b>Upgrading from 0.x, benchmarks, everything that changed</b></summary>

Need 0.x? `pip install 'browser-use<1'`

### What changes by default

| | 0.x | 1.0 |
|---|---|---|
| Model (`llm=None`) | required | `bu-fast` on the Browser Use gateway |
| Browser (`Browser()`) | local Chromium | a Browser Use Cloud browser; `Browser('chromium')` for a local one |
| Key | one per provider | one Browser Use key (`BROWSER_USE_API_KEY`, or `browser-use login`) |
| Mode | | `ultrafast` (accessibility-tree ids) on `bu-fast` / `bu-ultrafast`; `mode='default'` opts out |
| `run()` limits | `max_steps=500` | `max_steps=100`, `timeout=1700` s |

Your own model: `ChatOpenAI`, `ChatAnthropic`, `ChatGoogle`, or any Pydantic AI model string (`llm='groq:llama-3.3-70b-versatile'`).

### Upgrading from 0.x

Read [MIGRATING.md](https://github.com/browser-use/browser-use/blob/main/MIGRATING.md) first. It lists every 0.x option and its 1.0 answer.

- An option 1.0 cannot honor raises a `TypeError` naming it before any browser starts or anything is billed. No silent no-ops. 0.x tuning knobs 1.0 has no use for (`use_vision=True`, `flash_mode`, `max_failures`, ...) warn once and are ignored.
- Every removed 0.x import (all module paths from 0.1 to 0.13, and every public name of a module 1.0 kept) raises an `ImportError` that names the replacement and links MIGRATING.md. `except ImportError` fallbacks still work.
- `ActionResult(include_in_memory=...)` warns and is ignored: every tool result stays in the conversation.
- Once configuration checks pass, `run()` does not raise: a rejected key or model, a browser that fails to start (cloud create 402/5xx/timeout) and failures inside the run all return `status='error'` with `result.error`, and a browser that did start is stopped. A missing key still raises before anything is created.

### Behavior changes to check

- `Browser()` is a cloud browser. Tasks on localhost or private IPs need `Browser('chromium')` (one warning says so).
- `Browser(local=True)` now means `Browser('chromium')`. Your own open Chrome is `Browser('chrome')`.
- `Browser('chrome')` attaches only to a browser whose live `DevToolsActivePort` is in your own profile dirs. It no longer attaches to whatever answers on 127.0.0.1:9222.
- `run(max_steps=...)` defaults to 100 (was 500). One step is one model request.
- `is_successful()` is `None` when the agent gave no verdict. Use `r.is_done() and r.success is not False` for the 0.x default.
- `errors()` returns only the error that ended the run. Recovered cell errors are in `result.messages`.
- `result.partial` is set only by `checkpoint(..., partial=True)`. To get one, name the flag in the task: "after each page, save the titles with checkpoint('titles.json', titles, partial=True)".
- `result.cost_usd` covers model and web search charges, not the cloud browser or its proxy.
- The workspace (default: a new temp dir `browser-use-*`) is kept after the run. A `workspace=` path is used as given (made absolute, symlinks not resolved), so `result.downloads[0].relative_to(workspace)` works.
- `prohibited_domains=['example.com']` also blocks its subdomains. With any domain rule set, every `file:` URL is blocked. `BROWSER_USE_ALLOWED_DOMAINS` is not read: `Browser()` raises while it is set.
- The 0.x gateway models (`bu-2-0`, `bu-1-0`, `bu-latest`, ...) are rejected. `BROWSER_USE_LLM_URL` is not read: use `ChatBrowserUse(base_url=...)`.
- LangChain chat models raise `TypeError`. Azure reads `AZURE_OPENAI_API_KEY` (not `AZURE_OPENAI_KEY`) and needs `OPENAI_API_VERSION`.
- `browser-use --mcp` prints a deprecation notice and serves the `--cli-mcp` tools (`browser_exec`, `browser_screenshot`, `browser_login`). `browser-use init` was removed.
- The `bu` and `browser` console scripts are gone (they broke `uv tool install` next to other tools). Use `browser-use` or `browseruse`.
- Extras `aws`, `oci`, `video`, `examples`, `eval`, `core`, `openai-tools`, `cli-oci` are gone (pip warns and installs without them). `anthropic`, `google`, `mcp`, `cli`, `all` still resolve; Anthropic, Google and MCP are core dependencies.

### Also new

- **Typed results:** `Agent(task, output_model_schema=MyModel)` then `result.structured_output`.
- **Uploads and downloads** on local and cloud browsers: inputs from `workspace=`, downloads in `workspace/downloads` and `result.downloads`. The agent uploads the file you named and never creates or overwrites it.
- **Secrets:** `sensitive_data=` typed with `type_secret()` and redacted from cell output, checkpoints, tool results and the result. Not a sandbox; see the trust model in MIGRATING.md.
- **Domain restrictions** (`allowed_domains`, `prohibited_domains`, `block_ip_addresses`) with the 0.x patterns, in every browser mode.
- **Web search** (`web_search=True`), billed per search to your Browser Use key and added to `result.cost_usd`.
- **CLI and MCP:** `browser-use` pipes Python to browser-harness; `browser-use --cli-mcp` runs the MCP server; `browser-use skill install` registers the agent skill.
- **Docker:** `browseruse/browseruse:1.0.0` and `ghcr.io/browser-use/browser-use:1.0.0`. Every image build is smoke-tested on amd64 and arm64 in CI, on pull requests too.

### Reliability

- **Streamed Responses.** Every OpenAI Responses request (the Browser Use gateway and api.openai.com) is streamed. A streamed turn gets 300 s to its first event, then runs while events flow, up to 930 s. Long `bu-smart` turns no longer end at 300 s.
- **One transient retry.** A failure reported inside HTTP 200 (`server_error`, `overloaded`, `request_timeout`, `upstream_stream_failed`) or a stream that ends before its final event is retried once per run, like a 429 or 5xx.
- **Compaction.** A Responses request over the context window compacts once and is sent again. Models with smaller windows (gpt-4o, 128k) compact before they overflow. A streamed compaction item is sent back exactly as a non-streamed response would carry it, and a 400 on it resends the request once without the item.
- **Many agents in one process.** An `Agent` raises a low soft open-file limit to `min(hard limit, 10240)` (macOS defaults to 256). A connection error now names its cause, e.g. `ModelConnectionError: Connection error. (OSError: [Errno 24] Too many open files)`.
- **Proxied gpt-6-luna.** `ChatOpenAI('gpt-6-luna', base_url=...)` gets `reasoning_effort='none'` on any host, so tools work behind a proxy.
- **Pages with workers.** `wait_for_network_idle()` no longer waits for Web Worker scripts and cross-site iframes, which ran it to its 10 s cap.
- **Dialogs.** A navigation held by a `beforeunload` prompt, or a screenshot with a JS dialog open, names the dialog within seconds.
- **keep_alive.** A run after a dead browser daemon continues in the agent's tab, not on `about:blank`.

### Benchmark

BU Bench v2, 60 tasks x 3 reps, cloud browsers, 2026-11-09.

| agent | score [95% CI] | $/task | s/task |
|---|---|---|---|
| browser-use 1.0 (`mode='ultrafast'`, the mode `bu-fast` uses) | 62.5 [58.3, 66.5] | 0.070 | 650 |
| Browser Use Pi (e7007f2), same window | 56.3 [50.2, 62.4] | 0.082 | 743 |

An OpenAI outage hit this window. Pi lost 18 of 180 runs to provider errors, 1.0 lost 1 (its one retry recovered 13 of 14). So the raw gap overstates quality. With provider errors excluded, paired 1.0 minus Pi: score +1.1 [-3.2, +5.7] (no significant difference), cost -$0.013/task [-0.024, -0.004], time -114 s/task [-202, -31]. Same quality, cheaper and faster.

Both arms ran `gpt-6-luna` on api.openai.com, judged by `gpt-5.6-luna` (xhigh). The default `bu-fast` model on the Browser Use gateway was not part of this run. 95% task-clustered bootstrap intervals.

### Known issues

- Every dependency is pinned exactly (`==`), and the lockfile is committed. This is a supply-chain policy: you get exactly the versions CI tested. The cost: a project that needs a different version of `pydantic`, `pydantic-ai-slim`, `mcp`, `google-genai`, `pillow` or another pinned package cannot install 1.0 next to it. Tell us which pin blocks you.
- `google-genai` stays below 3: 3.0.0 calls the Gemini API on v1, which rejects tools. This goes away once Pydantic AI supports it.
- Viewport emulation does not work on cloud browsers yet. Use `Browser('chromium')` for another viewport.

Report problems at https://github.com/browser-use/browser-use/issues

**Full changelog:** https://github.com/browser-use/browser-use/compare/0.13.14...1.0.0

</details>

---

> **Source** [browser-use/browser-use](https://github.com/browser-use/browser-use) · `1.0.0` · 2026-11-10 · [upstream release](https://github.com/browser-use/browser-use/releases/tag/1.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
