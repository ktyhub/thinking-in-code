---
title: "LocalAI v4.7.0"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.7.0"
version: "v4.7.0"
published: "2026-07-14"
type: "minor"
lang: "en"
summary: "This release widens what LocalAI can generate and how you drive it: a UI-managed voice cloning library, local video and audio-driven avatar generation, and interleaved reasoning that travels with tool calls."
---

# LocalAI v4.7.0

# 🎉 LocalAI 4.7.0 Release! 🚀

<h1 align="center">
  <br>
  <img height="300" src="https://raw.githubusercontent.com/mudler/LocalAI/refs/heads/master/core/http/static/logo.png">
  <br>
  <br>
</h1>

LocalAI 4.7.0 is out!

This release widens what LocalAI can generate and how you drive it: a UI-managed voice cloning library, local video and audio-driven avatar generation, and interleaved reasoning that travels with tool calls. It also lands new audio engines (one-pass diarized transcription, F5-TTS, true streaming TTS) and a batch of reliability fixes across auth, transcription, and the model gallery.

**Highlights:**

- 🎙️ **Managed voice cloning** - record or upload a consented reference in the UI, save it as a reusable profile, and reference it from any cloning-capable TTS backend with a stable `localai://voice-profiles/<id>` URI. No more hand-edited YAML or copying audio into model folders.
- 🎬 **Local video & avatars** - a new `longcat-video` backend brings text-to-video, image-to-video, and audio-driven talking-avatar generation, wired into the Studio UI with audio and reference-image controls.
- 🧠 **Interleaved thinking with tool calls** - an assistant turn can now carry `reasoning` and `tool_calls` together and keep the reasoning across the tool-result loop, with a `reasoning_content` inbound alias and Anthropic `thinking` block support.
- 🗣️ **New audio engines** - one-pass diarized transcription (`moss-transcribe-cpp`), F5-TTS voice cloning in CrispASR, and true streaming TTS in vibevoice-cpp (time-to-first-audio 2.38s vs 39.96s on CPU).
- 🎚️ **Auto full context** - `context_size: -1` runs a model at its full trained context window, read from GGUF metadata per-model, with a VRAM-fit warning.
- 🖥️ **Sharper control** - pick which GPUs llama.cpp offloads to (`devices:`), and a new model-load cooldown stops a deterministically-failing model from respawning its backend on every poll and leaking VRAM.

Plus DFlash speculative-decoding gallery models, an OIDC fix for EC/PS/EdDSA-signed tokens, transcription language/translate settings that reach the backend, and the usual set of dependency updates.

<p align="center">
  <em><img width="2880" height="1800" alt="ui-home" src="https://github.com/user-attachments/assets/7a114654-5729-45b9-8437-22af7ab76e4f" /></em>


</p>

---

## 📌 TL;DR

| Area | Summary |
|------|---------|
| 🎙️ **Voice Library** | Admin-managed voice cloning profiles: record/upload consented reference audio in the UI, preview, and reference via `localai://voice-profiles/<id>`. New `GET/POST/DELETE /api/voice-profiles`, MCP tools (`list/create/delete_voice_profile`), and a typed `tts.voice_cloning` config. Cloning declared as a capability across 12+ TTS backends (self-discovered, no hardcoded backend names). |
| 🎬 **LongCat video & avatars** | New `longcat-video` Python backend: text-to-video, image-to-video, and LongCat-Video-Avatar 1.5 audio-driven avatars. Gallery entries `longcat-video` and `longcat-video-avatar-1.5`; new `known_input_modalities`/`known_output_modalities` config fields; `/video` endpoint extended with staged audio. CUDA 12/13 x86_64 + CUDA 13 ARM64 images. |
| 🧠 **Interleaved thinking** | Assistant turns carry `reasoning` + `tool_calls` together and preserve reasoning across the tool loop. `reasoning_content` accepted as an inbound alias; Anthropic Messages local path round-trips `thinking` blocks (gated on `thinking: {type: "enabled"}`). |
| 🗣️ **moss-transcribe-cpp** | New Go backend over the C++/ggml MOSS-Transcribe-Diarize port: joint multi-speaker transcription + diarization + timestamps in one pass. Gallery model `moss-transcribe-cpp-0.9b`. Offline; 1.6-2.2x faster than reference on CPU, bit-exact on CUDA. |
| ⚡ **vibevoice streaming TTS** | Real incremental streaming via `vv_capi_tts_stream`: TTFA 2.38s vs 39.96s batch (~17x) on CPU for `VibeVoice-Realtime-0.5B`. |
| 🎨 **F5-TTS** | F5-TTS linked into CrispASR + `f5-tts-crispasr` gallery model (24kHz, voice cloning via `voice:`/`voice_text:` options). |
| 🎚️ **context_size: -1** | Negative `context_size` (or `LOCALAI_CONTEXT_SIZE=-1`) resolves to the model's `n_ctx_train` from GGUF metadata, with a GPU-only VRAM-fit warning and a safe clamp so no backend ever sees a negative window. |
| 🖥️ **llama.cpp device selection** | `options: [devices:CUDA1,CUDA2]` restricts offload to named GPUs (from `--list-devices`). |
| 🛡️ **Model-load cooldown** | A failed load enters a cooldown (default `10s`, geometric growth capped at 5m) so polling clients get `503 + Retry-After` instead of respawning a crashing backend and leaking GPU memory. |
| 🧠 **Speculative decoding models** | Four Qwen DFlash gallery entries (4B / 9B / 27B / 35B-A3B), each bundling target + drafter, `spec_type:draft-dflash`. |

