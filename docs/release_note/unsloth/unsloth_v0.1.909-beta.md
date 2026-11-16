---
title: "unsloth v0.1.909-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.909-beta"
version: "v0.1.909-beta"
published: "2026-10-19"
type: "pre"
lang: "en"
summary: "DeepSeek-V4.1-Flash-1017 and FLUX.3 Image Klein are here! Run both locally in Unsloth. Also new: images and videos in chat, multi-GPU training with FSDP2 (alpha) and one-command MCP setup for coding agents."
---

# unsloth v0.1.909-beta

DeepSeek-V4.1-Flash-1017 and FLUX.3 Image Klein are here! Run both locally in Unsloth. Also new: images and videos in chat, multi-GPU training with FSDP2 (alpha) and one-command MCP setup for coding agents.

## Highlights

- **DeepSeek-V4.1-Flash-1017**: 552B (16B active) - runs on ~125 GB at 1-bit with its Engram table on SSD [Guide](https://unsloth.ai/docs/models/deepseek-v4.1-flash)
- **FLUX.3 Image Klein**: Runs on 24 GB and edits with up to 10 reference images [GGUF](https://huggingface.co/unsloth/flux-3-image-klein-GGUF)
- **One-command MCP setup**: `unsloth mcp add` connects Claude Code, Codex or Cursor to Unsloth.
- **Images and videos in chat**: Local chat models use the image or video model loaded beside them.
- **Qwen-Image-Edit-2509 and 2511**: Edit with up to 3 images at once.
- **Token preview**: See what your model will learn before training starts.

## DeepSeek-V4.1

- Run DeepSeek-V4.1-Flash-1017, an update to DeepSeek-V4.1-Flash with better reasoning, coding and agentic results, and shorter outputs. It has 552B parameters plus 196B in its Engram table, about 16B active, and 1M tokens of context. With the Engram table left on SSD, it runs in about 125 GB of memory at 1-bit, or 300 GB at 4-bit. [Guide](https://unsloth.ai/docs/models/deepseek-v4.1-flash) · [GGUF](https://huggingface.co/unsloth/DeepSeek-V4.1-Flash-1017-GGUF)
- DeepSeek-V4.1-Flash-1017 scores 42.3 on Terminal-Bench 4.0, up from 31.2 for the earlier DeepSeek-V4.1-Flash.
- Thinking is on by default at high effort. Choose any effort from low to max, or turn thinking off.

## FLUX.3 Image Klein

- Generate and edit images with Black Forest Labs' FLUX.3 Image Klein, a 5.6B model that renders text and edits with up to 10 reference images. It runs on 24 GB of GPU memory, its GGUFs also run on computers without a supported GPU, and the undistilled Klein Base is available too. [GGUF](https://huggingface.co/unsloth/flux-3-image-klein-GGUF) · [Base GGUF](https://huggingface.co/unsloth/flux-3-image-klein-base-GGUF)
- Enhance prompt, on by default, expands short prompts into detailed captions, which fixes most distorted bodies in hard poses. Preview shows the caption so you can copy or edit it.

## Images + video

- Qwen-Image-Edit-2509 and Qwen-Image-Edit-2511 now accept up to 3 images per edit.
- Set custom video sizes and aspect ratios in Create videos, or pick one of the model's trained sizes.
- Start an edit straight from an image's menu in the Images gallery or the Library, or drag a generated image onto an image picker on the Images page.
- Image and video models with a large text encoder now load a quantized encoder by default where the GPU supports it, cutting the encoder's memory by up to half and loading faster. LTX-2.5 no longer needs a Hugging Face login.

## Chat + Desktop

- Image, video and Read aloud speech models can now stay loaded beside your chat model on computers with a dedicated GPU. Pick When they fit or Always in Settings > Resources > Model memory.
- With the Images pill on, a local chat model can use the image or video model loaded beside it to make images and playable videos in the chat.
- After an image or video model replaces your GGUF chat model, the chat continues without re-reading the conversation, as long as Keep chat context across unloads is on.
- In Unsloth Desktop, choose an existing working folder when creating a project.
- Unsloth Desktop no longer crashes at startup on older macOS versions, and its browser panel works on macOS 27 and follows system proxies such as Clash.

## Training

- In Python, spread LoRA, QLoRA and full fine-tuning across GPUs with FSDP2, and split long sequences, including packed ones, with `context_parallel_size`. Check the machine first with `unsloth doctor --gpus`.
- On the Train page, Preview tokens shows which parts of your dataset the model trains on and flags samples cut off by the context limit. Data Recipe chats now train as multi-turn conversations, and Qwen fine-tunes keep a dataset's `thinking` text.
- Cut full fine-tuning optimizer memory with `optim = "adamw_flash"`, or set `UNSLOTH_OFFLOAD_OPTIMIZER_STATE=1` to keep optimizer state in system memory between steps at some cost in speed.

## Performance

- Local GGUF chats with tools now show replies as fast as the model writes them, so the next tool call no longer waits, and long replies no longer slow down as they grow.
- LoRA training with `lora_dropout` or `lora_bias` now runs on Unsloth's fused kernels, about 28% faster per step.
- Gemma 4's global attention layers train on a new kernel on NVIDIA Ampere or newer GPUs, with 1.4x to 2.1x faster attention and up to 4.9x less attention memory.
- Qwen3.8-Flash-Next on MLX is up to 1.4x faster on M5 Macs and up to 1.2x faster on M1 to M4 Macs.
- On M1 to M4 Macs, 4-bit and 8-bit MLX models generate several chats at once up to 1.8x faster.

## Coding agents

- Connect Claude Code, Codex or Cursor to Unsloth's MCP server with `unsloth mcp add claude-code` (or `codex`, `cursor`).
- Agents can upload datasets, start training and load the resulting checkpoint.
- Agents can also download models ahead of time, preview what a model load will download or unload, and queue video generation jobs.

## Models + settings

- Filter downloaded models by capability or format, including Exports & Fine-tunes, and search for a maker such as DeepSeek or Meta to list Unsloth's uploads of its models.
- QwenCloud and Z.ai are now available as API providers.
- Export token usage from Profile stats as CSV.
- `unsloth run` passes llama-server short flags such as `-ctv`, `-dev` and `-ctxcp` through unchanged.

## Hardware compatibility

- PCs without an NVIDIA GPU or ROCm, such as Snapdragon laptops and Linux ARM boards, now run GGUFs on their GPU through Vulkan instead of the CPU.
- NVIDIA MIG slices are sized and selected correctly, and machines that mix GPU generations get settings and llama.cpp builds every GPU can run.
- On Linux machines with an AMD Strix APU and a discrete AMD GPU, PyTorch is installed for the discrete GPU. On Windows AMD PCs with the HIP SDK, Settings > System no longer asks for administrator access.
- Windows on ARM PCs can now turn on Sandbox High in Settings > Sandbox.
## Download Unsloth Desktop

Unsloth Desktop is **free and open source**. Download it for:
<table>
  <tr>
    <td><b>Platform</b></td>
    <td><b>Link</b></td>
  </tr>
  <tr>
    <td><b>Windows</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Windows.exe'>Download</a></td>
  </tr>
  <tr>
    <td><b>macOS</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-MacOS.dmg'>Download</a></td>
  </tr>
  <tr>
    <td><b>Linux x64 / Ubuntu (deb)</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Ubuntu.deb'>Download</a></td>
  </tr>
  <tr>
    <td><b>Linux ARM64 / Ubuntu 24.04+ (deb)</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Ubuntu-ARM64.deb'>Download</a></td>
  </tr>
  <tr>
    <td><b>Linux x64 (AppImage)</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Linux.AppImage'>Download</a></td>
  </tr>
  <tr>
    <td><b>Windows ARM64</b></td>
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/Unsloth-Desktop-Windows-ARM64.exe'>Download</a></td>
  </tr>
</table>



## What's Changed
* Bump install.sh / install.ps1 pins to unsloth>=2026.10.6, unsloth-zoo>=2026.10.6 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13918
* Studio: preview tokens and the completion mask before training by @danielhanchen in https://github.com/unslothai/unsloth/pull/13850
* Locate the MTP drafter-drop fallback by its shape, not one spelling by @danielhanchen in https://github.com/unslothai/unsloth/pull/13922
* Fix main's red Backend CI after #13850 and #13806 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13930
* Studio: do not re-send the image generate POST after a dropped connection by @drakeo338 in https://github.com/unslothai/unsloth/pull/13790
* NVFP4: decode weight tiles inside the GEMM for small-batch forward and dX by @danielhanchen in https://github.com/unslothai/unsloth/pull/13840
* Fix main's red CI: UI font tokens in the token preview, real-CUDA skip guards by @danielhanchen in https://github.com/unslothai/unsloth/pull/13936
* NVFP4 tests: real-CUDA skip guards, and format the files #13840 left off the hook by @danielhanchen in https://github.com/unslothai/unsloth/pull/13937
* Studio: prefer NVIDIA Wayland dmabuf over static compositing-off by @indrajeetapache in https://github.com/unslothai/unsloth/pull/13892
* Baseline the unsloth-zoo 2026.10.6 and transformers 5.20.0 scan findings after review by @danielhanchen in https://github.com/unslothai/unsloth/pull/13949
* Add context parallelism support (SDPA only) by @danielhanchen in https://github.com/unslothai/unsloth/pull/4257
* Prebuilt CUDA wheels: pin NVIDIA's re-published CUDA 13.4.1 manifest (win_arm64) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13954
* GRPO: keep TRL's old logprob gate when using vLLM by @danielhanchen in https://github.com/unslothai/unsloth/pull/13856
* Refuse an explicit offload_layers swap under FSDP / DeepSpeed by @danielhanchen in https://github.com/unslothai/unsloth/pull/13857
* RMSNorm: opt-in saving of the norm output instead of its input (UNSLOTH_RMSNORM_SAVE_OUTPUT) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13868
* Add a Triton head_dim 512 attention kernel for Gemma-4 global layers by @danielhanchen in https://github.com/unslothai/unsloth/pull/13869
* Use side stream offload hooks for non-reentrant gradient checkpointing by @danielhanchen in https://github.com/unslothai/unsloth/pull/13872
* GRPO: opt-in parking of optimizer state and gradients on host during rollout by @danielhanchen in https://github.com/unslothai/unsloth/pull/13866
* Studio: automatic image/video loads pick the freest GPU, and GPU picks respect what each card can run by @danielhanchen in https://github.com/unslothai/unsloth/pull/13928
* Studio installer (Windows AMD): treat hipinfo output as already mask-filtered when picking the gfx target by @danielhanchen in https://github.com/unslothai/unsloth/pull/13925
* Context parallel: Ulysses backend with packing and varlen attention by @danielhanchen in https://github.com/unslothai/unsloth/pull/13848
* GRPO packed logprobs: an OOM caps the packed length instead of disabling packing by @danielhanchen in https://github.com/unslothai/unsloth/pull/13877
* Build RoPE cos/sin caches only on the device that uses them by @danielhanchen in https://github.com/unslothai/unsloth/pull/13855
* Opt-in token-balanced and token-budget SFT micro-batches by @danielhanchen in https://github.com/unslothai/unsloth/pull/13878
* GRPO: exclude masked rows from clip_ratio metrics for one-token completions by @danielhanchen in https://github.com/unslothai/unsloth/pull/13883
* Studio installer: cover the GPUs CUDA_VISIBLE_DEVICES hides when picking the llama.cpp CUDA bundle by @danielhanchen in https://github.com/unslothai/unsloth/pull/13924
* Context parallel: Ulysses for Gated DeltaNet hybrids (Qwen3.5, Qwen3-Next) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13920
* Core: decide bfloat16, compile and TMA options from every visible NVIDIA GPU on mixed hosts by @danielhanchen in https://github.com/unslothai/unsloth/pull/13923
* Studio: the bot-check page's Unsloth Desktop link opens Get started by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13958
* Fix RMSNorm and LayerNorm backward overwriting the incoming gradient by @danielhanchen in https://github.com/unslothai/unsloth/pull/13888
* DPO, ORPO, CPO: opt-in fused preference loss (UNSLOTH_FUSED_PREFERENCE_LOSS=1) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13870
* Add opt-in optimizer state CPU offload (UNSLOTH_OFFLOAD_OPTIMIZER_STATE=1) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13882
* Studio: Deep research sits under Tools in the + menu by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13959
* fix(studio): load audio GGUFs selected from custom folders by @Imagineer99 in https://github.com/unslothai/unsloth/pull/13897
* Studio: name the open connection, lead the provider menu with Custom, new OpenRouter logo by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13964
* FSDP2: first-class LoRA and full finetuning, keep fused LoRA kernels per block by @danielhanchen in https://github.com/unslothai/unsloth/pull/13865
* Studio: proportional image attachments, attachment card and Chat with files polish by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13970
* Installers (AMD, Linux): a Strix APU defers torch to a discrete card, and a lone gfx1153 warns instead of getting kernel-less wheels by @danielhanchen in https://github.com/unslothai/unsloth/pull/13931
* Keep the plain capability cache on single-GPU hosts by @danielhanchen in https://github.com/unslothai/unsloth/pull/13962
* Add optim = "adamw_flash" (FlashAdamW from flashoptim) for lower optimizer memory by @danielhanchen in https://github.com/unslothai/unsloth/pull/13881
* Fused Qwen3 q_norm / k_norm RMSNorm + RoPE Triton kernel (opt-in) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13890
* GRPO: opt-in zero-variance group exclusion and prompt-level loss aggregation by @danielhanchen in https://github.com/unslothai/unsloth/pull/13891
* Tests: gate the optimizer state offload CUDA cases on a real CUDA device by @danielhanchen in https://github.com/unslothai/unsloth/pull/13982
* Studio: raise the startup bundle budget by the growth since 587079569a by @danielhanchen in https://github.com/unslothai/unsloth/pull/13983
* Studio: let safetensors and MLX vision models read transparent images by @NilayYadav in https://github.com/unslothai/unsloth/pull/13939
* Studio: honour MIG masks and size MIG cards by their slice by @danielhanchen in https://github.com/unslothai/unsloth/pull/13927
* Fix optimizer state offload crash with Q-GaLore weight quantization by @danielhanchen in https://github.com/unslothai/unsloth/pull/13979
* Context parallel: compose with FSDP2 on a (dp_shard, cp) mesh by @danielhanchen in https://github.com/unslothai/unsloth/pull/13910
* Studio: train a structured column's conversation as a multi-turn chat by @NilayYadav in https://github.com/unslothai/unsloth/pull/13940
* Studio: line the composer up with the chat column in the macOS Desktop app by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13965
* Studio: fix the context meter after tool calls on MLX and transformers by @NilayYadav in https://github.com/unslothai/unsloth/pull/13913
* Studio: resizable Model hub split view, smaller row kebab, centred token icon by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13966
* Studio: rank Latest Unsloth Models by trending weighed against release age by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13969
* Studio: draw chat markdown tables inline with hover controls and a centered expand dialog by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13973
* Studio: Models panel part of its card, even form footer, OpenRouter mark under a new file name by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13974
* Studio: even 17px spacing in the Hub filter popover by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13972
* Sync full finetune weights into colocated vLLM in a few load_weights calls by @danielhanchen in https://github.com/unslothai/unsloth/pull/13901
* Studio: keep the tool results of the turn in progress when compaction resets mid-turn by @oobabooga in https://github.com/unslothai/unsloth/pull/13951
* GRPO: keep TRL vLLM weight sync on TRL < 0.28 unless fast_inference shares weights by @danielhanchen in https://github.com/unslothai/unsloth/pull/13911
* RMSNorm save output: skip inference tensor weights, keep the default path free of opt-in checks by @danielhanchen in https://github.com/unslothai/unsloth/pull/13981
* Studio: hide safetensors models that exceed VRAM when the fit filter is on by @oobabooga in https://github.com/unslothai/unsloth/pull/13945
* GRPO no-grad packing: check the OOM length cap before flattening ids by @danielhanchen in https://github.com/unslothai/unsloth/pull/13980
* FSDP2: shard QLoRA 4-bit weights with fused LoRA kernels kept on by @danielhanchen in https://github.com/unslothai/unsloth/pull/13880
* FSDP2: save_pretrained, merged saves and 4-bit checkpoints for sharded models by @danielhanchen in https://github.com/unslothai/unsloth/pull/13895
* Add `unsloth doctor --gpus` multi-GPU preflight and UNSLOTH_DEBUG_DISTRIBUTED by @danielhanchen in https://github.com/unslothai/unsloth/pull/13884
* GRPO: latch the trainer's autocast precision on the efficient logprob path by @danielhanchen in https://github.com/unslothai/unsloth/pull/13968
* Studio: raise the startup bundle budget by the growth since 17901061d1 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13991
* Studio: Chat with files X hides the panel, app tooltips, and higher-contrast traces by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13989
* head_dim 512 attention: sm80+ only, no 256 MB autotune buffer, OOM falls back to SDPA, no per-call mask sync by @danielhanchen in https://github.com/unslothai/unsloth/pull/13977
* Tests: gate the new Q-GaLore offload CUDA case on a real CUDA device by @danielhanchen in https://github.com/unslothai/unsloth/pull/13994
* Studio: raise the startup bundle budget by #13989's growth by @danielhanchen in https://github.com/unslothai/unsloth/pull/13995
* Studio: scale the expanded markdown table's text with the UI font size by @danielhanchen in https://github.com/unslothai/unsloth/pull/13996
* Cover explicit RoPE position ids and compute the starting cache on CPU by @danielhanchen in https://github.com/unslothai/unsloth/pull/13976
* Studio: a hidden Chat with files panel stays hidden after the first message by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13999
* Studio: model picker ranks Recommended by the Model hub's Latest ranking by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13993
* Studio: searching a model maker in the Model hub lists Unsloth's uploads of its models by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13998
* Token budget: weight split-chunk TRL metrics by token count by @danielhanchen in https://github.com/unslothai/unsloth/pull/13978
* Add opt-in TFLOPs and MFU logging with LoRA aware FLOP counts by @danielhanchen in https://github.com/unslothai/unsloth/pull/13885
* Studio: raise the startup bundle budget by #13998's growth by @danielhanchen in https://github.com/unslothai/unsloth/pull/14004
* PEFT MoE conversion snapshot: add beam, which transformers main now fuses as qwen2_moe by @danielhanchen in https://github.com/unslothai/unsloth/pull/14005
* studiobench CI: boot Studio with update checks off so a mid-run llama.cpp release cannot cover the scene by @danielhanchen in https://github.com/unslothai/unsloth/pull/14007
* Fused LoRA kernels: support lora_dropout and lora_bias by @danielhanchen in https://github.com/unslothai/unsloth/pull/13898
* RMSNorm: restore in-place dX for pre-norm decoder norms by @danielhanchen in https://github.com/unslothai/unsloth/pull/13984
* Keep opted-in bnb 4-bit MoE experts outside the compiled block by @danielhanchen in https://github.com/unslothai/unsloth/pull/13946
* Studio: improve AMD NPU discovery, CLI support, and chat feedback by @oobabooga in https://github.com/unslothai/unsloth/pull/13797
* Studio: faster frontend type check with TypeScript 7 and bun check by @Etherll in https://github.com/unslothai/unsloth/pull/13986
* GRPO: score old and reference logprobs over the truncated sampling support when opted in by @danielhanchen in https://github.com/unslothai/unsloth/pull/13900
* GRPO: install MoE routing replay when UNSLOTH_GRPO_ROUTING_REPLAY=1 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13916
* Kernel follow-ups: norm launch on HIP and under compile, grouped GEMM frozen operands, no CE eviction hint on H100 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13967
* Windows hipinfo: an all-hiding ROCR mask still means no ROCm target by @danielhanchen in https://github.com/unslothai/unsloth/pull/14019
* Optimizer state offload: keep inactive state on the host for unchunked Q-GaLore weight_quant steps by @danielhanchen in https://github.com/unslothai/unsloth/pull/14025
* perf(studio): enter Zoo's inference scope registry on Unsloth Studio's MLX paths by @Lyxot in https://github.com/unslothai/unsloth/pull/13975
* Move the Unsloth Studio MLX stack to mlx 0.32.4 and mlx-lm 0.32.2 by @Lyxot in https://github.com/unslothai/unsloth/pull/13992
* FP8 GEMV on Blackwell + Triton 3.3: no graph break under torch 2.7, keep the exact GEMV shapes that are faster by @danielhanchen in https://github.com/unslothai/unsloth/pull/14026
* NF4 GEMV: keep the table load on 256 wide tiles by @danielhanchen in https://github.com/unslothai/unsloth/pull/14027
* Context parallel: gather the FSDP2 state dict in save_model on transformers 4.x by @danielhanchen in https://github.com/unslothai/unsloth/pull/14028
* Follow-ups to the GRPO reward locals and FSDP2 mixed precision merges by @danielhanchen in https://github.com/unslothai/unsloth/pull/14023
* Token budget: weight split entropy by labels on TRL 1.3 to 1.14 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14024
* AMD: Strix defers only to an installable generic tag; gfx1153 health gate classified at inventory refresh by @danielhanchen in https://github.com/unslothai/unsloth/pull/14022
* Studio: list every GGUF build that shares a quant in a custom folder by @oobabooga in https://github.com/unslothai/unsloth/pull/13957
* Studio: custom video sizes and Images-style prompt fields on Create videos by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14050
* Studio: show a finished chat's sidebar dot in the accent colour by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14042
* Studio Hub: sidebar-matched pill icons, drop the Memory stat by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14049
* Studio: API page toolbar gets clearer icons and hover tooltips by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14048
* Studio: read whole-GPU uuid masks from nvidia-smi rows and cache the MIG set by @danielhanchen in https://github.com/unslothai/unsloth/pull/14017
* Studio: keep automatic GPU placement inert on ordinary hosts by @danielhanchen in https://github.com/unslothai/unsloth/pull/14020
* Chat UI smoke: boot Studio with update checks off by @danielhanchen in https://github.com/unslothai/unsloth/pull/14053
* CUDA spoof: cover CUDA wheels on GPU-less runners, not only CPU wheels by @danielhanchen in https://github.com/unslothai/unsloth/pull/14056
* Notebooks smoke: run the install cell the way Colab does by @danielhanchen in https://github.com/unslothai/unsloth/pull/14058
* Studio: align toast icons with the first line on multi-line toasts by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14082
* Studio Hub: On Device filters and sort, Exports & Fine-tunes, unsloth.ai links by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14083
* Studio: slide the selected pill on every segmented toggle by @Etherll in https://github.com/unslothai/unsloth/pull/14030
* Studio: use the inline markdown table style in the Hub, file previews and the composer draft by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14087
* Studio: browser panel follows the system proxy on macOS, Windows and Linux by @Lyxot in https://github.com/unslothai/unsloth/pull/14029
* Studio: a managed account's Hub dataset card may not make the server dial an http(s) URL by @danielhanchen in https://github.com/unslothai/unsloth/pull/14091
* CI: pin the Arrow and sqlite-vec tags the Windows ARM wheelhouse signs to commits by @danielhanchen in https://github.com/unslothai/unsloth/pull/14092
* Tests: make the --help, media scan, installer comparer and harness resolver checks hold on every host by @danielhanchen in https://github.com/unslothai/unsloth/pull/14116
* Studio: automatic GPU placement caches failed probes, skips MIG winners, never blocks the event loop by @danielhanchen in https://github.com/unslothai/unsloth/pull/14118
* Studio: tell Gemma 4 with Think off and GLM today's date by @NilayYadav in https://github.com/unslothai/unsloth/pull/14013
* Let the Gemma-4 chat template format tool-calling conversations by @NilayYadav in https://github.com/unslothai/unsloth/pull/14015
* Create the branch before pushing a LoRA GGUF to a revision by @NilayYadav in https://github.com/unslothai/unsloth/pull/13915
* Studio: keep skills created in Docker on the unsloth-studio volume by @NilayYadav in https://github.com/unslothai/unsloth/pull/13912
* Studio: fit knowledge base chunks to the embedding model's input limit by @NilayYadav in https://github.com/unslothai/unsloth/pull/14045
* Studio: keep a chat's files in the Library after it moves into a project by @NilayYadav in https://github.com/unslothai/unsloth/pull/14044
* fix(studio): guard missing scrollbar-gutter on Mac desktop startup by @Souravrajvi0 in https://github.com/unslothai/unsloth/pull/14111
* Studio: read uploaded CSV cells as written for embedding training by @NilayYadav in https://github.com/unslothai/unsloth/pull/14014
* Studio: push an export to the Hub with the Hugging Face CLI login by @NilayYadav in https://github.com/unslothai/unsloth/pull/14047
* Studio: keep a dataset's thinking text when training Qwen models by @NilayYadav in https://github.com/unslothai/unsloth/pull/14016
* Studio: name unknown GGUF quant types below the bundled type count by @danielhanchen in https://github.com/unslothai/unsloth/pull/14124
* Studio: let the browser panel and web fetch work behind fake-IP DNS proxies by @danielhanchen in https://github.com/unslothai/unsloth/pull/14127
* Studio: let a finished reply be edited when its settle write was refused by @danielhanchen in https://github.com/unslothai/unsloth/pull/14131
* Unsloth Studio / Desktop (AMD, Windows): stop amd-smi from popping UAC/DiskPart prompts on the System page by @LeoBorcherding in https://github.com/unslothai/unsloth/pull/14041
* Load six older models in 4bit instead of a missing repo by @NilayYadav in https://github.com/unslothai/unsloth/pull/13941
* Studio: skip a Terminal PATH entry MXC cannot grant instead of failing every launch by @danielhanchen in https://github.com/unslothai/unsloth/pull/14129
* Studio: let the Project sources panel be hidden in a project chat by @danielhanchen in https://github.com/unslothai/unsloth/pull/14125
* Model picker contract: follow the On Device filter onto Discover's capability picks by @danielhanchen in https://github.com/unslothai/unsloth/pull/14138
* Studio: keep GGUF variant listings off the default thread pool so a stalled Hub cannot block downloaded models by @danielhanchen in https://github.com/unslothai/unsloth/pull/14134
* Studio: unload a local model without stopping external provider chats by @NilayYadav in https://github.com/unslothai/unsloth/pull/13917
* Studio: keep llama.cpp and vLLM connections' default system prompt by @NilayYadav in https://github.com/unslothai/unsloth/pull/14043
* Studio: default to the Vulkan llama.cpp bundle when a CPU-bound host has a Vulkan GPU by @danielhanchen in https://github.com/unslothai/unsloth/pull/13599
* Studio: name a closed AMD device node in the System tab GPU notice by @danielhanchen in https://github.com/unslothai/unsloth/pull/14126
* Studio: ask before risky calls when a chat folder is too large to check by @NilayYadav in https://github.com/unslothai/unsloth/pull/13914
* Fix Nemotron loss normalization across gradient accumulation by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/14002
* Kernel follow-ups: NVFP4 shape-aware fused gate, MoE fallback tiles, test fixes across torch 2.10 - 2.14 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14122
* Studio: wrap long commands and cap tall API examples in Settings by @Etherll in https://github.com/unslothai/unsloth/pull/14071
* Studio: ask before ffmpeg or pandoc write outside the sandbox by @NilayYadav in https://github.com/unslothai/unsloth/pull/13942
* Read the current FSDP2 output head when scoring GRPO log-probs by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/14060
* Studio: add QwenCloud as an API provider by @NilayYadav in https://github.com/unslothai/unsloth/pull/14033
* Fix LM-head weight fake quantization in fused CE by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/14006
* Load Ling 3.x low-rank queries on native bailing_hybrid and fix its exports by @danielhanchen in https://github.com/unslothai/unsloth/pull/14136
* Fix packed document boundaries in Qwen PLE by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/14011
* Studio: FLUX.3 Image Klein (distilled and base), with INT8 / FP8 / GGUF support by @danielhanchen in https://github.com/unslothai/unsloth/pull/13933
* Studio: install from a package index that lags PyPI by @danielhanchen in https://github.com/unslothai/unsloth/pull/14133
* Studio: add Z.ai as an API provider by @NilayYadav in https://github.com/unslothai/unsloth/pull/14034
* Studio: keep Claude's web search to the sites it asks for by @NilayYadav in https://github.com/unslothai/unsloth/pull/14046
* Studio: audio.cpp v0.9.2 support by @Etherll in https://github.com/unslothai/unsloth/pull/14073
* Studio: FLUX.3 Image Klein on the native sd.cpp engine by @danielhanchen in https://github.com/unslothai/unsloth/pull/14144
* Studio (macOS): size image loads against the Metal working set, not RAM minus 20% by @oobabooga in https://github.com/unslothai/unsloth/pull/13776
* Studio: reserve MiniMax-H3's pinned weights from sd.cpp's budget on integrated AMD GPUs by @oobabooga in https://github.com/unslothai/unsloth/pull/13786
* Studio: video families default to a hosted quantized text encoder by @danielhanchen in https://github.com/unslothai/unsloth/pull/14000
* Studio: FLUX.3 prompt upsampling (Enhance prompt) through a llama.cpp sidecar by @danielhanchen in https://github.com/unslothai/unsloth/pull/14137
* Studio: fetch every image component from unsloth repos by @danielhanchen in https://github.com/unslothai/unsloth/pull/14008
* Studio: image families default to a hosted quantized text encoder by @danielhanchen in https://github.com/unslothai/unsloth/pull/14009
* Studio: fetch every video component from unsloth repos by @danielhanchen in https://github.com/unslothai/unsloth/pull/14003
* RMSNorm: keep the final norm's own dX buffer when hidden states are returned to the caller by @danielhanchen in https://github.com/unslothai/unsloth/pull/14139
* AMD install follow-ups: installable inferred target, gfx1153 lspci peer, override health hint by @danielhanchen in https://github.com/unslothai/unsloth/pull/14117
* Log budget: measure the FLUX.3 prompt upsampler status poll by @danielhanchen in https://github.com/unslothai/unsloth/pull/14167
* Tests: stop a GPU-selection route test leaking a CHAT owner into the upsampler tests by @danielhanchen in https://github.com/unslothai/unsloth/pull/14169
* Studio: keep the download button off the chat composer on phones by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14163
* Studio: audio.cpp models land on the right pages by @Etherll in https://github.com/unslothai/unsloth/pull/14072
* Studio: one-command MCP setup, recipe prompts, a model catalog and tool annotations by @Etherll in https://github.com/unslothai/unsloth/pull/14077
* Studio: clearer audio.cpp errors, cleaner Speak/Clone, reproducible takes by @Etherll in https://github.com/unslothai/unsloth/pull/14075
* Studio: image and video generation follow each model's defaults and prompting tips, and /v1/videos takes Unsloth Studio controls by @Etherll in https://github.com/unslothai/unsloth/pull/14078
* Studio: drop an Images strip tile onto an image picker to use it by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14166
* Studio: add Edit image to the Images gallery item menu by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14162
* GRPO: latch autocast under vLLM only, zero-variance exclusion on TRL before 1.6 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14123
* Studio: add a setting to stop chats and Deep Research when the tab closes by @alkinun in https://github.com/unslothai/unsloth/pull/14062
* Studio: MCP audio reports what it applied, explains audio errors, checks takes and cancels by id by @Etherll in https://github.com/unslothai/unsloth/pull/14080
* Studio: the Images pill makes images and videos in chat with the loaded local models by @Etherll in https://github.com/unslothai/unsloth/pull/14110
* Studio: MCP returns key-free download links and finds media, voices and video frames again by @Etherll in https://github.com/unslothai/unsloth/pull/14079
* Studio: add an Always choice to Keep multiple models loaded, track every model on the GPU, and report every model a load unloads by @Etherll in https://github.com/unslothai/unsloth/pull/14088
* Studio: image and video models stay loaded beside chat when they fit by @Etherll in https://github.com/unslothai/unsloth/pull/14106
* Studio: MCP errors, cancels and chat controls agents can act on by @Etherll in https://github.com/unslothai/unsloth/pull/14081
* Studio: MCP agents follow long work in one call and see every model a load unloads by @Etherll in https://github.com/unslothai/unsloth/pull/14089
* Studio: choose Off, When they fit or Always in Model memory, and keep the chat context when an image or video model takes the GPU by @Etherll in https://github.com/unslothai/unsloth/pull/14108
* Studio: show the running step on the Hub card's download bar by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14171
* Studio: MCP agents choose how and where a model loads, preview the load, and queue videos by @Etherll in https://github.com/unslothai/unsloth/pull/14090
* Studio: MCP agents upload datasets, load what they trained, and download models ahead of time by @Etherll in https://github.com/unslothai/unsloth/pull/14107
* Studio MCP: keep one [code] tag on audio errors by @danielhanchen in https://github.com/unslothai/unsloth/pull/14175
* Studio: add Edit image to Library image menus by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14170
* Studio: load the retired FLUX.3 full copies through their base by @danielhanchen in https://github.com/unslothai/unsloth/pull/14173
* Studio: download the UD-Q4_K_XL FLUX.3 prompt upsampler by default by @danielhanchen in https://github.com/unslothai/unsloth/pull/14177
* Studio: label the Chat with files composer pill Files instead of RAG by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14179
* Studio: match letter shortcuts by the letter the layout types by @Souravrajvi0 in https://github.com/unslothai/unsloth/pull/14113
* Desktop: keep DMA-BUF off on NVIDIA Wayland when compositing is turned off by the environment by @danielhanchen in https://github.com/unslothai/unsloth/pull/14141
* Studio: darker unselected model picker toggle, collapse icon for Compact conversation by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14183
* CLI: doctor --mcp sends the API key only to a Studio that proves its identity by @danielhanchen in https://github.com/unslothai/unsloth/pull/14178
* Studio: run the Windows sandbox (MXC) on ARM64 PCs with Microsoft's ARM64 build by @danielhanchen in https://github.com/unslothai/unsloth/pull/14176
* Studio: one tooltip design everywhere, matching chat's text colours in light and dark by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/14172
* Studio: pin FLUX.3 Image Klein (Fast FP8) to the top of the Images picker by @danielhanchen in https://github.com/unslothai/unsloth/pull/14184
* Desktop: bump rustls to 0.23.46 and quinn-proto to 0.11.19 for RustSec advisories by @danielhanchen in https://github.com/unslothai/unsloth/pull/14186
* Studio: keep the prompt upsampler client out of the startup chunks, reset the startup budget to the build by @danielhanchen in https://github.com/unslothai/unsloth/pull/14168
* Studio: update Lemonade to 2026.42.1 and FastFlowLM to v1.0.9 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14189
* Notebooks CI: refresh the Colab oracle snapshots to the current GPU runtime by @danielhanchen in https://github.com/unslothai/unsloth/pull/14182
* Studio: managed accounts use the server's own HF endpoint for recipe seeds by @danielhanchen in https://github.com/unslothai/unsloth/pull/14187
* Studio: open //host links as web links; run apt-get by absolute path; ignore the dev Studio home by @danielhanchen in https://github.com/unslothai/unsloth/pull/14190
* Studio: raise the startup bundle budget for #14190 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14198
* Studio: keep the FLUX.3 Image Klein GGUF row under its Fast FP8 row at the top of the Images picker by @danielhanchen in https://github.com/unslothai/unsloth/pull/14197
* Studio: strip tool markup from streamed text without rescanning the whole turn per token by @danielhanchen in https://github.com/unslothai/unsloth/pull/14143
* Studio: raise the startup bundle budget for #14197 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14203
* Hybrid packing + block compile: fix the guard crash, the skipped varlen, and the cross-document leak by @Etherll in https://github.com/unslothai/unsloth/pull/13956
* Studio: compile FLUX.3 Klein once for every prompt length by @danielhanchen in https://github.com/unslothai/unsloth/pull/14211
* Copy the residual before the in-place norm in Granite fast decode by @vineethsaivs in https://github.com/unslothai/unsloth/pull/13454
* Studio: follow a same-model MLX reload in the KV width and int8 prefill settings by @danielhanchen in https://github.com/unslothai/unsloth/pull/14210
* Studio: install the S3 SDK on demand by @AlbertoLMa in https://github.com/unslothai/unsloth/pull/14157
* Studio: start the FLUX.3 prompt upsampler while Enhance prompt is on by @danielhanchen in https://github.com/unslothai/unsloth/pull/14208
* Fix padded prefill sliding window being one key too wide by @vineethsaivs in https://github.com/unslothai/unsloth/pull/13906
* Studio: fix browser toolbar alignment and narrow layouts by @Imagineer99 in https://github.com/unslothai/unsloth/pull/14018
* GRPO: file compute_loss metrics by model.training, not control.should_evaluate by @vineethsaivs in https://github.com/unslothai/unsloth/pull/14112
* Studio: keep users signed in when auth.db is busy by @Etherll in https://github.com/unslothai/unsloth/pull/14151
* Fused QKNorm + RoPE: keep type promotion for mixed dtype tables, reuse grad in the trainable norm fallback by @danielhanchen in https://github.com/unslothai/unsloth/pull/14200
* Studio: export token usage from Profile stats as CSV by @danielhanchen in https://github.com/unslothai/unsloth/pull/14213
* Studio: keep reading durable chat output while its events are being saved by @danielhanchen in https://github.com/unslothai/unsloth/pull/14135
* unsloth run: pass llama-server short flags like -ctv, -dev, -ctxcp through whole by @danielhanchen in https://github.com/unslothai/unsloth/pull/14224
* Context parallelism: drop the SDPA wrappers each ring step leaves in torch's registry by @danielhanchen in https://github.com/unslothai/unsloth/pull/14193
* head_dim 512 attention: use the kernel for masks made under inference mode by @danielhanchen in https://github.com/unslothai/unsloth/pull/14202
* Pass layers_to_transform, use_rslora and modules_to_save to LoraConfig on the SentenceTransformer fast encoder path by @vineethsaivs in https://github.com/unslothai/unsloth/pull/14150
* fix(studio): reject oversized Metal alongside loads before startup by @Imagineer99 in https://github.com/unslothai/unsloth/pull/14209
* Block compile: keep the GatedDeltaNet self-check out of a non-reentrant checkpoint by @oobabooga in https://github.com/unslothai/unsloth/pull/14195
* Studio: multi-image editing for Qwen-Image-Edit by @danielhanchen in https://github.com/unslothai/unsloth/pull/14230
* Studio: fix chat scrollbar freezes on long code fences by @Sneakr in https://github.com/unslothai/unsloth/pull/13919
* Studio: restore Qwen causal-conv1d on demand, narrow fatal mamba-ssm, provision SSM kernels in export by @danielhanchen in https://github.com/unslothai/unsloth/pull/13971
* Attention: GQA never forces SDPA math, cuDNN-over-varlen on sm100 only, native before xformers by @danielhanchen in https://github.com/unslothai/unsloth/pull/14158
* Prebuilt wheels: drop -lineinfo, unreachable SASS and flash-attn PTX; add extension-free mamba-ssm by @danielhanchen in https://github.com/unslothai/unsloth/pull/14142
* Studio: stage prebuilt installs in dirs that inherit the parent ACL on Windows by @danielhanchen in https://github.com/unslothai/unsloth/pull/14212
* Optimizer state offload: track DTensor state loaded on the host when resuming by @danielhanchen in https://github.com/unslothai/unsloth/pull/14155
* doctor --gpus: read NVML P2P enum constants as ints by @danielhanchen in https://github.com/unslothai/unsloth/pull/14164
* RoPE: build grown caches on the GPU again, 32768 rows at a time by @danielhanchen in https://github.com/unslothai/unsloth/pull/14206
* FP8 GEMV long-indexing test: seeded inputs and a last-bit tolerance by @danielhanchen in https://github.com/unslothai/unsloth/pull/14220
* Studio: choose working folders when creating projects by @Imagineer99 in https://github.com/unslothai/unsloth/pull/13873
* Qwen3 decode: size the RoPE read by the explicit position, not only the KV length by @danielhanchen in https://github.com/unslothai/unsloth/pull/14156
* Studio: keep the Read aloud speech model loaded beside the chat model by @Etherll in https://github.com/unslothai/unsloth/pull/14191
* Studio: keep code colour while scrolling long chats by @danielhanchen in https://github.com/unslothai/unsloth/pull/14242
* Studio: route clicks and scrolls to the browser page on macOS 27 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14216
* pre-commit: cut the kwarg formatter's CPU 6.5x and stop the ruff fork bomb (#14174) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14249
* Studio: build the OpenAPI schema off the event loop by @danielhanchen in https://github.com/unslothai/unsloth/pull/14239
* FSDP2 QLoRA: give the all-gathered 4-bit weight back its Params4bit class and 3D shape by @danielhanchen in https://github.com/unslothai/unsloth/pull/14204
* Studio: Developer mode opt-in for experimental CPU video generation by @danielhanchen in https://github.com/unslothai/unsloth/pull/14247
* Studio: raise the startup bundle budget for #14247 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14258
* Honor layers_to_transform and finetune_last_n_layers with regex target_modules by @vineethsaivs in https://github.com/unslothai/unsloth/pull/14021
* feat(studio): add a setting to hide the macOS menu bar icon by @Mathews-Tom in https://github.com/unslothai/unsloth/pull/11937
* CI: keep one generation of prefix-restored caches, share Core's pip cache by @danielhanchen in https://github.com/unslothai/unsloth/pull/14263
* Studio: delete selected recipe blocks with the Delete key by @danielhanchen in https://github.com/unslothai/unsloth/pull/14223
* Studio Images: per-load engine choice for GGUF picks (native sd.cpp for LoRA) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14232
* Studio: wire in DeepSeek-V4.1-Flash-1017 (deepseek41) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14260
* Studio: raise the startup bundle budget for #11937 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14264
* Studio: make inpaint and localized-edit masks from text with SAM 3 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14235
* Studio installer: show the previous unsloth version next to the new one by @danielhanchen in https://github.com/unslothai/unsloth/pull/14248
* Studio: show the end of long prompts in the API monitor by @danielhanchen in https://github.com/unslothai/unsloth/pull/14241
* Context parallel: wrap trainer methods only once a trainer enables CP (torch 2.10 step time) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14152
* Studio: a kept load short on its own GPU no longer unloads models on other GPUs or on the CPU by @danielhanchen in https://github.com/unslothai/unsloth/pull/14234
* Decode: cover explicit positions past the lazy RoPE cache in Gemma2, Cohere, Granite and FalconH1 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14199
* MFU logging under fullgraph, NCCL logs under distributed debug, token-budget metrics across ranks by @danielhanchen in https://github.com/unslothai/unsloth/pull/14207
* Studio: let an approved rm run, never a recursive one by @danielhanchen in https://github.com/unslothai/unsloth/pull/14238
* Studio: eject a model with a running chat from the Loaded models card by @NilayYadav in https://github.com/unslothai/unsloth/pull/14161
* Unsloth Studio / Desktop: name chat exports after model, title and day, and reopen the last save folder by @LeoBorcherding in https://github.com/unslothai/unsloth/pull/12586
* Tests: a grandchild reaped while its /proc stat is read counts as gone by @danielhanchen in https://github.com/unslothai/unsloth/pull/14268
* Tests: echo gguf_filename in the image text encoder Playwright status stub by @danielhanchen in https://github.com/unslothai/unsloth/pull/14269
* Tests: make image-engine-choice and image-mask-from-text typecheck by @danielhanchen in https://github.com/unslothai/unsloth/pull/14272
* Studio: timestamp every other sampled video frame for GGUF chat by @danielhanchen in https://github.com/unslothai/unsloth/pull/14254
* Format the two files #14247 left off the formatter fixed point by @danielhanchen in https://github.com/unslothai/unsloth/pull/14270
* unsloth start vscode: print the group instead of writing a dead file inside a plain container by @danielhanchen in https://github.com/unslothai/unsloth/pull/14237
* Studio: a chat remembers the model it last used, not only the one it started on by @danielhanchen in https://github.com/unslothai/unsloth/pull/14259
* Tests: start every diffusion_segment test with no GPU arbiter resident by @danielhanchen in https://github.com/unslothai/unsloth/pull/14271

## New Contributors
* @AlbertoLMa made their first contribution in https://github.com/unslothai/unsloth/pull/14157

**Full Changelog**: https://github.com/unslothai/unsloth/compare/v0.1.908-beta...v0.1.909-beta

---

> **Source** [unslothai/unsloth](https://github.com/unslothai/unsloth) · `v0.1.909-beta` · 2026-10-19 · [upstream release](https://github.com/unslothai/unsloth/releases/tag/v0.1.909-beta)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
