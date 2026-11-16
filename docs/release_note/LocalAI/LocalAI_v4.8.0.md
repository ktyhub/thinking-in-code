---
title: "LocalAI v4.8.0"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.8.0"
version: "v4.8.0"
published: "2026-08-05"
type: "minor"
lang: "en"
summary: "Twenty-two days, 386 pull requests, and three new modalities. This release introduces vllm.cpp, a C++20 engine maintained by the LocalAI team, which began as a vLLM port and now carries its own featureset, shipping as…"
---

# LocalAI v4.8.0

# 🎉 LocalAI 4.8.0 Release! 🚀

<h1 align="center">
  <br>
  <img height="300" src="https://raw.githubusercontent.com/mudler/LocalAI/refs/heads/master/core/http/static/logo.png">
  <br>
  <br>
</h1>

LocalAI 4.8.0 is out!

Twenty-two days, 386 pull requests, and three new modalities. This release introduces **vllm.cpp**, a C++20 engine maintained by the LocalAI team, which began as a vLLM port and now carries its own featureset, shipping as the `vllm-cpp` backend in **alpha development builds**. Around it: **3D generation** as a new modality, a multi-family **audio.cpp** engine, gallery entries that install the build your hardware can actually run, and a deep reliability pass on distributed mode driven by production incidents.

**Highlights:**

- 🚀 **vllm.cpp (alpha)** - a C++20 engine maintained by the LocalAI team, which began as a vLLM port and keeps vLLM as its reference implementation: V1 serving architecture (paged KV cache, continuous batching, prefix caching, scheduler, sampler) with no Python, PyTorch or ggml at inference. Measured at 1.045x vLLM on Qwen3.6-27B NVFP4 at concurrency 1, with token-for-token identical output. Loads safetensors and GGUF, enforces structured output in-engine, and runs on CPU, CUDA, Metal and Vulkan. The Apple Silicon build ships the MLX GEMM provider, measured at 1.5x to 2.2x on an M4. Shipping as alpha development builds: try it, do not depend on it.
- 🧊 **3D generation** - a new modality end to end: `Generate3D` RPC, `FLAG_3D` capability, `POST /v1/3d/generations`, the `trellis2cpp` image-to-3D backend, and a UI page with a native GLB viewer and print remeshing.
- 🔊 **audio.cpp** - one backend process serving six audio endpoints across many model families, picked from the GGUF's own metadata: speech, transcription, VAD, diarization, source separation and sound generation.
- 🎛️ **One model, many builds** - a gallery entry can declare `variants:`, and LocalAI installs the largest build that your host can actually run. No more hunting through the gallery for the right quantization.
- ⚡ **A much lighter web UI** - gzip on the wire, immutable caching for hashed assets, and paginated trace endpoints: the React bundle is 3.48x smaller and the trace poll dropped from 21 MB to 7 KB.
- 📊 **An Activity page** - the stacked operations bar collapses to one line, and a new admin Activity page keeps the record of what installed, failed or was cancelled, instead of dropping it the moment it finished.
- 📦 **Hugging Face artifact materialization** - immutable snapshot resolution, authenticated downloads with real progress, and staged artifacts that remote workers can bind to.
- 🎚️ **VRAM budgets** - cap how much of a card LocalAI may use, per node, as a percentage (`80%`) or an absolute amount (`12GB`).
- 🗣️ **Two new TTS engines** - `magpie-tts-cpp` (NVIDIA Magpie Multilingual, 5 voices, 9+ languages) and `moss-tts-cpp` (48 kHz stereo with reference-audio voice cloning).
- 🌳 **Sub-2-bit models** - a new `bonsai` backend serves the 1-bit and ternary Bonsai quantizations of Qwen3 and Qwen3.6-27B.
- 🖧 **Distributed mode hardening** - the reaper no longer deletes rows for backends that are alive and busy, phantom replicas are cleaned up, and `in_flight` counters stop leaking.

Plus a Valkey vector store, systemd socket activation, persistent trace history, two security fixes, a documentation overhaul aimed squarely at onboarding, and a new localai.io.

<p align="center">
  <img src="https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-8-0-ui-home.png" alt="The LocalAI Home page" width="900">
</p>

---

## 📊 This release in numbers

| | |
|---|---|
| Pull requests merged | **386** |
| Commits | 392 |
| Files changed | 1,204 (**+152,918** / -42,012) |
| Development window | 22 days (2026-07-14 to 2026-08-05) |
| Contributors | 25, of whom **11 first-time** |
| New backends | **7** (`vllm-cpp`, `audio-cpp`, `trellis2cpp`, `valkey-store`, `bonsai`, `magpie-tts-cpp`, `moss-tts-cpp`) |
| Gallery entries | 1,221 to **1,515** (+294) |

Where the work landed:

| Area | Change |
|---|---|
| `core/` | +54,974 / -8,291 across 546 files |
| `gallery/` | +39,193 / -29,119 (variant ladders rewrite most of the index) |
| `backend/` | +25,668 / -1,305 across 256 files |
| `pkg/` | +9,678 / -385 |
| `.github/` | +7,526 / -61 |
| `docs/` | +4,285 / -2,461 (near-flat by design: the dedup pass removed as much as it added) |
| `website/` | +4,479 (new project site) |
| `scripts/` | +3,373 / -175 |

---

## 📌 TL;DR