---

## 🚀 New Features & Major Enhancements

### 🎙️ Managed voice cloning profiles (Voice Library)

<p align="center">
  <em><img width="2880" height="1800" alt="ui-voice-library" src="https://github.com/user-attachments/assets/ea99bb2d-42b5-42b8-8c33-761090290e3f" /></em>
  <br><em>Record or upload a consented reference, save it as a reusable profile, and reference it from any cloning-capable TTS backend.</em>
</p>

Voice cloning becomes a first-class, UI-driven workflow. Record or upload consented reference audio in the React UI, normalize it to WAV, preview it, and save it as a named profile. Reference the profile from the TTS UI or `/v1/audio/speech` with a stable `localai://voice-profiles/<id>` URI, no YAML editing and no copying audio into model directories.

- New REST surface: `GET /api/voice-profiles`, `GET /api/voice-profiles/:id/audio`, `POST /api/voice-profiles` (admin), `DELETE /api/voice-profiles/:id` (admin), surfaced in Swagger, `/api/instructions`, and the auth capability registry. MCP admin tools `list_voice_profiles`, `create_voice_profile`, `delete_voice_profile`.
- New typed config `tts.voice_cloning` (bool) opts custom model names in or out of Voice Library compatibility; `false` also rejects saved profile references with HTTP 400. Request precedence is `voice` -> `tts.voice` -> `tts.audio_path`; existing options still work with no breaking change.
- Compatibility is server-discovered from backend capabilities (the frontend hardcodes no backend names) and offers gallery models to install when none are present. Cloning is declared in the capability registry for `vllm-omni`, `vibevoice-cpp`, `coqui`, `pocket-tts`, `qwen-tts`, `qwen3-tts-cpp`, `faster-qwen3-tts`, `fish-speech`, `neutts`, `chatterbox`, `voxcpm`, `omnivoice-cpp`, and model-dependent `crispasr`.
- Cross-backend contract: reference WAV + exact transcript via `params.ref_text`. E2E verified on qwen3-tts-cpp (4.47s reference produced a non-silent 3.44s 24kHz WAV).

> 🔗 PRs: #10799

### 🎬 LongCat video and avatar generation

A new `longcat-video` Python backend brings local video generation to LocalAI: text-to-video, image-to-video, and LongCat-Video-Avatar 1.5 for audio-driven talking avatars. It is wired into the React Studio UI with audio and reference-image controls.

- Gallery entries `longcat-video` (text+image input, video output) and `longcat-video-avatar-1.5` (text+image+audio input, video output). Backend images: CUDA 12 and CUDA 13 x86_64, plus CUDA 13 ARM64 (DGX Spark / NVIDIA ARM64 guidance included).
- Introduces declarative capability metadata: new `known_input_modalities` / `known_output_modalities` config fields so generic code discovers what a checkpoint accepts instead of branching on backend or checkpoint names. The HF importer emits matching self-describing recipe metadata.
- The `/video` endpoint gains staged audio and video-generation parameters, with distributed audio staging (input bounded to 128 MiB). Avatar mode supports multi-segment generation, BF16 or optional INT8 quantization, and distillation settings, documented in a new `features/longcat-video.md` page.

> 🔗 PRs: #10792

### 🧠 Interleaved thinking with tool calls

An assistant turn can now carry `reasoning` and `tool_calls` together, and the reasoning survives the tool-result loop across turns. This is uniform, tested, and documented behavior rather than a per-backend accident.

