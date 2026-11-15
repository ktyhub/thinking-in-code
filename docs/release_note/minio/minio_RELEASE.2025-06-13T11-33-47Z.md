---
title: "minio RELEASE.2025-06-13T11-33-47Z"
project: "minio"
repo: "minio/minio"
tag: "RELEASE.2025-06-13T11-33-47Z"
version: "RELEASE.2025-06-13T11-33-47Z"
published: "2025-06-23"
type: "release"
lang: "en"
summary: "s3: Fix early listing stopping when ILM is enabled (#472) · Update README.md · fix: empty fileName cause Reader nil for PostPolicyBucketHandler · fix: panic for TestListObjectsWithILM"
---

# minio RELEASE.2025-06-13T11-33-47Z

## What's Changed
* s3: Fix early listing stopping when ILM is enabled (#472) by @vadmeste in https://github.com/minio/minio/pull/21246
* Update README.md by @varun28sharma in https://github.com/minio/minio/pull/21125
* fix: empty fileName cause Reader nil for PostPolicyBucketHandler by @jiuker in https://github.com/minio/minio/pull/21323
* fix: panic for TestListObjectsWithILM by @jiuker in https://github.com/minio/minio/pull/21322
* modernizes for loop in cmd/, internal/ by @12ya in https://github.com/minio/minio/pull/21309
* Add `targetArn` label for bucket replication metrics by @shtripat in https://github.com/minio/minio/pull/21354
* allow cross-compiling support for RISC-V 64 by @ffgan in https://github.com/minio/minio/pull/21348
* [ILM] fix: add region config to s3 client on ilm s3 backend #21364 by @BasixKOR in https://github.com/minio/minio/pull/21365
* add networkpolicy for job and add possibility to define egress ports by @hornjo in https://github.com/minio/minio/pull/20951
* fix: when ListMultipartUploads append result from cache should filter with bucket by @jiuker in https://github.com/minio/minio/pull/21376
* fix: honor renamePart's PathNotFound by @jiuker in https://github.com/minio/minio/pull/21378

## New Contributors
* @varun28sharma made their first contribution in https://github.com/minio/minio/pull/21125
* @12ya made their first contribution in https://github.com/minio/minio/pull/21309
* @ffgan made their first contribution in https://github.com/minio/minio/pull/21348
* @BasixKOR made their first contribution in https://github.com/minio/minio/pull/21365
* @hornjo made their first contribution in https://github.com/minio/minio/pull/20951

**Full Changelog**: https://github.com/minio/minio/compare/RELEASE.2025-05-24T17-08-30Z...RELEASE.2025-06-13T11-33-47Z

---

> **Source** [minio/minio](https://github.com/minio/minio) · `RELEASE.2025-06-13T11-33-47Z` · 2025-06-23 · [upstream release](https://github.com/minio/minio/releases/tag/RELEASE.2025-06-13T11-33-47Z)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
