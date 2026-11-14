---
title: "tesseract 5.5.4"
project: "tesseract"
repo: "tesseract-ocr/tesseract"
tag: "5.5.4"
version: "5.5.4"
published: "2026-10-28"
type: "patch"
lang: "en"
summary: "This release fixes 17 security advisories and several smaller issues. In addition, it provides some smaller updates and improvements:"
---

# tesseract 5.5.4

## What's Changed
This release fixes 17 security advisories and several smaller issues.
In addition, it provides some smaller updates and improvements:
* fix build of training tool on windows with VS2022: by @zdenop in https://github.com/tesseract-ocr/tesseract/pull/4590
* arch,viewer: add missing <cstdlib> and <string> by @tachalorah in https://github.com/tesseract-ocr/tesseract/pull/4592
* Fix recursive static initialization in SIMDDetect::GetDetector() by @stweil with @Copilot in https://github.com/tesseract-ocr/tesseract/pull/4598
* exports GetDetector() from the tesseract DLL, so linker can resolve it. by @zdenop in https://github.com/tesseract-ocr/tesseract/pull/4602
* Fix two \param names that refer to the member, not the argument by @darkdi in https://github.com/tesseract-ocr/tesseract/pull/4594
* Add new GitHub workflow which checks commits in a pull request by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4604
* Build unit tests without training tools by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4596
* docs: update dead Tesseract training docs link by @yzxcj797 in https://github.com/tesseract-ocr/tesseract/pull/4605
* Fix several high and medium priority issues reported by Coverity Scan by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4597
* Fix Coverity warnings by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4606
* Avoid quadratic paragraph restart scan by @ilkecan in https://github.com/tesseract-ocr/tesseract/pull/4599
* Bump actions/checkout from 4 to 7 by @dependabot[bot] in https://github.com/tesseract-ocr/tesseract/pull/4607
* Fix GitHub AI findings from 'Security and quality' by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4613
* Fix inefficient empty string test in ScrollView menus by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4612
* Fix some issues reported by Coverity by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4611
* fix: prevent out-of-bounds read in UNICHAR::UTF8ToUTF32 by @SomSamantray in https://github.com/tesseract-ocr/tesseract/pull/4609
* fix: prevent out-of-bounds access on truncated UTF-8 strings and crafted index maps by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4617
* Avoid redundant result iterator restarts by @ilkecan in https://github.com/tesseract-ocr/tesseract/pull/4601
* fix: potential memory leak by @y1lan in https://github.com/tesseract-ocr/tesseract/pull/4622
* Avoid float overflow for unclassified-word certainty by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4630
* Reject int-mode weight matrices with zero inputs in the deserializer by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4644
* Fix position-dependent paragraph bounding box by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4632
* Reject negative/oversized class ids in legacy inttemp by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4640
* Exit child process when execvp fails by @Ramya-9353 in https://github.com/tesseract-ocr/tesseract/pull/4577
* Neutralise file-sourced pointers in ReadAdaptedClass before use by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4645
* Fix Devanagari font download URL by @SKSavale in https://github.com/tesseract-ocr/tesseract/pull/4654
* cmake: allow unit tests to use installed GoogleTest by @manduinca in https://github.com/tesseract-ocr/tesseract/pull/4650
* Reject malformed dimensions in GENERIC_2D_ARRAY deserialization by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4649
* ccstruct: fix leak of orphaned outline cycles in EliminateDuplicateOutlines by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4655
* Fix double-free/UAF in AppendLinePolygon for RTL PAGE XML output by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4647
* wordrec: bound seam search to prevent timeouts on degenerate input by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4656
* lstm: reject old-format WeightMatrix instead of aborting by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4657
* wordrec: add a per-pass seam search budget to bound many-word timeouts by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4659
* Reject out-of-range null_char in LSTM model load by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4642
* Harden class-id handling in the int/adaptive classifier by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4639
* Reject int-mode weight matrices with a short scale vector by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4641
* Reject a recoder whose code range exceeds the network output count by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4643
* Skip unit tests when their traineddata model is missing by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4646
* nsis: rewrite winpath helper without a fixed-size buffer by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4661
* Fix C++17 build of constexpr FCOORD operators by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4665
* Fix use-after-free in ReplaceCurrentWord with several languages by @mardgez in https://github.com/tesseract-ocr/tesseract/pull/4667

## New Contributors
* @tachalorah made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4592
* @darkdi made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4594
* @yzxcj797 made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4605
* @ilkecan made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4599
* @SomSamantray made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4609
* @y1lan made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4622
* @SKSavale made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4654
* @manduinca made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4650
* @mardgez made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4667

**Full Changelog**: https://github.com/tesseract-ocr/tesseract/compare/5.5.3...5.5.4

---

> **Source** [tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract) · `5.5.4` · 2026-10-28 · [upstream release](https://github.com/tesseract-ocr/tesseract/releases/tag/5.5.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
