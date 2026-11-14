---
title: "transformers v5.23.0"
project: "transformers"
repo: "huggingface/transformers"
tag: "v5.23.0"
version: "v5.23.0"
published: "2026-11-13"
type: "minor"
lang: "en"
summary: "Inkling 2 Small is a multimodal model from Thinking Machines Lab that accepts text and image inputs and generates text outputs, and it is intended for use in English and other languages and across multiple coding…"
---

# transformers v5.23.0

# Release v5.23.0


## New Model additions

### Inkling2

<img width="1200" height="675" alt="image" src="https://github.com/user-attachments/assets/9115e142-1be3-4f79-a51d-ea0e5c25b152" />

Inkling 2 Small is a multimodal model from Thinking Machines Lab that accepts text and image inputs and generates text outputs, and it is intended for use in English and other languages and across multiple coding languages. Its language backbone has 48 mixture-of-experts decoder layers, each routing tokens to 8 of 384 experts, for 594B total and 17B active parameters. It keeps the Inkling decoder (learned relative attention, short causal convolutions, mixture-of-experts layers) and adds block attention residuals, gated attention with a learned sink, and dynamic key/value convolutions. Images are encoded by a Perception Encoder-based vision transformer and projected into the language model embeddings, one embedding per 40x40 pixel patch.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/inkling2) | [Blog Post](https://thinkingmachines.ai/news/inkling-2-small/)
* Add inkling2 (#50682) by @guarin in [#50682](https://github.com/huggingface/transformers/pull/50682)

### JEV

JEV is a decision head that scores single-token labels with a linear layer at the last token of the prompt, soft-capped like the logits of a language model head. `JevForDecision` is the model of the checkpoint and its head, and it reads the head files shipped next to the weights (`head.safetensors` and `judge_config.json` for JEV). The same head is also used by GEV and reads the 255 answer codes of pplx-decider and d3, and it can be run through the experimental `decision` pipeline or directly with `decide`.

**Note:** JEV and the decision pipeline are currently experimental. Their APIs, configuration, and behavior may change as development continues. They should be used with caution in production environments.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/jev)
* Add Jev + decision core (#50054) by @ArthurZucker in [#50054](https://github.com/huggingface/transformers/pull/50054)

### LFM3

<img width="732" height="815" alt="image" src="https://github.com/user-attachments/assets/5a67fe26-2cee-4bbf-bc51-65e8f843b756" />

LFM3 is the third generation of Liquid Foundation Models from Liquid AI. Like LFM2, it is a hybrid architecture that combines gated short convolutions with grouped-query attention, with the attention layers split between full-attention and sliding-window layers. The attention layers apply RMSNorm to the query and key heads and gate their output with a per-head sigmoid. Every layer applies a sandwich norm to the operator and feed-forward outputs before the residual addition.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/lfm3)
* [Model] LFM3 Family: LFM3-Text (#50322) by @paulpak58 in [#50322](https://github.com/huggingface/transformers/pull/50322)

### Dots 3 Note Preview

Dots 3 Note Preview is a mixture-of-experts causal language model that accepts native text, image, video, and audio inputs. It uses a shared vision encoder for images and videos and a Whisper-style audio encoder, and both encoders project their outputs into the language model's hidden space before autoregressive text generation. BF16 and FP8 inference are supported.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/dots3_note)
* Add dots3-note Preview model support (#47844) by @miraclezqc in [#47844](https://github.com/huggingface/transformers/pull/47844)

### LFM3-VL

LFM3-VL is a vision-language model family from Liquid AI, built on the LFM3 language model. It takes images and videos at their native resolution together with text. It combines a hybrid vision encoder (a linear patchifier, gated depthwise 2D convolution layers, and bidirectional grouped-query attention layers with 2D rotary embeddings) with a projector and an LFM3 language model. The projector merges each 2x2 block of patch features into one language token through a layer norm and a two-layer MLP.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/lfm3_vl)
* [Model] LFM3 Family: LFM3-VL (#50392) by @paulpak58 in [#50392](https://github.com/huggingface/transformers/pull/50392)

### IQuestCoder

IQuest-Coder-V1 is a family of code language models developed by IQuest Lab, available in 7B, 14B and 40B sizes with base, instruct and thinking variants. Its architecture is the same as Llama, so the Transformers auto classes load it with LlamaModel and LlamaForCausalLM, and only IQuestCoderConfig is specific to IQuestCoder. The looped `IQuest-Coder-V1-*-Loop-*` checkpoints use a different architecture and aren't supported.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/iquestcoder)
* Add IQuestCoder (#50579) by @hmellor in [#50579](https://github.com/huggingface/transformers/pull/50579)

### InternLM3

InternLM3 is an 8B instruction-tuned language model developed by Shanghai AI Laboratory (checkpoint: internlm/internlm3-8b-instruct). Its architecture is the same as Llama, so the auto classes load it with the Llama implementation (LlamaModel and LlamaForCausalLM), and only InternLM3Config is specific to InternLM3. The config names the attention biases `qkv_bias` and the output projection and MLP biases `bias`. InternLM3Config loads these as `attention_bias` and `mlp_bias` and requires them to be equal, as they are in the released checkpoints.

**Links:** [Documentation](https://huggingface.co/docs/transformers/main/en/model_doc/internlm3)
* Add InternLM3 (#50578) by @hmellor in [#50578](https://github.com/huggingface/transformers/pull/50578)



## Breaking changes

* 🚨 Remove the `ep_router` expert-parallel style (#49615) by @IlyasMoutawwakil
* 🚨 Run MXFP4 GPT-OSS experts through `ep_dispatch_experts` (#49613) by @IlyasMoutawwakil
* 🚨 `deepgemm_megamoe` EP implementation for DeepGEMM Mega MoE (#49606) by @IlyasMoutawwakil
* 🚨 Slim down `[audio]` to torchaudio + soundfile + soxr (drop librosa and phonemizer) (#50610) by @eustlb
* 🚨 Deprecate Wav2Vec2ProcessorWithLM and pyctcdecode/kenlm LM decoding (#50408) by @eustlb
* 🚨 Exporters: `ExportedModel`, Hub save/load, one backend registry (#50029) by @IlyasMoutawwakil
* 🚨 Move processing defaults to class (#49089) by @guarin
* :rotating_light: [`kernels`] Bump version (#50307) by @vasqu
* :rotating_light: Finally drop rope deltas from ModelOutput! (#50153) by @zucchini-nlp
* 🚨 Safe-ize pi0 graphs (#50160) by @molbap
* 🚨 [serve][breaking] update attn for mac users  (#49730) by @SunMarc
* 🚨 build and expand once the tp/ep_plan/fsdp_plan (#49527) by @3outeille


## Exporters: export, share and run any model on its backend (#50029, #50032, #50309, #50311)

https://github.com/user-attachments/assets/2b17b2ab-b2b8-4e34-a983-4a7177330e4e

Every export now returns an `ExportedModel`. You call it like the original model (same kwargs, same output class), push it to the Hub, and load it back on the backend's own runtime. The same API covers Dynamo, ONNX Runtime, OpenVINO and ExecuTorch.

```python
from transformers import AutoModel, AutoTokenizer
from transformers.exporters import ExportedModel, OnnxConfig, OnnxExporter

model = AutoModel.from_pretrained("google/embeddinggemma-2")
tokenizer = AutoTokenizer.from_pretrained("google/embeddinggemma-2")
inputs = tokenizer(["Exporters are here!"], return_tensors="pt")

exported = OnnxExporter().export(model, inputs, OnnxConfig(dynamic=True, ort_fusions="cuda"))
exported.push_to_hub("my-org/embeddinggemma-2-onnx")

exported_model = ExportedModel.from_pretrained("my-org/embeddinggemma-2-onnx", device="cuda")
outputs = exported_model(**inputs)  # same output class as model(**inputs)
```

- **Fused for the runtime**: `OnnxConfig(ort_fusions="cpu" | "cuda" | "webgpu" | "dml")` rewrites the graph into ONNX Runtime's fused transformer ops at export time: attention, `GroupQueryAttention` over the KV cache, rotary, norms and `MoE`. OpenVINO exports now hit OpenVINO's fused CPU kernels for attention, RoPE, MoE experts and compressed int8/int4 weights, which makes decode 2.4–3.9× faster than before.
- **Faster than `torch.compile`**: on EmbeddingGemma2 (8 × 128 tokens), ONNX Runtime with the TensorRT EP is 7.6× faster than eager PyTorch and 1.4× faster than `torch.compile` on an A100. OpenVINO is 4.1× faster than eager and 2.2× faster than `torch.compile` on a Xeon Platinum 8570 (4.9× and 2.6× with int8 weights).
- **Shareable**: an export saves and loads like a model, optionally in a `subfolder` of the model repo. Its `export.json` records the config, input shapes, package versions and I/O names. Quantized exports (PT2E, NNCF, ONNX Runtime) save and run the same way.

🚨 `export()` returns an `ExportedModel`, and an ONNX program is an `onnx_ir.Model`. `OnnxConfig`'s and `OpenVINOConfig`'s `output_path` options are gone in favour of `save_pretrained`. Custom backends register with `register_backend`.

📚 Docs: https://huggingface.co/docs/transformers/main/en/exporters


## Vision

This release fixes a range of vision-model bugs: classification pipelines now respect `problem_type`, and several models get corrected behavior (Step3.7 RoPE axis order, MiniMax-M3-VL packed attention isolation, Qwen VL positions with reused caches, PaddleOCR-VL interpolation alignment, Kosmos2 SDPA masking, and Emu3 float image handling). Chunked prefill now keeps image inputs on the


* fix(pipelines): respect problem_type in image and video classification pipelines (#50582) by @surendra902 in [#50582]
* Fix Step3.7 vision RoPE spatial W/H axis order (#50547) by @caohch-1 in [#50547]
* Raise ValueError for out-of-range float images in convert_to_rgb (#50487) by @n24q02m in [#50487]
* CI: install OpenVINO and NNCF in the daily GPU image (#50422) by @IlyasMoutawwakil in [#50422]
* Fix MiniMax-M3-VL packed vision attention isolation (#50346) by @taking-lying-flat in [#50346]
* Fix Qwen VL positions when a text cache is reused with a new image (#50427) by @Arnav66692 in [#50427]
* [Docker] Update Nvidia CI and Flash Attn CI images to torch 2.15 / cu132 (#50467) by @ydshieh in [#50467]
* Fix PaddleOCR-VL vision position interpolation alignment (#50384) by @scyyh11 in [#50384]
* Fix Emu3 image processor crash on float numpy images (#50226) by @simpleqt in [#50226]
* Build Idefics-style vision position ids with torch.where (#49917) by @shoumikhin in [#49917]
* Keep image inputs on the first chunk of a chunked prefill (#49753) by @digit50 in [#49753]
* Docs: note in the v5 migration guide that hidden_states[-1] of vision models is pre-norm (#50303) by @ravediamond in [#50303]
* Remove the GitHub API cache-bust from the AMD docker images (#49351) by @tarekziade in [#49351]
* [docs] Vision backend differences (#50131) by @stevhliu in [#50131]
* [Kosmos2] Fix SDPA applying a causal mask in the image-to-text projection (#50118) by @tarekziade in [#50118]


## Parallelization

This release improves distributed training and inference. Expert parallelism gains a selectable `ep_implementation` (all-reduce for CUDA-graph-friendly inference, all-to-all for training). The Trainer now reduces FSDP/HSDP gradients only on the last micro-batch, and the token-count normalization is fixed to use true division. Tensor-parallel fixes cover attention sinks (including Beam attention) and tied-weight comparisons on TPU


* Expert-parallel implementations for `ep_dispatch_experts`: all-reduce at inference, all-to-all in training (#49429) by @IlyasMoutawwakil in [#49429]
* [FSDP tests] Fork CPU ranks from a forkserver instead of spawning them (#50444) by @ydshieh in [#50444]
* [distributed - TPU] Fix tied-weight comparisons on TPUs when using TP (#50406) by @tengomucho in [#50406]
* [`distributed`] Trainer: reduce FSDP/HSDP gradients on the last micro-batch only (#50286) by @3outeille in [#50286]
* Update FSDP non-rank-0 missing keys test after #45649 (#50260) by @SunMarc in [#50260]
* [`Beam`] Fix TP on attn (#50302) by @vasqu in [#50302]
* Fix/trainer parallel token count 50212 (#50214) by @BlazeSR10hawk in [#50214]
* Reuse the TP/EP test ranks across tests instead of spawning them per test (#49986) by @3outeille in [#49986]
* handle local sink in TP (#49567) by @3outeille in [#49567]


## Cache

This release fixes several cache correctness issues: static-cache prefill attention in Gemma4's KV-shared layers, Qwen VL positions when a cache is reused with a new image or video, and DeepSeek-V4 compression-state reordering during beam search. It also improves cache sharing for Mistral Large 4 and adds OpenVINO export fusion for the KV cache and attention. Smaller changes cover CI and test fixes, including vLLM CI memory


* Gemma4: fix static cache attending to empty cache slots in KV-shared layers at prefill (#50528) by @ydshieh in [#50528]
* vLLM CI: fix install and KV-cache memory, add failure report job (#50436) by @ydshieh in [#50436]
* Fix DeepSeek-V4 compression cache reordering for beam search (#50348) by @taking-lying-flat in [#50348]
* OpenVINO exporter: let OpenVINO fuse attention, RoPE, the KV cache and compressed matmuls (#50311) by @IlyasMoutawwakil in [#50311]
* [tests] Pin the chat-template date in Llama's FA static-cache test (#50296) by @tarekziade in [#50296]
* Fix a cache test (#50320) by @Cyrilvallez in [#50320]
* Improve Mistral Large 4 cache sharing (#50305) by @Cyrilvallez in [#50305]


## Kernels

This release fixes several hub kernel issues: the MPS RMSNorm kernel repo id was corrected, the MegaBlocksMoeMLP mapping was restored for MXFP4 GPT-OSS, and a failed flash-attention kernel load is now retried instead of leaving models unregistered. It also raises the minimum `kernels` version (fixing ROCm issues and a multi-GPU bug), bumps mamba-ssm kernels to v4


* Fix the MPS RMSNorm hub kernel repo id (#50714) by @tarekziade in [#50714]
* [`GptOss`] Fix the kernels autodispatch test (#50630) by @vasqu in [#50630]
* [`kernels`] Bump min version (#50509) by @vasqu in [#50509]
* Retry the attention kernel load after a failed `lazy_import_flash_attention` (#50391) by @albertvillanova in [#50391]
* Test the dispatched FA3 kernel per device (#50304) by @Abdennacer-Badaoui in [#50304]
* upgrade version for mamba-ssm and fla kernel (#50294) by @kaixuanliu in [#50294]
* Restore the `MegaBlocksMoeMLP` hub kernel mapping for MXFP4 GPT-OSS (#50150) by @jiqing-feng in [#50150]


## Attention

This release fixes a range of attention bugs: vision-attention isolation in MiniMax-M3-VL, SDPA decode under `torch.compile`, eager NaNs in Qwen4-Exp with left padding, an unintended causal mask in Kosmos-2's SDPA projection, and default full-attention mask selection that wrongly picked linear layers. It also retries failed attention kernel loads, excludes padding from the repetition penalty, and lets the O


* [`SDPA`] Fix decode under compile (#50388) by @vasqu in [#50388]
* Exclude attention-masked padding from repetition penalty (#50149) by @BlazeSR10hawk in [#50149]
* Fix Qwen4-Exp eager attention NaNs with left padding (#49923) by @taking-lying-flat in [#49923]
* [Masking] Skip linear layers for the default full-attention mask (#50059) by @paulpak58 in [#50059]


## Generation

This release fixes several generation bugs: padded generation in RecurrentGemma, batched decoding in Falcon-H1, beam search cache reordering in DeepSeek-V4, and batched metadata and beam scores in `TextGenerationPipeline`. It also lets an unchanged `GenerationConfig` be saved without strict-validation errors, avoids copying the KV cache when decoding with grouped-query attention (GQA), and fixes an `Attribut


* Fix RecurrentGemma padded generation by declaring its `layer_types` (#50577) by @ydshieh in [#50577]
* Fix Falcon-H1 gated RMSNorm shape during batched decoding (#50507) by @taking-lying-flat in [#50507]
* Allow saving an unchanged generation config (#49914) by @benthecarman in [#49914]
* Fold GQA query heads onto their KV head when decoding instead of repeating K/V (#49743) by @Yooniel in [#49743]
* fix(pipelines): preserve batched generation metadata (#50210) by @BlazeSR10hawk in [#50210]
* Fix AttributeError on LinearAttentionLayer in export generate test (#50140) by @ydshieh in [#50140]


## Quantization

This release fixes several quantization bugs: FP8 `modules_to_not_convert` entries are now renamed like weight names, so modules such as `f_a_proj` and `f_b_proj` are no longer wrongly quantized. MXFP4 experts now dequantize to the requested dtype instead of always using bfloat16. The `MegaBlocksMoeMLP` hub kernel mapping is restored for MXFP4 GPT-OSS, which fix


* fix some error in quantization xpu ci test (#49910) by @sywangyi in [#49910]
* Rename FP8 `modules_to_not_convert` entries like weight names (#50354) by @albertvillanova in [#50354]
* [docs] Common quantization tasks (#50095) by @stevhliu in [#50095]
* Dequantize MXFP4 experts to the requested dtype (#50256) by @qgallouedec in [#50256]
* [docs] Quantization (#50093) by @stevhliu in [#50093]


## Audio

This release makes audio handling more correct and robust. `AudioClassificationPipeline` now respects the model's problem type (raw outputs for regression, sigmoid for multi-label, softmax otherwise), and VibeVoice and VibeVoice-ASR avoid GPU syncs when removing audio padding and gain a `sample` argument to disable VAE noise for deterministic outputs. Chat templates can also take audio decoded from video via `{"type": "aud


* Tests: skip audio model tests when torchaudio or librosa is missing (#50423) by @IlyasMoutawwakil in [#50423]
* fix(pipelines): respect audio classification problem type (#50329) by @BlazeSR10hawk in [#50329]
* [VibeVoice] Avoid GPU syncs when removing audio padding (#50417) by @hmellor in [#50417]
* [VibeVoice] Add `sample` argument to disable VAE noise in audio features (#50179) by @hmellor in [#50179]
* Audio from video in jinja  (#49382) by @zucchini-nlp in [#49382]


## Bugfixes and improvements

* CI pass, CI no pass? (#50690) by @zucchini-nlp in [#50690]
* [`Gemma4`] Fix FA slicing (#50681) by @vasqu in [#50681]
* Restore the root-level PEFT adapter when resuming from a checkpoint w… (#50368) by @ziywang50 in [#50368]
* Granite for Docling (#49012) by @nassarofficial in [#49012]
* Move the remaining router-masked MoE plans to `ep_dispatch_experts` (#49607) by @IlyasMoutawwakil in [#49607]
* fix(tokenizers): stop treating a missing transformers_version as Mistral (#49733) by @cdcailf in [#49733]
* Load the released A.X-K1 checkpoints without unexpected or missing keys (#50644) by @hmellor in [#50644]
* Fix get_json_schema truncating multi-line argument descriptions (#50606) by @YusefSyed in [#50606]
* Make distributed Trainer tests actually resume from checkpoints (#49723) by @Titus-von-Koeller in [#49723]
* Fix Mask2Former _init_weights to match Meta's original initialization (#50596) by @KMaruthi2002 in [#50596]
* Fix Inkling router precision in BF16 and autocast (#50621) by @taking-lying-flat in [#50621]
* QA:  Make `make run-mic` easier to read and to target (#50652) by @tarekziade in [#50652]
* Fix `HfArgumentParser` on Python 3.15 (#50651) by @qgallouedec in [#50651]
* Avoid mutating input examples in DataCollatorForMultipleChoice (#50611) by @LKL-ZREO in [#50611]
* Fix XVector outputs of the wav2vec2 family when the TDNN layers are offloaded (#50646) by @ydshieh in [#50646]
* [`Offloading`] Fix tests for some models (#50631) by @vasqu in [#50631]
* [`FA`] Fix FA tests for unique models (#50632) by @vasqu in [#50632]
* Exporters: run exported models on their backend's runtime (`ModelRunner`) (#50032) by @IlyasMoutawwakil in [#50032]
* Exporters: ONNX Runtime fusions at export time (`OnnxConfig(ort_fusions=...)`) (#50309) by @IlyasMoutawwakil in [#50309]
*  ⚠️ i [`distributed`] Checkpoint the layer's `forward`, not `__call__`, so FSDP2 hooks stay outside the checkpoint (#50490) by @3outeille in [#50490]
* Fix Ministral3 and Mistral4 ignoring packed sequences under FlashAttention (#50450) by @EvanZhuang in [#50450]
* Support Enum in get_json_schema, raise on custom classes (#50583) by @Rocketknight1 in [#50583]
* Raise ValueError for empty conversation with continue_final_message in render_jinja_template (#50604) by @Mengxi-Xu in [#50604]
* QA: move to transformers-mlinter 0.1.6 (#50071) by @tarekziade in [#50071]
* fixed typo in docs - changed "a encoder-decoder" to "an encoder-decoder" (#50591) by @Peter-Bergman in [#50591]
* Revert "Add `transcription` input arg to `apply_transcription_request ` (#49869)" (#50587) by @ebezzam in [#50587]
* Bump doc-builder (#50550) by @stevhliu in [#50550]
* [docs] Output capturing (#50529) by @stevhliu in [#50529]
* Clarify that causal LM labels are shifted internally (#44642) by @joshuaswanson in [#44642]
* Avoid device -> host syncs in load_balancing_loss_func (#50463) by @ntenenz in [#50463]
* Fix grouped RMSNorm in Mamba2's non-fused path (#49744) by @taking-lying-flat in [#49744]
* Fix flaky ONNX export test for wav2vec2-style `ForPreTraining` models (argmax near-tie) (#50575) by @ydshieh in [#50575]
* Draft updates for contribution/agent rules (#49783) by @Rocketknight1 in [#49783]
* QA / Add a mic runner in Make (#50407) by @tarekziade in [#50407]
* [serge] Fix 8 integration tests for model `grounding_dino` failing with `output_mismatch` (tensor values differ (6), oth (#49886) by @sergereview[bot] in [#49886]
* Fix flaky `test_causal_lm_loss_honors_shift_labels` (#50533) by @ydshieh in [#50533]
* [Fix] Prevent duplicate weight renaming on save_pretrained for ALMs (#50265) by @mrutkows in [#50265]
* [docs] Agent-specific content (#50276) by @stevhliu in [#50276]
* Tester always passes `per_layer_config` (#50486) by @zucchini-nlp in [#50486]
* Drop None-valued keys from messages in `apply_chat_template` (#45422) by @qgallouedec in [#45422]
* [Models] Fix torch.compile fullgraph training across models when layerdrop=0.0 (#50475) by @aarushdubey in [#50475]
* [masking] Fix packed sequences for abitrary mask forms (#50513) by @Cyrilvallez in [#50513]
* Fix flaky `test_eager_matches_batched_and_grouped_inference` in fp16 / bf16 (#50500) by @ydshieh in [#50500]
* Skip the query/key head repeat for grouped value heads in gated DeltaNet (#49141) by @manav-simile in [#49141]
* Fix flaky backend equivalence tests with Pillow 13 (follow-up of #50105) (#50510) by @ydshieh in [#50510]
* fix: forward tool schemas to response parsers (#50385) by @BlazeSR10hawk in [#50385]
* Doge: note that the MoE router split is not causal in a full forward pass (#50420) by @Andreas-Hum in [#50420]
* Update the longrope inv_freq buffer in place (#50480) by @hmellor in [#50480]
* Keep the GLM-5.3-Flash mHC base and scale in float32 (#50413) by @albertvillanova in [#50413]
* fix failed cases for beam model (#50235) by @kaixuanliu in [#50235]
* [torch 2.15] Update qwen3_vl_moe FA2 integration test expected values (#50481) by @ydshieh in [#50481]
* fix(gemma3n): Clamp the AltUp magnitudes instead of using a CPU epsilon tensor (#50457) by @harshaljanjani in [#50457]
* [Mistral Large 4] Fix flaky test_left_padding_compatibility (#50479) by @ydshieh in [#50479]
* [torch 2.15] Update integration test expected values for A10 (cuda 8.6) (#50478) by @ydshieh in [#50478]
* Clarify warmup_steps error message to warmup_steps >= 0 (#50364) by @adi274903 in [#50364]
* [Gemma4] Stop prefill at last KV-owning layer when logits_to_keep=1 (#49640) by @pculliton in [#49640]
* Fix duplicated docstring (#50446) by @Cyrilvallez in [#50446]
* chore(ci): refresh workflow references (#50436) (#50437) by @hf-security-analysis[bot] in [#50437]
* [serge] Fix 2 integration tests for model `pegasus` failing with `other` (other (2)) (#49507) by @sergereview[bot] in [#49507]
* Harden our Jinja sandboxing (#50431) by @Rocketknight1 in [#50431]
* Weight loading: conversion ops declare many-to-many support, and four small loader fixes (#49773) by @IlyasMoutawwakil in [#49773]
* [loading] Fix mismatched keys being silently ignored (#50433) by @Cyrilvallez in [#50433]
* Capture only the projected hidden states in VLM feature extraction (#49594) by @hmellor in [#49594]
* [Mistral Large 4] Fix flaky test_cached_decode_matches_cacheless (#50435) by @ydshieh in [#50435]
* [`Colpali`] Fix offload tests (#50432) by @vasqu in [#50432]
* Fix! (#50430) by @zucchini-nlp in [#50430]
* [vLLM] Add Omni token counting and text replacement offsets for the Transformers backend (#49435) by @harshaljanjani in [#49435]
* Subconfig creation in testers (#49528) by @zucchini-nlp in [#49528]
* [`distributed`] Support HSDP with expert parallelism (#50293) by @3outeille in [#50293]
* [`distributed`] Add HSDP (`dp_replicate_size`) to `DistributedConfig` (#50285) by @3outeille in [#50285]
* ZeRO-3: read weights on rank 0 only and convert them one group at a time (#50284) by @3outeille in [#50284]
* Multmodal token count validation in processors (#49976) by @zucchini-nlp in [#49976]
* Remove deprecated refs (#50374) by @zucchini-nlp in [#50374]
* Fix Mistral Large 4 config (#50418) by @Cyrilvallez in [#50418]
* Fix flaky `Gemma4Audio2TextModelTest::test_training_gradient_checkpointing_use_reentrant_true` (#50410) by @ydshieh in [#50410]
* Fix flaky `T5GemmaModelTest::test_decoder_model_past_with_large_inputs` (#50409) by @ydshieh in [#50409]
* Don't pick torchcodec when it can't load or has no FFmpeg (#50362) by @eustlb in [#50362]
* [CB] Disable streams on MPS to fix continuous batching with torch 2.15 (#50404) by @Isalia20 in [#50404]
* Keep enabling checkpointing on models that only define gradient_checkpointing_enable (#50349) by @qgallouedec in [#50349]
* Fix flaky `Owlv2ModelTest::test_eager_matches_sdpa_inference_01_fp16_pad_left` (#50403) by @ydshieh in [#50403]
* Fix flaky `PocketTTSAudioTokenizerModelTest::test_batching_equivalence` on CPU (#50402) by @ydshieh in [#50402]
* fix(pipelines): validate zero-shot detection batch labels (#50318) by @BlazeSR10hawk in [#50318]
* [`distributed`] Divide the expert gradients once when `efsdp_size == 1` (#50292) by @3outeille in [#50292]
* [compressed-tensors] better path through conversion mapping (#50238) by @ArthurZucker in [#50238]
* Update PR CI to use torch 2.15 (#50361) by @ydshieh in [#50361]
* Do not touch torch internal compilation flags in chunked prefill (#50358) by @Cyrilvallez in [#50358]
* [`Rope`] Fix per layer rope in head dim manipulation (#49864) by @vasqu in [#49864]
* [`FA`] Fix head dim manipulation for more special models (#49862) by @vasqu in [#49862]
* Add `transcription` input arg to `apply_transcription_request` (#49869) by @ebezzam in [#49869]
* Revert linguistic changes (#50345) by @vasqu in [#50345]
* fix: preserve multiple candidates in multimodal pipelines (#50198) by @BlazeSR10hawk in [#50198]
* Replace torch.FloatTensor with torch.Tensor outside the model files (#50182) by @qgallouedec in [#50182]
* Import torchcodec lazily in processing_utils (#50325) by @eustlb in [#50325]
* Replace torch.FloatTensor with torch.Tensor in the model files (#50183) by @qgallouedec in [#50183]
* Restore BLT's 512-byte sliding windows (entropy patcher + local encoder/decoder) (#49188) by @hyunW3 in [#49188]
* [Video] Require one metadata entry per video and refuse return_metadata=False (#50060) by @paulpak58 in [#50060]
* Fix model_input_names singleton issue causing shared state (#42051) by @yashwantbezawada in [#42051]
* fix(fetcher): case-sensitive submodule check on case-insensitive filesystems (Windows) (#50326) by @ydshieh in [#50326]
* fix(cosmos3_edge): bump backend_equivalence_atol for Pillow 13.x (miss from #50105) (#50327) by @ydshieh in [#50327]
* feat(ci): runtime dep recorder — track transformers imports per test file (#50312) by @ydshieh in [#50312]
* Keep overrides of the deprecated gradient checkpointing methods working (#50310) by @qgallouedec in [#50310]
* perf(pipelines): lazy-load pipeline submodules in pipelines/__init__.py (#50173) by @ydshieh in [#50173]
* Fix Doge load balancing loss pairing expert loads with rank-ordered p… (#50266) by @Andreas-Hum in [#50266]
* Prevent deepspeed from downcasting rope Buffers (#50275) by @Cyrilvallez in [#50275]
* [`FA`] Fix old models that do not use a proper interface (#49859) by @vasqu in [#49859]
* Fix EncoderDecoderCache missing .layers in torch export tests (#50263) by @ydshieh in [#50263]
* Add SGLang compatibility tests to Transformers CI (#48891) by @adarshxs in [#48891]
* [`Moe`] Fix grouped mm fallback (#49857) by @vasqu in [#49857]
* Chat template output tensor type (#50103) by @zucchini-nlp in [#50103]
* [Distributed] Set `device_id` only for NCCL (#50281) by @michaelbenayoun in [#50281]
* [Trainer] Compile with static shapes when the backend is neuron (#49617) by @qgallouedec in [#49617]
* [Improvement] Formalize KV sharing (#47290) by @remi-or in [#47290]
* Docs: remove duplicate hf_token secret in build_documentation.yml (#50168) by @mishig25 in [#50168]
*  Fix `bboxes` being overwritten before use in `prepare_example` (#50218) by @Jose-Marcial-GF in [#50218]
* fix(tests_fetcher): handle `X as X` re-export syntax and duplicate module entries (#50253) by @ydshieh in [#50253]
* Read add_bos_token and add_eos_token from GGUF files (#49649) by @francip in [#49649]
* deal with Nan values for aggregating loss (#50172) by @SunMarc in [#50172]
* Fix OOM regression for FSDP2 + cpu_ram_efficient_loading on large models (#45649) by @AmineDiro in [#45649]
* [serge] Fix 2 integration tests regressed by commit 7d3ae42ee810 (PR #49811) (#50098) by @sergereview[bot] in [#50098]
* Fix resize_embeddings tests for deepspeed (#49909) by @kaixuanliu in [#49909]
* fix failed test cases for pocket_tts model (#50159) by @kaixuanliu in [#50159]
* fix(tests_fetcher): use posix paths throughout, eliminate all os.path.sep/os.path.join patterns (#50219) by @ydshieh in [#50219]
* [Gemma4] Pass num_frames_per_video to get_video_features in forward (#50237) by @yzkkai in [#50237]
* fix Load DETR-family panoptic masks with load_image_as_tensor (#50234) by @dhekimian in [#50234]
* update to torch 2.15 for xpu (#50236) by @sywangyi in [#50236]
* Use repo-wide linguist-generated globs so new models don't touch .gitattributes (#50181) by @ArthurZucker in [#50181]
* Modular suffix overlap - allow non-model classes (#49754) by @zucchini-nlp in [#49754]
* [PaliGemma] Apply final logit softcapping (#50156) by @alejandrorodriguezalvarez884-dot in [#50156]
* [CI] Docs bot (#49999) by @stevhliu in [#49999]
* Fix ZeRO-3 init for composite models built via _from_config (#49982) by @kaixuanliu in [#49982]
* expose private parameter in `trainer.push_to_hub` (#49874) by @not-lain in [#49874]
* Trainer: `save_pretrained` on every rank for PEFT model (#49316) by @michaelbenayoun in [#49316]
* fix(glm4v): bump backend_equivalence_atol to 0.5 for Pillow 13 compatibility (#50170) by @ydshieh in [#50170]
* Allow untokenized output from `apply_transcription_request` (#49944) by @hmellor in [#49944]
* need to check model_type and model_name (#50128) by @itazap in [#50128]
* Add `TRANSFORMERS_SDPA_FORCE_GQA` envvar in `sdpa_attention_forward` (#49459) by @jakobknauer in [#49459]
* Fix `WatermarkDetector` p-value computation (#50123) by @jonasschaefer in [#50123]
* test: lazy-load pipeline classes to eliminate collection-phase noise (#50158) by @ydshieh in [#50158]
* Remove torch.jit.script (#50082) by @Rocketknight1 in [#50082]
* Docs: build English only, other languages are machine-translated (#50120) by @mishig25 in [#50120]
* Mark generated files as linguist-generated (#50061) by @ArthurZucker in [#50061]
* Standardise processing requires (#50042) by @guarin in [#50042]
* v5.23.0-dev0 (#50155) by @ArthurZucker in [#50155]
* [LwDetr] Initialize encoder heads like the detection heads (#50041) by @tarekziade in [#50041]
* [OneFormer] Fix loss computation when is_training=False (#50039) by @tarekziade in [#50039]
* Config annotations (#50067) by @zucchini-nlp in [#50067]
* Shard the parameters kept in float32 in their own FSDP2 group (#49501) by @qgallouedec in [#49501]
* [Qwen4 Exp] Fix _no_split_modules naming a class that does not exist (#50138) by @eilamc14 in [#50138]
* Fix check repo (#49899) by @zucchini-nlp in [#49899]
* Update MiniCPM OCR docs and tests (#50134) by @guarin in [#50134]
* Add CI dashboard badge when a pull request opens (#50106) by @tarekziade in [#50106]
* [docs] correct the MiniCPM-OCR link (#50052) by @airlsyn in [#50052]
* Remove expired deprecation cycles (#50037) by @Cyrilvallez in [#50037]
* Don't pass code_revision to non-Auto model classes in pipelines (#50126) by @Rocketknight1 in [#50126]
* feat(ci): surface pre-existing failures in PR run-slow comment (#50122) by @ydshieh in [#50122]
* [Fix] Remove WIP doc for Ml4 (#50124) by @remi-or in [#50124]
* [`FA`] Less flaky FA tests (#49861) by @vasqu (direct commit on main)

## Significant community contributions

The following contributors have made significant changes to the library over the last release:

* @tarekziade
    * Fix the MPS RMSNorm hub kernel repo id (#50714)
    * QA:  Make `make run-mic` easier to read and to target (#50652)
    * QA: move to transformers-mlinter 0.1.6 (#50071)
    * QA / Add a mic runner in Make (#50407)
    * [tests] Pin the chat-template date in Llama's FA static-cache test (#50296)
    * Remove the GitHub API cache-bust from the AMD docker images (#49351)
    * [Kosmos2] Fix SDPA applying a causal mask in the image-to-text projection (#50118)
    * [LwDetr] Initialize encoder heads like the detection heads (#50041)
    * [OneFormer] Fix loss computation when is_training=False (#50039)
    * Add CI dashboard badge when a pull request opens (#50106)
* @vasqu
    * [`Gemma4`] Fix FA slicing (#50681)
    * [`Offloading`] Fix tests for some models (#50631)
    * [`FA`] Fix FA tests for unique models (#50632)
    * [`GptOss`] Fix the kernels autodispatch test (#50630)
    * [`kernels`] Bump min version (#50509)
    * [`Colpali`] Fix offload tests (#50432)
    * [`SDPA`] Fix decode under compile (#50388)
    * [`Rope`] Fix per layer rope in head dim manipulation (#49864)
    * [`FA`] Fix head dim manipulation for more special models (#49862)
    * Revert linguistic changes (#50345)
    * :rotating_light: [`kernels`] Bump version (#50307)
    * [`Beam`] Fix TP on attn (#50302)
    * [`FA`] Less flaky FA tests (#49861)
    * [`FA`] Fix old models that do not use a proper interface (#49859)
    * [`Moe`] Fix grouped mm fallback (#49857)
* @nassarofficial
    * Granite for Docling (#49012)
* @miraclezqc
    * Add dots3-note Preview model support (#47844)
* @taking-lying-flat
    * Fix Inkling router precision in BF16 and autocast (#50621)
    * Fix grouped RMSNorm in Mamba2's non-fused path (#49744)
    * Fix Falcon-H1 gated RMSNorm shape during batched decoding (#50507)
    * Fix MiniMax-M3-VL packed vision attention isolation (#50346)
    * Fix DeepSeek-V4 compression cache reordering for beam search (#50348)
    * Fix Qwen4-Exp eager attention NaNs with left padding (#49923)
* @ydshieh
    * Fix XVector outputs of the wav2vec2 family when the TDNN layers are offloaded (#50646)
    * Fix RecurrentGemma padded generation by declaring its `layer_types` (#50577)
    * Fix flaky ONNX export test for wav2vec2-style `ForPreTraining` models (argmax near-tie) (#50575)
    * Gemma4: fix static cache attending to empty cache slots in KV-shared layers at prefill (#50528)
    * Fix flaky `test_causal_lm_loss_honors_shift_labels` (#50533)
    * Fix flaky `test_eager_matches_batched_and_grouped_inference` in fp16 / bf16 (#50500)
    * Fix flaky backend equivalence tests with Pillow 13 (follow-up of #50105) (#50510)
    * [FSDP tests] Fork CPU ranks from a forkserver instead of spawning them (#50444)
    * [torch 2.15] Update qwen3_vl_moe FA2 integration test expected values (#50481)
    * [Mistral Large 4] Fix flaky test_left_padding_compatibility (#50479)
    * [torch 2.15] Update integration test expected values for A10 (cuda 8.6) (#50478)
    * [Docker] Update Nvidia CI and Flash Attn CI images to torch 2.15 / cu132 (#50467)
    * vLLM CI: fix install and KV-cache memory, add failure report job (#50436)
    * [Mistral Large 4] Fix flaky test_cached_decode_matches_cacheless (#50435)
    * Fix flaky `Gemma4Audio2TextModelTest::test_training_gradient_checkpointing_use_reentrant_true` (#50410)
    * Fix flaky `T5GemmaModelTest::test_decoder_model_past_with_large_inputs` (#50409)
    * Fix flaky `Owlv2ModelTest::test_eager_matches_sdpa_inference_01_fp16_pad_left` (#50403)
    * Fix flaky `PocketTTSAudioTokenizerModelTest::test_batching_equivalence` on CPU (#50402)
    * Update PR CI to use torch 2.15 (#50361)
    * fix(fetcher): case-sensitive submodule check on case-insensitive filesystems (Windows) (#50326)
    * fix(cosmos3_edge): bump backend_equivalence_atol for Pillow 13.x (miss from #50105) (#50327)
    * feat(ci): runtime dep recorder — track transformers imports per test file (#50312)
    * perf(pipelines): lazy-load pipeline submodules in pipelines/__init__.py (#50173)
    * Fix EncoderDecoderCache missing .layers in torch export tests (#50263)
    * fix(tests_fetcher): handle `X as X` re-export syntax and duplicate module entries (#50253)
    * fix(tests_fetcher): use posix paths throughout, eliminate all os.path.sep/os.path.join patterns (#50219)
    * fix(glm4v): bump backend_equivalence_atol to 0.5 for Pillow 13 compatibility (#50170)
    * test: lazy-load pipeline classes to eliminate collection-phase noise (#50158)
    * Fix AttributeError on LinearAttentionLayer in export generate test (#50140)
    * feat(ci): surface pre-existing failures in PR run-slow comment (#50122)
* @eustlb
    * 🚨 Slim down `[audio]` to torchaudio + soundfile + soxr (drop librosa and phonemizer) (#50610)
    * 🚨 Deprecate Wav2Vec2ProcessorWithLM and pyctcdecode/kenlm LM decoding (#50408)
    * Don't pick torchcodec when it can't load or has no FFmpeg (#50362)
    * Import torchcodec lazily in processing_utils (#50325)
* @ebezzam
    * Revert "Add `transcription` input arg to `apply_transcription_request ` (#49869)" (#50587)
    * Add `transcription` input arg to `apply_transcription_request` (#49869)
* @paulpak58
    * [Model] LFM3 Family: LFM3-VL (#50392)
    * [Model] LFM3 Family: LFM3-Text (#50322)
    * [Video] Require one metadata entry per video and refuse return_metadata=False (#50060)
    * [Masking] Skip linear layers for the default full-attention mask (#50059)
* @ArthurZucker
    * Add Jev + decision core (#50054)
    * [compressed-tensors] better path through conversion mapping (#50238)
    * Use repo-wide linguist-generated globs so new models don't touch .gitattributes (#50181)
    * Mark generated files as linguist-generated (#50061)
    * v5.23.0-dev0 (#50155)
* @harshaljanjani
    * fix(gemma3n): Clamp the AltUp magnitudes instead of using a CPU epsilon tensor (#50457)
    * [vLLM] Add Omni token counting and text replacement offsets for the Transformers backend (#49435)
* @remi-or
    * [Improvement] Formalize KV sharing (#47290)
    * [Fix] Remove WIP doc for Ml4 (#50124)

---

> **Source** [huggingface/transformers](https://github.com/huggingface/transformers) · `v5.23.0` · 2026-11-13 · [upstream release](https://github.com/huggingface/transformers/releases/tag/v5.23.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
