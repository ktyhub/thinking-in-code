---
title: "minio RELEASE.2025-05-24T17-08-30Z"
project: "minio"
repo: "minio/minio"
tag: "RELEASE.2025-05-24T17-08-30Z"
version: "RELEASE.2025-05-24T17-08-30Z"
published: "2025-05-24"
type: "release"
lang: "en"
summary: "Removal of boringcrypto support - since go1.24.x, you can now simply use the GOFIPS environment variable on the same binary. · Embedded UI Console is now deprecated and moved to object-browser"
---

# minio RELEASE.2025-05-24T17-08-30Z

## Highlights
* Removal of boringcrypto support - since go1.24.x, you can now simply use the GOFIPS environment variable on the same binary.
* Embedded UI Console is now deprecated and moved to [object-browser](https://github.com/minio/object-browser)
   - External IDP logins via LDAP/OIDC are removed as well; these are now available as part of the AiStor Product.
   - STS APIs continue to work if someone wishes to build UI in front.
* For all paying customers, we recommend that if you are planning to upgrade, you should upgrade to [AiStor](https://min.io/download?view=aistor-custom). 
* Open a [SUBNET](https://subnet.min.io) issue so that we can guide you further on the AiStor migration.
* AiStor binaries are backwards compatible, so you can upgrade your existing open source deployment to AiStor seamlessly.

## What's Changed
* Correct spelling by @shtripat in https://github.com/minio/minio/pull/21225
* update `minio/kms-go/kms` SDK by @aead in https://github.com/minio/minio/pull/21233
* Fix nil dereference in adding service account by @taran-p in https://github.com/minio/minio/pull/21235
* Use go mod tool to install tools for go generate by @klauspost in https://github.com/minio/minio/pull/21232
* Add documentation for replication_max_lrg_workers by @cniackz in https://github.com/minio/minio/pull/21236
* fix: after AbortMultipartUpload can do PutObjectPart success that sta… by @jiuker in https://github.com/minio/minio/pull/21229
* typo: return actual error from RemoveRemoteTargetsForEndpoint by @wooffie in https://github.com/minio/minio/pull/21238
* feat: support nats nkey seed auth by @matthewdavidlloyd in https://github.com/minio/minio/pull/21231
* fix: track object and bucket for exipreAll by @jiuker in https://github.com/minio/minio/pull/21241
* cleanup: use NewWithOptions replace the Deprecated one by @jiuker in https://github.com/minio/minio/pull/21243
* return error for AppendObject() API by @harshavardhana in https://github.com/minio/minio/pull/21272
* Update UI console to the latest version by @bexsoft in https://github.com/minio/minio/pull/21278
* Allow FTPS to force TLS by @klauspost in https://github.com/minio/minio/pull/21251
* remove support for FIPS 140-2 with boringcrypto by @aead in https://github.com/minio/minio/pull/21292
* fix: unable to get net.Interface cause panic by @jiuker in https://github.com/minio/minio/pull/21277
* Update Console UI to latest version by @bexsoft in https://github.com/minio/minio/pull/21294
* heal: Avoid disabling scanner healing in single and dist erasure mode by @vadmeste in https://github.com/minio/minio/pull/21302
* fix: Use mime encode for Non-US-ASCII metadata by @jiuker in https://github.com/minio/minio/pull/21282
* docs: use github-style-notes in the readme by @CommanderStorm in https://github.com/minio/minio/pull/21308

## New Contributors
* @CommanderStorm made their first contribution in https://github.com/minio/minio/pull/21308

**Full Changelog**: https://github.com/minio/minio/compare/RELEASE.2025-04-22T22-12-26Z...RELEASE.2025-05-24T17-08-30Z

---

> **Source** [minio/minio](https://github.com/minio/minio) · `RELEASE.2025-05-24T17-08-30Z` · 2025-05-24 · [upstream release](https://github.com/minio/minio/releases/tag/RELEASE.2025-05-24T17-08-30Z)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
