---
title: "LocalAI v4.10.0"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.10.0"
version: "v4.10.0"
published: "2026-09-17"
type: "minor"
lang: "en"
---

# LocalAI v4.10.0

# 🎉 LocalAI 4.10.0 Release! 🚀

<h1 align="center">
  <br>
  <img height="300" src="https://raw.githubusercontent.com/mudler/LocalAI/refs/heads/master/core/http/static/logo.png">
  <br>
  <br>
</h1>

LocalAI 4.10.0 is out!

Twenty-eight days and 280 pull requests. The work landed on three fronts: operating a fleet, feeding it models from private sources, and fixing the backends you depend on. A fleet operations dashboard replaces the flat node list with cluster-wide health, capacity, running models, and bulk lifecycle actions. A credentials file lets one `credentials.yaml` authenticate OCI registries, galleries and direct downloads without scattering tokens across environment variables. And `local-ai benchmark` measures end-to-end latency and throughput from the CLI.

The ds4 backend had four fixes that together make it reliable on CUDA: the kernels now build for the target architecture, abandoned inference is cancelled, generation boundaries are enforced, and prefilled reasoning is separated from content. Distributed mode gained seven stabilisation fixes across staging, liveness, virtual models and the control-plane database. Four CVEs were patched, `enable_thinking=false` is now honoured across every text backend, and Apple M5 no longer SIGSEGVs at startup.

**Highlights:**

- 📊 **Fleet operations dashboard** - a real-time cluster overview replacing the flat node list. Aggregate health bands, capacity gauges for VRAM/RAM/CPU/disk, a running-models tab showing replica placement across workers, bulk drain/resume/remove with bounded concurrency, and a slide-out node inspector. Workers now report CPU telemetry at registration and heartbeat.
- 🔑 **Credentials file for private sources** - one `credentials.yaml` authenticates OCI registries, galleries, HTTP downloads and `github:` URIs. Supports basic auth, bearer tokens and custom headers, with secrets read at use time so rotated K8s secret mounts take effect without restart, and full masking in logs and error messages.
- 📏 **`local-ai benchmark` CLI command** - measures end-to-end latency and throughput against configured text models. Reports min/mean/max latency and completion tokens/sec across warmup and measured runs, with table and JSON output, redirect blocking, and API-key redaction.
- 🔧 **vllm-cpp LoRA fusion at load time** - `lora_adapters` and `lora_scales` are now consumed by the vllm-cpp video engine, fusing LoRA deltas into DiT weights at engine load. Works for both LTX2.5 and MiniMax-H3 through one generic path.
- 🌍 **Environment variables per model** - an `env:` map in model config injects variables into the backend process environment, so `CUDA_VISIBLE_DEVICES` or `VLLM_CACHE_DIR` can be pinned per model without wrapping the backend in a script.
- 💬 **`template.system_messages_after_first`** - agent frameworks that append system instructions mid-conversation no longer crash Qwen3.x models. Late system turns can be merged into the leading system message or forwarded as user turns.
- 🧠 **`context_size` in `/v1/models/capabilities`** - clients can now read each model's effective context window to budget tokens and truncate prompts without probing the model config out-of-band.
- 🛡️ **Four CVEs patched** - ip-address 10.3.1 (CVE-2026-69192), containerd 1.7.32 and 1.7.33 (CVE-2026-46680, CVE-2026-53488), and react-router (GHSA-qwww-vcr4-c8h2).
- 🍎 **Apple M5 SIGSEGV fixed** - `go-m1cpu` bumped to v0.2.2, fixing a segmentation fault on Apple M5 hardware at startup.

Plus a focus mode toggle in chat settings, face enrollment replay for the 1:N registry, a ROCm build of `stablediffusion-ggml`, in-place editing of distributed scheduling rules, OCI layer download resumption, and 140 new gallery entries.



---

## 📊 This release in numbers

| | |
|---|---|
| Pull requests merged | **280** |
| Commits | 382 |
| Files changed | 633 (**+46,550** / -3,316) |
| Development window | 28 days (2026-08-20 to 2026-09-17) |
| Human contributors | 29, of whom **16 first-time** |
| Gallery entries | 1,707 to **1,847** (+140) |

Where the work landed:

| Area | Change |
|---|---|
| `core/` | +25,773 / -1,993 across 314 files |
| `gallery/` | +6,734 / -417 |
| `backend/` | +4,932 / -433 across 154 files |
| `pkg/` | +4,392 / -91 across 55 files |
| `docs/` | +2,526 / -101 across 48 files |
| `swagger/` | +322 |

---

## 📌 TL;DR

| Area | Summary |
|------|---------|
| 📊 **Fleet dashboard** | The Nodes page is rewritten as a fleet operations dashboard. A ClusterOverview shows health bands (healthy/draining/attention) and capacity gauges for VRAM, RAM, CPU and disk derived from the single `GET /api/nodes` response. A NodeFleetTable offers sortable, groupable, paginated rows with checkbox selection across filters and pages, and bulk Drain/Resume/Remove with bounded concurrency (limit 8). A Running Models tab shows all loaded replicas on healthy workers grouped by model, with replica count, node count, in-flight requests and backend types. Slide-out inspectors for nodes and models provide detail and drill-down. Workers now report `cpu_logical_cores`, `cpu_usage_percent` and `cpu_load_1` at registration and heartbeat. Lifecycle transitions are atomic: `MarkDraining` flips status and deletes model records in one transaction, `ResumeNode` is conditional (draining to healthy only), and HTTP endpoints return proper 404/409 instead of generic 500. |
| 🔑 **Credentials file** | `--credentials-file` / `LOCALAI_CREDENTIALS_FILE` loads a YAML list of rules, each matching a URL prefix and carrying one auth type: basic (`username` + `password`/`password_env`/`password_file`), bearer (`bearer`/`bearer_env`/`bearer_file`), or custom header (`header.name` + `header.value`/`_env`/`_file`). OCI registries consult the store first, then docker config. HTTP downloads, galleries and `github:` URIs authenticate through a `RoundTripper` that clones the request per redirect hop, so a cross-host redirect never carries the credential. Secrets are read at use time, not load time, so a rotated K8s secret mount takes effect without restart. `Credential` and `Store` implement `String`, `GoString` and `LogValue` so no `fmt` verb or `slog` call can print secret material. Unknown YAML keys are errors; match strings with `user:token@`, `?` or `#` are rejected at load. |
| 📏 **CLI benchmark** | `local-ai benchmark MODEL [MODEL ...]` sends non-streaming `POST /v1/chat/completions` requests at `temperature:0` with configurable `--runs` (default 3), `--warmup` (default 1), `--max-tokens` (default 128) and `--timeout` (default 5m). Reports min/mean/max latency and end-to-end completion tokens/sec per model. Output is a table by default or `--json` for structured data with per-sample latency and nullable token counts. The HTTP client refuses redirects, the API key is redacted from error messages, and the full report is buffered and only written after all models succeed, so a failure leaves no partial output. |
| 🔧 **vllm-cpp LoRA fusion** | The `lora_adapters`, `lora_scales`, `lora_adapter` and `lora_scale` config fields are now consumed by the vllm-cpp video backend. `buildLoraExtras` converts them into indexed `lora_path`/`lora_strength` key-value pairs (first adapter unsuffixed, subsequent ones `_2`, `_3`, ...), packs them via the ABI v18 extras seam, and hands them to `vllmVideoEngineLoad`. vllm.cpp fuses the LoRA deltas into the DiT weights at load. One generic path serves both LTX2.5 and MiniMax-H3. Adapters are always loaded; per-request prompt-activated LoRA is out of scope. |
| 🌍 **Per-model env vars** | An `env:` map on the model config is appended to the child process environment after the base env, so model vars override inherited system vars. Delivered through the common process-spawning layer in `pkg/model/process.go`, so every gRPC backend inherits it with no per-backend wiring. The UI renders an editable key/value map. Model vars take effect only when a model spawns its own backend process, not when it reuses a worker-supervised one. |
| 💬 **Late system messages** | `template.system_messages_after_first` controls what happens to system-role messages after the leading system block. `"merge"` folds them into the first system message with a `\n\n` separator; `"user"` rewrites them in place to role `user`; unset passes through. Fixes a Jinja exception (`System message must be at the beginning`) raised by Qwen3.x tokenizer templates when agent frameworks append system instructions mid-conversation. Runs after `stripEmptySystemMessages` and before tokenizer-template `system_prompt` injection. |
| 🧠 **context_size exposed** | `/v1/models/capabilities` now populates `entry.ContextSize` with `backend.EffectiveContextSize(cfg)` when the result is positive, letting clients budget tokens and truncate prompts without probing the model config out-of-band. |
| 🛡️ **CVE fixes** | ip-address to 10.3.1 (CVE-2026-69192), containerd to 1.7.32 (CVE-2026-46680) then 1.7.33 (CVE-2026-53488), react-router to 7.18.2 / 8.3.0 (GHSA-qwww-vcr4-c8h2). |
| 🍎 **Apple M5** | `go-m1cpu` bumped to v0.2.2, fixing a SIGSEGV on Apple M5 at startup. |
| 🧠 **Models** | 140 new gallery entries: Qwopus 3.6, OpenResearcher, LFM2.5 DSpark, Qwen3.8 small distills and Flash Next, UI-Mate 27B, Homura 30B, Ornith 1.5 35B and 9B, Granite 4.2, Tiel-Coder 35B, Thomson 1.0 Small, PhoneLLM, WeMM embedding, EXL3 vllm.cpp, Gemma 4 E4B, Orukeet for NeMo speech, and more. |

