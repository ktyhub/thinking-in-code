---
title: "ComfyUI v0.39.0"
project: "ComfyUI"
repo: "comfyanonymous/ComfyUI"
tag: "v0.39.0"
version: "v0.39.0"
published: "2026-10-05"
type: "minor"
lang: "en"
summary: "Support LynnReal light Minimax-H3 vae · Update embedded docs to v0.5.13 · Use higher quality defaults for Save Video encoding. · feat: add DynamicGroup widget input"
---

# ComfyUI v0.39.0

## What's Changed
* Support LynnReal light Minimax-H3 vae by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/16657
* Update embedded docs to v0.5.13 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/16618
* Use higher quality defaults for Save Video encoding. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16663
* feat: add DynamicGroup widget input by @jaeone94 in https://github.com/Comfy-Org/ComfyUI/pull/16260
* fix(assets): don't let a model category that can't be listed abort the scan by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16658
* fix(assets): recover records when a drive comes back with hashing off by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16646
* Fix crash when selecting int8 or int4 cache in qwen image 2.1 by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16667
* [Partner Nodes] feat(Anthropic): add Sonnet 5.5 model by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16647
* [Partner Nodes] feat(Ideogram): add nodes for Ideogram 4.5 model by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16689
* Fix minimax vae offload issue. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16698
* [Partner Nodes] feat(HeyGen): add nodes for HeyGen Video 1.0 model by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16695
* Update workflow templates to v0.11.73 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/16693
* Add 16-bit float support to Save EXR. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16706
* Bump comfyui-frontend-package to 1.53.10 by @comfy-pr-bot in https://github.com/Comfy-Org/ComfyUI/pull/16456
* Release packed MiniMax H3 embedding temporaries before blocks by @Tokha233 in https://github.com/Comfy-Org/ComfyUI/pull/16677
* Update default bit depth for 'exr' option to 16 bit float. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16715
* feat: add --offline and --disable-partner-nodes, deprecate --disable-api-nodes by @deepme987 in https://github.com/Comfy-Org/ComfyUI/pull/16672
* [Partner Nodes] feat(BFL): add FLUX 3 Image node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16716
* [Partner Nodes] feat(Grok): add grok-imagine-video-1.5-lite model by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16721
* Update workflow templates to v0.11.74 by @purzbeats in https://github.com/Comfy-Org/ComfyUI/pull/16724
* fix(assets): batch prefix filters so scans work with many model folders by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16645
* Update comfy-kitchen version to 0.2.37 by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16738
* [Partner Nodes] chore(Luma): deprecate Ray 2 nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16741
* Update workflow templates to v0.11.76 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/16739
* Disable pinned memory automatically on integrated GPUs by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/16746
* feat(assets): report scan CPU and paused time, and classify scan failures by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16719
* fix(assets): don't take the database lock when assets are off; warn when it's held by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16742
* Echo the Create Bounding Boxes background as a UI preview by @jtydhr88 in https://github.com/Comfy-Org/ComfyUI/pull/16636
* perf(assets): let the partial live-path index serve live-row-at-path lookups by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16659
* [Partner Nodes] feat(ElevenLabs): add Eleven v4 and v4 Turbo models by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16737
* [Partner Nodes] fix(OpenAI): remove transparent background for GPT Image 2 by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16744
* fix(assets): write the prune and offline marking in short batches so saves aren't locked out by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16696
* Add new attention and compiler stuff to AGENTS.md by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16762
* Add comfy_attention and AttentionTensorContainer support to more models. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16766
* fix(assets): write scan inserts in short transactions so uploads and output saves aren't locked out + use WAL synchronous=NORMAL by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16748
* fix(assets): resume the background scan once the prompt queue is empty by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16765
* fix(assets): pause the startup scan during its folder walk and file stats by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16764
* fix(assets): copy uploads into place when the destination is on another volume by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16722

## New Contributors
* @jaeone94 made their first contribution in https://github.com/Comfy-Org/ComfyUI/pull/16260
* @Tokha233 made their first contribution in https://github.com/Comfy-Org/ComfyUI/pull/16677

**Full Changelog**: https://github.com/Comfy-Org/ComfyUI/compare/v0.38.0...v0.39.0

---

> **Source** [comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) · `v0.39.0` · 2026-10-05 · [upstream release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.39.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
