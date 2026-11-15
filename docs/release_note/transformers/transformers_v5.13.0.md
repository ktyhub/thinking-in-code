---
title: "transformers v5.13.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.13.0"
version: "v5.13.0"
published: "2026-07-03"
type: "minor"
lang: "en"
summary: "This release includes the architecture for Kimi 2.5 which is used by 2.5-2.7"
---

# transformers v5.13.0

# Release v5.13.0


## New Model additions

### KimiK 2.5, 2.6, and 2.7

<img width="1097" height="400" alt="image" src="https://github.com/user-attachments/assets/c24d2232-a9b4-413b-a2c8-58d013b6dfbd" />

This release includes the architecture for Kimi 2.5 which is used by 2.5-2.7:

Kimi K2.5 is an open-source, native multimodal agentic model that advances practical capabilities in long-horizon coding, coding-driven design, proactive autonomous execution, and swarm-based task orchestration. The model was proposed in [Kimi K2.5: Visual Agentic Intelligence](https://www.kimi.com/en/blog/kimi-k2-5) and further improved in [Kimi K2.6: Advancing Open-Source Coding](Kimi K2.5: Visual Agentic Intelligence).

Kimi K2.5 achieves significant improvements on complex, end-to-end coding tasks, generalizing robustly across programming languages (Rust, Go, Python) and domains spanning front-end, DevOps, and performance optimization. The model is capable of transforming simple prompts and visual inputs into production-ready interfaces and lightweight full-stack workflows, generating structured layouts, interactive elements, and rich animations with deliberate aesthetic precision.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/kimi_k25)
* Add new model: Kimi2-6 (#45630) by @zucchini-nlp in [#45630](https://github.com/huggingface/transformers/pull/45630)

### MiMo-V2-Flash

<img width="6900" height="904" alt="image" src="https://github.com/user-attachments/assets/8bd8d5f0-0381-4f8c-8ada-0203e11ff494" />

**MiMo-V2-Flash** is a Mixture-of-Experts (MoE) language model developed by the Xiaomi MiMo team. Designed to establish a new balance between long-context modeling capabilities and inference efficiency, the model is built for strong performance in complex reasoning and agentic tasks. Trained on 27T tokens with native 32k sequence lengths, MiMo-V2-Flash seamlessly supports an extended **256K context window** while significantly reducing KV-cache storage compared to standard global attention models.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/mimo_v2_flash)
* Add Xiaomi MiMo-V2 (#45144) by @casinca in [#45144](https://github.com/huggingface/transformers/pull/45144)

### Nemotron 3.5 ASR

<img width="1632" height="735" alt="image" src="https://github.com/user-attachments/assets/597bbb9c-b046-4e47-b9fd-f242e0a5b04d" />

Nemotron 3.5 ASR is a 600M-parameter multilingual speech recognition model from NVIDIA, built for high-quality transcription in both low-latency streaming and high-throughput batch settings, with native punctuation and capitalization. For streaming, it offers configurable chunk sizes—80ms, 160ms, 560ms, and 1120ms, letting users trade off latency against accuracy to suit their application. Its cache-aware FastConformer-RNNT architecture is central to this capability: unlike traditional buffered streaming, which repeatedly reprocesses overlapping audio windows, the model processes only each new incoming chunk while reusing cached encoder context from prior chunks. This eliminates redundant computation, significantly improves efficiency, and minimizes end-to-end delay without sacrificing accuracy, making it well suited to real-time transcription workloads.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/nemotron3_5_asr)
* Add Nemotron 3.5 ASR Streaming (#46565) by @eustlb in [#46565](https://github.com/huggingface/transformers/pull/46565)

### NemotronAsrStreaming

Nemotron ASR Streaming is a 600M-parameter English speech recognition model from NVIDIA, built for high-quality transcription in both low-latency streaming and high-throughput batch settings, with native punctuation and capitalization. For streaming, it offers configurable chunk sizes—80ms, 160ms, 560ms, and 1120ms, letting users trade off latency against accuracy to suit their application. Its cache-aware FastConformer-RNNT architecture is central to this capability: unlike traditional buffered streaming, which repeatedly reprocesses overlapping audio windows, the model processes only each new incoming chunk while reusing cached encoder context from prior chunks. This eliminates redundant computation, significantly improves efficiency, and minimizes end-to-end delay without sacrificing accuracy, making it well suited to real-time transcription workloads.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/nemotron_asr_streaming)
* Add Nemotron ASR Streaming (#46332) by @eustlb in [#46332](https://github.com/huggingface/transformers/pull/46332)

### Qwen3 ASR

<img width="3646" height="2036" alt="image" src="https://github.com/user-attachments/assets/41ed13e3-a0bf-463a-8473-bc6beb8ebd73" />

Qwen3 ASR is an automatic speech recognition model from Alibaba's Qwen team that combines a Whisper-style audio encoder with a Qwen3 language model decoder for speech-to-text transcription. The model supports automatic language detection and multilingual transcription.

A forced aligner model is also included. It can be used to timestamp a provided transcript and its audio. It uses the same audio encoder model with a classification head that predicts a word's length. This model can be used with the transcript from any ASR model (see the example below with Parakeet CTC).

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/qwen3_asr)
* Qwen3 ASR and Forced Aligner (#43838) by @mbtariq82 in [#43838](https://github.com/huggingface/transformers/pull/43838)

### ZAYA

<img width="1200" height="628" alt="image" src="https://github.com/user-attachments/assets/2935eba8-ab74-455c-9d44-f088636b2785" />

ZAYA1 is a 760M active / 8.4B total parameter MoE language model trained by Zyphra. It combines Compressed
Convolutional Attention (CCA), a nonlinear ZAYA1 router, and residual scaling.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/zaya)
* [new model] Add Zyphra/ZAYA1-8B (#45862) by @JJJYmmm in [#45862](https://github.com/huggingface/transformers/pull/45862)

### VideoPrism

The VideoPrism model was proposed in the paper [VideoPrism: A Foundational Visual Encoder for Video Understanding](https://huggingface.co/papers/2402.13217) by Google DeepMind ([blog post](https://research.google/blog/videoprism-a-foundational-visual-encoder-for-video-understanding/)).

VideoPrism is a general-purpose video encoder that tackles diverse video understanding tasks with a single frozen model. The model is pretrained on a large-scale heterogeneous corpus containing 36M high-quality video-caption pairs and 582M video clips with noisy parallel text (e.g., ASR transcripts). The pretraining approach improves upon masked autoencoding through global-local distillation of semantic video embeddings and a token shuffling scheme, enabling the model to focus primarily on the video modality while leveraging text associated with videos. VideoPrism achieves state-of-the-art performance on 31 out of 33 video understanding benchmarks across four broad task groups, from web video question answering to computer vision for science.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/videoprism)
* Add Videoprism (#39895) by @MHRDYN7 in [#39895](https://github.com/huggingface/transformers/pull/39895)

### RADIO

[RADIO](https://huggingface.co/papers/2312.06709) (Reduce All Domains Into One) is a family of vision foundation models from NVIDIA trained by multi-teacher distillation (e.g. CLIP, DINOv2, SAM) into a single ViT backbone. It produces both an image-level `summary` embedding and dense spatial `features`, and supports variable input resolutions through a Cropped Position Embedding (CPE) patch generator.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/radio)
* Add support for RADIO models (#46425) by @meatybobby in [#46425](https://github.com/huggingface/transformers/pull/46425)

### MiniCPM3

MiniCPM3 is the third-generation MiniCPM dense language model from OpenBMB. The 4B variant
([`openbmb/MiniCPM3-4B`](https://huggingface.co/openbmb/MiniCPM3-4B)) outperforms many 7B–9B open
models on standard benchmarks while remaining lightweight enough for on-device usage.

MiniCPM3 combines several architectural ideas:

- **Multi-head Latent Attention (MLA)** from DeepSeek-V2, which compresses the key/value cache
  into a low-rank latent representation while still using rotary embeddings on a portion of the
  query/key heads.
- A standard SwiGLU MLP (no MoE).
- Three scalar scaling factors that govern signal flow:
  - `scale_emb` — scales input embeddings.
  - `scale_depth / sqrt(num_hidden_layers)` — scales residual connections.
  - `hidden_size / dim_model_base` — scales hidden states before the language model head.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/minicpm3)
* Add MiniCPM3 (#41116) by @bzantium in [#41116](https://github.com/huggingface/transformers/pull/41116)



## Breaking changes

A broad set of modeling changes have been made to standardize layer declarations, mask/cache construction, and hybrid-attention handling, making many models cleanly exportable (ONNX, `torch.export`, ExecuTorch) and fullgraph-compilable — users relying on internal modeling APIs may need to update their code accordingly.
* 🚨 Modeling changes for export, compile, and hybrid-attention standardization (#46738) by @IlyasMoutawwakil

Attention masking for image tokens in Gemma 3/4 models has been fixed to correctly respect sliding window boundaries in local layers, which changes model behavior and may affect reproducibility of previous results.
* 🚨 [gemma 3/4] Fix bidirectional attention masking crossing sliding window boundaries (#46850) by @douglas-reid

The Expert Parallelism (EP) router contract has been corrected across many models and FP8 scale format handling has been fixed, requiring users of EP or FP8 quantization with affected models to verify their configurations and potentially update conversion mappings.
* 🚨 EP: fix EP router contract for many models + honor FP8 scale format (#46818) by @IlyasMoutawwakil

The `Kernels` integration has been synced to the latest version, which includes a breaking change where model-type repositories are no longer accepted by the kernels interface — users must migrate to the updated kernel repository format as shown in the updated tests.
* :rotating_light: [`Kernels`] Sync to latest version (#46039) by @vasqu


## HfExporters: Native, Unified export for PyTorch / ONNX / ExecuTorch

<img alt="thumbnail" src="https://github.com/user-attachments/assets/3ba5751b-c99e-4945-b5a8-b2b29231f5df" />

A native, in-Transformers export pipeline — one base class (`HfExporter`), three subclasses for the runtimes we care about, one unified API:

| Exporter | Output | Runtime |
|---|---|---|
| `DynamoExporter` | `ExportedProgram` | Any PyTorch runtime, AOT compilation |
| `OnnxExporter` | `ONNXProgram` | Any ONNX runtime (ORT, TensorRT, OpenVINO, …) |
| `ExecutorchExporter` | `ExecutorchProgramManager` | Mobile and edge (ExecuTorch) |

Same call shape across all three. Dynamic shapes by default. Generation-style models split automatically into prefill + decode (+ vision/audio sub-encoders for VLMs).

```python
from transformers import AutoModelForMaskedLM, AutoTokenizer
from transformers.exporters import OnnxExporter, OnnxConfig

model_id = "hf-internal-testing/tiny-random-BertForMaskedLM"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForMaskedLM.from_pretrained(model_id).eval()
inputs = tokenizer(["Hello, my dog is cute"] * 2, return_tensors="pt")
onnx_program = OnnxExporter().export(model, inputs, config=OnnxConfig(dynamic=True))

new_input = tokenizer("Hello, my cat is so adorable!", return_tensors="pt")
torch.testing.assert_close(
    onnx_program.call_reference(**new_input)[0],   # numpy reference
    onnx_program(**new_input)[0],                  # onnxruntime
    rtol=1e-4, atol=1e-4,
)
```

Swap one line for another runtime — `DynamoExporter()` / `DynamoConfig` or `ExecutorchExporter()` / `ExecutorchConfig(backend=...)`.

For generative models the prefill/decode split is captured automatically:

```python
from transformers import AutoModelForCausalLM, AutoTokenizer
from transformers.exporters import OnnxExporter, OnnxConfig

model_id = "hf-internal-testing/tiny-random-LlamaForCausalLM"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(model_id).eval()
inputs = tokenizer(["Hello, my dog is cute"] * 2, return_tensors="pt")

artifacts = OnnxExporter().export_for_generation(model, inputs, config=OnnxConfig(dynamic=True))
# {"prefill": ONNXProgram, "decode": ONNXProgram}
# For VLMs: also vision_encoder, audio_encoder, multi_modal_projector, language_model, lm_head
```


## Kernels

**Kernels:** Fixed a silent SDPA math-kernel fallback for GQA models with `head_dim > 256` (e.g., Gemma4) that caused O(S²) memory materialization, and resolved a regression where `use_kernels=True` failed to apply kernel mappings. Additional improvements include lazy loading of the default kernel mapping to prevent import failures with incompatible kernel versions, ROCm routing to AITER Triton kernels for AMD GPUs, GB10/SM121 Hub-kernel support for Qwen3.6 Gated DeltaNet, and expanded documentation for the kernel API.


* Fix silent SDPA math-kernel fallback for GQA when key/value head_dim > 256 or differ (#46960) by @Butterfingrz in [#46960]
* [docs] AITER kernels (#46871) by @stevhliu in [#46871]
* Documentation for the kernel API (#46754) by @michaelbenayoun in [#46754]
* update kernels-community/aiter-rope version (#46810) by @Abdennacer-Badaoui in [#46810]
* Add GB10/SM121 Hub-kernel path for Qwen3.6 Gated DeltaNet (#46423) by @AzeezIsh in [#46423]
* [`Kernels`] Trigger proper kernelization on `use_kernels=True` (#46755) by @vasqu in [#46755]
* Lazily build the default kernel mapping to decouple `kernels` from normal transformers usage (#46681) by @jiqing-feng in [#46681]
* Add some AITER kernel routing for ROCm (#46268) by @Abdennacer-Badaoui in [#46268]
* fix: position ids does not exist in upstream rotary kernel (#46619) by @NanoCode012 in [#46619]
* docs(zh): add Chinese translation of kernels.md (#46621) by @shoushinya123 in [#46621]


## Generation

Several generation bugs were fixed, including Mamba2 chunked-prefill and speculative decoding for hybrid models (Zamba2, Nemotron-H, Bamba, FalconH1, GraniteMoeHybrid), beam search for Mamba models, prompt lookup decoding crashes with no EOS token, and incorrect stateful model handling for LFM2. Additional improvements include reduced unnecessary generation warnings, a fix for continuous batching output mutation, and a new option to keep input tensors on CPU during generation to avoid retracing on Neuron/TPU devices.


* Fix Mamba2 chunked-prefill / speculative decoding for Zamba2, Nemotron-H, Bamba, FalconH1 and GraniteMoeHybrid (#46741) by @Sunt-ing in [#46741]
* Remove some unnecessary generate warnings (#46955) by @Cyrilvallez in [#46955]
* Reject assisted generation for LFM2 and LFM2-MoE (set _is_stateful) (#46937) by @Sunt-ing in [#46937]
* Fix beam search for mamba models (#46819) by @Cyrilvallez in [#46819]
* Fix prompt lookup decoding crash when no EOS token is configured (#46790) by @Sunt-ing in [#46790]
* [Continuous Batching] Snapshot generation outputs without mutating request state (#46670) by @Incheonkirin in [#46670]
* [docs] keep generation tensors on cpu (#46675) by @stevhliu in [#46675]
* feat(generation): allow user to keep input tensors on cpu (#46590) by @dacorvo in [#46590]


## Attention

Several attention-related bugs were fixed in this release, including silent SDPA math-kernel fallbacks for GQA with large head dimensions, broken Flash Attention with `StaticCache`, incorrect causal masking in Xcodec2, a cross-attention reshape regression in Blip2, and eager GQA support in Evolla. Accelerate hook handling was also corrected for models using linear attention to prevent silently wrong results during offloading.


* Fix accelerate hooks for all models using linear attention (#46978) by @Cyrilvallez in [#46978]
* Fix Xcodec2 attention to be non-causal. (#46963) by @ebezzam in [#46963]
* Fix flash attention with StaticCache (#46914) by @Cyrilvallez in [#46914]
* Fix Evolla eager attention for the GQA text decoder (#46860) by @jiqing-feng in [#46860]
* [docs] metal flash attention (#46349) by @stevhliu in [#46349]
* [`Blip2`] Fix cross attention reshape (#46695) by @vasqu in [#46695]


## Cache

Cache APIs were improved by consolidating redundant getters into a cleaner `get_max_length` method and updating documentation accordingly. Several bug fixes were also applied, including correcting mask generation beyond sliding windows, fixing a dimension issue in cumulative length tracking, resolving device mismatches in offloaded cache for hybrid models, and fixing crashes when loading trust_remote_code models from symlinked local caches.


* [docs] update cache apis (#46892) by @stevhliu in [#46892]
* Rework some old cache getters/properties (#46862) by @Cyrilvallez in [#46862]
* Fix expanded dim in the cache's cumulative length (#46856) by @Cyrilvallez in [#46856]
* Fix mask when generating beyond sliding window (#46839) by @zucchini-nlp in [#46839]
* Fix offloaded cache device mismatch on hybrid models (#46748) by @Sunt-ing in [#46748]
* Fix dynamic module symlinked cache on trust_remote_code models (#46618) by @ldkhang1201 in [#46618]


## Serve

Several fixes and improvements were made to the Serve functionality, including lazy imports to prevent CLI crashes when the optional `serve` extra is not installed, a fix for dropped attributes during serialization of subclassed Pydantic models, and added documentation for the kernel API.


* fix(cli/serve): import serve handlers lazily so the CLI works without the `serve` extra (#46473) by @<NOT FOUND> in [#46473]
* [Fix] Serve drops some attributes at serialization (#46680) by @remi-or in [#46680]
* Reduce per_page from 100 to 50 in GitHub API calls to avoid server errors (#46678) by @ydshieh in [#46678]


## Quantization

Fixed dtype casting bugs in Gemma4's vision and audio multimodal embedders when using BitsAndBytes quantization, where inputs were incorrectly cast to integer storage dtypes (`uint8`/`int8`) instead of the actual compute dtype. Also corrected FP8 quantization to round block scales before quantizing weights, ensuring dequantization produces correct values for `ue8m0` (DeepSeek-V4 style) format.


* [Gemma4] Fix dtype casting for quantized vision/audio embedders (#46933) by @sharmax-vikas in [#46933]
* Fix dtype casting for quantized multimodal embedders (#46904) by @praful-srinivasan-027 in [#46904]
* Round the ue8m0 FP8 scale before quantizing so dequant matches the stored inverse (#46763) by @Incheonkirin in [#46763]


## Bugfixes and improvements

* Update workflow callers to use `transformers-ci` (#47040) by @ydshieh in [#47040]
* Add HunYuan VL model (#46417) by @Mi-Jiazhi in [#46417]
* Add tiny_model_id support to ProcessorTesterMixin for memory-sensitive tests (#47005) by @ydshieh in [#47005]
* chore(linter): add TRF018 modeling rule (#46259) by @tarekziade in [#46259]
* [PoC] HF exporters (#41992) by @IlyasMoutawwakil in [#41992]
* TST Skip PEFT tests if PEFT version is too low (#47027) by @BenjaminBossan in [#47027]
* CI Add PEFT integration tests (#47021) by @BenjaminBossan in [#47021]
* [glm-mode-dsa] Indexer uses interleaved rope (#46842) by @pcuenca in [#46842]
* Use standard arg names in Mllama (#46977) by @zucchini-nlp in [#46977]
* Bump min peft 0.19.1 remove weight conversion duplicate code (#46442) by @BenjaminBossan in [#46442]
* Raise a loud error for missing prefix (#46980) by @Rocketknight1 in [#46980]
* Fix typo in Qwen3 ASR no_split_module (#47002) by @ebezzam in [#47002]
* only in the original repo (#46982) by @tarekziade in [#46982]
* Fix typos in Gemma 4 Assistant documentation (#46975) by @RaunaqDavidNath in [#46975]
* the CI status should be a comment (#46976) by @tarekziade in [#46976]
* QwenVL model conversion (#46881) by @zucchini-nlp in [#46881]
* Remove default dtype in FusedRMSNormGated modules (#46953) by @Cyrilvallez in [#46953]
* FIX PEFT test changed error type (#46959) by @BenjaminBossan in [#46959]
* Fix path traversal via vocab-file arguments in tokenizer_config.json (#46279) by @LinZiyuu in [#46279]
* docs(conditional_detr): fix num_queries default in docstring (100 -> 300) (#46939) by @Kropiunig in [#46939]
* Use common floats_list method for feature extractor tests. (#46956) by @ebezzam in [#46956]
* Fix RT-DETR indexing error when num_feature_levels exceeds backbone o… (#46833) by @c1prk in [#46833]
* Fix Florence2 training-loss double-shift (same pattern as Moonshine #… (#46898) by @sharmax-vikas in [#46898]
* [Olmo3] different RoPE per layer type (#46911) by @zucchini-nlp in [#46911]
* Use inspect.getsource instead of open() for source-reading in _can_set_*_implementation (#46207) by @rasmi in [#46207]
* Don't pin the gated delta net norm to `cuda:0` with a hardcoded device (#46817) by @Sunt-ing in [#46817]
* Fix auto-mappings registration for remote code & fixes a few custom code issues (#46876) by @Cyrilvallez in [#46876]
* Fix broken internal documentation links (#46945) by @sezer-muhammed in [#46945]
* Insert a Grafana badge in the PR (#46774) by @tarekziade in [#46774]
* [NemotronAsrStreaming] fix pipeline (#46870) by @eustlb in [#46870]
* [NemotronAsrStreaming] processor without modular (#46865) by @eustlb in [#46865]
* [`Dia`] Fix docs (#46923) by @vasqu in [#46923]
* [Docs] Fix full disk offloading docs (#46905) by @kylesayrs in [#46905]
* [CB] Changes to increase max_batch_tokens (#46712) by @remi-or in [#46712]
* Redirect to diffusers pipe in docs for experimental features (#46875) by @zucchini-nlp in [#46875]
* Install in docker (#46910) by @ydshieh in [#46910]
* [CI] Use pre-computed `_OLD_MODELS` in `test_new_models_require_torchvision_backend` (#46882) by @ydshieh in [#46882]
* call transformers-ci in a nightly run (#46811) by @tarekziade in [#46811]
* [docs] full disk offloading (#46893) by @stevhliu in [#46893]
* TST Run fast PEFT tests in normal CI (#45679) by @BenjaminBossan in [#45679]
* nemotron_asr_streaming: set _supports_flex_attn to False (#46878) by @kaixuanliu in [#46878]
* Add native masked MSE loss for Sapiens2ForPoseEstimation (#46764) by @Sainava in [#46764]
* blip 2 fix (#46816) by @itazap in [#46816]
* Use meshgrid for brevity (#46861) by @zucchini-nlp in [#46861]
* Add xcodec2 model (#44178) by @ebezzam in [#44178]
* Prevent auto-class from being modified for all models (#46844) by @zucchini-nlp in [#46844]
* Add Spanish translation of the torch.compile page (#46852) by @delcenjo in [#46852]
* docs: Update NeMo AutoModel doc examples (#46857) by @adil-a in [#46857]
* [docs] distributed training (#44420) by @stevhliu in [#44420]
* [docs] require trust_remote_code for custom_generate (#46677) by @stevhliu in [#46677]
* add distributed config (#46705) by @3outeille in [#46705]
* [Offloading] [Bugfix] Fix disk offloading of models with explicit tensor dtypes (#46849) by @kylesayrs in [#46849]
* Streamable chat parsing (#45847) by @Rocketknight1 in [#45847]
* Fix BitNet packed-weight unpacking dtype (`F.linear` dtype mismatch) (#46808) by @jiqing-feng in [#46808]
* Fix typos in code (#46579) by @cyyever in [#46579]
* Fix Moonshine training-loss double-shift (train against labels, not labels[..., 1:]) (#46784) by @Incheonkirin in [#46784]
* [CB] Fix issues with FA read / writes (#46765) by @remi-or in [#46765]
* Switch decorator order (#46853) by @Cyrilvallez in [#46853]
* docs(trainer): add JIT checkpointing to trainer recipes (#46826) by @efazal in [#46826]
* Import diffusion_gemma in models init (#46841) by @boringcrypto in [#46841]
* [skills] help your agent get started (#45732) by @stevhliu in [#45732]
* Fix use_cache with seq_len > 1 ( #46032) (#46084) by @Ramshankar07 in [#46084]
* [Offloading] Support full disk offloading (#46749) by @kylesayrs in [#46749]
* fix: raise `ValueError` for empty conversation in `apply_chat_template` (#46753) by @sharmax-vikas in [#46753]
* Fix VideoPrismForVideoClassification returning last_hidden_state as h… (#46830) by @sharmax-vikas in [#46830]
* Avoid NumPy 2.0 `__array__` copy-keyword deprecation in `create_mm_token_type_ids` (#46827) by @qgallouedec in [#46827]
* docs: update apple silicon doc with safetensors `0.8.0` benefits (#46744) by @McPatate in [#46744]
* [`CB`] Add FA2 to the fast path (#46729) by @vasqu in [#46729]
* Fix flex_attention block mask creation when `get_seq_length` returns a tensor (#46802) by @jiqing-feng in [#46802]
* Fix left-padding token selection in `BioGptForSequenceClassification` (#46782) by @Sunt-ing in [#46782]
* Fix broken internal links in model documentation (#46807) by @ShamSaleem in [#46807]
* DiffusionGemma: mask layout and CI (#46654) by @zucchini-nlp in [#46654]
* Use cached added-token dicts in per-token decode loops (#46535) by @ishan-1010 in [#46535]
* fix another flaky test (#46767) by @zucchini-nlp in [#46767]
* Fix secondary rate limit when downloading artifacts in slack report (#46796) by @ydshieh in [#46796]
* docs: move SmolLM3 to Text models category in _toctree.yml (#46770) by @yyouretoast in [#46770]
* Fix several bugs in `cache_implementation=static` (#46446) by @dacorvo in [#46446]
* [CI] Fix artifact download path in self-comment-ci workflow (#46769) by @ydshieh in [#46769]
* fixes per head minimaxm3 (#46719) by @ArthurZucker in [#46719]
* [`CI`] Fix some failures introduced by myself :grimacing:  (#46751) by @vasqu in [#46751]
* Fix regression in ProcessorMixin._load_tokenizer_from_pretrained for tokenizers at root (#46592) by @<NOT FOUND> in [#46592]
* fix(aria): use math.ceil in get_number_of_image_patches to match actual patch count (#46732) by @arnavkewalram in [#46732]
* Return logits from semantic segmentation post-process (#46163) by @guarin in [#46163]
* Fall back to the for-loop grouped_mm on CPU (#46743) by @Sunt-ing in [#46743]
* Kernelize refactor (#46520) by @michaelbenayoun in [#46520]
* ci: add comment explaining why secrets are not inherited in security gate (#46750) by @ydshieh in [#46750]
* ci: trigger PR CI on ci-* branches (#46746) by @ydshieh in [#46746]
* finegrained v3 (#46742) by @IlyasMoutawwakil in [#46742]
* Improve AutoImageProcessor error for unavailable backends (#46727) by @sisaman in [#46727]
* skip decorators must appear after @parameterized.expand in pytest (#46737) by @rasmi in [#46737]
* [RecurrentGemma] Support attn_implementation dispatch (#46320) by @YangKai0616 in [#46320]
* [docs] clarify initialization module usage (#46698) by @stevhliu in [#46698]
* feat: bump safetensors to `0.8.0` (#46523) by @McPatate in [#46523]
* ci: disable CircleCI by replacing config with no-op (#46721) by @ydshieh in [#46721]
* [CB] Fix offloading (#46587) by @remi-or in [#46587]
* [`Templates`] Update members (#46720) by @vasqu in [#46720]
* feat[vLLM x v5]: Expose max_source_positions on VibeVoiceAsrConfig (#46472) by @harshaljanjani in [#46472]
* Laguna: support per-element output gating (#46690) by @joerowell in [#46690]
* ci: grant pull-requests:write to the security gate caller (#46715) by @ydshieh in [#46715]
* Multi-gpu loading when the whole backbone is tied (#46625) by @zucchini-nlp in [#46625]
* Delete docstring if same as in auto-doc (#46284) by @zucchini-nlp in [#46284]
* Update GLM-5.2 docs (#46703) by @Dovis01 in [#46703]
* add conversion scripts for EUPE (#46691) by @molbap in [#46691]
* [docs] compile level and batch/scheduling limits (#46676) by @stevhliu in [#46676]
* [blip_2] Support attn_implementation dispatch (#46401) by @YangKai0616 in [#46401]
* [CTRL] Support attn_implementation dispatch (#46073) by @YangKai0616 in [#46073]
* Lfm2: also thread `seq_idx` through ShortConv.slow_forward (non-fast-path) (#46633) by @ChangyiYang in [#46633]
* feat(pipelines): accept numpy arrays and tensors in ImageClassificationPipeline (#39607) (#46573) by @kamran-nizamani in [#46573]
* Smovlm: pad videos up to max frames (#46662) by @zucchini-nlp in [#46662]
* mistral common backend fix (#46667) by @itazap in [#46667]
* [pr template] update (#46606) by @stevhliu in [#46606]
* Fix AttributeError in auto_factory when model_class lacks config_class (#46669) by @atharv1945 in [#46669]
* [CB] Slice logits inside the model (#46660) by @remi-or in [#46660]
* ci: add NO_COLOR=1 to suppress ANSI color codes in CI output (#46659) by @ydshieh in [#46659]
* Fix dynamic RoPE not resetting inv_freq when layer_type is None (#46624) by @Incheonkirin in [#46624]
* Better processing tests (#46374) by @zucchini-nlp in [#46374]
* ci: add merge_group trigger to pr-ci-caller.yml (#46668) by @ydshieh in [#46668]
* skip invalid quant_cache test for nemotron_h (#46368) by @kaixuanliu in [#46368]
* Revert "Disable PR CI workflow for PRs from forked repo. during the weekend" (#46652) by @ydshieh in [#46652]
* [CB] Fix seqlens and use TypedDict (#46593) by @remi-or in [#46593]
* Disable PR CI workflow for PRs from forked repo. during the weekend (#46609) by @ydshieh in [#46609]
* Update post release (#46608) by @vasqu in [#46608]
* Fix `peft` lower bound (#46605) by @hmellor in [#46605]
* Fix docstring formatting issues causing Sphinx autodoc warnings (#46596) by @kurtmckee in [#46596]

## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @ydshieh
    * Update workflow callers to use `transformers-ci` (#47040)
    * Add tiny_model_id support to ProcessorTesterMixin for memory-sensitive tests (#47005)
    * Install in docker (#46910)
    * [CI] Use pre-computed `_OLD_MODELS` in `test_new_models_require_torchvision_backend` (#46882)
    * Fix secondary rate limit when downloading artifacts in slack report (#46796)
    * [CI] Fix artifact download path in self-comment-ci workflow (#46769)
    * ci: add comment explaining why secrets are not inherited in security gate (#46750)
    * ci: trigger PR CI on ci-* branches (#46746)
    * ci: disable CircleCI by replacing config with no-op (#46721)
    * ci: grant pull-requests:write to the security gate caller (#46715)
    * Reduce per_page from 100 to 50 in GitHub API calls to avoid server errors (#46678)
    * ci: add NO_COLOR=1 to suppress ANSI color codes in CI output (#46659)
    * ci: add merge_group trigger to pr-ci-caller.yml (#46668)
    * Revert "Disable PR CI workflow for PRs from forked repo. during the weekend" (#46652)
    * Disable PR CI workflow for PRs from forked repo. during the weekend (#46609)
* @Mi-Jiazhi
    * Add HunYuan VL model (#46417)
* @tarekziade
    * chore(linter): add TRF018 modeling rule (#46259)
    * only in the original repo (#46982)
    * the CI status should be a comment (#46976)
    * Insert a Grafana badge in the PR (#46774)
    * call transformers-ci in a nightly run (#46811)
* @casinca
    * Add Xiaomi MiMo-V2 (#45144)
* @JJJYmmm
    * [new model] Add Zyphra/ZAYA1-8B (#45862)
* @ebezzam
    * Fix typo in Qwen3 ASR no_split_module (#47002)
    * Fix Xcodec2 attention to be non-causal. (#46963)
    * Use common floats_list method for feature extractor tests. (#46956)
    * Add xcodec2 model (#44178)
* @meatybobby
    * Add support for RADIO models (#46425)
* @douglas-reid
    * 🚨 [gemma 3/4] Fix bidirectional attention masking crossing sliding window boundaries (#46850)
* @Sunt-ing
    * Fix Mamba2 chunked-prefill / speculative decoding for Zamba2, Nemotron-H, Bamba, FalconH1 and GraniteMoeHybrid (#46741)
    * Reject assisted generation for LFM2 and LFM2-MoE (set _is_stateful) (#46937)
    * Don't pin the gated delta net norm to `cuda:0` with a hardcoded device (#46817)
    * Fix prompt lookup decoding crash when no EOS token is configured (#46790)
    * Fix left-padding token selection in `BioGptForSequenceClassification` (#46782)
    * Fix offloaded cache device mismatch on hybrid models (#46748)
    * Fall back to the for-loop grouped_mm on CPU (#46743)
* @eustlb
    * Add Nemotron 3.5 ASR Streaming (#46565)
    * [NemotronAsrStreaming] fix pipeline (#46870)
    * [NemotronAsrStreaming] processor without modular (#46865)
    * Add Nemotron ASR Streaming (#46332)
    * [fix] enable base64 str audio in load_audio (#46694)
* @vasqu
    * [`Dia`] Fix docs (#46923)
    * [`CB`] Add FA2 to the fast path (#46729)
    * [`Kernels`] Trigger proper kernelization on `use_kernels=True` (#46755)
    * [`CI`] Fix some failures introduced by myself :grimacing:  (#46751)
    * :rotating_light: [`Kernels`] Sync to latest version (#46039)
    * [`Templates`] Update members (#46720)
    * [`Blip2`] Fix cross attention reshape (#46695)
    * Update post release (#46608)
* @mbtariq82
    * Qwen3 ASR and Forced Aligner (#43838)
* @remi-or
    * [CB] Changes to increase max_batch_tokens (#46712)
    * [CB] Fix issues with FA read / writes (#46765)
    * [CB] Fix offloading (#46587)
    * [Fix] Serve drops some attributes at serialization (#46680)
    * [CB] Slice logits inside the model (#46660)
    * [CB] Fix seqlens and use TypedDict (#46593)
* @jiqing-feng
    * Fix BitNet packed-weight unpacking dtype (`F.linear` dtype mismatch) (#46808)
    * Fix Evolla eager attention for the GQA text decoder (#46860)
    * Fix flex_attention block mask creation when `get_seq_length` returns a tensor (#46802)
    * Lazily build the default kernel mapping to decouple `kernels` from normal transformers usage (#46681)
* @bzantium
    * Add MiniCPM3 (#41116)
* @MHRDYN7
    * Add Videoprism (#39895)
* @YangKai0616
    * [RecurrentGemma] Support attn_implementation dispatch (#46320)
    * [blip_2] Support attn_implementation dispatch (#46401)
    * [CTRL] Support attn_implementation dispatch (#46073)

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.13.0` · 2026-07-03 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
