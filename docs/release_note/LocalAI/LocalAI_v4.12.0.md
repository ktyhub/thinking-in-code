---
title: "LocalAI v4.12.0"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.12.0"
version: "v4.12.0"
published: "2026-10-22"
type: "minor"
lang: "en"
---

# LocalAI v4.12.0

# 🎉 LocalAI 4.12.0 Release! 🚀

<h1 align="center">
  <br>
  <img height="300" src="https://raw.githubusercontent.com/mudler/LocalAI/refs/heads/master/core/http/static/logo.png">
  <br>
  <br>
</h1>

LocalAI 4.12.0 is out!

This release redesigns the web UI and adds streaming voice responses, native decision routing, and more control over model memory and prompt state. It also adds image upscaling, live motion capture, Qdrant stores, and authenticated chat history. It is also a preparation for the upcoming release which will include addon support. Our plan is to move few components (e.g. Studio, Talk) to separate add-ons that can be installed on-demand from LocalAI.

**Highlights:**

- 🖥️ **Redesigned web UI**: shared controls, light and dark themes, clearer Models and Studio workflows, and node-scoped backend maintenance.
- 🎙️ **Streaming voice and bundled audio models**: feed LLM fragments into Qwen TTS, use explicit clause streaming with other engines, and combine audio analysis roles through Parakeet bundles.
- 🧭 **Native decision routing**: classify requests with decision models and use the new `/v1/decisions` adapter for predicates, choices, and scores.
- 🖼️ **Image upscaling in Studio**: create an upscaled child image without leaving the project, with a dedicated `/v1/images/upscale` API.
- 🛡️ **Privacy and tool configuration**: Responses PII filtering, opt-in rejection of uninspectable media, alias profiles, and OAuth2 client credentials for remote MCP servers.
- 🕺 **Live GEM-X motion capture**: stream RGB frames into a bounded, session-based pose API on CPU or Vulkan.
- 🗄️ **Persistent Qdrant stores**: use the existing stores API with TLS and environment-backed credentials.
- 💾 **Inference controls**: configure MoE expert caching, lazy tensor reads, and explicit slot prompt-cache save and restore.

<p align="center">
<img width="2880" height="1800" alt="ui-home" src="https://github.com/user-attachments/assets/f0a1f7ca-014b-4b10-a503-7ad5440c847b" />
  <br><em>The shared navigation and composer organize the web UI around models, chat, Studio, and operations.</em>
</p>

---

## 📊 This release in numbers

| | |
|---|---|
| Pull requests merged | **211** |
| Commits | **307**, including 96 direct commits |
| Files changed | 1,416 (+186,826 / -67,020) |
| Feature PRs | 32 |
| User-facing fix PRs | 38 |
| Model-gallery PRs | 29 |
| Top-level gallery entries | 1,660 to **1,896** (+236) |
| Dependency PRs | 90 |

Counts compare `v4.11.0` with the release-preparation snapshot. Direct commits include user-facing features as well as gallery and maintenance work.

---

## 📌 TL;DR

| Area | Summary |
|---|---|
| 🖥️ Web UI | A shared visual kit, hub navigation, redesigned Models and Studio pages, per-model disk accounting, and guarded per-node backend removal. |
| 💬 Chat | Account-scoped server history, one reasoning-effort picker, editable microphone dictation, scanned-PDF image attachments, and separately sandboxed Canvas previews. |
| 🎙️ Audio | Incremental Qwen TTS, opt-in clause streaming, Parakeet bundles and speaker encoders, configurable VAD, and sound events alongside diarization. |
| 🎵 Sound | YuE2 support and optional structured expansion through a compatible native-tool chat model. YuE2 weights are non-commercial. |
| 🧭 Decisions | Native decision models can route requests; `/v1/decisions` adapts predicates, choices, and scores to the existing SystemOne pipeline. |
| 🛡️ Privacy and MCP | Incoming Responses text filtering, optional media rejection, protected terms and adjacent-word masking, alias profiles, and remote OAuth2 client credentials. |
| 🕺 Motion | GEM-X converts streamed RGB frames into SOMA-77 or SMPL-24 poses through a bounded duplex API. This integration is API-only. |
| 🗄️ Stores | Qdrant provides persistent vectors through `/stores/*`, with explicit backend selection, TLS, and chunked writes. |
| 💾 Inference | `moe_cache_mib`, `lazy_mode`, and opt-in slot save/restore add workload-specific controls without changing them into universal performance guarantees. |
| 🔧 Distributed operation | Attempt-specific load cancellation, leases, config resync, and shared root collection discovery improve the PostgreSQL/NATS architecture. |

