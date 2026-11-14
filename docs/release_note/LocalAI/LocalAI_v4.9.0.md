---
title: "LocalAI v4.9.0"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.9.0"
version: "v4.9.0"
published: "2026-08-20"
type: "minor"
lang: "en"
summary: "Thirteen days and 146 pull requests, spent on the parts of LocalAI you touch every day rather than on new engines. Authentication is now deny-by-default, chat gained end-to-end context compression, models and backends…"
---

# LocalAI v4.9.0

# 🎉 LocalAI 4.9.0 Release! 🚀

<h1 align="center">
  <br>
  <img height="300" src="https://raw.githubusercontent.com/mudler/LocalAI/refs/heads/master/core/http/static/logo.png">
  <br>
  <br>
</h1>

LocalAI 4.9.0 is out!

Thirteen days and 146 pull requests, spent on the parts of LocalAI you touch every day rather than on new engines. Authentication is now deny-by-default, chat gained end-to-end context compression, models and backends each have one canonical page instead of three, and `vllm-cpp` grew a video modality serving MiniMax-H3 with a real audio track.

**Highlights:**

- 🔐 **Authentication is deny-by-default** - every HTTP route requires credentials unless it appears in an explicit public registry. This closes a class of bypass in which unprefixed aliases such as `/moderations`, `/models`, `/backends` and `/mcp/chat/completions` fell outside the old protected-prefix list. Reported by [Naor Yaacov](https://www.linkedin.com/in/naor-yaacov/).
- 🗜️ **Chat context compression** - opt-in per model, older complete turns are compressed through a LocalAI model before inference, preserving system prompts, the newest messages and whole tool-call units. Ratio and duration come back as response metadata and metrics.
- 🖥️ **One page per resource** - `/app/models` now owns Explore and Installed, `/app/backends` owns Catalog and Installed, and the nested Host view is gone. Old `/app/manage` bookmarks still work.
- 🎬 **MiniMax-H3 video generation** - `vllm-cpp` opens a second engine handle for the H3 checkpoint set and renders video and audio jointly, so the MP4 arrives with a real AAC track. Ask for speech in the prompt and the model lip-syncs it.
- 🗣️ **Qwen3-TTS on llama.cpp** - text-to-speech on the full accelerator matrix already shipped for text generation (CUDA, ROCm, SYCL, Vulkan, Metal, L4T), using upstream's own GGUF conversion.
- 🧭 **KNN as a first-class router** - similarity-weighted voting over a curated, persisted corpus of labelled prompts. No classifier model, and a prompt unlike anything labelled is treated as undecidable rather than guessed.
- 📊 **Global admission control and live backend traces** - process-wide HTTP admission bounds, in-flight backend operations are represented while they run, and the UI links straight to their logs.
- 🕵️ **Reversible PII pseudonyms** - masked values become request-scoped deterministic pseudonyms (`EMAIL_001`) and are restored if the backend echoes them, across JSON and SSE tokens split over writes.
- 📦 **Parallel Hugging Face downloads** - snapshot materialization runs up to N whole-file transfers at once, so a repository split into many shards stops spending its wall clock in per-file latency.
- 🖧 **Cold model loads are durable jobs** - the per-model advisory lock no longer spans a multi-GB transfer, which had made a 35.7 GB load look permanently broken from the operator's seat while staging progressed normally underneath.
- 🎮 **vllm-cpp covers the cards you own** - CUDA builds went from one or two architectures to eight on amd64 and five on arm64, picking up A100, L4, 4090, H100/H200, B200, Jetson Orin and Jetson Thor.

Plus a single shared WebRTC UDP port for Realtime, Metal actually enabled in the macOS Stable Diffusion and Parakeet builds, backend crash diagnostics at the default log level, and Portuguese (Brazil) and Indonesian UI translations.

<p align="center">
  <img width="2880" height="1800" alt="ui-models-explore" src="https://github.com/user-attachments/assets/7dd68a4a-e707-43e6-af1a-dcc3922469eb" />
  <br><em>Models and backends each get one canonical page, with Explore and Installed as views rather than separate destinations.</em>
</p>



---

## 📊 This release in numbers

| | |
|---|---|
| Pull requests merged | **146** |
| Commits | 148 |
| Files changed | 420 (**+27,788** / -4,670) |
| Development window | 13 days (2026-08-07 to 2026-08-20) |
| Human contributors | 10, of whom **3 first-time** |
| Gallery entries | 1,622 to **1,707** (+85) |

Where the work landed:

| Area | Change |
|---|---|
| `core/` | +17,193 / -4,187 across 279 files |
| `gallery/` | +3,808 / -62 |
| `backend/` | +3,298 / -177 across 60 files |
| `pkg/` | +1,180 / -113 across 31 files |
| `swagger/` | +1,095 / -5 |
| `docs/` | +952 / -98 across 23 files |

---

## 📌 TL;DR

| Area | Summary |
|------|---------|
| 🔐 **Auth by default** | Every method and path requires credentials unless listed in an explicit public registry. API instructions, Swagger GETs, the LocalAI well-known document, and the health, login, OAuth, SPA, asset, branding and node registration-token bootstrap flows stay public. **Migration:** with database auth or legacy API keys configured, `/version` and generated audio, image, video and 3D URLs now require credentials. Embedded deployments can add narrow prefixes through `ApplicationConfig.PathWithoutAuth`, and the legacy GET exemption flags remain as explicit compatibility overrides. |
| 🗜️ **Context compression** | Opt-in per-model `compression` config. Older complete turns are compressed through a configured LocalAI model before inference, after PII filtering and Assistant/MCP prompt injection (including later MCP iterations). Leading system/developer prompts, the newest messages and complete tool-call/result units are preserved; tool schemas and completion headroom are accounted for with a conservative offline token bound. Metadata rides non-streaming responses and streaming usage trailers, with event, ratio and duration metrics exported. Disabled by default; cloud-proxy passthrough is rejected (translate mode works). |
| 🖥️ **Unified lifecycle UI** | `/app/models` owns **Explore** and **Installed** with URL-backed search, state and selection; `/app/backends` owns **Catalog** and **Installed** while keeping variants, development builds and target-node scope. Explore offers capability-aware Open and Manage installation; destructive model controls stay in Installed. Operate Overview shows host capacity from its shared summary poller, and the nested Host destination is removed. `/app/manage` redirects while preserving legacy query state. No API change. |
| 📥 **Import form rebuild** | The import page moves to `page--medium` with a work column and the format reference beside it rather than behind a closed chevron. The source field is the hero and carries its own Import button, which removes the `aria-hidden` submit that existed only because the real action sat outside the `<form>`. Simple and Advanced modes are gone (about 80% the same surface); the real distinction, a source or YAML, is now two tabs. Also fixes two class bugs: a primary button with no `className` at all falling through to browser chrome, and `class="btn btn-primary fas fa-save fa-upload"` setting Font Awesome as the button's own font while two icons fought over one `::before`. |
| 🎬 **MiniMax-H3 video** | `vllm-cpp` over vllm.cpp ABI v12. A second engine handle loads the H3 checkpoint set (the DiT is `parameters.model`, the text encoder and two VAEs are named in `options:`), and `GenerateVideo` renders video and audio jointly into an MP4 with a real AAC track. The DiT partition is declared, not detected: community quantizations strip the release metadata and the FL2VA and Ref2VA DiTs are byte-structurally identical, so `checkPartitionConditioning` refuses a reference-conditioned FL2VA request before the engine runs (it would otherwise render for hours and return a coloured lattice). ffmpeg comes from the host: libvllm composes the mux argv and spawns nothing. New gallery entry `minimax-h3-fl2va-q4`. |
| 🗣️ **Qwen3-TTS on llama-cpp** | TTS through the `llama-cpp` backend on CUDA, ROCm, SYCL, Vulkan, Metal and L4T, using upstream's GGUF conversion. Implemented as a slot-based `SERVER_TASK_TYPE_TTS` task, which is the concurrency-safe integration given that `server_context` owns the `llama_context` and runs the slot scheduler on its own thread. Carries the still-draft upstream server hunks as `patches/0002-add-server-task-type-tts.patch` (delete on merge of ggml-org/llama.cpp#26603). Gallery: `qwen3-tts-llamacpp` and `qwen3-tts-llamacpp-q4`. The existing `qwen3-tts-cpp` backend is untouched and remains a separate path. |
| 🧭 **KNN routing** | `classifier: knn` routes by similarity-weighted voting over labelled example prompts, so no classifier model is needed and label knowledge lives in a corpus you seed and curate. Entries below `knn.similarity_threshold` cannot vote; when none clears it the router takes the fallback, and `nearest_similarity` is recorded on decisions and fallbacks alike. One JSONL file per router under `<data path>/router-corpus` is the source of truth, with the in-memory index rebuilt at classifier build time and entries re-embedded when the embedding model changed. Corpus input is API-only by design: `POST /api/router/{name}/corpus`, `GET .../corpus/stats` (label counts only, texts are never returned), `DELETE .../corpus`, admin-gated and exposed as MCP tools. |
| 📊 **Admission and traces** | Process-wide HTTP admission control, bounding what was previously only per backend. Backend operations are represented while in flight, and running backend traces surface in the UI with immediate log links. |
| 🕵️ **PII pseudonyms** | Opt-in `pii.reverse_in_response`. Masked request values become unique deterministic pseudonyms within the request (`EMAIL_001`, `EMAIL_002`) and are restored if the backend returns them, including SSE tokens split across response writes. Substitution maps are request-local and never persisted. Irreversible `[REDACTED:...]` remains the default. |
| 📦 **Parallel HF downloads** | `DownloadFilesWithConcurrency` runs up to N whole-file transfers through an `errgroup` with `SetLimit`. Single files are never split, so `.partial` resume and per-file SHA verification are untouched, and the two non-artifact callers keep sequential ordering and fail-fast behaviour through a limit-of-1 wrapper. `completedBytes` became an `atomic.Int64` (the race detector reported three races otherwise) and the caller's status callback stays serialized. |
| 📞 **Realtime WebRTC port** | `--web-rtc-udp-port` / `LOCALAI_WEBRTC_UDP_PORT` reuses one Pion ICE UDP mux across Realtime calls, with bind failures surfaced through signaling and container/firewall setup documented. The follow-up fix keeps `LOCALAI_WEBRTC_ICE_INTERFACES` effective when a fixed port is set, which had been silently ignored: a wildcard mux made pion enumerate every interface itself, handing browsers unroutable `172.x` candidates that dropped once ICE consent checks failed. |
| 🖧 **Durable cold loads** | The per-model advisory lock is a dedup decision measured in milliseconds, not a transfer's lifetime. Cold loads now run as durable jobs instead of holding it across backend install, multi-GB staging and checkpoint load, and `WithLockCtx` now defends against `statement_timeout` as well as `lock_timeout` (both abort the same blocking `pg_advisory_lock`, only the latter was overridden). |
| 🎮 **vllm-cpp CUDA coverage** | amd64 goes from `120a;121a` to `80;86;89;90a;100a;103a;120a;121a`, arm64 from `121a` to `87;90a;100a;110;121a`, split by where the silicon exists. An unlisted card did not run slower, it died at the first request with `no kernel image is available for execution on the device`, long after install reported success. The CUDA 13 guard now covers both branches, and Triton-AOT stays on. |
| 🌍 **Two new languages** | Portuguese (Brazil), a complete 14-namespace translation at full key parity with `en/`, and Indonesian for the admin, media and navigation surfaces. |
| 🧠 **Models** | 85 new gallery entries: Qwen3.8 (9B, 27B, Ridge and small variants), Gemma 4 agentic and Scotoma 2, DeepSeek V4 Pro 0813, Ling 3.0 Flash, Nemotron 3.5 Lightning 30B, Tess 4 27B, Ornith 1.0 and 1.5 9B, LFM2.5 230M and VL 1.6B, HunyuanOCR and OvisOCR2, Higgs Audio v3 TTS, MiniMax-H3 Ref2VA, plus vllm.cpp text-generation entries and a first Carbon genomics family. |

---

## 🚀 New Features & Major Enhancements

### 🔐 Authentication now denies by default

The previous classifier gated selected API-style paths by prefix. Anything whose path was not on that list was public, which meant unprefixed aliases (`/mcp/chat/completions`, `/moderations`, `/models`, `/backends`, `/import-model`) could bypass global authentication, and any newly registered route inherited the same weakness by default.

The middleware is now method-aware and denies by default: a route is public only if its method and path appear in an explicit public registry. What stays public is the set required to bootstrap and to be discoverable: API instructions, Swagger GET routes, the LocalAI well-known document, and the health, login, OAuth, SPA, asset, branding and node registration-token flows. Whole-router coverage is asserted in tests, so a new route cannot become public by omission.

**Migration impact.** When database authentication or legacy API keys are configured, `/version` and generated audio, image, video and 3D URLs now require credentials. Embedded deployments can still add narrow prefixes via `ApplicationConfig.PathWithoutAuth`, and the legacy GET exemption flags remain available as explicit compatibility overrides.

Thanks to [Naor Yaacov](https://www.linkedin.com/in/naor-yaacov/) for reporting this class of authentication bypass.

> 🔗 PRs: #11602

### 🗜️ End-to-end context compression

A long conversation eventually stops fitting. Compression is opt-in per model, and when enabled it compresses older complete turns through a configured LocalAI model before inference rather than truncating them away.

What it will not touch: leading system and developer safety prompts, the newest messages, and complete tool-call/result units, which are kept whole so a compressed history never leaves a call without its result. It runs after PII filtering and after Assistant/MCP prompt injection, including on later MCP iterations, so what gets compressed is the prompt that would actually have been sent. Tool schemas and completion headroom are accounted for with a conservative offline token bound.

Compression metadata is exposed in non-streaming responses and in streaming usage trailers, and compression events, ratios and durations are exported as metrics. Cloud-proxy passthrough configurations reject compression because LocalAI cannot safely rewrite an opaque provider payload; translate mode is supported. A late failure in an already-started stream is returned as an in-band SSE error followed by `[DONE]`.

> 🔗 PRs: #11556

### 🖥️ One canonical page per resource

Models had a gallery and a separate Host management surface. Backends had a nested Host view for installed binaries. Between them it was not obvious where a resource lived, and the common lifecycle actions sat one level deeper than they needed to.

Each resource now has one page. `/app/models` owns **Explore** and **Installed**, `/app/backends` owns **Catalog** and **Installed**, both with URL-backed search, state and selection, and backends keep their variants, development builds and target-node scope. Explore presents capability-aware **Open** and **Manage installation** actions while destructive model controls stay in Installed. Operate Overview reads host capacity from its shared summary poller, and the nested Host destination is removed. Narrow list/detail views restore focus to the originating row when you come back from a detail view.

Nothing in the API changed, and existing `/app/manage` bookmarks keep working through a replace redirect that preserves legacy model and backend query state.

<p align="center">
  <img width="2880" height="1800" alt="ui-backends-catalog" src="https://github.com/user-attachments/assets/c18e9272-70bd-4875-bda0-319bea616637" />
  <br><em>Catalog and Installed as views of one page, with target-node scope intact.</em>
</p>


> 🔗 PRs: #11548

### 📥 The import form, rebuilt

The import page had taken the new palette but kept its old layout: a 760px column with the primary action detached from the form it submits. Two of its problems were outright bugs.

`ImportModel.jsx:808` carried no `className` at all, so the page's single most important control fell through to the user-agent button, with system chrome, system font, the wrong radius and no design-system focus ring. Next to it, `class="btn btn-primary fas fa-save fa-upload"` set Font Awesome as the button's own font family, which its label text inherited, while `fa-save` and `fa-upload` fought over one `::before`.

The layout moves to `page--medium` with a work column and the format reference beside it, since that reference answers the only question a first-time admin has and used to sit behind a chevron that was closed by default. Below 1024px it becomes a disclosure instead of disappearing. The source field is the hero, monospace because it holds something you paste, and it carries its own Import button, which removes the `aria-hidden` submit that existed only to compensate for the real action sitting outside the `<form>`. Simple and Advanced modes are gone: they were about 80% the same surface, and the overlap cost a mode switch, a localStorage key and a three-button Keep/Discard/Cancel dialog whose only job was protecting state the switch would have hidden. What genuinely differs is the kind of input, which is now two tabs: a source, or YAML. The size and VRAM estimate reports under the field that produced it instead of as a banner above the page header.

A follow-up swept the same class of bug across the rest of the UI: eight header controls on seven pages had two or three elements' classes collapsed into one string.

<p align="center">
  <img width="2880" height="1800" alt="ui-import-model" src="https://github.com/user-attachments/assets/d8abd9d6-81fa-4ef7-8062-4bcf3836a27a" />
  <br><em>One form, a collapsible options panel, and the format reference where you can read it.</em>
</p>


> 🔗 PRs: #11461, #11462, #11488

### 🎬 MiniMax-H3: video and audio, jointly

vllm.cpp's stable C ABI grew a video slice at v12, and `vllm-cpp` now serves two things. Text generation is unchanged. When a model config declares the H3 checkpoint set, `Load` opens a video engine instead and `GenerateVideo` renders a clip through LocalAI's existing `/video` endpoint, with **video and audio generated jointly**, so the MP4 comes back with a real AAC track rather than silent. Ask for speech in the prompt and the model lip-syncs it.

Three things shape the integration:

**The video engine is a second handle, not a mode of the first.** H3 is not a model directory. The DiT, the text encoder and two VAEs are separate artifacts, and vllm.cpp's two loaders refuse each other's checkpoints. `parameters.model` is the DiT; the rest of the set is named in `options:`.

**The DiT partition is declared, not detected.** The FL2VA DiT serves `t2va` and `fl2va`; `ref2va` is a different checkpoint. Community GGUF and NVFP4 quantizations strip the release metadata and the two DiTs are byte-structurally identical, so the engine refuses to generate until it is told which it has. Handing reference conditioning to an FL2VA DiT renders for hours and returns a coloured lattice over the frame, so `checkPartitionConditioning` rejects that combination before the engine is ever called.

**ffmpeg comes from the host.** libvllm writes the frames and the WAV and composes the mux argv, then spawns nothing, which is a deliberate upstream process boundary. The backend substitutes `argv[0]` and execs it.

Gallery entries `minimax-h3-fl2va-q4` (Q4_K_M FL2VA set) and `minimax-h3-ref2va-q4` ship with it.

> 🔗 PRs: #11424, #11439

### 🗣️ Qwen3-TTS through the llama.cpp backend

Qwen3-TTS now runs on the `llama-cpp` backend, which means text-to-speech on the same accelerator matrix already shipped for text generation (CUDA, ROCm, SYCL, Vulkan, Metal, L4T) using upstream's own GGUF conversion.

`grpc-server.cpp` is an adapter over llama.cpp's shared `server_context`, which owns the `llama_context` and runs the slot scheduler on its own thread, so a gRPC handler driving the gen-audio loop itself would race that scheduler. Making TTS a slot-based `SERVER_TASK_TYPE_TTS` task is the concurrency-safe integration, following the `0001-add-server-task-type-score.patch` precedent already in the tree. llama.cpp merged Qwen3-TTS in ggml-org/llama.cpp#26254; the server plumbing in #26603 is still a draft, so it is carried as `patches/0002-add-server-task-type-tts.patch` and should be deleted once that merges. `disable-tts-task.sh` keeps turboquant and bonsai compiling, since they copy `grpc-server.cpp` into forks without our patches.

Both paths were verified end to end on CPU returning valid 24 kHz mono 16-bit WAV containing real speech, measured rather than eyeballed. Gallery entries: `qwen3-tts-llamacpp` and `qwen3-tts-llamacpp-q4`.

The existing `qwen3-tts-cpp` backend over qwentts.cpp is untouched. This is a second, independent path, not a replacement.

> 🔗 PRs: #11392

### 🧭 KNN as a first-class router

`classifier: knn` promotes KNN search from a cache for the classifier to a primary request router. Unlike `score` or `colbert` it needs no classifier model: label knowledge lives in a corpus of labelled example prompts that you seed and curate through the admin API, so routing decisions are deterministic, auditable, and grounded in graded experience rather than a model's opinion.

There is an explicit epistemic gate. Corpus entries below `knn.similarity_threshold` cannot vote, and when none clears it the classifier activates no labels and the router takes the fallback: a prompt unlike all labelled experience is treated as undecidable, not guessed. Decisions record `nearest_similarity`, on fallback rows too, so you can see how far the nearest labelled experience actually was, and the Routing tab explains out-of-corpus fallbacks and shows per-label corpus counts.

Persistence is one JSONL file per router under `<data path>/router-corpus` holding text, labels, vector and embedder fingerprint. That file is the source of truth; the local-store index is rebuilt from it at classifier build time and stays a pure in-memory index, and entries recorded under a different embedding model re-embed on load. This also corrects the docs' claim that local-store collections persist: the embedding cache never survived restarts and still does not, while the corpus does.

Corpus input is API-only by design, since entries may contain example user content: `POST /api/router/{name}/corpus` seeds (labels validated against declared policies, embedded server-side, indexed immediately), `GET .../corpus/stats` inspects and returns label counts only (entry texts are never returned by any surface), and `DELETE .../corpus` wipes. All admin-gated like the sibling router endpoints and exposed as MCP tools.

> 🔗 PRs: #10652

### 📊 Global admission control and running backend traces

Admission control existed per backend, which left nothing bounding the process as a whole, and the traces list could grow without limit. HTTP admission is now bounded process-wide.

Alongside it, backend operations are represented while they are still in flight rather than only once they finish, and running backend traces surface in the UI with immediate links to their logs, so an operation that is taking too long is something you can look at instead of something you wait out.

<p align="center">
  <img width="2880" height="1800" alt="ui-activity-inflight" src="https://github.com/user-attachments/assets/fe0acd52-3688-4c20-ae1d-cef9f8b2825e" />
  <br><em>Operations are represented while they are still running, not only once they finish.</em>
</p>


> 🔗 PRs: #11560

### 🕵️ PII pseudonyms that survive the round trip

The PII middleware masked values irreversibly, which is right for logs and wrong for a conversation: a model that is handed `[REDACTED:EMAIL]` twice cannot tell whether it saw one address or two, and anything it says about them comes back unusable.

Opt-in `pii.reverse_in_response` turns masked request values into unique deterministic pseudonyms within the request (`EMAIL_001`, `EMAIL_002`) and restores them if the backend returns them. Restoration handles normal JSON and SSE tokens split across response writes. Substitution maps stay request-local and are never persisted. Irreversible `[REDACTED:...]` remains the default.

> 🔗 PRs: #11272

### 📦 Bounded parallel Hugging Face downloads

Snapshot materialization fetched every file through the sequential executor, so a repository split into many shards spent most of its wall clock in per-file request latency rather than moving bytes.

`DownloadFilesWithConcurrency` now runs up to N whole-file transfers at once through an `errgroup` with `SetLimit`. Only whole files run in parallel: a single file is never split, so the `.partial` resume machinery and the per-file SHA check are untouched. The two non-artifact callers (`core/gallery/models.go` and `core/config/model_config_loader.go`) keep exactly their previous behaviour through a wrapper passing a limit of 1, so tasks still run in slice order and the first failure still returns before any later task starts.

Two consequences of the parallel path are worth knowing: `completedBytes` is now an `atomic.Int64`, which is not a precaution (with a plain `int64` the race detector reports three races), and the caller's status callback is serialized to preserve the guarantee the sequential path gave it implicitly. `AfterDownload` is deliberately not serialized, because it does the verify-and-promote work that the parallelism exists to overlap.

> 🔗 PRs: #11162

### 📞 Realtime WebRTC on one UDP port

`--web-rtc-udp-port` / `LOCALAI_WEBRTC_UDP_PORT` reuses a single Pion ICE UDP mux across Realtime WebRTC calls, so a container or firewall needs one rule rather than a range. UDP bind failures are surfaced through signaling instead of failing opaquely, and the container and firewall setup is documented.

A follow-up closed the gap it opened. `LOCALAI_WEBRTC_ICE_INTERFACES` was silently ignored whenever a fixed UDP port was set, which is exactly the combination an operator reaches for: pinning a port to write a firewall rule and restricting interfaces to keep unreachable `docker0` and `veth` addresses out of the candidate list usually go together. A wildcard mux made pion derive candidate addresses by enumerating interfaces itself with a nil filter, so on a host with docker bridges the browser received `172.18.0.1`, `172.17.0.1`, `10.10.10.1` and friends, connected on a good pair, then dropped when ICE consent checks failed on the others.

> 🔗 PRs: #11436, #11466

### 🖧 Cold model loads run as durable jobs

On a two-replica frontend, loading a 35.7 GB GGUF onto a newly added Jetson Thor worker made the model permanently unloadable from the operator's seat, while staging was in fact progressing normally underneath. Replica A held the per-model advisory lock through roughly twenty minutes of transfer; replica B blocked on `pg_advisory_lock` for the same model and was killed at 60s by the role's `statement_timeout`, and every UI retry reproduced it.

Two defects sat behind that one symptom. The lock's lifetime was the transfer's lifetime, with `Route` wrapping backend install, multi-GB staging and checkpoint load in `advisorylock.WithLockCtx`, which turns a millisecond dedup decision into a cluster-wide outage for that model. And `WithLockCtx` overrode `lock_timeout` but not `statement_timeout`, though both abort the same blocking call.

Cold loads now run as durable jobs, so the lock is held only for the decision it exists to make.

> 🔗 PRs: #11514

### 🎮 vllm-cpp builds for the cards people own

The `vllm-cpp` CUDA images were built for Blackwell only: `120a;121a` on amd64 and `121a` alone on arm64, out of the ten architectures vllm.cpp's own release archive builds.

What makes it worth calling out is the failure mode. An unlisted card is not slower, it dies at the first request with `no kernel image is available for execution on the device`, long after `local-ai backends install vllm-cpp` reported success. This was found on a Jetson Thor node that had the backend installed and could serve nothing.

| | before | after |
|---|---|---|
| amd64 | `120a;121a` | `80;86;89;90a;100a;103a;120a;121a` |
| arm64 | `121a` | `87;90a;100a;110;121a` |

The split follows where the silicon exists: Jetson (`87` Orin, `110` Thor) is arm64-only, desktop `120a` is amd64-only, and `90a`/`100a` are on both because of the SBSA parts. That adds A100, A10/3090, L4/4090/RTX 6000 Ada, H100/H200, B200, B300, Jetson Orin and Jetson Thor. The CUDA 13 guard now covers both branches rather than amd64 alone, and Triton-AOT stays on.

> 🔗 PRs: #11512

### 🌍 Portuguese (Brazil) and Indonesian

A complete `pt-BR` translation of the WebUI: 14 namespaces at full key parity with `en/` including `modelEditor.json`, with every i18next interpolation variable and `_one`/`_other` plural key preserved. Indonesian covers the admin, media and navigation strings. Both keep brand, model and technical identifiers untranslated, matching existing locale conventions.

> 🔗 PRs: #11427, #11493

### 🧰 Smaller features worth knowing about

- **Metal is actually on in two macOS backends.** `stablediffusion-ggml` gated its Metal flags on an `OS=Darwin` variable the runner never defines, so the Darwin workflow's `BUILD_TYPE=metal` produced a build without `GGML_METAL_EMBED_LIBRARY=ON`, shipping a runtime source path that failed to expose `kernel_mul_mv_ext_bf16_f32_r1_5`. `parakeet-cpp` never forwarded `BUILD_TYPE=metal` to `PARAKEET_GGML_METAL` at all: on an M1 Air the same five-minute sample went from 82.57s to 50.18s with byte-identical output. A dry-run build-contract test now guards the Stable Diffusion flags.
- **Backend crashes say why.** An unexpected runtime exit logged its stderr only at debug level, so at default log level operators saw an exit code and nothing else. The final non-empty stderr line now rides the unexpected-exit warning, and a failed gRPC readiness preserves the process exit code plus the last stderr diagnostic bounded to 4 KiB.
- **MCP servers stay visible when they fail.** Model-level MCP servers disappeared from Chat whenever connection setup or tool discovery failed, hiding container DNS, routing and VPN reachability problems. They now stay listed as disabled error rows with a per-server error, discovery retries while safely closing partially created sessions, and the model editor documents the expected `mcp.remote` and `mcp.stdio` formats.
- **Checksum mismatches retry.** A post-download SHA mismatch is now treated as a transient transfer failure: LocalAI removes the mismatched partial and lets the bounded planner retry a stale or corrupted CDN response, while still refusing unverified bytes. Direct `URI.DownloadFile` callers still see the mismatch immediately.
- **Audio transform rejects the wrong contract.** The audio-transform WebSocket accepted `realtime_audio` models and opened the frame-based `AudioTransformStream` RPC, which failed after the handshake with `NotImplementedError` for any-to-any models like `liquid-audio`. The use case is now validated before the backend loads, and any-to-any callers are pointed at the OpenAI Realtime API.
- **Invalid preload JSON names itself.** `PRELOAD_MODELS` / `--preload-models` now identifies which input was invalid and rejects non-array top-level values (including booleans and `null`) with the expected shape in the error.

> 🔗 PRs: #11531, #11492, #11532, #11447, #11495, #11536, #11565, #11434

---

## 🐛 Bug Fixes (recap)

- `fix(auth)`: protect HTTP routes by default - #11602
- `fix(distributed)`: run cold model loads as durable jobs instead of holding the advisory lock - #11514
- `fix(vllm-cpp)`: build every CUDA architecture the platform can host - #11512
- `fix(realtime)`: keep the ICE interface allow-list working with a fixed UDP port - #11466
- `fix(stablediffusion)`: embed Metal library - #11531
- `fix(parakeet-cpp)`: enable Metal in macOS builds - #11492
- `fix(model)`: report backend crash diagnostics - #11532
- `fix(model)`: surface backend startup exits - #11447
- `fix(downloader)`: retry checksum mismatches - #11536
- `fix(audio)`: reject incompatible transform streams - #11565
- `fix(gallery)`: parse harmony output of gpt-oss-* models correctly - #11518
- `fix(gallery)`: identify invalid preload JSON - #11434
- `fix(gallery)`: repair DeepSeek V4 fallback - #11480
- `fix(gallery)`: correct Higgs Audio v3 checksum - #11459
- `fix(fish-speech)`: preserve ROCm PyTorch - #11568
- `fix(vllm)`: align Intel basekit runtime to oneAPI 2025.3.2 - #11437
- `fix(kokoros)`: add the missing `upscale_image` stub to the Backend trait impl - #11414
- `fix`: show MCP connection errors in the UI - #11495
- `fix(ui)`: unmerge the class strings that left buttons in browser chrome - #11462
- `fix(ui)`: keep agent import action visible - #11488
- `fix`: wrap long TTS request text instead of widening the page - #11576

---

## 🧠 Models

85 new gallery entries this cycle, taking the index from 1,622 to 1,707.

Text generation: Qwen3.8 in 9B, 27B, Ridge and small variants, Gemma 4 agentic and Gemma 4 Scotoma 2, DeepSeek V4 Pro 0813, Ling 3.0 Flash, Nemotron 3.5 Lightning 30B, Tess 4 27B, Ornith 1.0 and 1.5 9B, Muse Glimmer 30B, Grug 12B, BigBang v1, Genesis Hermes V7, TwIL-LM3, BTL-4 Compact, XYZ Aquila mini, North Mini Code, AREX Turbo, Fara1.5 4B, MiniCPM5 1B Q8, Shieldstral 1.0 3B and UI-Mate 9B.

Vision and OCR: HunyuanOCR, OvisOCR2, LFM2.5 VL 1.6B, and LFM2.5 230M alongside it.

Audio and video: Higgs Audio v3 TTS, the Qwen3-TTS llama.cpp entries, and the MiniMax-H3 FL2VA and Ref2VA video sets.

Also a first Carbon genomics family, and text-generation entries for the `vllm-cpp` backend.

> 🔗 PRs: #11622, #11603, #11599, #11598, #11594, #11584, #11573, #11571, #11561, #11559, #11557, #11552, #11551, #11549, #11547, #11540, #11533, #11526, #11519, #11511, #11490, #11479, #11478, #11477, #11458, #11456, #11455, #11449, #11446, #11443, #11441, #11439, #11438, #11435

---

## 👒 Dependencies

Submodule and pin bumps this cycle:

| Project | Bumps |
|---|---|
| CrispStrobe/CrispASR | 10 |
| ikawrakow/ik_llama.cpp | 9 |
| vllm-metal (darwin) | 7 |
| mudler/vllm.cpp | 6 |
| 0xShug0/audio.cpp | 5 |
| ggml-org/llama.cpp | 4 |
| ggml-org/whisper.cpp | 3 |
| leejet/stable-diffusion.cpp | 2 |
| antirez/ds4, mudler/parakeet.cpp, mudler/depth-anything.cpp, NVIDIA/NeMo-Speech.cpp, vllm-project/vllm cu130 wheel | 1 each |

Plus `golang.org/x/net` to v0.55.0, vllm 0.26.0 and transformers >=5.15.0 in the Python backends, sentence-transformers 5.7.0, packaging 26.3, dompurify 3.4.13, the Kokoros source pin, inference defaults refreshed from unsloth, and seven gallery checksum refreshes.

---

## 📖 Documentation

New pages for context compression and `vllm-cpp`, a substantially expanded middleware page covering the PII pseudonym and compression surfaces, and a rewritten authentication page documenting the public and protected route surfaces after the deny-by-default change.

Video generation gained the MiniMax-H3 setup, text-to-audio the Qwen3-TTS llama.cpp path, distributed mode the durable cold-load behaviour, MCP the configuration formats and container networking implications, and Realtime the shared UDP port and firewall guidance. Embeddings, model gallery, backends and API discovery all picked up corrections, and the broken stars counter came out of the site.

> 🔗 PRs: #11448, #11581, #11582, #11415

---

## 🙌 New Contributors

- @tom-mi made their first contribution in #11518
- @kassane made their first contribution in #11427
- @fieryWaters made their first contribution in #11492

Thanks also to @richiejp, @jimmykarily, @Dennisadira, @dedyf5, @ALameLlama and @walcz-de, and to [Naor Yaacov](https://www.linkedin.com/in/naor-yaacov/) for the authentication bypass report.

<!-- Release notes generated using configuration in .github/release.yml at master -->

## What's Changed
### Breaking Changes 🛠
* fix(auth): protect HTTP routes by default by @localai-bot in https://github.com/mudler/LocalAI/pull/11602
### Bug fixes :bug:
* fix(kokoros): add missing `upscale_image` stub to Backend trait impl by @mudler with @Copilot in https://github.com/mudler/LocalAI/pull/11414
* fix(gallery): identify invalid preload JSON by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11434
* fix(vllm): align Intel basekit runtime by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11437
* fix(model): surface backend startup exits by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11447
* fix(ui): unmerge the class strings that left buttons in browser chrome by @localai-bot in https://github.com/mudler/LocalAI/pull/11462
* fix(realtime): keep the ICE interface allow-list working with a fixed UDP port by @jimmykarily in https://github.com/mudler/LocalAI/pull/11466
* fix(parakeet-cpp): enable Metal in macOS builds by @fieryWaters in https://github.com/mudler/LocalAI/pull/11492
* fix: Show MCP connection errors in the UI by @richiejp in https://github.com/mudler/LocalAI/pull/11495
* fix(vllm-cpp): build every CUDA architecture the platform can host by @localai-bot in https://github.com/mudler/LocalAI/pull/11512
* fix (gallery): Parse harmony output of gpt-oss-* models correctly (#8037) by @tom-mi in https://github.com/mudler/LocalAI/pull/11518
* fix(ui): keep agent import action visible by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11488
* fix(stablediffusion): embed Metal library by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11531
* fix(model): report backend crash diagnostics by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11532
* fix(distributed): run cold model loads as durable jobs instead of holding the advisory lock by @localai-bot in https://github.com/mudler/LocalAI/pull/11514
* fix(downloader): retry checksum mismatches by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11536
* fix(fish-speech): preserve ROCm PyTorch by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11568
* fix(audio): reject incompatible transform streams by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11565
* fix: tts text wrap by @ALameLlama in https://github.com/mudler/LocalAI/pull/11576
### Exciting New Features 🎉
* feat(modelartifacts): support bounded parallel Hugging Face file downloads by @Dennisadira in https://github.com/mudler/LocalAI/pull/11162
* feat(i18n): add pt-BR translation by @kassane in https://github.com/mudler/LocalAI/pull/11427
* feat(vllm-cpp): serve MiniMax-H3 video+audio generation by @localai-bot in https://github.com/mudler/LocalAI/pull/11424
* feat(pii): restore request-scoped pseudonyms by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11272
* feat(llama-cpp): serve Qwen3-TTS through the llama.cpp backend by @localai-bot in https://github.com/mudler/LocalAI/pull/11392
* feat(realtime): add shared WebRTC UDP port by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11436
* feat(ui): rebuild the import form on the restyled design language by @localai-bot in https://github.com/mudler/LocalAI/pull/11461
* i18n(id): translate admin, media, and nav UI strings to Indonesian by @dedyf5 in https://github.com/mudler/LocalAI/pull/11493
* feat(ui): unify model and backend lifecycle by @localai-bot in https://github.com/mudler/LocalAI/pull/11548
* feat: bound global admission and expose running backend traces by @richiejp in https://github.com/mudler/LocalAI/pull/11560
* feat(router): make KNN a first-class classifier with a persisted, curated corpus by @richiejp in https://github.com/mudler/LocalAI/pull/10652
* feat(chat): add end-to-end context compression by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11556
### 🧠 Models
* feat(gallery): add Grug 12B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11438
* feat(gallery): add Shieldstral 1.0 3B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11441
* feat(gallery): add Genesis Hermes V7 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11435
* feat(gallery): add minimax-h3-ref2va-q4 - the Ref2VA partition, verified coherent by @localai-bot in https://github.com/mudler/LocalAI/pull/11439
* feat(gallery): add BigBang v1 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11443
* feat(gallery): add Gemma 4 Scotoma 2 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11458
* feat(gallery): add Muse Glimmer 30B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11446
* feat(gallery): add Higgs Audio v3 TTS by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11456
* feat(gallery): add BTL-4 Compact by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11449
* feat(gallery): add XYZ Aquila mini variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11455
* fix(gallery): correct Higgs Audio v3 checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11459
* chore: bump inference defaults from unsloth by @github-actions[bot] in https://github.com/mudler/LocalAI/pull/11270
* fix(gallery): align Higgs Audio checksum test by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11476
* feat(gallery): add Nemotron 3.5 Lightning 30B by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11477
* feat(gallery): add TwIL-LM3 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11478
* fix(gallery): repair DeepSeek V4 fallback by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11480
* feat(gallery): add Fara1.5 4B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11479
* feat(gallery): add LFM2.5 VL 1.6B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11490
* feat(gallery): add Qwen3.8 27B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11519
* feat(gallery): add DeepSeek V4 Pro 0813 by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11533
* feat(gallery): add LFM2.5 230M variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11526
* feat(gallery): add vllm.cpp text-generation models by @localai-bot in https://github.com/mudler/LocalAI/pull/11511
* feat(gallery): add HunyuanOCR variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11540
* feat(gallery): add Tess 4 27B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11547
* feat(gallery): add AREX Turbo variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11551
* feat(gallery): add OvisOCR2 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11549
* feat(gallery): add Qwen3.8 9B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11557
* feat(gallery): add Ornith 1.0 9B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11552
* feat(gallery): add Qwen3.8 Ridge variant by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11573
* feat(gallery): add Qwen3.8 small variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11571
* feat(gallery): add MiniCPM5 1B Q8 variant by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11561
* chore(model gallery): :robot: add 1 new models via gallery agent by @localai-bot in https://github.com/mudler/LocalAI/pull/11596
* feat(gallery): add North Mini Code variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11559
* feat(gallery): add UI-Mate 9B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11584
* feat(gallery): add Ling 3.0 Flash variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11598
* feat(gallery): add Hy-MT2 1.8B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11599
* feat(gallery): add Carbon genomics variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11594
* chore(model gallery): :robot: add 1 new models via gallery agent by @localai-bot in https://github.com/mudler/LocalAI/pull/11605
* feat(gallery): add Ornith 1.5 9B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11603
* feat(gallery): add Gemma 4 agentic variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11622
### 📖 Documentation and examples
* docs: :arrow_up: update docs version mudler/LocalAI by @localai-bot in https://github.com/mudler/LocalAI/pull/11415
* docs: remove broken stars counter by @richiejp in https://github.com/mudler/LocalAI/pull/11448
* docs(adopters): add walcz.de by @walcz-de in https://github.com/mudler/LocalAI/pull/11581
* docs(ecosystem): add Walcz to contributors by @walcz-de in https://github.com/mudler/LocalAI/pull/11582
### 👒 Dependencies
* chore: :arrow_up: Update ggml-org/whisper.cpp to `592feef04a1802b18cbeffd0fd0eb5d02570c2ec` by @localai-bot in https://github.com/mudler/LocalAI/pull/11416
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11418
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `40dffce6857b4fe051f096379dc464764c718458` by @localai-bot in https://github.com/mudler/LocalAI/pull/11403
* chore: :arrow_up: Update CrispStrobe/CrispASR to `17a6cc99422bfafadf7161e96dd7294c89da9c36` by @localai-bot in https://github.com/mudler/LocalAI/pull/11404
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `f2328aa0c19954d0ab31a3de60fbf50e47c2429f` by @localai-bot in https://github.com/mudler/LocalAI/pull/11421
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11423
* chore: :arrow_up: Update antirez/ds4 to `84cc882352757baf628a1776badf7cc54d584e28` by @localai-bot in https://github.com/mudler/LocalAI/pull/11432
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `a7c81affa48c6800d63111bdb33469a01d062daa` by @localai-bot in https://github.com/mudler/LocalAI/pull/11431
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11433
* chore: :arrow_up: Update 0xShug0/audio.cpp to `748c5e28f6a7228b8f38ad7142ca97d29584544b` by @localai-bot in https://github.com/mudler/LocalAI/pull/11401
* chore: :arrow_up: Update CrispStrobe/CrispASR to `8898b0fee199b1765321a5d0d8314aee51a34583` by @localai-bot in https://github.com/mudler/LocalAI/pull/11422
* chore(deps): bump dompurify from 3.4.12 to 3.4.13 in /core/http/react-ui in the npm_and_yarn group across 1 directory by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11425
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `5763a901de3f525b65ed5574fd57623905685755` by @localai-bot in https://github.com/mudler/LocalAI/pull/11452
* chore: :arrow_up: Update CrispStrobe/CrispASR to `8b91f4c5490b88ae6193673c35644d91d8695821` by @localai-bot in https://github.com/mudler/LocalAI/pull/11450
* chore: :arrow_up: Update 0xShug0/audio.cpp to `9d6e7b39236e0151ad28a70fab0d538b84ce8718` by @localai-bot in https://github.com/mudler/LocalAI/pull/11451
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11453
* chore: :arrow_up: Update ggml-org/llama.cpp to `030ebb558a5820b444a8f836ed5cdd46c9b4bd7a` by @localai-bot in https://github.com/mudler/LocalAI/pull/11454
* chore: :arrow_up: Update mudler/vllm.cpp to `24306364ab8beaed9197604a042a56aaccfde493` by @localai-bot in https://github.com/mudler/LocalAI/pull/11385
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `26ceed9d4091a1696cf50e2ed87e5767d5811d81` by @localai-bot in https://github.com/mudler/LocalAI/pull/11475
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11471
* chore: :arrow_up: Update mudler/depth-anything.cpp to `54abd5c0abfd1f394e01cb3c38f2e3af4daedf85` by @localai-bot in https://github.com/mudler/LocalAI/pull/11481
* chore: :arrow_up: Update mudler/vllm.cpp to `9fd9e8f34408d5dd21d7f9385e96fc755708950b` by @localai-bot in https://github.com/mudler/LocalAI/pull/11472
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `c46ffaa5665cfb2d6cf372c9a054dbab896e14fe` by @localai-bot in https://github.com/mudler/LocalAI/pull/11482
* chore: :arrow_up: Update vllm-metal (darwin) to `v0.3.0.dev20260812005333` by @localai-bot in https://github.com/mudler/LocalAI/pull/11467
* chore: :arrow_up: Update vllm-project/vllm cu130 wheel to `0.27.1` by @localai-bot in https://github.com/mudler/LocalAI/pull/11468
* chore: :arrow_up: Update CrispStrobe/CrispASR to `ce521ee178867ceaa5fdc11803616578c8936c19` by @localai-bot in https://github.com/mudler/LocalAI/pull/11470
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `de298c225bed97c3f9026b73cd7b71e7879bd41b` by @localai-bot in https://github.com/mudler/LocalAI/pull/11469
* chore(deps): bump backend/rust/kokoros/sources/Kokoros from `7089168` to `29e99ad` by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11496
* chore(deps): bump packaging from 26.2 to 26.3 in /backend/python/coqui by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11497
* chore: :arrow_up: Update ggml-org/llama.cpp to `84e908c625fb60992b4cdef8180fb12fa9b4c4bf` by @localai-bot in https://github.com/mudler/LocalAI/pull/11473
* chore(deps): update transformers requirement from >=5.14.1 to >=5.15.0 in /backend/python/transformers by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11500
* chore: :arrow_up: Update vllm-metal (darwin) to `v0.3.0.dev20260813121949` by @localai-bot in https://github.com/mudler/LocalAI/pull/11507
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `981e5ea0d7579b4803c86afbb09a7cd7d7bf3bb8` by @localai-bot in https://github.com/mudler/LocalAI/pull/11509
* chore: :arrow_up: Update CrispStrobe/CrispASR to `cb082743c456ac77aec0947de36e6420a933da04` by @localai-bot in https://github.com/mudler/LocalAI/pull/11510
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `43afea46c25a12aae6db1e3105643267164898b4` by @localai-bot in https://github.com/mudler/LocalAI/pull/11527
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11525
* chore: :arrow_up: Update vllm-metal (darwin) to `v0.3.0.dev20260814013332` by @localai-bot in https://github.com/mudler/LocalAI/pull/11522
* chore: :arrow_up: Update CrispStrobe/CrispASR to `cc498701f1a68d88dd489803ebad10053a924322` by @localai-bot in https://github.com/mudler/LocalAI/pull/11523
* chore: :arrow_up: Update ggml-org/whisper.cpp to `1fe009caeda75f69bc864d6370b10674e45a92bd` by @localai-bot in https://github.com/mudler/LocalAI/pull/11524
* chore(deps): bump sentence-transformers from 5.6.1 to 5.7.0 in /backend/python/transformers by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11499
* chore(deps): bump vllm from 0.25.1 to 0.26.0 in /backend/python/vllm by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/11402
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `8337e4cd3861406fc04e0854b1409cd1b027fbc9` by @localai-bot in https://github.com/mudler/LocalAI/pull/11542
* chore: :arrow_up: Update vllm-metal (darwin) to `v0.3.0.dev20260815085651` by @localai-bot in https://github.com/mudler/LocalAI/pull/11541
* chore(deps): bump golang.org/x/net to v0.55.0 by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11544
* chore: :arrow_up: Update mudler/vllm.cpp to `4880c5715f36445a30bd39d3349a06dc96085a11` by @localai-bot in https://github.com/mudler/LocalAI/pull/11515
* chore: :arrow_up: Update vllm-metal (darwin) to `v0.3.0.dev20260816085229` by @localai-bot in https://github.com/mudler/LocalAI/pull/11553
* chore: :arrow_up: Update CrispStrobe/CrispASR to `3721d402f7bcc911dd4143a58e3da1cc67f09cc2` by @localai-bot in https://github.com/mudler/LocalAI/pull/11554
* chore: :arrow_up: Update vllm-metal (darwin) to `v0.3.0.dev20260817081527` by @localai-bot in https://github.com/mudler/LocalAI/pull/11570
* chore: :arrow_up: Update CrispStrobe/CrispASR to `007fda47128aaba7e2ce2279b0947a1c13800d68` by @localai-bot in https://github.com/mudler/LocalAI/pull/11569
* chore: :arrow_up: Update ggml-org/llama.cpp to `0021a77de0a8966059dc94548fb3b96654e0bb12` by @localai-bot in https://github.com/mudler/LocalAI/pull/11508
* chore: :arrow_up: Update mudler/vllm.cpp to `76f2a6d84e41cc9a593146a9a958f63645542731` by @localai-bot in https://github.com/mudler/LocalAI/pull/11555
* chore: :arrow_up: Update 0xShug0/audio.cpp to `3407559d7c83b543bd60ca8fa2b630374e71083f` by @localai-bot in https://github.com/mudler/LocalAI/pull/11474
* chore: :arrow_up: Update vllm-metal (darwin) to `v0.3.0.dev20260818075955` by @localai-bot in https://github.com/mudler/LocalAI/pull/11586
* chore: :arrow_up: Update 0xShug0/audio.cpp to `92816fc5c48d33a58171b49678ccf884d70142fb` by @localai-bot in https://github.com/mudler/LocalAI/pull/11587
* chore: :arrow_up: Update ggml-org/whisper.cpp to `4834a2327d008ace3ec5a9ed00f51454bcabbc1c` by @localai-bot in https://github.com/mudler/LocalAI/pull/11588
* chore: :arrow_up: Update mudler/vllm.cpp to `6e99e4540b8d0811542a9d7690dc9aa0bda5812f` by @localai-bot in https://github.com/mudler/LocalAI/pull/11589
* chore: :arrow_up: Update ggml-org/llama.cpp to `60addddf3c567c43ec3caf70fc953fba3572d96f` by @localai-bot in https://github.com/mudler/LocalAI/pull/11590
* chore: :arrow_up: Update CrispStrobe/CrispASR to `a117d433855ecc36b0cb20bd1abddd852902ed13` by @localai-bot in https://github.com/mudler/LocalAI/pull/11591
* chore: :arrow_up: Update mudler/parakeet.cpp to `e75de9b6b9b688fd293aa22f7e27aa724ea286f8` by @localai-bot in https://github.com/mudler/LocalAI/pull/11592
* chore: :arrow_up: Update mudler/vllm.cpp to `438305e1577768ec0f75729456a4c8b9f425e2ee` by @localai-bot in https://github.com/mudler/LocalAI/pull/11612
* chore: :arrow_up: Update 0xShug0/audio.cpp to `a61da671b6a81c79071500954eea3c91c1a383dd` by @localai-bot in https://github.com/mudler/LocalAI/pull/11613
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `97d2990807fe6d558e395f8764198d7c7e7b411c` by @localai-bot in https://github.com/mudler/LocalAI/pull/11616
* chore(model-gallery): :arrow_up: update checksum by @localai-bot in https://github.com/mudler/LocalAI/pull/11615
* chore: :arrow_up: Update CrispStrobe/CrispASR to `a153b09b37c90cd55cd9336fccbdf3ba7a289596` by @localai-bot in https://github.com/mudler/LocalAI/pull/11611
* chore: :arrow_up: Update NVIDIA/NeMo-Speech.cpp to `4f9676226f667d14608487df744f375db87127f8` by @localai-bot in https://github.com/mudler/LocalAI/pull/11417
### Other Changes
* fix(ci): parse current vllm-metal version pins by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11457
* fix(ci): refresh site counters through a PR by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11572
* feat(swagger): update swagger by @localai-bot in https://github.com/mudler/LocalAI/pull/11585
* fix(ci): test stale chunks in split bundle by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11595

**Full Changelog**: https://github.com/mudler/LocalAI/compare/v4.8.2...v4.9.0

---

> **Source** [mudler/LocalAI](https://github.com/mudler/LocalAI) · `v4.9.0` · 2026-08-20 · [upstream release](https://github.com/mudler/LocalAI/releases/tag/v4.9.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
