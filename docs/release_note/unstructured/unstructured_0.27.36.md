---
title: "unstructured 0.27.36"
project: "unstructured"
repo: "Unstructured-IO/unstructured"
tag: "0.27.36"
version: "0.27.36"
published: "2026-10-30"
type: "patch"
lang: "en"
---

# unstructured 0.27.36

<!-- Release notes generated using configuration in .github/release.yml at 9d9437d6094c1ffa3e6df72a38db5fb59216fe8f -->

## What's Changed
### Other changes
* chore: start 0.27.36-dev after 0.27.35 release by @ryannikolaidis in https://github.com/Unstructured-IO/unstructured/pull/4607
* fix(xml): keep text that runs through child elements by @L4XB in https://github.com/Unstructured-IO/unstructured/pull/4573
* fix(pptx): filter off-slide shapes by how much of the box is visible by @feiiiiii5 in https://github.com/Unstructured-IO/unstructured/pull/4604
* fix(html_table): keep a declared rowspan of zero on empty cells by @Eapp1e in https://github.com/Unstructured-IO/unstructured/pull/4611
* fix(utils): detect temp files by path containment, not name prefix by @Eapp1e in https://github.com/Unstructured-IO/unstructured/pull/4609
* fix(ocr): expand an inferred list element into one element per item by @Eapp1e in https://github.com/Unstructured-IO/unstructured/pull/4617
* fix(pdf): keep FAST partitioning independent of ONNX load failures by @fallenmi in https://github.com/Unstructured-IO/unstructured/pull/4600
* fix: switch `skip_infer_table_types` default to `None` by @TrueFurina in https://github.com/Unstructured-IO/unstructured/pull/4464
* fix(filetype): detect the file type when the content type is application/octet-stream by @tanishqbaweja in https://github.com/Unstructured-IO/unstructured/pull/4625
* fix(partition): classify text as an address only when all of it is one by @Eapp1e in https://github.com/Unstructured-IO/unstructured/pull/4630
* fix: tolerate a dangling DOCX header/footer relationship instead of crashing by @aballman in https://github.com/Unstructured-IO/unstructured/pull/4624
* chore: release 0.27.36 by @aballman in https://github.com/Unstructured-IO/unstructured/pull/4631

## New Contributors
* @Eapp1e made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4611
* @fallenmi made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4600
* @tanishqbaweja made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4625

**Full Changelog**: https://github.com/Unstructured-IO/unstructured/compare/0.27.35...0.27.36

---

> **Source** [Unstructured-IO/unstructured](https://github.com/Unstructured-IO/unstructured) · `0.27.36` · 2026-10-30 · [upstream release](https://github.com/Unstructured-IO/unstructured/releases/tag/0.27.36)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
