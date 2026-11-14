---
title: "anything-llm v1.16.1"
project: "anything-llm"
repo: "Mintplex-Labs/anything-llm"
tag: "v1.16.1"
version: "v1.16.1"
published: "2026-08-27"
type: "patch"
lang: "en"
summary: "We overhauled our UI for long-horizon agentic tasks that show multiple thinking and tool calls to now roll up into a single clean, collapsible UI element."
---

# anything-llm v1.16.1

### Activity and Chain of Thought Overhaul
<img width="3680" height="2212" alt="image" src="https://github.com/user-attachments/assets/34e52190-51e3-40b5-baeb-d1936319cb4a" />

We overhauled our UI for long-horizon agentic tasks that show multiple thinking and tool calls to now roll up into a single clean, collapsible UI element.

This gives you more screen real estate for the actual response while still keeping the important call stack and thoughts the model produces in an easy-to-read format.

### Navigation Warning

<img width="3680" height="2212" alt="image" src="https://github.com/user-attachments/assets/dfa98c30-4bde-4321-86cc-eb0bcd7b9873" />

Recently, we added true abort signals across every supported LLM so that when you cancel inference or leave the page, we stop inference to save you on compute costs.

However, this had the unintended side effect of canceling inference when navigating away from a chat, preventing background completion. Now we warn you before aborting the response.

**Roadmap item:** We intend to make this user configurable so you can customize this behavior and allow background inference for those with more powerful or high-concurrency setups where multiple parallel inference sessions are feasible.

### Foundry Local Embedded (Desktop Only)

<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/d43ba423-83a8-4150-8b62-606ffb6c8882" />

