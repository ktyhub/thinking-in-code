---
title: "unsloth v0.1.911-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.911-beta"
version: "v0.1.911-beta"
published: "2026-10-26"
type: "pre"
lang: "en"
summary: "This release adds scheduled tasks, FLUX-3 edit support, perf improvements and more. Also new: MiniMax-M3.1-Flash, face touch-ups for images and faster performance + chats on Mac."
---

# unsloth v0.1.911-beta

This release adds scheduled tasks, FLUX-3 edit support, perf improvements and more. Also new: MiniMax-M3.1-Flash, face touch-ups for images and faster performance + chats on Mac.

## Highlights

- **Scheduled tasks**: Run a prompt on a schedule with a local model or an API
- **MiniMax-M3.1-Flash**: MiniMax's 428B MoE (23B active) [Guide](https://unsloth.ai/docs/models/minimax-m3.1-flash)
- **FLUX 3 Editing**: FLUX 3 now supports editing of images with prompts
- **Perf improvements**: Large Mac perf gains, less lag, reduced binary sizes
- **Saved presets**: Save your Run settings as named presets for each model

## Scheduled tasks

- Open Scheduled from the sidebar's More menu to run a prompt once, daily, on weekdays, weekly or monthly; each answer is saved as a new chat.
- Each task can run on the loaded model, a model on your device, or a model from a connected API provider.
- When a task's model isn't loaded, Unsloth asks before loading it, unless you turn on **Switch automatically when I'm away**.
- Each task can notify you after every run, only when it fails, or never.
- Tasks run only while Unsloth is running, without tools or web search.

## UI + UX

- Save Run settings in the model picker as named presets for each model, then rename, delete or switch between them.
- The preset you picked last is what that model loads with next time, including loads through the API.
- Chat settings can remember your sampling settings for a model, or reset them to the model's recommended values.
- GGUF chats now show progress and time left while processing a long prompt, before the reply starts.
- The API page now shows each served model's context use, speed and request count.
- Each kind of button and icon now looks the same everywhere in the app.
- The Library and System pages in Settings show storage as a usage bar, split into models, caches and free space.

## Mac

- MLX chats now reply up to 16% faster with draft models.
- MLX models that ship with a built-in draft model now use it automatically, with no separate download.
- Image and video renders need far less memory at the end, so low-memory Macs rarely slow down from swapping.
- On Apple Silicon, Z-Image GGUFs now make images from text with the MLX engine by default, 1.5-2x faster than before.

## Images + video

- Make videos from text or an image with NVIDIA's Cosmos3-Edge on the Video page.
- On the Images page, turn on Detailer to redraw faces, hands or other things you name at higher resolution; it needs SAM 3 and a model that can inpaint.
- On NVIDIA GPUs older than RTX 30-series, Wan2.1 1.3B text-to-video clips render about 5x faster.
- On NVIDIA GPUs, many image and video models load faster after the first time, since Unsloth saves the version it builds on first load.
- FLUX.3 Klein can now edit photos in Images > Edit, keeping the photo's dimensions.

## Training

- Split each layer of a model across GPUs for LoRA and QLoRA training, so each GPU holds less: set `UNSLOTH_TP_SIZE` to the number of GPUs and launch with `torchrun`.
- Fine-tuning Unsloth's 4-bit gpt-oss checkpoints no longer crashes on the first training step.
- GRPO that generates with vLLM runs up to 1.9x faster per step with 16-bit LoRA on Linux with NVIDIA GPUs.
- GRPO that generates without vLLM runs up to 4.4x faster per step for Llama and Qwen3 on NVIDIA GPUs.

## Coding agents + API

- Apps using an Unsloth API key can no longer approve their own Python or terminal calls to run outside the sandbox.
- Unsloth no longer trusts forwarded client IPs by default; behind your own reverse proxy, set `UNSLOTH_STUDIO_TRUST_FORWARDED=1` or all users share one login rate limit.

## Models + hardware

- Run MiniMax-M3.1-Flash, MiniMax's MoE model for coding, tool use and agent workflows, with up to 1M tokens of context. [GGUF](https://huggingface.co/unsloth/MiniMax-M3.1-Flash-GGUF)
- At 1-bit, MiniMax-M3.1-Flash needs at least 130 GB of RAM and VRAM combined.
- On some Windows PCs, GGUF models load again instead of failing every time with "llama-server failed to start".

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
    <td><a href='https://github.com/unslothai/unsloth/releases/latest/download/Unsloth-Desktop-Windows-ARM64.exe'>Download</a></td>
  </tr>
</table>

