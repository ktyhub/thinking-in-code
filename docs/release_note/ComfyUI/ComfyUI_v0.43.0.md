---
title: "ComfyUI v0.43.0"
project: "ComfyUI"
repo: "comfyanonymous/ComfyUI"
tag: "v0.43.0"
version: "v0.43.0"
published: "2026-10-27"
type: "minor"
lang: "en"
summary: "model_prefetch: syncrhonize all graph cleanups · Add rope scaling support to MOSS-image · [Partner Nodes] Renew partner-node sign-in tokens in API nodes"
---

# ComfyUI v0.43.0

## What's Changed
* model_prefetch: syncrhonize all graph cleanups by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/17178
* Add rope scaling support to MOSS-image by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17172
* [Partner Nodes] Renew partner-node sign-in tokens in API nodes by @dante01yoon in https://github.com/Comfy-Org/ComfyUI/pull/16943
* [Partner Nodes] feat(HeyGen): add HeyGen Voice instant clone and text-to-speech by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17043
* [Partner Nodes] feat(ClarityAI): add Crystal Video Upscaler node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17192
* [Partner Nodes] feat(BFL): add 2K/4K resolutions to FLUX 3 Video nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17200
* Support MOSS-image color-depth control by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17206
* Add to Readme that MOSS image is supported. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17212
* [Partner Nodes] feat(BFL): add FLUX 3 Max nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17202
* fix: correct top-p sampling threshold by @curealb in https://github.com/Comfy-Org/ComfyUI/pull/17221
* Update workflow templates to v0.11.92 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17234
* [Partner Nodes] feat(Bria): FIBO 2.0 Image Generate/Edit nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17229
* Apply single-head LoRAs to MiniMax-H3 PDD head banks by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17239
* Update workflow templates to v0.11.93 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17238
* Bump comfyui-frontend-package to 1.57.1 by @comfy-pr-bot in https://github.com/Comfy-Org/ComfyUI/pull/17244
* feat: Add Fibo 2.0 support by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17240
* Set minimum Pillow version in requirements. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17249
* Add Pad Image node with mirror padding and pad to multiple by @DoronGenzelHass in https://github.com/Comfy-Org/ComfyUI/pull/17224
* Load the optional local agent through comfy-agent's v1 host by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/17241
* [Partner Nodes] fix(HeyGen): update HeyGen Voice price badge by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17257
* [Partner Nodes] feat(Krea): add ultra thinking mode to Krea 3 Image node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17260
* [Partner Nodes] feat(VEED): add Fabric 1.0, Lipsync 2.0, and other by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17242
* [Partner Nodes] feat(Mirelo): add Mirelo SFX nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17265
* Update workflow templates to v0.11.94 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17268
* Add model integration instructions to AGENTS.md by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17279
* Fix Gemma 4 31B global attention (k_eq_v, 4 global KV heads) by @Nynxz in https://github.com/Comfy-Org/ComfyUI/pull/17220
* Support MOSS-Image edit LoRAs by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17296
* qwen 3.x performance improvements part III - Adaptive tree MTP by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/17273
* Sync offload streams before stealing a pin by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/17297
* Fibo 2.0: Change RoPE scaling to NTK aware by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17290
* Fix Fibo2.0 T2I negative prompt handling by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17285
* comfy should only contain model related stuff. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17307
* Comfy-Aimdo 0.6.0 + Dynamic VRAM KV caches part I by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/17274
* [Partner Nodes] feat(Meshy): add Meshy T2.5 Smart Topology tnodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17280
* [Partner Nodes] feat(PixVerse): add PixVerse V6-Max model by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17287
* [Partner Nodes] feat(Bria): add 3 new nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17289
* [Partner Nodes] feat(Ideogram): add Ideogram Vector Generate SVG nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17298
* Update workflow templates to v0.11.96 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17301
* Enable pytorch attention in the VAE on AMD by @0xDELUXA in https://github.com/Comfy-Org/ComfyUI/pull/17271
* Fuse and strip the Flux2 VAE through comfy-kitchen by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17196
* Add ACEScg to Convert Image Color Space and Save Image (Advanced) EXR (CORE-657) by @DoronGenzelHass in https://github.com/Comfy-Org/ComfyUI/pull/17023
* Add Comfy API console tips by @guill in https://github.com/Comfy-Org/ComfyUI/pull/17052
* Add attention bias conditioning and image strength for MOSS-Image edit by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17320
* Don't use pytorch attention for head dims above 256 on gfx11 by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/17323
* Update architecture boundaries in AGENTS.md by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17331
* Lower peak MOSS memory a bit. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17338
* Add deploy to cloud endpoints and feature flag by @guill in https://github.com/Comfy-Org/ComfyUI/pull/17203
* Add a Branch node by @AustinMroz in https://github.com/Comfy-Org/ComfyUI/pull/16383
* Add model specific merge node for MOSS. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/17349
* [Partner Nodes] fix(client): respect proxy environment variables by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17346
* docs: add Huawei branding to Ascend NPU section in README by @yzeyu71 in https://github.com/Comfy-Org/ComfyUI/pull/17359
* Bump comfyui-frontend-package to 1.57.4 by @comfy-pr-bot in https://github.com/Comfy-Org/ComfyUI/pull/17329
* [Partner Nodes] feat(Kling): add Kling 4.0 nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/17364
* Update embedded docs to v0.5.15 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17366
* Update workflow templates to v0.11.97 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17368

## New Contributors
* @curealb made their first contribution in https://github.com/Comfy-Org/ComfyUI/pull/17221
* @DoronGenzelHass made their first contribution in https://github.com/Comfy-Org/ComfyUI/pull/17224
* @Nynxz made their first contribution in https://github.com/Comfy-Org/ComfyUI/pull/17220
* @yzeyu71 made their first contribution in https://github.com/Comfy-Org/ComfyUI/pull/17359

**Full Changelog**: https://github.com/Comfy-Org/ComfyUI/compare/v0.42.0...v0.43.0

---

> **Source** [comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) · `v0.43.0` · 2026-10-27 · [upstream release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.43.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
