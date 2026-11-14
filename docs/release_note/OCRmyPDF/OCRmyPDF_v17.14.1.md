---
title: "OCRmyPDF v17.14.1"
project: "OCRmyPDF"
repo: "ocrmypdf/OCRmyPDF"
tag: "v17.14.1"
version: "v17.14.1"
published: "2026-11-09"
type: "patch"
lang: "en"
summary: "Fixed the RapidOCR engine offering no way to choose where its models are"
---

# OCRmyPDF v17.14.1

**Fixes**

- Fixed the RapidOCR engine offering no way to choose where its models are
  kept. They could only live in RapidOCR's package directory, which may be
  read-only, and models downloaded into a container's directory were lost
  when it exited. The new option `--rapidocr-model-dir DIR` (API:
  `rapidocr_model_dir=`; environment: `OCRMYPDF_RAPIDOCR_MODEL_DIR`) keeps
  all of RapidOCR's models, and the page orientation model, in the given
  directory, downloading any that are missing into it. `python -m
  ocrmypdf.builtin_plugins.rapidocr_ocr download --model-dir DIR` fills it in
  advance.

---

> **Source** [ocrmypdf/OCRmyPDF](https://github.com/ocrmypdf/OCRmyPDF) · `v17.14.1` · 2026-11-09 · [upstream release](https://github.com/ocrmypdf/OCRmyPDF/releases/tag/v17.14.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