## What's Changed
* Bump install.sh / install.ps1 pins to unsloth>=2026.10.8, unsloth-zoo>=2026.10.8 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14994
* Studio: synchronise VAE decode and encode calls on Apple MPS by @Lyxot in https://github.com/unslothai/unsloth/pull/14940
* Repair the studio-install checks red on main by @danielhanchen in https://github.com/unslothai/unsloth/pull/14995
* MTP: keep the trained head when saving a named PEFT adapter by @danielhanchen in https://github.com/unslothai/unsloth/pull/14912
* Fix test_every_resolver_probe_forwards_the_trust_decision on main by @danielhanchen in https://github.com/unslothai/unsloth/pull/14990
* Format unsloth/models/speculative.py by @danielhanchen in https://github.com/unslothai/unsloth/pull/14997
* Studio: use the MPS SDPA prefill kernel per call on torch 2.13+ by @Lyxot in https://github.com/unslothai/unsloth/pull/14941
* Studio diffusion: measured activation rows for MOSS-Image and FLUX.3 Klein base; layer split prices Z-Image from its measured row by @danielhanchen in https://github.com/unslothai/unsloth/pull/14950
* Repair four checks red on main by @danielhanchen in https://github.com/unslothai/unsloth/pull/14991
* Repair two more backend checks red on main by @danielhanchen in https://github.com/unslothai/unsloth/pull/15003
* Studio video: keep per-request residency fitting after the stream step graph is dropped (Wan2.2-TI2V-5B at 8 / 12 GB) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14937
* FP8 block dequant on ROCm: round fp32 to fp16 with integer ops by @danielhanchen in https://github.com/unslothai/unsloth/pull/14992
* get_peft_model: pass a scalar layers_to_transform to PEFT as a list by @danielhanchen in https://github.com/unslothai/unsloth/pull/14910
* Studio diffusion: fixed 2 GiB discrete-card reserve (ComfyUI-style fixed reserve plus activation estimate) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14951
* Studio diffusion: fp32 VAE upcasts keep the offloaded VAE's pinned host weights (SDXL-class force_upcast VAEs) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14946
* Studio video: MiniMax-H3 fused VAE decoder follows the mixed-precision load, and encode overlaps decode by @danielhanchen in https://github.com/unslothai/unsloth/pull/14986
* Studio: truncate completion_mask / assistant_masks with pre-tokenized input_ids by @danielhanchen in https://github.com/unslothai/unsloth/pull/14884
* Studio: import and export skills as a ZIP from the Skills dialog by @samihsq in https://github.com/unslothai/unsloth/pull/14181
* Studio diffusion: cap the prefetcher's pinned staging so guided Z-Image-Turbo renders on a 31 GB host (Kaggle T4x2) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14975
* Studio diffusion: block-offload re-pins land at the addresses the step graph recorded by @danielhanchen in https://github.com/unslothai/unsloth/pull/14765
* Studio diffusion: cut the int8 ConvRot overhead (one rotation per shared input, SwiGLU fused into the down quant, factored rotation kernel) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14982
* Pin CUDA availability in the step graph capture-stream release test by @danielhanchen in https://github.com/unslothai/unsloth/pull/15015
* Agent guides CI: resolve the newest Node 24 for the openclaw legs by @danielhanchen in https://github.com/unslothai/unsloth/pull/15013
* Studio diffusion: learned peaks per render phase, so later loads keep text encoders resident by @danielhanchen in https://github.com/unslothai/unsloth/pull/14979
* Studio sd.cpp: route all-Q8_0 image GGUFs to BF16 cuBLAS, keep k-quants on MMQ by @danielhanchen in https://github.com/unslothai/unsloth/pull/14983
* Studio: run the Qwen-Image-2.1 CFG branch on the replica with its own prefix KV cache by @danielhanchen in https://github.com/unslothai/unsloth/pull/14954
* Studio MLX images: a LoRA load keeps sd.cpp or diffusers instead of routing into the MLX refusal by @danielhanchen in https://github.com/unslothai/unsloth/pull/14874
* Check the GGUF load marker on load_model through the AST by @danielhanchen in https://github.com/unslothai/unsloth/pull/15017
* Studio sd.cpp: pass --conv-direct off when Studio's policy keeps direct convolution off by @danielhanchen in https://github.com/unslothai/unsloth/pull/14859
* Name the encoding on the trainer.py read in test_pretokenized_dataset by @danielhanchen in https://github.com/unslothai/unsloth/pull/15018
* MLX backend tests: stub zoo's new fused_drafter_ops by @danielhanchen in https://github.com/unslothai/unsloth/pull/15020
* Studio diffusion: route untuned archs (sm86 / 90 / 100 / 121) onto the factored ConvRot kernel behind a probe and latency check by @danielhanchen in https://github.com/unslothai/unsloth/pull/14988
* Native FSDP2: faster native_clip_grad_norm_ that follows torch clip_grad_norm_ dtypes by @danielhanchen in https://github.com/unslothai/unsloth/pull/14973
* Native FSDP2 float16: skip the step when every rank overflows under fused AdamW by @danielhanchen in https://github.com/unslothai/unsloth/pull/14996
* Block compile: router_logits capture no longer recompiles every layer by @danielhanchen in https://github.com/unslothai/unsloth/pull/14998
* Compiled blocks: keep the xformers stand-in SDPA off cuDNN attention by @danielhanchen in https://github.com/unslothai/unsloth/pull/15009
* Studio Images: decide VAE tiling at the decode and stream resident groups there, so offloaded edits decode untiled by @danielhanchen in https://github.com/unslothai/unsloth/pull/15006
* SFT: keep the router aux loss off for single-expert configs (Jamba) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15010
* Scan baseline: re-review the eight unsloth-zoo sites 2026.10.8 moved by @danielhanchen in https://github.com/unslothai/unsloth/pull/15031
* Studio: keep the Z-Image CFG split on when group offload leaves every group resident by @danielhanchen in https://github.com/unslothai/unsloth/pull/14955
* Studio Images: Detailer (face fix) pass with SAM 3 and inpaint by @danielhanchen in https://github.com/unslothai/unsloth/pull/14616
* Studio diffusion: record CUDA graphs thread-locally and keep other threads' syncs out of a recording by @danielhanchen in https://github.com/unslothai/unsloth/pull/14964
* Opt-in torchao float8 training for full finetuning by @danielhanchen in https://github.com/unslothai/unsloth/pull/15007
* Keep frozen load_in_fp8 weights out of FSDP2 sharding and the DDP broadcast by @danielhanchen in https://github.com/unslothai/unsloth/pull/15001
* Settings tabs smoke: hold the shortcut recorder box before pressing Backspace by @danielhanchen in https://github.com/unslothai/unsloth/pull/15032
* Studio diffusion: correct the fused RMSNorm accuracy notes by @danielhanchen in https://github.com/unslothai/unsloth/pull/15035
* FSDP2 QLoRA: reuse the planned NF4 dequant launch for all-gathered weights by @danielhanchen in https://github.com/unslothai/unsloth/pull/15011
* Studio: route Apple Silicon image requests to the MLX engine by default, diffusers MPS for the rest by @danielhanchen in https://github.com/unslothai/unsloth/pull/14883
* Name the encoding on two more diffusion.py reads in test_diffusion_zimage_cfg_split by @danielhanchen in https://github.com/unslothai/unsloth/pull/15040
* FSDP2: keep bitsandbytes 8-bit AdamW state by stepping the local shards by @danielhanchen in https://github.com/unslothai/unsloth/pull/15008
* Unsloth Studio / Desktop: image generation ignores the VRAM Budget setting when planning offload by @LeoBorcherding in https://github.com/unslothai/unsloth/pull/14816
* Unsloth Studio / Desktop: remember the text encoder and VAE files per image model by @LeoBorcherding in https://github.com/unslothai/unsloth/pull/14845
* Studio: return a video render's pinned host memory to the driver at render end by @danielhanchen in https://github.com/unslothai/unsloth/pull/15036
* Block compile: keep a caller's flex BACKEND instead of adding FORCE_USE_FLEX_ATTENTION by @danielhanchen in https://github.com/unslothai/unsloth/pull/15044
* FSDP2 optimizer_cls test: follow #15008, which keeps bitsandbytes Adam / AdamW on local shards by @danielhanchen in https://github.com/unslothai/unsloth/pull/15049
* Decode LoRA cast cache: refresh after fused optimizer steps by @danielhanchen in https://github.com/unslothai/unsloth/pull/15052
* FSDP2 native: fewer collectives under gradient accumulation and checkpoint recompute by @danielhanchen in https://github.com/unslothai/unsloth/pull/15023
* Attention: keep training SDPA off cuDNN attention on SM100 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15019
* mxfp4_packed_matmul: exact gradients for grad-requiring inputs by @danielhanchen in https://github.com/unslothai/unsloth/pull/15060
* Backend CI: split the 3.13 shards a-f / g-r instead of a-k / l-r by @danielhanchen in https://github.com/unslothai/unsloth/pull/15061
* Native FSDP2 float16: start the loss scale where one GPU's scaled backward fits by @danielhanchen in https://github.com/unslothai/unsloth/pull/15033
* Studio diffusion: drop stale pinned host layout entries after a dtype change in low_vram offload by @danielhanchen in https://github.com/unslothai/unsloth/pull/14857
* Studio sd.cpp: use BF16 cuBLAS for Q8_0 only when every GGUF the process loads is Q8_0 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15054
* Studio diffusion: keep the VRAM Budget reserve free in the decode-time residency release by @danielhanchen in https://github.com/unslothai/unsloth/pull/15048
* Train on CPU when no GPU is found, instead of refusing to import by @danielhanchen in https://github.com/unslothai/unsloth/pull/14717
* Studio diffusion: key the CFG-batch verdict on the weight quant, not just the module layout by @danielhanchen in https://github.com/unslothai/unsloth/pull/15047
* Studio diffusion: one bounded Hub probe per process when the Hub is unreachable by @danielhanchen in https://github.com/unslothai/unsloth/pull/15039
* MOSS-Image: build the float64 timestep sinusoid on the CPU off CUDA by @danielhanchen in https://github.com/unslothai/unsloth/pull/14929
* Studio: split guided Z-Image on the background-compile recording render by @danielhanchen in https://github.com/unslothai/unsloth/pull/15057
* Studio: fp32 VAE upcast frees each 16-bit device tensor as it is cast by @danielhanchen in https://github.com/unslothai/unsloth/pull/15058
* Studio: untiled VAE fit checks do not count CUDA graph pool cache as free by @danielhanchen in https://github.com/unslothai/unsloth/pull/15064
* Studio MLX: retry a refused coexist diffusers fallback with MLX unloaded by @danielhanchen in https://github.com/unslothai/unsloth/pull/15056
* MoE per-expert dW: count pipelined shared memory, fit tiles that overflow the card by @danielhanchen in https://github.com/unslothai/unsloth/pull/15070
* FP8 dequant under compile: keep the torch path for bf16 on cards without native bf16 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15071
* Studio: leave rows with a null caption out of vision training by @vineethsaivs in https://github.com/unslothai/unsloth/pull/14726
* Format the MoE per-expert dW shared memory files by @danielhanchen in https://github.com/unslothai/unsloth/pull/15074
* Studio diffusion: do not demote a resident transformer to whole-module offload for the 2048 worst case by @danielhanchen in https://github.com/unslothai/unsloth/pull/15065
* Native FSDP2: sharded resume reads for weights and an opt-in sharded optimizer checkpoint by @danielhanchen in https://github.com/unslothai/unsloth/pull/15042
* FastDiffusionModel: record an explicit float32 request so T4 training stays float32 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15062
* Native FSDP2: sync initial trainable weights across ranks; shard FastSentenceTransformer and FastDiffusionModel by @danielhanchen in https://github.com/unslothai/unsloth/pull/15012
* Forget the last NVML inventory between backend tests by @danielhanchen in https://github.com/unslothai/unsloth/pull/15072
* Studio: CFG batch, H3 budget and stream residency fit checks do not count CUDA graph pool cache as free by @danielhanchen in https://github.com/unslothai/unsloth/pull/15067
* Studio NVFP4: tag the compile cache in both switch states so a legacy cache never matches by @danielhanchen in https://github.com/unslothai/unsloth/pull/15055
* Studio diffusion/video: share the Hub reachability verdict across cached-load calls by @danielhanchen in https://github.com/unslothai/unsloth/pull/15059
* Studio Images: run Detailer inpaints eager and uncounted by @danielhanchen in https://github.com/unslothai/unsloth/pull/15063
* Studio: run the image-load gates before the MLX router's diffusers fallback by @danielhanchen in https://github.com/unslothai/unsloth/pull/15066
* Studio: name image and video loads so an unload ends only its own by @danielhanchen in https://github.com/unslothai/unsloth/pull/14827
* Studio: multistage companion and CFG replica fit checks do not count CUDA graph pool cache as free by @danielhanchen in https://github.com/unslothai/unsloth/pull/15069
* Studio: keep host memory unpinned on integrated GPUs by @danielhanchen in https://github.com/unslothai/unsloth/pull/15077
* Read diffusion.py as UTF-8 in the NVFP4 act-quant test by @danielhanchen in https://github.com/unslothai/unsloth/pull/15086
* Give the embedder unload race test room for a slow release by @danielhanchen in https://github.com/unslothai/unsloth/pull/15082
* Context parallel (Ulysses) for DPO and GRPO training by @danielhanchen in https://github.com/unslothai/unsloth/pull/15041
* Full finetune pack-quantized compressed-tensors checkpoints by @danielhanchen in https://github.com/unslothai/unsloth/pull/15075
* Bring two diffusion route test fakes up to the load id routes by @danielhanchen in https://github.com/unslothai/unsloth/pull/15090
* Do not let the gap worker lock test deadlock its own worker by @danielhanchen in https://github.com/unslothai/unsloth/pull/15091
* Studio: stream an offloaded ControlNet through the group prefetcher by @danielhanchen in https://github.com/unslothai/unsloth/pull/15081
* Studio diffusion: carry the next forward's first offload groups into the idle copy tail by @danielhanchen in https://github.com/unslothai/unsloth/pull/15088
* FP8 tests: same automatic dequant route on sm89+, no Fp8Dequantize leak between files by @danielhanchen in https://github.com/unslothai/unsloth/pull/15078
* Load Mamba / FalconMamba with eager instead of a refused sdpa by @danielhanchen in https://github.com/unslothai/unsloth/pull/15076
* GRPO trainer: follow zoo's torch < 2.12 gate for persistent TMA matmul by @danielhanchen in https://github.com/unslothai/unsloth/pull/15100
* Resume native FSDP2 optimizer checkpoints across torch AdamW and bnb 8-bit by @danielhanchen in https://github.com/unslothai/unsloth/pull/15092
* Studio: free the Qwen-Image-2.1 prefix KV cache before VAE decode by @danielhanchen in https://github.com/unslothai/unsloth/pull/15094
* Studio: contiguous k/v before SDPA on gfx1151 when they outgrow L2 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15096
* Studio diffusion: keep the denoiser resident ahead of the text encoders by @danielhanchen in https://github.com/unslothai/unsloth/pull/15099
* FP8 to NF4 load tests: compare in the load dtype on GPUs without bf16 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15103
* Studio UI polish: projects, API page, audio inputs, settings layout by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15080
* Block compile: mark the batch dim dynamic so an uneven last batch does not recompile every layer by @danielhanchen in https://github.com/unslothai/unsloth/pull/15106
* Studio: one red shade for every red button in light and dark by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15085
* Studio: language and platform tabs for the API page code examples by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15084
* FP8 inductor fullgraph test: allow one ulp on GPUs where Inductor fuses the dequant by @danielhanchen in https://github.com/unslothai/unsloth/pull/15107
* Find a LAN address's actions in its row, not the text's parent by @danielhanchen in https://github.com/unslothai/unsloth/pull/15109
* Studio diffusion: pack up-front group-offload pins into slabs by @danielhanchen in https://github.com/unslothai/unsloth/pull/15105
* Studio: cross-forward prefetch for video renders by @danielhanchen in https://github.com/unslothai/unsloth/pull/15108
* Read the working folder picker labels from the component in project_folders by @danielhanchen in https://github.com/unslothai/unsloth/pull/15114
* MXFP4 compressed-linear tests: fp16 where bf16 is unsupported by @danielhanchen in https://github.com/unslothai/unsloth/pull/15113
* Fused LoRA: plain Linear projections after merge_and_unload / unload no longer crash by @danielhanchen in https://github.com/unslothai/unsloth/pull/15119
* Wait for the sandbox pick to land instead of a fixed 5ms tick by @danielhanchen in https://github.com/unslothai/unsloth/pull/15120
* Unwrap compressed-tensors offload caches after the lazy first-forward decompress by @danielhanchen in https://github.com/unslothai/unsloth/pull/15095
* pre-commit: format with ruff-unsloth instead of three passes around stock ruff by @danielhanchen in https://github.com/unslothai/unsloth/pull/14993
* Studio: shorter Agent permissions description, even card padding by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15124
* Native FSDP2 optimizer.pt resume: parameters the saved run never stepped by @danielhanchen in https://github.com/unslothai/unsloth/pull/15050
* Keep Mamba dt_proj out of 4-bit so QLoRA forward works by @danielhanchen in https://github.com/unslothai/unsloth/pull/15079
* Preserve reasoning limits when unsloth start changes context by @NilayYadav in https://github.com/unslothai/unsloth/pull/15027
* MXFP4 torch decode: fp16 in fp32 on torch < 2.12, where ldexp overflows by @danielhanchen in https://github.com/unslothai/unsloth/pull/15121
* Studio video: pin MiniMax-H3's lazily streamed blocks in place so the stream prefetch engages by @danielhanchen in https://github.com/unslothai/unsloth/pull/15118
* Restore the hub source and endpoint env between backend tests by @danielhanchen in https://github.com/unslothai/unsloth/pull/15131
* Run Unsloth's patched forwards only on Unsloth-loaded models by @danielhanchen in https://github.com/unslothai/unsloth/pull/15101
* Keep managed vLLM and SGLang environments usable across Docker updates by @NilayYadav in https://github.com/unslothai/unsloth/pull/15024
* Fix Books & Documents recipe loading under CSP by @Imagineer99 in https://github.com/unslothai/unsloth/pull/15045
* Studio: Fix model pickers opening an empty On Device tab by @NilayYadav in https://github.com/unslothai/unsloth/pull/14985
* Sync before re-reading a buffer stored in an Inductor reduction loop (torch < 2.14) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15000
* Add the Unsloth provider to OpenClaw’s selected configuration by @NilayYadav in https://github.com/unslothai/unsloth/pull/15028
* Let OpenClaw app setup read valid JSON5 by @NilayYadav in https://github.com/unslothai/unsloth/pull/15029
* Explain disabled SentencePiece before loading MOSS-TTS-Nano by @Imagineer99 in https://github.com/unslothai/unsloth/pull/14693
* Training SDPA: bucket sequence lengths where torch picks cuDNN, so padded batches stop rebuilding plans by @danielhanchen in https://github.com/unslothai/unsloth/pull/15134
* Preserve padding masks in distillation backbone forwards by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/15068
* Studio: remember chat preferences per account across logins by @NilayYadav in https://github.com/unslothai/unsloth/pull/15025
* Context parallel RL: single-tensor all-gather for hidden states and reduce-scatter in backward by @danielhanchen in https://github.com/unslothai/unsloth/pull/15132
* Preserve runtime settings when unsloth start names the loaded model by @NilayYadav in https://github.com/unslothai/unsloth/pull/15026
* Studio diffusion: keep whole-module offload for a bf16 denoiser past the streamed floor by @danielhanchen in https://github.com/unslothai/unsloth/pull/15129
* FP8 block GEMM: TMA descriptor kernel with a 4-stage K loop on B200 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15136
* Remove hidden host-device syncs from per-step training paths by @danielhanchen in https://github.com/unslothai/unsloth/pull/15133
* Cross entropy: 8192-wide chunks at 4 warps for the chunked forward on B200 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15141
* FSDP2: replicated grad sync without host syncs, once per gradient accumulation cycle by @danielhanchen in https://github.com/unslothai/unsloth/pull/15135
* Studio: centralize GGUF identity rules and exclude incomplete GGUF splits by @oobabooga in https://github.com/unslothai/unsloth/pull/15073
* Studio: show prompt progress, live generation details and where a GGUF loaded by @oobabooga in https://github.com/unslothai/unsloth/pull/14909
* Studio diffusion: keep SDXL resident on 15-16 GB cards from its measured activations by @danielhanchen in https://github.com/unslothai/unsloth/pull/15144
* Honour use_gradient_checkpointing=False over TRL's gradient_checkpointing=True default by @danielhanchen in https://github.com/unslothai/unsloth/pull/15145
* Studio diffusion: read the local int8 / fp8 prequant cache back on pipeline loads by @danielhanchen in https://github.com/unslothai/unsloth/pull/15146
* Studio video: decode the Wan VAE untiled or in the fewest tiles that fit, also when offloaded by @danielhanchen in https://github.com/unslothai/unsloth/pull/15148
* FP8 block GEMM: find torchao 0.18 blockwise_fp8_gemm and route each call to the faster kernel by @danielhanchen in https://github.com/unslothai/unsloth/pull/15153
* Studio: count the LTX-2.5 encoder worker context in every whole-module phase by @danielhanchen in https://github.com/unslothai/unsloth/pull/15151
* Studio diffusion: move the deferred compile off the render for offloaded and Qwen-Image-2.1 denoisers by @danielhanchen in https://github.com/unslothai/unsloth/pull/15150
* Tensor parallelism v1: apply_tensor_parallel for dense decoders (LoRA / QLoRA) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15137
* Studio video: keep Wan2.1-T2V-1.3B in fp16 on fp16-only GPUs by @danielhanchen in https://github.com/unslothai/unsloth/pull/15147
* Studio diffusion: seed the dense bf16 placement from FLUX.1's measured peak by @danielhanchen in https://github.com/unslothai/unsloth/pull/15149
* Padding-free: call flash varlen through a plain autograd.Function in eager by @danielhanchen in https://github.com/unslothai/unsloth/pull/15160
* Opt-in CUDA graphs for compiled blocks under gradient checkpointing (UNSLOTH_BLOCK_CUDAGRAPHS=1) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15154
* Studio video: cache the offloaded native int8 DiT per expert (Wan2.2-A14B warm load 210 s to 21 s) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15152
* DDP: find unused params for a fully finetuned VLM on text-only batches; native FSDP2 names expert parallelism by @danielhanchen in https://github.com/unslothai/unsloth/pull/15156
* FSDP2: free-memory fit check, MFU without recompute (HFU separately), nccl2 warning on small GPUs by @danielhanchen in https://github.com/unslothai/unsloth/pull/15158
* Keep test_studio_root_resilience on the backend's utils and loggers by @danielhanchen in https://github.com/unslothai/unsloth/pull/15165
* Clear the compile kill switch in the block CUDA graphs tests by @danielhanchen in https://github.com/unslothai/unsloth/pull/15167
* Lift for_inference's tensor parallel helpers in the return-logits test by @danielhanchen in https://github.com/unslothai/unsloth/pull/15162
* Studio diffusion: choose whole-module vs streamed offload per request from its step count by @danielhanchen in https://github.com/unslothai/unsloth/pull/15163
* Block compile: per-region recompile limit with isolate_recompiles on torch 2.13+ by @danielhanchen in https://github.com/unslothai/unsloth/pull/15157
* Decode: write K/V straight into the cache slot, and opt-in CUDA-graph replay of the decode step by @danielhanchen in https://github.com/unslothai/unsloth/pull/15171
* Studio video: cache Wan text encodes per text so an unchanged negative prompt is encoded once by @danielhanchen in https://github.com/unslothai/unsloth/pull/15166
* Studio: one audio icon everywhere, ai-speech for Text to Speech by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15112
* Studio: pinned Run settings footer, model picker on the radius scale by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15104
* Studio: restyle Library and System storage sections as a usage overview by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15083
* Studio: API page fonts, Sampling footer in chat settings by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15111
* Studio video: stream the Wan encode under model / sequential offload too by @danielhanchen in https://github.com/unslothai/unsloth/pull/15173
* Bump setuptools from 84.0.0 to 84.1.0 in the python-security group across 1 directory by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/15051
* Bump github/codeql-action/init in / by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/14675
* Bump the cargo-tauri group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/14503
* Bump vite, @modelcontextprotocol/sdk and dompurify in studio/frontend by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/14442
* Studio: Sampling footer waits for the saved-sampling read before Remember and Save by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15177
* Find the Run settings footer by its rule, not by div count by @danielhanchen in https://github.com/unslothai/unsloth/pull/15181
* Bump dompurify from 3.4.16 to 3.4.17 in /docker/jupyter/unsloth_labext in the npm_and_yarn group across 1 directory by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/14932
* Pipeline parallelism v1: apply_pipeline_parallel for dense decoders (GPipe, 1F1B) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15175
* Studio diffusion: skip the offload cost probe's pinned buffer on an integrated GPU by @danielhanchen in https://github.com/unslothai/unsloth/pull/15178
* Studio: 20px for the xl corner radius by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15123
* Give the single-row decode harness the real _decode_graphs helpers by @danielhanchen in https://github.com/unslothai/unsloth/pull/15182
* Studio video: pin offloaded weights at their size, not a power of two by @danielhanchen in https://github.com/unslothai/unsloth/pull/15179
* Bump the pip group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/15053
* Studio: one padding for every main button by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15122
* LayerNorm / RMSNorm: per-GPU num_warps tables by @danielhanchen in https://github.com/unslothai/unsloth/pull/15180
* Studio diffusion: run an eager native int8 W8A8 linear as one compiled function (bit-identical, 1.33x streamed) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15183
* SFT: pick padded batches + block compile over padding-free when micro batches are host bound by @danielhanchen in https://github.com/unslothai/unsloth/pull/15185
* Decode graphs on by default for RL trainer generation, released on return to training by @danielhanchen in https://github.com/unslothai/unsloth/pull/15188
* Fused Qwen3 QK norm + RoPE: on by default on NVIDIA CUDA by @danielhanchen in https://github.com/unslothai/unsloth/pull/15189
* Tensor parallelism v2: sharded loading, data parallel x tensor parallel, and the Trainer by @danielhanchen in https://github.com/unslothai/unsloth/pull/15174
* Skip the norm warps CUDA case on a real CUDA probe by @danielhanchen in https://github.com/unslothai/unsloth/pull/15194
* Gemma 3: keep flex attention only where its head_dim 256 template fits the card by @danielhanchen in https://github.com/unslothai/unsloth/pull/14670
* Flex attention: tuned backward tiles on A100 for head_dim 256 (Gemma 3 LoRA 1.9-2.7x faster) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15193
* Clef: keep fp16 loss scaling on the float32 path (fixes Gemma 3 not training on T4) by @indrajeetapache in https://github.com/unslothai/unsloth/pull/14482
* Studio: scheduled tasks that run a prompt on a schedule and save each answer as a new chat by @alkinun in https://github.com/unslothai/unsloth/pull/13871
* FP8 block GEMM: route empty inputs to the Triton kernel by @danielhanchen in https://github.com/unslothai/unsloth/pull/15205
* Studio diffusion: an int8 prequant read-back hits the compile bundle the runtime quantize saved by @danielhanchen in https://github.com/unslothai/unsloth/pull/15192
* Name the encoding on the tensor parallel index reads; give the PPO unwrap test _decode_graphs by @danielhanchen in https://github.com/unslothai/unsloth/pull/15209
* Packed metadata: keep the tensor path under torch.compile, fall back to pageable copies by @danielhanchen in https://github.com/unslothai/unsloth/pull/15199
* Skip the torchao blockwise GEMM CUDA case on a real CUDA probe by @danielhanchen in https://github.com/unslothai/unsloth/pull/15211
* Studio: an offline audio.cpp listing checks the account grant on the disk pool by @danielhanchen in https://github.com/unslothai/unsloth/pull/14829
* Tests: skip the QAT MX and FP8 block GEMM GPU cases on the recorded real CUDA, not the spoofable probe by @danielhanchen in https://github.com/unslothai/unsloth/pull/14785
* Studio: API keys cannot approve host-path tool calls out of the sandbox by @danielhanchen in https://github.com/unslothai/unsloth/pull/14757
* adamw_flash: keep the unquantized bf16 Adam variance in fp32 so it can decay by @danielhanchen in https://github.com/unslothai/unsloth/pull/14749
* llama.cpp installer: keep Qualcomm Adreno on the CPU prebuilt unless Vulkan is requested by @danielhanchen in https://github.com/unslothai/unsloth/pull/14709
* Studio: keep enhancing prompts from an already downloaded FLUX.3 upsampler quant by @danielhanchen in https://github.com/unslothai/unsloth/pull/14836
* Studio drafter: split TRL packed rows at seq_lengths, reattach a Hub full fine-tune's MTP head on export by @danielhanchen in https://github.com/unslothai/unsloth/pull/14911
* Studio installer (AMD, Linux): CPU torch for a lone gfx90c instead of kernel-less ROCm wheels by @LeoBorcherding in https://github.com/unslothai/unsloth/pull/15002
* Studio: refuse playlists at the entry of the remaining upload decoders by @danielhanchen in https://github.com/unslothai/unsloth/pull/14755
* Studio: trust forwarded headers only behind an opted-in proxy or the managed tunnel by @danielhanchen in https://github.com/unslothai/unsloth/pull/14753
* Tests: run the DDP no_sync accumulation steps' forward inside no_sync by @danielhanchen in https://github.com/unslothai/unsloth/pull/14711
* DeepSeek-V4.1 context scratch: charge the dense KQ scores when flash attention is off by @danielhanchen in https://github.com/unslothai/unsloth/pull/14838
* Studio: trim masked padding from pre-tokenized rows and range-check labels by @danielhanchen in https://github.com/unslothai/unsloth/pull/14818
* Cross entropy: correct gradients under torch.compile for vocabs above 65536 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14712
* Studio GGUF placement: the dGPU wins Auto only without losing context; explicit picks keep host-only bytes off the dGPU by @danielhanchen in https://github.com/unslothai/unsloth/pull/14615
* Padding choice: per compute capability thresholds, RTX PRO 6000 / RTX 5090 peaks by @danielhanchen in https://github.com/unslothai/unsloth/pull/15216
* Installers: read lspci and the audio.cpp driver version once per run, one WMI query for both AMD scans by @danielhanchen in https://github.com/unslothai/unsloth/pull/14984
* Cross entropy: an all -inf vocab chunk no longer turns the loss into NaN by @danielhanchen in https://github.com/unslothai/unsloth/pull/14713
* Studio diffusion: price the compiled tier's requests from its own learned peak (offloaded bf16 keeps its residency after compile) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15198
* head_dim 512 attention: leave mask plus is_causal to SDPA, fall back on mask-scan OOM by @danielhanchen in https://github.com/unslothai/unsloth/pull/14691
* Studio: keep the AMD gfx target and HIP id map until hardware re-detection by @danielhanchen in https://github.com/unslothai/unsloth/pull/14970
* Studio: judge a weight name's .. where the filesystem sends it, not by its text by @danielhanchen in https://github.com/unslothai/unsloth/pull/14800
* Linear input-cast hook: skip float8-weight Linears by @danielhanchen in https://github.com/unslothai/unsloth/pull/14690
* gpt-oss: fix the unreadable lone .bin advice and pin the layout probe order to transformers' resolver by @danielhanchen in https://github.com/unslothai/unsloth/pull/14763
* Prefetch: keep subfolder weights that a root safetensors index maps to by @danielhanchen in https://github.com/unslothai/unsloth/pull/15184
* Studio sd.cpp: a lost Vulkan device is not a strike; Arc / ROCm keep Vulkan; a UHD iGPU beside a card no longer vetoes Vulkan by @danielhanchen in https://github.com/unslothai/unsloth/pull/14610
* MoE grouped GEMM autotune: key, tune and fit tiles on the experts' own GPU by @danielhanchen in https://github.com/unslothai/unsloth/pull/14719
* Studio: Mask from text runs SAM 3.1 in bf16 unless the card is short of memory by @danielhanchen in https://github.com/unslothai/unsloth/pull/14736
* Studio diffusion: pin streamed image text encoders with the background pinner, and the prefix that fits by @danielhanchen in https://github.com/unslothai/unsloth/pull/15206
* Generation keeps inference_mode on DeepSpeed ZeRO-1/2; only ZeRO-3 needs no_grad by @danielhanchen in https://github.com/unslothai/unsloth/pull/14673
* RMSNorm / LayerNorm: do not hash a symbolic width in the launch settings cache by @danielhanchen in https://github.com/unslothai/unsloth/pull/14727
* Studio: keep MiniMax-H3 PDD float64 math on the host on a device without float64 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14848
* Studio: keep LTX-2.5's bf16 text encoder on an unset request by @danielhanchen in https://github.com/unslothai/unsloth/pull/14737
* Honour gradient_checkpointing assigned on the config after construction by @danielhanchen in https://github.com/unslothai/unsloth/pull/15200
* Studio: keep one GGUF row per build in repos whose model name contains NVFP4 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14733
* Studio diffusion: cap the single-file host RAM refusal reserve at the fp8-storage reserve by @danielhanchen in https://github.com/unslothai/unsloth/pull/14758
* RoPE: 64-bit cos / sin row offsets for tables past 2**31 elements by @danielhanchen in https://github.com/unslothai/unsloth/pull/14714
* XPU: train an explicit bf16 load in bf16 under the fp16 idiom, and match vLLM's dtype when it refuses bf16 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14606
* NVFP4 QAT: accept fp16 autocast and non-contiguous activations by @danielhanchen in https://github.com/unslothai/unsloth/pull/14780
* FSDP2 merged_4bit: keep the base bias on the GPU when lora_bias merges into it by @danielhanchen in https://github.com/unslothai/unsloth/pull/14801
* Studio: read MiniMax-H3 card VRAM on ROCm without a torch context by @danielhanchen in https://github.com/unslothai/unsloth/pull/14732
* Studio: keep a local folder's own text encoder when the text encoder setting is unset by @danielhanchen in https://github.com/unslothai/unsloth/pull/14738
* Studio diffusion: write the runtime int8 / fp8 prequant cache after the load, off the first image by @danielhanchen in https://github.com/unslothai/unsloth/pull/15202
* Stamp no bitsandbytes config on a dequantized fp8 load, and read a quantization_config object before stamping by @danielhanchen in https://github.com/unslothai/unsloth/pull/14803
* FSDP2: restore the checkpoint's 4-bit QuantState on a full DCP load by @danielhanchen in https://github.com/unslothai/unsloth/pull/14747
* Studio: load GGUF on CPU when the auto-selected Vulkan driver hangs or has no device by @danielhanchen in https://github.com/unslothai/unsloth/pull/14521
* Installer: Vulkan llama.cpp for ROCm GPUs without a bundle or hipcc; keep Strix wheels below ROCm 7.13 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14662
* Fused LoRA: run PEFT for a partially merged block whose input needs no grad by @danielhanchen in https://github.com/unslothai/unsloth/pull/14748
* RoPE cache: a cold build inside a compiled block traces again (no is_inference_mode_enabled under compile) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14728
* Context parallel gather: correct gradients under torch.compile, and a guard for in-place edits of returned tensors by @danielhanchen in https://github.com/unslothai/unsloth/pull/15231
* Native FSDP2: restore the exact reshard-after-forward setting after generate by @danielhanchen in https://github.com/unslothai/unsloth/pull/14762
* Native FSDP2: keep accelerate's FSDP2 for UNSLOTH_FSDP2=1 on XPU / NPU / other non-CUDA installs by @danielhanchen in https://github.com/unslothai/unsloth/pull/14760
* Studio diffusion: streamed offload copies outside inference mode, so each compiled block traces once by @danielhanchen in https://github.com/unslothai/unsloth/pull/15223
* Flex tuned backward: leave caller tiles and small sparse blocks to Inductor by @danielhanchen in https://github.com/unslothai/unsloth/pull/15228
* Native FSDP2: write sub-mesh saves from the mesh's own first rank by @danielhanchen in https://github.com/unslothai/unsloth/pull/14761
* Mixed NVIDIA hosts: bf16 and compile follow the current device; check where the weights landed after loading by @danielhanchen in https://github.com/unslothai/unsloth/pull/14622
* Block CUDA graphs: copy parameter gradients out of the graph pool by @danielhanchen in https://github.com/unslothai/unsloth/pull/15207
* Drop the duplicate has_real_cuda import in the torchao route test by @danielhanchen in https://github.com/unslothai/unsloth/pull/15239
* Route ORPO, CPO, KTO, DPO and TRL 1.15's fused head to the zoo fused linear kernel by @danielhanchen in https://github.com/unslothai/unsloth/pull/14185
* Studio: keep loading a downloaded retired FLUX.3 full copy from disk by @danielhanchen in https://github.com/unslothai/unsloth/pull/14835
* Cross entropy: keep the loss and label gradient of confident tokens by @mlzoo in https://github.com/unslothai/unsloth/pull/15140
* Inductor readback barrier: key the compile cache when a user pass is already set by @danielhanchen in https://github.com/unslothai/unsloth/pull/15208
* Studio diffusion: read a pipeline's .fp16 weight files on fp16 loads (SDXL reads 6.5 GB, not 12.9 GB) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15195
* MoE dW: fall back to the legacy kernel when a per-expert tile overflows and no smaller tile is known by @danielhanchen in https://github.com/unslothai/unsloth/pull/15238
* Studio: offer, size and pin every MIG GPU instance CUDA enumerates on R570+ drivers by @danielhanchen in https://github.com/unslothai/unsloth/pull/14981
* Studio diffusion: price a released pipeline from its bf16 table while its cache is incomplete by @danielhanchen in https://github.com/unslothai/unsloth/pull/15236
* Pipeline parallel x native FSDP2 data parallel x tensor parallel for dense decoders by @danielhanchen in https://github.com/unslothai/unsloth/pull/15204
* Studio: read diffusion.py as utf-8 in the encoder pin structural test by @danielhanchen in https://github.com/unslothai/unsloth/pull/15242
* Train the float8 FSDP2 reference in a fresh process like the sharded ranks by @danielhanchen in https://github.com/unslothai/unsloth/pull/15250
* Compiled blocks: packed rows run varlen attention outside the graph by @danielhanchen in https://github.com/unslothai/unsloth/pull/14808
* Decode graphs: grow the KV cache instead of reserving max_new_tokens, and capture on the model's GPU by @danielhanchen in https://github.com/unslothai/unsloth/pull/15237
* Studio: make Keep multiple models loaded unload idle models before spilling a load to the CPU by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15246
* Studio: show one composer button while a reply streams by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15248
* RoPE: constexpr the strides and head counts fixed per model by @danielhanchen in https://github.com/unslothai/unsloth/pull/15243
* Refuse accelerate config cp_size under Unsloth SFT, not only TrainingArguments by @danielhanchen in https://github.com/unslothai/unsloth/pull/15212
* Refuse transformers / accelerate cp_size under Unsloth DPO and GRPO by @danielhanchen in https://github.com/unslothai/unsloth/pull/15229
* SFT: compute loss_type="dft" on TRL's fused LM head instead of silently training NLL by @danielhanchen in https://github.com/unslothai/unsloth/pull/15213
* Route PPO, RLOO, BCO, Online DPO, XPO, Nash-MD and GKD to the zoo fused linear kernels by @danielhanchen in https://github.com/unslothai/unsloth/pull/15244
* MoE dW accumulate test: compare in-place against grad + dW, check the exact 1 on CUDA only by @danielhanchen in https://github.com/unslothai/unsloth/pull/15254
* Studio: keep a Settings-picked embedder visible in the Hub by @danielhanchen in https://github.com/unslothai/unsloth/pull/15256
* Define _recover_vulkan_stall below the CPU fallback it calls by @danielhanchen in https://github.com/unslothai/unsloth/pull/15261
* TP x FSDP2 parity test: keep AdamW out of its eps cliff on the lm_head copy by @danielhanchen in https://github.com/unslothai/unsloth/pull/15264
* GRPO truncated-support gate test: lift the block that binds _support_kwargs by @danielhanchen in https://github.com/unslothai/unsloth/pull/15267
* Studio: stop refusing our own llama-server on Windows when psutil misreports its listener (#15022) by @debojyoti-dev in https://github.com/unslothai/unsloth/pull/15034
* Studio: let --no-reasoning-preserve and a custom chat template turn off the Qwen3.8 preserve_thinking default by @debojyoti-dev in https://github.com/unslothai/unsloth/pull/15170
* Studio: allow editing a refreshed reply when the tab Date disagrees by @Souravrajvi0 in https://github.com/unslothai/unsloth/pull/15087
* Fused preference loss test: take TRL's own trainer as the reference by @danielhanchen in https://github.com/unslothai/unsloth/pull/15269
* Studio: give web search engines a connect timeout so a blocked network fails fast (#15143) by @debojyoti-dev in https://github.com/unslothai/unsloth/pull/15161
* Decode graph KV growth test: gate its CUDA skips on has_real_cuda() by @danielhanchen in https://github.com/unslothai/unsloth/pull/15270
* SDPA on cuDNN: bucket masked and prefill calls, keep decode off cuDNN where torch would pick it by @danielhanchen in https://github.com/unslothai/unsloth/pull/15268
* PP gloo parity test: give gemma3 its own per-element grad tolerance by @danielhanchen in https://github.com/unslothai/unsloth/pull/15273
* Flex attention: fitting tiles for Gemma 3 on sm86 / sm89 (L4, A10, RTX 4090) instead of eager by @danielhanchen in https://github.com/unslothai/unsloth/pull/15271
* DPO: UNSLOTH_FUSED_PREFERENCE_LOSS on TRL 1.x DPOTrainer._compute_loss by @danielhanchen in https://github.com/unslothai/unsloth/pull/15277
* PP gloo parity test: size gemma3's grad bounds to its noise on AVX2 kernels by @danielhanchen in https://github.com/unslothai/unsloth/pull/15286
* Studio: cache image native int8 builds in the local prequant cache by @danielhanchen in https://github.com/unslothai/unsloth/pull/15283
* Studio backend tests: forget MCP discovery state between tests by @danielhanchen in https://github.com/unslothai/unsloth/pull/15287
* Studio: build native int8 image transformers per tensor on a cache miss by @danielhanchen in https://github.com/unslothai/unsloth/pull/15289
* Backend CI: run the multi-rank gloo suites in their own Repo tests shard by @danielhanchen in https://github.com/unslothai/unsloth/pull/15291
* Tests: load the helpers ORPO rewriter constants are built with by @danielhanchen in https://github.com/unslothai/unsloth/pull/15296
* Studio: let FLUX.3 Klein edit through the Edit workflow by @danielhanchen in https://github.com/unslothai/unsloth/pull/15263
* Studio video: pin MiniMax-H3's lazily streamed blocks with the background pinner by @danielhanchen in https://github.com/unslothai/unsloth/pull/15297
* Fused preference loss tests: build the CPU float64 model from transformers' own Llama by @danielhanchen in https://github.com/unslothai/unsloth/pull/15301
* Studio GGUF: charge images in the fit and tool-result sizing counts (#14968) by @debojyoti-dev in https://github.com/unslothai/unsloth/pull/15014
* Native FSDP2: keep gathered weights allocated so block CUDA graphs replay by @danielhanchen in https://github.com/unslothai/unsloth/pull/15215
* Studio: control heights, composer fades, API page layout, settings polish by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15232
* Studio: show newly downloaded quants of a loaded GGUF in the model picker by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15233
* Studio: cache fp32-shard video components cast to float16 for later loads by @danielhanchen in https://github.com/unslothai/unsloth/pull/15303
* Studio: one run settings dropdown per model, and the last setting used is what loads by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15247
* Studio: show settings and the row menu on the loaded model in Recommended by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15249
* Studio: one icon per job across the app by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15299
* Studio: show the browser in Project chats by @Souravrajvi0 in https://github.com/unslothai/unsloth/pull/15089
* Fix non-contiguous position indices in fused and unfused RoPE by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/15235
* Model picker contracts: read the multi-quant parent row's gutter through its aliases by @danielhanchen in https://github.com/unslothai/unsloth/pull/15319
* Fix gradients through external inputs_embeds when applying attention masks by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/15234
* Read CSV text cells larger than 128 KB in RawTextDataLoader by @vineethsaivs in https://github.com/unslothai/unsloth/pull/14380
* Keep Gemma embedding normalizer out of place for external inputs_embeds by @danielhanchen in https://github.com/unslothai/unsloth/pull/15308
* Studio: answer 400 to out-of-range sampling on /v1/messages with a Connection model by @vineethsaivs in https://github.com/unslothai/unsloth/pull/15282
* Studio: reject a NaN weight_decay in a training request by @vineethsaivs in https://github.com/unslothai/unsloth/pull/14721
* GRPO kept-set refusals: stop saying UNSLOTH_GRPO_TRUNCATED_SUPPORT=1 was set by @danielhanchen in https://github.com/unslothai/unsloth/pull/15307
* Studio: bring back the scheduled task model picker and model loading by @danielhanchen in https://github.com/unslothai/unsloth/pull/15255
* Count prepared API prompts before GGUF admission by @Imagineer99 in https://github.com/unslothai/unsloth/pull/15294
* Studio Images: one denoiser stream-out per prompt encode, and the Z-Image CFG negative encoded once by @danielhanchen in https://github.com/unslothai/unsloth/pull/15310
* Studio diffusion: cast cache for fp32-shard components at bf16 too, and on the image path (Z-Image-Turbo reads 11.5 GiB, not 22.9) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15321
* TP / PP: every causal LM architecture trains like one process or is refused up front by @danielhanchen in https://github.com/unslothai/unsloth/pull/15230
* Trim comments in unsloth, unsloth_cli and tests by @danielhanchen in https://github.com/unslothai/unsloth/pull/12968
* Studio: reject a training random_seed outside the numpy range up front by @vineethsaivs in https://github.com/unslothai/unsloth/pull/15176
* Studio: keep a system column when the advisor mapping carries metadata by @vineethsaivs in https://github.com/unslothai/unsloth/pull/14999
* Studio diffusion: read hosted files we already ship (LTX-2 fp8 DiT, Qwen-Image-2.1 bf16 VAE), and name a missing int8 text encoder file by @danielhanchen in https://github.com/unslothai/unsloth/pull/15318
* Honour YaRN passed as rope_parameters, and rope_scaling on FastModel by @danielhanchen in https://github.com/unslothai/unsloth/pull/15214
* Fix MOSS-Image GGUF discovery in On Device by @Imagineer99 in https://github.com/unslothai/unsloth/pull/15168
* Align System header controls and avoid the close button by @Imagineer99 in https://github.com/unslothai/unsloth/pull/15295
* Fix GKD normalization after response generation by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/15222
* GKD: never pass a zero generated-token count by @danielhanchen in https://github.com/unslothai/unsloth/pull/15328
* Studio: sample Vulkan drafts on the CPU when the vocab misaligns the logits rows by @danielhanchen in https://github.com/unslothai/unsloth/pull/15258
* Studio video: write the offloaded native int8 build to the prequant cache after the load (Wan2.2-A14B first clip 97 s sooner) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15331
* Studio: Cosmos3-Nano and Cosmos3-Edge video families by @sbabamohamad in https://github.com/unslothai/unsloth/pull/14554
* Studio diffusion: seed the small-host int8 placement from its measured peak (FLUX.2-klein on a 12.7 GB T4: 30.4 to 10.6 s per image) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15330
* Native FSDP2: fix generate after QAT convert (mixed torch.Tensor and DTensor) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15311
* Studio: open the tile's own menu on a right-click in the Images strip by @debojyoti-dev in https://github.com/unslothai/unsloth/pull/15276
* Native FSDP2: memory-scalable 16-bit loading (each rank reads only its shard), and the fp16 start scale on sub-meshes by @danielhanchen in https://github.com/unslothai/unsloth/pull/15225
* Studio: keep Images, Video and Hub search typing responsive by @danielhanchen in https://github.com/unslothai/unsloth/pull/15306
* Fix TRL 0.27-0.28 GRPOTrainer import on transformers >= 5.3 (No module named 'weave') by @danielhanchen in https://github.com/unslothai/unsloth/pull/15343
* Compiled blocks: packed rows run the flash varlen kernel inside the graph by @danielhanchen in https://github.com/unslothai/unsloth/pull/15325
* Studio: warn when a custom Hub endpoint redirects downloads to huggingface.co by @danielhanchen in https://github.com/unslothai/unsloth/pull/15329
* torchrun: plain Trainer DDP find_unused default, FSDP2-collective SentenceTransformer save by @danielhanchen in https://github.com/unslothai/unsloth/pull/15324
* Intel XPU: fix 4bit dequantize and gemv on plain (not double-quantized) absmax by @danielhanchen in https://github.com/unslothai/unsloth/pull/15322
* Trim comments in the Studio backend by @danielhanchen in https://github.com/unslothai/unsloth/pull/12967
* Trim comments in the installers, scripts and CI config by @danielhanchen in https://github.com/unslothai/unsloth/pull/12969
* Trim comments in the installer entry scripts by @danielhanchen in https://github.com/unslothai/unsloth/pull/15333
* Studio diffusion: pin FLUX.2-klein's reduction-config filter on every arch (same seed, same image across processes) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15340
* Trim comments in the Studio frontend and Tauri shell by @danielhanchen in https://github.com/unslothai/unsloth/pull/12966
* Studio: exclude NVIDIA NPU from GPU memory accounting by @danielhanchen in https://github.com/unslothai/unsloth/pull/15334
* Import without Triton: define Unsloth's kernels against the zoo triton stub, visible to unsloth only by @danielhanchen in https://github.com/unslothai/unsloth/pull/15346
* Tests: name the encoding in the gloo export guard, and treat a bare device index as CUDA in the YaRN load check by @danielhanchen in https://github.com/unslothai/unsloth/pull/15351
* fix(studio): distinguish media RAM offloading from insufficient memory by @danielhanchen in https://github.com/unslothai/unsloth/pull/15341
* Tensor parallel from UNSLOTH_TP_SIZE for unmodified training scripts, with Trainer checkpoints and 8-bit AdamW by @danielhanchen in https://github.com/unslothai/unsloth/pull/15326
* Tests: follow TRL's renamed tiny Phi-3 and Qwen3.5 repos by @danielhanchen in https://github.com/unslothai/unsloth/pull/15355
* Studio: identify models in download progress by @danielhanchen in https://github.com/unslothai/unsloth/pull/15335
* Studio: show diffusion training preparation progress by @danielhanchen in https://github.com/unslothai/unsloth/pull/15337
* Studio: exclude diffusion models from Chat's On Device list by @danielhanchen in https://github.com/unslothai/unsloth/pull/15336
* Do not serve inference_mode packed metadata to a training forward by @danielhanchen in https://github.com/unslothai/unsloth/pull/15347
* Studio: stop the macOS sandbox probe from leaking processes that spin forever by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15345
* CI: rank apt mirrors by speed so a slow Azure mirror cannot time out apt steps by @danielhanchen in https://github.com/unslothai/unsloth/pull/15350
* FP8 fp16 dequant: keep autograd for a trainable weight or scale by @danielhanchen in https://github.com/unslothai/unsloth/pull/15354
* Studio: safer saved run settings, Always load, and API tab tidy-up by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15338
* Bump trufflesecurity/trufflehog in / by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/15366
* Bump step-security/harden-runner in / by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/15362
* Studio diffusion: the prompt encode streams only the free-memory shortfall by @danielhanchen in https://github.com/unslothai/unsloth/pull/15348
* Studio diffusion: cast-cache writes read block-streamed tensors from their host copy by @danielhanchen in https://github.com/unslothai/unsloth/pull/15357
* Block compile: keep each compiled block whole under DDP (DeepSeek-OCR torchrun) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15359
* Studio: reserve the DSpark/DFlash sidecar in --fit-target and recover from a Metal out-of-memory by @danielhanchen in https://github.com/unslothai/unsloth/pull/14431
* Studio: keep a row's control by its title when a description sits under it by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15349
* Studio: one owner for every request to llama-server, so a crashed server recovers on every API route by @oobabooga in https://github.com/unslothai/unsloth/pull/15138
* Studio video: keep the untiled decode gate visible under the stream encoder, skip the fp32 VAE rerun on non-finite latents, refuse NaN clips clearly by @danielhanchen in https://github.com/unslothai/unsloth/pull/15339
* Studio: one request per chat model load, sent to both /validate and /load by @oobabooga in https://github.com/unslothai/unsloth/pull/15139
* FSDP2: run GGUF, torchao, OpenVINO and GGML exports on rank 0 instead of refusing them by @danielhanchen in https://github.com/unslothai/unsloth/pull/15353
* Studio diffusion: fuse the int8 SwiGLU MLP on block-streamed Qwen-Image-2.1 denoisers by @danielhanchen in https://github.com/unslothai/unsloth/pull/15370
* Studio: prompt edit box, menu heading chips, hub Run, files panel, loaded row menu by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15375

## New Contributors
* @samihsq made their first contribution in https://github.com/unslothai/unsloth/pull/14181
* @mlzoo made their first contribution in https://github.com/unslothai/unsloth/pull/15140
* @sbabamohamad made their first contribution in https://github.com/unslothai/unsloth/pull/14554

**Full Changelog**: https://github.com/unslothai/unsloth/compare/v0.1.910-beta...v0.1.911-beta

---

> **Source** [unslothai/unsloth](https://github.com/unslothai/unsloth) · `v0.1.911-beta` · 2026-10-26 · [upstream release](https://github.com/unslothai/unsloth/releases/tag/v0.1.911-beta)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
