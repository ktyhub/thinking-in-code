---
title: "Stirling-PDF_0.33.1 Docker hub move to stirlingtools v3.2.0"
project: "Stirling-PDF_0.33.1 Docker hub move to stirlingtools"
repo: "Stirling-Tools/Stirling-PDF"
tag: "v3.2.0"
published: "2026-10-15"
type: "minor"
lang: "en"
summary: "Another good release! The old multi-tool has been replaced by a completely redesigned Page Editor. It now resupports images, renaming files, and a bunch of QOL UI changes making it much easier to rearrange and manage…"
---

# Stirling-PDF_0.33.1 Docker hub move to stirlingtools v3.2.0

Another good release!
The old multi-tool has been replaced by a completely redesigned Page Editor. It now resupports images, renaming files, and a bunch of QOL UI changes making it much easier to rearrange and manage your documents. Please let us know what you think and if you have any issues with it!

Some big changes in how we handle password-protected PDF, They can now be opened for viewing and used with common tools without having to remove the password first, and your existing PDF permission settings are kept when unlocking.

Other changes are: 
- Stirling Sign now emails participants and requesters as a signing request progresses
- Drop files anywhere on the workbench, plus a redesigned add-files button
- Compression now tells you when it could not shrink a file
- Tidied booklet imposition UI with guide diagrams
- Optional redirectBaseUrl for OAuth2 and SAML when running behind reverse proxies
- Faster startup and lower memory use in the viewer and text editor
- Refreshed icons and chat UI improvements

We also fixed some bugs including
- Desktop crashing when reordering files on Mac
- Form drafts being lost before saves completed
- Signatures being lost when adjusting page size and scale
- Sign tool crashing when navigating away
- Chat not updating the file version correctly
- S3 uploads failing on retry

<!-- Release notes generated using configuration in .github/release.yml at main -->

## What's Changed
### Bug Fixes
* fix(desktop): avoid WebKit crash when reordering files by @NimeshXTV in https://github.com/Stirling-Tools/Stirling-PDF/pull/8318
* fix(forms): preserve drafts and await completed saves by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8455
### Enhancements
* Replace multi-tool with redesigned Page Editor by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/7618
* Align the Stirling wordmark with the mark in the AI chat header by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8361
* Email shared-signing participants and requesters as a request progresses by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8312
* Show teammate profile pictures on the team roster by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8158
* Delete legacy prototypes folder from frontend by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8383
* Reopen the S3 upload stream on each retry by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8292
* Fix SaaS signing participant lookup and remove scope configuration by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8374
* Show Enterprise quote action and continue setup after account linking by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8384
* Redraw QR code, automate, redact and replace-text icons; outline active quick access bar icons by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8362
* Fix SaaS OAuth consent discarding the code on reconnect by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8377
* Redesign the workbench add-files CTA by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8381
* Serve the OpenAI apps domain-verification token on SaaS by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8398
* Add temporary stored files and public share links by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8396
* Add MCP tool titles and annotations for Claude and ChatGPT directories by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8397
* Support images in Page Editor by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8410
* chore: consolidate root-level docs and remove dead config by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8386
* Add extra page actions to Page Editor by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8408
* Accept file drops across the whole workbench by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8379
* Remove section tabs from Usage & Billing by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8164
* Support renaming files in Page Editor by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8415
* Add managed desktop sign-in and document privacy policies by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8392
* Fix AI chat not updating the file version properly by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8416
* Improve UI of Stirling Agent by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8385
* Drop the redundant Stirling tooltip on the quick nav brand mark by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8411
* Show the getting-started checklist only to users who need it by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8313
* perf(sidebar): defer file thumbnail generation until a row nears the viewport by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8034
* Fix flaky WebKit text editor e2e tests by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8427
* perf(viewer): optimize PDF text editor WASM memory management with reusable scratch buffers by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8099
* Speed up frontend tests by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8423
* perf(build): precompress the dist, shrink startup, defer the pdfium wasm by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8043
* Prefill PDF permission settings and preserve them when unlocking by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8430
* Have Text Editor maintain existing accessibility tags on save by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8447
* Tidy booklet imposition UI and add guide diagrams by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8454
* Preserve applied signatures when adjusting page size and scale by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8457
* Fix Sign navigation crash and apply signatures before leaving by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8456
* Add opt-in redirectBaseUrl for OAuth2 and SAML behind reverse proxies by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8473
* Fix flaky nightlies by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8478
* Fail a redaction the engine could not verify by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8451
* Add a Match Case option to auto-redact, off by default by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8452
* Send MCP usage analytics to PostHog by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8476
* Text editor accessibility improvements by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8460
* Tell the user when compression could not shrink a file by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8482
* Unlock protected PDFs for viewing and common tools without removing passwords by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8393
* Add SaaS Enterprise trials, usage and procurement access by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8453
* Honor PDF permissions by default with an administrator bypass setting by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8466
### Docker Updates
* chore(docker): update ImageMagick to 7.1.2-33 by @github-actions[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8444
### Other Changes
* docs: refresh home-light.png with current editor UI by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8352
* Add Stale PR bot by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8306
* docs: remove obsolete type3 font documentation by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8387
* Speed up /deploypr by dropping the layer cache and redundant host build by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8395
* Add PR size limit for OSS PRs by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8353

## New Contributors
* @NimeshXTV made their first contribution in https://github.com/Stirling-Tools/Stirling-PDF/pull/8318

**Full Changelog**: https://github.com/Stirling-Tools/Stirling-PDF/compare/v3.1.0...v3.2.0

---

> **Source** [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) · `v3.2.0` · 2026-10-15 · [upstream release](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