---

## 🚀 New Features & Major Enhancements

### 📊 Fleet operations dashboard

The Nodes page was a flat list of per-node cards. It showed you what was registered but not what the cluster was doing, and every lifecycle action was one node at a time.

The rewrite is a fleet operations dashboard with two tabs and a shared summary poller.

**ClusterOverview** sits at the top. A health band segments nodes into healthy, draining and attention counts. Capacity gauges show VRAM, RAM, CPU and disk, each reporting how many workers do not report that metric so the number is honest rather than averaged over reporting nodes. An attention queue filters for pending approval, offline/unhealthy, low VRAM, low RAM and low disk, surfacing nodes that need action without double-counting the headline total.

**NodeFleetTable** is sortable, groupable (by label or type) and paginated at 50 rows per page, with checkbox selection that persists across filters and pages. Bulk Drain, Resume and Remove run with bounded concurrency (limit 8) so a fleet with thousands of registrations is usable. Columns: status pill, address, capacity (VRAM + RAM), CPU, workload and heartbeat. An Approve button appears on pending nodes.

**Running models tab.** A fleet-wide view of loaded replicas on healthy workers, grouped by model: model name, replica count, node count, in-flight requests, backend types and last used. Per-model Stop shuts down all placements through `POST /backend/shutdown {model}`, which now fires the remote unloader even when a local process exists, and deduplicates nodes before sending stop messages.

**Inspectors.** A slide-out NodeInspector shows health, labels, resource bars, CPU, loaded model count, backends (lazy-loaded) and in-flight, with Approve/Drain/Resume actions. A ModelInspector shows replica placement grouped by node, with clickable node names that drill into a NodeInspector.

Workers now report `cpu_logical_cores`, `cpu_usage_percent` and `cpu_load_1` at registration and heartbeat. The dashboard shows CPU capacity and utilization, with idle cores derived as `cpu_logical_cores * (1 - cpu_usage_percent / 100)`.

Lifecycle transitions are now atomic. `MarkDraining` flips status and deletes model records in one transaction rather than as separate operations that could interleave with `SetNodeModel`. `ResumeNode` is conditional: draining to healthy only, preventing overwriting of pending approval or concurrent state changes. HTTP endpoints return proper 404 (not found) and 409 (status conflict) instead of a generic 500.

<img width="2880" height="1800" alt="ui-fleet-dashboard" src="https://github.com/user-attachments/assets/14311767-9b0e-4c32-82a4-421c76d0f406" />


> 🔗 PRs: #12046

### 🔑 Credentials file for private sources

Backends, models and gallery indexes can live behind private OCI registries, internal HTTP servers or private GitHub repos. Before this, each download path had its own ad-hoc auth mechanism, and tokens were scattered across environment variables.

One `credentials.yaml` file, loaded by `--credentials-file` / `LOCALAI_CREDENTIALS_FILE`, authenticates them all. It is a top-level YAML list of rules. Each rule has a `match` URL prefix and exactly one auth type: basic (`username` + `password` / `password_env` / `password_file`), bearer (`bearer` / `bearer_env` / `bearer_file`), or custom header (`header.name` + `header.value` / `header.value_env` / `header.value_file`). Exactly one of the plain, `_env` or `_file` form per secret; unknown keys are errors so a misspelled `pasword_env` fails loudly.

OCI registries (backend images, `oci://` and `ollama://` models, digest lookup, Range resume, cosign verify) consult the store first, then `authn.DefaultKeychain` (docker config). HTTP downloads, galleries and `github:` URIs authenticate through an `http.RoundTripper` that puts the credential on a clone of the request. net/http rebuilds each redirect hop from the original headers, so a redirect to another host never carries the credential. A caller-supplied credential (e.g. `HF_TOKEN`) takes precedence: the transport leaves an existing `Authorization` header alone.

Secrets are read at use time, not load time, so a rotated K8s secret mount takes effect without restart. `Credential` and `Store` implement `String`, `GoString` and `LogValue`, so no `fmt` verb or `slog` call, including when nested in unexported fields, can print secret material. Credentials go only to `https`, or to `http` when the rule sets `allow_insecure`. Match strings containing `user:token@`, `?` (where signed URLs carry tokens) or `#` are rejected at load. YAML decode errors are redacted: quoted scalar values (often secrets) are stripped, keeping only line numbers and parser wording.

> 🔗 PRs: #12028

### 📏 `local-ai benchmark` CLI command

A benchmark command for configured text models, answering "how fast is this model on this hardware" without leaving the terminal.

`local-ai benchmark MODEL [MODEL ...]` sends non-streaming `POST /v1/chat/completions` requests at `temperature:0` with configurable `--runs` (default 3), `--warmup` (default 1), `--max-tokens` (default 128) and `--timeout` (default 5m). It reports min, mean and max latency and end-to-end completion tokens/sec per model.

The throughput metric is `sum(completion_tokens) / sum(latencies)` across measured runs. It is `nil`/`N/A` if any sample omits `completion_tokens` from the response usage, or if total latency is zero. The command does not measure decode-only speed or time to first token; it is an end-to-end client benchmark covering HTTP transport, queueing, prompt processing, generation and parse.

The HTTP client refuses redirects by default, so a misconfigured endpoint behind a redirect does not silently succeed. The API key is redacted from error messages, and raw transport errors are masked as `HTTP request failed` to avoid credential echo. The full report is buffered in a `bytes.Buffer` and only written via `io.Copy` after all models succeed, so a failure leaves no partial output. Signal handling cancels the active request on SIGINT/SIGTERM.

Output is a table by default or `--json` for structured data with per-sample latency and nullable token counts. The API key is not included in the JSON. To compare backends, configure separate model aliases per backend and pass those alias names.

> 🔗 PRs: #12020

### 🔧 vllm-cpp LoRA fusion at load time

The `lora_adapters` and `lora_scales` config fields are standard LocalAI fields that list LoRA adapter weight files and per-adapter strength multipliers. The vllm-cpp video backend now consumes them for the first time, fusing LoRA deltas into DiT (diffusion Transformer) weights at engine load.

