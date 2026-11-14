---
title: "anything-llm v1.19.0"
project: "anything-llm"
repo: "Mintplex-Labs/anything-llm"
tag: "v1.19.0"
version: "v1.19.0"
published: "2026-10-26"
type: "minor"
lang: "en"
summary: "AnythingLLM Docker now has a default local LLM experience right out of the box. The same kind of built-in engine that ships with AnythingLLM Desktop can now run inside the container: Lemonade, the fully open-source…"
---

# anything-llm v1.19.0

### Built-in LLM for Docker
<img width="3680" height="2212" alt="AnythingLLM Docker built-in LLM powered by Lemonade and llama.cpp" src="https://github.com/user-attachments/assets/410b5784-ca15-4027-a1c4-056d9d5c748e" />

AnythingLLM Docker now has a default local LLM experience right out of the box. The same kind of built-in engine that ships with [AnythingLLM Desktop](https://docs.anythingllm.com/setup/llm-configuration/local/built-in) can now run **inside the container**: [Lemonade](https://lemonade-server.ai), the fully [open-source](https://github.com/lemonade-sdk/lemonade) local inference server from AMD, running your models with [llama.cpp](https://github.com/ggml-org/llama.cpp). You no longer need to run Ollama, LM Studio or any other inference server next to AnythingLLM.

Pass your GPU into the container and the engine is accelerated on whatever hardware you have. It picks the fastest backend automatically: CUDA for NVIDIA GPUs, Vulkan for AMD and Intel GPUs, or the CPU. It runs on both `amd64` and `arm64` hosts.

When it's turned on, **Built-in** becomes the default LLM provider during onboarding, with three models recommended for your hardware. You can download any model from the model table or pull any GGUF model from Hugging Face. It works everywhere a provider can be used: the system LLM, workspace and agent LLMs, the chat window model picker, and [Model Router](https://docs.anythingllm.com/model-router/setup).

> [!TIP]
> **The built-in LLM is off by default.** Turn it on by starting the container with `-e ENABLE_BUILT_IN_LLM=true`, and add `--gpus all` (or pass in your AMD or Intel GPU devices) for GPU acceleration. See [Built-in LLM for Docker](https://docs.anythingllm.com/installation-docker/built-in-llm) for the full setup for each kind of hardware.

### Color palettes

Color palettes are straightforward thematic tinting you can apply to the entire UI. We plan to expand this functionality more so you can more heavily customize the UI and even layout. [Learn more](https://docs.anythingllm.com/features/branding)

<table>
  <tr>
    <td><img width="100%" alt="Ocean color palette" src="https://github.com/user-attachments/assets/08c2baa2-9a9b-4ecd-ae95-88e88175ffe5" /></td>
    <td><img width="100%" alt="Forest color palette" src="https://github.com/user-attachments/assets/4274998a-dba8-490e-ab5d-9faecf9248c4" /></td>
  </tr>
  <tr>
    <td><img width="100%" alt="Plum color palette" src="https://github.com/user-attachments/assets/214c3571-7d72-4111-bf08-ce3d60ff1b99" /></td>
    <td><img width="100%" alt="Ember color palette" src="https://github.com/user-attachments/assets/88449231-139c-40a3-bb49-135bd0f1e9fa" /></td>
  </tr>
</table>

----

## What's Changed
* fix: route Bedrock India (in.) inference profiles via bedrock-runtime by @kimnamu in https://github.com/Mintplex-Labs/anything-llm/pull/6717
* Remove open-computer (moved to its own repo) by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6727
* Neutralize spreadsheet formulas in CSV chat exports by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6728
* Cap request body size to prevent unauthenticated embed DoS by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6729
* feat: show notice when response hits max output token limit (#6703) by @ManojDevarajulu in https://github.com/Mintplex-Labs/anything-llm/pull/6726
* Hold clarifying-question timeout once the user starts answering by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6730
* Move Weaviate to weaviate-client v3 by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6675
* Support .mov files for transcription by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6721
* Stop system prompt variable values from expanding other placeholders by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6731
* Apply workspace model changes to agent sessions mid-thread by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6673
* Show per-file embed progress in context overflow modal by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6639
* fix: include email body/recipients and job prompt in tool approval requests by @rtmalikian in https://github.com/Mintplex-Labs/anything-llm/pull/6732
* fix: send the full GitLab branch name when fetching repository files by @MohammadHijjawi97 in https://github.com/Mintplex-Labs/anything-llm/pull/6740
* fix: return MCP tool text without the result envelope by @Sairaj-24 in https://github.com/Mintplex-Labs/anything-llm/pull/6736
* Fix prompt compressor crash on history records skipped by convertToPromptHistory (#6737) by @ManojDevarajulu in https://github.com/Mintplex-Labs/anything-llm/pull/6738
* fix: keep current-turn attachments when the string compressor runs by @devYRPauli in https://github.com/Mintplex-Labs/anything-llm/pull/6742
* Stop sending deprecated sampling and thinking params to Gemini by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6733
* fix: count the text of messages with attachments in statsFrom by @devYRPauli in https://github.com/Mintplex-Labs/anything-llm/pull/6745
* Built-in LLM for Docker (embedded_lemonade) by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6719
* fix: truncate long citation URLs in the detail modal by @leilei3167 in https://github.com/Mintplex-Labs/anything-llm/pull/6781
* fix: default OpenAI image generation to gpt-image-2.5-flare by @rtmalikian in https://github.com/Mintplex-Labs/anything-llm/pull/6780
* fix: keep conversation history when the OpenAI compatible chat prompt is compressed by @MarMarLabs in https://github.com/Mintplex-Labs/anything-llm/pull/6777
* fix: tell the user why a password reset was refused by @MarMarLabs in https://github.com/Mintplex-Labs/anything-llm/pull/6771
* fix: report empty connector imports as failures by @MarMarLabs in https://github.com/Mintplex-Labs/anything-llm/pull/6775
* fix(telegram): preserve complete agent answers across message chunks by @jianyx1 in https://github.com/Mintplex-Labs/anything-llm/pull/6767
* fix: connect to the document collector on 127.0.0.1 by @leilei3167 in https://github.com/Mintplex-Labs/anything-llm/pull/6766
* chore: drop API key fragments from web search error messages by @u00dxk2 in https://github.com/Mintplex-Labs/anything-llm/pull/6763
* fix: crash on workspace chat settings when saved LLM provider is not in the list yet by @TMelik in https://github.com/Mintplex-Labs/anything-llm/pull/6761
* docs: remove references to removed sqlite:migrate script by @jrlprost in https://github.com/Mintplex-Labs/anything-llm/pull/6759
* fix(collector): read Excel's short date as an ISO date by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6758
* Add Hungarian (hu) translation by @Proxy5 in https://github.com/Mintplex-Labs/anything-llm/pull/6757
* fix: keep a CRLF file's line endings in filesystem-edit-file by @MohammadHijjawi97 in https://github.com/Mintplex-Labs/anything-llm/pull/6756
* Parse PDF and file links in the bulk link scraper by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6786
* fix(a11y): announce a reply once it has finished streaming by @opensource-joe in https://github.com/Mintplex-Labs/anything-llm/pull/6752
* fix: use the repository default branch in the GitHub connector by @Enesuygurs in https://github.com/Mintplex-Labs/anything-llm/pull/6800
* fix(paperless-ngx): keep plain-text document content as it is instead of reading it as HTML by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6795
* fix(confluence): keep code blocks as written instead of running them through htmlToText by @L4XB in https://github.com/Mintplex-Labs/anything-llm/pull/6794
* fix: report failed workspace embeds on API document uploads by @Tong-bit-art in https://github.com/Mintplex-Labs/anything-llm/pull/6793
* fix: regenerate and edit should still count toward daily message limit by @jrlprost in https://github.com/Mintplex-Labs/anything-llm/pull/6785
* fix: isolate watched document sync failures by @Tong-bit-art in https://github.com/Mintplex-Labs/anything-llm/pull/6804
* fix(mcp): treat unsupported ping as non-fatal so servers stay usable by @rtmalikian in https://github.com/Mintplex-Labs/anything-llm/pull/6805
* fix: fall back to default chunk overlap when it is not smaller than the chunk size by @RaphaelFakhri in https://github.com/Mintplex-Labs/anything-llm/pull/6811
* fix: use the repository default branch in the GitLab and Gitea connectors by @JoAdo07 in https://github.com/Mintplex-Labs/anything-llm/pull/6809
* fix: preserve daily message quota when deleting threads by @Max-Reisinger in https://github.com/Mintplex-Labs/anything-llm/pull/6814
* fix(ollama): keep context windows when one model show fails by @leilei3167 in https://github.com/Mintplex-Labs/anything-llm/pull/6816
* feat: instance color palettes and tabbed branding settings by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6796
* chore: bump version to 1.19.0 by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6822
* fix(mistral): support Mistral reasoning models, dedupe model list, add thinking toggle (#6821) by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6825

## New Contributors
* @ManojDevarajulu made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6726
* @rtmalikian made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6732
* @Sairaj-24 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6736
* @devYRPauli made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6742
* @jianyx1 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6767
* @TMelik made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6761
* @jrlprost made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6759
* @Proxy5 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6757
* @Enesuygurs made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6800
* @Tong-bit-art made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6793
* @RaphaelFakhri made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6811
* @JoAdo07 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6809

**Full Changelog**: https://github.com/Mintplex-Labs/anything-llm/compare/v1.18.0...v1.19.0

---

> **Source** [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) · `v1.19.0` · 2026-10-26 · [upstream release](https://github.com/Mintplex-Labs/anything-llm/releases/tag/v1.19.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