---

## 🚀 New Features & Major Enhancements

### 🖥️ A shared web UI and clearer model operations

The web UI uses a shared CSS/SVG kit, ink-and-teal themes, consistent controls, and permission-aware Build and Operate hubs. Existing URLs remain available. Models exposes model details, variants, placement information, and disk usage. Studio shares a compose, job, result, and recent-results layout across its workflows.

Per-model storage accounting distinguishes shared files from model-specific files. Aggregate totals deduplicate shared bytes. A model's displayed size is not necessarily the space deleting it reclaims.

Remote manual imports now run as tracked gallery jobs. The import page and editor wait for acquisition to succeed and show failures or cancellation. Local-file imports without downloads retain synchronous behavior. Queued imports can apply recommended inference defaults, so set important parameters explicitly when reproducing a configuration.

Backends supports confirmed removal of one concrete build from one selected node. Protection checks and conflict locks prevent removal during conflicting operations. Refresh failures retain the last known inventory instead of reporting an unverified empty state.

> 🔗 PRs: #12526, #12551, #12587, #12599, #12785. Queued imports: [background acquisition](https://github.com/mudler/LocalAI/commit/28c4bb927700ed81d3d2e424b7c529da0d5d0a93) and [resolver-aware queueing](https://github.com/mudler/LocalAI/commit/addcec0c2806d96f4aac0badf5794b5363e2c9ab).

### 💬 Chat history, reasoning controls, and richer input

Signed-in users can synchronize conversations through `/api/conversations`. Account-scoped caches, persistent deletion intents, and tombstones prevent stale clients from restoring deleted conversations. This requires authentication, the WebUI enabled, and the `chat_history` permission. Anonymous and legacy-key-only sessions keep browser-local history; old shared browser history is not automatically assigned to an account.

One effort picker controls the per-chat `reasoning_effort` request. **None** also hides returned reasoning traces for new replies. `/effort` remains available; the separate `/reasoning` action is removed. This UI choice does not prove that every backend suppresses internal reasoning computation.

Microphone dictation appends editable text through an installed transcription model. Scanned PDFs without a text layer render their first ten pages as image attachments for a vision-capable model.

Canvas serves HTML previews with their own CSP in a sandbox without `allow-same-origin`. Previews expire after ten minutes and live in process memory. Allowed external HTTPS resources can load, so previews are not necessarily offline. Multi-frontend deployments need routing that reaches the process holding the preview.

<p align="center">
<img width="2880" height="1800" alt="ui-chat-reasoning-effort" src="https://github.com/user-attachments/assets/0e1bac20-1959-416c-af57-c77f59731ce6" />
  <br><em>Choose reasoning effort per conversation and edit dictated text before sending.</em>
</p>

> 🔗 PRs: #12663, #12788, #12700, #12716, #12756, #12715.

### 🎙️ Streaming voice responses and bundled audio analysis

Qwen TTS accepts incremental text through the optional `TTSLive` backend RPC. With LLM and TTS streaming enabled, one native utterance can start producing audio before the complete LLM reply arrives. Cancellation and backpressure propagate through the live path; a failed utterance does not replay after audio commitment.

