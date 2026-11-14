---
title: "xiaozhi-esp32 v2.6.0"
project: "xiaozhi-esp32"
repo: "78/xiaozhi-esp32"
tag: "v2.6.0"
version: "v2.6.0"
published: "2026-11-13"
type: "minor"
lang: "en"
summary: "fix(ci): find draft releases and verify assets by release ID · Enable multiline chat messages for FoloToy AI Passport · fix(mcp): escape JSON-RPC error messages · Fix: улучшение русского перевода (ru-RU)"
---

# xiaozhi-esp32 v2.6.0

## What's Changed
* fix(ci): find draft releases and verify assets by release ID by @78 in https://github.com/78/xiaozhi-esp32/pull/2303
* Enable multiline chat messages for FoloToy AI Passport by @Shinku-Chen in https://github.com/78/xiaozhi-esp32/pull/2304
* fix(mcp): escape JSON-RPC error messages by @Aldenshile in https://github.com/78/xiaozhi-esp32/pull/2305
* Fix: улучшение русского перевода (ru-RU) by @Rafza7 in https://github.com/78/xiaozhi-esp32/pull/2306
* feat: show startup wake words in a five-second chat hint by @78 in https://github.com/78/xiaozhi-esp32/pull/2315
* fix(audio): refresh Slovak voice prompts by @78 in https://github.com/78/xiaozhi-esp32/pull/2321
* fix(assets): use UTF-8 in the standalone asset packer by @xiajiahang in https://github.com/78/xiaozhi-esp32/pull/2326
* feat(otto): update GIF emoji component to v1.4.0 by @txp666 in https://github.com/78/xiaozhi-esp32/pull/2328
* feat(board): add Seeed reSpeaker XVF3800 and Flex support with XIAO ESP32-S3 by @GreenShadeZhang in https://github.com/78/xiaozhi-esp32/pull/2325
* fix(kconfig): allow USE_DEVICE_AEC on Waveshare ESP32-S3-Touch-AMOLED-2.16 by @PG2047 in https://github.com/78/xiaozhi-esp32/pull/2329
* fix(axp2101): read the die temperature from 0x3C/0x3D by @sylarcao-cmd in https://github.com/78/xiaozhi-esp32/pull/2330
* fix(emote_display): report flush completion on every path by @sylarcao-cmd in https://github.com/78/xiaozhi-esp32/pull/2331
* fix(boards): avoid 64-bit printf conversions under CONFIG_NEWLIB_NANO_FORMAT by @sylarcao-cmd in https://github.com/78/xiaozhi-esp32/pull/2333
* feat(display): SetEmotion reports whether the emotion was set by @sylarcao-cmd in https://github.com/78/xiaozhi-esp32/pull/2332
* fix(emote_display): StopAnimDialog and InsertAnimDialog return inverted bools by @sylarcao-cmd in https://github.com/78/xiaozhi-esp32/pull/2335
* fix: enable PA_CTRL to restore audio on ESP32-S3-Touch-LCD-3.5 by @javen13 in https://github.com/78/xiaozhi-esp32/pull/2341
* fix: enable PA_CTRL on ESP32-S3-Touch-LCD-3.5B by @javen13 in https://github.com/78/xiaozhi-esp32/pull/2342
* Drive the AI Passport idle stages from a board-owned timer by @Shinku-Chen in https://github.com/78/xiaozhi-esp32/pull/2343
* docs: recommend ESP-IDF release/v6.1 branch by @78 in https://github.com/78/xiaozhi-esp32/pull/2347
* docs: document Windows response-file build workaround by @monsterlag in https://github.com/78/xiaozhi-esp32/pull/2346
* Add All Quandong ESP32-S3-dev family which support xiaozhi by @goodtft in https://github.com/78/xiaozhi-esp32/pull/2263
* fix(power_save_timer): request shutdown once, not once a second by @sylarcao-cmd in https://github.com/78/xiaozhi-esp32/pull/2336
* Add Belarusian (be-BY) language by @dzmitryNz in https://github.com/78/xiaozhi-esp32/pull/2318
* fix(audio): make the PA supply voltage a board parameter in BoxAudioCodec by @Dnsayhey in https://github.com/78/xiaozhi-esp32/pull/2359
* feat(board): 增加 CyberAI Vocat v2.0 / v2.1 by @cyberai8 in https://github.com/78/xiaozhi-esp32/pull/2348
* fix(waveshare): correct touch mirroring and corner insets on the AMOLED 2.16 by @Dnsayhey in https://github.com/78/xiaozhi-esp32/pull/2327
* feat(boards): add StackChan (CoreS3 + Feetech SCS servo neck) by @sylarcao-cmd in https://github.com/78/xiaozhi-esp32/pull/2337
* fix(display): fall back when the startup emotion is not in the pack by @sylarcao-cmd in https://github.com/78/xiaozhi-esp32/pull/2364
* feat(mcp): log how many tools were registered and how many the model can see by @sylarcao-cmd in https://github.com/78/xiaozhi-esp32/pull/2366
* feat: add Waveshare ESP32-C6-Touch-LCD-2.8 support by @javen13 in https://github.com/78/xiaozhi-esp32/pull/2371
* feat: add Waveshare ESP32-C5-Touch-LCD-3.5 support by @javen13 in https://github.com/78/xiaozhi-esp32/pull/2350
* feat: add ESP32-C6-Touch-AMOLED-1.8-v2 support by @Pen9uin-g in https://github.com/78/xiaozhi-esp32/pull/2197
* feat: add Waveshare ESP32-C5-Touch-LCD-2.8 support by @javen13 in https://github.com/78/xiaozhi-esp32/pull/2349
* feat(m5stack): add M5Stack Cardputer board by @rchurro in https://github.com/78/xiaozhi-esp32/pull/2372
* fix(camera): decode JPEG previews at display size by @zzuse in https://github.com/78/xiaozhi-esp32/pull/2373
* feat(otto-robot): add GC2145 camera support by @FlashCat-Jordan in https://github.com/78/xiaozhi-esp32/pull/2376
* docs(boards): fix image paths in electron-bot and otto-robot READMEs by @pratikgx in https://github.com/78/xiaozhi-esp32/pull/2381
* fix(otto-robot): stabilize servo control and websocket remote by @FlashCat-Jordan in https://github.com/78/xiaozhi-esp32/pull/2384
* fix(otto-robot): correct GC2145 preview orientation by @FlashCat-Jordan in https://github.com/78/xiaozhi-esp32/pull/2385
* feat(bread-compact-wifi-s3cam): add option to free GPIO19/20 for USB-JTAG by @romoss314 in https://github.com/78/xiaozhi-esp32/pull/2387
* fix(camera): 修正 JPEG 输出缓冲估算并改用定长分段上传（800x600 上机验证） by @romoss314 in https://github.com/78/xiaozhi-esp32/pull/2386
* feat(m5stack): add CoreP4X support by @hlym123 in https://github.com/78/xiaozhi-esp32/pull/2403
* fix: validate OTA URLs and preserve legacy board build commands by @78 in https://github.com/78/xiaozhi-esp32/pull/2408
* PowerSaveTimer: read sleep timers from settings by @Vitalymt in https://github.com/78/xiaozhi-esp32/pull/2375
* fix(display): prevent overlapping WeChat emotions after startup by @78 in https://github.com/78/xiaozhi-esp32/pull/2410
* Report the reset reason in the device status by @sylarcao-cmd in https://github.com/78/xiaozhi-esp32/pull/2367
* feat(otto-robot): report charging state from USB and battery voltage by @FlashCat-Jordan in https://github.com/78/xiaozhi-esp32/pull/2377
* fix(assets): load local resources before starting the network by @78 in https://github.com/78/xiaozhi-esp32/pull/2411
* fix(build): 修复 GiGi 模型目录和逐板屏幕选项兼容性 by @78 in https://github.com/78/xiaozhi-esp32/pull/2413
* fix(camera): reject oversized HTTP write results by @78 in https://github.com/78/xiaozhi-esp32/pull/2416
* feat(protocol): add authenticated MQTT/UDP health checks by @78 in https://github.com/78/xiaozhi-esp32/pull/2398
* Support MCP 2026-07-28 alongside legacy device tools by @78 in https://github.com/78/xiaozhi-esp32/pull/2415
* chore: bump firmware version to 2.6.0 by @78 in https://github.com/78/xiaozhi-esp32/pull/2417
* fix: preserve C6 branch in CST3530 dependency condition by @78 in https://github.com/78/xiaozhi-esp32/pull/2422

## New Contributors
* @Aldenshile made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2305
* @Rafza7 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2306
* @xiajiahang made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2326
* @GreenShadeZhang made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2325
* @PG2047 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2329
* @sylarcao-cmd made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2330
* @monsterlag made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2346
* @goodtft made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2263
* @dzmitryNz made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2318
* @Dnsayhey made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2359
* @cyberai8 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2348
* @Pen9uin-g made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2197
* @rchurro made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2372
* @zzuse made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2373
* @FlashCat-Jordan made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2376
* @pratikgx made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2381
* @romoss314 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2387

**Full Changelog**: https://github.com/78/xiaozhi-esp32/compare/v2.5.2...v2.6.0

---

> **Source** [78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) · `v2.6.0` · 2026-11-13 · [upstream release](https://github.com/78/xiaozhi-esp32/releases/tag/v2.6.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
