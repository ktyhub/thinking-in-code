---
title: "OpenPDF 3.0.0"
project: "OpenPDF"
repo: "LibrePDF/OpenPDF"
tag: "3.0.0"
published: "2025-08-17"
type: "major"
lang: "en"
summary: "This means that source code using OpenPDF must be migrated to use import statements using org.openpdf. package."
---

# OpenPDF 3.0.0

## OpenPDF 3.0.0 

* OpenPDF 3.0.0 uses the new package name **org.openpdf**. The old com.lowagie is now removed from OpenPDF 3.0.
This means that source code using OpenPDF must be migrated to use import statements using org.openpdf.* package.

* **PDF 2.0 support in OpenPDF** – This is a **breaking API change**:  
  All version-related methods now use `String` instead of `char` as method parameters.   See [PdfVersion.java](https://github.com/LibrePDF/OpenPDF/blob/master/openpdf-core/src/main/java/org/openpdf/text/pdf/interfaces/PdfVersion.java) and [PdfWriter.java](https://github.com/LibrePDF/OpenPDF/blob/master/openpdf-core/src/main/java/org/openpdf/text/pdf/PdfWriter.java#L154).
  The default version is now **PDF 2.0**.

  **About PDF 2.0:**  
  PDF 2.0 is the latest official version of the Portable Document Format, standardized as **ISO 32000-2:2020**.  
  It was first published by the International Organization for Standardization (ISO) in **July 2017**, with a revised edition in **December 2020**.  
  PDF 2.0 introduces improved color management, tagged PDF enhancements, advanced encryption options, and clarifies many ambiguous parts of the PDF 1.x specifications.  

  📄 [Read the PDF 2.0 (ISO 32000-2:2020) specification](https://www.iso.org/standard/75839.html)


* Added [HtmlToPdfBatchUtils](https://github.com/LibrePDF/OpenPDF/blob/master/openpdf-html/src/main/java/org/openpdf/html/HtmlToPdfBatchUtils.java) and [PdfBatchUtils](https://github.com/LibrePDF/OpenPDF/blob/master/openpdf-core/src/main/java/org/openpdf/text/pdf/PdfBatchUtils.java), new batch utilities built on Java 21 virtual threads. 
These APIs improve throughput for HTML→PDF rendering and common PDF tasks such as merge, split, watermark, and encrypt.




The migration to new package name org.openpdf started in OpenPDF 2.4.0, while OpenPDF 3.0 is the first version of OpenPDF which fully uses the new package name.





## What's Changed
* Bump org.assertj:assertj-core from 3.27.3 to 3.27.4 by @dependabot[bot] in https://github.com/LibrePDF/OpenPDF/pull/1404
* Remove openpdf-core-legacy module by @andreasrosdal in https://github.com/LibrePDF/OpenPDF/pull/1406
* Rename openpdf-core by @andreasrosdal in https://github.com/LibrePDF/OpenPDF/pull/1407
* Initial PDF 2.0 support by @andreasrosdal in https://github.com/LibrePDF/OpenPDF/pull/1408
* PDF 2.0 tests by @andreasrosdal in https://github.com/LibrePDF/OpenPDF/pull/1409
* PDF 2.0 tests by @andreasrosdal in https://github.com/LibrePDF/OpenPDF/pull/1410
* Bump org.jetbrains.kotlin:kotlin-stdlib from 2.2.0 to 2.2.10 by @dependabot[bot] in https://github.com/LibrePDF/OpenPDF/pull/1412
* Bump org.jetbrains.kotlin:kotlin-maven-plugin from 2.2.0 to 2.2.10 by @dependabot[bot] in https://github.com/LibrePDF/OpenPDF/pull/1413
* Delete RtfElementInterface by @andreasrosdal in https://github.com/LibrePDF/OpenPDF/pull/1414


**Full Changelog**: https://github.com/LibrePDF/OpenPDF/compare/2.4.0...3.0.0

---

> **Source** [LibrePDF/OpenPDF](https://github.com/LibrePDF/OpenPDF) · `3.0.0` · 2025-08-17 · [upstream release](https://github.com/LibrePDF/OpenPDF/releases/tag/3.0.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
