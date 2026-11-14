---
title: "nacos 3.2.4"
project: "nacos"
repo: "alibaba/nacos"
tag: "3.2.4"
version: "3.2.4"
published: "2026-08-27"
type: "patch"
lang: "en"
summary: "Nacos 3.2.4 is mainly a bugfix, security-hardening, and experience-improvement release for the 3.2 series."
---

# nacos 3.2.4

Nacos 3.2.4 is mainly a bugfix, security-hardening, and experience-improvement release for the 3.2 series.

This release focuses on:

- Strengthening JRaft, HTTP/gRPC authorization, embedded database, login, active health check, and MCP import security.
- Fixing standalone Console, Prompt visibility, Config history, listener state, and MCP tool authentication issues.
- Improving Config detail, edit, and history page usability.

For cluster and API operators, this release also:

- Adds server-identity authentication to native JRaft gRPC traffic with rolling-upgrade-aware enforcement.
- Disables selected deprecated v3 AI APIs by default and provides a temporary compatibility switch.
- Adds an allowlist policy for MCP tool imports from private or local targets.

---

Detailed changes in this release:

## Feature

- [#15687](https://github.com/alibaba/nacos/pull/15687) Add server-identity authentication to native JRaft gRPC traffic with rolling-upgrade-aware enforcement.

## Enhancement/Refactor

- [#14817](https://github.com/alibaba/nacos/issues/14817) Add a shared, disabled-by-default compatibility gate for deprecated Pipeline and MCP import APIs.
- [#15661](https://github.com/alibaba/nacos/pull/15661) Harden distributed embedded database result resolution to supported scalar types and registered row mappers.
- [#15688](https://github.com/alibaba/nacos/pull/15688) Refactor controller context-path URI parsing for consistent route matching.
- [#15695](https://github.com/alibaba/nacos/issues/15695) Improve Config detail, edit, and history layouts with compact metadata and a full-screen content view.
- [#15712](https://github.com/alibaba/nacos/pull/15712) Harden active health checks by validating target addresses and disabling unsafe MySQL JDBC options.
- [#15749](https://github.com/alibaba/nacos/pull/15749) Add configurable outbound access control for MCP tool imports, allowing public targets and allowlisted private or local targets.

## BugFix

- [#15475](https://github.com/alibaba/nacos/issues/15475) Fix caller identity forwarding from a standalone Console so the Server enforces caller-specific RBAC.
- [#15476](https://github.com/alibaba/nacos/issues/15476) Fix Prompt visibility enforcement for list, detail, version, download, and Client read paths.
- [#15560](https://github.com/alibaba/nacos/issues/15560) Fix MCP tool passthrough authentication being lost after publishing from the Console.
- [#15634](https://github.com/alibaba/nacos/issues/15634) [#15563](https://github.com/alibaba/nacos/pull/15563) Fix authorization metadata and resource parsing across Admin, HTTP/gRPC, Prometheus, and AgentSpec APIs.
- [#15660](https://github.com/alibaba/nacos/issues/15660) Fix standalone Console startup failure caused by a missing Config clone permission checker bean.
- [#15682](https://github.com/alibaba/nacos/issues/15682) Prevent username enumeration by normalizing login failure responses.
- [#15701](https://github.com/alibaba/nacos/issues/15701) Fix Config history next-record queries on Derby and apply gray-name filtering correctly.
- [#15724](https://github.com/alibaba/nacos/issues/15724) Preserve the namespace filter when aggregating listener-by-IP state across cluster members.

---

## Breaking Change Notice

Nacos 3.2.4 changes the default behavior of deprecated AI APIs and private MCP tool imports, and introduces an irreversible JRaft authentication enforcement transition.

Affected users:

- Users calling the deprecated Pipeline list/detail or legacy MCP import APIs. These APIs now return HTTP `410 Gone` by default.
- Console operators importing MCP tools from private or local addresses. These targets now require an administrator-managed allowlist.
- Clusters attempting a mixed-version rolling downgrade after all members have enabled JRaft authentication enforcement.

Recommended upgrade path:

- Migrate to the canonical Pipeline and `/v3/console/ai/import/*` APIs. If additional migration time is required, temporarily set `nacos.core.api.compatibility.enabled=true`.
- Configure `nacos.console.ai.mcp.import.allowed-private-addresses` on every Console instance and restart the Console when private targets are required.
- Before upgrading, verify that `nacos.core.auth.server.identity.key` and `nacos.core.auth.server.identity.value` are configured identically on every cluster member. Nacos uses these values to authenticate JRaft gRPC requests but does not synchronize them across the cluster.
- Do not rely on a mixed-version rolling downgrade after JRaft authentication has entered enforced mode.

Users already using the canonical AI APIs, public MCP endpoints, and consistent server identities are not affected by these compatibility changes.

---

## Java Version Requirements

| Module | Java Required |
|--------|--------------|
| Nacos-Server / Nacos-Console | Java 17 |
| Nacos-Client | Java 8 |
| Nacos-Maintainer-Client | Java 8 |

---

**Full Changelog**: https://github.com/alibaba/nacos/compare/3.2.3...3.2.4

---

> **Source** [alibaba/nacos](https://github.com/alibaba/nacos) · `3.2.4` · 2026-08-27 · [upstream release](https://github.com/alibaba/nacos/releases/tag/3.2.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
