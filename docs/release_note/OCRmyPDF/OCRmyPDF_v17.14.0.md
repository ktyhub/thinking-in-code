---
title: "OCRmyPDF v17.14.0"
project: "OCRmyPDF"
repo: "ocrmypdf/OCRmyPDF"
tag: "v17.14.0"
version: "v17.14.0"
published: "2026-11-08"
type: "minor"
lang: "en"
summary: "New features"
---

# OCRmyPDF v17.14.0

**New features**

- New optional OCR engine, RapidOCR, which runs PaddleOCR's PP-OCR models on
  ONNX Runtime. Install it with `uv tool install 'ocrmypdf[rapidocr]'` (or
  `uv pip install` / `pip install` with the same extra) and select it with
  `--ocr-engine rapidocr`. It often reads numbers and table cells more
  accurately than Tesseract, at a higher CPU and memory cost. It supports
  `--rotate-pages` and `--deskew` without Tesseract, and the new option
  `--rapidocr-max-side-len` (API: `rapidocr_max_side_len=`) controls how far
  large pages are downscaled. See the cookbook for languages and limitations.
- With RapidOCR, `--rotate-pages` uses PaddlePaddle's PP-LCNet_x1_0_doc_ori
  page orientation model (6.8 MB, Apache-2.0), downloaded on first use and
  checked against its checksum, together with the shape of the detected text
  lines. A page is turned only when both agree.
- `python -m ocrmypdf.builtin_plugins.rapidocr_ocr download [LANGUAGE...]`
  downloads RapidOCR's page orientation model and any additional language
  models in advance, for offline use or container images.
- The Docker images do not include RapidOCR, to keep them small.
  `.docker/Dockerfile.rapidocr` builds an image with RapidOCR, its page
  orientation model and any additional languages on top of the Ubuntu image.

**Fixes**

- Selecting an OCR engine other than Tesseract, including `--ocr-engine
  none`, no longer requires Tesseract to be installed.
- Fixed `--redo-ocr` and `--mode strip` removing visible text from a text
  object that also contains invisible text, such as when the text rendering
  mode changes to invisible partway through it. Only the invisible text is
  now removed, and font and spacing settings made where it is removed are
  kept for the text that follows. {issue}`1769`
- Fixed the fpdf2 renderer writing the text of a line that rises to the right
  too large, by up to the height of its rise, which also made the text of
  neighbouring lines overlap. A sloped line's box spans its rise as well as
  its text; the text size is now measured at the end of the line where the
  baseline is highest, as it already was for lines that fall to the right.

---

> **Source** [ocrmypdf/OCRmyPDF](https://github.com/ocrmypdf/OCRmyPDF) · `v17.14.0` · 2026-11-08 · [upstream release](https://github.com/ocrmypdf/OCRmyPDF/releases/tag/v17.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
