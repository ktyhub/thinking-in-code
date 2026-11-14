---
title: "unstructured 0.27.37"
project: "unstructured"
repo: "Unstructured-IO/unstructured"
tag: "0.27.37"
version: "0.27.37"
published: "2026-11-06"
type: "patch"
lang: "en"
---

# unstructured 0.27.37

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Fixes
* fix(lang): keep the languages a caller passes on short ASCII text by @chrikrah in https://github.com/Unstructured-IO/unstructured/pull/4601
* fix(pdf): extract vector-heavy PDFs with the fast strategy instead of returning nothing by @CyMule in https://github.com/Unstructured-IO/unstructured/pull/4540
* fix(cleaners): stop swapping en and em dashes in replace_unicode_quotes by @chrikrah in https://github.com/Unstructured-IO/unstructured/pull/4654
### Other changes
* chore: start 0.27.37-dev after 0.27.36 release by @ryannikolaidis in https://github.com/Unstructured-IO/unstructured/pull/4634
* fix(pptx): keep visible text in translated, scaled and nested groups by @feiiiiii5 in https://github.com/Unstructured-IO/unstructured/pull/4619
* fix(metrics): read evaluation files as UTF-8 on every platform by @tanishqbaweja in https://github.com/Unstructured-IO/unstructured/pull/4623
* fix(deps): require filelock>=4.2.1 for GHSA-v4x8-3wr5-3wq8 by @tanishqbaweja in https://github.com/Unstructured-IO/unstructured/pull/4628
* fix(html): render each Title at its own heading level in elements_to_html by @tanishqbaweja in https://github.com/Unstructured-IO/unstructured/pull/4627
* fix(json): accept non-seekable streams while preserving legacy adapters by @Zhi-Xiang-Guo in https://github.com/Unstructured-IO/unstructured/pull/4649
* fix(docx): keep text that python-docx skips inside wrapper elements by @qued in https://github.com/Unstructured-IO/unstructured/pull/4661
* fix(documents): count the hash-id sequence number per page, not per contiguous run by @Eapp1e in https://github.com/Unstructured-IO/unstructured/pull/4621
* fix(coordinates): default CoordinateSystem.orientation to CARTESIAN by @Eapp1e in https://github.com/Unstructured-IO/unstructured/pull/4615
* chore: release 0.27.37 by @qued in https://github.com/Unstructured-IO/unstructured/pull/4668

## New Contributors
* @Zhi-Xiang-Guo made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4649

**Full Changelog**: https://github.com/Unstructured-IO/unstructured/compare/0.27.36...0.27.37

---

> **Source** [Unstructured-IO/unstructured](https://github.com/Unstructured-IO/unstructured) · `0.27.37` · 2026-11-06 · [upstream release](https://github.com/Unstructured-IO/unstructured/releases/tag/0.27.37)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
