---
title: "netdata v2.10.3"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.10.3"
version: "v2.10.3"
published: "2026-04-27"
type: "patch"
lang: "en"
summary: "Netdata v2.10.3 is a patch release to address issues discovered since v2.10.2."
---

# netdata v2.10.3

# Release notes

Netdata v2.10.3 is a patch release to address issues discovered since [v2.10.2](https://github.com/netdata/netdata/releases/tag/v2.10.2).

This patch release provides the following bug fixes and updates:

- Fixed a per-PID shared-memory pool leak in `ebpf.plugin` that, on hosts with normal process churn, filled the 32,768-slot pool within ~15 hours and then pegged a CPU core at 100% in an infinite map-iteration loop; aggregation paths now use a non-allocating lookup, freshly-allocated slots are zeroed, module bits are swept on exit, and stale shared-memory and semaphore objects are properly cleaned up on init ([#22232](https://github.com/netdata/netdata/pull/22232), [@ktsaou](https://github.com/ktsaou))
- Switched the SNMP collector's primary uptime source to `SNMP-FRAMEWORK-MIB::snmpEngineTime` (in seconds) to avoid the ~497-day TimeTicks wrap of `hrSystemUptime`/`sysUpTime`, while keeping the existing `systemUptime` metric name and HR-MIB fallback ([#22231](https://github.com/netdata/netdata/pull/22231), [@ilyam8](https://github.com/ilyam8))
- Split dynamic configuration job-name validation per domain so service discovery, vnode, and secret-store names can include dots (e.g., FQDNs), while collectors retain strict naming rules ([#22247](https://github.com/netdata/netdata/pull/22247), [@ilyam8](https://github.com/ilyam8))
- Removed the unused `extra_details` field from the `go.d/powerstore` Hardware struct to fix `/hardware` response decoding errors that caused job check failures ([#22291](https://github.com/netdata/netdata/pull/22291), [@ilyam8](https://github.com/ilyam8))

## Support options <a id="v2103-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Make use of the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.10.3` · 2026-04-27 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.10.3)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
