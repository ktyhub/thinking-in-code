---
title: "diffusers v0.42.0"
project: "diffusers"
repo: "huggingface/diffusers"
tag: "v0.42.0"
version: "v0.42.0"
published: "2026-10-23"
type: "minor"
lang: "en"
summary: "FLUX.3 Image Klein from Black Forest Labs supports text-to-image generation and editing with one or more reference images. Both the base and step-distilled checkpoints are available through ModularPipeline, with an…"
---

# diffusers v0.42.0

> [!TIP]
> This release brings FLUX.3 Image Klein, Bria Fibo 2.0, Kandinsky 6, SANA-WM, and RFD4-Proteína to Diffusers, alongside new adapter support, hardware integrations, and modular pipelines.
> 🚨 Python 3.11 or newer is now required.

## FLUX.3 Image Klein

FLUX.3 Image Klein from Black Forest Labs supports text-to-image generation and editing with one or more reference images. Both the base and step-distilled checkpoints are available through `ModularPipeline`, with an integrated prompt upsampler that turns short requests into detailed captions and supports layout instructions with bounding boxes. The integration also includes single-file transformer loading and BFL FP8r and NVFP4 checkpoints.

Load the pipeline with `ModularPipeline.from_pretrained(...)`, then load its weights with `load_components(...)`. See the [FLUX.3 documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/flux3) for examples and guidance on prompt upsampling, editing, and memory use.

## Bria Fibo 2.0

Bria Fibo 2.0 supports image generation from structured JSON captions and editing with up to five reference images through `BriaFibo2Pipeline`. The integration includes the dev checkpoint and the edit-turbo checkpoint, which runs in four steps without classifier-free guidance. See the [Fibo 2.0 documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/bria_fibo2) for the supported prompt formats.

