---
title: "ComfyUI v0.45.0"
project: "ComfyUI"
repo: "comfyanonymous/ComfyUI"
tag: "v0.45.0"
version: "v0.45.0"
published: "2026-11-10"
type: "minor"
lang: "en"
summary: "Bump comfyui-frontend-package to 1.58.5 · Add better error for when pixel_space VAE wrongly selected. · Make SeedVR2 VAE slice length adaptive to free memory · [Partner Nodes] feat(Pika): add Pika H3 Flex nodes"
---

# ComfyUI v0.45.0

## What's Changed
* Bump comfyui-frontend-package to 1.58.5 by @comfy-pr-bot in https://github.com/Comfy-Org/ComfyUI/pull/17442
* Add better error for when pixel_space VAE wrongly selected. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17518
* Make SeedVR2 VAE slice length adaptive to free memory by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17508
* [Partner Nodes] feat(Pika): add Pika H3 Flex nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17509
* [Partner Nodes] feat(Pika): add Pika Soundtrack, SFX and Music nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17328
* [Partner Nodes] feat(Tencent): add Tencent HY LLM node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17534
* Turn on local_web_sso and partner_node_token by default by @dante01yoon in https://github.com/Comfy-Org/ComfyUI/pull/17540
* Update workflow templates to v0.11.102 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17541
* Update comfy-kitchen version to 0.2.41 by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17542
* Fix potential crash. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17543
* Performance improvements for qwen 3.x (Part 4) -  Combine Parallel Linear Weights by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/17361
* Name comfy-agent without a version in agent_requirements.txt (CORE-692) by @christian-byrne in https://github.com/Comfy-Org/ComfyUI/pull/17454
* Fix Remesh Mesh on imported meshes by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17531
* Support RelayVSR (CORE-701) by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17511
* [Partner Nodes] feat(Kling): add Kling 4.0 Flash model and original audio option to Kling 4.0 nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17536
* [Partner Nodes] feat(OpenAI): add GPT Image 2.6 models by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17558
* [Partner Nodes] feat(Qwen): move Qwen Image nodes to Comfy Router by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17527
* Update workflow templates to v0.11.103 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17563
* [Partner Nodes] feat(Gemini): add Omni Flash 1.2 to the Omni video node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17560
* Fix resolution selector megapixel precision by @GACLove in https://github.com/Comfy-Org/ComfyUI/pull/17555
* Update api-node.md by @alexisrolland in https://github.com/Comfy-Org/ComfyUI/pull/17569
* Move run_cpu portable script to ./advanced by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17571
* Make the partner node team code owners of comfy_api_nodes by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17575
* [Partner Nodes] feat(ByteDance): add 4k resolution to Seedance 2.5 by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17579
* Move portable fast fp16 script to ./advanced by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17570
* Add video input support to Qwen 3.x by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17582
* Add solid mode to Extract Mesh from Splat by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17497
* Fix potential database issue. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17602
* Get Video Components: hold the decoded frames once, not twice by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/17562
* Fix crash when using the UNetSelfAttentionMultiply node. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17603
* [Partner Nodes] feat(OpenAI): add GPT Image V3, GIF and SVG nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17591
* [Partner Nodes] chore(Grok): update prices and tooltips for retired image models by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17532
* Fix qwen fp8 crashing when generating text. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17620
* feat: Support WeVisOne-VL (CORE-690) by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17632
* Avoid Mixing Prefetched and Non-Prefetched Usage of Combined Linear by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/17625
* Apply repetition/presence penalty in greedy decoding by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17635
* feat: Add texture rebaking and support UltraTex  (CORE-606) by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17636
* Update image editing models in README by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17650
* [Partner Nodes] feat(Breeze): add Breeze TTS 2 voice and text-to-speech nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17611
* [Partner Nodes] feat(ByteDance): add Seedream 5.5 model by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17631
* feat: Support MiniMax-H3-image (CORE-708) by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17655
* Update workflow templates to v0.11.105 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17658

## New Contributors
* @GACLove made their first contribution in https://github.com/Comfy-Org/ComfyUI/pull/17555

**Full Changelog**: https://github.com/Comfy-Org/ComfyUI/compare/v0.44.0...v0.45.0

---

> **Source** [comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) · `v0.45.0` · 2026-11-10 · [upstream release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.45.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
