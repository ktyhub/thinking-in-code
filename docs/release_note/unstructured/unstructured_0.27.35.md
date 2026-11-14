---
title: "unstructured 0.27.35"
project: "unstructured"
repo: "Unstructured-IO/unstructured"
tag: "0.27.35"
version: "0.27.35"
published: "2026-10-27"
type: "patch"
lang: "en"
---

# unstructured 0.27.35

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Other changes
* chore: replace per-PR changelog edits with generated release notes by @cragwolfe in https://github.com/Unstructured-IO/unstructured/pull/4578
* fix(utils): compare bounding boxes for elements with no page number by @simpleqt in https://github.com/Unstructured-IO/unstructured/pull/4561
* fix(chunking): measure combine thresholds in tokens when max_tokens is set by @joaquinhuigomez in https://github.com/Unstructured-IO/unstructured/pull/4528
* ci: guard release versions without blocking ordinary PRs by @cragwolfe in https://github.com/Unstructured-IO/unstructured/pull/4589
* fix(xml): honor explicit encodings when extracting text by @JackyHsu-X in https://github.com/Unstructured-IO/unstructured/pull/4572
* fix(msg): read the Cc, Bcc and Message-ID headers in any letter case by @L4XB in https://github.com/Unstructured-IO/unstructured/pull/4579
* fix(tsv): honor infer_table_structure when partitioning TSV files by @feiiiiii5 in https://github.com/Unstructured-IO/unstructured/pull/4513
* fix(msg): keep a comma in a quoted sender or recipient name by @RaphaelFakhri in https://github.com/Unstructured-IO/unstructured/pull/4570
* fix(xlsx): keep cell text like N/A and None instead of emptying it by @wenqiw777 in https://github.com/Unstructured-IO/unstructured/pull/4505
* feat: expose the DOCX paragraph style name in element metadata by @Ei-Ayw in https://github.com/Unstructured-IO/unstructured/pull/4591
* fix(text): keep a bulleted list that follows its lead-in line as list items by @L4XB in https://github.com/Unstructured-IO/unstructured/pull/4580
* fix(image): charge GIF frames at the canvas size Pillow decodes them at by @badGarnet in https://github.com/Unstructured-IO/unstructured/pull/4526
* fix(utils): recognize a box nested when the tolerance is zero by @SashaMIT in https://github.com/Unstructured-IO/unstructured/pull/4507
* perf(pdf): hi_res read every page with pdfminer just to learn whether the PDF has text by @CyMule in https://github.com/Unstructured-IO/unstructured/pull/4588
* fix(csv): read a line break in a quoted CSV or TSV cell as whitespace, not a literal \n by @CyberNativeAI in https://github.com/Unstructured-IO/unstructured/pull/4592
* ci: fail check-version when a PR edits the frozen CHANGELOG.md by @cragwolfe in https://github.com/Unstructured-IO/unstructured/pull/4594
* fix(metrics): let _mean ignore unmeasured scores like its siblings by @sclfcz in https://github.com/Unstructured-IO/unstructured/pull/4510
* fix(filetype): detect a .markdown file as Markdown, not plain text by @sinnercode228 in https://github.com/Unstructured-IO/unstructured/pull/4599
* fix(cleaners): translate each chunk in translate_text instead of the whole text by @sinnercode228 in https://github.com/Unstructured-IO/unstructured/pull/4568
* fix: render analysis bbox overlays at the pdf_image_dpi used for partitioning by @sinnercode228 in https://github.com/Unstructured-IO/unstructured/pull/4602
* fix(chunking): cap combine_text_under_n_chars at new_after_n_chars by @simpleqt in https://github.com/Unstructured-IO/unstructured/pull/4605
* fix(email): partition an attached email (message/rfc822) instead of raising AssertionError by @sinnercode228 in https://github.com/Unstructured-IO/unstructured/pull/4597
* ci: automate post-release development bump PRs by @cragwolfe in https://github.com/Unstructured-IO/unstructured/pull/4590
* fix(partition): recognize addresses in Alabama and Wyoming by @SergeevDmitry in https://github.com/Unstructured-IO/unstructured/pull/4581
* fix(md): return no elements for an empty text body by @feiiiiii5 in https://github.com/Unstructured-IO/unstructured/pull/4603
* chore: release 0.27.35 by @cragwolfe in https://github.com/Unstructured-IO/unstructured/pull/4606

## New Contributors
* @simpleqt made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4561
* @joaquinhuigomez made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4528
* @JackyHsu-X made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4572
* @RaphaelFakhri made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4570
* @wenqiw777 made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4505
* @Ei-Ayw made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4591
* @SashaMIT made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4507
* @CyberNativeAI made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4592
* @sclfcz made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4510
* @sinnercode228 made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4599
* @SergeevDmitry made their first contribution in https://github.com/Unstructured-IO/unstructured/pull/4581

**Full Changelog**: https://github.com/Unstructured-IO/unstructured/compare/0.27.34...0.27.35

---

> **Source** [Unstructured-IO/unstructured](https://github.com/Unstructured-IO/unstructured) · `0.27.35` · 2026-10-27 · [upstream release](https://github.com/Unstructured-IO/unstructured/releases/tag/0.27.35)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
