---
title: "nacos 3.3.0"
project: "nacos"
repo: "alibaba/nacos"
tag: "3.3.0"
version: "3.3.0"
published: "2026-10-29"
type: "minor"
lang: "en"
summary: "Nacos 3.3.0 is a feature iteration release for the Nacos 3.x series. It brings protocol-neutral Agent management and discovery, shared AI resource search, and unified MCP lifecycle management to the stable release."
---

# nacos 3.3.0

# Nacos 3.3.0

Nacos 3.3.0 is a feature iteration release for the Nacos 3.x series. It brings protocol-neutral Agent management and discovery, shared AI resource search, and unified MCP lifecycle management to the stable release.

This release focuses on:

- AI Registry capabilities across Agent, AgentSpec, Skill, Prompt, and MCP resources.
- DNS service discovery and distributed locks.
- Dynamic plugin management and authentication enabled by default.
- Spring Boot 4 and Jackson 3 compatibility, with improved client and server reliability.

The main feature updates include:

- Agent registration, version management, runtime endpoints, RAD discovery, transport negotiation, and Watch/Push through Java SDKs and Console workflows.
- Shared AI resource search with hybrid keyword and vector retrieval, artifact access, and optional relevance filtering.
- MCP draft, review, publish, online/offline, and visibility management, with migration support for historical resources.
- Optional DNS discovery with A, AAAA, and SRV records over UDP and TCP.
- Distributed reentrant and non-reentrant locks with watchdog renewal and Raft consistency.

The stable release also improves Skill metadata consistency across version transitions, extends visibility plugin capabilities, and strengthens Config SDK usability, Console compatibility, and recovery after Naming reconnects and cluster restarts.

These notes are cumulative and include the changes delivered in 3.3.0-BETA and 3.3.0-RC.

---

Detailed changes in this release:

## Feature

