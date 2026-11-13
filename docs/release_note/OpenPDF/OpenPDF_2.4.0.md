---
title: "OpenPDF 2.4.0"
project: "OpenPDF"
repo: "LibrePDF/OpenPDF"
tag: "2.4.0"
published: "2025-08-08"
type: "minor"
lang: "en"
summary: "See 2.4.0 migration guide for details."
---

# OpenPDF 2.4.0

# OpenPDF 2.4.0 Release Notes

## Highlights
- **Java package name change**: All classes have been moved from `com.lowagie` to `org.openpdf` in the openpdf-core-modern module.
- **Module split**: The `openpdf` submodule has been split (duplicated) into:
  - `openpdf-core-legacy` – all classes here are **deprecated**.
  - `openpdf-core-modern` – actively maintained and used by all submodules.

See [2.4.0 migration guide](https://github.com/LibrePDF/OpenPDF/blob/master/changelogs/2.4.0.md) for details.

---

## What's Changed

### Major Changes
- **Module restructuring**:
  - Split `openpdf` into `openpdf-core-legacy` and `openpdf-core-modern`.  
    [#1393](https://github.com/LibrePDF/OpenPDF/pull/1393) – @andreasrosdal
  - Deprecated all classes in `openpdf-core-legacy`.  
    [#1395](https://github.com/LibrePDF/OpenPDF/pull/1395) – @andreasrosdal
  - Updated all submodules to use `openpdf-core-modern`.  
    [#1396](https://github.com/LibrePDF/OpenPDF/pull/1396) – @andreasrosdal

- **New features**:
  - Added flag in `ColumnText` to control whether words are chopped, or to throw an exception instead of arbitrarily chopping long words.  
    [#1379](https://github.com/LibrePDF/OpenPDF/pull/1379) – @csimoes1
  - Added TU and ALT fields to signature object.  
    [#1386](https://github.com/LibrePDF/OpenPDF/pull/1386) – @MaSchmidt1999

- **Performance improvements**:
  - Register fonts only once in a static block instead of on every constructor call.  
    [#1373](https://github.com/LibrePDF/OpenPDF/pull/1373) – @giangianoulas

- **Code cleanup**:
  - Removed commented-out code and unnecessary `System.out.println` calls.  
    [#1364](https://github.com/LibrePDF/OpenPDF/pull/1364) – @andreasrosdal

### Dependency Updates
- `org.sonatype.central:central-publishing-maven-plugin` 0.7.0 → 0.8.0
- `com.puppycrawl.tools:checkstyle` 10.25.0 → 11.0.0 (multiple incremental updates)
- `org.jetbrains.kotlin:kotlin-stdlib` 2.1.21 → 2.2.0
- `org.jetbrains.kotlin:kotlin-maven-plugin` 2.1.21 → 2.2.0
- `junit.version` 5.13.1 → 5.13.4
- `com.google.errorprone:error_prone_annotations` 2.38.0 → 2.41.0
- `org.dom4j:dom4j` 2.1.4 → 2.2.0
- `org.apache.maven.plugins:maven-gpg-plugin` 3.2.7 → 3.2.8
- `org.verapdf:validation-model` 1.28.1 → 1.28.2
- `commons-io:commons-io` 2.19.0 → 2.20.0
- `org.htmlunit:neko-htmlunit` 4.13.0 → 4.14.0

---

## New Contributors
- @giangianoulas – Font registration optimization [#1373](https://github.com/LibrePDF/OpenPDF/pull/1373)
- @csimoes1 – `ColumnText` long word handling [#1379](https://github.com/LibrePDF/OpenPDF/pull/1379)
- @MaSchmidt1999 – TU and ALT signature fields [#1386](https://github.com/LibrePDF/OpenPDF/pull/1386)

---

We will soon begin on the OpenPDF 3.0 version which uses only the org.openpdf package name.


---

**Full Changelog**: [2.2.4 → 2.4.0](https://github.com/LibrePDF/OpenPDF/compare/2.2.4...2.4.0)

---

> **Source** [LibrePDF/OpenPDF](https://github.com/LibrePDF/OpenPDF) · `2.4.0` · 2025-08-08 · [upstream release](https://github.com/LibrePDF/OpenPDF/releases/tag/2.4.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
