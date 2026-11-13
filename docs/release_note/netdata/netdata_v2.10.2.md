---
title: "netdata v2.10.2"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.10.2"
published: "2026-04-14"
type: "patch"
lang: "en"
summary: "Netdata v2.10.2 is a patch release to address issues discovered since v2.10.1."
---

# netdata v2.10.2

# Release notes

Netdata v2.10.2 is a patch release to address issues discovered since [v2.10.1](https://github.com/netdata/netdata/releases/tag/v2.10.1).

This patch release provides the following bug fixes and updates:

- Fixed ZFS-related crashes in diskspace.plugin by guarding a NULL filesystem field and replacing the blocking pool-capacity collector with a lightweight cache fed by existing statvfs calls, preventing coredumps on degraded or exporting ZFS pools ([#22188](https://github.com/netdata/netdata/pull/22188), [@thiagoftsm](https://github.com/thiagoftsm))
- Reduced default SNMP MaxOIDs from 60 to 20 for more reliable polling, and removed 32-bit counter fallbacks from the IF-MIB profile to prevent counter type switching and overflow between collection cycles ([#22203](https://github.com/netdata/netdata/pull/22203), [@ilyam8](https://github.com/ilyam8))
- Eliminated false-positive "timed out waiting for enable/disable decision" warnings by removing the wait-decision timeout and making the dyncfg command path non-droppable, so back-pressure flows upstream instead of producing 503 errors ([#22201](https://github.com/netdata/netdata/pull/22201), [@ilyam8](https://github.com/ilyam8))

## Support options <a id="v2102-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Make use of the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.10.2` · 2026-04-14 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.10.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
