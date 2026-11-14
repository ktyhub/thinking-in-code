---
title: "VoxCPM 2.0.3"
project: "VoxCPM"
repo: "OpenBMB/VoxCPM"
tag: "2.0.3"
version: "2.0.3"
published: "2026-05-11"
type: "patch"
lang: "en"
summary: "This release focuses on fine-tuning usability, runtime stability, safer LoRA loading, and faster streaming inference."
---

# VoxCPM 2.0.3

## VoxCPM v2.0.3

This release focuses on fine-tuning usability, runtime stability, safer LoRA loading, and faster streaming inference.

### Highlights

- Added `voxcpm validate` for pre-flight JSONL training manifest validation.
- Added optional `ref_audio` support in the fine-tuning data pipeline.
- Improved runtime device handling with explicit `--device` support and safer MPS dtype behavior.
- Improved VoxCPM2 streaming VAE decoding by avoiding redundant overlap decoding.
- Hardened legacy LoRA checkpoint loading with `weights_only=True`.
- Fixed LoRA rank mismatch handling in `lora_ft_webui.py`.

### New Features

- Add `voxcpm validate --manifest train.jsonl` to catch training data issues before fine-tuning.
  - Validates JSONL format, required `text`/`audio` fields, audio existence/readability, sample rate, duration stats, text length stats, and optional `ref_audio`.
- Add optional `ref_audio` support for fine-tuning manifests.
  - Training packing now supports `[103, ref_audio, 104, text, 101, target_audio, 102]`.
  - Loss is applied only to the target audio segment.
- Add `--device` CLI argument for model inference commands.
  - Supports `auto`, `cpu`, `mps`, `cuda`, and indexed CUDA devices such as `cuda:0`.

### Performance

- Improve VoxCPM2 streaming VAE decode with a stateful `StreamingVAEDecoder`.
  - Streaming decode now processes only the newest latent patch and carries causal convolution state internally.
  - This removes redundant overlap decoding and reduces streaming VAE decode overhead.

### Fixes

- Fix CUDA Graph dynamic-shape accumulation by using the uncompiled feature encoder for prefill.
- Fix CPU SDPA attention mask broadcasting by using an explicit broadcastable mask shape.
- Fix non-string text validation order to raise the intended `ValueError` instead of `AttributeError`.
- Fix file descriptor leaks when loading `config.json` in local model loaders.
- Fix MPS audio quality issues by promoting low-precision dtypes to `float32` on Apple Silicon by default.
- Fix `VOXCPM_MPS_DTYPE` override validation to match supported dtype aliases.
- Fix LoRA rank mismatch in `lora_ft_webui.py` by reloading the model when checkpoint rank differs.
- Fix Web Demo control text handling by stripping parentheses before constructing the model prompt.

### Security

- Legacy LoRA `.ckpt` / `.pth` loading now uses `torch.load(..., weights_only=True)`.
- This reduces the risk of arbitrary pickle payload execution while preserving tensor-only checkpoint compatibility.

### Documentation

- Document vLLM-Omni as a production serving option for VoxCPM2.
- Update Web Demo usage to `python app.py --port 8808`.
- Update ModelScope local download example.
- Clarify Python requirement as `>=3.10,<3.13`.
- Add ComfyUI_RH_VoxCPM to the ecosystem list.

### Tests

- Added coverage for training manifest validation, including sample-rate mismatch, missing audio, relative paths, `ref_audio`, and CLI exit codes.
- Added runtime device selection tests.
- Added LoRA checkpoint safety tests for tensor-only checkpoints and malicious pickle payloads.
- Added CLI tests for `--device` defaults and argument forwarding.

### Contributors

Thanks to the contributors included in this release:

- @KevinAHM
- @kuishou68
- @sharziki
- @SuperMarioYL
- @Oumnya
- @linyueqian
- @shaun0927
- @gluttony-10

**Full Changelog**: https://github.com/OpenBMB/VoxCPM/compare/2.0.2...2.0.3

---

> **Source** [OpenBMB/VoxCPM](https://github.com/OpenBMB/VoxCPM) · `2.0.3` · 2026-05-11 · [upstream release](https://github.com/OpenBMB/VoxCPM/releases/tag/2.0.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
