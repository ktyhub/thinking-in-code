---
title: "Stirling-PDF v2.14.0"
project: "Stirling-PDF"
repo: "Stirling-Tools/Stirling-PDF"
tag: "v2.14.0"
published: "2026-06-30"
type: "minor"
lang: "en"
summary: "This release adds several changes including desktop hardware token signing and changes to various UI elements"
---

# Stirling-PDF v2.14.0

This release adds several changes including desktop hardware token signing and changes to various UI elements
 
Features include:
- Desktop token signing! Such as USB/smart-card PKCS#11 and OS certificate stores etc (Currently desktop only)
- Fixes for shared signing and file sharing UIs to be reintroduced in top bar 
- Improved Side menu for comments/annotations and attachments with easier adding and new clear all buttons
- Login disclaimer feature for businesses that want it
- Fix desktop login issues
- Adds logo to installer and renames installer internal name from Stirling-PDF to Stirling PDF (without the -)


## What's Changed
### Enhancements
* Add login agreement disclaimer feature by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/6766
* Add bulk comment and annotation clearing to editor by @MattSaito in https://github.com/Stirling-Tools/Stirling-PDF/pull/6792
* More desktop CI optimisations by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6786
* Upgrade to TS7 for local type-checking by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6815
* Expand `any` type linting in frontend by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6808
* Brand MSI installer and rename display name to Stirling PDF by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/6764
* Align settings.yml defaults and fix dead/mismapped settings by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/6816
* UX improvement for side menu bookmark, comments and attachments by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/6552
* feat(policies): enforce run-on-export policies on all PDF exit paths by @reecebrowne in https://github.com/Stirling-Tools/Stirling-PDF/pull/6788
* feat(shared): make @shared the single home for brand logo assets by @reecebrowne in https://github.com/Stirling-Tools/Stirling-PDF/pull/6714
* Fix missing refresh token on desktop by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6838
* add file share to the top workbench bar and add shared signing by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6715
* Update Backend 3rd Party Licenses + Translations and bump versio by @stirlingbot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/6794
* Signing UI edge-case cleanup by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6849
* build(deps): bump test pypdf + add translations by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/6831
### Other Changes
* Fix PR docker CI when the base image changes by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/6809
* Make explicit signed and unsigned desktop CI jobs by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/6840


**Full Changelog**: https://github.com/Stirling-Tools/Stirling-PDF/compare/v2.13.2...v2.14.0

---

> **Source** [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) · `v2.14.0` · 2026-06-30 · [upstream release](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v2.14.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