- [#50](https://github.com/alibaba/nacos/issues/50) Add optional DNS service discovery over UDP and TCP, with A, AAAA, and SRV records, metrics, and configurable external DNS forwarding.
- [#14466](https://github.com/alibaba/nacos/issues/14466) Add a neutral JSON adapter with Jackson 2 and Jackson 3 runtime support.
- [#14804](https://github.com/alibaba/nacos/issues/14804) Add protocol-neutral Agent lifecycle management, Console workflows, RAD discovery, runtime endpoints, transport negotiation, Watch/Push, and Java SDKs.
- [#15279](https://github.com/alibaba/nacos/issues/15279) Add distributed reentrant and non-reentrant locks with watchdog renewal, FIFO waiting, gRPC notifications, Raft consistency, and a Java Lock SDK.
- [#15471](https://github.com/alibaba/nacos/issues/15471) Support SkillSpector as an AI publish pipeline.
- [#15475](https://github.com/alibaba/nacos/issues/15475) Add unified dynamic plugin configuration, lifecycle management, runtime updates, deterministic discovery, and Console configuration workflows.
- [#15476](https://github.com/alibaba/nacos/issues/15476)[#15604](https://github.com/alibaba/nacos/issues/15604) Add plugin-owned visibility grant and revoke APIs and Console management for Skill and AgentSpec resources.
- [#15541](https://github.com/alibaba/nacos/issues/15541) Add Agentic Resource Discovery with search, exploration, artifact retrieval, visibility filtering, persistent indexes, and hybrid keyword and vector retrieval.
- [#15640](https://github.com/alibaba/nacos/issues/15640) Add Linux RISC-V64 compatibility for RocksDB JNI loading and startup.
- [#15761](https://github.com/alibaba/nacos/issues/15761) Add shared MCP lifecycle management with drafts, review, publish, online/offline operations, visibility, Java SDKs, and historical reconciliation while preserving existing Config/Naming serving data.

## Enhancement/Refactor

- [#8354](https://github.com/alibaba/nacos/issues/8354) Replace the mandatory Prometheus client dependency with a pluggable client metrics SPI and a no-op default.
- [#12064](https://github.com/alibaba/nacos/issues/12064) Support configuring the gRPC port offset through individual client properties.
- [#12734](https://github.com/alibaba/nacos/issues/12734) Add request/result-based Config SDK methods, encrypted Config CAS publishing, and conditional queries with local cache reuse.
- [#13690](https://github.com/alibaba/nacos/issues/13690) Log the resolved client logging configuration and include namespace IDs in subscription logs.
- [#14804](https://github.com/alibaba/nacos/issues/14804) Improve Agent Console workflows, expose SDK discovery capabilities and A2A conversion helpers, and trace discovery request origins.
- [#14817](https://github.com/alibaba/nacos/issues/14817) Disable selected deprecated Pipeline and MCP import APIs by default and provide a shared temporary compatibility switch.
- [#14932](https://github.com/alibaba/nacos/issues/14932) Reduce read-path contention and improve index consistency in the legacy MCP cache.
- [#14980](https://github.com/alibaba/nacos/issues/14980) Support deregistering persistent Naming instances from Console v3.
- [#15315](https://github.com/alibaba/nacos/issues/15315)[#15561](https://github.com/alibaba/nacos/issues/15561) Improve Skill upload precheck, conflict handling, and server-side ZIP validation.
- [#15322](https://github.com/alibaba/nacos/issues/15322) Remove obsolete Config migration compatibility code and retain only the current Config storage model.
- [#15345](https://github.com/alibaba/nacos/issues/15345) Return cached Skill frontmatter in list and metadata-detail responses.
- [#15346](https://github.com/alibaba/nacos/issues/15346) Manage the reserved `latest` label for AI resources on the server.
- [#15357](https://github.com/alibaba/nacos/issues/15357) Enable Client API authentication by default and validate standard integration scenarios with authentication enabled.
- [#15432](https://github.com/alibaba/nacos/pull/15432)[#15440](https://github.com/alibaba/nacos/pull/15440)[#15441](https://github.com/alibaba/nacos/pull/15441) Remove reviewed unused Java code while preserving required compatibility contracts.
- [#15448](https://github.com/alibaba/nacos/pull/15448) Improve English translations in Console UI Next.
- [#15486](https://github.com/alibaba/nacos/issues/15486) Include the Skill owner in upload permission-denied messages.
- [#15606](https://github.com/alibaba/nacos/issues/15606) Return a stable per-item result for every Skill batch upload candidate.
- [#15661](https://github.com/alibaba/nacos/pull/15661) Restrict distributed embedded database query results to supported scalar types and registered row mappers.
- [#15678](https://github.com/alibaba/nacos/pull/15678) Decouple the visibility plugin SPI from server runtime modules.
- [#15686](https://github.com/alibaba/nacos/pull/15686)[#15692](https://github.com/alibaba/nacos/pull/15692) Align authorization method resolution with Spring MVC routing and expand controller-level authorization regression coverage.
- [#15687](https://github.com/alibaba/nacos/pull/15687) Authenticate native JRaft gRPC requests with server identity and a rolling-upgrade enforcement transition.
- [#15695](https://github.com/alibaba/nacos/issues/15695) Improve Config detail, edit, and history page layouts with larger content areas and full-screen reading.
- [#15720](https://github.com/alibaba/nacos/issues/15720) Automatically publish the first uploaded Skill version.
- [#15746](https://github.com/alibaba/nacos/pull/15746) Add operator-controlled outbound access policies for MCP tool imports.
- [#15837](https://github.com/alibaba/nacos/issues/15837) Add opt-in initialization for multiple Spring AOT contexts and improve GraalVM runtime metadata.
- [#15838](https://github.com/alibaba/nacos/issues/15838) Clarify that rolling back the first inserted Config history record deletes the configuration.
- [#15854](https://github.com/alibaba/nacos/pull/15854) Remove untagged legacy Raft request parsing and preserve explicit errors for malformed log entries.
- [#15868](https://github.com/alibaba/nacos/issues/15868) Support disabling local Config snapshots through the `configSnapshotEnabled` startup property.
- [#15896](https://github.com/alibaba/nacos/issues/15896) Migrate Copilot streaming to typed AgentScope events while preserving the existing SSE response contract.
- [#15900](https://github.com/alibaba/nacos/issues/15900) Correlate Java SDK HTTP requests with server request context through `Nacos-Request-Id`.
- [#15903](https://github.com/alibaba/nacos/issues/15903) Add a runnable Parallel Search MCP example for registration, endpoint discovery, web search, and page fetching.
- [#15921](https://github.com/alibaba/nacos/issues/15921) Add optional Jev relevance filtering for ARD Search, with stable result ordering and fallback to basic search.
- [#15929](https://github.com/alibaba/nacos/issues/15929) Add Russian localization and a language selector to Console UI Next.
- [#15956](https://github.com/alibaba/nacos/issues/15956) Allow visibility plugins to declare additional AI resource scopes and extend Agent validation through an optional SPI, while preserving default PUBLIC/PRIVATE behavior.

## BugFix

- [#11122](https://github.com/alibaba/nacos/issues/11122) Accept `healthCheckEnabled` as a health-check switch entry while retaining the legacy `check` alias.
- [#11780](https://github.com/alibaba/nacos/issues/11780) Preserve Config and service list filters and pagination when returning from detail pages.
- [#11890](https://github.com/alibaba/nacos/issues/11890) Avoid removing metadata for instances that still exist after restart.
- [#12557](https://github.com/alibaba/nacos/issues/12557) Retry Config dump write-lock acquisition to prevent stale MD5 cache data.
- [#14008](https://github.com/alibaba/nacos/issues/14008) Fix native-image metadata required to establish gRPC client connections.
- [#14804](https://github.com/alibaba/nacos/issues/14804) Keep AI search available with partial results while indexes are being backfilled.
- [#14804](https://github.com/alibaba/nacos/issues/14804) Preserve Agent SDK Watches across transient failures and deliver initial and updated state through a consistent Listener path.
- [#14981](https://github.com/alibaba/nacos/issues/14981)[#15468](https://github.com/alibaba/nacos/issues/15468) Fix concurrent Config publish duplicate-key handling through the datasource dialect SPI, including PostgreSQL `unique_violation`.
- [#15410](https://github.com/alibaba/nacos/pull/15410) Fix trailing separators when joining collections containing null elements.
- [#15415](https://github.com/alibaba/nacos/pull/15415) Prevent malformed config-plugin property names from discarding valid plugin configuration.
- [#15420](https://github.com/alibaba/nacos/issues/15420) Fix Skill ZIP uploads with invalid or unavailable version candidates.
- [#15425](https://github.com/alibaba/nacos/pull/15425) Prevent out-of-range batch indexes from causing `IndexOutOfBoundsException`.
- [#15446](https://github.com/alibaba/nacos/pull/15446) Fix page count calculation for empty and exactly divisible result sets.
- [#15447](https://github.com/alibaba/nacos/pull/15447) Prevent `NamingUtils.getServiceName` from failing on a trailing service separator.
- [#15466](https://github.com/alibaba/nacos/issues/15466) Correct `@Since` annotations for Skill upload APIs.
- [#15470](https://github.com/alibaba/nacos/issues/15470) Prevent Naming connection cleanup from waiting for unrelated distributed-lock Raft writes.
- [#15475](https://github.com/alibaba/nacos/issues/15475) Fix standalone Console auth plugin initialization and forward the caller identity to downstream Server requests.
- [#15476](https://github.com/alibaba/nacos/issues/15476) Enforce Prompt visibility on list, detail, version, download, and Client read APIs.
- [#15477](https://github.com/alibaba/nacos/issues/15477) Wait for persistent service metadata before starting health checks.
- [#15490](https://github.com/alibaba/nacos/issues/15490) Fix Chinese text corruption in Skill Scanner pipeline reports on Windows.
- [#15494](https://github.com/alibaba/nacos/issues/15494) Restore complete MCP tool advanced-template support in Console UI Next.
- [#15510](https://github.com/alibaba/nacos/issues/15510) Reject explicitly supplied invalid Bearer tokens instead of falling back to anonymous access.
- [#15534](https://github.com/alibaba/nacos/issues/15534) Generate deterministic, ASCII-safe physical Config keys for AI resources.
- [#15543](https://github.com/alibaba/nacos/issues/15543) Restore case-sensitive collation for newly initialized MySQL Config schemas.
- [#15557](https://github.com/alibaba/nacos/issues/15557) Fix startup failures when plugin state snapshots are restored before unified plugin discovery.
- [#15560](https://github.com/alibaba/nacos/issues/15560) Preserve MCP tool passthrough authentication when editing and publishing runtime templates.
- [#15603](https://github.com/alibaba/nacos/issues/15603) Fix visibility query conversion when explicitly authorized resources are present.
- [#15618](https://github.com/alibaba/nacos/issues/15618) Try lower-priority explicit Skill upload versions before generating a version.
- [#15620](https://github.com/alibaba/nacos/issues/15620) Allow AI resource versions to be resubmitted after completed or stale review results.
- [#15625](https://github.com/alibaba/nacos/issues/15625) Fix gray Config cache null access and cross-thread visibility in Config disk services and client connections.
- [#15634](https://github.com/alibaba/nacos/issues/15634) Fix API authorization metadata, custom resource parser precedence, AgentSpec authorization, and Prometheus security path matching.
- [#15642](https://github.com/alibaba/nacos/issues/15642) Make AI resource deletion cleanup-first and retryable across all stored versions.
- [#15658](https://github.com/alibaba/nacos/issues/15658) Keep AI resource reads, updates, and deletion bound to the persisted storage provider.
- [#15660](https://github.com/alibaba/nacos/issues/15660) Fix standalone Console startup when the Config clone source-permission checker is unavailable.
- [#15663](https://github.com/alibaba/nacos/issues/15663) Preserve case-sensitive AI resource identities in MySQL search and task tables.
- [#15675](https://github.com/alibaba/nacos/issues/15675) Preserve nullable MCP tool output schemas during editing, display, and OpenAPI import.
- [#15682](https://github.com/alibaba/nacos/issues/15682) Prevent login responses from disclosing whether a username exists.
- [#15689](https://github.com/alibaba/nacos/issues/15689) Preserve string serialization of Config storage IDs with Jackson 3 to avoid numeric precision loss.
- [#15701](https://github.com/alibaba/nacos/issues/15701) Fix Config history next-record queries on Derby and preserve gray-version filtering.
- [#15703](https://github.com/alibaba/nacos/pull/15703) Migrate the legacy skills.sh importer state key without overriding canonical configuration.
- [#15705](https://github.com/alibaba/nacos/issues/15705) Clean removed Skill and AgentSpec draft files while retaining retry metadata after storage failures.
- [#15710](https://github.com/alibaba/nacos/issues/15710) Declare the required SQL LIKE escape clause for Derby, Oracle, and other affected dialects.
- [#15712](https://github.com/alibaba/nacos/pull/15712)[#15827](https://github.com/alibaba/nacos/pull/15827) Reject unsafe instance addresses, HTTP targets, headers, and MySQL connection options in active health checks.
- [#15714](https://github.com/alibaba/nacos/pull/15714) Handle encoded context paths consistently in the legacy controller-method resolver.
- [#15718](https://github.com/alibaba/nacos/issues/15718) Escape all LIKE predicates when searching embedded roles with username filters.
- [#15724](https://github.com/alibaba/nacos/issues/15724) Forward the namespace when querying Config listeners by IP across cluster members.
- [#15744](https://github.com/alibaba/nacos/issues/15744) Align bootstrap and distribution configuration defaults.
- [#15763](https://github.com/alibaba/nacos/issues/15763) Reject invalid IPv6 mixed addresses with too many explicit address blocks.
- [#15788](https://github.com/alibaba/nacos/issues/15788) Allow the Java client to run with Jackson 3 after excluding Jackson 2 core/databind, including authentication paths.
- [#15803](https://github.com/alibaba/nacos/pull/15803) Reject unsafe AgentSpec and Skill ZIP layouts and enforce entry-count and decompression limits.
- [#15804](https://github.com/alibaba/nacos/pull/15804) Reject unsafe filesystem paths before Config, archive, and local rule-storage operations.
- [#15821](https://github.com/alibaba/nacos/issues/15821) Increase the embedded Derby connection timeout to prevent initialization failures on slow storage.
- [#15836](https://github.com/alibaba/nacos/issues/15836) Fix plugin availability RPC serialization so remote cluster members are reported correctly.
- [#15844](https://github.com/alibaba/nacos/issues/15844) Use the correct default gRPC protocol negotiator type.
- [#15847](https://github.com/alibaba/nacos/issues/15847) Restore public defaults for newly created Agent and MCP resources and preserve existing visibility scopes.
- [#15850](https://github.com/alibaba/nacos/issues/15850)[#15851](https://github.com/alibaba/nacos/issues/15851) Select the default JDBC driver from the datasource dialect and clarify non-MySQL configuration examples.
- [#15853](https://github.com/alibaba/nacos/issues/15853) Return schema metadata in current, historical, and previous-version Config details.
- [#15857](https://github.com/alibaba/nacos/issues/15857) Prevent stale Distro snapshots from overwriting redo registrations and losing service instances after cluster restarts.
- [#15864](https://github.com/alibaba/nacos/pull/15864) Resolve HEAD requests through their GET mapping in the legacy controller-method cache.
- [#15866](https://github.com/alibaba/nacos/issues/15866) Remove server-list event subscriptions on client shutdown and prevent callbacks from accessing a closed server-list provider.
- [#15872](https://github.com/alibaba/nacos/issues/15872) Display subscriber addresses, client versions, and application names correctly in Console UI Next.
- [#15876](https://github.com/alibaba/nacos/issues/15876) Ignore registration responses from obsolete connections so ephemeral instances are re-registered after reconnect storms.
- [#15883](https://github.com/alibaba/nacos/issues/15883) Fix unexpected HTTP 403 responses from identity-only APIs when Console is deployed independently.
- [#15899](https://github.com/alibaba/nacos/issues/15899) Fix Console UI Next loading failures on Chromium 90 by transpiling unsupported JavaScript syntax.
- [#15930](https://github.com/alibaba/nacos/issues/15930) Prevent uncaught errors from permanently cancelling Naming redo tasks and blocking registration or subscription recovery.
- [#15945](https://github.com/alibaba/nacos/issues/15945)[#15947](https://github.com/alibaba/nacos/issues/15947) Parse multiline YAML Skill descriptions correctly and prevent spurious frontmatter fields.
- [#15946](https://github.com/alibaba/nacos/issues/15946) Preserve empty and whitespace-only Skill resource files when reading versions and downloading packages.
- [#15949](https://github.com/alibaba/nacos/issues/15949) Keep Skill descriptions consistent with the displayed version across draft edits and lifecycle transitions, and retain the correct description when the last online version goes offline.
- [#15953](https://github.com/alibaba/nacos/issues/15953) Keep Publish and Cancel actions visible on Config creation and edit pages, and eliminate nested scrolling on Config and history detail pages in Console UI Next.

## Dependencies

- [#14944](https://github.com/alibaba/nacos/issues/14944) Upgrade Spring Boot from 3.5.14 to 4.0.6.
- [#15470](https://github.com/alibaba/nacos/issues/15470) Upgrade SOFA JRaft to 1.4.1 while preserving callback cache behavior and JRaft authentication.
- [#15584](https://github.com/alibaba/nacos/issues/15584) Upgrade Maven Compiler Plugin from 3.5.1 to 3.15.0 for JDK 25 build compatibility.
- [#15645](https://github.com/alibaba/nacos/pull/15645)[#15834](https://github.com/alibaba/nacos/pull/15834)[#15944](https://github.com/alibaba/nacos/pull/15944) Update legacy and next Console dependencies, refresh packaged assets, and upgrade the bundled DOMPurify sanitizer to 3.4.17.
- [#15707](https://github.com/alibaba/nacos/pull/15707) Upgrade Log4j API from 2.25.4 to 2.25.5.
- [#15767](https://github.com/alibaba/nacos/issues/15767) Upgrade gRPC to 1.81.0 to address CVE-2026-33871.
- [#15796](https://github.com/alibaba/nacos/issues/15796) Upgrade Apache Derby from 10.14.2.0 to 10.16.1.1, align split artifacts, and retain the Java 17 baseline.
- [#15878](https://github.com/alibaba/nacos/issues/15878) Upgrade AgentScope Java from 1.0.7 to 2.0.3 in Copilot.

---

## Breaking Change Notice

Nacos 3.3.0 changes authentication defaults, disables selected deprecated APIs, and introduces migration requirements. Applications using the new Agent SDK from BETA or RC also need to review the finalized subscription contract.

Affected users:

- Applications relying on Client APIs without credentials or on deprecated Pipeline and MCP import endpoints.
- Deployments with legacy Config data, historical AI storage keys, untagged Raft logs, or A2A/MCP resources requiring migration.
- Applications relying on built-in Prometheus client metrics or implicit AI resource visibility defaults.
- BETA/RC adopters using RAD subscriptions or remotely accessing the optional DNS server.

Recommended upgrade path:

- **Prepare Client API credentials.** An absent `nacos.core.auth.enabled` now means `true`. Existing explicit `false` settings remain effective. If necessary, keep authentication explicitly disabled during credential provisioning, then enable it consistently across the cluster after verifying client access. Admin and Console authentication defaults are unchanged.
- **Migrate deprecated AI API calls.** Selected legacy Pipeline and Console MCP import endpoints return HTTP `410` with `API_DEPRECATED` by default. Use the Pipeline `/list` and `/detail` endpoints and unified `/v3/console/ai/import/validate` and `/execute` endpoints. `nacos.core.api.compatibility.enabled=true` temporarily reopens the selected endpoints; `nacos.ai.resource.import.legacy-mcp-api-enabled` is no longer recognized.
- **Complete legacy Config migrations.** Upgrade pre-3.0 deployments through an earlier Nacos 3.x version. Migrate default-namespace data from the empty tenant to `public`, and legacy beta/tag data to `config_info_gray`. For the `nacos_config` AI storage provider, explicitly migrate affected historical non-ASCII or overlength Config coordinates to the deterministic ASCII-safe mapping.
- **Check persisted Raft logs.** Nacos 3.3 no longer replays untagged entries, including entries originally written by Nacos 2.0.x and retained through intermediate upgrades. Recover and migrate those logs or snapshots with a compatible version before upgrading; changing the running version alone does not convert persisted logs.
- **Plan historical A2A and MCP migration.** The default `nacos.ai.a2a.compatibility.mode=CANONICAL` does not scan historical A2A data. Follow the [A2A upgrade runbook](https://github.com/alibaba/nacos/blob/043954fdf52bceaf1be2d14b04072010220ceed3/specs/en/ai/a2a-upgrade-migration-spec.md#9-upgrade-runbook) for `AUTO` migration and early-3.3 preflight. After permanent canonical cutover, legacy-only servers must not rejoin. Preserve MCP reconciliation state and its existing Config/Naming serving data during the one-way lifecycle transition.
- **Keep cluster server identities consistent.** Native JRaft authentication becomes enforced after all members advertise support, and enforcement persists across restarts. Rolling downgrades to members without JRaft credential support are not guaranteed to remain available.
- **Update BETA/RC Agent SDK consumers.** The new RAD `subscribeAgent` methods now return `void`. Receive both initial state and subsequent updates through the Listener, prepare Listener state before subscribing, and recompile dependent applications. Legacy A2A signatures and HTTP/gRPC wire contracts remain unchanged.
- **Configure client metrics explicitly.** `nacos-client` no longer includes a mandatory Prometheus client dependency. Install an implementation of `NacosClientMetricsProvider` when metrics are required; without one, recording is a no-op even when `enableClientMetrics` is enabled.
- **Review MCP import and visibility settings.** Private or local MCP import targets require `nacos.console.ai.mcp.import.allowed-private-addresses`, and redirects are not followed. The built-in visibility plugin defaults newly created Agent and MCP resources to `PUBLIC`; explicitly choose a private scope where required. Existing stored scopes and Prompt/Skill defaults are unchanged.
- **Review DNS listener configuration.** DNS remains optional and disabled by default. When enabled, `nacos.naming.dns.bind-address` defaults to `127.0.0.1`; configure the intended listening address for remote clients. External forwarding requires separate explicit configuration.
- **Refresh affected Skill metadata.** Historical Skill descriptors without parsed frontmatter retain their existing metadata; this release does not automatically read their packages or backfill missing metadata. Update the content or re-upload affected Skills to regenerate frontmatter and correct previously stored multiline descriptions.
- **Back up and rehearse the upgrade.** Back up the database and persisted server data, then verify authentication, data migration, discovery, and client behavior in staging. Embedded Derby is upgraded to 10.16.1.1, so include persisted-data reads, subsequent writes, and restart recovery in upgrade validation.

Deployments without the affected historical data do not require those data migrations. The authentication defaults and any applicable API or SDK changes still need review.

---

## Java Version Requirements

| Module | Java Required |
|--------|--------------|
| Nacos-Server / Nacos-Console | Java 17 |
| Nacos-Client | Java 8 |
| Nacos-Maintainer-Client | Java 8 |

---

## New Contributors
* @lzcGeek made their first contribution in https://github.com/alibaba/nacos/pull/15874
* @FOWEPJF255 made their first contribution in https://github.com/alibaba/nacos/pull/15916
* @bespaltovyj made their first contribution in https://github.com/alibaba/nacos/pull/15938
* @soeben made their first contribution in https://github.com/alibaba/nacos/pull/15940
* @Lyin-OTTF made their first contribution in https://github.com/alibaba/nacos/pull/15941
* @AsyncKurisu made their first contribution in https://github.com/alibaba/nacos/pull/15919
* @georgeatparallel made their first contribution in https://github.com/alibaba/nacos/pull/15926

**Full Changelog**: https://github.com/alibaba/nacos/compare/3.3.0-RC...3.3.0

---

> **Source** [alibaba/nacos](https://github.com/alibaba/nacos) · `3.3.0` · 2026-10-29 · [upstream release](https://github.com/alibaba/nacos/releases/tag/3.3.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
