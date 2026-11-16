---
title: "unsloth v0.1.908-beta"
project: "unsloth"
repo: "unslothai/unsloth"
tag: "v0.1.908-beta"
version: "v0.1.908-beta"
published: "2026-10-15"
type: "pre"
lang: "en"
summary: "Run NVIDIA's new Nemotron 3.5 models and Meta's new Muse Spark Open locally in Unsloth. New: text-diffusion LLMs, DeepSpeed training and better prompt caching for coding agents."
---

# unsloth v0.1.908-beta

Run NVIDIA's new Nemotron 3.5 models and Meta's new Muse Spark Open locally in Unsloth. New: text-diffusion LLMs, DeepSpeed training and better prompt caching for coding agents.

## Highlights

- **NVIDIA Nemotron 3.5 Bolt**: Run on 24 GB of memory. [Guide](https://unsloth.ai/docs/models/nemotron-3.5-bolt)
- **NVIDIA Nemotron 3.5 Super VL**: 120B (12B active) [Guide](https://unsloth.ai/docs/models/nemotron-3.5-super-vl)
- **Meta Muse Spark Open**: 816B (42.7B active) - runs on 256GB [Guide](https://unsloth.ai/docs/models/muse-spark-open)
- **Better prompt caching for coding agents**: Claude Code, Codex etc. on local GGUF models re-process far less of each prompt.
- **Browser use**: Always allow properly works, cursor, and separate tabs for each chat.
- **Images through your connections**: generate with sd-server, Ollama, Lemonade and other image servers.
- **Diffusion LLMs**: train and chat with LLaDA, Dream, SDAR and more, with a live denoising canvas.

## Nemotron 3.5

- Run NVIDIA Nemotron 3.5 Super VL, a 120B model with 12B active parameters and up to 1M tokens of context, built for document understanding, computer use and long-running agents. Super VL runs in about 64 GB of memory at 1-bit, or 128 GB at 4-bit. [Guide](https://unsloth.ai/docs/models/nemotron-3.5-super-vl) · [GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-GGUF)
- Run NVIDIA Nemotron 3.5 Bolt, a 74B model with 9B active parameters and 128K context, compressed from Super VL. Bolt runs in about 32 GB of memory at 1-bit or 2-bit. [Guide](https://unsloth.ai/docs/models/nemotron-3.5-bolt) · [GGUF](https://huggingface.co/unsloth/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-GGUF)
- Nemotron 3.5 Super VL generates about 5x faster than Inkling Small at 100K input with similar intelligence.
- By default, Unsloth runs Nemotron 3.5 Bolt with a DSpark drafter (about 1 to 2 GB more memory) and Super VL with its built-in MTP for faster output. Both can be turned off in settings. [MTP Guide](https://unsloth.ai/docs/models/mtp)

## Muse Spark Open

- Run Meta's Muse Spark Open, an 816B MoE model with about 42.7B active parameters and 1M tokens of context, built for multimodal reasoning, coding and agentic workflows. Muse Spark Open runs in about 256 GB of memory at 2-bit. [Guide](https://unsloth.ai/docs/models/muse-spark-open) · [GGUF](https://huggingface.co/unsloth/Muse-Spark-Open-816B-A42B-GGUF)
- Muse Spark Open takes text, images, video and audio as input, with reasoning effort from low to xhigh.
- Muse Spark Open was trained on long-horizon coding tasks, including whole-repository generation, large end-to-end projects and auto-research.

## Training

- Train and chat with text-diffusion LLMs in the Unsloth app, including LLaDA, Dream, SDAR, LLaDA2, Nemotron-Labs-Diffusion and DiffusionGemma. Chat replies show a live denoising canvas.
- Train with DeepSpeed ZeRO-2 and ZeRO-3, including 4-bit QLoRA, full fine-tuning, DPO and CPU offload. LoRA training with DDP and gradient checkpointing also no longer crashes.
- GRPO with `fast_inference` now runs on Nemotron 3 Nano and block-FP8 MoE models, sharing weights with vLLM.
- On the Train page, stop early when eval loss stops improving and train on pre-tokenized datasets. Random Seed now also sets the LoRA starting weights.

## Performance

- When Claude Code, Codex or OpenCode runs on a local GGUF model, follow-up turns re-process much less of the conversation, and a new Claude Code session's first reply starts up to 4x sooner.
- In Python, single-prompt `model.generate` is up to 2.7x faster at 32K context for Llama and Qwen3 models.
- In Python, generating 2 to 4 prompts at once with a bitsandbytes 4-bit model is up to 2.8x faster on some NVIDIA GPUs.
- GRPO rollouts with `fast_inference` on Nemotron 3 Nano are up to 30% faster by default.

## Browser use

- See a cursor where the model clicks and types, or turn it off in Settings > Browser > Browser use > Show cursor.
- Browser use prompts now have Always allow, which approves that kind of action on a site for the rest of the chat. Scripts still ask every time.
- Each chat keeps its own browser tabs, and in Desktop, browser use keeps working in chats that are not on screen.
- In the web UI, browser pages remember site preferences between pages, load data from their own site, and play videos full screen.

## Images + video

- Generate images on the Images page through a connected image server, such as sd-server, Ollama, Lemonade, vLLM, llama.cpp or a custom OpenAI-compatible URL.
- Image and video models now skip text-encoder layers they never use, saving memory on every load.

## Chat + Desktop

- Choose where Unsloth installs on Windows from Desktop's first-run screen.
- Re-embed your documents after switching the embedding model, without uploading them again.
- Chat with files can collapse to a row of pills, its citations open a PDF at the cited page, and newly added Word and HTML files keep their list numbers.
- Compact a conversation from the chat header menu, and Rewind no longer asks for confirmation when no files changed.

## Models + settings

- When Claude Code, OpenCode or Codex runs on a cloud model, add `--auto-route` to `unsloth start` to send routine coding work, such as reading files, searching and running commands, to your local model.
- Codex can use its MCP and sub-agent tools with local models, and Claude Code, Codex and OpenCode can run on a model from Settings > Connections with `unsloth start --model`.
- Name a model once in Settings > API > Model aliases, so apps using the Unsloth API keep working when the model behind the alias changes.
- vLLM connections and Unsloth's own vLLM engine support thinking effort levels and Preserve thinking, and the engine now auto-compacts long chats. vLLM and SGLang loads can also set an FP8 KV cache, a GPU memory limit and a seed.
- Pick 2-bit, 4-bit, 6-bit or 8-bit from MLX repos that publish several precisions, the way you pick GGUF quants. Xing4.0 and MiniCPM-V 4.7 now run and train with MLX.

## Hardware compatibility

- Windows PCs with NVIDIA drivers older than CUDA 12 install the Vulkan or CPU llama.cpp build instead of failing.
- AMD GPUs that ROCm does not support, such as RDNA 1 and Polaris, now get the Vulkan llama.cpp build even when ROCm is installed or another AMD GPU supports it.
- GGUF image generation runs on Vulkan for AMD and Intel Arc GPUs when PyTorch is CPU-only.
- Windows installs on PyTorch 2.10 and 2.11 get prebuilt flash-attn, causal-conv1d and mamba-ssm.
- Multi-GPU machines that mix GPU generations now pick the attention backend for each GPU, and Hopper GPUs with conda-forge xformers no longer crash.

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
* fix: update Codex client version to restore model discovery by @Imagineer99 in https://github.com/unslothai/unsloth/pull/13581
* Studio: changing the thinking setting also resets Expand thinking by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13625
* Bump install.sh / install.ps1 pins to unsloth>=2026.10.5 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13627
* Studio MCP: never run server-side tools from the chat tool by @danielhanchen in https://github.com/unslothai/unsloth/pull/13605
* Nemotron-H fast_inference via vLLM weight sharing (fallback on older unsloth_zoo); drop vLLM-only kwargs on fallback by @danielhanchen in https://github.com/unslothai/unsloth/pull/13440
* Diffusion LM training: compiled chunked loss with 0 graph breaks, plus per-family samplers by @danielhanchen in https://github.com/unslothai/unsloth/pull/13341
* Studio: offer the precision folders of an MLX repo like GGUF quants by @danielhanchen in https://github.com/unslothai/unsloth/pull/13565
* Studio: keep ticked Word form check boxes in Chat with files by @NilayYadav in https://github.com/unslothai/unsloth/pull/13485
* tests: click the inline Delete button #13615 put back on the action bar by @danielhanchen in https://github.com/unslothai/unsloth/pull/13634
* Studio: hold the forced aligner against a folder delete; match compound audio.cpp size scopes in order by @danielhanchen in https://github.com/unslothai/unsloth/pull/13633
* Studio: vLLM thinking effort levels, preserve thinking and auto-compact by @danielhanchen in https://github.com/unslothai/unsloth/pull/13571
* Studio: stop dropping the page text after a menu with no closing tag by @NilayYadav in https://github.com/unslothai/unsloth/pull/13489
* Re-measure the Studio startup budget after the audio selector and thinking merges by @danielhanchen in https://github.com/unslothai/unsloth/pull/13640
* Studio: let the Python tool open a SQLite file by @NilayYadav in https://github.com/unslothai/unsloth/pull/13487
* FP8 LoRA: dequantize down_proj in the backward like gate and up by @danielhanchen in https://github.com/unslothai/unsloth/pull/13270
* FP8 on ROCm: use the dequant path on archs without e4m3fn Triton support by @danielhanchen in https://github.com/unslothai/unsloth/pull/13331
* Freeze the setup-time heap during Trainer.train(); add resume parity and memory-flat GPU tests by @danielhanchen in https://github.com/unslothai/unsloth/pull/13332
* Studio: train and chat with every text-diffusion LM family by @danielhanchen in https://github.com/unslothai/unsloth/pull/13342
* Studio: keep the local Claude agent from stopping on a small context window by @NilayYadav in https://github.com/unslothai/unsloth/pull/13477
* Studio: run Laya on the GPU by default and free it on unload by @NilayYadav in https://github.com/unslothai/unsloth/pull/13479
* Studio: pass Codex MCP and sub-agent tools to the model on /v1/responses by @NilayYadav in https://github.com/unslothai/unsloth/pull/13483
* DDP LoRA: default find_unused_parameters=False so gradient checkpointing does not crash by @danielhanchen in https://github.com/unslothai/unsloth/pull/13267
* Studio: KV cache dtype, GPU memory limit and seed for vLLM and SGLang loads by @danielhanchen in https://github.com/unslothai/unsloth/pull/13596
* Diffusion LMs: fast inference, live denoising frames and in-loop cancellation by @danielhanchen in https://github.com/unslothai/unsloth/pull/13592
* fast_cross_entropy_loss: all-masked labels give loss 0 instead of NaN by @danielhanchen in https://github.com/unslothai/unsloth/pull/13325
* Studio: reload a Clef as soon as the training run that unloaded it ends by @NilayYadav in https://github.com/unslothai/unsloth/pull/13482
* Studio: send routine coding work to the local model with unsloth start --auto-route by @NilayYadav in https://github.com/unslothai/unsloth/pull/13478
* tests: accept a positional encoding on Path.read_text / write_text by @danielhanchen in https://github.com/unslothai/unsloth/pull/13646
* QAT: fall back to the module forward for torchao NVFP4 / MX linears in fused LoRA by @danielhanchen in https://github.com/unslothai/unsloth/pull/13280
* Tests: keep the zoo num_proc anchor tests meaningful once the zoo adopts the edit by @danielhanchen in https://github.com/unslothai/unsloth/pull/13269
* Studio: point unsloth start at the right model when several are loaded by @NilayYadav in https://github.com/unslothai/unsloth/pull/13480
* Studio: live denoising canvas for transformers diffusion LMs by @danielhanchen in https://github.com/unslothai/unsloth/pull/13593
* FP8 MoE + fast_inference: refuse unsupported checkpoints before vLLM loads, with a hint that works by @danielhanchen in https://github.com/unslothai/unsloth/pull/13277
* Save each unsloth train run in its own folder by @NilayYadav in https://github.com/unslothai/unsloth/pull/13484
* Studio: keep data recipe seed inspect inside a managed account's workspace by @danielhanchen in https://github.com/unslothai/unsloth/pull/13611
* GRPO DDP gradient sync: copy each averaged bucket back with one _foreach_copy_ by @danielhanchen in https://github.com/unslothai/unsloth/pull/13268
* Native decode: read GQA KV heads in place instead of copying them per query head by @danielhanchen in https://github.com/unslothai/unsloth/pull/13271
* Studio: key the i2v availability cache on the diffusers module, not its id by @danielhanchen in https://github.com/unslothai/unsloth/pull/13667
* Studio CI: click the composer itself in the dismiss_on_composer probe by @danielhanchen in https://github.com/unslothai/unsloth/pull/13670
* Studio UI test: wait for the chat shell to settle, not just the composer by @danielhanchen in https://github.com/unslothai/unsloth/pull/13672
* End the last gpt-oss training turn with <|return|>, not <|end|> by @NilayYadav in https://github.com/unslothai/unsloth/pull/13657
* Studio: LTX-2.5 defaults follow ComfyUI (hosted INT8-ConvRot DiT, opt-in int8 text encoder) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13618
* Studio: Wan2.2-TI2V-5B LoRA training by @danielhanchen in https://github.com/unslothai/unsloth/pull/13654
* Studio: declare the Hub's /api/engines retry in the log budget by @danielhanchen in https://github.com/unslothai/unsloth/pull/13682
* Studio: Collapse thinking's chevron points up by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13669
* Studio: size the composer to the message column at every width and zoom, and stop clipping thinking text by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13675
* Studio: make the first-token waiting limit configurable by @Imagineer99 in https://github.com/unslothai/unsloth/pull/13390
* Model-config UI test: treat a /validate that never reports its end as a lost event by @danielhanchen in https://github.com/unslothai/unsloth/pull/13689
* Studio: Windows torch 2.11 kernels from our prebuilt wheels by @danielhanchen in https://github.com/unslothai/unsloth/pull/13564
* Studio: Chat with files search row lists its documents, which open in the attachment viewer by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13681
* Studio: one scrolling attachment row in a chat, even spacing above the input by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13678
* Studio: train structured recipe columns as JSON, not as Python dicts by @NilayYadav in https://github.com/unslothai/unsloth/pull/13635
* Studio: Skills pill stays with every skill unticked; its X or the + menu turns Skills off by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13687
* Keep torch's bundled flash on Blackwell for short documents under UNSLOTH_FLASH_ATTENTION_IMPL=auto by @danielhanchen in https://github.com/unslothai/unsloth/pull/13631
* Declared-polls probe: count only requests this Studio serves by @danielhanchen in https://github.com/unslothai/unsloth/pull/13690
* Studio: collapse Chat with files to a row of pills, with Show all by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13686
* Studio: drop the stray divider above a tool's created-files row by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13692
* Studio: simpler Rewind confirm, skipped for conversation-only rewinds by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13676
* Studio: removing a composer attachment no longer reloads the others by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13677
* Studio: text #0f1114 in light mode and #fcfcfc in dark, thinking text easier to read by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13693
* Studio: chat with files citation chips open a PDF at the cited page by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13691
* Studio: let read aloud go past 2048 tokens and warn when cut short by @NilayYadav in https://github.com/unslothai/unsloth/pull/13648
* Studio: keep SSE MCP servers as SSE when importing a data recipe by @NilayYadav in https://github.com/unslothai/unsloth/pull/13659
* Studio: reorder the chat + menu, with Deep research and Browser use by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13679
* Studio: let JSON-reply API requests still call their tools on MLX models by @NilayYadav in https://github.com/unslothai/unsloth/pull/13658
* Studio: Settings dropdowns glow in the pane colour in dark mode by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13703
* Pack Qwen3.5 text SFT with the processor, and fix eval_loss on packed text runs by @danielhanchen in https://github.com/unslothai/unsloth/pull/13624
* Fix main CI: rewind and Skills strings, token count harness, deep research contract, zoo 2026.10.5 scan baseline by @danielhanchen in https://github.com/unslothai/unsloth/pull/13701
* CI: coalesce main-push runs per workflow so merge bursts stop outrunning the runner pool by @danielhanchen in https://github.com/unslothai/unsloth/pull/13705
* Studio: add early stopping patience on eval loss by @danielhanchen in https://github.com/unslothai/unsloth/pull/13626
* CI: bound CodeQL overlay-base cache churn, unstarve the cache janitor by @danielhanchen in https://github.com/unslothai/unsloth/pull/13704
* Unsloth Studio: redact the credential after an Authorization scheme in research queries by @LeoBorcherding in https://github.com/unslothai/unsloth/pull/13499
* Fix DPO on models split across GPUs with TRL 1.15's fused LM head by @danielhanchen in https://github.com/unslothai/unsloth/pull/13641
* Keep the pad embedding row when the tokenizer emits the pad token by @danielhanchen in https://github.com/unslothai/unsloth/pull/13628
* Fix Voxtral processor saving and Voxtral Realtime training by @YashwanthNomula in https://github.com/unslothai/unsloth/pull/12647
* Skip xformers FA3 on H100 when the build has no sm_90a kernels by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13619
* Skip the per-layer RoPE stream sync unless the model spans several devices by @danielhanchen in https://github.com/unslothai/unsloth/pull/13609
* Train with DeepSpeed ZeRO-2 and ZeRO-3 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13587
* CI: cancel a pull request's leftover queued and running runs when it closes by @danielhanchen in https://github.com/unslothai/unsloth/pull/13709
* CI: overlap browser installs and cache restores with Install Unsloth in the UI smoke jobs by @danielhanchen in https://github.com/unslothai/unsloth/pull/13707
* CI: run lint checks in parallel and overlap independent setup in Windows smoke and Backend CI by @danielhanchen in https://github.com/unslothai/unsloth/pull/13710
* Chat UI test: close the stale page browser-side instead of waiting on its renderer by @danielhanchen in https://github.com/unslothai/unsloth/pull/13708
* Studio: use browser Always allow rules during composer Full access by @wasimysaid in https://github.com/unslothai/unsloth/pull/13700
* Studio Desktop: keep a maximized window above the Windows taskbar by @danielhanchen in https://github.com/unslothai/unsloth/pull/13647
* CI: let staging repos save dependency caches on upstream-main by @danielhanchen in https://github.com/unslothai/unsloth/pull/13711
* CI: wait on events instead of fixed sleeps in Playwright smokes, backend tests and Stop Unsloth steps by @danielhanchen in https://github.com/unslothai/unsloth/pull/13712
* fix(studio): anchor relative PATH entries during setup by @sahacha in https://github.com/unslothai/unsloth/pull/13606
* Studio frontend: raise the startup bundle budget by the measured growth since the last raise by @danielhanchen in https://github.com/unslothai/unsloth/pull/13718
* Studio: keep the prompt cache for API clients and coding agents by @danielhanchen in https://github.com/unslothai/unsloth/pull/13645
* Studio: keep the browser page background when widening the panel by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13723
* CI: run the 34 mocked GPU-selection tests, drop dead zoo deselects, print skip reasons by @danielhanchen in https://github.com/unslothai/unsloth/pull/13706
* Studio Hub: Newest and Recently updated list more than Unsloth models under Recommended by @danielhanchen in https://github.com/unslothai/unsloth/pull/13632
* Move the Unsloth Studio MLX pins to mlx-vlm 0.7.8 by @Lyxot in https://github.com/unslothai/unsloth/pull/13699
* feat: add compact conversation to the chat menu by @Lyxot in https://github.com/unslothai/unsloth/pull/13579
* Studio: keep the composer draft across chats, pages and tabs by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13722
* Lint CI: scan committed files, not the tree the background lanes write into by @danielhanchen in https://github.com/unslothai/unsloth/pull/13728
* Studio: stop Expand thinking from restyling the whole trace by @oobabooga in https://github.com/unslothai/unsloth/pull/13665
* Studio: show the hovered icon's tooltip when moving between adjacent icons by @danielhanchen in https://github.com/unslothai/unsloth/pull/13735
* Prebuilt CUDA wheels: torch 2.10 for Windows x64 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13740
* Studio installer (AMD, Linux): Vulkan llama.cpp for RDNA 1 and Polaris when ROCm is installed by @danielhanchen in https://github.com/unslothai/unsloth/pull/13694
* Studio (macOS): read the Metal working set from torch when MLX is missing by @danielhanchen in https://github.com/unslothai/unsloth/pull/13695
* Lint CI: skip .lanes in the whole-tree scans by @danielhanchen in https://github.com/unslothai/unsloth/pull/13736
* Revert "Studio Hub: Newest and Recently updated list more than Unsloth models under Recommended" by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13744
* Studio: search and load large MCP tool catalogs on demand by @danielhanchen in https://github.com/unslothai/unsloth/pull/13601
* Studio: default export load to offload_layers=auto by @indrajeetapache in https://github.com/unslothai/unsloth/pull/13720
* MLX: Clef Omni in Unsloth Studio, with audio in the Decision API and decision training by @Lyxot in https://github.com/unslothai/unsloth/pull/13538
* Composer browser simulations: log the browser process on the retry by @danielhanchen in https://github.com/unslothai/unsloth/pull/13745
* Hybrid packing: keep the varlen forward working after accelerate's unwrap_model (Qwen3.5 / 3.6 GRPO) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13721
* Pick the attention backend per device on mixed-generation multi-GPU hosts by @danielhanchen in https://github.com/unslothai/unsloth/pull/13698
* Studio: run native image generation on Vulkan when torch is CPU-only on an AMD or Arc GPU by @danielhanchen in https://github.com/unslothai/unsloth/pull/13697
* Nudge-retry cancel test: bound the hang, not the runner's speed by @danielhanchen in https://github.com/unslothai/unsloth/pull/13750
* Compute RMSNorm weight gradient when the norm weight is trainable by @danielhanchen in https://github.com/unslothai/unsloth/pull/13594
* Studio: send Gemini the image just attached in a chat full of images by @NilayYadav in https://github.com/unslothai/unsloth/pull/13636
* Studio: prevent tooltips from hidden run settings by @wasimysaid in https://github.com/unslothai/unsloth/pull/13614
* Studio: say why Sandbox High is unavailable when there is nothing to install by @danielhanchen in https://github.com/unslothai/unsloth/pull/13732
* Decode small 4bit batches with the NF4 GEMV instead of dequantizing every token by @danielhanchen in https://github.com/unslothai/unsloth/pull/13642
* Studio: keep a Claude session working after an image on text-only GGUFs by @NilayYadav in https://github.com/unslothai/unsloth/pull/13652
* Studio: search for llama.cpp and other file names in the address bar by @NilayYadav in https://github.com/unslothai/unsloth/pull/13661
* Studio: open the Images and Audio workflows from the collapsed sidebar rail by @danielhanchen in https://github.com/unslothai/unsloth/pull/13731
* Keep the residual in Gemma and Gemma2 float32 fast decode by @vineethsaivs in https://github.com/unslothai/unsloth/pull/13643
* Keep the Docker notebooks and the models they save after docker rm by @NilayYadav in https://github.com/unslothai/unsloth/pull/13660
* Studio: keep Start Export off for a Hub push until the repo is named by @NilayYadav in https://github.com/unslothai/unsloth/pull/13651
* Studio: keep mid-conversation Anthropic system messages in place so new sessions reuse the prompt cache by @danielhanchen in https://github.com/unslothai/unsloth/pull/13727
* Studio: add an Audio API card to Settings and open it from Audio pages by @Etherll in https://github.com/unslothai/unsloth/pull/12821
* Studio: move the RAG embedder to CPU when its GPU llama-server keeps crashing by @danielhanchen in https://github.com/unslothai/unsloth/pull/13739
* Studio: forget deleted audio models once the Hub cache listing updates by @Etherll in https://github.com/unslothai/unsloth/pull/13630
* Studio: report prompt cache hits on the Messages and Responses APIs, and ask vLLM and SGLang for them by @danielhanchen in https://github.com/unslothai/unsloth/pull/13741
* Fix installer warning colors on light backgrounds by @Imagineer99 in https://github.com/unslothai/unsloth/pull/13572
* Studio: keep a threadless conversation's cut between requests so the prompt cache is reused by @danielhanchen in https://github.com/unslothai/unsloth/pull/13743
* Studio: give a killed llama-server time to exit before a reload fails by @danielhanchen in https://github.com/unslothai/unsloth/pull/13622
* Studio: let browser panel pages call their own site's API by @oobabooga in https://github.com/unslothai/unsloth/pull/13664
* Fix Gemma2 sliding-window boundaries across attention backends by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/13730
* Studio: ask before a desktop Update stops downloads in progress by @NilayYadav in https://github.com/unslothai/unsloth/pull/13650
* Studio frontend: raise the startup bundle budget by the measured growth since the last raise by @danielhanchen in https://github.com/unslothai/unsloth/pull/13752
* Studio: seed the LoRA init with the Random Seed setting by @NilayYadav in https://github.com/unslothai/unsloth/pull/13637
* Studio: keep the start of an attached file larger than the context window by @danielhanchen in https://github.com/unslothai/unsloth/pull/13620
* Studio: render numbers wrapped in dollar signs as math, not prices by @NilayYadav in https://github.com/unslothai/unsloth/pull/13649
* Studio: deleting a GGUF row no longer deletes other builds at the same quant by @alkinun in https://github.com/unslothai/unsloth/pull/13368
* Studio: re-embed documents after switching the embedding model by @Lyxot in https://github.com/unslothai/unsloth/pull/13702
* Format studio/backend/routes/inference.py back to the hook's fixed point by @danielhanchen in https://github.com/unslothai/unsloth/pull/13765
* fix(studio): preserve chat tool selections across model unloads by @Sneakr in https://github.com/unslothai/unsloth/pull/13621
* Studio: install the newest audio.cpp release and offer it in updates by @Etherll in https://github.com/unslothai/unsloth/pull/13589
* Studio passthrough: read the backend's identity through getattr in the cut scope by @danielhanchen in https://github.com/unslothai/unsloth/pull/13769
* Studio: raise the startup bundle budget by #13589's measured growth by @danielhanchen in https://github.com/unslothai/unsloth/pull/13789
* Studio: keep the desktop browser page live when it opens as a dialog by @danielhanchen in https://github.com/unslothai/unsloth/pull/13734
* Studio: cache Edit-mode text encoding by reference image content by @kevin9327 in https://github.com/unslothai/unsloth/pull/13683
* Studio: Windows torch 2.10 kernels from our prebuilt wheels by @danielhanchen in https://github.com/unslothai/unsloth/pull/13742
* Measure the resume glyph's centring in viewBox units, not painted rects by @danielhanchen in https://github.com/unslothai/unsloth/pull/13799
* Studio: name the Windows update that adds MXC's built-in container by @danielhanchen in https://github.com/unslothai/unsloth/pull/13798
* Prebuilt CUDA wheels: torch 2.12 for Windows x64 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13807
* Give the data settings driver's cold first load the same 120s as its mount wait by @danielhanchen in https://github.com/unslothai/unsloth/pull/13809
* Studio: stopping a model load leaves no Starting model status behind by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13803
* Studio: unload a model under the id the API lists for it by @danielhanchen in https://github.com/unslothai/unsloth/pull/13810
* Unsloth Studio / Desktop (AMD, Windows): install the Vulkan llama.cpp prebuilt when device 0 has no HIP bundle by @LeoBorcherding in https://github.com/unslothai/unsloth/pull/13680
* Pin vermin: 1.9.0 fails the backend floor lint on valid 3.5 syntax by @danielhanchen in https://github.com/unslothai/unsloth/pull/13818
* Studio: let YuE2 songs run to their own ending instead of 1.5x the length by @danielhanchen in https://github.com/unslothai/unsloth/pull/13371
* unsloth start opencode: never pass --model on a bare launch; OpenCode 2 rejects it by @YogeshSeeni in https://github.com/unslothai/unsloth/pull/13783
* Studio: read the code behind a GitHub file link in web search by @NilayYadav in https://github.com/unslothai/unsloth/pull/13754
* Studio: each chat keeps its own browser tabs, and the browser agent works on in chats off screen by @danielhanchen in https://github.com/unslothai/unsloth/pull/13800
* Studio: keep a Connection's thinking between tool calls in the same answer by @oobabooga in https://github.com/unslothai/unsloth/pull/13785
* Studio: install the Vulkan or CPU llama.cpp bundle on Windows NVIDIA drivers older than CUDA 12 by @oobabooga in https://github.com/unslothai/unsloth/pull/13671
* Studio: tighter hover pill on the chat model selector by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13817
* Studio: let videos in the browser panel go full screen by @NilayYadav in https://github.com/unslothai/unsloth/pull/13759
* Studio: keep transcribing past a damaged audio frame by @NilayYadav in https://github.com/unslothai/unsloth/pull/13757
* Score a 16-bit fine-tune with unsloth eval in 16-bit, not in 4-bit by @NilayYadav in https://github.com/unslothai/unsloth/pull/13758
* Studio: tell the model when a site's bot protection blocks a page fetch by @NilayYadav in https://github.com/unslothai/unsloth/pull/13760
* Studio: train ShareGPT tool calls natively on processor-loaded models by @danielhanchen in https://github.com/unslothai/unsloth/pull/13824
* Studio: use native Linux browser tabs with GTK overlay sizing by @wasimysaid in https://github.com/unslothai/unsloth/pull/13717
* Studio: add Always allow to browser agent prompts by @NilayYadav in https://github.com/unslothai/unsloth/pull/13777
* Studio: let tool results use the window when auto-compaction is off by @danielhanchen in https://github.com/unslothai/unsloth/pull/13811
* Studio: keep list numbers in Word and HTML knowledge base files by @NilayYadav in https://github.com/unslothai/unsloth/pull/13755
* Studio: show the browser agent cursor where it clicks and types, with a Settings toggle by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13729
* Studio: finite MPS memory cap and sd.cpp --mmap on macOS by @danielhanchen in https://github.com/unslothai/unsloth/pull/13763
* Studio Hub: drop the compact list view, make grid and split views responsive by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13822
* Studio: let the Linux tool sandbox use bubblewrap on NixOS and in FHS launchers by @oobabooga in https://github.com/unslothai/unsloth/pull/13768
* Return weight and bias gradients from the fast LayerNorm, and support bias=False by @danielhanchen in https://github.com/unslothai/unsloth/pull/13801
* Studio: probe the regional diffusion compile on ROCm instead of refusing it by @danielhanchen in https://github.com/unslothai/unsloth/pull/13774
* Studio: stop re-prompting a finished tool answer that labels its results by step by @oobabooga in https://github.com/unslothai/unsloth/pull/13653
* Studio: generic text-encoder dead-tail truncation for diffusion and video by @danielhanchen in https://github.com/unslothai/unsloth/pull/13767
* Studio: keep sd.cpp direct conv off on Vulkan and ROCm by @danielhanchen in https://github.com/unslothai/unsloth/pull/13773
* Studio NVFP4: one-pass activation quantiser for torchao's to_nvfp4 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13804
* Studio diffusion: learned activation peaks, OOM retry in group offload setup, pinned GGUF host copies, tied-weight groups by @danielhanchen in https://github.com/unslothai/unsloth/pull/13724
* Studio: add an opt-in Settings switch to hide models that do not fit by @danielhanchen in https://github.com/unslothai/unsloth/pull/13814
* Studio: say when a browser panel page needs the system browser by @NilayYadav in https://github.com/unslothai/unsloth/pull/13761
* Read the Tauri command list inside the gated invoke_handler closure by @danielhanchen in https://github.com/unslothai/unsloth/pull/13836
* Studio: keep site settings across pages in the browser panel by @NilayYadav in https://github.com/unslothai/unsloth/pull/13762
* Studio: start audio.cpp options at each model's recommended values by @Etherll in https://github.com/unslothai/unsloth/pull/13764
* Allow norm layers in FastLanguageModel modules_to_save by @danielhanchen in https://github.com/unslothai/unsloth/pull/13805
* Studio: generate images through an external connection by @NilayYadav in https://github.com/unslothai/unsloth/pull/13756
* Studio: Hub Run refuses audio models that neither Audio nor Chat can run by @danielhanchen in https://github.com/unslothai/unsloth/pull/13812
* Studio: accept Parquet files as local Data Recipe seeds by @danielhanchen in https://github.com/unslothai/unsloth/pull/13839
* Studio Desktop: choose where Unsloth installs on Windows by @danielhanchen in https://github.com/unslothai/unsloth/pull/13446
* Studio Hub: one filter popover for capabilities, size, context and uploader, composer-style menus by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13749
* Trim comments in tests by @danielhanchen in https://github.com/unslothai/unsloth/pull/13844
* AsyncGRPOTrainer: optional SAO-style importance sampling mask by @danielhanchen in https://github.com/unslothai/unsloth/pull/13820
* Studio: stop llama-server crashing on macOS on Ctrl+C by @NilayYadav in https://github.com/unslothai/unsloth/pull/13782
* Studio: train on pre-tokenized datasets (input_ids / attention_mask / labels) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13816
* Studio: keep the chat template of Mac LoRAs trained on multimodal base models by @danielhanchen in https://github.com/unslothai/unsloth/pull/13826
* Fix bfd_split truncating overflow before packing by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/13770
* Studio: model aliases for the OpenAI-compatible API by @danielhanchen in https://github.com/unslothai/unsloth/pull/13361
* Studio: int8 weight-only transformer quant on Apple Silicon through the Metal int8 kernel by @danielhanchen in https://github.com/unslothai/unsloth/pull/13344
* Studio: stop listing a GGUF's borrowed text encoder and VAE as a model in the picker by @LeoBorcherding in https://github.com/unslothai/unsloth/pull/13778
* Studio: run coding agents on a Connection model by @NilayYadav in https://github.com/unslothai/unsloth/pull/13481
* Studio recipes: keep a finished run's pump off the next run by @danielhanchen in https://github.com/unslothai/unsloth/pull/13845
* unsloth run: add --engine-parallelism and --gpus for multi-GPU serving by @danielhanchen in https://github.com/unslothai/unsloth/pull/13838
* Run Linux frontend browser checks in two parallel groups by @heychaeyin in https://github.com/unslothai/unsloth/pull/13813
* Studio: send audio.cpp request fields in the form each model reads by @Etherll in https://github.com/unslothai/unsloth/pull/13791
* Fix DiffusionGemma sampled-prefix cache retention by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/13780
* Studio: accept sk-unsloth API keys in the x-api-key header by @danielhanchen in https://github.com/unslothai/unsloth/pull/13842
* Studio: let Orpheus TTS pick one of its built-in voices by @danielhanchen in https://github.com/unslothai/unsloth/pull/13853
* Pass layers_pattern from FastLanguageModel.get_peft_model to LoraConfig by @vineethsaivs in https://github.com/unslothai/unsloth/pull/13751
* Load the zoo Hub download helpers without unsloth_zoo's package init by @danielhanchen in https://github.com/unslothai/unsloth/pull/13849
* Fix SDAR empty-mask resampling to match the reference by @taking-lying-flat in https://github.com/unslothai/unsloth/pull/13771
* Add dtype option to save_pretrained_merged for float32 merges by @danielhanchen in https://github.com/unslothai/unsloth/pull/13823
* fast_inference: Gemma 4 Unified, Muse Glimmer, dense Gemma 4; 4-bit fallback when no -bnb-4bit repo by @danielhanchen in https://github.com/unslothai/unsloth/pull/13825
* Keep fp32-only tensors (MoE router bias) in fp32 on 16-bit saves of non-PEFT models by @danielhanchen in https://github.com/unslothai/unsloth/pull/13819
* MLX stub: answer zoo's fused_verify_attention by @danielhanchen in https://github.com/unslothai/unsloth/pull/13863
* Studio Desktop: open the OS folder dialog to add a model folder by @danielhanchen in https://github.com/unslothai/unsloth/pull/13843
* Studio: serve /v1/completions from MLX models by @Lyxot in https://github.com/unslothai/unsloth/pull/13796
* Prebuilt CUDA wheels: compress the fatbins (flash-attn 1.49 GB -> ~285 MB) by @danielhanchen in https://github.com/unslothai/unsloth/pull/13854
* Kernels: request enable_fp_fusion=True explicitly, ahead of Triton 3.9's False default by @danielhanchen in https://github.com/unslothai/unsloth/pull/13828
* Desktop: explain Windows Long Paths before its UAC prompt by @danielhanchen in https://github.com/unslothai/unsloth/pull/13523
* Studio: install causal-conv1d and mamba-ssm only when a model needs them by @danielhanchen in https://github.com/unslothai/unsloth/pull/13861
* Add UnlimitedOcrTextModel to the fused-MoE conversion snapshot by @danielhanchen in https://github.com/unslothai/unsloth/pull/13867
* Fine-tune and export native MTP heads and DSpark drafters by @danielhanchen in https://github.com/unslothai/unsloth/pull/13719
* fix(studio): show a download start the moment it is requested, and ke… by @Sneakr in https://github.com/unslothai/unsloth/pull/13738
* fast_inference: switch Gemma 4 to Unsloth inference on GPUs below sm80 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13864
* Studio: info stamp on image downloads, recipe in every format, load settings from an image by @danielhanchen in https://github.com/unslothai/unsloth/pull/13444
* Compile each transformer block as one region for every FastModel model (LoRA and QLoRA) by @TarzanZhao in https://github.com/unslothai/unsloth/pull/10744
* Format tests/test_triton_fp_fusion.py back to the hook's fixed point by @danielhanchen in https://github.com/unslothai/unsloth/pull/13887
* Studio: stream /v1/responses from MLX and other in-process models by @Lyxot in https://github.com/unslothai/unsloth/pull/13794
* Studio Hub: Recommended lists safetensors repos only past 30 likes, always open on Discover by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13886
* Docker ROCm Studio image: run GGUF chat on the GPU through Vulkan by @danielhanchen in https://github.com/unslothai/unsloth/pull/13852
* NF4 GEMV: drop K masks on even K and gather the NF4 table from registers by @danielhanchen in https://github.com/unslothai/unsloth/pull/13829
* FP8 rowwise GEMV: int64 row offsets past 2^31 elements, and skip it on Blackwell with Triton 3.3 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13830
* Stream the chunked cross entropy forward logits with evict_first by @danielhanchen in https://github.com/unslothai/unsloth/pull/13893
* Studio: serve /v1/messages and count_tokens from MLX and other in-process models by @Lyxot in https://github.com/unslothai/unsloth/pull/13795
* MoE grouped GEMM: tl.range for the dX expert loop, drop the dead dW FLATTEN by @danielhanchen in https://github.com/unslothai/unsloth/pull/13831
* Launch eager RMSNorm and LayerNorm kernels through triton_launch by @danielhanchen in https://github.com/unslothai/unsloth/pull/13889
* Studio Hub: show the Meta logo on every Unsloth Muse re-upload by @shimmyshimmer in https://github.com/unslothai/unsloth/pull/13896
* Fix FastLanguageModel fused CE loss under FSDP2 with an untied lm_head by @danielhanchen in https://github.com/unslothai/unsloth/pull/13827
* Studio: Windows torch 2.12 kernels from our prebuilt wheels by @danielhanchen in https://github.com/unslothai/unsloth/pull/13808
* Studio: train a speculative decoding drafter with fine-tunes and export it for llama.cpp and vLLM by @danielhanchen in https://github.com/unslothai/unsloth/pull/13806
* Frontend CI: keep grouped browser logs through a second cancel signal by @danielhanchen in https://github.com/unslothai/unsloth/pull/13894
* Studio: support NVIDIA Nemotron 3.5 Bolt and Super GGUFs by @danielhanchen in https://github.com/unslothai/unsloth/pull/13899
* MoE LoRA: keep native per-expert Linears for an explicit target_modules list on transformers 4.x by @danielhanchen in https://github.com/unslothai/unsloth/pull/13851
* Studio: let Run settings load a Hugging Face model in 16-bit by @danielhanchen in https://github.com/unslothai/unsloth/pull/13841
* Studio: support Muse Spark Open GGUFs by @danielhanchen in https://github.com/unslothai/unsloth/pull/13903
* Fix main's red Backend CI, repo and picker contract tests after #13724, #13749 and #13828 by @danielhanchen in https://github.com/unslothai/unsloth/pull/13846
* Fix main's red CI after #13806, #13899 and recent formatter drift by @danielhanchen in https://github.com/unslothai/unsloth/pull/13909

## New Contributors
* @YashwanthNomula made their first contribution in https://github.com/unslothai/unsloth/pull/12647
* @sahacha made their first contribution in https://github.com/unslothai/unsloth/pull/13606
* @YogeshSeeni made their first contribution in https://github.com/unslothai/unsloth/pull/13783
* @heychaeyin made their first contribution in https://github.com/unslothai/unsloth/pull/13813

**Full Changelog**: https://github.com/unslothai/unsloth/compare/v0.1.907-beta...v0.1.908-beta

---

> **Source** [unslothai/unsloth](https://github.com/unslothai/unsloth) · `v0.1.908-beta` · 2026-10-15 · [upstream release](https://github.com/unslothai/unsloth/releases/tag/v0.1.908-beta)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
