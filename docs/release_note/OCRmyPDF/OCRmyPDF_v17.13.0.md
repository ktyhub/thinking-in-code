---
title: "OCRmyPDF v17.13.0"
project: "OCRmyPDF"
repo: "ocrmypdf/OCRmyPDF"
tag: "v17.13.0"
version: "v17.13.0"
published: "2026-09-28"
type: "minor"
lang: "en"
summary: "Changes"
---

# OCRmyPDF v17.13.0

**Changes**

- PDF/A made without Ghostscript ("speculative" conversion) is now validated
  with pikepdf's PDF/A support (`pikepdf.pdfa`) instead of veraPDF, and the
  final output is validated again after the metadata and optimization steps.
  veraPDF is no longer used, so the Ghostscript-free path is available
  whether or not veraPDF is installed, including in the Docker image. Files
  the validator does not approve go to Ghostscript as before; run with `-v1`
  to see why.
- Speculative conversion now supports PDF/A-1b, and repairs common problems
  that previously always sent a file to Ghostscript: it replaces other output
  intents with sRGB, removes image interpolation flags, sets the Print flag on
  annotations, adds the `/CIDSet` PDF/A-1 requires, and removes XMP properties
  and hidden annotations that PDF/A does not permit.
- New option `--pdfa-backend {auto,ghostscript,internal}` (API:
  `pdfa_backend=`). `auto`, the default, tries OCRmyPDF's own conversion and
  then Ghostscript. `internal` never uses Ghostscript, so JPEGs pass through
  unchanged; if the result is not approved, the `pdfa` output types fail with
  exit code 10 and `--output-type auto` outputs a regular PDF. `ghostscript`
  always uses Ghostscript. Options that only Ghostscript implements
  (`--pdfa-image-compression`, `--ghostscript-jpeg-quality`,
  `--ghostscript-jpeg-maxdpi`, and `--color-conversion-strategy` `CMYK`,
  `Gray` or `UseDeviceIndependentColor`) now select Ghostscript under `auto`
  and are an error with `internal`.
- OCRmyPDF now requires `pikepdf[pdfa]` 10.15 or later. The `pdfa` extra
  brings in `jsonschema`, `referencing` and `fonttools`, all packaged by
  Debian and Red Hat.
- `--force-ocr` now keeps hyperlinks, moving link annotations onto the
  rasterized page; so do `--deskew` and `--clean-final`. The new mode
  `--mode force-ocr-no-links` keeps the old behaviour. {issue}`605`
- When Ghostscript substitutes fonts that are not embedded, it now always uses
  its own fonts (`-dNONATIVEFONTMAP`), so output is the same on every
  platform; on macOS, native font lookup could embed tens of megabytes of
  system fonts. OCRmyPDF warns when fonts other than the standard 14 are
  substituted, or when a substitute loses bold or italic styling.
  {issue}`1369`
- A creation date without a time zone is now taken to be local time, and the
  output's dates get that zone, with a warning. Set `TZ` to choose another
  zone.
- In the default mode, a page that already has text now stops OCRmyPDF
  straight after the initial scan, instead of after OCRing the pages before
  it. The error names the page. {issue}`613`
- The check of the output file is much faster: each stream is checked in the
  cheapest way for its compression instead of being fully decoded, and a
  progress bar is shown. JPEG 2000 and CCITT images are now checked too, but
  JPEGs that are corrupt without being truncated are no longer detected.
  {issue}`1570`
- OCRmyPDF now ships a PyInstaller hook, so apps that use it can be bundled
  without extra options. Tesseract and Ghostscript must still be installed.
  {issue}`1024`
- New `PageInfo.has_visible_text`, which excludes invisible text such as an
  OCR layer. `has_text` is unchanged.

**Fixes**

- `--force-ocr` on a scan that already had an invisible OCR layer rasterized
  it at no less than 400 dpi, as if the text were visible, which could
  multiply the file size. {issue}`961`
- Process workers (`use_threads=False` on Windows and macOS) failed on every
  page with `'OcrOptions' object has no attribute 'tesseract'`.
  {issue}`1757`
- `ocrmypdf.ocr()` rejected thresholding method names such as
  `tesseract_thresholding='adaptive-otsu'`. {issue}`1460`
- `--rotate-pages --tesseract-timeout 0` detected page orientation but did not
  rotate the pages. The cookbook now recommends this combination for rotating
  or deskewing without OCR. {issue}`778`
- With `--output-type auto` and `--force-ocr`, output was labelled PDF/A
  without being validated or given the PDF/A declarations when veraPDF was
  not installed, as in the Docker image. {issue}`1751`
- Ghostscript's PDF/A conversion deleted most hyperlinks (those without the
  Print flag). Hidden annotations, which PDF/A does not permit, are now
  removed before Ghostscript runs, with the same warning as speculative
  conversion, instead of silently. {issue}`605`
- Text in fonts without `/ToUnicode`, which viewers extract through glyph
  names, was garbled or lost when Ghostscript made the PDF/A. {issue}`1297`
- XMP metadata with no document-info equivalent, such as `dc:contributor`
  and `dc:subject`, was lost when Ghostscript made the PDF/A. It is now
  copied with its whole value, including every language of a multilingual
  property. {issue}`1220`
- Images in PDFs from iText and pdftk were recompressed without their Flate
  predictor, growing the output by about 30%. {issue}`1620`
- Copied text from vertical Japanese and other vertical or rotated OCR lines
  had spurious spaces and characters out of order. {issue}`1244`
- Text set in the glyphless fallback font, used when no installed font
  covers a script (e.g. CJK), lost characters when selected or copied in
  Chrome and other pdfium-based viewers.
- A page made of full-page images at different resolutions was rasterized at
  a weighted average resolution rather than the highest. {issue}`948`
- The document language (`/Lang`) was not set for Tesseract's language codes
  such as `deu`, `fra` and `ces`. Languages without a two-letter code now get
  their three-letter code. {issue}`1749`
- Some LaTeX PDFs with malformed numbers in a content stream, such as
  `0.000-50131235`, stopped OCRmyPDF. It now warns and continues, as viewers
  do. {issue}`1054`
- A `/Rotate` stored as a real number, or a `cm` operator with a non-numeric
  operand, crashed the page scan.
- `--force-ocr --ocr-engine none` crashed on pages with no images.
- When OCRmyPDF's own PDF/A failed its final check, the Ghostscript fallback
  could fail with `FileExistsError`; on Windows it always did.
- With the default `--output-type auto`, the explanation for a file that grew
  now points to PDF/A conversion. {issue}`1369`
- Ghostscript 10.08's title `'Untitled'` (with quotes) for untitled files is
  removed again.
- The Docker image's web service could not find its Streamlit script. The
  Docker documentation for the web service is updated. {issue}`1753`
- The Docker watcher no longer turns off `deskew` given in
  `OCR_JSON_SETTINGS` when `OCR_DESKEW` is not set.

---

> **Source** [ocrmypdf/OCRmyPDF](https://github.com/ocrmypdf/OCRmyPDF) · `v17.13.0` · 2026-09-28 · [upstream release](https://github.com/ocrmypdf/OCRmyPDF/releases/tag/v17.13.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