```yaml
pipeline:
  streaming:
    llm: true
    tts: true
```

For non-native engines, `pipeline.streaming.clause_chunking: true` explicitly enables bounded clause synthesis. Leaving it unset preserves whole-reply synthesis. Native Qwen input does not use this clause splitter.

The gallery adds `qwen3-streaming-assistant`, `vits-streaming-assistant`, and `piper-streaming-assistant`. These presets install pipeline configuration only. Install their component LLM, transcription model, VAD, and TTS model separately.

Parakeet bundles can carry multiple audio roles, including ASR, VAD, diarization, sound detection, and a speaker encoder. Available roles depend on the bundle; they do not imply one fused inference pass. Diarization can return timed sound events with `include_sounds`.

Speaker-equipped Parakeet models can also serve voice embedding and verification. Encoder fingerprints distinguish compatible weights, and voice stores separate different embedding dimensions. `voice_verify_threshold` uses cosine distance, defaults to `0.5`, and accepts values between `0` and `2`. This backend does not add anti-spoofing or voice-analysis support.

Realtime responses now wait for earlier audio commits to finish transcription. A waiting response ends with `input_not_committed` if its pending commit produces no user item, instead of starting the LLM without that turn. `interrupt_response: false` preserves an active response while retaining overlapping transcripts and sound events.

> 🔗 PRs: #12770, #12455, #12463, #12479, #12491, #12499, #12544, #12446. Direct follow-ups: [Parakeet voice RPCs](https://github.com/mudler/LocalAI/commit/3beb2db0c9a84c870fa2faadec1d695c4d395b23), [ordered commit responses](https://github.com/mudler/LocalAI/commit/3a9a67aeb9ac3fa104345196541a2cfd6e0da7e8), and [interruption control](https://github.com/mudler/LocalAI/commit/f22fd45e21e4b8b681931527771676e938643746).

### 🎵 Structured Sound expansion and speech controls

YuE2 joins the audio.cpp sound-generation path. Ordinary Studio captions supply its style unless an explicit style parameter overrides them. **YuE2 weights use CC-BY-NC-4.0 and are limited to non-commercial use.**

Simple Sound can optionally use `expansion_model` to turn a short description into validated music fields. Final release behavior requires a `llama-cpp` model with `use_tokenizer_template: true` and native tool support. LocalAI requires exactly one strict `expand_sound` call; prose JSON and reasoning text are not fallback arguments. Invalid expansion stops before audio generation.

OmniVoice exposes bounded duration and postprocessing controls through speech parameters. Duration is capped at 30 seconds and quantized to generation frames. This does not guarantee an exact final WAV duration. Pocket TTS also accepts a model-load language option, such as `options: ["language:french"]`.

> 🔗 PRs: #12617, #12703, #12772, #12783, #12787, #12790, #12637, #12766.

### 🖼️ Image upscaling and additional generation controls

`POST /v1/images/upscale` provides dedicated upscaling with explicit model capability checks. Studio records the output as a child image so you can continue working within the same project. Native ESRGAN mode supports tiling without loading a diffusion context. Requested scale must match the model's native scale; it is not arbitrary-scale interpolation.

`custom_sigmas` exposes checkpoint-specific denoising schedules. New Qwen Image assemblies use those schedules; the selected encoders make these entries text-to-image only. Their model and encoder licenses still apply.

MiniMax-H3 gains additive reference-image, reference-video, and WAV-audio fields with partition checks and bounded inputs. These fields are API-only in this release; React does not expose them. Source support does not establish end-to-end generation on every checkpoint or device.

> 🔗 PRs: #12620, #12619, #12668.

### 🧭 Native decision routing and `/v1/decisions`

Decision models can classify requests directly for a router instead of using a general chat response as the classification protocol. The native path also supports bounded inline image decisions with a compatible format and projector.

