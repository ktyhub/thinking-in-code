---
title: "nacos 2.5.5"
project: "nacos"
repo: "alibaba/nacos"
tag: "2.5.5"
version: "2.5.5"
published: "2026-10-29"
type: "patch"
lang: "en"
summary: "Nacos 2.5.5 is mainly a bugfix and experience-improvement release for the 2.x series."
---

# nacos 2.5.5

# Nacos 2.5.5 Release Notes

Nacos 2.5.5 is mainly a bugfix and experience-improvement release for the 2.x series.

This release focuses on:

- Hardening server disk paths and active HTTP health checks.
- Preventing service instance loss during full cluster restarts.
- Fixing gRPC frame corruption while preserving Java 8 compatibility.
- Improving HTTP request handling and cluster member consistency.

---

Detailed changes in this release:

## Enhancement/Refactor

- [#15809](https://github.com/alibaba/nacos/pull/15809) Harden server disk path validation for Config storage, local TPS rules, and ZIP extraction to prevent access outside intended directories.
- [#15828](https://github.com/alibaba/nacos/pull/15828) Harden active HTTP health checks by validating request targets and custom headers and restricting checks to the registered instance target.

## BugFix

- [#15857](https://github.com/alibaba/nacos/issues/15857) Fix permanent service instance loss during full cluster restarts by excluding connection-based clients from Distro snapshots that can overwrite new registrations.
- [#15865](https://github.com/alibaba/nacos/pull/15865) Fix controller method lookup for HTTP HEAD requests by resolving them to the corresponding GET mappings.
- [#15951](https://github.com/alibaba/nacos/pull/15951) Fix inconsistent cluster member hashing by aligning `hashCode()` with the address-based comparison used by `equals()`.

## Dependencies

- [#15936](https://github.com/alibaba/nacos/pull/15936) Upgrade gRPC to 1.78.0 to fix frame corruption causing false message-size and mid-frame end-of-stream errors, while retaining Guava 33.3.1-android for Java 8 compatibility.

---

## Upgrade Notes

This release strengthens validation for disk paths and active HTTP health checks. Before upgrading, review the following configurations:

- Config identity fields must not be exactly `.` or `..`. Local TPS rule names must be valid file names without path separators or directory traversal components.
- HTTP health-check targets must use relative URI references, such as `/health` with optional query parameters, without a scheme, authority, or fragment. Custom headers must be valid and must not include `Content-Length` or `Transfer-Encoding`.

Existing HTTP health checks that fail the new validation are skipped without sending requests or changing instance health status. Update affected configurations to restore health checking.

Deployments using valid identifiers and health-check configurations require no changes for these validation updates.

---

## Java Version Requirements

Nacos 2.5.5 retains the Java 8 baseline used by the 2.x series.

| Module | Java Required |
|--------|--------------|
| Nacos-Server / Nacos-Console | Java 8 |
| Nacos-Client | Java 8 |

---

**Full Changelog**: https://github.com/alibaba/nacos/compare/2.5.4...2.5.5

---

> **Source** [alibaba/nacos](https://github.com/alibaba/nacos) · `2.5.5` · 2026-10-29 · [upstream release](https://github.com/alibaba/nacos/releases/tag/2.5.5)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