`buildLoraExtras` converts the config fields into indexed `lora_path` / `lora_strength` key-value pairs. The first adapter is unsuffixed; subsequent ones get `_2`, `_3`, etc. If the singular `lora_adapter` is set, it is prepended as the first adapter before the plural list. Relative adapter paths are joined to the model path; absolute paths pass through. Strength defaults to 1.0 when no scale is provided.

The pairs are packed via the ABI v18 extras seam and handed to `vllmVideoEngineLoad`. vllm.cpp's `ResolveDitLoraSpecs` fuses the LoRA deltas into the DiT weights at load. One generic path serves both LTX2.5 and MiniMax-H3, since the engine auto-detects the DiT family from the checkpoint.

Adapters are always loaded; there is no per-request activation in this path. Runtime prompt-activated LoRA (punica-style `<lora:name:strength>`) is out of scope and tracked separately.

> 🔗 PRs: #12082

### 🌍 Environment variables per model

An `env:` map on the model config injects variables into the backend process environment. The primary use case is pinning `CUDA_VISIBLE_DEVICES` per model to control GPU placement, but it applies to any backend that reads environment variables.

```yaml
name: vllm-model
backend: vllm
env:
  CUDA_VISIBLE_DEVICES: "0,1"
  VLLM_CACHE_DIR: "/tmp/vllm_cache"
```

The map is delivered through the common process-spawning layer in `pkg/model/process.go`, so every gRPC backend inherits it with no per-backend wiring. Model vars are appended last, after the base env, so they override same-named inherited system vars. The UI renders an editable key/value map.

Model vars take effect only when a model spawns its own backend process, not when it reuses a worker-supervised one. There is no allowlist or blocklist: model configs are an operator trust boundary, consistent with LocalAI's general posture.

> 🔗 PRs: #10721

### 💬 `template.system_messages_after_first`

Agent frameworks legitimately append system instructions mid-conversation: a tool-parameter prompt before a call, an adjustment prompt after a result. The Qwen3.x family of tokenizer templates raises `Jinja Exception: System message must be at the beginning` for any system-role message after the first turn, returning HTTP 500. Plain chat looks healthy; every agent task fails.

`template.system_messages_after_first` controls what happens to system-role messages that appear after the contiguous leading system block:

- `"merge"` folds late system messages into the first system message with a `\n\n` separator, dropping them from their original position.
- `"user"` rewrites each late system message in place to role `user`, keeping its position and content.
- unset (default) passes through unchanged; the tokenizer template decides.

The normalization runs in `ChatEndpoint` after `stripEmptySystemMessages` and before tokenizer-template `system_prompt` injection, so the Jinja template never sees an out-of-place system message. It only touches requests whose model config opts in, so default behavior is unchanged.

`"user"` is the recommended mode for agent workloads: the instruction stays where the framework placed it, and the model follows it.

> 🔗 PRs: #11906

### 🧠 `context_size` in `/v1/models/capabilities`

The capabilities endpoint now populates `entry.ContextSize` with `backend.EffectiveContextSize(cfg)` when the result is positive. Clients can read each model's effective context window to budget tokens, truncate prompts and history, and avoid sending more context than the model accepts, without having to probe the model config out-of-band.

> 🔗 PRs: #12083

### 🕵️ Face enrollment replay

The face recognition 1:N registry gains a replay path. `FaceRegisterRequest` now accepts an `Embedding` (pre-computed vector) and `RegisteredAt` (original timestamp), so a client that previously extracted an embedding via `/v1/face/embed` can replay the saved vector, name, labels and timestamp directly, skipping image decoding and the `FaceEmbed` inference call entirely.

The store derives a deterministic ID from the embedding bytes and store namespace via `uuid.NewSHA1`, so replaying the same vector after a restart or on another replica returns the same ID without creating duplicates. The server does not persist the registry itself; clients must retain and replay the records to restore the registry after a restart.

> 🔗 PRs: #11908

### 🎯 Focus mode toggle

Focus mode (which collapses the global app sidebar and slims the header once a conversation has at least one message, with Esc temporarily restoring them) already existed as session-only behavior. This adds a persistent opt-out toggle in the chat settings drawer, backed by `localStorage` under `localai_chat_focus_mode`. It defaults to enabled; with the toggle off, the full layout stays even in an active conversation.

> 🔗 PRs: #11750

### 🧰 Smaller features worth knowing about

- **`stablediffusion-ggml` builds a ROCm variant.** A ROCm build of the stable-diffusion ggml backend, extending accelerator coverage beyond CUDA and Metal.
- **Scheduling rules editable in place.** Distributed scheduling rules can now be edited in place in the UI rather than through a round-trip to the config file.
- **Scheduling rules keyed by model alias.** Distributed scheduling rules can be keyed by a model alias, not just a model name, so aliased models participate in scheduling correctly.
- **XIO copy buffer size is configurable.** The copy buffer size for XIO transfers is now configurable rather than fixed.
- **OCI layer download resumption.** Interrupted OCI layer downloads resume rather than restarting from scratch.
- **Progress updates no longer throttle downloads.** Status updates were throttling downloads; the progress path is now bounded so it does not compete with the transfer.
- **Node operation controls restored.** The node detail page's operation controls (drain, resume, remove) are restored after a regression that hid them, and backend actions are tested through their menu.

> 🔗 PRs: #11774, #11667, #11771, #11660, #11688, #11661, #12068, #12069

---

## 🐛 Bug Fixes (recap)

**Security / CVE:**
- `fix`: upgrade ip-address to 10.3.1 (CVE-2026-69192) - #11632
- `fix`: upgrade containerd to 1.7.32 (CVE-2026-46680) - #11634
- `fix`: upgrade react-router to 7.18.2, 8.3.0 (GHSA-qwww-vcr4-c8h2) - #11644
- `fix`: upgrade containerd to 1.7.33 (CVE-2026-53488) - #11655
- `fix(auth)`: bypass API-key auth for CORS preflight (OPTIONS) requests - #11113

**ds4:**
- `fix(ds4)`: separate prefilled reasoning from content - #11802
- `fix(ds4)`: enforce generation boundaries - #11821
- `fix(ds4)`: cancel abandoned inference - #11822
- `fix(ds4)`: build CUDA kernels for the target architecture - #11840
- `fix(ds4)`: resolve Hugging Face repository imports - #11340

**Distributed mode:**
- `fix(distributed)`: restore node liveness tests - #11694
- `fix(distributed)`: survive a slow control-plane database - #11837
- `fix(distributed)`: stage sound detection audio - #11907
- `fix(distributed)`: finalize stalled model uploads - #11910
- `fix(distributed)`: resolve paths for virtual models - #11911
- `fix(distributed)`: bound ephemeral staging - #11924
- `fix(distributed)`: pass raw JPEG base64 through staging - #11956
- `fix(distributed)`: keep staging operations stable - #11663
- `fix(distributed)`: keep model replicas config-consistent - #11664

**Realtime:**
- `fix(realtime)`: accept GA WebRTC signaling - #11778
- `fix(realtime)`: skip responses for empty transcripts - #11940
- `fix(realtime)`: resolve pipeline voice profiles - #11942
- `fix(realtime)`: support voice profile switching - #11948

**Backends:**
- `fix(backends)`: honor enable_thinking=false in sglang and vllm - #11715
- `fix(backends)`: honor enable_thinking=false in mlx and vllm-omni - #11962
- `fix(diffusers)`: auto-detect CUDA instead of defaulting to CPU - #11891
- `fix`: prefer the Intel diffusers venv SYCL runtime at startup - #11971
- `fix(qwen-tts)`: restore CUDA 13 SDPA fallback - #12067
- `fix(faster-whisper)`: manually install ctranslate2 with rocm support - #9839
- `fix(whisper)`: honour positional listen address argument - #11652
- `fix(backends)`: bound temporary scratch files - #11941
- `fix(openresponses)`: support Codex WebSocket warm-up - #11608

