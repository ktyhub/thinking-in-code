---
title: "minio RELEASE.2025-09-07T16-13-09Z"
project: "minio"
repo: "minio/minio"
tag: "RELEASE.2025-09-07T16-13-09Z"
version: "RELEASE.2025-09-07T16-13-09Z"
published: "2025-09-07"
type: "release"
lang: "en"
summary: "Update console to v2.0.3 · bring more idempotent behavior to AbortMultipartUpload() · fix: record extral skippedEntry for listObject · feat: add variable for datasource in grafana dashboards"
---

# minio RELEASE.2025-09-07T16-13-09Z

## What's Changed
* Update console to v2.0.3 by @bexsoft in https://github.com/minio/minio/pull/21474
* bring more idempotent behavior to AbortMultipartUpload() by @jiuker in https://github.com/minio/minio/pull/21475
* fix: record extral skippedEntry for listObject by @jiuker in https://github.com/minio/minio/pull/21484
* feat: add variable for datasource in grafana dashboards by @hornjo in https://github.com/minio/minio/pull/21470
* imagePullSecrets consistent types for global , local by @0xMALVEE in https://github.com/minio/minio/pull/21500
* Optimize outdated commands in the log by @dormanze in https://github.com/minio/minio/pull/21498
* fix(helm): do not suspend versioning by default for buckets, only set versioning if specified(21349) by @LOCODAK in https://github.com/minio/minio/pull/21494
* Check legalHoldPerm by @klauspost in https://github.com/minio/minio/pull/21508
* fix: errUploadIDNotFound will be ignored when err is from peer client by @jiuker in https://github.com/minio/minio/pull/21504
* fix: claim based oidc for official aws libraries by @0xMALVEE in https://github.com/minio/minio/pull/21468
* fix: add name and description to ldap accesskey list by @jiuker in https://github.com/minio/minio/pull/21511
* Modify permission verification type by @dormanze in https://github.com/minio/minio/pull/21505
* fix: when claim-based OIDC is configured, treat unknown roleArn as claim-based auth by @ianroberts in https://github.com/minio/minio/pull/21512
* custom user-agent transport wrapper by @0xMALVEE in https://github.com/minio/minio/pull/21483
* Update docs links throughout by @djwfyi in https://github.com/minio/minio/pull/21513
* http/listener: fix bugs and simplify by @denpeshkov in https://github.com/minio/minio/pull/21514
* fix: use amqp.ParseURL to parse amqp url by @jiuker in https://github.com/minio/minio/pull/21528
* fix: invalid checksum on site replication with conforming checksum types by @marktheunissen in https://github.com/minio/minio/pull/21535
* Revert `dns.msgUnPath`, fixes #21541 by @mannreis in https://github.com/minio/minio/pull/21542
* Run modernize by @klauspost in https://github.com/minio/minio/pull/21546
* fix: when save the rebalanceStats not found the config file by @jiuker in https://github.com/minio/minio/pull/21547
* Updated object-browser to the latest version v2.0.4 by @bexsoft in https://github.com/minio/minio/pull/21564
* fix: return error on conditional write for non existing object by @0xMALVEE in https://github.com/minio/minio/pull/21550
* Fix support for legacy compression env variables by @WGH- in https://github.com/minio/minio/pull/21533
* fix: use correct dummy ARN for claim-based OIDC provider when listing access keys by @ianroberts in https://github.com/minio/minio/pull/21549
* fix: conditional checks write for multipart by @0xMALVEE in https://github.com/minio/minio/pull/21567

## New Contributors
* @LOCODAK made their first contribution in https://github.com/minio/minio/pull/21494
* @ianroberts made their first contribution in https://github.com/minio/minio/pull/21512
* @denpeshkov made their first contribution in https://github.com/minio/minio/pull/21514

**Full Changelog**: https://github.com/minio/minio/compare/RELEASE.2025-07-23T15-54-02Z...RELEASE.2025-09-07T16-13-09Z

---

> **Source** [minio/minio](https://github.com/minio/minio) · `RELEASE.2025-09-07T16-13-09Z` · 2025-09-07 · [upstream release](https://github.com/minio/minio/releases/tag/RELEASE.2025-09-07T16-13-09Z)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
