---
title: "LocalAI v4.11.0"
project: "LocalAI"
repo: "mudler/LocalAI"
tag: "v4.11.0"
version: "v4.11.0"
published: "2026-10-02"
type: "minor"
lang: "en"
summary: "This release makes LocalAI more useful for audio understanding, resilient model serving, structured decisions, and day-to-day operation."
---

# LocalAI v4.11.0

# 🎉 LocalAI 4.11.0 Release! 🚀

<h1 align="center">
  <br>
  <img height="300" src="https://raw.githubusercontent.com/mudler/LocalAI/refs/heads/master/core/http/static/logo.png">
  <br>
  <br>
</h1>

LocalAI 4.11.0 is out!

This release makes LocalAI more useful for audio understanding, resilient model serving, structured decisions, and day-to-day operation. Audio scenes can now combine transcription, diarization, sound detection, and remembered speaker names. Ordered failover chains keep a public model available across local and remote targets, while new Studio and operations pages expose these capabilities without requiring distributed mode.

The release also adds first-class decision models through `/v1/systemone`, signed OCI model galleries, and Kimodo text-to-animation. It includes 243 merged pull requests, 353 commits, 79 new gallery entries, focused fixes across APIs and backends, and broad backend-source updates.

**Highlights:**

- 🎙️ **Audio scenes and remembered speakers** - combine speech-to-text, speaker diarization, sound-event detection, and speaker identification. Studio can diarize a recording, preview clean intervals, and register selected speakers by name.
- 🔀 **Model failover chains** - place local and remote targets behind one model name, retry before response commitment, observe health and target switches, and pin a target from the API, MCP tools, or the React UI.
- 🧭 **Decision models** - advertise the `decisions` use case and answer structured choice, score, and `noul` questions through `/v1/systemone`, with validation and dedicated gallery models.
- 📦 **Signed OCI galleries** - distribute complete model galleries as OCI artifacts, verify them with Sigstore policies, and use digest-bound last-known-good caches.
- 🕺 **Kimodo text-to-animation** - generate skeletal motion from text through `POST /3d/animate`, preview it in Studio, and export binary glTF animation.
- 🖥️ **Operate this machine** - inspect resources and locally loaded models, view logs, and stop models on a single LocalAI host without enabling distributed mode.
- 🛡️ **Safer gallery and API behavior** - path-confinement fixes, stricter credential checks, correct pre-stream errors, preserved streamed Responses items, and more reliable model installation.

Plus PDF attachment extraction in chat, deeper Hugging Face repository discovery, improved hardware detection, new Italian Piper voices, NeMo diarization and ASR models, and large model-gallery batches.

<p align="center">
<img width="2880" height="1800" alt="ui-diarization-speakers" src="https://github.com/user-attachments/assets/912d5bc5-a0bb-4254-8bb8-fd520a108924" />

  <em>📸 [ screenshot: diarize a recording and remember speakers by name ]</em>
  <br><em>Studio turns anonymous speaker segments into reusable named speaker profiles.</em>
</p>

---

## 📊 This release in numbers

| | |
|---|---|
| Pull requests merged | **243** |
| Commits | 353 |
| Files changed | 623 (**+51,035** / -2,625) |
| Development window | 15 days (2026-09-18 to 2026-10-02) |
| Human contributors | 12, of whom **4 first-time** |
| Gallery entries | 1,847 to **1,926** (+79) |

Where the work landed:

| Area | Change |
|---|---|
| `core/` | +23,883 / -807 across 350 files |
| `backend/` | +12,437 / -186 across 119 files |
| `gallery/` | +4,998 / -110 |
| `pkg/` | +3,310 / -170 across 61 files |
| `docs/` | +2,142 / -1,115 across 50 files |
| `swagger/` | +2,254 / -100 |

---

## 📌 TL;DR

| Area | Summary |
|------|---------|
| 🎙️ **Audio scenes** | parakeet-cpp can combine ASR, diarization, and sound detection in one model. `POST /v1/audio/diarization` can optionally include text and versioned speaker profiles. Transcription segments and words can carry speaker labels, and realtime sessions emit transcription-segment and sound-detection events. |
| 🗣️ **Remembered speakers** | Configure a compatible `speaker_model` to identify voices from the shared voice registry. Studio's Diarization page previews clean speaker intervals and registers a selected speaker only after an explicit **Name and remember** action. Speaker profiles are biometric data, remain opt-in, and are not proof of identity or consent. |
| 🔀 **Failover** | A model config can define an ordered `failover.targets` chain containing local or remote models. LocalAI retries eligible failures before committing a response, tracks health and recovery, exposes `GET /api/failover` plus an SSE event stream, adds admin pin and unpin controls, and reports the selected model in response headers. The `localai-proxy` backend connects chains to another LocalAI endpoint. |
| 🧭 **Decisions** | Models can explicitly declare `known_usecases: [decisions]` and serve structured requests through `POST /v1/systemone`. LocalAI validates request size, question count, state, IDs, options, levels, and `noul` criteria before backend invocation. The React UI exposes a Decisions capability chip and installation guidance. |
| 📦 **OCI galleries** | A gallery source can use `oci://host/repository:tag` or a digest-pinned reference. LocalAI resolves and verifies the digest, enforces layer and path limits, stages extraction atomically, and ties caches to the active verification policy. `source_repository` adds an exact Sigstore source constraint. |
| 🕺 **Kimodo** | `POST /3d/animate` accepts one UTF-8 prompt and generates a 60 to 150 frame skeletal animation at 30 FPS. Studio provides animation controls, preview, and local history. Output is a binary glTF `.glb`, not a humanoid mesh. |
| 🖥️ **Single-host operations** | **Operate → This machine** shows VRAM, RAM, CPU, models-disk usage, and running model processes. Operators can search and sort models, inspect logs, and stop a model. The existing Nodes workbench remains available when distributed mode is enabled. |
| 🧠 **Models** | The gallery reached 1,926 entries. Additions include large Qwen3.8 and community model batches, NeMo speech and diarization models, four Italian Piper voices, vllm-cpp structured-extraction models, and decision models including kev, Nimble, and CLM. |

