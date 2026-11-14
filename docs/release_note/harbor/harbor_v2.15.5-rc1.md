---
title: "harbor v2.15.5-rc1"
project: "harbor"
repo: "goharbor/harbor"
tag: "v2.15.5-rc1"
published: "2026-11-11"
type: "patch"
lang: "en"
summary: "fix(portal): Add the missing i18n entries for the operate action and the configuration resource · fix(http): redact the pagination Link in rejection errors · fix(api): bound audited and manifest request bodies"
---

# harbor v2.15.5-rc1

<!-- Release notes generated using configuration in .github/release.yml at v2.15.5-rc1 -->

## What's Changed
### Component updates ⬆️
* fix(portal): Add the missing i18n entries for the operate action and the configuration resource by @bupd in https://github.com/goharbor/harbor/pull/24104
* fix(http): redact the pagination Link in rejection errors by @bupd in https://github.com/goharbor/harbor/pull/24095
* fix(api): bound audited and manifest request bodies by @bupd in https://github.com/goharbor/harbor/pull/24102
* fix(webhook): store the normalized target address (backport #24075) by @bupd in https://github.com/goharbor/harbor/pull/24098
* [release-2.15] fix(cnai-parser): enforce actual byte limit to prevent decompression (#23497) by @Vad1mo in https://github.com/goharbor/harbor/pull/24146
* [release-2.15] fix(replication): make the image resource filter take effect again (#24176) by @chlins in https://github.com/goharbor/harbor/pull/24180
* [release-2.15] bump: bump Go to 1.26.10 for release-2.15.0 by @Vad1mo in https://github.com/goharbor/harbor/pull/24211
* fix(http): compare the IPv6 zone identifier exactly in SameOrigin by @bupd in https://github.com/goharbor/harbor/pull/24096
* fix(registry): redact the upload Location in rejection errors by @bupd in https://github.com/goharbor/harbor/pull/24094
* Bump Trivy to v0.76.2 and adapter to v0.40.1-rc1 by @stonezdj in https://github.com/goharbor/harbor/pull/24339
* Bump up distribution to v2.8.3-harbor.4-rc1 and bump up golang to 1.27.3 by @stonezdj in https://github.com/goharbor/harbor/pull/24351
* (cherry-pick): preserve artifact type for multi-tier accessories by @stonezdj in https://github.com/goharbor/harbor/pull/24360
* (cherry-pick): ignore 401 when listing labels of a Harbor registry by @stonezdj in https://github.com/goharbor/harbor/pull/24359
### Bump Component Version 🤖
* chore(deps-dev): bump copy-webpack-plugin from 11.0.0 to 14.0.0 in /src/portal/app-swagger-ui by @dependabot[bot] in https://github.com/goharbor/harbor/pull/23847
* fix(deps): update Go modules for high severity CVEs and bump photon by @stonezdj in https://github.com/goharbor/harbor/pull/24336
* Bump Trivy adapter and distribution for release-2.15.0 by @stonezdj in https://github.com/goharbor/harbor/pull/24361


**Full Changelog**: https://github.com/goharbor/harbor/compare/v2.15.4...v2.15.5-rc1

---

> **Source** [goharbor/harbor](https://github.com/goharbor/harbor) · `v2.15.5-rc1` · 2026-11-11 · [upstream release](https://github.com/goharbor/harbor/releases/tag/v2.15.5-rc1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
