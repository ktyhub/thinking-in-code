---
title: "xiaozhi-esp32 v2.5.0"
project: "xiaozhi-esp32"
repo: "78/xiaozhi-esp32"
tag: "v2.5.0"
version: "v2.5.0"
published: "2026-09-10"
type: "minor"
lang: "en"
---

# xiaozhi-esp32 v2.5.0

## What's Changed
* feat: add wk esp32s3 dev board by @Father001 in https://github.com/78/xiaozhi-esp32/pull/2030
* fix: restore WDMomo CGC LCD selection by @78 in https://github.com/78/xiaozhi-esp32/pull/2175
* content : add waveshare esp32-c6-epaper-1.54 by @shunian11 in https://github.com/78/xiaozhi-esp32/pull/2174
* Add Marathi (mr-IN)  Indian Language Support by @ChanchalSakardeQH in https://github.com/78/xiaozhi-esp32/pull/2180
* feat(m5stack-stopwatch): support display brightness control by @suflanker in https://github.com/78/xiaozhi-esp32/pull/2189
* fix(lichuang-dev): don't crash when the FT5x06 touch controller is absent by @sebastjanb in https://github.com/78/xiaozhi-esp32/pull/2204
* Add streamed notify playback by @78 in https://github.com/78/xiaozhi-esp32/pull/2191
* fix(otto): detect camera board from GPIO straps by @txp666 in https://github.com/78/xiaozhi-esp32/pull/2219
* fix(df-k10): clamp self.led_strip.scroll length to the actual LED count by @max-power in https://github.com/78/xiaozhi-esp32/pull/2222
* Fix camera format negotiation for big-endian RGB565 sensors (RGB565X) by @max-power in https://github.com/78/xiaozhi-esp32/pull/2225
* fix(led): scope CircularStrip effect state to the instance by @max-power in https://github.com/78/xiaozhi-esp32/pull/2221
* fix(display): redraw idle clock on minute change, not a shared timestamp by @max-power in https://github.com/78/xiaozhi-esp32/pull/2224
* fix(build): invoke ESP-IDF idf.py correctly on Windows by @zfkun in https://github.com/78/xiaozhi-esp32/pull/2211
* xpowers: add generic PMU wrapper over I2cDevice by @JackHuang021 in https://github.com/78/xiaozhi-esp32/pull/2237
* feat(board): 新增 FoloToy AI Passport (ESP32-C3) 板卡支持 by @Shinku-Chen in https://github.com/78/xiaozhi-esp32/pull/2236
* fix(esp-hi): fit 4MB assets and restore ST7735 bring-up by @78 with @Copilot in https://github.com/78/xiaozhi-esp32/pull/2238
* Add Maza AI boards for xiaozhi by @epaper1 in https://github.com/78/xiaozhi-esp32/pull/2185
* Add pt-BR (Brazilian Portuguese) locale by @mederix in https://github.com/78/xiaozhi-esp32/pull/2243
* fix(build): reject mismatched board configuration by @QiuLsG in https://github.com/78/xiaozhi-esp32/pull/2240
* Fix M5Stack Tab5 ST7121/ST7123 display detection by @78 in https://github.com/78/xiaozhi-esp32/pull/2227
* Bind Otto MCP responses to originating WebSocket client by @3em0 in https://github.com/78/xiaozhi-esp32/pull/2021
* feat(display): turn off OLED panel in power save mode by @Vitalymt in https://github.com/78/xiaozhi-esp32/pull/2195
* feat: add string max_length validation and JSON-RPC error codes to MCP server by @quantumnic in https://github.com/78/xiaozhi-esp32/pull/1847
* Disable C++ exceptions and keep ESP32-S31 firmware in the 4MB OTA slot by @78 in https://github.com/78/xiaozhi-esp32/pull/2246

## New Contributors
* @Father001 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2030
* @ChanchalSakardeQH made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2180
* @suflanker made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2189
* @sebastjanb made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2204
* @max-power made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2222
* @zfkun made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2211
* @Shinku-Chen made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2236
* @epaper1 made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2185
* @mederix made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2243
* @QiuLsG made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2240
* @Vitalymt made their first contribution in https://github.com/78/xiaozhi-esp32/pull/2195

**Full Changelog**: https://github.com/78/xiaozhi-esp32/compare/v2.4.2...v2.5.0

---

> **Source** [78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) · `v2.5.0` · 2026-09-10 · [upstream release](https://github.com/78/xiaozhi-esp32/releases/tag/v2.5.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
