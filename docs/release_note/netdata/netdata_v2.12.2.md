---
title: "netdata v2.12.2"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.12.2"
published: "2026-10-23"
type: "patch"
lang: "en"
summary: "Netdata v2.12.2 is a patch release to address issues discovered since v2.12.1."
---

# netdata v2.12.2

Netdata v2.12.2 is a patch release to address issues discovered since [v2.12.1](https://github.com/netdata/netdata/releases/tag/v2.12.1).

This release tightens SNMPv3 authentication in the SNMP traps receiver, stops alert evaluation from keeping obsolete charts alive indefinitely, makes Cloud reliably see disconnected children as offline and receive every alert transition, restores the intended backoff when the Agent reconnects to Cloud, requires Function and dynamic configuration requests to carry strict JSON, keeps external plugins running after a single malformed line of output, keeps Kubernetes state charts and their alerts from disappearing when a similarly named object is deleted, makes long-range queries return data from newer tiers after a gap in older ones, and fixes static 64-bit ARM builds that could crash at startup on Cortex-A53 boards such as the Raspberry Pi 3.

## Streaming and Netdata Cloud

- Fixed a race where a child that disconnected from its Parent could stay live in Netdata Cloud. The node state update was scheduled before the child was marked offline, so under CPU contention the offline state was sometimes never sent ([#24285](https://github.com/netdata/netdata/pull/24285), [@stelfrag](https://github.com/stelfrag))
- A Parent now waits 125% of a disconnected child's expected reboot time, capped at 30 seconds, before reporting it offline to Netdata Cloud. Integer arithmetic had reduced the margin to 100%. A child with no recorded reboot time no longer schedules a zero-delay timer, which can cause high CPU usage with older libuv versions ([#24343](https://github.com/netdata/netdata/pull/24343), [@stelfrag](https://github.com/stelfrag))
- Fixed alert transitions being lost on the way to Netdata Cloud. A message the MQTT layer refused, for example while offline or with a full buffer, was treated as delivered and removed from the queue; it is now retried. The alert snapshot also could announce more chunks than it sent, and is now built from a single consistent query and sent only after a successful rebuild ([#24224](https://github.com/netdata/netdata/pull/24224), [@stelfrag](https://github.com/stelfrag))
- Fixed the reconnect backoff to Netdata Cloud. Once the backoff reached its cap, the clamp was returned in seconds but slept as milliseconds, so a disconnected Agent retried about once per second instead of waiting up to the intended maximum (currently 20 minutes) ([#24340](https://github.com/netdata/netdata/pull/24340), [@stelfrag](https://github.com/stelfrag))
- Fixed the Cloud connection handing out MQTT packet id 1 twice when the packet id counter wrapped around. Two messages in flight with the same id lose their acknowledgement and timeout tracking ([#24341](https://github.com/netdata/netdata/pull/24341), [@stelfrag](https://github.com/stelfrag))
- Fixed the `t-rx` timestamp in the Agent's HTTP replies to Netdata Cloud, which had been sent as 0 since v2.0.0 instead of the time the request was received ([#24252](https://github.com/netdata/netdata/pull/24252), [@stelfrag](https://github.com/stelfrag))

## Health

- Fixed alert evaluation keeping obsolete charts alive. Every evaluation pass refreshed the chart's last-access time, so an obsolete chart with an alert attached was never old enough to be cleaned up. On Kubernetes nodes with pod churn this kept growing the number of `k8s.cgroup` charts, and the metadata on Parents along with it ([#24273](https://github.com/netdata/netdata/pull/24273), [@stelfrag](https://github.com/stelfrag))
- Fixed several health persistence bugs: a prepared statement leaked on every alert transition on hosts without an ACLK configuration, 64-bit event ids were bound as 32-bit values, and the next alarm event id fell back to 0 instead of the alarm id when there were no detail rows ([#24223](https://github.com/netdata/netdata/pull/24223), [@stelfrag](https://github.com/stelfrag))

## Database

- Fixed metadata cleanup passes that could stall. A dimension, chart or label cleanup pass never completed if the first row of its snapshot was deleted before being read, and an interrupted context cleanup dropped the context from its queue, leaving the rest of its dimensions unchecked. Failed chart label stores are now retried, and the WAL size is checked far less often during cleanup ([#24227](https://github.com/netdata/netdata/pull/24227), [@stelfrag](https://github.com/stelfrag))
- Fixed a deadlock when freeing a dictionary whose delete callback destroys a nested dictionary that still has referenced items. Tier backfill could reach it when a chart of a removed host was freed while one of its dimensions was still referenced ([#24344](https://github.com/netdata/netdata/pull/24344), [@stelfrag](https://github.com/stelfrag))
- `dbengine`: corrupted gorilla-compressed pages whose length is not a multiple of the buffer size are now rejected instead of being read past the end of their allocation ([#24310](https://github.com/netdata/netdata/pull/24310), [@ArjunD3456](https://github.com/ArjunD3456))
- Fixed completed points of higher tiers staying invisible to queries for a full extra tier period. They were published only when a collection landed exactly on a tier boundary, which slow or offset collectors can miss every time; overdue points are now published on the next collected sample ([#24405](https://github.com/netdata/netdata/pull/24405), [@ktsaou](https://github.com/ktsaou))
- `dbengine`: gaps of a single second are now cached like longer ones, so repeated queries over them no longer search the journals again, and a cached gap no longer overlaps the first point of the page that follows it ([#24370](https://github.com/netdata/netdata/pull/24370), [@ktsaou](https://github.com/ktsaou))

## Queries

- Fixed the `dimensions=` filter of `/api/v1/context` and `/api/v1/contexts`, which ignored every metric whose name equals its id (most of them) and so returned all dimensions, instances and contexts ([#24245](https://github.com/netdata/netdata/pull/24245), [@stelfrag](https://github.com/stelfrag))
- Fixed `instance@node_id` patterns in the weights API (metric correlations, anomaly rates), which matched nothing ([#24245](https://github.com/netdata/netdata/pull/24245), [@stelfrag](https://github.com/stelfrag))
- Fixed label filters that combine a bare label name with a `name=value` term, so matching charts are kept while negative `name=value` terms still take precedence ([#24202](https://github.com/netdata/netdata/pull/24202), [@stelfrag](https://github.com/stelfrag))
- Fixed `/api/v1/info` reading the analytics strings (build info, release channel, notification methods, exporting connectors) without their lock, so a request that overlapped an analytics refresh could read freed memory ([#24342](https://github.com/netdata/netdata/pull/24342), [@stelfrag](https://github.com/stelfrag))
- Fixed queries returning empty rows for the rest of their time range when an older tier ran out of data well before the planned switch to a newer tier. The query now continues into the newer tier, and SES/DES no longer extend stale values to the end of a query whose tier switch failed ([#24406](https://github.com/netdata/netdata/pull/24406), [@ktsaou](https://github.com/ktsaou))

## Functions

- Function and dynamic configuration requests now accept only strict JSON request bodies (RFC 8259). Any other body, such as YAML, form data or plain text, is rejected with HTTP 400. The dashboard, Netdata Cloud and the Agent's own callers already send JSON. A saved dynamic configuration that is not strict JSON fails to re-apply, with a warning in the log. Bodies are checked again where they are passed to plugins and streaming children, so update Parents as well as their children ([#24409](https://github.com/netdata/netdata/pull/24409), [@ktsaou](https://github.com/ktsaou))
- `go.d.plugin`: the body of a Function request is now treated as data up to its end marker. A line in the body that looked like a plugin command could replace the running Function call, cancel another one, or stop the plugin from reading further requests. Malformed or oversized requests are now skipped as a whole, without their bodies being parsed as commands ([#24410](https://github.com/netdata/netdata/pull/24410), [@ilyam8](https://github.com/ilyam8))

## Collectors

- External plugins: a protocol error, such as a single corrupted line of plugin output, permanently disabled the plugin until the Agent restarted. Protocol errors now follow the same policy as error exits: the plugin is restarted after 10 × `update_every` seconds, and disabled only if it never produced useful output or fails more than 10 consecutive runs ([#24051](https://github.com/netdata/netdata/pull/24051), [@ilyam8](https://github.com/ilyam8))
- SNMP traps: SNMPv3 messages are now rejected and counted as `usm_failures` when they skip authentication for a user configured to require it, or declare a non-USM security model. Rejected messages are not acknowledged and do not register engine IDs ([#24188](https://github.com/netdata/netdata/pull/24188), [@ilyam8](https://github.com/ilyam8))
- SNMP: community strings and SNMPv3 passphrases are no longer included in the connection details written to debug logs ([#24217](https://github.com/netdata/netdata/pull/24217), [@ilyam8](https://github.com/ilyam8))
- Disk statistics: fixed detection of the discard and flush fields in `/proc/diskstats`. Kernels before 4.18 got six `disk_ext.*` charts of zeros, and kernels 4.18 to 5.4 got `flushes` dimensions stuck at zero. The fields are now detected per disk, and `flushes` dimensions are added when a disk starts reporting them ([#24243](https://github.com/netdata/netdata/pull/24243), [@stelfrag](https://github.com/stelfrag))
- `proc.plugin`: reduced overhead on kernels where some `/proc` files are not seekable, such as Ubuntu 24.04 HWE (6.14). Rewinding such a file no longer resolves its name again on every read, cutting `proc.plugin` busy time by about 9% ([#24212](https://github.com/netdata/netdata/pull/24212), [@stelfrag](https://github.com/stelfrag))
- Kubernetes state: deleting a node, pod, deployment or cronjob no longer removes the charts of live objects whose names start with the same name, such as pods `web-10` to `web-19` when `web-1` is deleted. Those charts did not come back until the object was recreated or the Agent restarted, and their alerts, such as `k8s_state_deployment_condition_available`, silently stopped. Scheduling a pod also no longer rewrites the node label on such charts ([#24402](https://github.com/netdata/netdata/pull/24402), [@stelfrag](https://github.com/stelfrag))
- `log2journal`: JSON input with arrays nested deeper than the parser's maximum depth is now rejected with an error instead of overrunning its key stack ([#24290](https://github.com/netdata/netdata/pull/24290), [@ArjunD3456](https://github.com/ArjunD3456))

## Installation and packaging

- Static builds for 64-bit ARM now enable the linker workarounds for Cortex-A53 errata 835769 and 843419, including for the Rust plugins. Depending on code layout, a static build could die with `SIGILL` at startup on Cortex-A53 boards such as the Raspberry Pi 3 and ODROID-C2. CI now scans the aarch64 static archive for unfixed instruction sequences, and Rust functions are aligned to 8 bytes so the linker's erratum stubs cannot shift them back onto an affected sequence ([#24207](https://github.com/netdata/netdata/pull/24207), [@stelfrag](https://github.com/stelfrag), [#24387](https://github.com/netdata/netdata/pull/24387), [@vkalintiris](https://github.com/vkalintiris))
- Windows packages now bundle the `msys-2.0.dll` from MSYS2's own `msys2-runtime` 3.6.11 package, pinned by URL and checksum, instead of building a patched 3.6.10 runtime from source. 3.6.11 carries the upstream fixes for the startup crash addressed in v2.12.1, and the source build no longer compiled with MSYS2's current toolchain ([#24390](https://github.com/netdata/netdata/pull/24390), [@stelfrag](https://github.com/stelfrag))
- Updated the vendored IBM MQ client libraries to 9.4.5.1 ([#24294](https://github.com/netdata/netdata/pull/24294), [@Ferroin](https://github.com/Ferroin))

## Acknowledgments <a id="v2122-acknowledgments"></a>

We would like to thank our dedicated, talented contributors that make up this amazing community. The time and expertise
that you volunteer is essential to our success.

- [@ArjunD3456](https://github.com/ArjunD3456) for bounding the array nesting depth of the `log2journal` JSON parser and
  for rejecting corrupted gorilla pages in `dbengine`.

## Support options <a id="v2122-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Make use of the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.12.2` · 2026-10-23 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.12.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
