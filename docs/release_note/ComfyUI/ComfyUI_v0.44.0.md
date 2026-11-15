---
title: "ComfyUI v0.44.0"
project: "ComfyUI"
repo: "comfyanonymous/ComfyUI"
tag: "v0.44.0"
version: "v0.44.0"
published: "2026-11-04"
type: "minor"
lang: "en"
summary: "[Partner Nodes] feat(Patina): add Patina texture nodes · [Partner Nodes] feat(VEED): add VEED Dubbing node · Update workflow templates to v0.11.98 · Switch pylint py version to 3.12"
---

# ComfyUI v0.44.0

## What's Changed
* [Partner Nodes] feat(Patina): add Patina texture nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17384
* [Partner Nodes] feat(VEED): add VEED Dubbing node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17388
* Update workflow templates to v0.11.98 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17391
* Switch pylint py version to 3.12 by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17398
* anonymous_file: bypass python for memfd_create by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/17386
* Bump comfyui-frontend-package to 1.58.1 by @comfy-pr-bot in https://github.com/Comfy-Org/ComfyUI/pull/17375
* Use the cached frontend for pinned versions without a v prefix. by @christian-byrne in https://github.com/Comfy-Org/ComfyUI/pull/17348
* Look up a pinned frontend release by its tag instead of listing every release. by @christian-byrne in https://github.com/Comfy-Org/ComfyUI/pull/17402
* Skip concat if only a single cond. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17413
* [Partner Nodes] feat(BFL): add 1080p, 2K and 4K targets to Flux Video Upscale V2 node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17394
* Support MiniMax-H3 latent upscaler model by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17412
* Skip concat if only a single cond in more conds. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17414
* Support MiniMax Sol-H3-VAE  by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17411
* [Partner Nodes] feat(WaveSpeed): move FlashVSR and image upscale nodes to Comfy Router by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17319
* Update workflow templates to v0.11.100 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17432
* Support context windows for MiniMax-H3 by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17425
* [Partner Nodes] feat(Ideogram): add context window region editing to Ideogram 4.5 Precise Edit by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17428
* Don't call torch.equal when the two tensors are the same. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17439
* Add a node to set the VAE compute dtype. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17450
* [Partner Nodes] feat(Pruna): add P-Video Upscale node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17443
* [Partner Nodes] feat(MiniMax): add H3 Max Recast, Extend, Reframe, Insert, Lip Sync and Camera Control nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17424
* Stop paging GitHub releases at the first prerelease by @christian-byrne in https://github.com/Comfy-Org/ComfyUI/pull/17434
* Return execution_meta in the job detail by @christian-byrne in https://github.com/Comfy-Org/ComfyUI/pull/17397
* Support prores and using different chroma subsampling for video saving. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17463
* Fix MTPHead unpack crash in prefetch queue cleanup (CORE-644) by @christian-byrne in https://github.com/Comfy-Org/ComfyUI/pull/17180
* Remove outdated guideline in AGENTS.md by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17482
* Fix fp8_e4m3fn_fast falling back to bf16 compute with dynamic VRAM by @CyrilB1531 in https://github.com/Comfy-Org/ComfyUI/pull/16941
* [Partner Nodes] feat(Topaz): add Wonder 4 model to Topaz Image Enhance by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17491
* Fix VAE Compute Dtype crash on the LTX 2.5 diffusion VAE decoder by @DoronGenzelHass in https://github.com/Comfy-Org/ComfyUI/pull/17487
* Add TextGenerateV2 with Autogrow image inputs by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17492
* Validate chroma subsampling input. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17501
* [Partner Nodes] feat(Sonilo): add Sonilo Music 1.5 node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17475
* [Partner Nodes] chore(ByteDance): deprecate Seedance 1.x video nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17507
* feat: Support PH3Image (CORE-697) by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17506
* [Partner Nodes] feat(OpenAI): add GPT-6.1 Terra and Sol models by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17493
* Update workflow templates to v0.11.101 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17512
* Update embedded docs to v0.5.16 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17513
* Turn on local_web_sso and partner_node_token by default by @dante01yoon in https://github.com/Comfy-Org/ComfyUI/pull/17490
* Revert "Turn on local_web_sso and partner_node_token by default" by @dante01yoon in https://github.com/Comfy-Org/ComfyUI/pull/17514

## New Contributors
* @CyrilB1531 made their first contribution in https://github.com/Comfy-Org/ComfyUI/pull/16941

**Full Changelog**: https://github.com/Comfy-Org/ComfyUI/compare/v0.43.0...v0.44.0

---

> **Source** [comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) · `v0.44.0` · 2026-11-04 · [upstream release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.44.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