`POST /v1/decisions` adapts the existing SystemOne pipeline to predicates, choices, and scores. It supports up to 64 questions and preserves typed boolean or string choices. `/v1/systemone` remains available.

Image input requires an image-capable decision model and inline PNG or JPEG data. Unsupported inputs fail rather than silently becoming text-only decisions. Existing Decisions permissions and usage accounting apply.

Older installed llama.cpp images may lack native Decisions support even when the server is current. Recognized stale-backend errors now return an upgrade-oriented `501` and mark the backend for upgrade. This detection does not itself rebuild an image.

> 🔗 PRs: #12449, #12603, #12733.

### 🛡️ Privacy controls, model profiles, and remote MCP authentication

PII middleware now covers incoming Responses instructions, text items, function arguments, and serialized tool output. `pii.block_unscanned_media: true` optionally rejects media the text detectors cannot inspect. It blocks rather than OCRs or transcribes media.

```yaml
pii_detection:
  extend_to_next_word: [ZIPCODE]
  extend_to_previous_word: [LASTNAME]
  protected_terms: [Example Supplier]
```

Adjacent-word extension and protected-term files add opt-in control over NER masking. Protected terms apply to NER only, not pattern detectors. They pass wherever the same term occurs, so allowlist only values safe to disclose. Extensions can over-mask.

These changes do not provide complete filtering across every request path. Agent interception and resolved historical Responses content remain gaps. Responses WebSockets with an active detector policy are refused rather than filtered; use HTTP POST for that policy.

Aliases can carry `profile.system_prompt`, MCP configuration, and client-tool policy while sharing one loaded target model. `mcp.auto` activates configured servers only within instance and user permissions. Optional numerical evidence notes are a warning heuristic, not factual verification.

Remote MCP servers support OAuth2 `client_credentials`, including environment-backed secrets and automatic token refresh. Token endpoints require HTTPS except explicit loopback hosts. Credential rotation through environment variables requires restarting the connection-owning process. Legacy SSE discovery remains available with constrained fallback.

> 🔗 PRs: #12661, #12660, #12708, #12755, #12711, #12304. Direct additions: [OAuth2 credentials](https://github.com/mudler/LocalAI/commit/beaeb05e52bb9bb20de64bf977d1e59c1abe9ed0), [protected terms](https://github.com/mudler/LocalAI/commit/e16b9d04cc9fa7e4245c44a0e1f3498792f1213c), and [previous-word extension](https://github.com/mudler/LocalAI/commit/e3341d21a0a5cb606ee824b24008e3470af7654c).

### 🕺 GEM-X live motion capture

The new `gemxcpp` backend converts streamed RGB frames into human poses through `/api/motion/sessions` and a duplex WebSocket. Clients can select SOMA-77 or SMPL-24 output and use single-use, origin-bound browser tickets.

The API bounds ingress and session counts rather than accumulating an unlimited capture backlog. Limits include one session per model, four per user, and sixteen per frontend. Clients must follow flow-control credits.

This integration is API-only and supports CPU or Vulkan; macOS uses CPU, not Metal inference. It does not provide a body mesh, robot controller, or person re-identification. Session state is frontend-local. GEM-X weights carry their own NVIDIA model-license terms.