**Gallery and models:**
- `fix(gallery)`: tag MTP-enabled models - #11653
- `fix(gallery)`: remove duplicate Qwopus entries - #11670
- `fix(gallery)`: use published F16 mmproj for qwythos-9b - #11792
- `fix(gallery)`: persist inference defaults where the loader reads them - #11232
- `fix(gallery)`: default audio-cpp models to backend:best - #11892
- `fix(gallery)`: restore entries clobbered by batch PR applies - #12016
- `fix(gallery)`: use native Ministral tool parsing - #12022
- `fix(vram)`: persist remote probe metadata - #11487
- `fix(ollama)`: accept :latest tag on model lookup - #11732

**UI:**
- `fix(ui)`: omit empty system prompt so model default applies - #11838
- `fix(ui)`: omit GPU recommendations that do not fit - #11945
- `fix(ui)`: preserve percent signs in route parameters - #11883
- `fix(ui)`: restore node operation controls - #12068
- `fix(ui)`: test backend actions through their menu - #12069
- `fix(ui)`: size model fit against the cluster - #11765

**Other:**
- `fix(deps)`: bump go-m1cpu to v0.2.2 to fix SIGSEGV on Apple M5 - #11736
- `fix(downloader)`: make file:// installs reachable again - #11734
- `fix(detection)`: avoid temporary image files - #11938
- `fix(worker)`: resolve temporary paths in tests - #11944
- `fix(ci)`: bound Discord release summaries - #11695
- `fix(ci)`: stop the e2e teardown from failing a green suite - #11816
- `fix(ci)`: unbreak the e2e build and the darwin vllm-metal pin - #11849
- `fix(progress)`: stop status updates throttling downloads - #11661
- `fix(oci)`: resume interrupted layer downloads - #11688

---

## 🧠 Models

140 new gallery entries this cycle, taking the index from 1,707 to 1,847.

Text generation: Qwopus 3.6, OpenResearcher, LFM2.5 DSpark, Qwen3.8 small distills, Qwen3.8 Flash Next, Qwen3.8 OBLITERATED, Qwen3.8 Cold Fusion, Qwen3.8 GSQ-RCO, UI-Mate 27B, Homura 30B, Ornith 1.5 35B and 9B (including OBLITERATED), Granite 4.2, Tiel-Coder 35B, Thomson 1.0 Small, PhoneLLM, and Huihui Qwen3.8 Flash Next.

Embeddings: WeMM embedding variants.

EXL3: vllm.cpp EXL3 models.

Vision: Gemma 4 E4B HauhauCS variants.

Speech: Orukeet added to the NeMo speech backend.

> 🔗 PRs: #11662, #11658, #11676, #11675, #11672, #11680, #11691, #11714, #11719, #11723, #11766, #11772, #11763, #11775, #11779, #11754, #11751, #11787, #11803, #11912, #11625, #11903, #11921, #11998, #11716

---

## 👒 Dependencies

Submodule and pin bumps this cycle:

| Project | Bumps |
|---|---|
| 0xShug0/audio.cpp | 16 |
| ggml-org/llama.cpp | 12 |
| CrispStrobe/CrispASR | 10 |
| ikawrakow/ik_llama.cpp | 8 |
| leejet/stable-diffusion.cpp | 7 |
| mudler/vllm.cpp | 6 |
| ggml-org/whisper.cpp | 6 |
| antirez/ds4 | 6 |
| ServeurpersoCom/omnivoice.cpp | 5 |
| NVIDIA/NeMo-Speech.cpp | 4 |
| PrismML-Eng/llama.cpp | 3 |
| mudler/depth-anything.cpp | 2 |
| vllm-project/vllm cu130 wheel, vllm-metal (darwin), OpenNMT/CTranslate2 ROCm wheel, TheTom/llama-cpp-turboquant | 1 each |

Plus vllm 0.26.0 to 0.29.0 in the Python backends, torch 2.13.0+xpu to 2.14.0+xpu, grpcio to 1.83.1 across coqui/rerankers/vllm/template, charset-normalizer to 3.5.1, securego/gosec to 2.29.0, LocalAGI and localrecall to v0.6.5, 16 stale dependabot entries removed, npm_and_yarn group updates, and inference defaults refreshed from unsloth.

---

## 📖 Documentation

New pages for the CLI benchmark command and the credentials file / private sources guide. The distributed-mode docs document the fleet dashboard, CPU telemetry and the new endpoint error codes. Model configuration gained the `env:` map, `template.system_messages_after_first` and `context_size` documentation. The DCO guide clarifies that maintainer-operated automation may sign off. Installation paths were simplified, an Apache APISIX reverse proxy example was added, dead anchors and section links were fixed, documented env var and CLI flag names were corrected, and the containers page was fixed for Podman image qualification. A FAQ note covers `OPENAI_BASE_URL` for pointing clients at LocalAI, and Solstone was added to the README and ADOPTERS.md.

> 🔗 PRs: #11631, #11294, #11850, #11700, #11885, #11884, #11886, #11749, #11904, #11310, #12044, #12045

---

## 🙌 New Contributors

- @localai-org-bot made their first contribution in #11631
- @DanielSwift1992 made their first contribution in #11686
- @leilei3167 made their first contribution in #11715
- @sz-po made their first contribution in #11736
- @blackd made their first contribution in #11750
- @ginavalent made their first contribution in #11806
- @FiloSpaTeam made their first contribution in #11802
- @aimansour made their first contribution in #11700
- @simpleqt made their first contribution in #11885
- @alex-mazzariol made their first contribution in #11749
- @seven7763 made their first contribution in #11310
- @QiuLsG made their first contribution in #11883
- @SomSamantray made their first contribution in #11652
- @devv-shayan made their first contribution in #11962
- @Nathan-Roll1 made their first contribution in #11998
- @quartzjer made their first contribution in #12045

Thanks also to @mudler, @anupamme, @mvanhorn, @jimmykarily, @Nold360, @Anai-Guo, @SuperMarioYL, @eglia and @walcz-de for their contributions this cycle.

<!-- Release notes generated using configuration in .github/release.yml at master -->

