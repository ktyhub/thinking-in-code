---
title: "netdata v2.11.1"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.11.1"
published: "2026-09-16"
type: "patch"
lang: "en"
summary: "Netdata v2.11.1 is a patch release to address issues discovered since v2.11.0."
---

# netdata v2.11.1

# Release notes

Netdata v2.11.1 is a patch release to address issues discovered since [v2.11.0](https://github.com/netdata/netdata/releases/tag/v2.11.0).

This is a larger-than-usual patch release focused on query correctness, database engine stability, Cloud connectivity robustness, health/alert efficiency, and shutdown and process-lifetime safety, along with a number of collector and platform fixes, including broader SQL Server coverage and Windows CPU and disk improvements.

## Query engine

- Preserved exact SUM values when a stored point spans result rows or an automatic storage-tier boundary, and preserved incremental-sum baselines so buckets holding only an opening sample no longer produce empty queries ([#23512](https://github.com/netdata/netdata/pull/23512), [#23505](https://github.com/netdata/netdata/pull/23505), [@ktsaou](https://github.com/ktsaou))
- Kept API timestamps independent of each Agent's retention, so the same explicit or relative request returns the same row timestamps across Agents ([#23507](https://github.com/netdata/netdata/pull/23507), [@ktsaou](https://github.com/ktsaou))
- Attributed tier-0 RESET and anomaly evidence to the result row that actually contains the source sample, and fixed anomaly-rate contributor counts in two-pass group-by queries ([#23504](https://github.com/netdata/netdata/pull/23504), [#23508](https://github.com/netdata/netdata/pull/23508), [@ktsaou](https://github.com/ktsaou))
- Applied `options=absolute` to points fetched from the incoming tier during a plan switch, so a negative value can no longer cross a tier transition unchanged ([#23503](https://github.com/netdata/netdata/pull/23503), [@ktsaou](https://github.com/ktsaou))
- Fixed a logical operator in the JSON wrapper so unqueried dimensions are excluded as expected unless all dimensions are requested ([#23639](https://github.com/netdata/netdata/pull/23639), [@stelfrag](https://github.com/stelfrag))

## Database engine

- Fixed a use-after-free and a fatal in merged extent queries by acquiring page-cache references before publishing page details and synchronizing merged extent query teardown under the extent spinlock ([#23475](https://github.com/netdata/netdata/pull/23475), [#23521](https://github.com/netdata/netdata/pull/23521), [@stelfrag](https://github.com/stelfrag))
- Fixed a double free of stale MRG metrics during journal v2 migration, and an empty flush-batch counter leak that could leave shutdown or datafile rotation waiting indefinitely ([#23560](https://github.com/netdata/netdata/pull/23560), [#23699](https://github.com/netdata/netdata/pull/23699), [@stelfrag](https://github.com/stelfrag))
- Prevented negative and epoch-based tier retention reporting: no 32-bit truncation when formatting durations, unknown or zero start times treated as unavailable, empty journals ignored, and extrapolated retention capped ([#23648](https://github.com/netdata/netdata/pull/23648), [@stelfrag](https://github.com/stelfrag))
- Accepted valid page cadences longer than one day instead of treating them as invalid and emitting false repair telemetry ([#23514](https://github.com/netdata/netdata/pull/23514), [@ktsaou](https://github.com/ktsaou))
- Avoided UUID map create/free churn and partition write-lock contention during MRG metric lookups, and included full cache and page identity in PGC fatal messages to make cache issues diagnosable ([#23538](https://github.com/netdata/netdata/pull/23538), [#23522](https://github.com/netdata/netdata/pull/23522), [@stelfrag](https://github.com/stelfrag))
- Updated the bundled SQLite to 3.53.4 ([#23511](https://github.com/netdata/netdata/pull/23511), [@stelfrag](https://github.com/stelfrag))
- Repaired the `-W createdataset` and dbengine stress-test workloads, which crashed on a NULL labels allocator, stamped every generated sample with the wall clock instead of the requested time range, and double-freed state at host teardown ([#23758](https://github.com/netdata/netdata/pull/23758), [@stelfrag](https://github.com/stelfrag))

## Cloud connectivity (ACLK)

- Added TLS hostname and IP verification for ACLK HTTPS requests, while preserving insecure-mode behavior ([#23463](https://github.com/netdata/netdata/pull/23463), [@stelfrag](https://github.com/stelfrag))
- Stopped reporting waived self-signed certificates as certificate verification failures in insecure mode, so later I/O or HTTP errors are reported for what they are ([#23732](https://github.com/netdata/netdata/pull/23732), [@stelfrag](https://github.com/stelfrag))
- Switched the HTTPS and MQTT clients to monotonic, microsecond-based timeouts with an I/O progress watchdog, and bounded pre-CONNACK polling to one second so a quiet peer can no longer delay shutdown by up to 60 seconds ([#23105](https://github.com/netdata/netdata/pull/23105), [#23733](https://github.com/netdata/netdata/pull/23733), [@stelfrag](https://github.com/stelfrag))
- Stopped counting missing MQTT PUBACKs as successful acknowledgements, tracking them with a dedicated timeout counter that is now preserved across disconnects without touching a freed client ([#23486](https://github.com/netdata/netdata/pull/23486), [#23734](https://github.com/netdata/netdata/pull/23734), [@stelfrag](https://github.com/stelfrag))
- Preserved pooled response buffers and their metadata for compressed ACLK responses, and fixed WebSocket masking of payloads spanning ring-buffer boundaries ([#23485](https://github.com/netdata/netdata/pull/23485), [@stelfrag](https://github.com/stelfrag))

## Health and alerts

- Fixed the Windows `10min_cpu_usage` alert attaching to `service.*_cpu_utilization` charts and firing false CRITICAL alarms ([#23559](https://github.com/netdata/netdata/pull/23559), [@thiagoftsm](https://github.com/thiagoftsm))
- Indexed alerts by name per host, replacing full-host alert scans during health-variable resolution ([#23554](https://github.com/netdata/netdata/pull/23554), [@stelfrag](https://github.com/stelfrag))
- Avoided re-initializing alert prototypes when chart metadata has not changed, so continuous child-chart re-registrations no longer trigger repeated health re-evaluation ([#23515](https://github.com/netdata/netdata/pull/23515), [@stelfrag](https://github.com/stelfrag))
- Built raised-alert summaries only when a notification is actually sent, avoiding per-iteration work and a potential lock-order deadlock with chart removal ([#23544](https://github.com/netdata/netdata/pull/23544), [@stelfrag](https://github.com/stelfrag))
- Fixed an incorrect error check on SQL statement preparation in the health database code, and removed two unused `health_log_detail` indexes to reduce parent database storage and B-tree maintenance ([#23545](https://github.com/netdata/netdata/pull/23545), [#23722](https://github.com/netdata/netdata/pull/23722), [@stelfrag](https://github.com/stelfrag))

## Metadata, labels and internals

- Deferred dictionary destruction while dictionary APIs are in flight, making set/get/delete and traversal safe against concurrent destruction during shutdown ([#23634](https://github.com/netdata/netdata/pull/23634), [@stelfrag](https://github.com/stelfrag))
- Fixed a use-after-free in dictionary garbage collection when a delete callback re-entered the collector and freed the cached successor mid-walk, and stopped view collections leaving master-deleted items behind ([#23819](https://github.com/netdata/netdata/pull/23819), [@stelfrag](https://github.com/stelfrag))
- Stopped the obsolete-chart reaper from freeing a chart another subsystem still references, which left an unindexed chart holding its destroy lock and could fatal a collector still writing to it ([#23761](https://github.com/netdata/netdata/pull/23761), [@stelfrag](https://github.com/stelfrag))
- Deferred machine-learning worker queue teardown until after all collectors have stopped, so a collector that outlives the shutdown deadline can no longer abort on a destroyed queue mutex ([#23757](https://github.com/netdata/netdata/pull/23757), [@stelfrag](https://github.com/stelfrag))
- Reset and unblocked SIGPIPE in spawned children, so a child whose pipes are closed exits instead of surviving on `EPIPE` — which had stranded hundreds of `powermetrics` processes on macOS — reported failed signal delivery instead of dropping it silently, and made the spawn-server regression tests deterministic ([#23751](https://github.com/netdata/netdata/pull/23751), [#23815](https://github.com/netdata/netdata/pull/23815), [@stelfrag](https://github.com/stelfrag))
- Probed for KSM support before enabling page deduplication instead of assuming it, so unsupported kernels no longer report KSM errors, and limited KSM marking to the dbengine page pools that can actually merge ([#23822](https://github.com/netdata/netdata/pull/23822), [@stelfrag](https://github.com/stelfrag))
- Skipped sanitizing and re-interning unchanged chart metadata on repeated chart registration, and incremented the label version only on actual label mutations ([#23603](https://github.com/netdata/netdata/pull/23603), [#23513](https://github.com/netdata/netdata/pull/23513), [@stelfrag](https://github.com/stelfrag))
- Fixed a text-buffer cleanup issue and a dyncfg tree sizing race during concurrent configuration updates ([#23657](https://github.com/netdata/netdata/pull/23657), [@stelfrag](https://github.com/stelfrag))
- Replaced `sprintf()` with bounded `snprintfz()` in inicfg numeric formatting, and replaced dynamic `/proc/net/dev` path format strings with literal ones ([#23638](https://github.com/netdata/netdata/pull/23638), [#23450](https://github.com/netdata/netdata/pull/23450), [@stelfrag](https://github.com/stelfrag))
- Reduced pulse overhead by running `mallinfo2()` collection on a configurable, pulse-aligned interval, stamping it after completion so a slow call cannot monopolize the duty cycle, and stopped redundant pulse chart metadata version bumps ([#23579](https://github.com/netdata/netdata/pull/23579), [#23736](https://github.com/netdata/netdata/pull/23736), [#23650](https://github.com/netdata/netdata/pull/23650), [@stelfrag](https://github.com/stelfrag))
- Removed a per-chart label probe from the pulse child charts, relying on the host label-version compare instead; on a parent with 808 children the probe accounted for about 23% of the main pulse thread and left gaps in the `netdata.*` charts it emits ([#23760](https://github.com/netdata/netdata/pull/23760), [@stelfrag](https://github.com/stelfrag))
- Silenced a Coverity finding and corrected stale comments and unit-test diagnostics, including documenting health-initialization flag behavior while a child is disconnected ([#23553](https://github.com/netdata/netdata/pull/23553), [#23737](https://github.com/netdata/netdata/pull/23737), [#23541](https://github.com/netdata/netdata/pull/23541), [@stelfrag](https://github.com/stelfrag))

## Collectors and exporting

- Fixed `/proc/interrupts` parsing when the first counter is glued to the interrupt ID, which could push changing counter values into dimension IDs and cause unbounded dimension growth ([#23651](https://github.com/netdata/netdata/pull/23651), [@stelfrag](https://github.com/stelfrag))
- Bounded socket collection to one verified attempt per network namespace, so helper failures no longer trigger repeated collection attempts for every socket record ([#23778](https://github.com/netdata/netdata/pull/23778), [@ktsaou](https://github.com/ktsaou))
- Stopped the go.d UPS collector embedding the full command in connection errors, which logged the `PASSWORD` credential in clear text; only `USERNAME` and `PASSWORD` arguments are redacted, so other commands stay diagnosable ([#23782](https://github.com/netdata/netdata/pull/23782), [@stelfrag](https://github.com/stelfrag))
- Saturated SQL `COUNT` results in the ibm.d AS/400 collector before narrowing them to `int`, so an out-of-range count can no longer wrap negative and silently change the cardinality limits ([#23783](https://github.com/netdata/netdata/pull/23783), [@stelfrag](https://github.com/stelfrag))
- Corrected the MikroTik gauge transform in the go.d SNMP collector, and removed unaligned atomics from the go.d chart engine ([#23525](https://github.com/netdata/netdata/pull/23525), [#23540](https://github.com/netdata/netdata/pull/23540), [@ilyam8](https://github.com/ilyam8))
- Preserved valid punctuation in OpenTSDB telnet hostnames and metric prefixes, while still replacing whitespace, control characters, and delimiters that would corrupt telnet records ([#23749](https://github.com/netdata/netdata/pull/23749), [@stelfrag](https://github.com/stelfrag))
- Fixed the `charts.d.plugin` disabled-chart message pointing to `charts.d.plugin.conf` instead of the actual `charts.d.conf` ([#23662](https://github.com/netdata/netdata/pull/23662), [@ilyam8](https://github.com/ilyam8))
- SQL Server: added a plan-cache fallback (`sys.dm_exec_query_stats`) for `top-queries` when Query Store is unavailable or disabled, and fell back to the built-in `system_health` session for `error-info` when no dedicated Extended Events session is configured ([#23748](https://github.com/netdata/netdata/pull/23748), [@thiagoftsm](https://github.com/thiagoftsm))
- SQL Server: hardened the function queries across editions, probing engine edition and version once per instance and routing server-scoped versus database-scoped queries accordingly, so `top-queries`, `deadlock-info` and `error-info` work on Azure SQL Database and Managed Instance as well as on-premises SQL Server ([#23564](https://github.com/netdata/netdata/pull/23564), [@ilyam8](https://github.com/ilyam8))
- SQL Server: fixed the deadlock and error-info queries on SQL Server 2014 and older, detecting Query Store by catalog column instead of product version, and reading the event_file path from the session catalog instead of assuming it matches the session name ([#23460](https://github.com/netdata/netdata/pull/23460), [@thiagoftsm](https://github.com/thiagoftsm))
- SQL Server: excluded disabled SQL Agent jobs from collection by default (set `collect_disabled_jobs: true` to keep them) and gated the job alerts on the job being enabled, so a disabled job's last failed run no longer keeps an alert raised ([#23645](https://github.com/netdata/netdata/pull/23645), [@ilyam8](https://github.com/ilyam8))
- Windows: collected CPU metrics from the `Processor Information` performance object, mapping its `NumaNode,NumaIndex` instances to logical CPUs via the processor topology, so hosts with more than 64 logical processors are reported correctly; the legacy `Processor` object is still used where `Processor Information` is unavailable ([#23549](https://github.com/netdata/netdata/pull/23549), [@thiagoftsm](https://github.com/thiagoftsm))
- Windows: added `exclude space metrics on paths` under `[plugin:windows:PerflibStorage]` to keep unwanted logical volumes (such as temporary backup mounts) out of disk space collection, added a volume `serial_number` label, and corrected the misspelled `driver_type` label to `drive_type` ([#23660](https://github.com/netdata/netdata/pull/23660), [@thiagoftsm](https://github.com/thiagoftsm))

## Installation and packaging

- Windows: fixed claiming when only a token is provided, and marked the claim token and proxy as hidden MSI properties so they no longer appear in verbose installer logs ([#23547](https://github.com/netdata/netdata/pull/23547), [@thiagoftsm](https://github.com/thiagoftsm); [#23735](https://github.com/netdata/netdata/pull/23735), [@stelfrag](https://github.com/stelfrag))
- Restricted the eBPF plugin to 64-bit userlands and resolved the Go toolchain from the userland machine type rather than the kernel architecture ([#23446](https://github.com/netdata/netdata/pull/23446), [@stelfrag](https://github.com/stelfrag))
- macOS: resolved the IOKit APIs dynamically instead of linking them directly, restoring builds against older macOS SDKs ([#23421](https://github.com/netdata/netdata/pull/23421), [@stelfrag](https://github.com/stelfrag))

## Support options <a id="v2111-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Make use of the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.11.1` · 2026-09-16 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.11.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
