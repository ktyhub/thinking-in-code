---
title: "minio RELEASE.2025-10-15T17-29-55Z"
project: "minio"
repo: "minio/minio"
tag: "RELEASE.2025-10-15T17-29-55Z"
version: "RELEASE.2025-10-15T17-29-55Z"
published: "2025-10-16"
type: "release"
lang: "en"
summary: "A CVE was reported Privilege Escalation via Session Policy Bypass in Service Accounts and STS and fixed in this release"
---

# minio RELEASE.2025-10-15T17-29-55Z

## Security

A CVE was reported [Privilege Escalation via Session Policy Bypass in Service Accounts and STS](https://github.com/minio/minio/security/advisories/GHSA-jjjj-jwhf-8rgr) and fixed in this release,

All users are advised to download and upgrade their MinIO setup immediately.

To install the latest release

```
go install -v github.com/minio/minio@latest
```

OR

```
go install -v github.com/minio/minio@RELEASE.2025-10-15T17-29-55Z
```

For container environments, please clone the source and build the latest container. 

```
git clone https://github.com/minio/minio
git checkout RELEASE.2025-10-15T17-29-55Z
TAG=myregistry.com/minio/minio:RELEASE.2025-10-15T17-29-55Z make docker
```

## What's Changed
* fix: remove unnecessary replication checks by @0xMALVEE in https://github.com/minio/minio/pull/21569
* LDAP TLS handshake fails with StartTLS and tls_skip_verify=off by @mosesdd in https://github.com/minio/minio/pull/21582
* fix: incorrect poolID when after decommission adding pools by @jiuker in https://github.com/minio/minio/pull/21590
* fix: after saveRebalanceStats cancel will be empty by @jiuker in https://github.com/minio/minio/pull/21597
* Use new gofumpt by @klauspost in https://github.com/minio/minio/pull/21613
* fix: timeN function return final closure not be called by @drivebyer in https://github.com/minio/minio/pull/21615
* Updating readme for MinIO docs by @ravindk89 in https://github.com/minio/minio/pull/21625
* Update README with Docker and Helm installation instructions by @ravindk89 in https://github.com/minio/minio/pull/21627
* Bump Go version in toolchain directive to 1.24.8 by @marktheunissen in https://github.com/minio/minio/pull/21629
* fix: allow trailing slash in AWS S3 POST policies by @cduzer in https://github.com/minio/minio/pull/21612
* Change documentation link in README by @ravindk89 in https://github.com/minio/minio/pull/21636
* fix: check sub-policy properly when present by @donatello in https://github.com/minio/minio/pull/21642

## New Contributors
* @mosesdd made their first contribution in https://github.com/minio/minio/pull/21582
* @cduzer made their first contribution in https://github.com/minio/minio/pull/21612

**Full Changelog**: https://github.com/minio/minio/compare/RELEASE.2025-09-07T16-13-09Z...RELEASE.2025-10-15T17-29-55Z

---

> **Source** [minio/minio](https://github.com/minio/minio) · `RELEASE.2025-10-15T17-29-55Z` · 2025-10-16 · [upstream release](https://github.com/minio/minio/releases/tag/RELEASE.2025-10-15T17-29-55Z)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
