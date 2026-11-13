---
title: "PX4-Autopilot v1.18.0-rc1"
project: "PX4-Autopilot"
repo: "PX4/PX4-Autopilot"
tag: "v1.18.0-rc1"
published: "2026-09-10"
type: "minor"
lang: "en"
summary: "This is a pre-release for flight testing, full release notes can be found here."
---

# PX4-Autopilot v1.18.0-rc1

## What's Changed
This is a pre-release for flight testing, [full release notes can be found here](https://docs.px4.io/main/en/releases/1.18).

Fixes since beta2:
- Estimator: correct sequential fusion and external-position reset-by-fusion (#28273, #28326, #28379), refresh range-height fusion timeouts (#28283), and avoid failover to an instance with failing innovation test ratios (#28533)
- Multicopter: prevent zero hover-thrust estimates, now enforcing a 10% floor (#28365); reset stale terrain-hold state (#28231); bypass velocity filtering when the requested cutoff cannot be applied (#28534)
- VTOL: preserve multicopter mode through mission RTL (#28399), correct tailsitter fixed-wing heading (#28656), and allow fixed-wing external-mode registration while in multicopter form (#28542)
- Navigation: return to overshot, unreached waypoints (#28409), handle position resets during mission takeoff, and stop reporting mission completion as a storage failure (#28537)
- Control allocation: stopped-motor NaNs no longer contaminate unallocated thrust and torque feedback (#28489)
- Home position and battery: correct barometric-filter time units (#28535), preserve analogue battery-filter state across parameter updates (#28536)
- DroneCAN: fix SocketCAN transmit loss/reordering (#28363), NuttX 10.3 FlexCAN transmission (#28381, #28393), and transmit-queue accounting and diagnostics (#28395, #28397)
- CAN node updates: block firmware updates while armed; arming is blocked by default while updates are pending or a node goes offline mid-update (#28089)
- Input validation: reject invalid ST24 packet lengths (#28450) and oversized MAVLink TUNNEL payload declarations (#28575)
- Runtime: fix USB MAVLink startup and reconnect handling (#28250), ensure DDS read requests are created (#28375), and run performance-counter callbacks outside the global list mutex (#28411)
- Sensors: correct InvenSense gyro scaling, IIM42653 full-scale reporting (#28133, #28177), and IIS2MDC data-ready handling, sensitivity and sampling (#28016)
- ESC telemetry: resynchronise serial responses (#28223) and decode EDT current in 1 A steps (#28143). Older AM32 firmware using half-amp encoding reports current twice as high until updated
- Boards: FMUv6X BMP581 fallback (#28401), FMUv6X-RT UART receive buffers and FRAM erase fixes (#28431, #28312), and corrected NXP MR-Tropic DShot timing
- Firmware size and packaging: reduce parameter-constructor flash usage, restoring Corvon 743v1 headroom without removing features (#28320); include flashable CAN-node and FMU bootloader binaries in release assets (#28446, #28496)

**Full Changelog**: https://github.com/PX4/PX4-Autopilot/compare/v1.18.0-beta2...v1.18.0-rc1

---

> **Source** [PX4/PX4-Autopilot](https://github.com/PX4/PX4-Autopilot) · `v1.18.0-rc1` · 2026-09-10 · [upstream release](https://github.com/PX4/PX4-Autopilot/releases/tag/v1.18.0-rc1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
