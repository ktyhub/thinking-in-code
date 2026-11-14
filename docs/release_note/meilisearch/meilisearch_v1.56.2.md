---
title: "meilisearch v1.56.2"
project: "meilisearch"
repo: "meilisearch/meilisearch"
tag: "v1.56.2"
version: "v1.56.2"
published: "2026-11-09"
type: "patch"
lang: "en"
summary: "Meilisearch v1.56.2 removes a leftover debug statement that could impede performance and was a regression from v1.56.1. Upgrading from previous versions of Meilisearch is strongly recommended."
---

# meilisearch v1.56.2

Meilisearch v1.56.2 removes a leftover debug statement that could impede performance and was a regression from v1.56.1. Upgrading from previous versions of Meilisearch is strongly recommended.

It also updates several dependencies.

# 🦋 Fixes

* remove unwanted log & warn about future unwanted dbg by @dureuill in https://github.com/meilisearch/meilisearch/pull/6725

# 🔩 Miscellaneous

* Bump docker/build-push-action from 6.19.2 to 7.4.0 by @dependabot[bot] in https://github.com/meilisearch/meilisearch/pull/6712
* Bump docker/login-action from 4.2.0 to 4.7.0 by @dependabot[bot] in https://github.com/meilisearch/meilisearch/pull/6714
* Fix outdated CA certificates in the Docker images by @curquiza in https://github.com/meilisearch/meilisearch/pull/6705
* Bump actions/download-artifact from 8.0.1 to 8.0.2 by @dependabot[bot] in https://github.com/meilisearch/meilisearch/pull/6713
* Bump dart-lang/setup-dart from 1.7.2 to 1.8.1 by @dependabot[bot] in https://github.com/meilisearch/meilisearch/pull/6711
* Bump mongodb to v9.0 in rails SDKs tests by @Strift in https://github.com/meilisearch/meilisearch/pull/6716


**Full Changelog**: https://github.com/meilisearch/meilisearch/compare/v1.56.1...v1.56.2

---

> **Source** [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) · `v1.56.2` · 2026-11-09 · [upstream release](https://github.com/meilisearch/meilisearch/releases/tag/v1.56.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
