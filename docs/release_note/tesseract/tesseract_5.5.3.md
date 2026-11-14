---
title: "tesseract 5.5.3"
project: "tesseract"
repo: "tesseract-ocr/tesseract"
tag: "5.5.3"
version: "5.5.3"
published: "2026-07-24"
type: "patch"
lang: "en"
summary: "This release fixes two security advisories and several smaller issues. In addition, it provides some smaller updates and improvements:"
---

# tesseract 5.5.3

## What's Changed
This release fixes two security advisories and several smaller issues.
In addition, it provides some smaller updates and improvements:
* Fix typos by @szepeviktor in https://github.com/tesseract-ocr/tesseract/pull/4497
* Fix missing closing tags in multi-page PAGE XML output by @stweil with @Copilot in https://github.com/tesseract-ocr/tesseract/pull/4506
* Fix Apple CMAKE_SYSTEM_PROCESSOR not set when crosscompiling by @ppavacic in https://github.com/tesseract-ocr/tesseract/pull/4503
* Remove outdated docker-compose.yml (Fixes #4492) by @Mohataseem89 in https://github.com/tesseract-ocr/tesseract/pull/4509
* docs: document memory ownership and lifecycle in C-API by @markbus-ai in https://github.com/tesseract-ocr/tesseract/pull/4511
* Add Portuguese language support and section descriptions (Windows installer) by @eduardomozart in https://github.com/tesseract-ocr/tesseract/pull/4516
* Update Slovak language string in tesseract.nsi by @eduardomozart in https://github.com/tesseract-ocr/tesseract/pull/4518
* fix(nsi): mask LANGID to 16-bit for reliable auto-detection by @eduardomozart in https://github.com/tesseract-ocr/tesseract/pull/4513
* Add GitHub Copilot instructions by @stweil with @Copilot in https://github.com/tesseract-ocr/tesseract/pull/4508
* Correct mutex call to prevent multiple instances by @eduardomozart in https://github.com/tesseract-ocr/tesseract/pull/4517
* Update versions of GitHub actions by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4522
* Bump microsoft/setup-msbuild from 2 to 3 by @dependabot[bot] in https://github.com/tesseract-ocr/tesseract/pull/4533
* Use asciidoctor instead of asciidoc-py for manpage generation by @amitdo with @Copilot in https://github.com/tesseract-ocr/tesseract/pull/4534
* Bump actions/upload-artifact from 4 to 7 by @dependabot[bot] in https://github.com/tesseract-ocr/tesseract/pull/4545
* autotools: Fix linker warning on macOS by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4559
* Fix compiler warning on macOS by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4558
* Cmake cleanup by @zdenop in https://github.com/tesseract-ocr/tesseract/pull/4562
* Remove SW_BUILD option from CMake and CI by @amitdo with @Copilot in https://github.com/tesseract-ocr/tesseract/pull/4566
* Modernize code by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4561
* Remove some files by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4569
* Modernize more code by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4568
* Fix compiler warnings (-Wold-style-cast)  by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4571
* Fix some compiler warnings (-Wunused-parameter) by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4570
* ci: Improve installer for windows by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4572
* Fix several issues reported by Codacy (including real bugs) by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4573
* Bump actions/checkout from 6 to 7 by @dependabot[bot] in https://github.com/tesseract-ocr/tesseract/pull/4574
* Fix crash when LSTM is missing in disabled-legacy build (#4448) by @gaurav0107 in https://github.com/tesseract-ocr/tesseract/pull/4563
* ci: Remove unused ilammy/setup-nasm by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4575
* autotools: Simplify Makefile rules by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4579
* Fix memory-safety issues in .traineddata deserialization by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4581
* Handle send() failures in SVNetwork::Flush by @Ramya-9353 in https://github.com/tesseract-ocr/tesseract/pull/4576
* Small code improvements by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4585
* doc: Add comprehensive PARAMETERS section to the tesseract man page by @stweil with @Copilot in https://github.com/tesseract-ocr/tesseract/pull/4526
* Fix integer overflow in LSTM Convolve and Reconfig deserialization by @stweil in https://github.com/tesseract-ocr/tesseract/pull/4588

## New Contributors
* @szepeviktor made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4497
* @ppavacic made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4503
* @Mohataseem89 made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4509
* @markbus-ai made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4511
* @eduardomozart made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4516
* @gaurav0107 made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4563
* @Ramya-9353 made their first contribution in https://github.com/tesseract-ocr/tesseract/pull/4576

**Full Changelog**: https://github.com/tesseract-ocr/tesseract/compare/5.5.2...5.5.3

---

> **Source** [tesseract-ocr/tesseract](https://github.com/tesseract-ocr/tesseract) · `5.5.3` · 2026-07-24 · [upstream release](https://github.com/tesseract-ocr/tesseract/releases/tag/5.5.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