- OpenAI chat messages accept `reasoning_content` as an inbound alias for the canonical `reasoning` field (vLLM/DeepSeek/cogito-style clients emit it); emission is unchanged and the canonical field wins when both are present.
- The Anthropic Messages local path round-trips `thinking` blocks: inbound `thinking` blocks parse into the message reasoning, and a `thinking` block is emitted before `tool_use` on both non-streaming and streaming responses, gated on the request param `thinking: {type: "enabled"}`. The cloud-proxy passthrough path is untouched.
- Verified live: `lfm2.5-8b-a1b` and `gemma-4-e2b` return `reasoning` plus structured `tool_calls` in a single turn. A new `features/interleaved-thinking.md` doc is cross-linked from the model-configuration, text-generation, and functions guides.

> 🔗 PRs: #10744

### 🗣️ New audio engines: diarized transcription, F5-TTS, and streaming TTS

Three additions widen the audio surface:

- **moss-transcribe-cpp** (#10756): a new Go backend that dlopens the C++/ggml MOSS-Transcribe-Diarize port to do joint multi-speaker transcription, diarization, and timestamps in a single offline pass. Gallery model `moss-transcribe-cpp-0.9b` (default `q5_k` GGUF). The ggml port is byte-exact to the reference PyTorch and 1.6-2.2x faster on CPU, bit-exact on CUDA (verified on Blackwell / Jetson Thor). Builds across the full Linux matrix plus Darwin/Metal.
- **F5-TTS in CrispASR** (#10753): links the F5-TTS static runtime into the CrispASR build (SWivid, MIT; a 22-layer DiT flow-matching model with a built-in Vocos vocoder) and ships an `f5-tts-crispasr` gallery model. Produces 24kHz mono audio and auto-detects as `f5-tts` (no `backend:` selector). Voice cloning via `options: [voice:/path/ref.wav, voice_text:Transcript...]`; note F5-TTS runs a 32-step ODE solver, so CPU synthesis is compute-heavy.
- **vibevoice-cpp true streaming** (#10764): replaces whole-clip-then-chunk synthesis with real incremental streaming through the new `vv_capi_tts_stream` callback ABI. Time-to-first-audio drops from 39.96s (batch) to 2.38s (streaming), about 17x, on a CPU-only box for `VibeVoice-Realtime-0.5B`. Scope is the realtime-0.5B model; the non-streaming path is unchanged.

> 🔗 PRs: #10756, #10753, #10764

### 🎚️ Auto full context with `context_size: -1`

A `context_size: -1` sentinel (any negative value) now makes a model run at its full trained context, resolved per-model from the GGUF `n_ctx_train` metadata at load. This lets you opt a model into its true maximum window even when a gallery YAML already pins a value, without hardcoding a number. The global equivalents `LOCALAI_CONTEXT_SIZE=-1` / `--context-size -1` make every model resolve to its own trained max, while an explicit per-model value still wins.

Three defense layers keep it safe: GGUF resolution degrades to the default with a warning if metadata lacks a usable max; a GPU-only `warnIfContextExceedsVRAM` helper logs (never blocks) when the window likely will not fit; and the backend options layer clamps any residual negative to the default so no backend receives a negative `n_ctx`. The previously-only path (unset `context_size`) is unchanged.

> 🔗 PRs: #10752

### 🖥️ GPU device selection and model-load cooldown

- **llama.cpp device selection** (#10724): a new `device` / `devices` option in the llama.cpp `options:` array maps to upstream `--device`, so you can restrict offload to specific GPUs (for example excluding a display or debug GPU). Example: `options: [devices:CUDA1,CUDA2,CUDA3]`. Device names come from `llama-server --list-devices`.
- **Model-load failure cooldown** (#10728): after a load fails, new independent load triggers are refused during a cooldown window, returning a typed error mapped to `503 + Retry-After` instead of respawning the backend on every poll. This stops a deterministically-failing model from leaking GPU/CUDA state (a reporter saw leaked contexts climb to ~58 GB) and, under `LOCALAI_SINGLE_ACTIVE_BACKEND`, from stealing the active slot from healthy models. Configurable via `--model-load-failure-cooldown` / `LOCALAI_MODEL_LOAD_FAILURE_COOLDOWN` (default `10s`, `0` disables); the cooldown doubles per consecutive failure, caps at 5m, and resets on a successful load. Coalesced followers of a genuine concurrent burst still get their one retry.

> 🔗 PRs: #10724, #10728

---

## 🧠 Models

- **Qwen DFlash speculative-decoding models** (#10791): four gallery entries for the `llama-cpp` backend, each bundling a full target model plus its small block-diffusion drafter (drafters are not standalone chat models): `qwen3-4b-dflash`, `qwen3.5-9b-dflash`, `qwen3.6-27b-dflash`, `qwen3.6-35b-a3b-dflash`. Per-entry config is `flash_attention: on`, `draft_model:`, `use_jinja:true`, `spec_type:draft-dflash`, `spec_n_max:15`. Requires the pinned llama.cpp with upstream DFlash support; every bundled drafter is verified `general.architecture = dflash` (fork-only `dflash-draft` GGUFs are intentionally excluded because they fail to load). GPU recommended.
- **Inference defaults** (#10741): adds recommended sampling defaults for `deepseek-v4` (auto-generated from unsloth), so LocalAI applies correct generation parameters for the family automatically.
- Plus new gallery models added via the gallery agent (#10743, #10755).

---

## 🐛 Bug Fixes (recap)

- `fix(auth)`: accept EC/PS/EdDSA-signed OIDC ID tokens, not just RS256 (OIDC login was 500ing at callback with EC-signed tokens, e.g. Authentik) - #10736
- `fix(transcription)`: honor model-config `parameters.language`/`parameters.translate` and the OpenAI `language` form field, which were silently ignored for multipart uploads - #10731
- `fix(backends)`: `opus` and `local-store` now refuse foreign model loads, so an LLM with no explicit backend cannot silently bind to the audio codec or vector store during backend probing - #10769
- `fix(gallery)`: backend (re)install is now a clean atomic replace (stage, validate, swap, rollback) instead of an overlay, so stale files from a prior version no longer shadow the new one - #10726
- `fix(vram)`: report the largest single GGUF quant instead of summing every quant in an HF repo, so a 9B model no longer shows as 71 GB / "May not fit" - #10707
- `fix(logs)`: capture backend stdout/stderr into the log store by default in single mode, so the Backend Logs page is populated out of the box - #10742
- `fix(vllm)`: pin the L4T arm64 backend to `vllm==0.24.0` for GB10 / DGX Spark stability (0.23 crashes deterministically on cold loads and pins GPU memory) - #10725
- `fix(ds4)`: bundle the full transitive runtime dependency closure so the from-scratch DS4 image no longer exits 127 on a missing gRPC library - #10783
- `fix(diffusers,vllm-omni,tinygrad)`: save generated images as PNG explicitly, fixing an `unknown file extension: .tmp` crash right after successful inference - #10729
- `fix(react-ui)`: preserve uploaded file content when regenerating a non-last answer (attachments were silently dropped after forking and regenerating a file turn) - #10819
- `fix(ui)`: prevent a large data table from breaking the flexbox layout and forcing a page-wide horizontal scrollbar - #10754

---

## 👒 Dependencies

Submodule and backend bumps this cycle:

- `ggml-org/llama.cpp` x7
- `CrispStrobe/CrispASR` x7
- `vllm-metal` (darwin) x6
- `ServeurpersoCom/qwentts.cpp` x4
- `ServeurpersoCom/omnivoice.cpp` x4
- `leejet/stable-diffusion.cpp` x3
- `ikawrakow/ik_llama.cpp` x3
- `ggml-org/whisper.cpp` x2
- `mudler/moss-transcribe.cpp` x1
- `mudler/locate-anything.cpp` x1
- `vllm-project/vllm` 0.24.0 -> 0.25.0 (Python backend) and cu130 wheel to `0.25.0`

Plus `grpcio` 1.81.1 -> 1.82.1, `charset-normalizer` >=3.4.9, and GitHub Actions bumps (`actions/cache` 4 -> 6, `actions/stale` 10.3.0 -> 10.4.0).

---

## 📖 Documentation

- Refreshed the LocalAI homepage to frame the project as a modular multimodal AI runtime: breadth lanes (reason, listen and speak, create, see, act), the small-core plus on-demand-backends architecture, the native engines built by the LocalAI team, and the scale path from laptop to team server to cluster - #10780
- Docs-site version bump - #10709

---

## 🙌 New Contributors

- @rvmz made their first contribution in #10724
- @hogeheer499-commits made their first contribution in #10783
- @ajuijas made their first contribution in #10819

---

**Full Changelog**: https://github.com/mudler/LocalAI/compare/v4.6.2...v4.7.0

---

> **Source** [mudler/LocalAI](https://github.com/mudler/LocalAI) · `v4.7.0` · 2026-07-14 · [upstream release](https://github.com/mudler/LocalAI/releases/tag/v4.7.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