| Area | Summary |
|------|---------|
| 🚀 **vllm.cpp** (alpha) | An Apache-2.0 C++20 engine maintained by the LocalAI team and developed in its own repository, which began as a vLLM port, shipping as **alpha development builds** of the `vllm-cpp` backend over its stable C ABI v5. It uses vLLM as its reference implementation and benchmark, and implements vLLM's V1 architecture (paged KV cache, continuous batching, prefix caching, scheduler, sampler) with no Python, PyTorch or ggml at inference. Safetensors + GGUF, in-engine structured output (JSON schema / regex / choice / GBNF). Chat and tool calling ride the llama.cpp autoparser path: full minja templates, `tool_choice: auto` as a lazy structural-tag constraint, 30 tool dialects and 7 reasoning parsers, streamed `ChatDelta`/`ToolCallDelta`. CPU amd64/arm64, CUDA 12/13 (Blackwell), L4T, Vulkan and Darwin Metal, the last with the MLX GEMM provider vendored in (1.5x to 2.2x on an M4). |
| 🧊 **3D generation** | A new modality, wired end to end: `Generate3D` RPC, `FLAG_3D` capability, `POST /v1/3d/generations`, the `trellis2cpp` image-to-3D backend over TRELLIS.2, and a UI page with a native GLB viewer, IndexedDB history and previewable print remeshing. |
| 🔊 **audio.cpp** | New native C++ backend over [audio.cpp](https://github.com/0xShug0/audio.cpp), a multi-family ggml audio engine: one process serves `/v1/audio/speech` (supertonic, chatterbox, irodori-voicedesign), `/v1/audio/transcriptions` (citrinet, nemotron, forced-aligner), `/v1/audio/vad`, `/v1/audio/diarize` (sortformer), `/audio/transform` (htdemucs 4-stem separation, voice conversion, speech-to-speech) and `/v1/sound-generation`. Family comes from the GGUF's own `audiocpp.model_spec.family` key, so no per-model backend options. 13 gallery entries. CPU, CUDA 12/13, Vulkan, Metal. |
| 📊 **Activity page** | The stacked operations bar becomes a permanent one-line strip (`✕` now hides rather than cancels), with a new admin `/app/activity` page: in-progress detail with per-node breakdown, a "needs attention" lane with Cancel and Retry, and a bounded 50-entry record of what finished. |
| 🗄️ **Valkey vector store** | New `valkey-store` backend adding Valkey Search as a vector store option. |
| 🌐 **New localai.io** | The site splits into a project site at the root and docs under `/docs/`, with 214 generated redirect stubs so every published URL keeps working. Adds an engines page driven by YAML, a blog, an ecosystem band and `ADOPTERS.md`. |
| 🎛️ **Gallery variants** | An entry may declare `variants:` referencing other entries. Install-time selection drops builds the host cannot run (`IsBackendCompatible`) or cannot fit (VRAM, or cgroup-aware RAM on CPU hosts), then picks the largest that fits. Override with `variant` on `POST /models/apply`, `local-ai models install --variant`, the `install_model` MCP tool, or the UI split-button. `GET /api/models?has_variants=true` narrows the list. Older clients ignore the key and install the entry as before. |
| 📦 **HF artifacts** | Immutable snapshot resolution, authenticated downloads with progress, gallery install and preload materialization, runtime binding to staged artifacts, and UI progress reporting. Python backends reuse the Go download path. |
| ⚡ **HTTP performance** | gzip middleware (`--disable-http-compression`, `--http-compression-min-length`), with streaming paths explicitly skipped. `/assets/*` served `immutable`, `index.html` `no-cache`. `/api/traces` and `/api/backend-traces` accept `limit`/`offset`/`full` and summarize by default, with `GET /api/traces/{id}` for the full record. React bundle 2,815,513 B to 807,918 B; backend-trace poll 21,131,097 B to 7,201 B. |
| 🎚️ **VRAM budget** | `LOCALAI_VRAM_BUDGET=80%` or `=12GB` (also `--vram-budget`), on `local-ai` and `local-ai worker`. Standalone it is a hard per-process cap inherited by context-fit, GGUF warnings and the watchdog; distributed it is a placement ceiling the scheduler respects. Admin override via `PUT`/`DELETE /api/nodes/:id/vram-budget` and the `set_node_vram_budget` MCP tool. Unset means all detected VRAM. |
| 🗣️ **magpie-tts-cpp** | New Go/purego backend over [magpie-tts.cpp](https://github.com/mudler/magpie-tts.cpp), a ggml port of NVIDIA Magpie TTS Multilingual 357M with NanoCodec embedded. 5 voices, 9+ languages, 22.05 kHz mono, one self-contained GGUF. |
| 🗣️ **moss-tts-cpp** | New Go/purego backend over [moss-tts.cpp](https://github.com/mudler/moss-tts.cpp) for MOSS-TTS-Local v1.5. 48 kHz stereo, optional reference-audio voice cloning, no Python at inference. |
| 🌳 **bonsai** | New backend on the [PrismML llama.cpp fork](https://github.com/PrismML-Eng/llama.cpp), which is the only decoder for the Q1_0 and Q2_0 quant formats. Eight gallery entries across Bonsai 8B/27B and Ternary-Bonsai 8B/27B, from ~1.15 GB. |
| 🖧 **Distributed reliability** | A busy backend is no longer reaped: the worker is asked directly over a new `models.running` subject, and the port-probe fallback distinguishes `DeadlineExceeded` (busy) from `Unavailable` (gone), requiring three consecutive misses. Frontend model stubs are dropped when no healthy replica remains, `in_flight` leaks are closed, and model-load deadlines scale with checkpoint size. |
| 🛡️ **Security** | Inline GRPO reward code in `POST /api/fine-tuning/jobs` is refused unless the operator sets `LOCALAI_TRL_ALLOW_INLINE_REWARD=true`; the previous builtin allowlist was escapable to arbitrary code execution on an endpoint that is unauthenticated by default. Also picks up hono 4.12.25 for CVE-2026-54290. |
| 🧠 **Models** | MiniMax-M3, Gemma 4 llama.cpp MTP variants, Qwen3.5-4B DFlash, MOSS-TTS-Local v1.5, the APEX families as variant ladders, and the Bonsai families. Duplicate entries removed and linted against recurring. |
| 📖 **Docs** | Onboarding overhaul: one model carried through install to first API call, a new "Build your first agent" walkthrough, a runtime-errors reference keyed on literal error strings, an agent actions catalog, and a new Operations section. |

---

## 🚀 New Features & Major Enhancements

### 🚀 Introducing vllm.cpp (alpha)

<p align="center">
  <img src="https://raw.githubusercontent.com/mudler/vllm.cpp/master/benchmarks/media/concurrency_race.gif" alt="vllm.cpp and vLLM generating side by side on Qwen3.6-27B" width="900">
  <br><em>vllm.cpp against vLLM on Qwen3.6-27B, identical output at every concurrency.</em>
</p>

**[vllm.cpp](https://github.com/mudler/vllm.cpp) is Apache-2.0, maintained by the LocalAI team, and began as a C++20 port of vLLM.** We want it community-first rather than a LocalAI-only engine, so it lives in its own repository with its own docs, benchmark record and issue tracker, and it is usable without LocalAI anywhere in the picture. It implements vLLM's V1 serving architecture (paged KV cache, continuous batching, prefix caching, scheduler, sampler) on a portable tensor runtime with **no Python, no PyTorch and no ggml at inference time**, and uses vLLM itself as its reference implementation: correctness is checked by comparing output against it, and the benchmark scoreboard is kept against it.

It has since grown a featureset vLLM does not have, which is what the port was for. It loads GGUF as well as Hugging Face safetensors, runs on CPU, Apple Metal and Vulkan alongside NVIDIA CUDA, ships speculative decoding and KV offload, and enforces structured output in-engine (JSON schema, regex, choice, GBNF). Its benchmark page now measures against llama.cpp, MLX-LM and DwarfStar as well as vLLM, because those are the engines it actually competes with on that hardware.

**The project is expected to be renamed**, with the new name still to be decided. It is drifting far enough from vLLM that calling it a port undersells it and calling it vllm.cpp will eventually mislead.

### Numbers, from the project's own scoreboard

<p align="center">
  <img src="https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-8-0-vllm-cpp-scoreboard.png" alt="Throughput of vllm.cpp relative to each reference engine" width="900">
</p>

These come from [vllm.cpp's BENCHMARKS.md](https://github.com/mudler/vllm.cpp/blob/master/docs/BENCHMARKS.md), which reports ties as ties and losses as losses. Throughput is vllm.cpp over the reference, so above 1.0 is ahead.

| Reference | Workload | Result |
|---|---|---|
| vLLM | Qwen3.6-27B NVFP4, GB10 | 1.045x at concurrency 1, 1.007x to 1.017x at c2 to c32, output token-for-token identical |
| vLLM | Qwen3.6-35B-A3B NVFP4, GB10 | 1.010x at c16 and 1.013x at c32; behind at c1 to c8 (0.817x at c1) |
| vLLM | DeepSeek-V2-Lite MLA, GB10 | 0.86x to 0.95x throughput, TTFT ahead at c4 and c8 |
| llama.cpp | Qwen3.5-2B GGUF, CPU aarch64 | prefill 1.18x, decode a tie, memory parity, byte-identical output |
| MLX-LM | Qwen3-0.6B, Apple M4 | 97.6% of warm total, prefill ahead |
| DwarfStar (ds4) | DeepSeek-V4-Flash IQ2_XXS, one DGX Spark | 18.69 vs 16.33 tok/s decode, **1.144x**, same output |
| vLLM | Laguna-XS-2.1 NVFP4, GB10 | 44.46 vs 43.10 tok/s, **1.03x**, same output |

The upstream page is careful about its own noise band: on the 27B grid it calls c2 through c32 ties rather than wins, because the run-to-run spread is 0.5% and those margins land between 0.7% and 1.7%. The c1 result is the one it stands behind.

The DeepSeek-V4-Flash row is the one that shows how far the project has moved from being a vLLM port. It runs DeepSeek-V4-Flash at roughly 2-bit (IQ2_XXS mixed, about 80 GB) on a **single DGX Spark**, decoding at 18.69 tok/s against DwarfStar's 16.33. At 300B+ total parameters even a 4-bit checkpoint is 156 GB or more, so a 2-bit GGUF is what fits inside the Spark's 119 GiB unified pool, and reading GGUF is what makes that possible.

That figure moved twice in a week, and the second move came from one lever. The dense Q8_0 projection tower was being read from the GGUF mmap over unified memory, which the GB10 reads about 20% slower per-GEMV than device memory. Staging that ~6 GiB tower device-resident once at load, same bytes and same kernels, took decode from 16.23 to 18.69, generating the same tokens and using no more peak memory. The same change took Laguna-XS-2.1 from 87% of vLLM to 1.03x ahead of it.

Speculative decoding is in similar shape: MTP on Qwen3.6-27B NVFP4 generates the same tokens as vLLM's MTP and runs about 4% faster at concurrency 1.

It ships here as the **`vllm-cpp`** backend, which dlopens the engine's stable C ABI (v5) through purego. Concurrent requests batch continuously inside the engine's shared scheduler rather than serializing, so the backend runs on `base.Base` rather than `SingleThread`.

**Tool calling is at llama.cpp parity, by construction**, because chat reuses the same autoparser path. With `use_tokenizer_template` the engine renders the model's own chat template (GGUF `tokenizer.chat_template` or `tokenizer_config.json`, full minja) and handles the rest itself:

- `tool_choice: auto` lowers to a lazy structural-tag decode constraint; `required` and named choices force the family's native syntax where expressible.
- Streaming per-dialect parsers cover **30 tool dialects and 7 reasoning parsers**, with `<think>` reasoning split before tool parsing.
- `ChatDelta`, `ToolCallDelta` and reasoning stream exactly as the llama-cpp backend does.

`tool_parser:` and `reasoning_parser:` are model options, auto-detected when unset.

Getting started is a normal backend install:

```yaml
name: qwen3-vllm
backend: vllm-cpp
context_size: 8192
parameters:
  model: Qwen3-4B      # a safetensors directory or a .gguf file
options:
- max_num_seqs:16      # also: block_size:<n>, num_blocks:<n>
```

The build matrix covers CPU amd64/arm64, CUDA 12/13 (including Blackwell `120a;121a`), L4T arm64 for GB10, Vulkan and Darwin Metal, with a gallery meta plus 12 image entries. The llama-cpp GGUF and vllm safetensors importers gained preference swaps, so the backend can be chosen at import time.

**Apple Silicon gets the MLX GEMM provider.** The darwin build vendors vllm.cpp's optional MLX backend, which upstream keeps off by default on the position that it has to earn its ~124 MB. Measured on an M4 (Qwen3-1.7B-bf16, p=512 g=128, arms toggled on one binary so there is no build-difference confound):

| Batch | MLX tok/s | native tok/s | speedup | MLX TTFT | native TTFT |
|--:|--:|--:|--:|--:|--:|
| 1 | 5.79 | 3.08 | **1.88x** | 3.32 s | 7.68 s |
| 4 | 15.75 | 10.24 | **1.54x** | 9.63 s | 18.77 s |
| 16 | 38.65 | 17.69 | **2.19x** | 18.33 s | 54.48 s |

Read those as indicative rather than binding: two reps with a spread reaching 9.4%, so the multipliers carry about +/-10%. The gap is far larger than the noise, and time-to-first-token roughly halves across the range.

**These are alpha development builds, not a released backend.** vllm.cpp is early. It ships in 4.8 so people who want to try it can, not because it is ready for anything you depend on, and `llama-cpp` stays the default for real use. Expect rough edges.

The CPU path is end-to-end verified against `Qwen3.5-2B-UD-Q8_K_XL.gguf` with the full Ginkgo suite: blocking and streaming byte-parity, greedy determinism, stop words, GBNF-constrained generation, concurrent streams, real template rendering, reasoning split, a `required` tool call returning schema-valid arguments, and an `auto` run where the engine engages the tool itself and streams parsed deltas. The GPU images build and ship, but their runtime behavior has not been through that gate. No throughput comparison against upstream vLLM is claimed. Please report what breaks.

> 🔗 PRs: #11100, #11137

### 🧊 3D generation, end to end

<p align="center">
  <img src="https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/3d-generation.gif" alt="A generated 3D llama turning in the GLB viewer" width="760">
  <br><em>trellis2-4b, 2,502,928 vertices, turning in the browser.</em>
</p>

LocalAI gains a new modality. Image-to-3D is wired through the whole stack rather than bolted onto an existing endpoint: a `Generate3D` RPC in `backend.proto`, a `FLAG_3D` capability so the loader knows which backends can serve it, and `POST /v1/3d/generations`.

The first engine behind it is **`trellis2cpp`**, a native image-to-3D backend over TRELLIS.2. The React UI gets a 3D generation page with a native GLB viewer, IndexedDB-backed history so your generations survive a reload, and previewable print remeshing for output you intend to actually print.

> 🔗 PRs: #10979

### 🔊 audio.cpp: one backend, six audio endpoints

**`audio-cpp`** wraps [audio.cpp](https://github.com/0xShug0/audio.cpp), a multi-family ggml audio engine. Rather than one backend per model family, a single backend process serves several unrelated families through one runtime vocabulary, and picks the family from the GGUF's own `audiocpp.model_spec.family` metadata key, so a model needs no backend-specific options to load.

| Endpoint | Families |
|---|---|
| `/v1/audio/speech` (batch + streaming) | supertonic, chatterbox (voice cloning), irodori-voicedesign (voice design via `instructions`) |
| `/v1/audio/transcriptions` (batch, streaming, live) | citrinet, nemotron, forced-aligner |
| `/v1/audio/vad` | silero-vad, marblenet-vad |
| `/v1/audio/diarize` | sortformer |
| `/audio/transform` | htdemucs (4-stem separation), chatterbox (voice conversion), seedvc-singing, vevo2 (speech to speech) |
| `/v1/sound-generation` | stable-audio-sfx |

Thirteen gallery entries ship with it, one representative model per task kind the engine can actually serve. Where it cannot honestly back an RPC it returns `UNIMPLEMENTED` with a reason rather than an empty success, and a failed load is a gRPC error rather than `success: false`, so the loader's greedy backend probe never silently selects it for a model it cannot serve.

Two changes reach beyond the backend. `backend.proto` gains `AudioTransformStem` and `AudioTransformResult.stems`, so source separation can return the whole stem set instead of a single mixdown. And `/audio/transform` no longer hardcodes a 16 kHz mono fold: that fold made 4-stem separation unreachable by construction, so it became a per-backend capability, with existing backends keeping it explicitly and the default for an unregistered backend being to leave the upload alone.

Platforms: CPU (amd64 and arm64), CUDA 12, CUDA 13 and Vulkan on Linux, plus Metal on darwin-arm64. No ROCm, which upstream does not support.

> 🔗 PRs: #11141

### 📊 A one-line strip, and an Activity page

<p align="center">
  <img src="https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-8-0-ui-activity.png" alt="The Activity page with four installs running" width="900">
  <br><em>Four backend installs in flight, with the record of what already finished.</em>
</p>

The operations bar rendered one row per in-flight operation above every page. Queue four model installs and a backend and it took most of the viewport, on every route, until the last one finished. Two things were conflated: a global "something is happening" signal, which needs one line, and the detail of what is happening, which needs a page.

The strip now collapses to a single line permanently, showing one operation (a failure first, otherwise the least-advanced running one) with a `+N more` pill. Its `✕` **hides the strip and never cancels**, a deliberate change: the same glyph previously cancelled a 17 GB download in one row and dismissed a message in the next. Cancelling moved to the page, behind a labelled button.

The new admin-only Activity page at `/app/activity` carries the detail the strip has to drop (phase, bytes, derived time remaining, and a per-node breakdown for cluster installs), a "needs attention" lane for unacknowledged failures with Cancel and Retry, and a record of what finished. That record is a bounded 50-entry ring, which closes a real gap: `/api/operations` dropped an operation the moment it succeeded, so a user who stepped away had no way to learn whether an install finished, failed, or never started.

Several latent UI bugs were fixed along the way: retrying a failed removal re-downloaded the model, queued operations rendered as "Installing" with a spinner, a long error message pushed every page ~270px past the viewport, and the ETA blanked for every operation whenever one was verifying.

> 🔗 PRs: #11163

### 🎛️ One gallery entry, several builds

<p align="center">
  <img src="https://raw.githubusercontent.com/mudler/LocalAI/master/website/static/media/v4-8-0-ui-model-variants.png" alt="The model detail pane listing every variant" width="900">
  <br><em>One entry, four builds. LocalAI picks the largest that fits and marks it auto-selected.</em>
</p>

A gallery entry can now declare `variants:`, a list of references to other gallery entries that are alternative builds of the same weights:

```yaml
- name: nanbeige4.1-3b-q4      # still a normal, complete, installable entry
  url: github:mudler/LocalAI/gallery/nanbeige4.1.yaml@master
  overrides: {parameters: {model: nanbeige4.1-3b-q4_k_m.gguf}}
  files: [...]
  variants:
    - model: nanbeige4.1-3b-q8
```

Selection at install time, in order:

1. Drop variants whose backend cannot run here. MLX disappears on Linux, CUDA on a Mac. Derived from the backend name, so authors never write hardware conditions.
2. Drop what does not fit: VRAM on GPU hosts, cgroup-aware system RAM on CPU hosts, so a container sees its own limit.
3. Take the largest that remains, on the basis that a bigger footprint is a better build of the same weights.

The entry's own build competes in that ranking and is never filtered out, so selection always ends with something installable.

Sizes come from the existing `pkg/vram` estimator (remote GGUF header, HTTP `HEAD`, the declared `size:`, then the HF repo listing). Nothing is downloaded to decide, and a probe failure never fails an install.

Auto-selection is the default and every surface can override it: `variant` on `POST /models/apply` and `POST /api/models/install/:id`, `local-ai models install <name> --variant <variant>`, the `variant` parameter on the `install_model` MCP tool, and a split-button menu in the models table. An explicit selection is honored even when it does not fit, with a warning, since that is a deliberate operator override.

Existing installations are unaffected: every released LocalAI reads `gallery/index.yaml` live and ignores keys it does not understand, so an older client drops `variants:` and installs the entry exactly as before. A spec re-parses the real index through a legacy-shaped struct to keep that true.

Known gaps worth stating: in distributed mode `InstallModel` resolves against the frontend rather than the worker that will serve the model, so a cluster with a small frontend and large workers selects conservatively. Probing within a single entry is still serial and uncapped.

> 🔗 PRs: #10943, #10983, #10992, #11027, #11139

### 📦 Hugging Face model artifacts

Model artifacts from Hugging Face are now materialized as a managed snapshot flow: immutable snapshot resolution, authenticated downloads with progress reporting, materialization on gallery install and preload, runtime binding to the staged artifacts, and progress surfaced in the UI. Python backends reuse the Go download path rather than fetching on their own.

A substantial run of follow-ups landed alongside it: per-file resume of interrupted materialization rather than starting over, each writer staging into its own partial tree, companion artifacts persisted so remote workers receive the `base_model` option, single-file HF snapshots loaded from the file rather than the directory, inferred materialization gated by backend, CIFS `EACCES` treated as lock contention rather than failure, and multi-file install progress kept proportional during verification.

> 🔗 PRs: #10825, #10908, #10909, #10910, #10949, #10986, #10995, #11071, #11075, #11117

### ⚡ A much lighter web UI and trace API

Three HTTP-layer problems, all measured on a live deployment, fixed together because they all shape what goes on the wire.

The server sent no `Content-Encoding` at all, regardless of `Accept-Encoding`. There is now gzip middleware, on by default and controllable with `--disable-http-compression` / `LOCALAI_DISABLE_HTTP_COMPRESSION` and `--http-compression-min-length` / `LOCALAI_HTTP_COMPRESSION_MIN_LENGTH` (default 1024). Streaming responses are skipped explicitly, since buffering them behind a gzip writer defeats incremental flushing and reads as a hung stream: SSE `Accept` headers, WebSocket upgrades, and the completion, realtime, speech, transcription, agent-job and log-tail path prefixes. Already-compressed formats are skipped too, because gzip made those marginally larger.

Vite content-hashes the bundle filenames, so an `/assets/` URL can never change content, yet they shipped with no `Cache-Control`, `ETag` or `Last-Modified`. They now carry `public, max-age=31536000, immutable`, `index.html` is explicitly `no-cache` so deploys are picked up, and unhashed locale JSONs get a 5 minute policy.

`/api/traces` was returning a 21 MB unpaginated blob that the UI polled every 5 seconds. Both list endpoints now accept `limit` (default 50, max 1000, `0` for all), `offset` and `full`, and summarize by default: bodies and headers are dropped, the byte counters kept so the UI can still report what went missing. Every trace carries a process-lifetime `id`, and `GET /api/traces/{id}` serves the full record on expand or export. Paging metadata rides in `X-Total-Count`, `X-Trace-Offset` and `X-Trace-Limit`, so the list body stays a plain JSON array for existing consumers.

| | Before | After | Change |
|---|---|---|---|
| React JS + CSS over the wire | 2,815,513 B | 807,918 B | **3.48x smaller** |
| All embedded assets (incl. fonts) | 3,953,917 B | 1,559,787 B | 2.53x smaller |
| Repeat navigation asset transfer | full re-download | 0 bytes | eliminated |
| `/api/backend-traces` poll payload | 21,131,097 B | 7,201 B | **~2900x smaller** |

> 🔗 PRs: #11056

### 🎚️ Per-node VRAM allocation budgets

Operators can now cap how much VRAM LocalAI uses for model allocation on a node, as a percentage (`80%`) or an absolute amount (`12GB`). Everywhere LocalAI reads VRAM to make an allocation decision it now uses `min(detected, budget)`, a hard ceiling that never raises usable VRAM above physical. Percentages above 100% are rejected; absolute values above physical are clamped.

```
LOCALAI_VRAM_BUDGET=80%
LOCALAI_VRAM_BUDGET=12GB
```

It applies to both `local-ai` and `local-ai worker` (also `--vram-budget`), and is editable live from the standalone Settings page and per node in the distributed node UI.

The two paths are deliberately asymmetric:

- **Standalone**, a hard per-process cap. `xsysinfo` holds it as a process-global default, so hardware defaults, context auto-fit, GGUF warnings and the watchdog all inherit it.
- **Distributed**, a placement ceiling. The worker reports raw VRAM plus its budget string; the registry resolves it and caps stored `available_vram` on registration and heartbeat, so the SQL scheduler needs no query change. The worker still sees its full card for its own context-fit.

Admin overrides via `PUT`/`DELETE /api/nodes/:id/vram-budget` survive worker restarts, and are exposed as the `set_node_vram_budget` MCP tool.

Default unset means all detected VRAM, so existing deployments are unchanged.

> 🔗 PRs: #10833

### 🗣️ Two new text-to-speech engines

**magpie-tts-cpp** wraps [magpie-tts.cpp](https://github.com/mudler/magpie-tts.cpp), a C++17/ggml port of NVIDIA's Magpie TTS Multilingual 357M with its NanoCodec vocoder embedded: 5 voices (Aria, Jason, John, Leo, Sofia), 9+ languages, 22.05 kHz mono, from one self-contained GGUF with no Python or PyTorch at inference. GGUFs are published at [mudler/magpie-tts.cpp-gguf](https://huggingface.co/mudler/magpie-tts.cpp-gguf). A live gRPC check returns a valid non-silent WAV that round-trips exactly through ASR, and the upstream engine is parity-gated against NeMo per component (teacher-forced replay max abs diff 3.6e-5).

**moss-tts-cpp** wraps [moss-tts.cpp](https://github.com/mudler/moss-tts.cpp), the ggml port of the OpenMOSS MOSS-TTS family, serving MOSS-TTS-Local v1.5 (a GPT-J local transformer decoded through MOSS-Audio-Tokenizer-v2). It produces 48 kHz stereo with optional reference-audio voice cloning. GGUFs are at [mudler/MOSS-TTS-Local-Transformer-v1.5-GGUF](https://huggingface.co/mudler/MOSS-TTS-Local-Transformer-v1.5-GGUF). Images cover CPU, CUDA 12/13, Intel SYCL f16/f32, Vulkan, ROCm, NVIDIA L4T and Darwin Metal.

> 🔗 PRs: #11115, #10860, #10877

### 🌳 Sub-2-bit models with the bonsai backend

The [Bonsai models](https://huggingface.co/prism-ml) are 1-bit (Q1_0) and ternary / 1.58-bit (Q2_0) quantizations of Qwen3 8B dense and Qwen3.6-27B hybrid attention. Their quant formats are only decodable by the [PrismML fork of llama.cpp](https://github.com/PrismML-Eng/llama.cpp), since stock llama.cpp has no Q1_0/Q2_0 kernels, so they need a dedicated fork backend in the same shape as `ik-llama-cpp` and `turboquant`.

The backend reuses `backend/cpp/llama-cpp/grpc-server.cpp` against the fork's `libllama` through a thin wrapper Makefile that only swaps `LLAMA_REPO` and `LLAMA_VERSION`, so these models are served over the same OpenAI-compatible API as stock `llama-cpp`. The reused server compiles against the fork with zero skew patches.

Eight gallery entries ship with it:

| Family | Variants | Notes |
|---|---|---|
| `bonsai-8b-1bit` | Q1_0 | Qwen3-8B, ~1.15 GB |
| `ternary-bonsai-8b` | Q2_0, `-q2-g64`, `-pq2` | Qwen3-8B, ~2.18 GB |
| `bonsai-27b-1bit` | Q1_0 | Qwen3.6-27B hybrid attention, vision, ~3.9 GB |
| `ternary-bonsai-27b` | Q2_0, `-pq2`, `-q2-g64` | Qwen3.6-27B hybrid attention, vision, ~7.2 GB |

If Q1_0 and Q2_0 land in mainline llama.cpp, this backend can retire in favor of a routine `LLAMA_VERSION` bump on stock `llama-cpp`.

> 🔗 PRs: #10834, #10866

### 🖧 Distributed mode reliability

Investigating a model that showed as loaded on the home page but appeared on no node in the cluster turned up four separate bugs, all fixed here.

The reaper was deleting rows for backends that were alive and working. `probeLoadedModels` reaped a `node_models` row after one failed 1 second health check, and a busy backend cannot answer one: a single-threaded Python backend blocks for minutes inside a request.

- A new `models.running` subject asks the worker directly, since it holds the process handle and is not blocked by the backend. The reconciler diffs its process keys against the registry before any port probe.
- A worker that does not answer is skipped, not assumed empty, so a NATS blip cannot delete a node's rows.
- The port probe now separates `DeadlineExceeded` (busy) from `Unavailable` (gone), and only the latter counts, after three consecutive misses.

Every routed model also left an in-process stub in the frontend's `ModelLoader`, and removal paths deleted only the database row, so the stub outlived the replica and the model was reported as loaded forever. The replica-removed hook became a list, and a new local-stub invalidator drops the stub once no healthy replica remains cluster-wide.

Alongside those: `in_flight` counters could leak high and pin a replica's VRAM against eviction; model-load deadlines now scale with checkpoint size and with progress rather than wall-clock; staging verification counts as progress rather than a stall; backend discovery no longer hides worker-installed or GPU-only backends behind the controller's filesystem and capability; the scheduler will not place a model on a node that cannot store it; and open responses are visible and cancellable across replicas.

Worker-side, a backend process whose directory a reinstall replaced is never reused, the gRPC port allocator is bounded and stops leaking dead backends' ports, deleted backends are reaped, and the worker has a real health endpoint with a mode-aware `HEALTHCHECK`.

> 🔗 PRs: #11142, #11121, #11030, #11029, #11026, #11019, #11000, #10999, #10990, #10970, #10968, #10967, #10966, #10956, #10948, #10947, #10838, #11054, #10551

### 🧰 Smaller features worth knowing about

- **Valkey Search vector store** (#11196): a new `valkey-store` backend adds Valkey as a vector store option alongside the existing ones.
- **systemd socket activation** (#11169): `local-ai` consumes a TCP listener inherited through the systemd socket-activation protocol on Linux, so it can start on demand. Ordinary `--address` / `LOCALAI_ADDRESS` binding is unchanged when no activation listener is present, ambiguous multiple listeners are rejected, and the public-bind auth safety check runs against the actual inherited address. Documented alongside the Podman descriptor-passing requirement.
- **Persistent trace history** (#11203): API and backend trace histories now persist under the configured data path and survive a restart, as bounded per-record JSON files under `traces/api` and `traces/backend`. No database dependency, existing `tracing_max_items` bounds preserved, restored IDs advanced to avoid collisions, corrupt records skipped rather than blocking startup.
- **Edit saved chat messages** (#11189): inline Edit / Save / Cancel on saved user prompts and assistant responses, persisted through local chat history with no inference request, preserving structured content blocks and attachment metadata.
- **Self-contained Intel SYCL backend** (#10991): the Intel llama.cpp backend now runs on any host rather than requiring a matching oneAPI runtime.
- **Configurable VAE tiling** (#11216) for `stablediffusion-ggml`, and **voice control on low-power devices** (#10804) via the classifier/VAD path.
- **Anthropic prompt-cache breakpoints** (#11158): optional cache breakpoints in cloud-proxy translate mode.
- **`/v1/detokenize`** (#9620), and **deterministic, type-filtered backend auto-detection** (#10286) so backend selection stops depending on probe order.
- **MLX TTS routing** (#11267): MLX TTS models now import to `mlx-audio` rather than a generic text backend.

### 🛡️ Inline fine-tuning reward code is now opt-in

`POST /api/fine-tuning/jobs` accepts `reward_functions[].code`, an inline Python body that was executed against a hand-rolled builtin allowlist. That allowlist was not a security boundary: standard CPython introspection reaches the real `os` module and yields arbitrary code execution on the host. Execution happened synchronously during a smoke test at job start, and the fine-tuning endpoint is unauthenticated by default.

Rather than trying to harden the allowlist, inline reward code is now refused unless the operator explicitly opts in with `LOCALAI_TRL_ALLOW_INLINE_REWARD=true` on the backend. Builtin reward functions are unaffected and keep working with no configuration. The documentation no longer describes the allowlist as a sandbox and states plainly that inline code is arbitrary execution.

Two further hardening fixes landed in the same cycle:

- **Tar hardlinks that escape the extraction root are rejected** (#11266). `ExtractArchive` pre-scanned members and rejected symlinks, but tar hardlink entries carry a regular file mode and passed that check, and `Header.Linkname` was never validated, so an archive could create a link to a path outside the destination directory. Linkname now gets the same path check as member names; hardlinks resolving inside the root still extract, so ordinary archives are unaffected.
- **Cyclic `$ref` in a JSON-schema grammar is rejected** (#11041) rather than recursing into a stack-overflow crash.

This release also picks up hono 4.12.25 for CVE-2026-54290.

> 🔗 PRs: #11068, #11266, #11041, #11023

### 🔍 Traces gain request identity

The API Traces panel recorded who issued each request but never showed it, and never captured the caller's network identity. The table now has a sortable User column, and the expanded row carries User, Client IP and User Agent, from echo's `RealIP()` (honouring `X-Forwarded-For` / `X-Real-IP` behind a trusted proxy). Fields render only when present, so older buffered traces and unauthenticated local requests degrade cleanly. The time column now shows the date too.

> 🔗 PRs: #10907, #10905

---

## 🐛 Bug Fixes (recap)

- `fix(distributed)`: reaper reaps live backends, ghost model stubs, `in_flight` leak, sidecar staging runaway - #11142
- `fix(distributed)`: scale the remote model-load deadline with checkpoint size - #11030
- `fix(distributed)`: make the cold-load hold scale with progress, not wall-clock - #11019
- `fix(distributed)`: count staging verification as progress, not as a stall - #11026
- `fix(distributed)`: reject wrong-model requests at the backend and on the remaining modalities - #10970, #10990
- `fix(distributed)`: backend discovery hid worker-installed and GPU-only backends - #10967, #10947
- `fix(distributed)`: configurable remote model-load timeout, and reap the load when it times out - #10948
- `fix(distributed)`: make per-node backend upgrade actually upgrade - #10838
- `fix(nodes)`: never schedule a model onto a node that cannot store it - #11054
- `fix(openresponses)`: make responses visible and cancellable across replicas - #11000
- `fix(worker)`: never reuse a backend process whose directory a reinstall replaced - #11029
- `fix(worker)`: bound the gRPC port allocator and stop leaking dead backends' ports - #10968
- `fix(worker)`: reap deleted backends and stop models that live on a worker - #10956
- `fix(worker)`: give the worker a real health endpoint and a mode-aware HEALTHCHECK - #10999
- `fix(downloader)`: hash the partial file before issuing the resume request - #11099
- `fix(downloader)`: bound the wait for response headers so a wedged origin cannot hang an install - #11053
- `fix(downloader)`: distinguish read from write failures and retry transient ones - #10985
- `fix(modelartifacts)`: resume interrupted materialization per-file, not from scratch - #11071
- `fix(modelartifacts)`: stage each writer's artifact in its own partial tree - #10995
- `fix(modelartifacts)`: treat CIFS EACCES as lock contention, not failure - #10986
- `fix(model-artifacts)`: persist companion artifacts so remote workers get the `base_model` option - #11075
- `fix(model-artifacts)`: load single-file HF snapshots from the file, not the directory - #10909
- `fix(model-artifacts)`: gate inferred artifact materialization by backend - #10910
- `fix(model-artifacts)`: materialize longcat-video on the controller, and support companion repos - #10949
- `fix(gallery)`: coalesce Hugging Face artifact progress - #11117
- `fix(gallery)`: keep multi-file HF install progress proportional during verify - #10908
- `fix(galleryop)`: make admitted operations queryable and survive a failed op - #11044
- `fix(gpu-libs)`: bundle cuDNN only where it is used, and complete it when it is - #10946
- `fix(gpu)`: detect GPUs via sysfs when no pci.ids database is present - #10966
- `fix(watchdog)`: force-kill stuck-busy backends instead of deadlocking the loader - #10578
- `fix(watchdog)`: guard `StopWatchdog` with `watchdogMutex` to prevent double close - #10859
- `fix(config)`: only inject llama.cpp serving options on the llama.cpp path - #10822
- `fix(runtime-settings)`: apply persisted threads/context_size/f16 at startup - #10853
- `fix(model)`: make backend shutdown model-scoped - #10865
- `fix(model)`: only announce a load at INFO when a load actually happens - #11017
- `fix(completions)`: reject empty `PromptStrings` in streaming to avoid an index-out-of-range panic - #11028
- `fix(tts)`: forward the OpenAI `speed` field to the backend - #11120
- `fix(realtime)`: accept the legacy `modalities` alias for `output_modalities` - #11104
- `fix(vision)`: probe the media marker for pinned llama.cpp backend variants - #10955
- `fix(audio-transform)`: serialize WebSocket writes to avoid a concurrent-write panic - #10857
- `fix(qwen-asr)`: map ISO language codes to the names Qwen3-ASR expects - #10959
- `fix(ollama)`: cap `num_ctx` so it cannot wrap negative when cast to int32 - #11032
- `fix(ollama)`: set `ContextSize` via the embedded `LLMConfig` so the package builds - #11049
- `fix(webui)`: use relative asset base so fonts and lazy chunks honor `X-Forwarded-Prefix` - #10904
- `fix(agent-ui)`: reset streamed text at generation boundaries in agent chat - #10664
- `fix(mcp)`: bound MCP session connect so an unreachable server cannot hang the widget - #10884
- `fix(http)`: make `/readyz` reflect startup readiness - #10989
- `fix(upgrade-check)`: don't filter upgrade candidates by controller capability - #11024
- `fix(cloud-proxy)`: publish backend gallery entries - #10858
- `fix(backend)`: don't crash the whole process on an invalid `cutstrings`/`extract_regex` - #10855
- `fix(backends)`: derive the protoc generator from the protobuf runtime - #11057
- `fix(backend/python)`: don't await sync servicer behaviors in `AsyncModelIdentityInterceptor` - #10980
- `fix(sglang)`: implement the Status RPC to unblock backend-monitor polling - #10867
- `fix(vllm)`: generate protobuf 6 compatible stubs - #10944
- `fix(vibevoice)`: install diffusers from PyPI instead of git main - #10972
- `fix(kokoro)`: pin a compatible Intel XPU runtime - #10823
- `fix(ace-step)`: drop nonexistent `Get*` proto accessors in `SoundGeneration` - #11072
- `fix(trl)`: disable inline GRPO reward code by default (RCE) - #11068
- `fix(turboquant)`: supersede stale dependency bump - #11064
- `fix(turboquant,bonsai)`: do not apply vendored llama.cpp patches to fork trees - #10866
- `fix(llama-cpp)`: retain CPU variants in GPU builds - #11255, and the same for turboquant - #11276
- `fix(llama-cpp)`: preserve GPU layers during option passthrough - #11193
- `fix(utils)`: reject tar hardlinks that escape the extraction root - #11266
- `fix(grammars)`: reject cyclic `$ref` in JSON-schema grammar to prevent a stack-overflow crash - #11041
- `fix(grammars)`: restore backslash escaping in the llama31 grammar fixture - #11242
- `fix(model)`: deterministic, type-filtered backend auto-detection - #10286
- `fix(oci)`: install backends on filesystems without symlinks - #11166
- `fix(oci)`: identify signature verification requests - #11244
- `fix(realtime)`: echo `response.metadata` on `response.created` and `response.done` - #11198
- `fix(worker)`: report RAM alongside GPU memory - #11167
- `fix(vllm)`: apply `Options[]` engine flags before engine init - #11147
- `fix(mlx-vlm)`: install torch dependencies on Metal - #11164
- `fix(kokoro)`: add a CPU backend fallback - #11161
- `fix(chatterbox)`: pin cublas12 torch/transformers and setuptools so the backend loads - #11074
- `fix(gallery)`: correct Nanbeige 4.2 artifacts - #11269
- Video: WAN 2.1 GGML entries never set `known_usecases`, so they resolved to image rather than video and `/video` rejected them - #11214

### 🖧 P2P area

- `fix(p2p)`: serialize access to `p2pCtx`/`p2pCancel` - #10861

---

## 👒 Dependencies

121 dependency updates landed this cycle, mostly nightly engine bumps:

| Engine | Bumps |
|---|---|
| CrispStrobe/CrispASR | 17 |
| ikawrakow/ik_llama.cpp | 12 |
| leejet/stable-diffusion.cpp | 10 |
| ServeurpersoCom/qwentts.cpp | 8 |
| ggml-org/llama.cpp | 7 |
| ServeurpersoCom/omnivoice.cpp | 6 |
| PrismML-Eng/llama.cpp | 5 |
| mudler/parakeet.cpp | 4 |
| ggml-org/whisper.cpp | 4 |
| antirez/ds4 | 3 |
| 0xShug0/audio.cpp | 2 |
| magpie-tts.cpp, locate-anything.cpp, depth-anything.cpp, trellis2cpp, rf-detr.cpp, ced.cpp, llama-cpp-turboquant | 1 each |

Plus 20 dependabot updates across Python, JavaScript and GitHub Actions, and a `go-processmanager` bump for the concurrent-`Run` fix.

Note: one `ggml-org/llama.cpp` bump (`d2a8182`) was reverted within the cycle and is excluded from these notes.

---

## 📖 Documentation

The documentation received an onboarding-focused overhaul (#10895), driven by a mapped per-page audit rather than page dates, with every factual claim verified against the code, backends, gallery and CLI:

- **Accuracy**: the CPU image tag corrected to `localai/localai:latest` (there is no `latest-cpu`), the registry unified, the dead `llama-stable` backend removed from examples, the `mitm-proxy` flag documentation corrected, a non-existent `/sound` endpoint removed, the Voice Activity Detection example made runnable, and the CLI reference refreshed with `agent`, `mcp-server`, `agent-worker` and `p2p-worker`.
- **Deduplication**: duplicate and stale pages folded into canonical homes, with all inbound links repointed and old URLs preserved via aliases.
- **Onboarding**: one concrete model (`qwen3-4b`) now carries through install, Web UI chat and API curl, plus a new **Build your first agent** walkthrough that states plainly that LocalAGI is embedded.
- **Errors**: a new **Runtime errors and troubleshooting** reference keyed on the literal error strings users see, plus a new **Agent actions catalog** taken from the shipped action registry.
- **Structure**: installation merged under Getting started for one linear install-to-first-run spine, a new **Operations** section for operator-facing pages, and journey-ordered navigation.
- **Process**: a docs checkbox in the PR template and a docs-with-code rule in the agent instructions, so user-facing code changes update docs in the same change.

Also: `grpc.attempts` timing and tuning guidance (#10868), a fix to the Opus backend installation instructions for realtime (#11018), reverse-proxy and long-inference timeout guidance (#11195, #11065), persistent container storage clarified (#11190), and ROCm 7.x / RDNA 3.5 (Strix Halo, gfx1151) added to the GPU acceleration guide (#9229).

### 🌐 A new localai.io

The site splits in two: the project site at the root, and the documentation moved under `/docs/`. The Hugo docs site had always *been* localai.io, which left nowhere to explain what LocalAI is or to show what the team builds.

Every previously published URL keeps working. GitHub Pages has no server-side rewrites, so a generator walks the built docs output and leaves a meta refresh, a canonical link and a `noindex` at each old root path: **214 redirect stubs**, covering bare `.html` files as well as directory indexes, and never overwriting a path the root site owns.

The new site adds an `/engines/` page driven entirely by a YAML data file (so adding an engine is one edit, not hand-written HTML in two places), a `/blog/`, a real POSIX `install.sh` and a Kubernetes manifest wired to the actual `/readyz` and `/healthz` endpoints. An ecosystem band lists the companies whose engineers have contributed, the projects that integrate LocalAI, and where LocalAI has been written about, each backed by a different and stated standard of evidence, with `ADOPTERS.md` as the self-service mechanism for anyone who wants to be listed.

> 🔗 PRs: #11243, #11248

### 🧹 CI cost and correctness

A sustained pass on the build pipeline, most of it invisible to users but responsible for how quickly changes land: the full backend matrix now only rebuilds on breaking `backend.proto` edits (#11192), image and Go PR workflows skip content they cannot see (#11218, #11223, #11224), the native engine builds in a layer the registry cache can actually restore (#11221), and three workflows that stacked runs on every PR push were deduplicated (#11058). Go backends now rebuild on linked `pkg/` changes and matrix-entry edits (#10988, #10975).

---

## 🙌 New Contributors

Eleven people landed their first LocalAI contribution this cycle:

- @ankit-aglawe in #10930
- @anupamme in #11023
- @futurehua in #10879
- @ghshhf in #10323
- @jimmykarily in #10991
- @nandanadileep in #10578
- @owezzy in #11195
- @ResearchForumOnline in #11138
- @wuisabel-gif in #11068
- @Zelys-DFKH in #11266
- @zjuzhongwen in #10960

Thank you all, and thanks to everyone who filed issues, tested builds and reported regressions this cycle.

---

**Full Changelog**: https://github.com/mudler/LocalAI/compare/v4.7.1...v4.8.0

---

> **Source** [mudler/LocalAI](https://github.com/mudler/LocalAI) · `v4.8.0` · 2026-08-05 · [upstream release](https://github.com/mudler/LocalAI/releases/tag/v4.8.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
