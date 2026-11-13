---
title: "netdata v2.10.1"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.10.1"
published: "2026-04-10"
type: "patch"
lang: "en"
summary: "Netdata v2.10.1 is a patch release to address issues discovered since v2.10.0."
---

# netdata v2.10.1

# Release notes

Netdata v2.10.1 is a patch release to address issues discovered since [v2.10.0](https://github.com/netdata/netdata/releases/tag/v2.10.0).

This patch release provides the following bug fixes and updates:

- Added `ping_only` option to the SNMP collector, allowing collection of only ICMP round-trip time metrics while still using SNMP at startup for device identification and labeling ([#22180](https://github.com/netdata/netdata/pull/22180), [@ilyam8](https://github.com/ilyam8))
- Fixed SNMP collector retries serialization so a zero value is correctly preserved, and disabled bulk walk detection when MaxRepetitions is set to 0 ([#22179](https://github.com/netdata/netdata/pull/22179), [@ilyam8](https://github.com/ilyam8))
- Reduced transient 503 errors on dynamic configuration enable/disable by buffering the command channel and extending the handoff timeout in the go.d plugin ([#22183](https://github.com/netdata/netdata/pull/22183), [@ilyam8](https://github.com/ilyam8))

## Support options <a id="v2101-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Make use of the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.10.1` · 2026-04-10 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.10.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
