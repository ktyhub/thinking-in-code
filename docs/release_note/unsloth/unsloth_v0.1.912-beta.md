---
title: "unsloth v0.1.912-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.912-beta"
version: "v0.1.912-beta"
published: "2026-10-28"
type: "pre"
lang: "en"
summary: "Halloween 👻 is here. Through October, a Trick or treat row in the sidebar opens eleven Halloween themes, spooky greetings and a few spiders and bats."
---

# unsloth v0.1.912-beta

Halloween 👻 is here. Through October, a **Trick or treat** row in the sidebar opens eleven Halloween themes, spooky greetings and a few spiders and bats.

This release also speeds up the first launch, Linux tool calls and model loading, and trains compatible fine-tuning jobs together with multi-LoRA.

<p align="center">
<img width="500" alt="Unsloth app" src="https://github.com/user-attachments/assets/36f5a627-e30c-461a-bf55-508aa3f30fb4" />
</p>



## Highlights

- **Trick or treat**: 🎃 new Halloween themes - until Nov 1
- **Faster Unsloth**: 2x faster first launch, plus speedups for tool calls, model lists, dataset prep and MiniMax-H3 loads
- **Multi-LoRA batching**: up to 4 compatible queued fine-tuning jobs train together
- **SGLang thinking + auto-compact**: Resume and JSON output now work on vLLM and SGLang too
- **Browser use switch**: let models control the built-in browser from its new tab page

## Optimizations

- Setup now precompiles Python files, so the first launch is about 2x faster.
- On Linux, tool calls start in 1 to 2 ms instead of 84 to 174 ms with a 2 GB server process.
- With 497 cached models, the model list uses about a third of the CPU time it did.
- Preparing a 1,000-row chat dataset for Gemma 3 4B took 1.75 s instead of 6.6 s in our test.
- MiniMax-H3 loaded in 49 s instead of 61 s on a Linux A100.

## Multi-LoRA + API

When several compatible jobs wait in the fine-tuning queue, Unsloth now trains them together, each with its own LoRA adapter on a shared base model.

- Jobs sent while the GPU is busy queue up in order, and each can be cancelled on its own.
- Load a job's `fine_tuned_model` name to chat with its trained adapter.
- `/v1/videos` requests now queue while a clip renders, and matching `/v1/images/generations` requests are batched.

**How it works**

- New Triton kernels run the base layer once per batch, while each adapter learns only from its own tokens with its own loss and learning rate.
- With 4 adapters, a 4096x4096 layer's forward and backward pass ran 1.52x faster than one adapter at a time (A100, bf16, rank 16).

## Chat + tools

- Local models skip tool calls that hit the output limit, so a half-written `cat > app.py` can't overwrite a file.
- Before, cut-off rewrites shrank a 175-line test file to as few as 6 lines on an RTX 3090.
- Thinking models such as Qwen3 and DeepSeek R1 now show their reasoning and the Think toggle on SGLang.
- With Auto-compact on, long SGLang chats drop their oldest turns and keep answering.
- On vLLM and SGLang, you can resume a reply cut off at Max Tokens and request JSON with `response_format`.

## Browser + Desktop

- The browser's new tab page has a **Browser use** switch that lets models control the browser.
- On Desktop, a browser agent working for a temporary chat no longer adds pages to your history.
- On macOS with Safari 18.4 or earlier, Desktop browser tabs and their close buttons work again.
- **Log out** is now in the Unsloth Desktop user menu.

## Trick or treat

The **Trick or treat…** row sits above **More** in the sidebar and opens a Halloween menu.

- Pick one of eleven themes, such as Pumpkin, Coven and Ghost Ship, each with a light and dark mode.
- Turn on **Spooky greetings** and new chats open with a Halloween line and sloth.
- With **Spiders and bats** on, Halloween themes get the odd spider and bats crossing the window.
- Not sure which theme? **Trick or treat!** picks one at random.

Unsloth returns to normal at midnight on November 1, or right away with **Remove now**.

## Training

