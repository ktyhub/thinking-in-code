---
title: "PX4-Autopilot v1.16.1-rc1"
project: "PX4-Autopilot"
repo: "PX4/PX4-Autopilot"
tag: "v1.16.1-rc1"
published: "2025-10-20"
type: "patch"
lang: "en"
summary: "Full Changelog: https://github.com/PX4/PX4-Autopilot/compare/v1.16.0...v1.16.1-rc1"
---

# PX4-Autopilot v1.16.1-rc1

## What's Changed
* [Backport 1.16] of fix: let UXRCE DDS agent IP to be set via parameter in SITL (#25231) by @sansha in https://github.com/PX4/PX4-Autopilot/pull/25299
* VOXL2 patch back port for release 1.16 by @katzfey in https://github.com/PX4/PX4-Autopilot/pull/25377
* [v1.16] Add relnote etc by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25384
* [BACKPORT] commander: accel cal rotate offsets and scales from body frame back into sensor frame before saving (#25626) by @dagar in https://github.com/PX4/PX4-Autopilot/pull/25639
* [Docs] PX4 v1.16 Add warning for RTL mode issues in return.md by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25623
* Docs deploy AWS to v1.16 branch by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25641
* Fix formatting to trigger v1.16 release build for testing by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25643
* [BACKPORT 1.16] boards: ark_fpv add vtol att control by @dakejahl in https://github.com/PX4/PX4-Autopilot/pull/25655
* [backport] macos ci fixes for v1.16 by @mrpollo in https://github.com/PX4/PX4-Autopilot/pull/25672
* AWS docs deploy workflow - modify release branch to same form by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25678
* Fix up v1.16 docs version by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25679
* Trigger v1.16 docs build by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25681
* Trigger v1.16 docs build 3 by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25682
* ci: docs deploy branchname for build step by @mrpollo in https://github.com/PX4/PX4-Autopilot/pull/25684
* docs: fix deploy variables by @mrpollo in https://github.com/PX4/PX4-Autopilot/pull/25685
* Change runner to ubuntu-latest for deployment by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25686
* Update GitHub Actions output setting syntax to use envfile by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25687
* AWS docs deployment - revert runs-on from ubuntu for test by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25689
* AWS docs deployment - add back paths revert runner by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25690
* [BACKPORT 1.16] uavcan: esc: init msg to avoid publishing random values by @dakejahl in https://github.com/PX4/PX4-Autopilot/pull/25656
* [BACKPORT 1.16] mavlink: add message spacing for AVAILABLE_MODES, for low bandwidth by @dakejahl in https://github.com/PX4/PX4-Autopilot/pull/25662
* [BACKPORT 1.16] cuav_7-nano：use new sensors (#25098) by @cuav-liu1 in https://github.com/PX4/PX4-Autopilot/pull/25546
* [v1.16 backport] Enable clean URLs in VitePress config by @hamishwillee in https://github.com/PX4/PX4-Autopilot/pull/25759
* [BACKPORT 1.16] V6X-RT Add sensor set V6XRT001 and V6XRT002 by @PetervdPerk-NXP in https://github.com/PX4/PX4-Autopilot/pull/25732
* [BACKPORT 1.16] ci: fix failsafe sim by @MaEtUgR in https://github.com/PX4/PX4-Autopilot/pull/25768
* [BACKPORT 1.16] flight task auto: fix offtrack mission landing bug by @dakejahl in https://github.com/PX4/PX4-Autopilot/pull/25726
* [BACKPORT 1.16] Loiter at the last mission waypoint on mission end by @dakejahl in https://github.com/PX4/PX4-Autopilot/pull/25727


**Full Changelog**: https://github.com/PX4/PX4-Autopilot/compare/v1.16.0...v1.16.1-rc1

---

> **Source** [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) · `v1.16.1-rc1` · 2025-10-20 · [upstream release](https://github.com/PX4/PX4-Autopilot/releases/tag/v1.16.1-rc1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
