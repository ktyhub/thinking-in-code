---
title: "Stirling-PDF_0.33.1 Docker hub move to stirlingtools v3.3.0"
project: "Stirling-PDF_0.33.1 Docker hub move to stirlingtools"
repo: "Stirling-Tools/Stirling-PDF"
tag: "v3.3.0"
published: "2026-11-05"
type: "minor"
lang: "en"
summary: "Stirling Office Convert (still beta) has been upgraded. You can also now pick it as the converter in lots of other tools such as Email, HTML, Markdown and ebooks to PDF plus PDF to HTML/Markdown/XML/EPUB/AZW3, and…"
---

# Stirling-PDF_0.33.1 Docker hub move to stirlingtools v3.3.0

Stirling Office Convert (still beta) has been upgraded. You can also now pick it as the converter in lots of other tools such as Email, HTML, Markdown and ebooks to PDF plus PDF to HTML/Markdown/XML/EPUB/AZW3, and PDF/A. Please compare it with the existing converter and let us know!

Our roadmap is to turn Office Convert on by default next week, and then, if no changes are required, fully remove LibreOffice and other dependencies the week after. So now is the best time to try it and report (And send example files) any conversions that don't look correct!

Other changes are:
- SSO auto-login now works even when username/password login is enabled (admins can still reach the password form via /login?all)
- JPDFium upgrade and support and Windows ARM64 support, This update also brings better redaction, merge/split improvements and lower memory on big files 
- Faster and more accurate mobile scanning, with no more 9MB OpenCV bundled
- Faster requests with far fewer database reads and new entity caching
- Quieter startup and runtime logs
- Spring Boot, Docker base image and lots of other dependency updates
- Updated translations for all languages

We also fixed some bugs including
- Convert sending multiple or mixed file uploads to the wrong conversion
- Ebook settings resetting the selected output format
- "Include all recipients" not controlling CC/BCC in email to PDF
- PDF/UA font embedding making form fields no longer fillable
- Certificate signing rejecting unencrypted PKCS#8 PEM keys
- Viewer jumping away from your page after adding a bookmark
- Archive extraction being offered for non-zip files

This release also includes several security and stability improvements, so we advise users to update when possible!
Note: the old, deprecated backend PDF text editing API has been removed in favour of the new Text Editor. We are hoping to add a new Text Editor API soon!

<!-- Release notes generated using configuration in .github/release.yml at v3.3.0 -->