- Gemma 4 E2B and E4B now keep a dataset's thinking text in training instead of dropping it.
- New chat training setups turn on sequence packing and **Assistant completions** where the model and data support them.
- Local JSON and JSONL datasets load even when later rows add new keys.

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
* Studio Images: no toast when the prompt upsampler is not available by @danielhanchen in https://github.com/unslothai/unsloth/pull/15365
* Bump install.sh / install.ps1 pins to unsloth>=2026.10.9 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15380
* TP Trainer parity tests: run AdamW with eps 1e-4 so reduction-order noise is not amplified by @danielhanchen in https://github.com/unslothai/unsloth/pull/15381
* Studio: price per-layer embedding and Engram lookup tables as host or disk memory, not VRAM by @danielhanchen in https://github.com/unslothai/unsloth/pull/14465
* Studio video: refuse NaN / inf decodes for every family before a PIL / uint8 cast or clamp hides them by @danielhanchen in https://github.com/unslothai/unsloth/pull/15374
* Prompt queue: row button labels do not take the next row's clicks by @danielhanchen in https://github.com/unslothai/unsloth/pull/15383
* Studio diffusion: pre-seed the background compile's float specialisations on a returning load by @danielhanchen in https://github.com/unslothai/unsloth/pull/15393
* Studio sd.cpp: verify a new bundle starts before it replaces the installed one; Windows ROCm without the HIP SDK uses Vulkan by @danielhanchen in https://github.com/unslothai/unsloth/pull/15371
* TP Trainer parity tests: keep eps 1e-4 to the UNSLOTH_TP_SIZE runs, native Trainer runs back on the default by @danielhanchen in https://github.com/unslothai/unsloth/pull/15397
* Multi-account Playwright: retry the login page once when the app's own logout redirect aborts it by @danielhanchen in https://github.com/unslothai/unsloth/pull/15398
* Studio video: refuse a NaN render on the native MiniMax-H3 route by @danielhanchen in https://github.com/unslothai/unsloth/pull/15394
* TP x FSDP2 parity test: per-arch step-norm tolerance for phi3's fused shards by @danielhanchen in https://github.com/unslothai/unsloth/pull/15400
* FSDP2 / DDP: only keep torchao weights FSDP2 cannot shard out of fully_shard and the DDP broadcast by @danielhanchen in https://github.com/unslothai/unsloth/pull/15373
* Studio backend tests: close a scoped MCP session a test leaves cached by @danielhanchen in https://github.com/unslothai/unsloth/pull/15407
* Keep SFT loss_type="dft" on the DFT objective when label smoothing is set by @danielhanchen in https://github.com/unslothai/unsloth/pull/15396
* loader: do not restore an fp8 quantization_config over dequantized weights by @danielhanchen in https://github.com/unslothai/unsloth/pull/15364
* FSDP2 bitsandbytes: no per-parameter device sync, bounded GPU memory in the optimizer save by @danielhanchen in https://github.com/unslothai/unsloth/pull/15384
* Tensor parallel: generate, adapter / tokenizer saves, merged and GGUF exports, and reload cells under UNSLOTH_TP_SIZE by @danielhanchen in https://github.com/unslothai/unsloth/pull/15368
* Tensor parallel: average fp16 dp gradients in fp32 so finite gradients cannot sum to inf by @danielhanchen in https://github.com/unslothai/unsloth/pull/15415
* FSDP2: gather before clearing the post-forward mesh in native_fsdp2_unsharded by @danielhanchen in https://github.com/unslothai/unsloth/pull/15426
* gpt-oss: read config.transformers_weights before the standard filenames when probing the expert layout by @danielhanchen in https://github.com/unslothai/unsloth/pull/15386
* Native FSDP2 fp16 scaler: agree on overflow over ranks without an explicit unscale_, and give fused optimizers one 0 / 1 flag over all devices by @danielhanchen in https://github.com/unslothai/unsloth/pull/15416
* Attention: packed fp32 rerouted to xformers keeps an fp32 output without autocast by @danielhanchen in https://github.com/unslothai/unsloth/pull/15410
* Tests: fix the two spoof-safety lint failures on main by @danielhanchen in https://github.com/unslothai/unsloth/pull/15454
* Studio tests: queue each FIFO admission waiter before starting the next by @danielhanchen in https://github.com/unslothai/unsloth/pull/15457
* Studio video: pre-seed the denoiser compile's float specialisations on a returning load by @danielhanchen in https://github.com/unslothai/unsloth/pull/15406
* Keep DeepseekV4 per-label rope bases when rope_scaling is replaced on transformers 5.21 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15425
* Studio: centre the chat column under classic scroll bars in WebKit by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15392
* Studio: a switch per permission mode in Settings > Sandbox by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15469
* Studio: Run settings divider, preset picker fill and a clearer Always load by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15472
* Studio: top-align the settings rows the shared row components do not cover by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15468
* Studio: Library chat, project and section cards keep one size by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15471
* Studio: solid primary buttons on update notifications by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15470
* Studio: API examples behind one tab row, an access group, API page fixes by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15467
* Studio: Audio Edit step numbers as text, standard Transcribe icon by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15484
* Studio: size the Transcribe icon from its label by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15486
* Studio diffusion: pin Qwen-Image-2.1's reduction-config filter (same seed, same image across processes) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15455
* Save: compare fused 4-bit expert bytes bitwise for float quant_storage by @danielhanchen in https://github.com/unslothai/unsloth/pull/15378
* Version compat: transformers 5.21.0 is tagged v5.21 upstream by @danielhanchen in https://github.com/unslothai/unsloth/pull/15438
* Studio tests: turn Hub telemetry off where mocked Hub requests are counted by @danielhanchen in https://github.com/unslothai/unsloth/pull/15453
* Studio tests: probe int8 CPU quantize + flatten apart from the cache assertions by @danielhanchen in https://github.com/unslothai/unsloth/pull/15459
* FP8 block decode: keep the fused small-M kernel for fp16 when torchao is selected by @danielhanchen in https://github.com/unslothai/unsloth/pull/15361
* QAT: fake quantize embeddings under FSDP1 and torch.func.functional_call by @danielhanchen in https://github.com/unslothai/unsloth/pull/15385
* Routing replay: score named PEFT reference adapters with their own routing by @danielhanchen in https://github.com/unslothai/unsloth/pull/15387
* fast_inference under torchrun: every rank takes the same vLLM-or-HF path by @danielhanchen in https://github.com/unslothai/unsloth/pull/15395
* Settings contract tests: follow MonitorLink into the API page's access group by @danielhanchen in https://github.com/unslothai/unsloth/pull/15500
* FSDP2 sharded loading gloo test: barrier before a rank tears down its group by @danielhanchen in https://github.com/unslothai/unsloth/pull/15499
* MXFP4 packed matmul: bound the dX decode like the forward below sm_80 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15376
* Studio: orange Full access in permission menus, sandbox docs link, Confirm by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15504
* Studio video: size the VAE decode from free memory after the denoiser offload (wider tiles, same clip whether the CUDA graph is kept or dropped) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15464
* Studio: keep timestamps off for every GPT transcription model on a connection by @danielhanchen in https://github.com/unslothai/unsloth/pull/15437
* for_training flag test: lift every _utils helper for_training reaches by @danielhanchen in https://github.com/unslothai/unsloth/pull/15493
* Studio video: size the hosted H3 text encoder before the unified-memory guard by @danielhanchen in https://github.com/unslothai/unsloth/pull/15474
* Studio engines: certifi 2026.10.19 in the vLLM and SGLang locks by @danielhanchen in https://github.com/unslothai/unsloth/pull/15495
* tests: stub the tensor parallel guard in the for_training extraction harness by @danielhanchen in https://github.com/unslothai/unsloth/pull/15498
* Studio: use shared download manager for diffusion training by @danielhanchen in https://github.com/unslothai/unsloth/pull/15476
* Precision conflict test: lift every loader.py helper from_pretrained reaches by @danielhanchen in https://github.com/unslothai/unsloth/pull/15515
* MXFP4 low memory test: gate the chunked dX budget test on a real CUDA device by @danielhanchen in https://github.com/unslothai/unsloth/pull/15516
* Add batched multi-LoRA training kernels by @danielhanchen in https://github.com/unslothai/unsloth/pull/14648
* Studio: classify host pinning by the target device, not the current one by @danielhanchen in https://github.com/unslothai/unsloth/pull/15463
* Studio: account hosted quantized components of every image and video family in cache cleanup by @danielhanchen in https://github.com/unslothai/unsloth/pull/15487
* Studio ROCm: tell self from cross attention without guarding the query length on the key length by @danielhanchen in https://github.com/unslothai/unsloth/pull/15458
* Scan baseline: re-review the seven unsloth-zoo sites 2026.10.9 moved by @danielhanchen in https://github.com/unslothai/unsloth/pull/15524
* fix(studio): center sidebar header icons in hover circles by @wasimysaid in https://github.com/unslothai/unsloth/pull/15528
* Studio: tighter gap under the Chat with files header by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15523
* Keep Mamba x_proj and out_proj unquantized for the fused mamba_ssm training path by @danielhanchen in https://github.com/unslothai/unsloth/pull/15377
* Studio diffusion: keep the compiled int8 W8A8 linear at or below the eager peak, honor force-eager by @danielhanchen in https://github.com/unslothai/unsloth/pull/15456
* Studio: Video Create and Train tabs, media header icons, Images and Video linked by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15520
* Studio: More menu hover pill and row height, grouped chat options menu by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15519
* Studio: media rails keep their width when the scrollbar appears by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15522
* Studio: preset and Inpaint icons, aligned preset save row, component file fields at select height by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15530
* fix(studio): center header menu dots without enlarging them by @wasimysaid in https://github.com/unslothai/unsloth/pull/15534
* Full finetuning: dequantize block FP8 checkpoints on load by @danielhanchen in https://github.com/unslothai/unsloth/pull/15367
* FP8 TMA block GEMM: cut per-call descriptor host cost by @danielhanchen in https://github.com/unslothai/unsloth/pull/15372
* float8_training: keep Accelerate dispatch hooks on converted layers by @danielhanchen in https://github.com/unslothai/unsloth/pull/15363
* CPU backend: export load_ebook_dataset, RawTextDataLoader and TextPreprocessor by @danielhanchen in https://github.com/unslothai/unsloth/pull/15501
* Flex attention: keep float32 Gemma 3 off the sm86 / sm89 small tiles by @danielhanchen in https://github.com/unslothai/unsloth/pull/15401
* Packed attention: recheck the SDPA policy before serving cached varlen metadata by @danielhanchen in https://github.com/unslothai/unsloth/pull/15402
* Studio: Browser use switch on the browser's new tab page by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15540
* Studio: heading for the API monitor card in Settings > API by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15544
* Fused LoRA: an unfrozen plain Linear after merge_and_unload / unload runs its own forward by @danielhanchen in https://github.com/unslothai/unsloth/pull/15399
* RoPE override: normalise the legacy type key on per-layer-type configs by @danielhanchen in https://github.com/unslothai/unsloth/pull/15403
* FSDP2: keep the use_cpu reclaim reachable when only `import unsloth` wrapped the Trainer by @danielhanchen in https://github.com/unslothai/unsloth/pull/15427
* Studio diffusion: do not cache a VAE rescaled for fp16 decode by @danielhanchen in https://github.com/unslothai/unsloth/pull/15511
* Studio: recognise model.safetensors-N-of-M shards for training resume (#15405) by @indrajeetapache in https://github.com/unslothai/unsloth/pull/15408
* Risky loader baseline: record the CPU backend dataprep loader from #15501 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15549
* Keep a wrapped Inductor pass's None uuid as a cache opt-out by @danielhanchen in https://github.com/unslothai/unsloth/pull/15429
* FSDP2 SentenceTransformer save: honour create_model_card=False and keep training mode by @danielhanchen in https://github.com/unslothai/unsloth/pull/15431
* Keep Unsloth Studio data when following the toolkit installer's command by @NilayYadav in https://github.com/unslothai/unsloth/pull/15450
* Studio diffusion: keep SDXL ControlNet running after the T4 resident promotion by @danielhanchen in https://github.com/unslothai/unsloth/pull/15446
* Desktop frontend contract: follow the media header links to their icon buttons by @danielhanchen in https://github.com/unslothai/unsloth/pull/15550
* NVFP4 QAT: keep the fake-quantized linear out of compiled graphs by @danielhanchen in https://github.com/unslothai/unsloth/pull/14812
* Packed attention: run the in-graph varlen probe with grad enabled, so a checkpoint's no_grad first trace keeps the varlen path by @danielhanchen in https://github.com/unslothai/unsloth/pull/15414
* Notebook sync durability test: pick the abandoned-restore victims in the state's own order by @danielhanchen in https://github.com/unslothai/unsloth/pull/15548
* Studio diffusion: shipped activation seed for Qwen-Image-Edit placement by @danielhanchen in https://github.com/unslothai/unsloth/pull/15542
* Studio: neutralize DeepSeek-V4.1's image marker in replayed assistant text by @debojyoti-dev in https://github.com/unslothai/unsloth/pull/15288
* Studio: revealing a chat's sandbox folder is owner-only by @danielhanchen in https://github.com/unslothai/unsloth/pull/15512
* Studio: size MIG CUDA instances from their own slice, never a physical card row by @danielhanchen in https://github.com/unslothai/unsloth/pull/15465
* Studio video: drain palettegen per frame in the two-pass GIF export by @danielhanchen in https://github.com/unslothai/unsloth/pull/14958
* Studio training: describe public mirror access separately from model licensing by @danielhanchen in https://github.com/unslothai/unsloth/pull/15475
* Studio video: MiniMax-H3 cache-only loads name the missing file and how to fix it by @danielhanchen in https://github.com/unslothai/unsloth/pull/15547
* QK norm + RoPE backward: pin the dX contraction so compiled fp16 matches eager on ROCm by @danielhanchen in https://github.com/unslothai/unsloth/pull/15506
* Block compile: mark Unsloth's own compiled region apart from a user's enclosing compile by @danielhanchen in https://github.com/unslothai/unsloth/pull/15526
* Studio: keep browser tabs clickable on macOS with Safari 18.4 and earlier by @danielhanchen in https://github.com/unslothai/unsloth/pull/14368
* Refuse Trainer(model_init=...) under UNSLOTH_TP_SIZE instead of silently skipping tensor parallel by @danielhanchen in https://github.com/unslothai/unsloth/pull/15424
* Studio diffusion: fused RMSNorm on the fp16 eager Z-Image path by @danielhanchen in https://github.com/unslothai/unsloth/pull/15543
* Studio diffusion: keep reference headroom on multi-GPU FLUX.2 klein splits so edits are not refused by @danielhanchen in https://github.com/unslothai/unsloth/pull/14858
* cuDNN SDPA backward: give grad_output the output's layout on torch 2.6 - 2.13 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15445
* Studio: show the chat Seed setting for vLLM models by @NilayYadav in https://github.com/unslothai/unsloth/pull/15432
* Studio: refuse a reused temp folder that other users can still read by @danielhanchen in https://github.com/unslothai/unsloth/pull/14962
* Studio native cache write: read each weight from the live module at write time so offload can reclaim VRAM by @danielhanchen in https://github.com/unslothai/unsloth/pull/15461
* Studio: queue OpenAI fine-tuning jobs while the GPU is busy by @danielhanchen in https://github.com/unslothai/unsloth/pull/14645
* Studio: thinking support for models served by the SGLang engine by @NilayYadav in https://github.com/unslothai/unsloth/pull/15433
* Studio diffusion: store chunked int8 W8A8 results straight into the output rows by @danielhanchen in https://github.com/unslothai/unsloth/pull/15533
* Studio: keep a temporary chat's browser agent pages out of history by @danielhanchen in https://github.com/unslothai/unsloth/pull/14956
* REAP: accept LoRA models merged on PEFT 0.18 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14850
* Make the one scored completion GRPO test follow the TRL version by @danielhanchen in https://github.com/unslothai/unsloth/pull/14775
* MXFP4 dequantize branch test: run the locals the branch reads ahead of it by @danielhanchen in https://github.com/unslothai/unsloth/pull/15558
* Studio: respell user ngram-mod extra args for older llama.cpp builds by @danielhanchen in https://github.com/unslothai/unsloth/pull/14880
* fix(studio): time a speculative vision batch row's prefill from before add() by @Lyxot in https://github.com/unslothai/unsloth/pull/15517
* Studio: start overlapping document chunks on a whole word by @NilayYadav in https://github.com/unslothai/unsloth/pull/15442
* Studio: update managed Node to 24.22.1, apply new pins on every update path, and keep the pin current by @oobabooga in https://github.com/unslothai/unsloth/pull/15423
* Keep each unsloth eval run's results instead of overwriting the last by @NilayYadav in https://github.com/unslothai/unsloth/pull/15451
* Studio: track MPS denoise progress with torch.mps events by @Lyxot in https://github.com/unslothai/unsloth/pull/15323
* fix(studio): price DeepSeek-V4.1 oQ quants as unsloth-zoo loads them by @Lyxot in https://github.com/unslothai/unsloth/pull/15508
* Studio engines: verify TLS against Studio's certifi bundle by @danielhanchen in https://github.com/unslothai/unsloth/pull/15509
* Studio: keep llama-bench in the llama.cpp install by @danielhanchen in https://github.com/unslothai/unsloth/pull/14881
* Studio: keep chat-installed packages out of plugin discovery on approved host calls by @danielhanchen in https://github.com/unslothai/unsloth/pull/14948
* Studio: keep sidebar sections and favorites made in another window by @NilayYadav in https://github.com/unslothai/unsloth/pull/15440
* feat(studio): store ComfyUI fp8 layers as fp8 on Apple MPS when the widened model would not fit by @Lyxot in https://github.com/unslothai/unsloth/pull/15507
* Studio: enable packing and assistant-only training defaults where supported by @danielhanchen in https://github.com/unslothai/unsloth/pull/15478
* Studio mermaid guard: a quoted @{ cannot hide a later remote image by @danielhanchen in https://github.com/unslothai/unsloth/pull/14907
* Studio: keep documents searchable after upgrading a Chat only install by @NilayYadav in https://github.com/unslothai/unsloth/pull/15443
* Studio video: map MiniMax-H3's hosted int8 checkpoint instead of reading it whole (faster load, same weights) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15563
* Studio: rewind files more than four folders deep by @NilayYadav in https://github.com/unslothai/unsloth/pull/15439
* Studio video: pin MiniMax-H3's reduction-config filter (same seed, same clip across processes) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15564
* Studio: train compatible queued fine-tuning jobs together with multi-LoRA by @danielhanchen in https://github.com/unslothai/unsloth/pull/15344
* feat(studio): show MLX versions in Settings by @Lyxot in https://github.com/unslothai/unsloth/pull/15369
* GRPO kept-set refusals: drop the automatic-default wording by @danielhanchen in https://github.com/unslothai/unsloth/pull/15531
* Studio: keep the MLX chat context when an image or video model takes the GPU by @Lyxot in https://github.com/unslothai/unsloth/pull/15358
* Studio: keep linked folders syncing when files become ignored by @NilayYadav in https://github.com/unslothai/unsloth/pull/15441
* Studio: resume cut-off replies and structured output on vLLM and SGLang by @NilayYadav in https://github.com/unslothai/unsloth/pull/15435
* Keep Codex MCP servers when running unsloth start codex by @NilayYadav in https://github.com/unslothai/unsloth/pull/15452
* Unsloth: show complete chat error messages by @Imagineer99 in https://github.com/unslothai/unsloth/pull/15496
* Studio diffusion: pin the up-front slabs in registered host memory (faster load, same bytes) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15562
* cuDNN SDPA DTensor test: gate on a real CUDA device by @danielhanchen in https://github.com/unslothai/unsloth/pull/15582
* fix(studio): make room for the MLX drafter in the auto offload plan by @Lyxot in https://github.com/unslothai/unsloth/pull/15342
* Studio: chat with a fine-tuned model by the name its job returns by @NilayYadav in https://github.com/unslothai/unsloth/pull/15449
* Studio: auto-compact long chats on the SGLang engine by @NilayYadav in https://github.com/unslothai/unsloth/pull/15434
* Studio video: price deferred pins at their bytes so a returning Wan load pins its text encoder by @danielhanchen in https://github.com/unslothai/unsloth/pull/15612
* gpt-oss: refuse fused 4-bit with dtype float32 on GPUs without bfloat16 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15614
* Studio: leave room for the whole reply cap in the estimated managed-engine fit by @danielhanchen in https://github.com/unslothai/unsloth/pull/15610
* Persist chat pins across clients of the same Unsloth server by @Imagineer99 in https://github.com/unslothai/unsloth/pull/15293
* Video encoder pin test: read video.py as UTF-8 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15623
* Studio: ask before Clear all deletes the desktop transcript history by @NilayYadav in https://github.com/unslothai/unsloth/pull/15570
* Tests: stop pytest 9.2 monkeypatch from deleting torch config entries, and name any test that still does by @danielhanchen in https://github.com/unslothai/unsloth/pull/15626
* Import hoist verifier: a local import re-pointed after its definition moved is not a clash by @danielhanchen in https://github.com/unslothai/unsloth/pull/15622
* fix(studio): reject standalone GGUF adapters before model teardown by @Aafimalek in https://github.com/unslothai/unsloth/pull/15421
* Backend CI: pin pytest below 9.2 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15624
* Studio: Qwen-Image-Edit streamed-tier activation seed keeps more of the DiT resident on tight cards by @danielhanchen in https://github.com/unslothai/unsloth/pull/15645
* Studio: Library cards stay apart at every zoom, one size, 5 per row by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15643
* Studio: audio field titles stop focusing their field, quieter Optional tags by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15651
* Tests: fail grouped tests by name when --dist loadgroup stops grouping (pytest 9.2) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15638
* Studio: Export page in the Train style, Train polish, hide Q4NX without an AMD NPU by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15640
* Studio: rounded browser tabs and hovers, Recents above Suggested once visited by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15649
* Keep LoRA adapters on Mamba x_proj / dt_proj / out_proj when the fused training kernel is available by @danielhanchen in https://github.com/unslothai/unsloth/pull/15539
* Run each FlashAdamW update on its parameter's CUDA device by @danielhanchen in https://github.com/unslothai/unsloth/pull/14773
* Fix the FSDP2 QLoRA non-float parameter guard on Python 3.9 by @danielhanchen in https://github.com/unslothai/unsloth/pull/14774
* Tensor parallel float16: unscale DTensor and plain grads apart in the native ShardedGradScaler by @danielhanchen in https://github.com/unslothai/unsloth/pull/15551
* Block CUDA graphs: run MoE layers and flex attention blocks compiled without graphs by @danielhanchen in https://github.com/unslothai/unsloth/pull/15553
* Flash impl: warn when an explicit fa3 / fa4 request falls back on the device or torch by @danielhanchen in https://github.com/unslothai/unsloth/pull/15554
* Context parallel and async GRPO: recognise gated fast forwards by @danielhanchen in https://github.com/unslothai/unsloth/pull/15559
* Scan baseline: triton 3.9 compile warmup pool by @danielhanchen in https://github.com/unslothai/unsloth/pull/15658
* checkpoint_skip_layers="auto" under torchrun: every rank keeps the smallest planned count by @danielhanchen in https://github.com/unslothai/unsloth/pull/15545
* Studio: recheck that the user is still away before an automatic task swaps models by @danielhanchen in https://github.com/unslothai/unsloth/pull/15436
* Studio: expanded composer fills the chat area, net of attachments by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15650
* Studio: restore the reload icons replaced in #15232 by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15648
* Studio: Scheduled task dialog padding, pill name field, dark New task button by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15647
* Fast decode: follow a model moved after loading (GRPO on a non-default GPU raised cuda:1 and cuda:0) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15677
* Distributed tests: take every MASTER_PORT from the shared rendezvous helper by @danielhanchen in https://github.com/unslothai/unsloth/pull/15679
* Studio: count the cards a CUDA + Vulkan llama.cpp reaches only through Vulkan by @debojyoti-dev in https://github.com/unslothai/unsloth/pull/15466
* Condense module docstrings, keeping the guarantees they state by @danielhanchen in https://github.com/unslothai/unsloth/pull/15594
* install-kernels: install mamba_ssm on sm70 with Triton 3.4+, matching unsloth_zoo by @danielhanchen in https://github.com/unslothai/unsloth/pull/15557
* Keep a dataset's thinking text when training Gemma 4 E2B and E4B by @NilayYadav in https://github.com/unslothai/unsloth/pull/15569
* Studio: say a chat is too long on safetensors models by @NilayYadav in https://github.com/unslothai/unsloth/pull/15616
* Studio: refuse Laya questions whose instructions would be cut by @NilayYadav in https://github.com/unslothai/unsloth/pull/15602
* Studio desktop: never let the login-shell PATH probe hold back launch by @danielhanchen in https://github.com/unslothai/unsloth/pull/15567
* Studio: load mermaid, node-forge and js-yaml on first use, not at startup by @danielhanchen in https://github.com/unslothai/unsloth/pull/15565
* Block CUDA graphs: decide before recording, release the pool, cap FSDP2 kept weights, drop unneeded copies by @danielhanchen in https://github.com/unslothai/unsloth/pull/15352
* Studio: keep ticked check boxes when reading HTML files by @NilayYadav in https://github.com/unslothai/unsloth/pull/15601
* Studio: prompt-length dims stay dynamic for positional block inputs under group offload hooks by @danielhanchen in https://github.com/unslothai/unsloth/pull/15653
* Studio: vendor shadcn's tailwind.css instead of installing the shadcn CLI by @danielhanchen in https://github.com/unslothai/unsloth/pull/15635
* Studio: honour context_overflow on the /v1/messages passthrough by @Shreesh-Sree in https://github.com/unslothai/unsloth/pull/15418
* Studio: bound expires_in_days when creating an API key by @vineethsaivs in https://github.com/unslothai/unsloth/pull/14725
* Studio Desktop: remove the duplicate KDE Wayland title bar on Linux by @Etherll in https://github.com/unslothai/unsloth/pull/15568
* Studio diffusion: the pin budget credits clean mapped page cache inside a capped cgroup by @danielhanchen in https://github.com/unslothai/unsloth/pull/15642
* Clarify training setup feedback and the music entry flow by @Imagineer99 in https://github.com/unslothai/unsloth/pull/15535
* Studio: memoize per-repo lookups inside one model inventory scan by @danielhanchen in https://github.com/unslothai/unsloth/pull/15578
* Studio: encode transient PNGs at zlib level 1 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15579
* Studio: tidy the System page Live monitor and GPU devices by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15705
* Studio: find the backend's child processes from /proc on Linux for /api/system by @danielhanchen in https://github.com/unslothai/unsloth/pull/15592
* MLX: build trl.__all__ on first read instead of importing every TRL export at import by @danielhanchen in https://github.com/unslothai/unsloth/pull/15561
* Studio: walk GGUF tokenizer string arrays through one buffer by @danielhanchen in https://github.com/unslothai/unsloth/pull/15593
* Studio: resolve the gallery folder once per image and video listing by @danielhanchen in https://github.com/unslothai/unsloth/pull/15580
* Studio: hash tokenizers for dataset cache names without their init-only vocab copies by @danielhanchen in https://github.com/unslothai/unsloth/pull/15577
* Studio: answer slow cache sizes at once and walk cache trees faster by @danielhanchen in https://github.com/unslothai/unsloth/pull/15627
* Studio: clear only the compiled cache unsloth_zoo writes to by @danielhanchen in https://github.com/unslothai/unsloth/pull/15628
* Studio: launch full-access tool processes with start_new_session instead of a setsid pre-exec by @danielhanchen in https://github.com/unslothai/unsloth/pull/15595
* CLI: defer YAML, asyncio, rich and the config schema build off import by @danielhanchen in https://github.com/unslothai/unsloth/pull/15585
* Studio: bound tool-call stream scans and decode passthrough lines once by @danielhanchen in https://github.com/unslothai/unsloth/pull/15591
* Studio: step streaming generators on a dedicated thread instead of the pool by @danielhanchen in https://github.com/unslothai/unsloth/pull/15590
* Studio: decode and parse gpt-oss Harmony streams incrementally by @danielhanchen in https://github.com/unslothai/unsloth/pull/15589
* Studio: check local single-file checkpoints without importing the diffusion stack by @danielhanchen in https://github.com/unslothai/unsloth/pull/15587
* Studio: skip the passthrough healer reparse while no held call can close by @danielhanchen in https://github.com/unslothai/unsloth/pull/15618
* Studio: put downloaded GGUFs under the right On Device filter by @NilayYadav in https://github.com/unslothai/unsloth/pull/15571
* Studio: launch sandboxed tool processes without a Python pre-exec on Linux by @danielhanchen in https://github.com/unslothai/unsloth/pull/15625
* Studio: load local JSON datasets whose later rows add keys by @danielhanchen in https://github.com/unslothai/unsloth/pull/15555
* Studio: parse each seed glob and matched file once when applying loader skip rules by @danielhanchen in https://github.com/unslothai/unsloth/pull/15668
* Studio: count ASCII in context estimates without a per-character loop by @danielhanchen in https://github.com/unslothai/unsloth/pull/15659
* Studio: keep ticked PDF form check boxes in knowledge bases by @NilayYadav in https://github.com/unslothai/unsloth/pull/15572
* Studio: faster MLX chat for models loaded in 4-bit by @NilayYadav in https://github.com/unslothai/unsloth/pull/15617
* Studio: keep Qwen-Image-2.1 prompt-length dims dynamic under group offload hooks by @danielhanchen in https://github.com/unslothai/unsloth/pull/15652
* Fix Online DPO crashing at start when use_vllm is on by @NilayYadav in https://github.com/unslothai/unsloth/pull/15598
* Fix GRPO masking of short stop-string completions by @danielhanchen in https://github.com/unslothai/unsloth/pull/15704
* Studio: only trust file search and dictation servers Studio started by @NilayYadav in https://github.com/unslothai/unsloth/pull/15600
* Studio video: park MiniMax-H3's rotating VAEs by re-pointing at their pageable host copy when pinning is not allowed by @danielhanchen in https://github.com/unslothai/unsloth/pull/15715
* [Bug] AMD: Unsloth Studio Images retries the ROCm sd.cpp build on hosts whose ROCm comes only from the torch wheel by @LeoBorcherding in https://github.com/unslothai/unsloth/pull/15430
* Studio: reject tool calls from truncated local generations by @oobabooga in https://github.com/unslothai/unsloth/pull/15428
* Studio: answer 422 to a timestamp or page cursor sqlite cannot store by @vineethsaivs in https://github.com/unslothai/unsloth/pull/15389
* Native FSDP2: clip gradients through Unsloth's clip, not the mixed mesh path by @danielhanchen in https://github.com/unslothai/unsloth/pull/15708
* fast_inference under UNSLOTH_FSDP2=1 torchrun: keep vLLM instead of refusing it by @danielhanchen in https://github.com/unslothai/unsloth/pull/15709
* UNSLOTH_PP_SIZE: install the Trainer wrapper at import, so encoders refuse instead of training as DDP by @danielhanchen in https://github.com/unslothai/unsloth/pull/15710
* Unsloth Studio / Desktop: log out, show the owner's profile in Accounts, and let the owner sign in with a chosen name by @LeoBorcherding in https://github.com/unslothai/unsloth/pull/15619
* [bugfix] Snapshot in-memory DPO policies for the default reference by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/15537
* Studio: calmer login and setup pages with an accent sign-in button by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15731
* Studio: clarify LoRA and training hyperparameter labels by @danielhanchen in https://github.com/unslothai/unsloth/pull/15479
* Model loading: skip the root index probe when the repo listing shows no index by @danielhanchen in https://github.com/unslothai/unsloth/pull/15662
* Studio: overlap model checkpoint downloads with dataset preparation by @danielhanchen in https://github.com/unslothai/unsloth/pull/15483
* Studio desktop: give port validation probes the health watchdog's 10 s budget by @danielhanchen in https://github.com/unslothai/unsloth/pull/15670
* Studio: copy generated SNAC codes to the host once per decode by @danielhanchen in https://github.com/unslothai/unsloth/pull/15666
* Studio: reuse the size probe's repo listing for scoped download blob hashes by @danielhanchen in https://github.com/unslothai/unsloth/pull/15663
* Studio: copy SNAC codes to the host once per example in TTS preprocessing by @danielhanchen in https://github.com/unslothai/unsloth/pull/15660
* Studio: tokenize a repeated chunk text once in the sentence-transformers counter by @danielhanchen in https://github.com/unslothai/unsloth/pull/15664
* Studio: match audio.cpp CUDA runtime to bundle architecture by @danielhanchen in https://github.com/unslothai/unsloth/pull/15491
* Studio: read each PDF page's words once when locating chunk regions by @danielhanchen in https://github.com/unslothai/unsloth/pull/15665
* Studio: convert only the cached unstructured seed rows a caller reads by @danielhanchen in https://github.com/unslothai/unsloth/pull/15667
* Studio: answer ASCII tool result budgets without a per-character scan by @danielhanchen in https://github.com/unslothai/unsloth/pull/15676
* Studio: render /openapi.json once per schema, off the event loop by @danielhanchen in https://github.com/unslothai/unsloth/pull/15684
* Studio: match /assets before the API routes by @danielhanchen in https://github.com/unslothai/unsloth/pull/15669
* Studio: read each dist-info METADATA once per install check by @danielhanchen in https://github.com/unslothai/unsloth/pull/15690
* Studio: delete a RAG document's index rows in one scan per table by @danielhanchen in https://github.com/unslothai/unsloth/pull/15661
* Studio: look up model picker rows by index map instead of a scan per row by @danielhanchen in https://github.com/unslothai/unsloth/pull/15674
* Studio: mention ARM64 in Windows sandbox architecture guidance by @danielhanchen in https://github.com/unslothai/unsloth/pull/15494
* Studio: stop re-stripping an open tool call body on every streamed token by @danielhanchen in https://github.com/unslothai/unsloth/pull/15707
* Studio desktop: start the launch preflight's CLI -h probe during setup by @danielhanchen in https://github.com/unslothai/unsloth/pull/15671
* Studio desktop: run -h and desktop-capabilities at once on a capability cache miss by @danielhanchen in https://github.com/unslothai/unsloth/pull/15672
* Studio: visible light-mode borders, aligned media pickers, new image icons, modern login by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15726
* Studio: count sd-cli WebM frames from VP8 packet headers in inspect_video by @danielhanchen in https://github.com/unslothai/unsloth/pull/15699
* Studio: make Stop work while an MLX model is still reading the prompt by @NilayYadav in https://github.com/unslothai/unsloth/pull/15615
* Studio desktop: share one loopback HTTP client per timeout by @danielhanchen in https://github.com/unslothai/unsloth/pull/15675
* Studio: walk each GGUF tokenizer array once per process and seek past it on later reads by @danielhanchen in https://github.com/unslothai/unsloth/pull/15687
* Faster import unsloth and from_pretrained: fewer GC passes, skip regexes that cannot match by @danielhanchen in https://github.com/unslothai/unsloth/pull/15560
* Studio: log a live generation rate while a reply is still streaming by @NilayYadav in https://github.com/unslothai/unsloth/pull/15390
* Studio desktop: leave the startup screen on server-port instead of at the next 500 ms poll by @danielhanchen in https://github.com/unslothai/unsloth/pull/15673
* Studio: answer keyless admission on the event loop when nothing needs reading by @danielhanchen in https://github.com/unslothai/unsloth/pull/15683
* Studio: report first-step training and gradient accumulation by @danielhanchen in https://github.com/unslothai/unsloth/pull/15480
* Studio: acquire decision datasets alongside model loading by @danielhanchen in https://github.com/unslothai/unsloth/pull/15481
* Studio: compose the FP8 and NVFP4 compile cache tags in a fixed order by @danielhanchen in https://github.com/unslothai/unsloth/pull/15692
* Studio: precompile bytecode after setup so the first launch does not by @danielhanchen in https://github.com/unslothai/unsloth/pull/15646
* Studio: advertise the chat-title repair guards on the thread lists instead of fetching /openapi.json by @danielhanchen in https://github.com/unslothai/unsloth/pull/15685
* Keep an earlier model's smart offloading when a short sequence model loads by @danielhanchen in https://github.com/unslothai/unsloth/pull/15711
* Run xformers attention on the tensors' device (device_map across GPUs gave NaN loss) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15712
* Studio diffusion: run the fused-dequant int8 GEMM on untuned sm80+ archs behind a probe and latency check by @danielhanchen in https://github.com/unslothai/unsloth/pull/15654
* Studio: show cache sizes and clear individual Hugging Face model copies by @danielhanchen in https://github.com/unslothai/unsloth/pull/15488
* Tests: bring three new tests in line with the port and encoding guards by @danielhanchen in https://github.com/unslothai/unsloth/pull/15745
* Studio: queue /v1/videos while a video renders and batch waiting /v1/images/generations requests by @oobabooga in https://github.com/unslothai/unsloth/pull/15613
* Studio training: log the traceback when a model fails to load by @debojyoti-dev in https://github.com/unslothai/unsloth/pull/15620
* Studio: bound the passthrough healer gate to openers the parser would scan by @danielhanchen in https://github.com/unslothai/unsloth/pull/15717
* setup.sh: keep the replaced-script handoff directly behind the dependency pass by @danielhanchen in https://github.com/unslothai/unsloth/pull/15747
* Dependencies: drop four Python packages nothing imports (tyro, flatbuffers, pytorch_tokenizers, mammoth) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15697
* Studio: let the router skip routes whose path prefix cannot match by @danielhanchen in https://github.com/unslothai/unsloth/pull/15682
* Studio: reuse VAE tile blend weights in tiled encode and LTX-2 tiled decode by @danielhanchen in https://github.com/unslothai/unsloth/pull/15700
* Studio: refresh cache sizes that are being re-measured instead of showing the old number by @danielhanchen in https://github.com/unslothai/unsloth/pull/15718
* Studio: web fetch tokenizes a page once and replays it to the later main-content passes by @danielhanchen in https://github.com/unslothai/unsloth/pull/15686
* Studio: keep a Windows console stderr writable while the worker mirror owns fd 2 by @danielhanchen in https://github.com/unslothai/unsloth/pull/15734
* Studio: Trick or treat sidebar row with Halloween themes and spooky greetings by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15678
* Studio: read the VLM and audio detection sets from the transformers registry source instead of importing torch by @danielhanchen in https://github.com/unslothai/unsloth/pull/15688
* Fix Gallery save toast to use the chosen filename by @Imagineer99 in https://github.com/unslothai/unsloth/pull/15725
* Packed attention: full finetuning rows reach varlen (fp32 Q / K under autocast) by @danielhanchen in https://github.com/unslothai/unsloth/pull/15714
* Studio: fewer GC passes while the backend imports, RSA key generated alongside startup by @danielhanchen in https://github.com/unslothai/unsloth/pull/15586
* CLI: load command modules other than studio only when a command is dispatched by @danielhanchen in https://github.com/unslothai/unsloth/pull/15689
* Add AGPLv3 header to desktop release workflow by @wasimysaid in https://github.com/unslothai/unsloth/pull/15755
* Update OpenEnv links to openenv/OpenEnv by @sergiopaniego in https://github.com/unslothai/unsloth/pull/15743
* Saving: stop repeated gc.collect passes once a pass finds nothing by @danielhanchen in https://github.com/unslothai/unsloth/pull/15694
* Studio desktop: hide the window as soon as a quit is committed, and exit the backend without finalization by @Lyxot in https://github.com/unslothai/unsloth/pull/15723
* Tests: follow the media picker's Chat-aligned height, start pwsh through run_pwsh by @danielhanchen in https://github.com/unslothai/unsloth/pull/15758
* Studio: start the torch warm-up stages after the first response is sent by @danielhanchen in https://github.com/unslothai/unsloth/pull/15732
* feat(studio): idle auto-unload an MLX chat model by @Lyxot in https://github.com/unslothai/unsloth/pull/15680
* Studio: remove private helpers and constants that nothing uses by @danielhanchen in https://github.com/unslothai/unsloth/pull/15696
* Studio: Search and Tools on by default for local models by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15644
* Studio desktop: build release with fat LTO and one codegen unit by @danielhanchen in https://github.com/unslothai/unsloth/pull/15566
* Studio: drop three frontend dependencies nothing imports by @danielhanchen in https://github.com/unslothai/unsloth/pull/15634
* Studio desktop: trim the quit hide comments by @danielhanchen in https://github.com/unslothai/unsloth/pull/15760
* Keep RAG WAL sidecars between database operations by @Imagineer99 in https://github.com/unslothai/unsloth/pull/15719
* Studio diffusion: CUDA graph re-check fixes (eager OOM retry on originals, planned negative length records on the first render) by @danielhanchen in https://github.com/unslothai/unsloth/pull/14682
* Studio diffusion: off-GIL CUDA prime does not latch before torch is imported by @danielhanchen in https://github.com/unslothai/unsloth/pull/14683
* Studio FLUX.3 upsampler: pin the sidecar to the native sd.cpp image card by @danielhanchen in https://github.com/unslothai/unsloth/pull/14696
* Studio video: LTX-2.5 dense text-encoder fallback room check prices the load dtype by @danielhanchen in https://github.com/unslothai/unsloth/pull/14664
* Studio fine-tuning queue: run the batch model probe behind the account's path guard by @danielhanchen in https://github.com/unslothai/unsloth/pull/15727
* Studio llama-server args: a value-less ngram-mod flag keeps the next flag by @danielhanchen in https://github.com/unslothai/unsloth/pull/15728
* Tests: the two gc-skip auto dist tests take their port from the shared helper by @danielhanchen in https://github.com/unslothai/unsloth/pull/15729
* Studio login: say Unsloth and size the title with the UI font scale by @danielhanchen in https://github.com/unslothai/unsloth/pull/15759
* Studio: train ChatML datasets whose roles are capitalized by @NilayYadav in https://github.com/unslothai/unsloth/pull/15599
* Studio frontend: bump zod to 4.6.7 (keep katex on 0.16) by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/15746
* Bump the pip group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/15518
* Bump fast-uri from 3.1.8 to 3.1.9 in /docker/jupyter/unsloth_labext in the npm_and_yarn group across 1 directory by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/15637
* Bump the cargo-tauri group in /studio/src-tauri with 4 updates by @dependabot[bot] in https://github.com/unslothai/unsloth/pull/15360
* Studio: confirm Full Access directly from a chat tool approval by @danielhanchen in https://github.com/unslothai/unsloth/pull/15485
* CI: record the lazy CLI command import in the risky-loader baseline by @danielhanchen in https://github.com/unslothai/unsloth/pull/15762
* AppImage E2E: count the app shell as rendered when the splash is already gone by @danielhanchen in https://github.com/unslothai/unsloth/pull/15764
* FSDP2 block CUDA graphs: free the gathered weights of MoE blocks by @danielhanchen in https://github.com/unslothai/unsloth/pull/15720
* cuDNN SDPA grad layout fix: let compiled code modify the SDPA output in place by @danielhanchen in https://github.com/unslothai/unsloth/pull/15721
* Studio: speedometer icon for generation speed on the API page by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15769
* Studio: spider or bats on a third of Halloween pages each by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/15770
* Studio: cast-cache writer reads the host copy offload already keeps instead of waiting out an onload by @danielhanchen in https://github.com/unslothai/unsloth/pull/15698
* Studio: preview JSON Lines datasets with the stdlib, not pyarrow's JSON reader by @lonexreb in https://github.com/unslothai/unsloth/pull/15713
* Clarify Deep Research handoff for research briefs by @Imagineer99 in https://github.com/unslothai/unsloth/pull/15724
* Studio: batch packed fine-tuning jobs, each job packing only its own documents by @danielhanchen in https://github.com/unslothai/unsloth/pull/15733
* Keep packed documents apart under flash attention when layers get mRoPE position ids by @danielhanchen in https://github.com/unslothai/unsloth/pull/15771
* Installer downloads: retry a body cut short or trickling instead of hashing it by @danielhanchen in https://github.com/unslothai/unsloth/pull/15763
* Studio: read the Int8Tensor constructor signature once per class in the native INT8 rebuild by @danielhanchen in https://github.com/unslothai/unsloth/pull/15701
* Studio: load the attachment hasher before deleting a chat attachment by @danielhanchen in https://github.com/unslothai/unsloth/pull/15751
* Studio: decode each relayed SSE line once in the tool call stripper by @danielhanchen in https://github.com/unslothai/unsloth/pull/15753
* Studio: hash the tokenizer fingerprint without touching the live tokenizer by @danielhanchen in https://github.com/unslothai/unsloth/pull/15749
* Studio: skip the DFlash size request when no sidecar is eligible by @danielhanchen in https://github.com/unslothai/unsloth/pull/15754
* Studio video gallery: clear() reads and unlinks sidecars in the folder it locked by @danielhanchen in https://github.com/unslothai/unsloth/pull/15766
* Studio: install the released Diffusers 0.42.1 instead of the pinned main commit by @danielhanchen in https://github.com/unslothai/unsloth/pull/15761
* Tests: follow the thread-list guard flag and the RAG WAL keeper by @danielhanchen in https://github.com/unslothai/unsloth/pull/15778
* Import: check for a broken openai install on first use instead of at import unsloth by @danielhanchen in https://github.com/unslothai/unsloth/pull/15702

## New Contributors
* @Aafimalek made their first contribution in https://github.com/unslothai/unsloth/pull/15421
* @Shreesh-Sree made their first contribution in https://github.com/unslothai/unsloth/pull/15418
* @sergiopaniego made their first contribution in https://github.com/unslothai/unsloth/pull/15743

**Full Changelog**: https://github.com/unslothai/unsloth/compare/v0.1.911-beta...v0.1.912-beta

---

> **Source** [unslothai/unsloth](https://github.com/unslothai/unsloth) · `v0.1.912-beta` · 2026-10-28 · [upstream release](https://github.com/unslothai/unsloth/releases/tag/v0.1.912-beta)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