[FoundryLocal](https://github.com/microsoft/foundry-local) is an inference engine built by Microsoft that is pre-installed and available on Windows 11 (version 24H2, build 26100 or later).

This uses WinML to load models for your CPU, GPU, or NPU across any Windows hardware configuration. It's a great option for hardware configurations we don't have explicit support for. Keep in mind that model availability may be limited as FoundryLocal is still rolling out. Vision models are **not** available currently.

_We partner with Microsoft for this, if you have bugs or issues we can help forward them to the FoundryLocal team_

### GenieX for Snapdragon (Desktop Only)

<img width="1280" height="720" alt="image" src="https://github.com/user-attachments/assets/866a7cc2-e3e7-4189-af56-6a29c030aab5" />

> [!NOTE]
> This replaces our previous Snapdragon NPU engine. Any previous models from the old engine are deleted on update, and you'll need to re-download these optimized models. You should see a significant performance increase for NPU models and regular GGUFs.
> 
> We highly recommend using only GGUF models for this engine. Qualcomm NPU-only models have 4K context windows and will result in a poor agent experience.

[GenieX](https://github.com/qualcomm/GenieX) is an open-source inference engine built by Qualcomm (previously [NexaAI](https://aihub.qualcomm.com/genai)) that efficiently runs GGUFs and Qualcomm AI Hub models on NPU for X and X2 Elite devices.

AnythingLLM offers fully managed and built-in support by selecting the "AnythingLLM GenieX" provider in the dropdown. Both GGUFs and NPU-only models can leverage the NPU, giving you the power efficiency and intelligence of both.

_We partner with Qualcomm for this, if you have bugs or issues we can help forward them to the GenieX team or you can make an issue on their GitHub. s/o @zhiyuan8, @alexchen4ai & @alanzhuly_

## New Features

- [x] Native Foundry Local SDK on Windows (x64/ARM64) - the Foundry provider is now fully self-contained and no longer requires a separate Foundry Local install, with GPU/NPU-optimized model variants exposed in the catalog
- [x] GenieX runtime support for Windows ARM64 devices
- [x] AWS Bedrock cross-region inference profile support - geo-prefixed profile IDs (`us.`, `eu.`, `global.`) now appear in the model dropdown and route correctly, plus manual region entry for regions outside the preset list (GovCloud, specialized partitions)
- [x] LocalAI added as an image generation provider, listing only image-capable models from your server
- [x] LocalAI context window auto-detection - context windows are read per-model from your server's config, with the manual setting now an optional override
- [x] Silent/headless install and uninstall flags for the Windows installer - see the [Windows installation docs](https://docs.anythingllm.com/installation-desktop/windows#silent--headless-installation)

## Improvements

- [x] Chain of thought and agent activity are now a single collapsible component - one line when collapsed, one step per thought with a connected rail when expanded, and the live thought shown in the header while streaming
- [x] The new chain of thought rollup is now mirrored in the Assistant Panel
- [x] Leaving a thread or navigating away mid-inference now warns you before the response is lost, instead of silently killing the generation
- [x] Foundry Local no longer prompts for setup when using the built-in runtime, and auto-loads models by capability detection
- [x] Onboarding light mode styling and a redesigned LLM selection UI
- [x] Beacon now renders thinking blocks and markdown formatting correctly while streaming, with collapsible thinking and a fix for model detail text overflow
- [x] Windows installer now includes a sidebar panel image
- [x] Prompt input drafts now persist between navigation

## Bug Fixes

- [x] Fixed a Gemini crash caused by a content-header length mismatch on unpinned `undici` versions - now compatible with both v6 and v7
- [x] Fixed a crash when aborting an Anthropic (or Bedrock Anthropic) response mid-stream in `chat` mode and then sending a follow-up
- [x] Fixed a memory leak from leaked abort-stream listeners, which also caused pausing a response to wipe the entire chat
- [x] Fixed a crash when creating a new workspace
- [x] Fixed missing setup CTAs on modals introduced by the new uniform modal component - Scheduled Job skill setup on both the category and tool views, Community Hub connection key, and the experimental features reject button
- [x] Fixed the intermediate loader being too tall while waiting for an agent capability response
- [x] Fixed the stray border around the delete button in Workspace Chats
- [x] Fixed reasoning getting stuck on "thinking" when a model never closes its think tag
- [x] Fixed agent websocket sends firing while the connection was still opening

## All Changes
* fix: OCR 1-bit scanned PDFs instead of dropping pages by @tzlwn1 in https://github.com/Mintplex-Labs/anything-llm/pull/6128
* New AnythingLLM wordmark + fix logo theme resolution by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6138
* fix: persist API @agent chats into thread history by @LHMQ878 in https://github.com/Mintplex-Labs/anything-llm/pull/6125
* fix: enforce workspace memory limit during extraction by @uczltw6 in https://github.com/Mintplex-Labs/anything-llm/pull/6149
* fix(a11y): announce that a reply is generating, and that one failed by @opensource-joe in https://github.com/Mintplex-Labs/anything-llm/pull/6135
* Feat/cost tracking by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6150
* Fix agent backend crash from oversized tool reranker query by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6152
* Uniform modal component by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/5741
* chore: drop two package scripts whose targets are gone by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6155
* docs(gcp): describe what the deployment actually creates by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6154
* fix(docker): check the port the server is actually listening on by @marmar9615-cloud in https://github.com/Mintplex-Labs/anything-llm/pull/6159
* docs: fix remaining broken relative links and dead anchors by @simpleqt in https://github.com/Mintplex-Labs/anything-llm/pull/6168
* Route Bedrock cross-region inference profiles via bedrock-runtime by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6181
* Patch crash with Anthropic mid-stream abort/reply by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6186
* LocalAI context window auto-detection by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6177
* Add LocalAI as an image generation provider by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6176
* Revamp chain of thought UI component by @shatfield4 in https://github.com/Mintplex-Labs/anything-llm/pull/6182
* Prevent unload if under inference workload by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6190
* fix: agent WSS send while connecting + prompt input draft persistence by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6191
* 1.16.1 tags by @timothycarambat in https://github.com/Mintplex-Labs/anything-llm/pull/6194

## New Contributors
* @tzlwn1 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6128
* @LHMQ878 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6125
* @uczltw6 made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6149
* @opensource-joe made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6135
* @marmar9615-cloud made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6155
* @simpleqt made their first contribution in https://github.com/Mintplex-Labs/anything-llm/pull/6168

**Full Changelog**: https://github.com/Mintplex-Labs/anything-llm/compare/v1.16.0...v1.16.1

---

> **Source** [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) · `v1.16.1` · 2026-08-27 · [upstream release](https://github.com/Mintplex-Labs/anything-llm/releases/tag/v1.16.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