---

## 🚀 New Features & Major Enhancements

### 🎙️ Audio scenes: speech, speakers, and sounds

parakeet-cpp can now treat audio as a scene instead of a transcript alone. One model can run speech recognition, speaker diarization, and sound-event classification, then return aligned speaker and sound information for regular and realtime requests.

- `POST /v1/audio/diarization` returns diarization segments and speaker summaries.
- `include_text=true` combines diarization with ASR.
- `include_speaker_profiles=true` explicitly requests versioned speaker profiles.
- Transcription segments gain `speaker_name`; transcript words can carry a `speaker` label.
- Realtime sessions emit `conversation.item.input_audio_transcription.segment` and `conversation.item.sound_detection` events.
- Scene models can serve both `transcription` and `sound_detection`, with diarization enabled in the realtime pipeline.
- New gallery entries cover Nemotron 3 diarization, diarization plus ASR, CED sound models, and realtime scene variants.

Speaker profiles are sensitive biometric data. Profile export is opt-in, requires voice-recognition permission, and does not itself register a person.

> 🔗 PRs: #12335, #12382

### 🗣️ Name and remember speakers

LocalAI can match diarized segments against voices registered in its shared voice registry. A compatible parakeet-cpp configuration uses `speaker_model`, `speaker_threshold`, and `speaker_margin`; known voices replace anonymous labels with names while unknown voices remain `SPEAKER_NN`.

Studio adds a Diarization page for enrollment from ordinary recordings. It finds clean intervals for each speaker, provides audio previews, and registers a profile only when the user selects **Name and remember**. Profiles and recordings are not persisted in browser storage and the relevant request bodies are excluded from API trace capture.

The registry is currently process-local and ephemeral. Names disappear after restart and are not synchronized across independent frontends. Encoder identity must match exactly between enrollment and recognition.

<p align="center">
<img width="2880" height="1800" alt="ui-diarization-speakers" src="https://github.com/user-attachments/assets/85c2ee58-a9ff-43ac-b0bd-2e8b44c957ee" />
  <em>📸 [ screenshot: speaker enrollment in Studio ]</em>
  <br><em>Preview clean intervals, choose a speaker, and register the voice with an explicit action.</em>
</p>

> 🔗 PR: #12414

### 🔀 Model failover chains and `localai-proxy`

One public model name can now represent an ordered chain of local and remote targets:

```yaml
name: assistant-llm
failover:
  targets:
    - model: preferred-local
    - model: remote-localai
      warm: true
```

LocalAI retries the next target only when failure happens before response commitment. Transport errors, server errors, OOM, and rate limiting can trip a target; validation errors, ordinary client errors, and client cancellation do not. Recovery probes and a minimum fallback residence period prevent rapid target flapping.

The release adds:

- `GET /api/failover`, `GET /api/failover/{chain}`, and `GET /api/failover/events`.
- Admin pin and unpin operations, also available as `list_failover_chains`, `pin_failover_target`, and `unpin_failover_target` MCP tools.
- `X-LocalAI-Served-Model` and `X-LocalAI-Failover` response headers.
- `localai.model.failover` events for realtime sessions.
- A **Failover Chain** model template, live health strip, pin controls, Installed Models badge, and **Operate → Runtime → Failover** page.
- The `localai-proxy` OCI backend for routing LocalAI REST capabilities to another LocalAI endpoint.

<p align="center">
<img width="2880" height="1800" alt="ui-failover" src="https://github.com/user-attachments/assets/2d9ef5d3-601a-4742-bd61-c9181d3f2c40" />

  <em>📸 [ screenshot: live failover chains and target health ]</em>
  <br><em>Inspect the active target, health state, and administrative pins from the runtime page.</em>
</p>

> 🔗 PR: #12285

### 🧭 Structured decisions and zero-shot extraction

Decision models are now a first-class LocalAI capability. A model declares `known_usecases: [decisions]`, appears with a Decisions chip, and serves the existing SystemOne contract through `POST /v1/systemone`. LocalAI does not infer this use case, which keeps decision models distinct from chat and token-classification models.

The request path now enforces a 64 KiB body limit, a maximum of 64 questions, and validation for state, IDs, option counts, levels, and `noul` criteria. vllm-cpp carries the structured result through its unified decision ABI, and `hf_overrides` can merge required top-level model configuration without modifying the downloaded snapshot.

Gallery entries add Laya, GLiNER2.5-Decide, Qwen3-VL, Tev1, kev, Nimble, and CLM decision models. Existing `/permute` and `/separate` endpoints remain for NER and token classification.

> 🔗 PRs: #12247, #12373, #12379, #12391, #12397

### 📦 Signed OCI model galleries

Model galleries can now be shipped as self-contained OCI artifacts. An artifact carries its `index.yaml` and relative model configuration files, so a registry can distribute a complete gallery without a separate web-hosted index.

LocalAI resolves tags to digests, verifies signatures against that digest, pulls the same digest, validates artifact type and layer metadata, enforces layer-count and size bounds, confines extracted paths, and promotes the gallery cache only after complete extraction and parsing. Verification policies can require an exact `source_repository` URL, and cache identity includes the active verification policy.

Strict integrity mode refuses OCI galleries without a verification block. A signature or policy failure does not fall back to an older cache; transient network failures can use content previously verified under the same policy.

> 🔗 PRs: #12167, #12138, #12235, #12238, #12239, #12243

### 🕺 Kimodo text-to-animation

LocalAI adds a native `kimodocpp` backend and a Studio workflow for skeletal motion generation. `POST /3d/animate` accepts exactly one UTF-8 `prompt`, plus `frames`, `steps`, `seed`, and `text_guidance`. It produces a binary glTF animation at 30 FPS and reports usage through `metadata.usage`.

