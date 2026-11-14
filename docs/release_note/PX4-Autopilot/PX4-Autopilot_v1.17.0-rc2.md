---
title: "PX4-Autopilot v1.17.0-rc2"
project: "PX4-Autopilot"
repo: "PX4/PX4-Autopilot"
tag: "v1.17.0-rc2"
published: "2026-03-13"
type: "minor"
lang: "en"
summary: "CVE-2026-32705 - BST device name buffer overflow (GHSA-79mp) · CVE-2026-32706 - CRSF variable-length packet buffer overflow (GHSA-mqgj) · CVE-2026-32707 - TattuCan CAN frame buffer overflow (GHSA-wxwm)"
---

# PX4-Autopilot v1.17.0-rc2

## Security Fixes

  - CVE-2026-32705 - BST device name buffer overflow ([GHSA-79mp](https://github.com/PX4/PX4-Autopilot/security/advisories/GHSA-79mp-34pp-2f3f))
  - CVE-2026-32706 - CRSF variable-length packet buffer overflow ([GHSA-mqgj](https://github.com/PX4/PX4-Autopilot/security/advisories/GHSA-mqgj-hh4g-fg5p))
  - CVE-2026-32707 - TattuCan CAN frame buffer overflow ([GHSA-wxwm](https://github.com/PX4/PX4-Autopilot/security/advisories/GHSA-wxwm-xmx9-hr32))
  - CVE-2026-32708 - Zenoh uORB subscriber stack overflow ([GHSA-69g4](https://github.com/PX4/PX4-Autopilot/security/advisories/GHSA-69g4-hcqf-j45p))
  - CVE-2026-32709 - MAVLink FTP path traversal ([GHSA-fh32](https://github.com/PX4/PX4-Autopilot/security/advisories/GHSA-fh32-qxj9-x32f))
  - CVE-2026-32713 - MAVLink FTP session validation bypass ([GHSA-pp2c](https://github.com/PX4/PX4-Autopilot/security/advisories/GHSA-pp2c-jr5g-6f2m))

## What's Changed
* fix(security): backport security fixes to release/1.17 by @mrpollo in https://github.com/PX4/PX4-Autopilot/pull/26741


**Full Changelog**: https://github.com/PX4/PX4-Autopilot/compare/v1.17.0-rc1...v1.17.0-rc2

---

> **Source** [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) · `v1.17.0-rc2` · 2026-03-13 · [upstream release](https://github.com/PX4/PX4-Autopilot/releases/tag/v1.17.0-rc2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
