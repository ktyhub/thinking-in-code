---
title: "netdata v2.10.4"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.10.4"
published: "2026-07-15"
type: "patch"
lang: "en"
summary: "Netdata v2.10.4 is a patch release to address issues discovered since v2.10.3."
---

# netdata v2.10.4

# Release notes

Netdata v2.10.4 is a patch release to address issues discovered since [v2.10.3](https://github.com/netdata/netdata/releases/tag/v2.10.3).

This is a larger-than-usual patch release focused on stability, memory safety, and crash resilience across the database engine, streaming, Cloud connectivity, and collectors. It also backports the new macOS hardware sensor collectors to the 2.10.x line.

## New in this release

- macOS hardware sensor collectors: GPU power, clock, and temperatures, SMC and IOHID sensors and fans, power sources and thermal pressure, NVMe SMART, with a `powermetrics` fallback via `ndsudo`, plus a cross-OS `sensors` function and a shared temperature-histogram context ([#22475](https://github.com/netdata/netdata/pull/22475), [#23085](https://github.com/netdata/netdata/pull/23085), [@ktsaou](https://github.com/ktsaou))
- Bounded-cardinality process grouping for `apps.plugin` on macOS, keeping per-process monitoring meaningful on hosts with high process churn ([#23085](https://github.com/netdata/netdata/pull/23085), [@ktsaou](https://github.com/ktsaou))

## Database engine and metadata

- Hardened DBENGINE against corrupted or truncated data files: extent disk-size and uncompressed-page-bounds validation, SIGBUS protection and header-offset bounds checks on v2 journal walks, improved journal file access error handling, and spinlock-holder identification for datafile/journal deadlock diagnostics ([#22324](https://github.com/netdata/netdata/pull/22324), [#22514](https://github.com/netdata/netdata/pull/22514), [#22310](https://github.com/netdata/netdata/pull/22310), [#22725](https://github.com/netdata/netdata/pull/22725), [@stelfrag](https://github.com/stelfrag); [#22666](https://github.com/netdata/netdata/pull/22666), [@jmestwa-coder](https://github.com/jmestwa-coder))
- Fixed page-cache races in `pgc_page_add` and `pgc_queue_del`, a deadlock on dimension creation, and a crash on virtual node takeover ([#22466](https://github.com/netdata/netdata/pull/22466), [#22400](https://github.com/netdata/netdata/pull/22400), [#22417](https://github.com/netdata/netdata/pull/22417), [@stelfrag](https://github.com/stelfrag))
- Validated data loaded from SQLite to prevent crashes on corrupted databases, and improved UUID handling and error reporting in SQLite functions ([#22679](https://github.com/netdata/netdata/pull/22679), [#22233](https://github.com/netdata/netdata/pull/22233), [@stelfrag](https://github.com/stelfrag))
- Kept chart indexes allocated while a host is archived and guarded against a null root index in chart lookups, avoiding null dereferences during queries ([#23074](https://github.com/netdata/netdata/pull/23074), [#23056](https://github.com/netdata/netdata/pull/23056), [@stelfrag](https://github.com/stelfrag))
- Fixed an rrdcontext metadata leak on non-dbengine hosts ([#22438](https://github.com/netdata/netdata/pull/22438), [@stelfrag](https://github.com/stelfrag))
- Rotated the active datafile and requeued the pending extent on unrecoverable write errors, so a failing disk no longer stalls the database engine ([#23048](https://github.com/netdata/netdata/pull/23048), [@ktsaou](https://github.com/ktsaou))

## Streaming and replication

- Tracked and accounted memory allocation size in replication queries, and fixed a sender replication counter leak on obsolete charts ([#22756](https://github.com/netdata/netdata/pull/22756), [#22428](https://github.com/netdata/netdata/pull/22428), [@stelfrag](https://github.com/stelfrag))
- Rejected oversized ZSTD frames and handled decompression errors gracefully (log and fail the connection instead of `fatal()`) ([#22830](https://github.com/netdata/netdata/pull/22830), [@stelfrag](https://github.com/stelfrag))
- Fixed the streaming receiver discarding already-delivered data when a child disconnects ([#23118](https://github.com/netdata/netdata/pull/23118), [@ktsaou](https://github.com/ktsaou))

## Cloud connectivity (ACLK)

- Prevented rare unbounded one-core CPU spins in the cloud-connection loops, and avoided returning an uninitialized `packet_id` on publish failure ([#22879](https://github.com/netdata/netdata/pull/22879), [@ktsaou](https://github.com/ktsaou); [#22504](https://github.com/netdata/netdata/pull/22504), [@stelfrag](https://github.com/stelfrag))

## Alerts and machine learning

- Bounded the alert notification execution wait so a stuck notification script cannot block progress, and fixed a shutdown race when restoring alert information from the database ([#22626](https://github.com/netdata/netdata/pull/22626), [#22448](https://github.com/netdata/netdata/pull/22448), [@stelfrag](https://github.com/stelfrag))
- Added safeguards against ML database corruption and streamlined the recovery process ([#22478](https://github.com/netdata/netdata/pull/22478), [@stelfrag](https://github.com/stelfrag))

## Collectors

- Fixed `systemd-journal.plugin` memory retention after queries and its `apps.plugin` accounting ([#23089](https://github.com/netdata/netdata/pull/23089), [@ktsaou](https://github.com/ktsaou))
- Fixed file descriptor accounting in `apps.plugin` (adding `nfds` monitoring) and eBPF FD PID map iteration ([#22447](https://github.com/netdata/netdata/pull/22447), [@arch-yunus](https://github.com/arch-yunus); [#22436](https://github.com/netdata/netdata/pull/22436), [@stelfrag](https://github.com/stelfrag))
- Fixed buffer overflows and counter-size issues in platform collectors: a stack buffer overflow in macOS `mach_smi`, FreeBSD counter size mismatches and an off-by-one in `freebsd_ipfw` and the claim code, and a `freeipmi.plugin` watchdog underflow at low system uptime ([#22553](https://github.com/netdata/netdata/pull/22553), [@artem](https://github.com/artem); [#23044](https://github.com/netdata/netdata/pull/23044), [@DavidMarec](https://github.com/DavidMarec); [#22710](https://github.com/netdata/netdata/pull/22710), [@vkalintiris](https://github.com/vkalintiris); [#22490](https://github.com/netdata/netdata/pull/22490), [@ktsaou](https://github.com/ktsaou))
- Fixed Windows Events row rendering crashes with stricter size checks, safer XML parsing, and robust variant handling ([#22872](https://github.com/netdata/netdata/pull/22872), [@ktsaou](https://github.com/ktsaou))
- Restored stable temperature and power collection in `go.d/nvidia_smi` with NVIDIA driver 580 XML output variants ([#23047](https://github.com/netdata/netdata/pull/23047), [@copilot-swe-agent](https://github.com/copilot-swe-agent))
- Fixed Windows hardware detection so virtual machines are no longer reported as bare metal ([#22942](https://github.com/netdata/netdata/pull/22942), [@thiagoftsm](https://github.com/thiagoftsm))
- Moved the fail2ban socket path into `ndsudo` for `go.d/fail2ban` ([#22745](https://github.com/netdata/netdata/pull/22745), [@ilyam8](https://github.com/ilyam8))
- Fixed a pluginsd cleanup race with an active collector, added a slot bounds check to the pluginsd parser, and initialized mountpoint state before the slow worker in the diskspace plugin ([#22207](https://github.com/netdata/netdata/pull/22207), [#22598](https://github.com/netdata/netdata/pull/22598), [#22298](https://github.com/netdata/netdata/pull/22298), [@stelfrag](https://github.com/stelfrag))

## Security and API

- The `/api/v3/settings` endpoint is now gated behind `HTTP_ACL_DASHBOARD` instead of `HTTP_ACL_NOCHECK`, enforcing connection allowlists and blocking anonymous state-changing requests ([#22896](https://github.com/netdata/netdata/pull/22896), [@stelfrag](https://github.com/stelfrag))
- Fixed the `csvjsonarray` output format emitting invalid JSON when `label-quotes` is passed ([#23115](https://github.com/netdata/netdata/pull/23115), [@ktsaou](https://github.com/ktsaou))

## Core stability and memory safety

- Fixed internal race conditions: a TOCTOU race in `dictionary_destroy()`, ARAL allocator races and a double-free ([#22108](https://github.com/netdata/netdata/pull/22108), [#22212](https://github.com/netdata/netdata/pull/22212), [#22294](https://github.com/netdata/netdata/pull/22294), [#22367](https://github.com/netdata/netdata/pull/22367), [@stelfrag](https://github.com/stelfrag))
- Fixed a payload memory leak, JSON object validation and null-key handling, an inverted empty-buffer guard in `simple_pattern`, and prevented a concurrent fatal from masking the first one ([#22492](https://github.com/netdata/netdata/pull/22492), [#22309](https://github.com/netdata/netdata/pull/22309), [#22326](https://github.com/netdata/netdata/pull/22326), [#22671](https://github.com/netdata/netdata/pull/22671), [@stelfrag](https://github.com/stelfrag); [#22688](https://github.com/netdata/netdata/pull/22688), [@vkalintiris](https://github.com/vkalintiris))
- Fixed memory-safety and correctness bugs surfaced by Coverity and Sonar audits ([#22266](https://github.com/netdata/netdata/pull/22266), [#22267](https://github.com/netdata/netdata/pull/22267), [#22268](https://github.com/netdata/netdata/pull/22268), [#22270](https://github.com/netdata/netdata/pull/22270), [#22279](https://github.com/netdata/netdata/pull/22279), [#22281](https://github.com/netdata/netdata/pull/22281), [#22329](https://github.com/netdata/netdata/pull/22329), [#22330](https://github.com/netdata/netdata/pull/22330), [#22331](https://github.com/netdata/netdata/pull/22331), [#22332](https://github.com/netdata/netdata/pull/22332), [#22333](https://github.com/netdata/netdata/pull/22333), [#22334](https://github.com/netdata/netdata/pull/22334), [#22335](https://github.com/netdata/netdata/pull/22335), [#22336](https://github.com/netdata/netdata/pull/22336), [#22338](https://github.com/netdata/netdata/pull/22338), [#22339](https://github.com/netdata/netdata/pull/22339), [#22340](https://github.com/netdata/netdata/pull/22340), [#22835](https://github.com/netdata/netdata/pull/22835), [@stelfrag](https://github.com/stelfrag); [#22293](https://github.com/netdata/netdata/pull/22293), [@ktsaou](https://github.com/ktsaou))
- Improved shutdown robustness: fixed a SIGSEGV in `ctx_hosts_load` and pipe cleanup handling of the ENOENT case ([#22419](https://github.com/netdata/netdata/pull/22419), [#22509](https://github.com/netdata/netdata/pull/22509), [@stelfrag](https://github.com/stelfrag))

## Installation and packaging

- Windows: fixed MSI installer issues, adjusted the installer to run claiming only when both the token and rooms are provided (with safer wide-character handling and a capped HTTP claim response size), and fixed the search for Visual Studio tooling to check for multiple versions ([#22751](https://github.com/netdata/netdata/pull/22751), [#22754](https://github.com/netdata/netdata/pull/22754), [@thiagoftsm](https://github.com/thiagoftsm); [#22723](https://github.com/netdata/netdata/pull/22723), [@Ferroin](https://github.com/Ferroin))
- Improved error handling in `netdata-updater` when fetching files and silenced `curl` output ([#22422](https://github.com/netdata/netdata/pull/22422), [@Ferroin](https://github.com/Ferroin); [#22639](https://github.com/netdata/netdata/pull/22639), [@AJCxZ0](https://github.com/AJCxZ0))

## Support options <a id="v2104-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Make use of the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.10.4` · 2026-07-15 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.10.4)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