The backend has CPU and Vulkan builds, multiple model and quantization gallery entries, tracing, and usage accounting. Studio provides generation controls, animation preview, and local history. The API generates a skeleton animation rather than a humanoid mesh, and frame count is constrained to 60 through 150.

> 🔗 PRs: #12095, #12162, #12184

### 🖥️ Operate this machine

Single-node installations now have an operations page for the local host. **Operate → This machine** shows resource gauges for VRAM, RAM, CPU, and the models disk, then lists each running model with its backend, resident memory, CPU share, uptime, and PID.

Operators can search and sort the table, view backend logs, and stop a model after confirmation. **Operate overview → Running now** shows the five heaviest models, and runtime navigation includes a running-model count. In distributed mode, the route continues to show the cluster Nodes workbench.

<p align="center">
<img width="2880" height="1800" alt="ui-this-machine" src="https://github.com/user-attachments/assets/c8872882-f87c-40d9-ab41-eecac763b6e6" />

  <em>📸 [ screenshot: Operate → This machine ]</em>
  <br><em>Inspect host capacity and control every locally loaded model from one page.</em>
</p>

> 🔗 PR: #12189

### 🧰 Smaller features worth knowing about

- Chat and Home extract text from PDF attachments before sending the request (#12374).
- Hugging Face discovery lists repositories nested more than one directory deep (#12355).
- Model capabilities report an alias target and fall back to the application default context size (#12183, #12216).
- AMD APU detection includes GTT memory, and Intel GPU probing avoids startup hangs (#12094, #12206).
- OCI gallery changes invalidate the React UI model-listing cache immediately (#12235).
- The gallery adds four Italian community Piper voices (#12121).

---

## 🐛 Bug Fixes (recap)

- `fix(functions)` - honor `function_arguments_key` when building tool grammar (#11677).
- `fix(responses)` - wait for complete JSON tool calls and preserve streamed output items (#12001, #12048).
- `fix(api)` - return correct saturation and no-node status codes, expose alias targets, and report per-slot context (#12113, #12183, #12204).
- `fix(gallery)` - normalize OCI references, bind caches to verification policy, reduce repeated directory reads, and keep deletion inside the models directory (#12138, #12238, #12239, #12243, #12283, #12324, #12326).
- `fix(modelartifacts)` - reuse committed sibling files when `allow_patterns` narrows an artifact (#11484).
- `fix(huggingface)` - discover repositories nested beyond one directory level (#12355).
- `fix(backend)` - re-probe media markers after cold vision-model loading (#12254).
- `fix(llama-cpp)` - retain the default RAM cache, return pre-stream errors as errors, and let model `parallel:1` override the environment (#12297, #12425, #12426).
- `fix(whisperx)` - preserve the transcript when diarization fails and report the real error (#12427).
- `fix(distributed)` - stage declared model files before loading (#12309).
- `fix(watchdog)` - ignore stale backend evictions (#12333).
- `fix(quantization)` - pin imported quantized models to the backend that produced them (#11879).
- `fix(auth)` - require validated header credentials for the CSRF exemption (#12185).
- `fix(cosignverify)` - locate bundles even when the index entry describes them incorrectly (#12165).
- `fix(react-ui)` - extract text from PDF attachments and improve text-selection contrast (#12374, #12123).
- `fix(cloud-proxy)` - surface Anthropic refusals instead of returning empty replies (#12424).
- `fix(ollama)` - report on-disk size from `/api/tags` and `/api/ps` (#11989).
- `fix(xsysinfo)` - include AMD GTT memory and avoid Intel GPU probe hangs (#12094, #12206).

---

## 🧠 Models

- The gallery grew from 1,847 to 1,926 entries.
- A consolidated gallery batch added 293 candidate entries before deduplication and cleanup (#12124).
- A second batch added NeoHorse, Qwen3.8 Distill and Cyber variants, ByteShape, Flash Next GSQ-RCO, Occamy, Hy-MT2, Maple Preview, and more (#12221).
- NeMo speech additions cover standalone diarization, ASR, and combined diarization plus ASR (#12265).
- Four Italian community Piper voices are now available (#12121).
- vllm-cpp gallery entries add Laya, CUA-S1 forms, GLiNER2.5, kev, Nimble, and CLM decision models (#12240, #12391, #12397).
- Further additions include Hemmingway, MiMo Distill Qwen 9B, Sharp-Spark, Swift 1.5 GSQ-RCO, ThinkingCap, Agention, Qwopus Flash V2, Cyber-Tiel-Coder, and Cyber-Ornith (#12278, #12282, #12287, #12293, #12295, #12296, #12298, #12300, #12383).

---

## 👒 Dependencies

Backend sources and pinned repositories received regular updates:

- `ikawrakow/ik_llama.cpp`: 15 updates.
- `0xShug0/audio.cpp`: 14 updates.
- `CrispStrobe/CrispASR`: 14 updates.
- `ggml-org/llama.cpp`: 12 updates.
- `leejet/stable-diffusion.cpp`: 7 updates.
- `ServeurpersoCom/omnivoice.cpp`: 7 updates.
- `ggml-org/whisper.cpp`: 6 updates.
- `mudler/vllm.cpp`: 6 updates.
- `PrismML-Eng/llama.cpp`: 6 updates.
- `NVIDIA/NeMo-Speech.cpp`: 5 updates.
- `mudler/parakeet.cpp`: 4 updates.
- `TheTom/llama-cpp-turboquant`: 3 updates.
- `LocalAGI` and `localai-org/ced.cpp`: 2 updates each.
- `antirez/ds4`, `localai-org/voice-detect.cpp`, `PABannier/sam3.cpp`, the documentation theme, nib, vllm-metal, and the vLLM CUDA wheel: 1 update each.

---

## 📖 Documentation

- Explain mixed CPU and GPU inference (#12143).
- Remove obsolete per-model documentation sections from the gallery docs (#12222).
- Clarify that upstream API keys are optional for proxy targets (#12286).
- Introduce decision models and the SystemOne API (#12428).
- Fix dead documentation and community example links (#11546, #12320, #12392).
- Correct gfx1151 environment-variable guidance (#12109).

---

## 🙌 New Contributors

Thank you to the first-time contributors in this release:

- @H-XX-D (#12135)
- @lqp (#12031)
- @PINYOPATTANAWASANPORN (#12216)
- @pratikgx (#12320, #12392)

**Full Changelog**: https://github.com/mudler/LocalAI/compare/v4.10.0...v4.11.0

---

<!-- Release notes generated using configuration in .github/release.yml at 58830f7ac508845a6f4efa32cfca06af422d4d82 -->

## What's Changed
### Bug fixes :bug:
* fix(models): hide .tar.bz2 and .sha256 files from the model list by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12122
* fix(xsysinfo): include AMD GTT in APU VRAM detection by @leilei3167 in https://github.com/mudler/LocalAI/pull/12094
* fix(ui): make text selection visibly contrast the background by @blackd in https://github.com/mudler/LocalAI/pull/12123
* fix(gallery): strip oci:// before upgrade-check digest lookup by @mudler-agent in https://github.com/mudler/LocalAI/pull/12138
* fix: preserve vllm-omni imports after backend relocation by @mudler-agent in https://github.com/mudler/LocalAI/pull/12137
* fix: correct stale symbol names in doc comments by @mudler-agent in https://github.com/mudler/LocalAI/pull/12139
* fix(cosignverify): find a bundle the index entry describes badly by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12165
* fix(api): report an alias's target in /v1/models/capabilities by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12183
* fix(make): fail the protoc download on an HTTP error by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12187
* fix(auth): require validated header credentials for CSRF exemption by @richiejp in https://github.com/mudler/LocalAI/pull/12185
* fix(openai): return HTTP errors for pre-stream failures and report per-slot context by @mudler-agent in https://github.com/mudler/LocalAI/pull/12204
* fix(xsysinfo): avoid startup hang on intel_gpu_top by @leilei3167 in https://github.com/mudler/LocalAI/pull/12206
* fix(sglang): support msgspec-based ServerArgs (sglang >= 0.5.20) by @pos-ei-don in https://github.com/mudler/LocalAI/pull/12155
* fix(vllm-omni): remove invalid syntax in test.py by @H-XX-D in https://github.com/mudler/LocalAI/pull/12135
* fix(turboquant): extend D512 flash-attn patch to all turbo V types by @mudler-agent in https://github.com/mudler/LocalAI/pull/12234
* fix(gallery): strip the oci:// scheme before every registry lookup by @mudler-agent in https://github.com/mudler/LocalAI/pull/12238
* fix(gallery): tie oci:// gallery caches to the verification policy by @mudler-agent in https://github.com/mudler/LocalAI/pull/12239
* fix(gallery): verification follow-ups for oci:// galleries by @mudler-agent in https://github.com/mudler/LocalAI/pull/12243
* fix(backend): re-probe MediaMarker after cold vision model load by @leilei3167 in https://github.com/mudler/LocalAI/pull/12254
* fix(gallery): read the models dir once per gallery listing by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12283
* fix(swagger): describe backend metadata as an object by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12178
* fix(compose): request NVIDIA compute capability by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/11990
* fix(modelartifacts): reuse committed sibling files for narrowed allow_patterns by @SuperMarioYL in https://github.com/mudler/LocalAI/pull/11484
* fix(responses): wait for complete JSON tool calls by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12001
* fix(responses): preserve streamed output items by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12048
* fix(kokoros): add missing animate3_d stub to Backend trait impl by @mudler-agent in https://github.com/mudler/LocalAI/pull/12301
* fix(ollama): report on-disk size for /api/tags and /api/ps by @leilei3167 in https://github.com/mudler/LocalAI/pull/11989
* fix(quantization): pin the producing backend on imported quantized models (#11875) by @Anai-Guo in https://github.com/mudler/LocalAI/pull/11879
* fix: return correct HTTP status codes for saturation and no-nodes-available by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12113
* [router] fix: re-seed the knn corpus index when the vector store comes back empty by @walcz-de in https://github.com/mudler/LocalAI/pull/12267
* fix(functions): honor function_arguments_key when building the tool grammar by @Anai-Guo in https://github.com/mudler/LocalAI/pull/11677
* fix(models): fallback to application config default context size in /v1/models/capabilities (#12202) by @PINYOPATTANAWASANPORN in https://github.com/mudler/LocalAI/pull/12216
* fix: point docker-compose default at gallery phi-2-chat by @leilei3167 in https://github.com/mudler/LocalAI/pull/11987
* fix(distributed): stage the files a model install declares by @mudler-agent in https://github.com/mudler/LocalAI/pull/12309
* fix(gallery): keep model deletion inside the models directory by @mudler-agent in https://github.com/mudler/LocalAI/pull/12324
* fix: make the remaining VerifyPath checks effective by @mudler-agent in https://github.com/mudler/LocalAI/pull/12326
* fix(llama-cpp): keep llama.cpp's default cache_ram instead of no limit by @walcz-de in https://github.com/mudler/LocalAI/pull/12297
* fix(huggingface): list repos nested more than one directory deep by @mudler-agent in https://github.com/mudler/LocalAI/pull/12355
* fix(react-ui): extract text from PDF attachments in chat and home by @mudler-agent in https://github.com/mudler/LocalAI/pull/12374
* fix(vllm-cpp): annotate the hf_overrides config.json read for gosec by @mudler-agent in https://github.com/mudler/LocalAI/pull/12380
* fix(watchdog): ignore stale backend evictions by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12333
* fix(funasr): select Python 3.12 tokenizers by @mudler-agent in https://github.com/mudler/LocalAI/pull/12402
* fix(llama-cpp): let parallel:1 in the model options win over LLAMACPP_PARALLEL by @walcz-de in https://github.com/mudler/LocalAI/pull/12426
* fix(whisperx): keep the transcript when diarization fails, report real errors by @walcz-de in https://github.com/mudler/LocalAI/pull/12427
* fix(cloud-proxy): surface Anthropic refusals instead of empty replies by @walcz-de in https://github.com/mudler/LocalAI/pull/12424
* fix(llama-cpp): do not stream the error text as content on pre-stream failures by @walcz-de in https://github.com/mudler/LocalAI/pull/12425
### Exciting New Features 🎉
* feat: Add kimodo.cpp and 3D animation API/UI by @richiejp in https://github.com/mudler/LocalAI/pull/12095
* feat(vllm-cpp): add video_lora_dir option for runtime prompt-activated LoRA by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12119
* feat(openai): add negative_prompt field to image generation request by @lqp in https://github.com/mudler/LocalAI/pull/12031
* feat(swagger): update swagger by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12000
* feat(swagger): update swagger by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12148
* feat(kimodocpp): track usage through generic backend metadata by @richiejp in https://github.com/mudler/LocalAI/pull/12162
* feat(ui): show running models and host gauges on single-node installs by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12189
* feat(stablediffusion-ggml): Qwen-Image 2.1 support + gallery GGUF by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12190
* feat(kimodo): Add observability hooks by @richiejp in https://github.com/mudler/LocalAI/pull/12184
* feat(audio-cpp): AUDIOCPP_DEFAULT_BACKEND fallback for models without a backend option by @blackd in https://github.com/mudler/LocalAI/pull/12133
* feat(vllm-cpp): add GLiNER2.5 NER via TokenClassify by @mudler-agent in https://github.com/mudler/LocalAI/pull/12140
* feat(vllm-cpp): unify decision pipeline through Score RPC with vllm_decide ABI v29 by @mudler-agent in https://github.com/mudler/LocalAI/pull/12247
* feat(system): report per-model DRM VRAM by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12026
* sglang backend: pass through thinking_budget + require_reasoning by @pos-ei-don in https://github.com/mudler/LocalAI/pull/12193
* feat(swagger): update swagger by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12308
* feat(distributed): report worker version and show models in node inspector by @mudler-agent in https://github.com/mudler/LocalAI/pull/12328
* feat(failover): serve a model name from a chain of local and remote targets by @mudler-agent in https://github.com/mudler/LocalAI/pull/12285
* feat(parakeet-cpp): speaker diarization, sound detection and live scene events by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12335
* feat: decisions usecase for decision models, with gallery tagging by @mudler-agent in https://github.com/mudler/LocalAI/pull/12373
* feat(parakeet-cpp): name speakers from the shared voice registry by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12382
* feat(audio): remember speakers from diarization by @mudler-agent in https://github.com/mudler/LocalAI/pull/12414
### 🧠 Models
* feat(gallery): add four Italian community Piper voices by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12121
* feat(gallery): consolidate 25 pending gallery PRs by @mudler-agent in https://github.com/mudler/LocalAI/pull/12124
* feat(gallery): galleries published as OCI artifacts by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12167
* batch(gallery): merge 14 gallery model-addition PRs by @mudler-agent in https://github.com/mudler/LocalAI/pull/12221
* feat(gallery): optionally pin the signing certificate's source repository by @mudler-agent in https://github.com/mudler/LocalAI/pull/12235
* feat(gallery): add vllm-cpp entries for laya, cua-s1-forms, and gliner2.5 by @mudler-agent in https://github.com/mudler/LocalAI/pull/12240
* feat(gallery): add nemo-speech-cpp diarization and ASR models by @mudler-agent in https://github.com/mudler/LocalAI/pull/12265
* feat(gallery): read metadata for system-path backends, enabling variant aliases by @blackd in https://github.com/mudler/LocalAI/pull/12141
* chore(gallery): add Hemmingway and remove invalid chat entry by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12278
* chore(gallery): add MiMo distill Qwen 9B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12282
* feat(gallery): publish signed OCI fallbacks by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12182
* chore(gallery): add Sharp-Spark 4B variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12287
* chore(gallery): add Swift 1.5 GSQ-RCO variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12293
* chore(gallery): add ThinkingCap Qwen3.8 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12295
* chore(gallery): add Agention Qwen3.8 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12296
* chore(gallery): add Qwopus Flash V2 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12298
* chore(gallery): add Cyber-Tiel-Coder variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12300
* feat(gallery): add kev-0.8b on vllm-cpp as a decisions model by @mudler-agent in https://github.com/mudler/LocalAI/pull/12391
* chore(gallery): add Cyber-Ornith 1.5 variants by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12383
* feat(gallery): add Nimble 9B and CLM decision models, bump vllm.cpp to a19294a9 by @mudler-agent in https://github.com/mudler/LocalAI/pull/12397
### 📖 Documentation and examples
* docs: :arrow_up: update docs version mudler/LocalAI by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12111
* docs: explain mixed CPU/GPU inference by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12143
* docs(gpu): drop false auto-set claim for gfx1151 env vars by @leilei3167 in https://github.com/mudler/LocalAI/pull/12109
* docs(gallery): remove per-model documentation sections by @mudler-agent in https://github.com/mudler/LocalAI/pull/12222
* docs(proxy): clarify optional upstream API keys by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12286
* docs: replace dead chatbot-ui example link with repo root by @yzxcj797 in https://github.com/mudler/LocalAI/pull/11546
* docs: fix 11 dead links in the documentation by @pratikgx in https://github.com/mudler/LocalAI/pull/12320
* docs: fix Discord, Slack and Telegram example links by @pratikgx in https://github.com/mudler/LocalAI/pull/12392
* docs: introduce decision models on the blog by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12428
### 👒 Dependencies
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `c2257c833333f222d64dc9d437afdcece33ceb0b` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12116
* chore: :arrow_up: Update NVIDIA/NeMo-Speech.cpp to `07003daa7eefea542076310722ccaa89709ee3c3` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12115
* chore: :arrow_up: Update ggml-org/llama.cpp to `972d2313bc0bf0a45f634f77d95c9fb03aeab12c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12090
* chore: :arrow_up: Update PABannier/sam3.cpp to `416186c501d060df7ca02989d49b38080f5f81f3` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12091
* chore: :arrow_up: Update mudler/vllm.cpp to `e27e6d1c8f9ccd2803d37030f8a677507fe6e314` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12089
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `cc515a01f9d0e3f6b975234cc934b807f55bcd35` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12087
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `dc31024448b8f18eac0cd5c2e200b6c7e015ef7a` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12088
* chore: :arrow_up: Update 0xShug0/audio.cpp to `f2b4937306daa25f5c78520f3c626ed31495a37a` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12086
* chore(deps): bump docs/themes/hugo-theme-relearn from `8bb66fa` to `aa16cb1` by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12096
* chore(deps): bump actions/checkout from 6 to 7 by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12108
* chore(deps): bump protobuf from 7.35.0 to 7.36.1 in /backend/python/transformers by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12098
* chore(deps): bump grpcio from 1.83.1 to 1.84.0 in /backend/python/vllm by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12099
* chore(deps): bump grpcio from 1.83.1 to 1.84.0 in /backend/python/common/template by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12101
* chore(deps): bump grpcio from 1.83.1 to 1.84.0 in /backend/python/rerankers by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12104
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `cd6922ac3cb465f1c0a22465e77db21d367204fe` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12126
* chore: :arrow_up: Update mudler/vllm.cpp to `f3cd97e379fbeca4e50415edbdd52d2517b98ef8` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12132
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `2ae132fa601ea06818ed3584f50f7eb4f72d4967` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12131
* chore: :arrow_up: Update ggml-org/whisper.cpp to `5670d5c0bbcb148feabef84400a07cfca9aa3b30` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12130
* chore: :arrow_up: Update ggml-org/llama.cpp to `50631b3d2c569ad8e5c112090cd28570b1268ee0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12129
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `2ea8aff7ef603977dc2ece7856bf9736dba96652` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12127
* chore: :arrow_up: Update 0xShug0/audio.cpp to `a074d6b8cdb16b89cd028876e83629a538d49b9a` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12125
* chore: :arrow_up: Update CrispStrobe/CrispASR to `647db2c7abed1fc82a69767f6e8b3993b94b8417` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12112
* chore: :arrow_up: Update CrispStrobe/CrispASR to `7bd1d6062eb3d96dfb68fb240f8736399ba490c3` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12153
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `1330cebae8f2ba99249df846cc0c9444fcbd4308` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12152
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `401a09d2f534d2eeabb0a37919ebc5a2cbc56ac6` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12151
* chore: :arrow_up: Update mudler/vllm.cpp to `ea8c83d75f461a520e41328c44bde6c949453fa6` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12149
* chore: :arrow_up: Update 0xShug0/audio.cpp to `a7b58a6d3d6ae4143c485266b1c6c09898ad8c72` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12150
* chore: :arrow_up: Update PrismML-Eng/llama.cpp to `9a9394a895b96003ca842a6041cb28ac49a108f7` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12114
* chore: :arrow_up: Update ggml-org/llama.cpp to `e613ef2c81bae98d59850d061ac29e6e3e88cb00` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12157
* chore: :arrow_up: Update antirez/ds4 to `0aaea5a238fb41a35106a551e73c8409dfb751ac` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12168
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `9cba2e3874df6f598fd339c4c6c7d5fc2b44645b` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12174
* chore: :arrow_up: Update CrispStrobe/CrispASR to `46612927d8ed7a98e88fb9f411768a2ccbbe1170` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12171
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `ae9dd24b6a5ff72bf50519490092ad14c64627a8` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12169
* chore: :arrow_up: Update 0xShug0/audio.cpp to `e3de8e3f3cbfac55ffa58df71426c41550a8598b` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12176
* chore: :arrow_up: Update ggml-org/llama.cpp to `ce8caa6e60a03093351d6016a818720e0d46f0fb` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12177
* chore: :arrow_up: Update 0xShug0/audio.cpp to `17cc8980e9c8f8073796aead8a91c809511cbab1` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12199
* chore: :arrow_up: Update CrispStrobe/CrispASR to `5cfdc754c04d7bb3f0ab637f0e09502eda22d1ae` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12198
* chore: :arrow_up: Update NVIDIA/NeMo-Speech.cpp to `302ebc93f096d03395e5d86c643897b8bf0fd9a8` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12196
* chore: :arrow_up: Update PrismML-Eng/llama.cpp to `01ae597e3f7d4742909e1e831abb12fe3d24b2cf` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12195
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `baac291dc9d531927760b48451d8dfcb63b6adec` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12192
* chore: :arrow_up: Update ggml-org/llama.cpp to `58367713a6935c0810103378144008df32e3d5db` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12197
* chore: :arrow_up: Update ggml-org/whisper.cpp to `307869af285d7f6f689ba100b3515e2d1b3feb05` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12200
* chore: :arrow_up: Update ggml-org/llama.cpp to `709fe755dfa810d77e2ac386292b29648b536864` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12208
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `c5b5773bed338c5f3b985d277764a4d780b83d42` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12210
* chore: :arrow_up: Update PrismML-Eng/llama.cpp to `bdc23b56b4458b9f1655aec5287f3ab56ee8daaa` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12207
* chore: :arrow_up: Update ggml-org/whisper.cpp to `a44e07845931421bb6f3447ce0010ed9dc76a118` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12209
* chore: :arrow_up: Update 0xShug0/audio.cpp to `1ee4ce8275997a7dcf0e2a5dc3410e509b898d6d` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12211
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `c92d73c408515c94beef32161bb5960764fde7a0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12212
* chore: :arrow_up: Update CrispStrobe/CrispASR to `18d74132d22fa7c967181720310d4ba1df9b7bf0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12213
* chore: :arrow_up: Update mudler/vllm.cpp to `d4738d241271b4d10134a6499f97337f20fcf8ce` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12175
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `3ac485d0688fc684f5dcf2c95283b745220f9dcc` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12191
* chore: :arrow_up: Update TheTom/llama-cpp-turboquant to `4deec5587b2963af00bdf80884f3337e02eb7d64` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12154
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `f3d6e6e3020ddfebad60113845bf521620766da5` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12233
* chore: :arrow_up: Update CrispStrobe/CrispASR to `97a35a6e519fda1835f3c8353516384aa8710b8c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12230
* chore: :arrow_up: Update mudler/vllm.cpp to `b24f8094cba9b4f02df71bcff8d41ddc7e88b4ef` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12229
* chore: :arrow_up: Update 0xShug0/audio.cpp to `9bdd1d908bbd128e9eb405f5a8e38d0defb84c72` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12224
* chore: :arrow_up: Update ggml-org/llama.cpp to `d2e54583c7452353eb35d40431281f6ee984332f` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12228
* chore: :arrow_up: Update ggml-org/whisper.cpp to `a664346ea5c6dddff3e61a2b7b32dd4514613f50` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12227
* chore: :arrow_up: Update PrismML-Eng/llama.cpp to `0324c66521960d67aa7da8687fb1453a79a6565c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12226
* chore: :arrow_up: Update vllm-metal (darwin) to `v0.30.0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12225
* chore: :arrow_up: Update vllm-project/vllm cu130 wheel to `0.30.0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12214
* chore: :arrow_up: Update CrispStrobe/CrispASR to `acc08e3bd3e5c17a3852115f3efa0e1ab30bc47a` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12259
* chore: :arrow_up: Update NVIDIA/NeMo-Speech.cpp to `97a15afa5caa9bce5baaa86c1184103877af4101` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12257
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `b167b942f77ecb17e7f78e163a8c32ff7ac95c10` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12255
* chore: :arrow_up: Update ggml-org/whisper.cpp to `d09f61a708f3487afa956ff578e60eae5e7a233c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12253
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `20f7a72edd7049fe5a87eef2b5e9a50ae109ca4b` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12251
* chore: :arrow_up: Update 0xShug0/audio.cpp to `857de2366ed74bdb2c37f85259089e3a0a6b8cb0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12248
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `8ab42195a05a9d48a3942b17568c1f3a876e133a` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12249
* chore: :arrow_up: Update PrismML-Eng/llama.cpp to `842b1880415d6f508f03b789e5ce70194def7bfd` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12250
* chore: :arrow_up: Update ggml-org/llama.cpp to `84e76d8a23162eca70490da131945ebec1f09bf4` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12258
* chore: :arrow_up: Update 0xShug0/audio.cpp to `e79205f3e0083d04e812e1a4a376f71be97e9a22` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12269
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `1aaf7105be6e55a97fa4a9fd6f5bd362b08436dc` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12270
* chore: :arrow_up: Update PrismML-Eng/llama.cpp to `adfffbe41b2cabcd51fff326ab045662265062bb` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12271
* chore: :arrow_up: Update CrispStrobe/CrispASR to `6b78932d09765406ba0e0154d95bc6289246ceee` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12273
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `2f886889e6e8b78738d6b87f7191f6018557c551` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12274
* ci: bump Hugo from 0.146.3 to 0.166.0 by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12281
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `cdf232cc17e410e60c1bc3b85516c4a41199b662` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12288
* chore: :arrow_up: Update CrispStrobe/CrispASR to `013ae1624dc40ecf059065d577180722439f804e` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12292
* chore: :arrow_up: Update mudler/parakeet.cpp to `2bf88954dc628b32835734e2e9159550a75a1dc6` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12291
* chore: :arrow_up: Update 0xShug0/audio.cpp to `94bd4656399180befc141b17bd6696bf84df0a9f` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12289
* chore(deps): bump LocalAGI to 8253de9 (re-dial dropped MCP sessions) by @walcz-de in https://github.com/mudler/LocalAI/pull/12299
* chore: :arrow_up: Update ggml-org/llama.cpp to `95887577ab5fead779581a7030a83c7752ff3234` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12272
* chore: :arrow_up: Update mudler/vllm.cpp to `c3bebc357385990f721af66a3a6c69328dd4fc6c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12252
* chore: :arrow_up: Update TheTom/llama-cpp-turboquant to `a3d5603d110bda29222d2011596cdc84d7fa532d` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12232
* chore(deps): bump sentence-transformers from 5.7.0 to 6.1.0 in /backend/python/transformers by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12245
* chore(deps): update numpy requirement from >=2.5.2 to >=2.5.3 in /backend/python/transformers by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12244
* chore(deps): update transformers requirement from >=5.15.1 to >=5.17.0 in /backend/python/transformers by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12105
* chore(deps): bump grpcio from 1.83.0 to 1.84.0 in /backend/python/transformers by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12102
* chore(deps): bump grpcio from 1.83.1 to 1.84.0 in /backend/python/coqui by @dependabot[bot] in https://github.com/mudler/LocalAI/pull/12106
* chore(deps): bump LocalAGI to 7e0947d (no-RAG-DB crash fix, tool filters, per-collection models) by @mudler-agent in https://github.com/mudler/LocalAI/pull/12302
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `ed27bf7ed25e637692e89cd341d802522a2cee8a` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12313
* chore: :arrow_up: Update CrispStrobe/CrispASR to `ec98831d0776ec8a16ccaf93955693eb7ecfbec3` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12314
* chore: :arrow_up: Update 0xShug0/audio.cpp to `77491a33c589c53ff18add050095cf35647c8213` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12315
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `ead199a2bc4c53a57cac90095ae049a111d9e98d` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12316
* chore: :arrow_up: Update leejet/stable-diffusion.cpp to `3f8527a46c54ecf4cb4ed6003da8e8982283c73c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12317
* chore: :arrow_up: Update ggml-org/llama.cpp to `4da6337767f973e2b4d0797e5b323d77d8565e4a` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12318
* chore: :arrow_up: Update 0xShug0/audio.cpp to `f825d1d1b92af309585aeb656b2a59c44fc603eb` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12343
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `d741de5074cd424dd3ba7cfc4d9b7649f1eb0463` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12351
* chore: :arrow_up: Update ServeurpersoCom/omnivoice.cpp to `53e6c2066150802ad3cd4b655b31c696e78e0019` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12350
* chore: :arrow_up: Update ggml-org/whisper.cpp to `6e4ab854f67f743900934a703d5603419384c961` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12349
* chore: :arrow_up: Update CrispStrobe/CrispASR to `2cd383a926e3c37334e75eb5d8b8a85bd82ed22d` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12348
* chore: :arrow_up: Update localai-org/ced.cpp to `b10237678d1c3b30c77d19f2e63f6c198c7f8d09` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12346
* chore: :arrow_up: Update NVIDIA/NeMo-Speech.cpp to `0f706e43cf1fbc031bad1423e05460d3acaeaa1c` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12361
* chore(deps): bump nib to v0.12.1 by @mudler-agent in https://github.com/mudler/LocalAI/pull/12372
* chore: :arrow_up: Update localai-org/ced.cpp to `61dec2ab0106f2047ee40062a7075dbf08c523d0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12365
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `0821d62a8b356bd1db3c6765551a30bfcc44a6de` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12364
* chore: :arrow_up: Update CrispStrobe/CrispASR to `be202c472503a5c7f1d3e568c420865cad02f1c3` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12363
* chore: :arrow_up: Update 0xShug0/audio.cpp to `ed96b7307c8daba2ebcf7912af928825f6b14cb9` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12362
* chore: :arrow_up: Update mudler/parakeet.cpp to `623a968bccbd2214588df398fcce687cd4218dea` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12347
* chore: :arrow_up: Update TheTom/llama-cpp-turboquant to `bcb85fc3ae85efa0f5f392c6c880dfc524923860` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12344
* chore(vllm-cpp): bump to 967883486 (ABI v30), add hf_overrides and Tev1 entries, fix vllm-cpp gallery installs by @mudler-agent in https://github.com/mudler/LocalAI/pull/12379
* chore: :arrow_up: Update 0xShug0/audio.cpp to `9a02e61326aaaf9d462b584ca5e0daba22c0abfc` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12389
* chore: :arrow_up: Update NVIDIA/NeMo-Speech.cpp to `4c101bc7113f49101a3e11d2c994c519f41939f6` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12388
* chore: :arrow_up: Update mudler/parakeet.cpp to `8c8cec0c4564610a0a4b30a8a6f2ead15d1a76fb` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12387
* chore: :arrow_up: Update CrispStrobe/CrispASR to `ba8c1ea667f30b1c0e32ef8574cee68d9f30bcf3` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12386
* chore: :arrow_up: Update localai-org/voice-detect.cpp to `b74a896f47c6d04fcca0a962ff317528fd0b0019` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12384
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `32cddbfcefed93896a39c64e7c38c119de8682e6` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12385
* chore: :arrow_up: Update ggml-org/llama.cpp to `a4d880fd5c7f88713ded6db9f0111893bd78afa6` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12345
* chore: :arrow_up: Update CrispStrobe/CrispASR to `fdc3a0007d68f8d3905f20e9cd4d18b5f193e096` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12413
* chore: :arrow_up: Update mudler/parakeet.cpp to `bee7c14dfcc23613df58176c59a40459e7b47095` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12420
* chore: :arrow_up: Update ikawrakow/ik_llama.cpp to `d9e286846d6f8232db48ec5c111a4ea3aea675ef` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12418
* chore: :arrow_up: Update ggml-org/llama.cpp to `a868c3e3c56657f7e8a6231190dbbe90e7dd86c0` by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12419
### Other Changes
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12015
* chore(model gallery): :robot: add 1 new models via gallery agent by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12080
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12128
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12156
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12172
* fix(ci): sign backends in the format we verify by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12166
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12194
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12215
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12231
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12256
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12275
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12290
* fix(ci): use Go 1.27 for Darwin backends by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12284
* fix(ci): retain backend digests for release retries by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12160
* chore(website): refresh the counters by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12039
* chore(model gallery): :robot: add 1 new models via gallery agent by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12223
* chore(model-gallery): propose variant groupings for review by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12180
* chore(model gallery): :robot: add 1 new models via gallery agent by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12237
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12310
* chore(website): refresh the counters by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12329
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12342
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12366
* test(agentpool): pin the standalone agent contract by @mudler-agent in https://github.com/mudler/LocalAI/pull/12378
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12390
* chore(model-gallery): :arrow_up: update checksum by @localai-org-maint-bot in https://github.com/mudler/LocalAI/pull/12415

## New Contributors
* @mudler-agent made their first contribution in https://github.com/mudler/LocalAI/pull/12124
* @lqp made their first contribution in https://github.com/mudler/LocalAI/pull/12031
* @H-XX-D made their first contribution in https://github.com/mudler/LocalAI/pull/12135
* @yzxcj797 made their first contribution in https://github.com/mudler/LocalAI/pull/11546
* @PINYOPATTANAWASANPORN made their first contribution in https://github.com/mudler/LocalAI/pull/12216
* @pratikgx made their first contribution in https://github.com/mudler/LocalAI/pull/12320

**Full Changelog**: https://github.com/mudler/LocalAI/compare/v4.10.0...v4.11.0

---

> **Source** [mudler/LocalAI](https://github.com/mudler/LocalAI) · `v4.11.0` · 2026-10-02 · [upstream release](https://github.com/mudler/LocalAI/releases/tag/v4.11.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
