---
title: "Stirling-PDF_0.33.1 Docker hub move to stirlingtools v3.2.1"
project: "Stirling-PDF_0.33.1 Docker hub move to stirlingtools"
repo: "Stirling-Tools/Stirling-PDF"
tag: "v3.2.1"
published: "2026-10-21"
type: "patch"
lang: "en"
summary: "Smaller release with some nice viewer and editor improvements and bug fixes for annotation and compression"
---

# Stirling-PDF_0.33.1 Docker hub move to stirlingtools v3.2.1

Smaller release with some nice viewer and editor improvements and bug fixes for annotation and compression

Key features  are:
- Arrow key support for viewer
- Dual page view to support cover pages
- Read aloud now starts at the selected text
- You can now duplicate pages in page editor (multi tool)
- Memory optimisations
- Label damaged PDFs and offer Repair
- Export PDF comments as CSV


Bug fixes
- Fixed cases were compression was not correctly compressing
- Fixed various annotation issues introduced in 3.2.0 
- Fixed issues with default tool picker mode

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Bug Fixes
* fix: persist Default tool picker mode and Default view on launch settings by @mvanhorn in https://github.com/Stirling-Tools/Stirling-PDF/pull/6827
* fix(annotate): transparent shape fills and hollow default shapes by @reecebrowne in https://github.com/Stirling-Tools/Stirling-PDF/pull/8574
* fix(viewer): exit annotation mode when the toolbar button is clicked again by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8590
### Enhancements
* Update Backend 3rd Party Licenses by @stirlingbot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8067
* feat(md-pdf-conversion): Keep code block line breaks in Markdown to PDF by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8483
* feat(viewer): Cover page option for dual-page view by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8484
* Add left/right arrow key navigation to PDF viewer by @iam-Gautham in https://github.com/Stirling-Tools/Stirling-PDF/pull/7136
* feat(annotations): Export comments as CSV by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8487
* Fetch team and authorities with the supabase user lookup by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8062
* Ask where to run Stirling on first visit to SaaS by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8417
* Start settings tours from the editor home by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8461
* feat(read-aloud): Read aloud from selected text by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8488
* Add Galician (gl-ES) translation by @manuelmovilla in https://github.com/Stirling-Tools/Stirling-PDF/pull/8499
* feat(pageEditor): add per-page duplicate action and Ctrl+D shortcut by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8559
* Track renames properly in flaky tests and a11y checks by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8575
* perf: lazy-load Type3 font payloads by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8584
* Fix PDF permission inspection and annotation lifecycle regressions by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8566
* Discard qpdf compression output when it grows the file; bump to 3.2.1 by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8586
* Label damaged PDFs and offer Repair by @reecebrowne in https://github.com/Stirling-Tools/Stirling-PDF/pull/8589
### Docker Updates
* build(deps): bump step-security/harden-runner from 2.21.1 to 2.22.1 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8535
### Other Changes
* build(deps): bump dorny/test-reporter from 3.0.0 to 3.2.0 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8440
* build(deps): bump github/codeql-action/upload-sarif from 4.38.2 to 4.38.3 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8536
* build(deps): bump actions/upload-artifact from 7.0.1 to 7.0.2 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8537
* Sync locale translations with en-US by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8591

## New Contributors
* @iam-Gautham made their first contribution in https://github.com/Stirling-Tools/Stirling-PDF/pull/7136
* @manuelmovilla made their first contribution in https://github.com/Stirling-Tools/Stirling-PDF/pull/8499

**Full Changelog**: https://github.com/Stirling-Tools/Stirling-PDF/compare/v3.2.0...v3.2.1

---

> **Source** [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) · `v3.2.1` · 2026-10-21 · [upstream release](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