> 🔗 Commits: [GEM-X backend and duplex API](https://github.com/mudler/LocalAI/commit/3de91d48d962ce477720e3a3ed12674a3b1a42f2), [per-user session bounds](https://github.com/mudler/LocalAI/commit/958add2336e7e0314d3f5b99624e6f9aab41051c), and [socket authentication hardening](https://github.com/mudler/LocalAI/commit/e7687e9fe905fb685c6503ff11c55b1c97aeca7a).

### 🗄️ Qdrant-backed vector stores

Use `backend: qdrant-store` through the existing `/stores/*` API to persist vectors in Qdrant. Configuration supports TLS, custom certificate authorities, and environment-backed API keys. Qdrant's gRPC default is port `6334`, not REST port `6333`.

Writes use chunks of at most 500 points with a timeout per chunk. Earlier chunks can remain written if a later chunk fails; a whole set is not atomic. `COSINE` is the default metric. Other metrics return raw scores that do not match existing cosine-based thresholds.

> 🔗 Commits: [Qdrant backend](https://github.com/mudler/LocalAI/commit/cb97cb1ed970706e30a08f4fc68db704a6d4438d), [bounded writes](https://github.com/mudler/LocalAI/commit/94d43e223f73b48bca2fde7097183293bfcf7fb7), and [TLS compatibility](https://github.com/mudler/LocalAI/commit/68c267603111372e2b97342ca37b8040e0c4190b).

### 💾 Model memory controls and saved prompt state

- `options: ["moe_cache_mib:4096"]` sets an opt-in GPU cache budget for host-resident MoE experts. It consumes VRAM and is workload-dependent; undersized caches can thrash.
- `options: ["lazy_mode:on"]` enables lazy reads for upstream-marked tensors. `auto` retains upstream selection rules; `off` loads them at startup. Forks without the field warn and ignore the option.
- `options: ["slot_save_path:/var/lib/localai/slots"]` enables admin slot save/restore through `/v1/slots/save` and `/v1/slots/restore`. Saved prompt state survives model unloading. Use compatible model, quantization, and context settings; saved files are sensitive data.

Slot persistence is POSIX-only, keeps at most 32 saves per model, and does not coordinate multiple processes sharing a directory. A busy slot waits for its active request. These controls do not imply a release-wide latency or memory improvement.

> 🔗 PRs: #12729, #12743, #12730.

### 🔧 Distributed recovery and opt-in diagnostics

PostgreSQL/NATS deployments gain load generations, leases, worker watchdogs, and attempt-specific cancellation through `POST /api/models/:id/load-cancel`. Upgrade frontends first. Model config resync defaults to 30 seconds through `--model-config-resync-interval`.

Root PostgreSQL collection discovery now uses a shared registry across frontends. Per-user collections are outside that change. Targeted unloading frees the named model rather than an arbitrary worker backend. These are NATS distributed-mode changes, not libp2p federation features.

Admin stop intent is not made durable by config resync: replica policies can still restart a stopped model. Do not treat resync as a persisted stop policy.

Opt-in `--pprof` exposes a separate numeric-loopback-only profiler. `--request-phase-timing` records frontend phases without adding filesystem probes. Profiles can contain sensitive data and add overhead; do not expose the profiler through public ingress. These measurements cover the Go frontend, not GPU inference on workers.

> 🔗 PRs: #12524, #12558, #12536, #12537, #12610, #12616.

### 🧰 Smaller features worth knowing about

- Pause and resume your own API keys, either indefinitely or until a timestamp, without deleting them. #12521.
- Prefer eligible installed development backends with `--prefer-development-backends`. Activation requires a frontend restart and separate worker configuration/restarts. #12782.
- Backend OCI downloads use the configured `--download-staging-path`. #12280.
- Tagged releases add a thin Linux x86_64 launcher AppImage. It needs glibc 2.35+ and host graphics libraries; it does not bundle the server, backends, or models. #12647.
- Silero VAD threshold, silence, and padding settings are configurable through model options. #12430.

---

## 🐛 Bug Fixes (recap)

- `fix(realtime)`: preserve committed speech across barge-in, order transcription before response generation, and honor interruption controls. #12446 and direct follow-ups.
- `fix(nodes)`: stage dedicated diarization audio on remote workers. #12474.
- `fix(audio-cpp)`: forward saved voice reference transcripts. #11997.
- `fix(sound)`: preserve distinct recordings after FLAC normalization. #12641.
- `fix(chat-history)`: initialize the store after opening the auth database. #12788.
- `fix(openresponses)`: retain synchronous server-side MCP calls and results for follow-up replay. #12711.
- `fix(rocm)`: locate bundled Tensile data in architecture directories. #12411.
- `fix(packaging)`: skip Linux GPU-library collection on Darwin. #12466.
- `fix(model)`: remove exited backends from loaded-model listings. #12497.
- `fix(vram)`: reject oversized GGUF metadata before allocation. #12560.
- `fix(distributed)`: target model unloads and recover abandoned load attempts. #12524, #12537.
- `fix(ui)`: repair mobile variant tables and model-import advanced controls. #12587, #12599.
- `fix(gallery)`: move context options to the correct config level. Existing installed configs may need manual correction. #12590.
- `fix(vllm-cpp)`: pin the MLX version expected by the engine. #12734.
- `fix(diffusers)`: drop negative prompts only when negative embeddings are supplied. [Commit](https://github.com/mudler/LocalAI/commit/8dd91dde66a25a6f28321e11fea00a022f46339b).

---

## 🧠 Models

The gallery index grows from 1,660 to 1,896 top-level named entries (+236). This counts separate top-level variants, not nested variant references.

The Models category contains 29 PRs: 11 addition or aggregate PRs and 18 checksum-maintenance PRs. Direct gallery commits add further variants; these are change counts, not counts of distinct model architectures.

Additions include Fluid Speech Mini, multilingual Parakeet bundles with speaker support, Moondream VAD slices, LFM2.5 24B variants, MiniCPM-V 4.7 1B variants, Iris-3B, FLUX.3 Image Klein, MOSS-Image, and experimental Fish Drama 3. Runtime-backed additions elsewhere in these notes include Qwen image schedules, RealESRGAN, streaming assistant presets, and native Decisions models.

Check each model card for weight licenses, hardware requirements, and experimental limitations. A gallery entry is not proof of validation on every backend or device.

---

## 👒 Dependencies

The range includes 90 dependency PRs. Repository names below remain distinct, including llama.cpp forks.

| Source | Update PRs |
|---|---:|
| `CrispStrobe/CrispASR` | 12 |
| `ikawrakow/ik_llama.cpp` | 12 |
| `0xShug0/audio.cpp` | 11 |
| `leejet/stable-diffusion.cpp` | 10 |
| `PrismML-Eng/llama.cpp` | 8 |
| `ggml-org/whisper.cpp` | 5 |
| `ggml-org/llama.cpp` | 4 |
| `ServeurpersoCom/omnivoice.cpp` | 4 |
| `mudler/vllm.cpp` | 4 |
| `mudler/parakeet.cpp` | 3 |
| `TheTom/llama-cpp-turboquant` | 2 |
| `antirez/ds4` | 2 |
| `localai-org/voice-detect.cpp` | 2 |
| `mudler/LocalRecall` | 2 |
| Nine other source/platform entries | 9 |

Feature PRs also update some pins. Dependency counts alone do not describe every final engine revision.

---

## 📖 Documentation

Feature documentation covers streaming pipelines, Decisions, alias profiles, PII middleware, model imports, motion sessions, Qdrant stores, diagnostics, and backend selection. Additional docs-only PRs repair internal links, refresh news and version references, and publish the previous release post. #12786, #12484, #12458, #12442.

---

## 🙌 New Contributors

Thanks to the contributors making their first merged PRs:

- @abhishek085 in #12609.
- @aniruddh-krovvidi in #12497.
- @anton12233 in #12430.
- @drakeo338 in #12766.
- @fmterrors in #12517.
- @nexxtmobile in #12446.

Thanks also to @anush008 for the Qdrant backend and follow-up direct commits.

**Full Changelog**: https://github.com/mudler/LocalAI/compare/v4.11.0...v4.12.0

---

> **Source** [mudler/LocalAI](https://github.com/mudler/LocalAI) · `v4.12.0` · 2026-10-22 · [upstream release](https://github.com/mudler/LocalAI/releases/tag/v4.12.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