## What's Changed
### Bug Fixes
* fix(viewer): keep the reading page after adding a bookmark by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8675
* fix(cert-sign): accept unencrypted PKCS#8 PEM private keys by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8694
* fix(security): bound request size and harden the mobile scanner relay by @reecebrowne in https://github.com/Stirling-Tools/Stirling-PDF/pull/8672
* fix(security): case-insensitive rename check and protect MFA settings by @reecebrowne in https://github.com/Stirling-Tools/Stirling-PDF/pull/8687
* fix(fileEditor): only offer archive extraction for .zip files by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8722
* fix(invites): consume a single-use invite token atomically with account creation by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/7861
* fix(invites): reject malformed emails and unknown teams when an invite is created by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/7864
### Enhancements
* Add support for editing image accessibility tags in Text Editor by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8623
* Turkish (tr-TR): fix remaining English strings and mark untranslatable keys by @qwist1233-cpu in https://github.com/Stirling-Tools/Stirling-PDF/pull/8662
* Remove unnecessary attributes from ad-hoc pipeline run requests by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8679
* Improve handling of temporary files in pipelines by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8668
* Calibre and Office conversion hardening by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8669
* Neaten handling of sensitive fields in policies by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8685
* Limit output page counts in poster, section split and duplicate tools by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8676
* Bound the PDF/A sanitizer's per-page and per-annotation work by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8681
* Honour LibreOffice removal in PDF to Office conversions by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8665
* Improve EML to PDF robustness with large and unusual inputs by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8683
* feat(security): SSO auto-login with password login enabled, bypassable via /login?all by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8486
* feat(api): implement Hibernate second-level caching for core entities using Caffeine JCache by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/7504
* Validate page counts on load and visit shared PDF objects once by @ConnorYoh in https://github.com/Stirling-Tools/Stirling-PDF/pull/8689
* Hide save-to-server and sharing controls from guest accounts by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8230
* ci(a11y): anchor nested task calls on the root Taskfile by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8708
* Trim noisy startup and runtime logs by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8403
* Add support for editing text accessibility tags in Text Editor by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8670
* Add limits to max decode size by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8691
* Read auth.users only on the paths that consume it by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8063
* Reuse the already-resolved User instead of re-querying it per request by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8061
* Fix deleted/disabled-user token handling, error stack traces, and admin-change pool starvation by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8579
* Cut repeated database reads from the authenticated request path by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8066
* Validate tool input, apply documented defaults and fix tool crashes by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8464
* Harden Office and PDF conversion input handling by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8717
* build(deps): bump the serde group across 2 directories with 1 update by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8654
* build(deps): bump rustls from 0.23.45 to 0.23.46 in /frontend/src-tauri by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8700
* build(deps): bump follow-redirects from 1.16.0 to 1.16.2 in /frontend by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8755
* Hoist platform providers to be global for the app by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8728
* Add missing attributes to mark user content as private by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8729
* Replace OpenCV in the mobile scanner with built-in page detection by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8719
* Upgrade Office Convert to 0.3.3 and extend native conversion options by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8761
* Correct tool operation docs to match what each operation does by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8465
* Fix Convert batch routing, ebook settings and email recipients by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8766
* Match sign-in icon sizes and render GitHub and Apple marks in pure black or white by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8769
* Mark the language of a document and of passages in the Text Editor by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8723
* Release 3.3.0: JPDFium 1.3.0, Docker base 1.1.1, PPA retry and translations by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8781
* Stop the Shared Signing user picker from listing users for guests by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8228
* Keep form fields fillable when embedding fonts for PDF/UA by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8716
* Make LibreOffice sandbox tests pass on Windows by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8287
### Minor Enhancements
* chore: remove deprecated backend PDF text editing and Type3 font cache by @balazs-szucs in https://github.com/Stirling-Tools/Stirling-PDF/pull/8504
### Docker Updates
* build(deps): bump com.microsoft.onnxruntime:onnxruntime from 1.26.0 to 1.30.0 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8260
* build(deps): bump docker/login-action from 4.6.0 to 4.7.0 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8744
* Bump Docker runtimes and bundled tool versions by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8762
### Development Tools
* build(deps): bump astral-sh/setup-uv from 10.3.0 to 10.3.2 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8745
### Other Changes
* build(deps): bump ossf/scorecard-action from 2.4.4 to 2.5.0 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8635
* Use specific Playwright container for a11y jobs by @jbrunton96 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8696
* Bump bucket4jVersion from 8.19.0 to 8.20.0 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8258
* Bump Spring Boot to 4.1.2 by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8715
* build(deps): bump awsSdkVersion from 2.54.13 to 2.55.14 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8345
* build(deps): bump com.google.guava:guava from 33.6.0-jre to 33.7.2-jre by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8371
* build(deps-dev): bump tomlkit from 0.15.1 to 0.15.2 in /engine by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8652
* build(deps): bump the simple-java-mail group across 1 directory with 2 updates by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8736
* build(deps-dev): bump cryptography from 50.0.1 to 50.0.2 in /engine by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8737
* build(deps-dev): bump fpdf2 from 2.8.8 to 2.8.9 in /engine by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8740
* build(deps): bump github/codeql-action/upload-sarif from 4.39.0 to 4.39.1 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8742
* Cover the PDF/UA en-US document-language default by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8752
* build(deps): bump logback from 1.6.3 to 1.6.5 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8738
* build(deps): bump Swatinem/rust-cache from 2.9.2 to 2.9.3 by @dependabot[bot] in https://github.com/Stirling-Tools/Stirling-PDF/pull/8743
* Bump Jinjava and jsoup and align Jackson versions by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8763
* Bump Python AI, telemetry and image processing dependencies by @Frooodle in https://github.com/Stirling-Tools/Stirling-PDF/pull/8764
* Set reported license and source link for backend dependencies by @EthanHealy01 in https://github.com/Stirling-Tools/Stirling-PDF/pull/8765

## New Contributors
* @qwist1233-cpu made their first contribution in https://github.com/Stirling-Tools/Stirling-PDF/pull/8662

**Full Changelog**: https://github.com/Stirling-Tools/Stirling-PDF/compare/v3.2.2...v3.3.0

---

> **Source** [Stirling-Tools/Stirling-PDF](https://github.com/Stirling-Tools/Stirling-PDF) · `v3.3.0` · 2026-11-05 · [upstream release](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
