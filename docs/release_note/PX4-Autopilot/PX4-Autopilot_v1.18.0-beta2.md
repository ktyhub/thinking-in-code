---
title: "PX4-Autopilot v1.18.0-beta2"
project: "PX4-Autopilot"
repo: "PX4/PX4-Autopilot"
tag: "v1.18.0-beta2"
published: "2026-08-09"
type: "minor"
lang: "en"
summary: "This is a pre-release for flight testing, full release notes can be found here."
---

# PX4-Autopilot v1.18.0-beta2

## What's Changed
This is a pre-release for flight testing, [full release notes can be found here](https://docs.px4.io/main/en/releases/1.18).

Fixes since beta1:
- Fixed-wing: NaN eas2tas from zero-airspeed division in lat/lon control (#28107), tailsitter false quadchute from wrong attitude frame (#27834)
- QGC compatibility regressions from stricter command validation: multicopter guided takeoff, camera mission items, and VTOL landing patterns are accepted again (#27853, #28079)
- SD card read corruption on STM32H7 boards fixed via NuttX SDMMC cache coherency (#28071)
- Parameter storage: FMUv6X-RT FRAM multi-page writes (#28127), flashparams compaction moved to boot (#28093)
- FMUv6X-RT: boot-time FlexSPI DLL calibration, fixing load-dependent hardfaults (#28141)
- Estimator: external position estimate hard reset while aiding is active (#27856), DroneCAN rangefinder out-of-range readings no longer fused as terrain (#27963)
- Navigation: DO_JUMP set as current mission item is resolved to its target (#28063)
- Battery: unknown time-remaining no longer trips RTL (#27929), coulomb counting uses unclamped dt (#27866)
- Commander: COM_PARACHUTE warning-only mode (#27903), multicopter autotune can re-trigger without reboot (#27851)
- VOXL2 / Qurt platform: implement px4_task_join (#27886), Hexagon NaN comparison fixes (#27931), startup stdout TLS race (#28013), keepalive file directory (#28053)
- GPS: RTCM corrections and moving-baseline data split into separate uORB topics (#27097)
- MAVLink: receive thread stack right-sized (#28124); FMUv4 (Pixracer) configs right-sized for flash margin, dropping UAVCAN, uXRCE-DDS, mag bias estimator, and SIH from the default build (#28124)
- Boards: CUAV X25-mega uses the renamed heater sensor ID parameter (#27846)

**Full Changelog**: https://github.com/PX4/PX4-Autopilot/compare/v1.18.0-beta1...v1.18.0-beta2

---

> **Source** [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) · `v1.18.0-beta2` · 2026-08-09 · [upstream release](https://github.com/PX4/PX4-Autopilot/releases/tag/v1.18.0-beta2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
