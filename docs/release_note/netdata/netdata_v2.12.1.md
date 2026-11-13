---
title: "netdata v2.12.1"
project: "netdata"
repo: "netdata/netdata"
tag: "v2.12.1"
published: "2026-10-08"
type: "patch"
lang: "en"
summary: "Netdata v2.12.1 is a patch release to address issues discovered since v2.12.0."
---

# netdata v2.12.1

Netdata v2.12.1 is a patch release to address issues discovered since [v2.12.0](https://github.com/netdata/netdata/releases/tag/v2.12.0).

This release fixes a startup crash and a timezone detection bug in the Windows Agent, stabilizes the eBPF collector across a wider range of kernels and libbpf versions, reduces the load the Docker collector places on the Docker daemon, and removes unnecessary work from dbengine datafile deletion on busy Parents.

## Windows

- Fixed the Windows Agent crashing at startup with an access violation inside `msys-2.0.dll`. The bundled MSYS2 runtime carried an incomplete backport of an upstream Cygwin change; packages now ship a runtime rebuilt with the missing upstream fixes, the MSYS2 installer is pinned by tag and checksum, and packaging fails if the expected runtime is not the one shipped ([#24170](https://github.com/netdata/netdata/pull/24170), [@stelfrag](https://github.com/stelfrag))
- Fixed Windows timezone detection reporting garbage, or reading past its buffer, when the Windows timezone had no match in the IANA mapping. The mapping is now parsed by attribute with bounded copies, the user's region is preferred over the world default as intended, and on failure the existing timezone is kept ([#24101](https://github.com/netdata/netdata/pull/24101), [@stelfrag](https://github.com/stelfrag))

## eBPF collector

- Synced the eBPF collector with `ebpf-co-re` v1.7.0.3 and `kernel-collector` v1.7.0.4, reworking the disk and process probes for better kernel compatibility, including hosts without BTF ([#24008](https://github.com/netdata/netdata/pull/24008), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed `ebpf.plugin` aborting with heap corruption on hosts where the number of possible CPUs exceeds the number of online CPUs, such as VMware guests ([#24008](https://github.com/netdata/netdata/pull/24008), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed a crash when an eBPF object or BTF data could not be loaded on builds with older libbpf versions ([#24008](https://github.com/netdata/netdata/pull/24008), [@thiagoftsm](https://github.com/thiagoftsm))
- Fixed `ebpf.plugin` running the wrong action for most command-line options, so options such as `--unittest` now do what they say ([#24008](https://github.com/netdata/netdata/pull/24008), [@thiagoftsm](https://github.com/thiagoftsm))

## Database

- Removed a scan of the open cache that ran on every dbengine datafile deletion only to feed a debug check compiled out of release builds. The scan walked the whole clean queue under its lock, which can be large on busy Parents ([#24162](https://github.com/netdata/netdata/pull/24162), [@stelfrag](https://github.com/stelfrag))

## Collectors

- Docker: reduced the CPU load the collector causes in `dockerd` and `containerd`, which was significant on Docker Engine 29+ with the containerd image store. The image list is now refreshed at most once every 5 minutes, and the module's default `update_every` is raised from 1 to 10 seconds ([#24146](https://github.com/netdata/netdata/pull/24146), [@ilyam8](https://github.com/ilyam8))
- Docker: fixed image usage metrics on daemons that negotiate an API older than 1.51, where every image was counted as active and dangling images were always reported as 0. Usage is now derived from the container list on every collection ([#24147](https://github.com/netdata/netdata/pull/24147), [@ilyam8](https://github.com/ilyam8))
- Redfish: the configuration form now shows the username and password only for the authentication methods that use them ([#24106](https://github.com/netdata/netdata/pull/24106), [@ilyam8](https://github.com/ilyam8))
- Redfish: fixed the collector permanently skipping resources whose `@odata.id` differs from the URI they were fetched from, such as the trailing-slash variants and remapped NetworkAdapters and Storage paths returned by HPE iLO. Affected jobs stayed in a `partial` state with a standing `redfish_collection_status` warning. Same-origin aliases are now accepted, the other URI safety checks still apply, and rejections report the specific reason ([#24186](https://github.com/netdata/netdata/pull/24186), [@ilyam8](https://github.com/ilyam8))
- Ceph: removed a stray option selector from the configuration form, and stopped the Redfish TLS settings from rendering a duplicate tab strip ([#24108](https://github.com/netdata/netdata/pull/24108), [@ilyam8](https://github.com/ilyam8))
- SMBIOS Memory: the collector is now built only on Linux, the only platform that exports the SMBIOS tables it reads. On macOS, FreeBSD and Windows its stock job used to start and fail with `read SMBIOS entry point: ... no such file or directory` ([#24169](https://github.com/netdata/netdata/pull/24169), [@ilyam8](https://github.com/ilyam8))

## Support options <a id="v2121-support-options"></a>

As we grow, we stay committed to providing the best support ever seen from an open-source solution. Should you encounter an issue with any of the changes made in this release or any feature in the Netdata Agent, feel free to contact us through one of the following channels:

- [Netdata Learn](https://learn.netdata.cloud): Find documentation, guides, and reference material for monitoring and troubleshooting your systems with Netdata.
- [GitHub Issues](https://github.com/netdata/netdata/issues): Make use of the Netdata repository to report bugs or open a new feature request.
- [GitHub Discussions](https://github.com/netdata/netdata/discussions): Join the conversation around the Netdata development process and be a part of it.
- [Community Forums](https://community.netdata.cloud/): Visit the Community Forums and contribute to the collaborative knowledge base.
- [Discord Server](https://discord.gg/2eduZdSeC7): Jump into the Netdata Discord and hang out with like-minded sysadmins, DevOps, SREs, and other troubleshooters. More than 2000 engineers are already using it!

---

> **Source** [netdata/netdata](https://github.com/netdata/netdata) · `v2.12.1` · 2026-10-08 · [upstream release](https://github.com/netdata/netdata/releases/tag/v2.12.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