## What's Changed
### Bug fixes :bug:
* fix: upgrade ip-address to 10.3.1 (CVE-2026-69192) by @anupamme in https://github.com/mudler/LocalAI/pull/11632
* fix: upgrade github.com/containerd/containerd to 1.7.32 (CVE-2026-46680) by @anupamme in https://github.com/mudler/LocalAI/pull/11634
* fix: upgrade react-router to 7.18.2, 8.3.0 (GHSA-qwww-vcr4-c8h2) by @anupamme in https://github.com/mudler/LocalAI/pull/11644
* fix(gallery): tag MTP-enabled models by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11653
* fix: upgrade github.com/containerd/containerd to 1.7.33 (CVE-2026-53488) by @anupamme in https://github.com/mudler/LocalAI/pull/11655
* fix(gallery): remove duplicate Qwopus entries by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11670
* fix(vram): persist remote probe metadata by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11487
* fix(distributed): restore node liveness tests by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11694
* fix(backends): honor enable_thinking=false in sglang and vllm by @leilei3167 in https://github.com/mudler/LocalAI/pull/11715
* fix(ollama): accept :latest tag on model lookup by @leilei3167 in https://github.com/mudler/LocalAI/pull/11732
* fix(deps): bump go-m1cpu to v0.2.2 to fix SIGSEGV on Apple M5 by @sz-po in https://github.com/mudler/LocalAI/pull/11736
* fix(realtime): accept GA WebRTC signaling by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11778
* fix(gallery): use published F16 mmproj for qwythos-9b by @leilei3167 in https://github.com/mudler/LocalAI/pull/11792
* fix(ds4): separate prefilled reasoning from content by @FiloSpaTeam in https://github.com/mudler/LocalAI/pull/11802
* fix(ds4): enforce generation boundaries by @FiloSpaTeam in https://github.com/mudler/LocalAI/pull/11821
* fix(distributed): survive a slow control-plane database by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11837
* fix(ui): omit empty system prompt so model default applies by @leilei3167 in https://github.com/mudler/LocalAI/pull/11838
* fix(ds4): cancel abandoned inference by @FiloSpaTeam in https://github.com/mudler/LocalAI/pull/11822
* fix(ds4): build CUDA kernels for the target architecture by @FiloSpaTeam in https://github.com/mudler/LocalAI/pull/11840
* fix(gallery): persist inference defaults where the loader reads them by @jimmykarily in https://github.com/mudler/LocalAI/pull/11232
* fix(downloader): make file:// installs reachable again (#11701) by @Anai-Guo in https://github.com/mudler/LocalAI/pull/11734
* fix(distributed): stage sound detection audio by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11907
* fix(distributed): finalize stalled model uploads by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11910
* fix(distributed): resolve paths for virtual models by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11911
* fix(diffusers): auto-detect CUDA instead of defaulting to CPU by @blackd in https://github.com/mudler/LocalAI/pull/11891
* fix(gallery): default audio-cpp models to backend:best by @blackd in https://github.com/mudler/LocalAI/pull/11892
* fix(distributed): bound ephemeral staging by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11924
* fix(detection): avoid temporary image files by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11938
* fix(realtime): skip responses for empty transcripts by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11940
* fix(realtime): resolve pipeline voice profiles by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11942
* fix(backends): bound temporary scratch files by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11941
* fix(worker): resolve temporary paths in tests by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11944
* fix(realtime): support voice profile switching by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11948
* fix(distributed): pass raw JPEG base64 through staging by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11956
* fix(ui): omit GPU recommendations that do not fit by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11945
* fix: prefer the Intel diffusers venv SYCL runtime at startup by @mvanhorn in https://github.com/mudler/LocalAI/pull/11971
* fix(ds4): resolve Hugging Face repository imports by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11340
* fix(openresponses): support Codex WebSocket warm-up by @aimansour in https://github.com/mudler/LocalAI/pull/11608
* fix(ui): preserve percent signs in route parameters by @QiuLsG in https://github.com/mudler/LocalAI/pull/11883
* fix(whisper): honour positional listen address argument by @SomSamantray in https://github.com/mudler/LocalAI/pull/11652
* fix(auth): bypass API-key auth for CORS preflight (OPTIONS) requests by @SuperMarioYL in https://github.com/mudler/LocalAI/pull/11113
* fix(backends): honor enable_thinking=false in mlx and vllm-omni by @devv-shayan in https://github.com/mudler/LocalAI/pull/11962
* fix(faster-whisper): manually install ctranslate2 with rocm support before installing other dependencies by @eglia in https://github.com/mudler/LocalAI/pull/9839
* fix(gallery): restore entries clobbered by batch PR applies by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12016
* fix(gallery): use native Ministral tool parsing by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12022
* fix(ui): restore node operation controls by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12068
* fix(qwen-tts): restore CUDA 13 SDPA fallback by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12067
* fix(ui): test backend actions through their menu by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12069
### Exciting New Features 🎉
* feat(ui): add 'Focus mode' option in chat settings to persistently toggle the sidebar auto-collapse by @blackd in https://github.com/mudler/LocalAI/pull/11750
* feat(faces): replay saved face enrollments by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11908
* [chat] feat: template.system_messages_after_first — merge or forward late system turns by @walcz-de in https://github.com/mudler/LocalAI/pull/11906
* [model-config] feat: add environment variables support for backends by @Nold360 in https://github.com/mudler/LocalAI/pull/10721
* feat(cli): benchmark configured text models by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12020
* feat(downloads): authenticate registries, galleries and downloads from a credentials file by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12028
* feat(nodes): add fleet operations dashboard by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12046
* feat: expose context_size in /v1/models/capabilities by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12083
* [vllm-cpp] wire lora_adapters/lora_scales into DiT load-time fusion by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12082
### 🧠 Models
* feat(gallery): add Qwopus 3.6 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11662
* feat(gallery): add OpenResearcher variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11658
* feat(gallery): add LFM2.5 DSpark variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11676
* feat(gallery): add Qwen3.8 small distills by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11675
* feat(gallery): add UI-Mate 27B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11672
* feat(gallery): add Homura 30B by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11680
* feat(gallery): add Qwen3.8 OBLITERATED variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11691
* feat(gallery): add Ornith 1.5 35B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11714
* feat(gallery): add Granite 4.2 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11719
* feat(gallery): add Tiel-Coder 35B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11723
* feat(gallery): add Thomson 1.0 Small variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11766
* feat(gallery): add PhoneLLM variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11772
* feat(gallery): add Qwen3.8 Flash Next by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11763
* feat(gallery): add WeMM embedding variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11775
* feat(gallery): add Granite 4.2 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11779
* feat(gallery): add Qwen3.8 Cold Fusion by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11754
* feat(gallery): add LFM2.5 8B DSpark variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11751
* feat(gallery): add Qwen3.8 GSQ-RCO variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11787
* feat(gallery): add Ornith 1.5 9B OBLITERATED by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11803
* feat(gallery): add EXL3 vllm.cpp models by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11912
* feat(gallery): add Ornith 1.5 35B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11625
* feat(gallery): add Gemma 4 E4B HauhauCS variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11903
* feat(gallery): add Huihui Qwen3.8 Flash Next by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11921
* [gallery] feat: add Orukeet to the NeMo speech backend by @Nathan-Roll1 in https://github.com/mudler/LocalAI/pull/11998
### 📖 Documentation and examples
* docs(website): simplify installation paths by @localai-org-bot in https://github.com/mudler/LocalAI/pull/11631
* docs: add Apache APISIX reverse proxy example by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11294
* docs(dco): let maintainer-operated automation sign off by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11850
* docs(llama-cpp): clarify multimodal speculative decoding by @aimansour in https://github.com/mudler/LocalAI/pull/11700
* docs: fix dead anchors and a dead section link by @simpleqt in https://github.com/mudler/LocalAI/pull/11885
* docs: fix dead links in the PR template and backends docs by @simpleqt in https://github.com/mudler/LocalAI/pull/11884
* docs: correct documented env var and CLI flag names by @simpleqt in https://github.com/mudler/LocalAI/pull/11886
* Update containers.md to fix podman image qualification by @alex-mazzariol in https://github.com/mudler/LocalAI/pull/11749
* docs(integrations): add Distribution Packages section by @blackd in https://github.com/mudler/LocalAI/pull/11904
* docs(faq): note OPENAI_BASE_URL env var for pointing clients at LocalAI by @seven7763 in https://github.com/mudler/LocalAI/pull/11310
* Add Solstone app link and image to README by @mudler in https://github.com/mudler/LocalAI/pull/12044
* Add solstone to ADOPTERS.md by @quartzjer in https://github.com/mudler/LocalAI/pull/12045
### 👒 Dependencies
* chore(deps): update charset-normalizer requirement from >=3.4.9 to >=3.5.1 in /backend/python/vllm by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11637
* chore(deps): remove 16 dependabot entries for directories that no longer exist by @DanielSwift1992 in https://github.com/mudler/LocalAI/pull/11686
* chore(deps): bump vllm from 0.26.0 to 0.28.0 in /backend/python/vllm by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11752
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `6b3edaaf32cc19e5bb2d819c788bd557eddc8eba` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11793
* chore: :arrow_up: Update ggml-org/whisper.cpp to `eacbd8234c6654cdbf2c377f72b2106875479bdc` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11796
* chore: :arrow_up: Update CrispStrobe/CrispASR to `18b3e3f8456748a6380dc4c13817df244b695d39` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11799
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `3c58ae373a0081c884099f435fb16ca720852bf7` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11809
* chore: :arrow_up: Update mudler/vllm.cpp to `6a544bdb89eb5a3512ac922241439e45f24d74d4` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11797
* chore: :arrow_up: Update 0xShug0/audio.cpp to `bf3315fe4aaa16dc1125f580c29aff90a8900b36` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11794
* chore: :arrow_up: Update mudler/depth-anything.cpp to `02ba082274e001a63e50de5a1eb0ccc50c6af4b1` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11810
* chore: :arrow_up: Update CrispStrobe/CrispASR to `78c545eb80409b91291642ddb23b3a6dc044fd34` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11811
* chore: :arrow_up: Update 0xShug0/audio.cpp to `3497b7cc44753e2c141d8fe60ac42cec433e3281` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11818
* chore: :arrow_up: Update mudler/vllm.cpp to `839ea1ceddb787778b6bd86a38a917a1aab74d8f` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11817
* chore: :arrow_up: Update ggml-org/llama.cpp to `3466812d1f06728effe7c0f3c0671117f461672d` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11798
* chore: :arrow_up: Update 0xShug0/audio.cpp to `f334cff70a68ea3d2e40d6638733e8c1ec434164` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11830
* chore: :arrow_up: Update mudler/vllm.cpp to `6bf3abb580982f4fd2e4525ef37802ee0ce28981` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11828
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `caf7eae5282d840d77e9f91a56df7d2ef28fa612` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11842
* chore: :arrow_up: Update NVIDIA/NeMo-Speech.cpp to `56b60d432f1731d6d5b28a4c5a31cbaf871daba1` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11846
* chore: :arrow_up: Update CrispStrobe/CrispASR to `ff3945c94cab9191199a5d531a32c4e9535c094b` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11829
* chore: :arrow_up: Update 0xShug0/audio.cpp to `c18b7f737aac0a2855e9f963a427498739ad40fe` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11843
* chore: :arrow_up: Update ggml-org/llama.cpp to `9cffdcc801582616250520966699cb5b25d28243` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11845
* chore(deps): bump the npm_and_yarn group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11835
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `fe215a8ccdce6b844d2a3a3bbde08ae76a6284bf` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11864
* chore(deps): bump grpcio from 1.83.0 to 1.83.1 in /backend/python/coqui by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11856
* chore(deps): bump grpcio from 1.82.1 to 1.83.1 in /backend/python/rerankers by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11852
* chore(deps): bump grpcio from 1.83.0 to 1.83.1 in /backend/python/vllm by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11853
* chore: :arrow_up: Update 0xShug0/audio.cpp to `8fe1ab805555c72aaf06d83828b523dfc6ed796d` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11861
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `78ce63c90d36b94a765073e8cbe0d241fc114590` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11865
* chore: :arrow_up: Update NVIDIA/NeMo-Speech.cpp to `69d7fd46b253043ed6649bf35d68407448912a8e` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11863
* chore: :arrow_up: Update ggml-org/whisper.cpp to `52a939a2a762224e255d366c1182b2af4dd1a032` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11877
* chore(deps): bump grpcio from 1.82.1 to 1.83.1 in /backend/python/common/template by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11858
* chore: :arrow_up: Update 0xShug0/audio.cpp to `cd98afb3264044aeff33618df486c81de1bee7e7` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11878
* chore(deps): bump the npm_and_yarn group across 1 directory with 3 updates by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11869
* chore: :arrow_up: Update ggml-org/llama.cpp to `427291b5b34cd914a31b3fd3b61a68f6184f4b9f` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11866
* chore: :arrow_up: Update CrispStrobe/CrispASR to `c6d4265ae2ee2b8931b09d7d25d5c65c75c36a41` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11862
* chore(deps): bump torch from 2.13.0+xpu to 2.14.0+xpu in /backend/python/common/template by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11859
* chore: :arrow_up: Update NVIDIA/NeMo-Speech.cpp to `ffa38cb2408f1e832a36d46fef5e3e1e80d07e6c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11887
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `040c8b344d8c670ce1475194751d119b5ef82c78` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11890
* chore: :arrow_up: Update 0xShug0/audio.cpp to `c41ffefb44c16345c0ac57a0030f4cd3b5fbc4b8` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11888
* chore: :arrow_up: Update ggml-org/llama.cpp to `74a7c897f049c17e7080423aa2111776eff6ebbf` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11889
* chore: :arrow_up: Update 0xShug0/audio.cpp to `f6277c1695a83cf388a8282c1c1a8757cf626f18` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11899
* chore: :arrow_up: Update ggml-org/llama.cpp to `465e49b9cea78a68b9c244ffb48d0ee24a82873d` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11897
* chore: :arrow_up: Update antirez/ds4 to `9ab705347c1775e7599ede7eb81a6255ec7dccb5` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11808
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `d8fb10c02977c8ca999f3fb4e02df9ecf10f7ba6` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11898
* chore: :arrow_up: Update ggml-org/llama.cpp to `67672dc5b76f8bc17785a19d3dc6d1463fc2902c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11920
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `d04e8950c1ec8d30248cbe996682b3182fb1adf6` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11919
* chore: :arrow_up: Update mudler/depth-anything.cpp to `14f7461d1f704761a038ac9f50dbde8fdb7275e2` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11918
* chore: :arrow_up: Update antirez/ds4 to `f62ca29a308724cde5bc99134ede19104b2a3260` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11917
* chore: :arrow_up: Update CrispStrobe/CrispASR to `301acd87b036764973b8bfba71e0a21818036d33` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11916
* chore: :arrow_up: Update 0xShug0/audio.cpp to `9c6a282337cc83f227cc10428867a478947706ad` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11915
* chore: :arrow_up: Update ggml-org/whisper.cpp to `c44b60b8053bbf2a5c1e014f11323fb3f2485177` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11937
* chore: :arrow_up: Update antirez/ds4 to `6289c516273979173abbc062209a81dd3706b804` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11936
* chore: :arrow_up: Update NVIDIA/NeMo-Speech.cpp to `a5b6953c4a579a2bbd1c0913ad8a85c2a4d99953` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11935
* chore: :arrow_up: Update 0xShug0/audio.cpp to `05e508a70e3600b01454c647cdb122133ba8e64c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11933
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `1a2a8604a6c6c6413c06bf9adfc2f64329af4366` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11932
* chore: :arrow_up: Update ggml-org/llama.cpp to `f3f1a8f2760f28325a5ec20c05b171e5b7c83a29` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11934
* chore(deps): bump the npm_and_yarn group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11957
* chore: :arrow_up: Update 0xShug0/audio.cpp to `fa5aaac9266a98c68f8a5c9fcd1ba6ff65875416` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11955
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `3e416d7f5a9d4cc3195e8171dbf891541ca59c6a` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11952
* chore: :arrow_up: Update ggml-org/llama.cpp to `434ddbbc0e30522e897670681e503b797c12b7c1` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11953
* chore: :arrow_up: Update vllm-project/vllm cu130 wheel to `0.29.0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11954
* chore: :arrow_up: Update 0xShug0/audio.cpp to `efb04233dab73aeee4b2912042a90e7b36329061` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11964
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `3bb386eb68ffee0a5dc7db21da0735d594929eeb` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11967
* chore: :arrow_up: Update ggml-org/llama.cpp to `df03399b885831b2a1603b3abb0d8c156808e363` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11966
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `b68d58624d227682eb4b95ef8bcf569cd1311eb5` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11965
* chore(deps): bump securego/gosec from 2.27.1 to 2.29.0 by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11854
* chore(deps): bump vllm from 0.28.0 to 0.29.0 in /backend/python/vllm by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11961
* chore(deps): bump LocalAGI and localrecall to v0.6.5 by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11985
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `7f410a3793c5bba8eb198e962ce7a3d6095f9d89` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12012
* chore: :arrow_up: Update CrispStrobe/CrispASR to `ab87fba65a4ade1ef30ccaa881458a0914aae557` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12011
* chore: :arrow_up: Update 0xShug0/audio.cpp to `5ba81ac54fb071b835680973f8868546b4db372b` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12010
* chore: :arrow_up: Update ggml-org/whisper.cpp to `1da4dc82fa7996d4edda05890dca65aeceaafd6d` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12009
* chore: :arrow_up: Update OpenNMT/CTranslate2 ROCm wheel to `v4.8.2` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12004
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `2ebbdcf281ce4b632e326011974da5a8b35c6b27` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12006
* chore: :arrow_up: Update vllm-metal (darwin) to `v0.29.0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12007
* chore: :arrow_up: Update CrispStrobe/CrispASR to `a4db74cfd13c8674a7815608baaa505e673ce930` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12035
* chore: :arrow_up: Update 0xShug0/audio.cpp to `ff1bcc4555ff99c4383329b0b21b52a18cc8b3cd` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12033
* chore: :arrow_up: Update antirez/ds4 to `a04f46fa423e45712c8c7e430eff422479f314a3` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12013
* chore: :arrow_up: Update mudler/vllm.cpp to `60990ee784101f74f6d1775575e9e89dfb26f73a` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12014
* chore: :arrow_up: Update ggml-org/llama.cpp to `5f436dddb440a288ee5611d7d1eca564a6aca9f4` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12008
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `42d6c0ab92fe6595776b28e3f7c8925db79b31f5` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12034
* chore: :arrow_up: Update PrismML-Eng/llama.cpp to `d8f26eec76da6d09bb708bcba51ef64b8cd868a3` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12005
* chore: :arrow_up: Update TheTom/llama-cpp-turboquant to `407f3237bfb3eeaff61546797de3d8c1a96be748` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12003
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `7434a014237e55b2e0d36edc2ace6acfb82fea1c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12052
* chore: :arrow_up: Update CrispStrobe/CrispASR to `97cea0919f1b5abfa2395f5791f88a05a0151223` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12054
* chore: :arrow_up: Update 0xShug0/audio.cpp to `582a63ca8b6f76235f1b8636e734930218c78c05` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12056
* chore: :arrow_up: Update mudler/vllm.cpp to `67c81102777296fdd506945860eb3030b9fad71a` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12053
* chore: :arrow_up: Update antirez/ds4 to `9139e2ae58a41503968a500f36f75895c1ba63fc` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12062
* chore: :arrow_up: Update PrismML-Eng/llama.cpp to `6ac5eb087009a762a3f61876f7dc152bc8600bf4` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12055
* chore: :arrow_up: Update ggml-org/llama.cpp to `96ffdc41ceb055e1c2d3d96667ae6d9f0ccb710b` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12057
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `3d341e55d365423476f8739d396b9a03d5277055` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12059
* chore: :arrow_up: Update ggml-org/whisper.cpp to `1d549b3cecc2d98d76d4ddc2edca0d1512f5d7a0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12060
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `59c23bce0d82be3a922023ab811194f05b3e2faa` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12061
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `3c30bdcfe6cc53121bd7a7b377bf8b55f526efa3` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12079
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `d85a1d7e91e5bc2f83a796542a8d5c436d32c99f` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12078
* chore: :arrow_up: Update CrispStrobe/CrispASR to `89dfbc05d1466f6c7517986c6ff85179507431f8` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12077
* chore: :arrow_up: Update 0xShug0/audio.cpp to `4af143229384fb6da3f373dc87de145ae954609b` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12073
* chore: :arrow_up: Update ggml-org/whisper.cpp to `da54572229bcf64ba367d96c7ef15770376c4280` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12076
* chore: :arrow_up: Update mudler/vllm.cpp to `b54db871e8478d0a3450132fa793d30cc336b321` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12074
* chore: :arrow_up: Update ggml-org/llama.cpp to `38a5b42d9a3e82e0a586bcd1caed121f36c87a73` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12075
* chore: :arrow_up: Update PrismML-Eng/llama.cpp to `7dffb158de30ebb8ef9d64f33c6b0b2d7c1e6313` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12072
* chore: :arrow_up: Update antirez/ds4 to `8db1d1d155cb0400a86a86b9c62d0defb3a6148b` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12093
* chore: :arrow_up: Update CrispStrobe/CrispASR to `ba3499e7c7f6013a73738cad530b252d59675f49` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12092
### Other Changes
* docs(blog): add the 4.9 release post and its demo clips by @localai-bot in https://github.com/mudler/LocalAI/pull/11629
* docs: :arrow_up: update docs version mudler/LocalAI by @localai-bot in https://github.com/mudler/LocalAI/pull/11643
* chore: :arrow_up: Update ggml-org/llama.cpp to `d59d455fd8ea09e5a2e87ce2a9d668267ffb5ccd` by @localai-bot in https://github.com/mudler/LocalAI/pull/11618
* chore: bump inference defaults from unsloth by @github-actions[bot] in https://github.com/mudler/LocalAI/pull/11654
* chore: :arrow_up: Update 0xShug0/audio.cpp to `43001a7e0f452d80f4588e613f13332940dd4d3a` by @localai-bot in https://github.com/mudler/LocalAI/pull/11649
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11645
* feat(xio): make copy buffer size configurable by @localai-bot in https://github.com/mudler/LocalAI/pull/11660
* fix(progress): stop status updates throttling downloads by @localai-bot in https://github.com/mudler/LocalAI/pull/11661
* fix(distributed): keep staging operations stable by @localai-bot in https://github.com/mudler/LocalAI/pull/11663
* feat(ui): edit scheduling rules in place by @localai-bot in https://github.com/mudler/LocalAI/pull/11667
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11665
* fix(distributed): keep model replicas config-consistent by @localai-bot in https://github.com/mudler/LocalAI/pull/11664
* chore: :arrow_up: Update CrispStrobe/CrispASR to `74bb374a8cc74284348d76a0a6e944180fbe6b07` by @localai-bot in https://github.com/mudler/LocalAI/pull/11650
* chore: :arrow_up: Update 0xShug0/audio.cpp to `4d383be1bff107e823ffc19120dcb6c78d493c0f` by @localai-bot in https://github.com/mudler/LocalAI/pull/11666
* chore: :arrow_up: Update ggml-org/whisper.cpp to `233fe1fc9b48a09e361d3594520838ca266537fe` by @localai-bot in https://github.com/mudler/LocalAI/pull/11648
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11690
* chore: :arrow_up: Update antirez/ds4 to `c1d4597a80e300b803dc642519718f2c999589da` by @localai-bot in https://github.com/mudler/LocalAI/pull/11685
* chore(website): refresh the counters by @localai-bot in https://github.com/mudler/LocalAI/pull/11697
* fix(ci): bound Discord release summaries by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11695
* fix(oci): resume interrupted layer downloads by @localai-bot in https://github.com/mudler/LocalAI/pull/11688
* chore: :arrow_up: Update CrispStrobe/CrispASR to `ae4474dd8306384a0e697183d863dfc52e69a2fb` by @localai-bot in https://github.com/mudler/LocalAI/pull/11684
* chore: :arrow_up: Update 0xShug0/audio.cpp to `288a2712316470847a730e55db9ac9e5062a2b03` by @localai-bot in https://github.com/mudler/LocalAI/pull/11683
* feat(swagger): update swagger by @localai-bot in https://github.com/mudler/LocalAI/pull/11682
* chore(model gallery): :robot: add 1 new models via gallery agent by @localai-bot in https://github.com/mudler/LocalAI/pull/11692
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11707
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `0ed847d3140baead542abe3e5e6fe841013e7340` by @localai-bot in https://github.com/mudler/LocalAI/pull/11708
* chore: :arrow_up: Update 0xShug0/audio.cpp to `d25ffac094a9d5a240940b4955ea79ad9b7b4c78` by @localai-bot in https://github.com/mudler/LocalAI/pull/11710
* chore: :arrow_up: Update ggml-org/llama.cpp to `f280b26983ad0fdb705a0d9ebf0503e76f2899b0` by @localai-bot in https://github.com/mudler/LocalAI/pull/11646
* feat(gallery): add Ornith 1.5 397B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11716
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `08b500b958a3f1102e6500e5c425e65517d6fb7e` by @localai-bot in https://github.com/mudler/LocalAI/pull/11726
* chore: :arrow_up: Update 0xShug0/audio.cpp to `c79e58899bf13db4d78fd06372da23cc13f55b28` by @localai-bot in https://github.com/mudler/LocalAI/pull/11722
* chore: :arrow_up: Update ggml-org/whisper.cpp to `978113305b2ead22249b881deafa131dc8884911` by @localai-bot in https://github.com/mudler/LocalAI/pull/11711
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11730
* Fix flaky "tests-apple" CI job in modeladmin test suite by @mudler with @Copilot in https://github.com/mudler/LocalAI/pull/11717
* chore: :arrow_up: Update ggml-org/llama.cpp to `eab8ee41f889ef7823af517e8098fb8a9b3cf601` by @localai-bot in https://github.com/mudler/LocalAI/pull/11724
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `50d640568388f876b0d63ee6ddb6bc86d997ec64` by @localai-bot in https://github.com/mudler/LocalAI/pull/11725
* chore: :arrow_up: Update mudler/vllm.cpp to `6738e0b4639199f3ff0998815e4d32bfa7fe5be2` by @localai-bot in https://github.com/mudler/LocalAI/pull/11647
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11742
* chore: :arrow_up: Update PrismML-Eng/llama.cpp to `312bb2a93ea2bf798333fa859614fbf913ecb9e2` by @localai-bot in https://github.com/mudler/LocalAI/pull/11740
* chore: :arrow_up: Update vllm-project/vllm cu130 wheel to `0.28.0` by @localai-bot in https://github.com/mudler/LocalAI/pull/11741
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `ef40550042973817ac391ca95a2ff041f512257b` by @localai-bot in https://github.com/mudler/LocalAI/pull/11743
* chore: :arrow_up: Update ggml-org/llama.cpp to `925e1179947ea0c0ebfb0032df18af3a729822be` by @localai-bot in https://github.com/mudler/LocalAI/pull/11744
* chore: :arrow_up: Update 0xShug0/audio.cpp to `db21cbdd60f3d2ff62114bc863781ff8073ac39b` by @localai-bot in https://github.com/mudler/LocalAI/pull/11746
* chore: :arrow_up: Update mudler/depth-anything.cpp to `739992d10bf9472c46dcd4622b14d2b20766c58d` by @localai-bot in https://github.com/mudler/LocalAI/pull/11758
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `7cff686d3732bfef5ce18bc4a6115fbceda29c14` by @localai-bot in https://github.com/mudler/LocalAI/pull/11757
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `be0e34480dada95f8ce9a021bbb95c5de85d67c7` by @localai-bot in https://github.com/mudler/LocalAI/pull/11760
* chore: :arrow_up: Update 0xShug0/audio.cpp to `17751c0e8c48a3d56dcf05eeb60464409ecc69ce` by @localai-bot in https://github.com/mudler/LocalAI/pull/11759
* chore: :arrow_up: Update ggml-org/llama.cpp to `e70802a01f03f0ed31a26338a5664796f3824371` by @localai-bot in https://github.com/mudler/LocalAI/pull/11755
* fix(ui): size model fit against the cluster and move node labels into the selector by @localai-bot in https://github.com/mudler/LocalAI/pull/11765
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `15dddc60b3fc937a9e2a210359ecce392ccdf446` by @localai-bot in https://github.com/mudler/LocalAI/pull/11767
* chore: :arrow_up: Update antirez/ds4 to `8db89fe083ae4d17c9a2428ccd29803d3ae8f577` by @localai-bot in https://github.com/mudler/LocalAI/pull/11768
* chore: :arrow_up: Update ggml-org/llama.cpp to `d7bd3bfcad3e29c7e49fd26f38c79ee3e9a3fd6b` by @localai-bot in https://github.com/mudler/LocalAI/pull/11770
* feat(distributed): key scheduling rules by a model alias by @localai-bot in https://github.com/mudler/LocalAI/pull/11771
* chore: bump inference defaults from unsloth by @github-actions[bot] in https://github.com/mudler/LocalAI/pull/11773
* chore: :arrow_up: Update 0xShug0/audio.cpp to `89a0e9803380880305e9e1b83c93614f9df2c893` by @localai-bot in https://github.com/mudler/LocalAI/pull/11769
* chore: :arrow_up: Update mudler/vllm.cpp to `150b37852c123f7855fb219b37347572ca9427e7` by @localai-bot in https://github.com/mudler/LocalAI/pull/11745
* feat(stablediffusion-ggml): build a ROCm variant by @localai-bot in https://github.com/mudler/LocalAI/pull/11774
* chore(model gallery): :robot: add 1 new models via gallery agent by @localai-bot in https://github.com/mudler/LocalAI/pull/11777
* refactor(worker): iterate node label pairs with SplitSeq by @ginavalent in https://github.com/mudler/LocalAI/pull/11806
* fix(ci): stop the e2e teardown from failing a green suite by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11816
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11831
* fix(ci): unbreak the e2e build and the darwin vllm-metal pin by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11849
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11868
* chore(model gallery): :robot: add 1 new models via gallery agent by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11880
* feat(swagger): update swagger by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11914
* chore(website): refresh the counters by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11902
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11939
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11968

## New Contributors
* @localai-org-bot made their first contribution in https://github.com/mudler/LocalAI/pull/11631
* @DanielSwift1992 made their first contribution in https://github.com/mudler/LocalAI/pull/11686
* @leilei3167 made their first contribution in https://github.com/mudler/LocalAI/pull/11715
* @sz-po made their first contribution in https://github.com/mudler/LocalAI/pull/11736
* @blackd made their first contribution in https://github.com/mudler/LocalAI/pull/11750
* @ginavalent made their first contribution in https://github.com/mudler/LocalAI/pull/11806
* @FiloSpaTeam made their first contribution in https://github.com/mudler/LocalAI/pull/11802
* @aimansour made their first contribution in https://github.com/mudler/LocalAI/pull/11700
* @simpleqt made their first contribution in https://github.com/mudler/LocalAI/pull/11885
* @alex-mazzariol made their first contribution in https://github.com/mudler/LocalAI/pull/11749
* @seven7763 made their first contribution in https://github.com/mudler/LocalAI/pull/11310
* @QiuLsG made their first contribution in https://github.com/mudler/LocalAI/pull/11883
* @SomSamantray made their first contribution in https://github.com/mudler/LocalAI/pull/11652
* @devv-shayan made their first contribution in https://github.com/mudler/LocalAI/pull/11962
* @Nathan-Roll1 made their first contribution in https://github.com/mudler/LocalAI/pull/11998
* @quartzjer made their first contribution in https://github.com/mudler/LocalAI/pull/12045

**Full Changelog**: https://github.com/mudler/LocalAI/compare/v4.9.0...v4.10.0

---

> **Source** [mudler/LocalAI](https://github.com/mudler/LocalAI) · `v4.10.0` · 2026-09-17 · [upstream release](https://github.com/mudler/LocalAI/releases/tag/v4.10.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
