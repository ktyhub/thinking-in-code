---
title: "ComfyUI v0.40.0"
project: "ComfyUI"
repo: "comfyanonymous/ComfyUI"
tag: "v0.40.0"
version: "v0.40.0"
published: "2026-10-13"
type: "minor"
lang: "en"
summary: "[Server.py] Update CSP to allow blob: and data · Add comfy_attention and AttentionTensorContainer support to rest of models · Implement the asset export API locally (CORE-454)"
---

# ComfyUI v0.40.0

## What's Changed
* [Server.py] Update CSP to allow `blob:` and `data:` by @S0yKaf in https://github.com/Comfy-Org/ComfyUI/pull/15565
* Add comfy_attention and AttentionTensorContainer support to rest of models by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16806
* Implement the asset export API locally (CORE-454) by @jtydhr88 in https://github.com/Comfy-Org/ComfyUI/pull/16578
* Report 3D models from every 3D node as a standard 3d output item by @jtydhr88 in https://github.com/Comfy-Org/ComfyUI/pull/16200
* feat(camera-info): CreateCameraInfo node + CameraInfoState widget input by @jtydhr88 in https://github.com/Comfy-Org/ComfyUI/pull/14964
* feat(assets): extract video metadata into system_metadata on ingest and scan by @jtydhr88 in https://github.com/Comfy-Org/ComfyUI/pull/15180
* Add a way to attach metadata to the websocket messages of a prompt. by @christian-byrne in https://github.com/Comfy-Org/ComfyUI/pull/16763
* fix: preserve dynamic input validation and lazy execution by @jaeone94 in https://github.com/Comfy-Org/ComfyUI/pull/16377
* refactor: keep DynamicGroup internal while stabilizing by @jaeone94 in https://github.com/Comfy-Org/ComfyUI/pull/16811
* feat: add CameraAngle node with camera_info and shot prompt outputs by @jtydhr88 in https://github.com/Comfy-Org/ComfyUI/pull/16251
* [Partner Nodes] feat(Google): add Nano Banana 2.1 model by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16822
* Update workflow templates to v0.11.77 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/16823
* Improve low VRAM performance of qwen 3.5 LLM by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/16820
* Make k/v contiguous before SDPA on gfx1151 when they don't fit in L2 by @tvukovic-amd in https://github.com/Comfy-Org/ComfyUI/pull/16726
* Consolidate Linear forward API with prologue/epilogue fusion paths by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/16816
* Also attach the metadata to a prompt's preview image frames. by @christian-byrne in https://github.com/Comfy-Org/ComfyUI/pull/16809
* Add governance enforcement for custom nodes by @guill in https://github.com/Comfy-Org/ComfyUI/pull/16167
* comfy_attention configs in model files can now use kitchen sol attention. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16831
* Bump comfyui-frontend-package to 1.55.14 by @comfy-pr-bot in https://github.com/Comfy-Org/ComfyUI/pull/16736
* [Partner Nodes] feat(Quiver): add V2 SVG nodes with per-model inputs and deprecate the originals by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16775
* [Partner Nodes] feat(Vidu): add nodes for Vidu Q4 model by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16849
* [Partner Nodes] feat(ClarityAI): add Crystal Upscaler node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16817
* [Partner Nodes] feat(Kling): add Kling Virtual Try-On node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16844
* Update workflow templates to v0.11.78 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/16851
* Change model code to use function wrappers for Linear calls by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/16861
* Fix issue with bypass loras and fused paths. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16862
* Use PNG compress level 4 for GLB textures for faster saving by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/16867
* Comfy Aimdo 0.5.6 + Fix qwen 2.1 rogues in low VRAM conditions by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/16870
* Fix Qwen3.5 MTP embedding offload by @rattus128 in https://github.com/Comfy-Org/ComfyUI/pull/16877
* Loras can now replace the per layer attention config on a model. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16880
* Link related repositories in CodeRabbit reviews by @christian-byrne in https://github.com/Comfy-Org/ComfyUI/pull/16769
* feat: add native LoRA stack loader nodes (CORE-186) by @jaeone94 in https://github.com/Comfy-Org/ComfyUI/pull/16309
* Turn the assets system on by default; add --disable-assets by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16884
* [Partner Nodes] feat(HeyGen): add 2k resolution to HeyGen Video 1.0 nodes by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16876
* Add LatentOperationBlend and start/end percent to LatentApplyOperatio… by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16923
* Disable the output assets scanning. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16926
* Enable MTP with images on Qwen3.5 by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/16922
* Decode MiniMax H3 single images as the first latent of a clip by @kijai in https://github.com/Comfy-Org/ComfyUI/pull/16881
* fix(assets): date scanned assets by their file's mtime by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16810
* Enable compression on saved EXR. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16948
* Fix issues with loading half float files with pyav. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16949
* Keep linked repository findings focused by @christian-byrne in https://github.com/Comfy-Org/ComfyUI/pull/16920
* Remove some outdated code. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16960
* Turn assets off unless --enable-assets, and scan the output folder again by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16929
* Turn the assets system on for the Windows standalone build by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16928
* Add a ARM64 nvidia portable. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16985
* Remove the cryptography package dependency. by @comfyanonymous in https://github.com/Comfy-Org/ComfyUI/pull/16988
* Update embedded docs to v0.5.14 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/16981
* [Partner Nodes] feat(Higgsfield): Genjutsu Motion Transfer node by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16913
* feat(assets): previews for EXR assets, written by SaveImageAdvanced for outputs by @synap5e in https://github.com/Comfy-Org/ComfyUI/pull/16898
* [Partner Nodes] feat(FishAudio): add Drama 3 model by @bigcat88 in https://github.com/Comfy-Org/ComfyUI/pull/16999
* Update workflow templates to v0.11.82 by @comfyui-wiki in https://github.com/Comfy-Org/ComfyUI/pull/17001
* Bump comfyui-frontend-package to 1.55.17 by @AustinMroz in https://github.com/Comfy-Org/ComfyUI/pull/17004

## New Contributors
* @S0yKaf made their first contribution in https://github.com/Comfy-Org/ComfyUI/pull/15565

**Full Changelog**: https://github.com/Comfy-Org/ComfyUI/compare/v0.39.0...v0.40.0

---

> **Source** [comfyanonymous/ComfyUI](https://github.com/comfyanonymous/ComfyUI) · `v0.40.0` · 2026-10-13 · [upstream release](https://github.com/Comfy-Org/ComfyUI/releases/tag/v0.40.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
