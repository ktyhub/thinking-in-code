---
title: "xiaozhi-esp32 v2.5.2"
project: "xiaozhi-esp32"
repo: "78/xiaozhi-esp32"
tag: "v2.5.2"
version: "v2.5.2"
published: "2026-10-11"
type: "patch"
lang: "en"
summary: "188 firmware variants for 154 board directories, built with ESP-IDF 6.1.0."
---

# xiaozhi-esp32 v2.5.2

188 firmware variants for 154 board directories, built with ESP-IDF 6.1.0.

Source: `49b4380b3faa0ceadd28a3e78aaf0f311c46c57e`. [Build and validation](https://github.com/78/xiaozhi-esp32/actions/runs/38164662520).

Each firmware ZIP contains `merged-binary.bin`. SHA-256 checksums and the complete variant manifest are attached. Builds and package checks do not replace physical hardware validation.

## What's Changed
* fix(websocket): guard transport field before strcmp in server hello by @WODE25500 in https://github.com/78/xiaozhi-esp32/pull/2247
* fix(ota): parse versions without throwing by @WODE25500 in https://github.com/78/xiaozhi-esp32/pull/2248
* fix(esp-vocat): stabilize PCB version detection across soft resets by @StanleyChanH in https://github.com/78/xiaozhi-esp32/pull/2249
* fix(mqtt): do not hold channel_mutex_ while sending UDP audio by @78 in https://github.com/78/xiaozhi-esp32/pull/2254
* fix(display): do not abort on short theme colors in assets skin by @Dev-next-gen in https://github.com/78/xiaozhi-esp32/pull/2256
* fix: free cJSON strings printed for custom messages by @Dev-next-gen in https://github.com/78/xiaozhi-esp32/pull/2257
* feat: add ESP-Mosaico by @laride in https://github.com/78/xiaozhi-esp32/pull/2259
* Move epaper display as common class by @epaper1 in https://github.com/78/xiaozhi-esp32/pull/2261
* fix(ogg): emit packets ending in a zero-length lace at end of input by @anxkhn in https://github.com/78/xiaozhi-esp32/pull/2267
* fix(waveshare 3.5b): index source buffer relative to flushed area in software rotation by @wrgrant in https://github.com/78/xiaozhi-esp32/pull/2268
* fix(esp-vocat): map the robot_2 emote so activation does not log "Not found" by @lv70 in https://github.com/78/xiaozhi-esp32/pull/2273
* Fix GC0308 Kconfig typo that disabled the BOX3 camera driver by @78 with @Copilot in https://github.com/78/xiaozhi-esp32/pull/2277
* feat(board): add Guition JC4827W543 (4.3" 480x272 ESP32-S3) by @gunhanmehmetakif in https://github.com/78/xiaozhi-esp32/pull/2272
* Add a staged idle power policy to the FoloToy AI Passport board by @Shinku-Chen in https://github.com/78/xiaozhi-esp32/pull/2283
* feat(lilygo): add T-Circle-S3 V1.1 board by @talofer99 in https://github.com/78/xiaozhi-esp32/pull/2286
* feat(board): add LC-S3-WIFI 1.54-inch TFT (ESP32-S3) by @aredridel in https://github.com/78/xiaozhi-esp32/pull/2293
* fix(esp-vocat): tolerate peripheral I2C read failures by @weilinear in https://github.com/78/xiaozhi-esp32/pull/2287
* add chd borads by @taonsh in https://github.com/78/xiaozhi-esp32/pull/2270
* ci: add manual full-matrix firmware releases by @78 in https://github.com/78/xiaozhi-esp32/pull/2302

## New Contributors
* @WODE25500 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2247
* @StanleyChanH made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2249
* @Dev-next-gen made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2256
* @anxkhn made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2267
* @wrgrant made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2268
* @lv70 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2273
* @gunhanmehmetakif made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2272
* @talofer99 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2286
* @aredridel made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2293
* @weilinear made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2287
* @taonsh made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2270

**Full Changelog**: https://github.com/78/xiaozhi-esp32/compare/v2.5.0...v2.5.2

All 188 firmware builds succeeded in the linked workflow run. Its final publication step was recovered manually after separately verifying the SHA-256 digests of all 190 uploaded attachments.

---

> **Source** [78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) · `v2.5.2` · 2026-10-11 · [upstream release](https://github.com/78/xiaozhi-esp32/releases/tag/v2.5.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