LoRA loading and DreamBooth LoRA training examples are included for text-to-image and image editing. Thanks to [@muhammadali-afridi](https://github.com/muhammadali-afridi) for the model integration (#14991).

## Kandinsky 6

Kandinsky 6 generates video with synchronized audio from text or a reference image through `Kandinsky6TI2VAPipeline`. A separate `Kandinsky6SRPipeline` provides video super-resolution. The integration supports Pro and Lite generation checkpoints, including distilled variants, and introduces `PiflowScheduler` for the distilled models. See the [Kandinsky 6 documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/kandinsky6) for checkpoint-specific settings and super-resolution requirements. Thanks to @lefff for the model integration (#14949).

## SANA-WM

SANA-WM generates video from a starting image, a text prompt, and a camera trajectory. Control the camera with explicit poses or a WASD/IJKL action string, then optionally refine the output with the separate LTX-2 refiner. See the [SANA-WM documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/sana_wm) for the two-stage workflow.

Thanks to [@lawrence-cj](https://github.com/lawrence-cj) for the integration (#13881).

## RFD4-Proteína

RFD4-Proteína from the Baker Lab and NVIDIA brings biomolecular design to Diffusers. It jointly generates protein sequences and all-atom structures while conditioning on molecular context such as binding targets, motifs, or ligands. The integration includes the pipeline, transformer, autoencoder, schedulers, and LoRA loading. Preparing model inputs and writing CIF files uses the separate `rfd4-proteina-prep` package; see the [RFD4-Proteína documentation](https://huggingface.co/docs/diffusers/main/en/api/pipelines/rfd4_proteina).

Thanks to [@kierandidi](https://github.com/kierandidi) for the integration (#15088).

### Other highlights

- **Qwen-Image 2.1:** new modular pipelines and tensor parallelism support. ([#14976](https://github.com/huggingface/diffusers/pull/14976), [#14865](https://github.com/huggingface/diffusers/pull/14865))
- **More hardware support:** TorchTPU integration covers eager execution, `torch.compile`, and tensor parallelism. Tensor parallelism also gains Intel XPU support. ([#14039](https://github.com/huggingface/diffusers/pull/14039), [#15013](https://github.com/huggingface/diffusers/pull/15013))
- **LoKr adapters:** load LyCORIS Kronecker-product adapters for Z-Image and FLUX.2, including Klein. ([#14163](https://github.com/huggingface/diffusers/pull/14163))
- **LTX-2 motion control:** `motion_speed` controls the positional time base independently of playback frame rate. Use a compatible adapter for speeds far from the default, such as the LTX-2.5 slow-motion control LoRA. ([#14967](https://github.com/huggingface/diffusers/pull/14967))
- **KVAE-Audio:** `AutoencoderKLKVAEAudio` adds encoding and decoding for 48 kHz audio. ([#14384](https://github.com/huggingface/diffusers/pull/14384))
- **Caching:** MagCache now supports FLUX.2. ([#14756](https://github.com/huggingface/diffusers/pull/14756))
- **Adapter fixes:** Z-Image honors the LoRA scale in `joint_attention_kwargs`, Qwen-Image applies `.alpha` scaling to `lora_A`/`lora_B` checkpoints, and text encoders correctly report active adapters. ([#15015](https://github.com/huggingface/diffusers/pull/15015), [#15016](https://github.com/huggingface/diffusers/pull/15016), [#14961](https://github.com/huggingface/diffusers/pull/14961))
- **Pipeline fixes:** preserve explicit timesteps in `FlowMatchEulerDiscreteScheduler`, fix Anima text encoder exports and standalone core denoising, and preserve the three-value return from `InpaintProcessor.preprocess` when no mask is supplied. ([#14956](https://github.com/huggingface/diffusers/pull/14956), [#14943](https://github.com/huggingface/diffusers/pull/14943), [#14481](https://github.com/huggingface/diffusers/pull/14481))

### Deprecations and compatibility

- **Python 3.10 support is dropped.** Upgrade to Python 3.11 or newer before installing this release. ([#15030](https://github.com/huggingface/diffusers/pull/15030))
- **Modular latent outputs:** FLUX, Krea 2, and LTX-Video now unpack latents in their core denoise groups. Custom workflows should pass unpacked latents to their decode blocks. The fallback for packed latents is deprecated for removal in 0.47.0. ([#14737](https://github.com/huggingface/diffusers/pull/14737))
- **Hub compatibility:** the supported `huggingface_hub` range is now `>=1.32.0,<3.0`. ([#14863](https://github.com/huggingface/diffusers/pull/14863))
- **TorchAO imports:** having a TorchAO version older than 0.15 installed no longer breaks model imports. TorchAO quantization still requires version 0.15 or newer. ([#15095](https://github.com/huggingface/diffusers/pull/15095))

Thanks to everyone who contributed to this release!

## All commits

- fix https://github.com/huggingface/diffusers/issues/14461 by [@yiyixuxu](https://github.com/yiyixuxu) in [#14956](https://github.com/huggingface/diffusers/pull/14956)
- Kandinsky6 by [@sayakpaul](https://github.com/sayakpaul) in [#14949](https://github.com/huggingface/diffusers/pull/14949)
- Bump doc-builder workflow pin by [@paulinebm](https://github.com/paulinebm) in [#14957](https://github.com/huggingface/diffusers/pull/14957)
- [docs] Jobs guide by [@stevhliu](https://github.com/stevhliu) in [#14926](https://github.com/huggingface/diffusers/pull/14926)
- [docs] Community methods by [@stevhliu](https://github.com/stevhliu) in [#14973](https://github.com/huggingface/diffusers/pull/14973)
- Fix active adapter detection for text encoders by [@Subodh-17](https://github.com/Subodh-17) in [#14961](https://github.com/huggingface/diffusers/pull/14961)
- fix(image_processor): maintain 3-tuple return contract in InpaintProcessor.preprocess when mask is None by [@patrickswedish](https://github.com/patrickswedish) in [#14481](https://github.com/huggingface/diffusers/pull/14481)
- [ci] consolidate labeling on PRs. by [@sayakpaul](https://github.com/sayakpaul) in [#14911](https://github.com/huggingface/diffusers/pull/14911)
- [LoRA] add LoKr adapter support (Z-Image, Flux2/Klein) by [@christopher5106](https://github.com/christopher5106) in [#14163](https://github.com/huggingface/diffusers/pull/14163)
- [TPU] TorchTPU backend integration - eager / torch.compile / tp by [@JingyaHuang](https://github.com/JingyaHuang) in [#14039](https://github.com/huggingface/diffusers/pull/14039)
- [cli] detect composite block classes in `custom_blocks` by [@yiyixuxu](https://github.com/yiyixuxu) in [#15001](https://github.com/huggingface/diffusers/pull/15001)
- Fix Anima text encoder exports and standalone core denoising by [@lucasruan1618](https://github.com/lucasruan1618) in [#14943](https://github.com/huggingface/diffusers/pull/14943)
- Bump huggingface_hub upper bound to <3.0 (diffusers) by [@Wauplin](https://github.com/Wauplin) in [#14863](https://github.com/huggingface/diffusers/pull/14863)
- Make Stable Diffusion device-map comparisons deterministic by [@sywangyi](https://github.com/sywangyi) in [#15010](https://github.com/huggingface/diffusers/pull/15010)
- xpu supports TP as well by [@sywangyi](https://github.com/sywangyi) in [#15013](https://github.com/huggingface/diffusers/pull/15013)
- Add SANA-WM camera-controlled image-to-video pipeline by [@lawrence-cj](https://github.com/lawrence-cj) in [#13881](https://github.com/huggingface/diffusers/pull/13881)
- [Z-Image] Apply the LoRA scale passed via joint_attention_kwargs by [@Sergasgr](https://github.com/Sergasgr) in [#15015](https://github.com/huggingface/diffusers/pull/15015)
- [utils] preserve method metadata in apply_forward_hook by [@javierdejesusda](https://github.com/javierdejesusda) in [#13803](https://github.com/huggingface/diffusers/pull/13803)
- Update FlashAttention Hub integration and guard CUDA-only tests by [@sywangyi](https://github.com/sywangyi) in [#15024](https://github.com/huggingface/diffusers/pull/15024)
- [hooks] Support Flux2 in MagCache by [@rootonchair](https://github.com/rootonchair) in [#14756](https://github.com/huggingface/diffusers/pull/14756)
- 🔒 Pin GitHub Actions to commit SHAs by [@paulinebm](https://github.com/paulinebm) in [#15028](https://github.com/huggingface/diffusers/pull/15028)
- [CI] Clean up `test_modeling_common.py` by [@DN6](https://github.com/DN6) in [#14988](https://github.com/huggingface/diffusers/pull/14988)
- ci: move to python 3.11. by [@sayakpaul](https://github.com/sayakpaul) in [#15030](https://github.com/huggingface/diffusers/pull/15030)
- [core] Tensor parallelism for Qwen-Image-2.1 by [@JingyaHuang](https://github.com/JingyaHuang) in [#14865](https://github.com/huggingface/diffusers/pull/14865)
- refactor: drop the Neuron RoPE path in Qwen Image by [@JingyaHuang](https://github.com/JingyaHuang) in [#15042](https://github.com/huggingface/diffusers/pull/15042)
- add modular pipeline for qwen-image 2.1 by [@akshan-main](https://github.com/akshan-main) in [#14976](https://github.com/huggingface/diffusers/pull/14976)
- Flux3 image by [@sayakpaul](https://github.com/sayakpaul) in [#15046](https://github.com/huggingface/diffusers/pull/15046)
- [docs] FLUX.3: prompt upsampler required, ours or any LLM by [@stephen37](https://github.com/stephen37) in [#15059](https://github.com/huggingface/diffusers/pull/15059)
- FLUX.3 prompt upsampler block by [@yiyixuxu](https://github.com/yiyixuxu) in [#15058](https://github.com/huggingface/diffusers/pull/15058)
- [docs] FLUX.3: modular-only notes, lazy loading, callbacks by [@yiyixuxu](https://github.com/yiyixuxu) in [#15069](https://github.com/huggingface/diffusers/pull/15069)
- FLUX.3: match the released BFL reference image sizing by [@yiyixuxu](https://github.com/yiyixuxu) in [#15073](https://github.com/huggingface/diffusers/pull/15073)
- post-release 0.41.0 by [@sayakpaul](https://github.com/sayakpaul) in [#15062](https://github.com/huggingface/diffusers/pull/15062)
- move unpack out of the flux, krea2 and ltx decoders into the core denoise groups by [@akshan-main](https://github.com/akshan-main) in [#14737](https://github.com/huggingface/diffusers/pull/14737)
- [feat] add KVAE-Audio autoencoder by [@ivnvalex](https://github.com/ivnvalex) in [#14384](https://github.com/huggingface/diffusers/pull/14384)
- Fix PyArrow compatibility in CPU CI by [@sayakpaul](https://github.com/sayakpaul) in [#15082](https://github.com/huggingface/diffusers/pull/15082)
- Add Bria fibo-2 by [@muhammadali-afridi](https://github.com/muhammadali-afridi) in [#14991](https://github.com/huggingface/diffusers/pull/14991)
- Add RFD4-Proteina by [@kierandidi](https://github.com/kierandidi) in [#15088](https://github.com/huggingface/diffusers/pull/15088)
- [tests] xfail some kandinsky6 tests by [@sayakpaul](https://github.com/sayakpaul) in [#14977](https://github.com/huggingface/diffusers/pull/14977)
- Fix model imports when torchao is older than 0.15 by [@usmanmateen](https://github.com/usmanmateen) in [#15095](https://github.com/huggingface/diffusers/pull/15095)
- [ci] use python 3.11 when using metadata. by [@sayakpaul](https://github.com/sayakpaul) in [#15093](https://github.com/huggingface/diffusers/pull/15093)
- [ci] fix misnamed test steps in push_tests.yml by [@sayakpaul](https://github.com/sayakpaul) in [#15094](https://github.com/huggingface/diffusers/pull/15094)
- [LTX-2] Add `motion_speed` to condition the positional time base apart from the playback frame rate by [@christopher5106](https://github.com/christopher5106) in [#14967](https://github.com/huggingface/diffusers/pull/14967)
- [ci] skip bf16 precision test on T4. by [@sayakpaul](https://github.com/sayakpaul) in [#15091](https://github.com/huggingface/diffusers/pull/15091)
- Use HF Trusted Publisher token in update_metadata workflow by [@coyotte508](https://github.com/coyotte508) in [#15096](https://github.com/huggingface/diffusers/pull/15096)
- [LoRA] apply .alpha to Qwen-Image lora_A/lora_B LoRAs by [@dcaayushd](https://github.com/dcaayushd) in [#15016](https://github.com/huggingface/diffusers/pull/15016)
- [ci] fix compilation CI. by [@sayakpaul](https://github.com/sayakpaul) in [#15092](https://github.com/huggingface/diffusers/pull/15092)
- add fibo-2 LoRA training and loading by [@linoytsaban](https://github.com/linoytsaban) in [#15084](https://github.com/huggingface/diffusers/pull/15084)
- Release: v0.42.0-release by [@sayakpaul](https://github.com/sayakpaul) ([direct release commit](https://github.com/huggingface/diffusers/commit/95f9b8925c34469ccac829866d7ad4e3fca1bd89))

## Significant community contributions

The following contributors added models and capabilities in this release:

- [@muhammadali-afridi](https://github.com/muhammadali-afridi): Bria Fibo 2.0 integration. ([#14991](https://github.com/huggingface/diffusers/pull/14991))
- [@lawrence-cj](https://github.com/lawrence-cj): SANA-WM camera-controlled video generation and refinement. ([#13881](https://github.com/huggingface/diffusers/pull/13881))
- [@kierandidi](https://github.com/kierandidi): RFD4-Proteína biomolecular design integration. ([#15088](https://github.com/huggingface/diffusers/pull/15088))
- [@ivnvalex](https://github.com/ivnvalex): KVAE-Audio autoencoder. ([#14384](https://github.com/huggingface/diffusers/pull/14384))
- [@christopher5106](https://github.com/christopher5106): LoKr adapter support and LTX-2 motion-speed control. ([#14163](https://github.com/huggingface/diffusers/pull/14163), [#14967](https://github.com/huggingface/diffusers/pull/14967))
- [@akshan-main](https://github.com/akshan-main): Qwen-Image 2.1 modular pipelines and consistent unpacked latent outputs for modular denoise groups. ([#14976](https://github.com/huggingface/diffusers/pull/14976), [#14737](https://github.com/huggingface/diffusers/pull/14737))
- [@sywangyi](https://github.com/sywangyi): Intel XPU tensor parallelism, FlashAttention Hub integration updates, and deterministic device-map tests. ([#15013](https://github.com/huggingface/diffusers/pull/15013), [#15024](https://github.com/huggingface/diffusers/pull/15024), [#15010](https://github.com/huggingface/diffusers/pull/15010))
- [@rootonchair](https://github.com/rootonchair): MagCache support for FLUX.2. ([#14756](https://github.com/huggingface/diffusers/pull/14756))

**Full changelog:** [v0.41.0 to the v0.42.0 release commit](https://github.com/huggingface/diffusers/compare/v0.41.0...95f9b8925c34469ccac829866d7ad4e3fca1bd89)

---

> **Source** [huggingface/diffusers](https://github.com/huggingface/diffusers) · `v0.42.0` · 2026-10-23 · [upstream release](https://github.com/huggingface/diffusers/releases/tag/v0.42.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
