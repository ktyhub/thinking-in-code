---
title: "whisper.cpp v1.8.4"
project: "whisper.cpp"
repo: "ggml-org/whisper.cpp"
tag: "v1.8.4"
version: "v1.8.4"
published: "2026-03-19"
type: "patch"
lang: "en"
summary: "Maintenance release, latest ggml, some performance gains across the board."
---

# whisper.cpp v1.8.4

## Overview

Maintenance release, latest ggml, some performance gains across the board.

## What's Changed
* Fix: UTF-8 character cut off to two "�" in segment wrapping (max_len) by @lordofriver in https://github.com/ggml-org/whisper.cpp/pull/3592
* examples: add -g/--gpu-device option and GPU_DEVICE env support by @brauliobo in https://github.com/ggml-org/whisper.cpp/pull/3557
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3636
* Fix macOS dSYM path case mismatch in XCFramework build by @friederbluemle in https://github.com/ggml-org/whisper.cpp/pull/3630
* ruby : add `VAD::Context#segments_from_samples`, allow Pathname, etc. by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3633
* ruby : add `Whisper::Context::Params`, fix token memory management by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3647
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3652
* ci : try fix mirrors by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3655
* server : fix hardcoded /inference path in default HTML page by @sidmohan0 in https://github.com/ggml-org/whisper.cpp/pull/3639
* cmake: Drop obsolete build-time configuration of backends by @ckastner in https://github.com/ggml-org/whisper.cpp/pull/3649
* chore: Update outdated GitHub Actions versions by @pgoslatara in https://github.com/ggml-org/whisper.cpp/pull/3646
* ci: add vulkan docker image by @rare-magma in https://github.com/ggml-org/whisper.cpp/pull/3644
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3665
* readme : fix duplicate word typo in VAD section by @cluster2600 in https://github.com/ggml-org/whisper.cpp/pull/3670
* cli: update miniaudio library to 0.11.24 by @data-man in https://github.com/ggml-org/whisper.cpp/pull/3672
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3684
* ruby : null-check by @KitaitiMakoto in https://github.com/ggml-org/whisper.cpp/pull/3689
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3710
* server : return proper HTTP status codes for error responses by @dearlordylord in https://github.com/ggml-org/whisper.cpp/pull/3707
* server: allow max_len to be used for any output format by @gaelj in https://github.com/ggml-org/whisper.cpp/pull/3679
* fix: replace deprecated openvino-dev with openvino>=2023.3.0 for Python 3.12+ compat by @Aiudadadadf in https://github.com/ggml-org/whisper.cpp/pull/3678
* fix(go): handle EOF correctly in model download example of golang bidings by @Lumberj3ck in https://github.com/ggml-org/whisper.cpp/pull/3671
* fix: VAD time mapping timestamp drift caused by overlap samples by @lohopupa in https://github.com/ggml-org/whisper.cpp/pull/3711
* sync : ggml by @ggerganov in https://github.com/ggml-org/whisper.cpp/pull/3713

## New Contributors
* @lordofriver made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3592
* @brauliobo made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3557
* @friederbluemle made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3630
* @sidmohan0 made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3639
* @ckastner made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3649
* @pgoslatara made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3646
* @rare-magma made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3644
* @cluster2600 made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3670
* @dearlordylord made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3707
* @gaelj made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3679
* @Aiudadadadf made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3678
* @Lumberj3ck made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3671
* @lohopupa made their first contribution in https://github.com/ggml-org/whisper.cpp/pull/3711

**Full Changelog**: https://github.com/ggml-org/whisper.cpp/compare/v1.8.3...v1.8.4

---

> **Source** [ggml-org/whisper.cpp](https://github.com/ggml-org/whisper.cpp) · `v1.8.4` · 2026-03-19 · [upstream release](https://github.com/ggml-org/whisper.cpp/releases/tag/v1.8.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
