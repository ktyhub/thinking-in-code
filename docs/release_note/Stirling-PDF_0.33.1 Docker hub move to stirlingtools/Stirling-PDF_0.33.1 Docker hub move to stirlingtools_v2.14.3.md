---
title: "Stirling-PDF_0.33.1 Docker hub move to stirlingtools v2.14.3"
project: "Stirling-PDF_0.33.1 Docker hub move to stirlingtools"
repo: "Stirling-Tools/Stirling-PDF"
tag: "v2.14.3"
published: "2026-08-06"
type: "patch"
lang: "en"
summary: "Hotfix release for lots of bug fixes, (Note we have identified some issues for mac users and hope to have another fix out in next few days) The list below is of the main bug fixes are:"
---

# Stirling-PDF_0.33.1 Docker hub move to stirlingtools v2.14.3

Hotfix release for lots of bug fixes, 
(Note we have identified some issues for mac users and hope to have another fix out in next few days)
The list below is of the main bug fixes are:

## Tool fixes
- fix merge split and other operations not working on Debian 12 and fedora 44
- Concurrent usage issues on certain tools like merge 
- Automate issues for remove images fixed
- Large 2GB PDFs no longer crashes under set scenarios 

## Desktop fixes
- Windows ARM64 test build
- linux startup fixes

We are planning a giant release in 2-3 weeks with some big exciting new features so keep on the lookout!


## What's Changed

* Redact: clear error instead of a 500 when no text patterns are given (cherrypicked) by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6972
* fix(temp-files): prevent cleanup of active registered directories by @Ludy87 in https://github.com/Stirling-Tools/Stirling-PDF/pull/7006
* deps(frontend): upgrade @embedpdf packages to v2.14.4 by @Ludy87 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6989
* fix(admin-settings): correctly mask Telegram bot tokens in settings output by @Ludy87 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6822
* fix(admin-settings): prevent hydration error in the Admin General section by @Ludy87 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6823
* fix(editor): respect no-login settings visibility in config navigation by @Ludy87 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6807
* fix(licenses): fall back to license URL for backend dependency links by @Ludy87 in https://github.com/Stirling-Tools/Stirling-PDF/pull/7046
* fix(sign): preserve PNG signature placement and page content by @Ludy87 in https://github.com/Stirling-Tools/Stirling-PDF/pull/7093
* fix(viewer): dynamic page number input width based on total page count by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/6607
* Google Drive import: script loader no longer reports ready before the script has run (cherrypicked) by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/7075
* Avoid renderer OOM when adding large PDFs to the workbench by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/7175
* build(deps): bump pdfboxVersion from 3.0.7 to 3.0.8 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/7237
* Remove depot.dev support from GitHub Actions workflows by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/7148
* Desktop installer fixes by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/7174
* Fix preview on crop/rotate by @reecebrowne in https://github.com/Stirling-Tools/Stirling-PDF/pull/7266
* fix(search): Fix PDF viewer search showing 0 of 0 results by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/7228
* Fix automate unrunnable tools by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/7311

**Full Changelog**: https://github.com/Stirling-Tools/Stirling-PDF/compare/v2.14.2...v2.14.3

---

> **Source** [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) · `v2.14.3` · 2026-08-06 · [upstream release](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v2.14.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
