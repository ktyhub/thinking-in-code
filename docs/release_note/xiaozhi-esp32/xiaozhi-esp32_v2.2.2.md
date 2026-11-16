---
title: "xiaozhi-esp32 v2.2.2"
project: "xiaozhi-esp32"
repo: "78/xiaozhi-esp32"
tag: "v2.2.2"
version: "v2.2.2"
published: "2026-02-02"
type: "patch"
lang: "en"
summary: "feat: Add ESP-SensairShuttle · Use esp_audio_codec and esp_audio_effects to replace 78opus · feat: update emote display · Fixed build error with IDF v5.4"
---

# xiaozhi-esp32 v2.2.2

## What's Changed
* feat: Add ESP-SensairShuttle by @laride in https://github.com/78/xiaozhi-esp32/pull/1620
* Use esp_audio_codec and esp_audio_effects to replace 78opus by @majingjing123 in https://github.com/78/xiaozhi-esp32/pull/1632
* feat: update emote display by @espressif2022 in https://github.com/78/xiaozhi-esp32/pull/1629
* Fixed build error with IDF v5.4 by @espressif2022 in https://github.com/78/xiaozhi-esp32/pull/1637
* 修复ESP-Hi报错 by @dunxuan in https://github.com/78/xiaozhi-esp32/pull/1643
* Enhance audio service: Add mutex for input resampler and reset logic … by @78 in https://github.com/78/xiaozhi-esp32/pull/1653
* Fix abnormal screen and camera display on DF K10 when running on Box by @tangjie133 in https://github.com/78/xiaozhi-esp32/pull/1648
* Fix K10 compile doc error by @YeezB in https://github.com/78/xiaozhi-esp32/pull/1654
* feat: New support for third-party boards: waveshare ESP32-C6-Touch-AMOLED-1.8 by @Y1hsiaochunnn in https://github.com/78/xiaozhi-esp32/pull/1656
* add waveshare esp32-s3-rlcd-4.2 by @DrayxR3X in https://github.com/78/xiaozhi-esp32/pull/1639
* Add bread-compact-nt26 board by @78 in https://github.com/78/xiaozhi-esp32/pull/1663
* Add esp32s3_camera for ESP32-S3 and refactor camera selection by @Kevincoooool in https://github.com/78/xiaozhi-esp32/pull/1670
* Esp32 camera by @78 in https://github.com/78/xiaozhi-esp32/pull/1671
* 对 auto 模式进行特殊处理，等待音频驱动的缓冲区为空再切换成listen模式。 by @KingingWang in https://github.com/78/xiaozhi-esp32/pull/1675
* Fixed compilation errors that occurred after enabling blufi by @KingingWang in https://github.com/78/xiaozhi-esp32/pull/1677
* Add an open-source server-related project to the document. by @KingingWang in https://github.com/78/xiaozhi-esp32/pull/1688
* 新增clang-format对代码进行格式管控 by @KingingWang in https://github.com/78/xiaozhi-esp32/pull/1694
* add 征辰科技 AI camera wifi board and 4G board(26 Resubmit) by @Taikoto in https://github.com/78/xiaozhi-esp32/pull/1689
* Support both ov2640 and ov3660 with esp_video by @HonestQiao in https://github.com/78/xiaozhi-esp32/pull/1695
* 增加USB RNDIS上网卡支持 by @ZhouKes in https://github.com/78/xiaozhi-esp32/pull/1655
* Change the Bluetooth device name by @KingingWang in https://github.com/78/xiaozhi-esp32/pull/1701
* Add support for RNDIS board and enhance camera initialization by @78 in https://github.com/78/xiaozhi-esp32/pull/1702
* add esp32-s3-touch-lcd-4.3c by @H-sw123 in https://github.com/78/xiaozhi-esp32/pull/1691
* Fix LVGL object deletion crash and thread safety issues in SetChatMessage by @Copilot in https://github.com/78/xiaozhi-esp32/pull/1708
* fix: reset esp-box-3 display to lvgl by @78 in https://github.com/78/xiaozhi-esp32/pull/1715
* Refactor emoji initialization for Electron and Otto boards to use Assets system by @txp666 in https://github.com/78/xiaozhi-esp32/pull/1704
* Enhance memory management in asset download and OTA processes by repl… by @78 in https://github.com/78/xiaozhi-esp32/pull/1716
* Update project version to 2.2.2, enhance chat message handling by add… by @78 in https://github.com/78/xiaozhi-esp32/pull/1720
* Refactor audio channel handling and wake word detection in Applicatio… by @78 in https://github.com/78/xiaozhi-esp32/pull/1722
* Fix AfeWakeWord: Ringbuffer of AFE(FEED) is full by @78 in https://github.com/78/xiaozhi-esp32/pull/1723
* Update ml307 component version by @78 in https://github.com/78/xiaozhi-esp32/pull/1724
* feat: add M5Stack Cardputer Adv board support / 新增 M5Stack Cardputer Adv 开发板支持 by @tkpdx01 in https://github.com/78/xiaozhi-esp32/pull/1718
* Enhance Otto Robot camera support by adding configuration for OV3660 by @txp666 in https://github.com/78/xiaozhi-esp32/pull/1726
* Fix: uart-uhci compiling errors by @78 in https://github.com/78/xiaozhi-esp32/pull/1728

## New Contributors
* @majingjing123 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/1632
* @dunxuan made their first contribution in https://github.com/78/xiaozhi-esp32/pull/1643
* @tangjie133 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/1648
* @Taikoto made their first contribution in https://github.com/78/xiaozhi-esp32/pull/1689
* @H-sw123 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/1691
* @Copilot made their first contribution in https://github.com/78/xiaozhi-esp32/pull/1708
* @tkpdx01 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/1718

**Full Changelog**: https://github.com/78/xiaozhi-esp32/compare/v2.1.0...v2.2.2

---

> **Source** [78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) · `v2.2.2` · 2026-02-02 · [upstream release](https://github.com/78/xiaozhi-esp32/releases/tag/v2.2.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
