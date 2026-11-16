---
title: "xiaozhi-esp32 v2.2.4"
project: "xiaozhi-esp32"
repo: "78/xiaozhi-esp32"
tag: "v2.2.4"
version: "v2.2.4"
published: "2026-03-09"
type: "patch"
lang: "zh"
---

# xiaozhi-esp32 v2.2.4

## 发生了什么变化
* 在 https://github.com/78/xiaozhi-esp32/pull/1583 中添加 @alexxed 对 waveshare-s3-epaper-1.54 两个硬件版本的支持
* 通过 @78 修复 https://github.com/78/xiaozhi-esp32/pull/1777 中的 setupui
* 修复：waveshare ESP32-S3-Touch-AMOLED-1.75 https://github.com/78/xiaozhi-esp32/pull/1784 中 @Y1hsiaochunnn 的触摸错误
* 壮举：在https://github.com/78/xiaozhi-esp32/pull/1786中添加@Y1hsiaochunnn对waveshare ESP32-S3-Touch-AMOLED-1.75C的支持
* 通过 @ggc121238 在 https://github.com/78/xiaozhi-esp32/pull/1782 中添加 esp32-s3-touch-lcd-1.85c v2.0
* 修复：修复了 @Y1hsiaochunnn 在 https://github.com/78/xiaozhi-esp32/pull/1789 中的 ESP32-C6-Touch-AMOLED-2.06 目标错误
* feat：MagiClick-2p5增加硬件版本识别，增加https://github.com/78/xiaozhi-esp32/pull/1797中@MakerM0对新屏幕的支持
* 修复: 删除 OttoEmojiDisplay 构造函数中的 SetTheme 调用以修复 LoadProhibited 崩溃 by @txp666 in https://github.com/78/xiaozhi-esp32/pull/1803
* 文档：用 IDF 版本和 @faywong 在 https://github.com/78/xiaozhi-esp32/pull/1801 中的 ESP32-P4 注释更新 README
* 在https://github.com/78/xiaozhi-esp32/pull/1794中添加@ggc121238的waveshre ESP32-Touch-LCD-3.5
* 修复：小智云聊https://github.com/78/xiaozhi-esp32/pull/1809中@Zc365修改AEC记忆+车辆UI设置调整
* 更新了 AudioService 以防止输入任务在读取超时时终止，而是引入延迟。通过 @txp666 在 https://github.com/78/xiaozhi-esp32/pull/1810
* 修复（esp32c5）：在 https://github.com/78/xiaozhi-esp32/pull/1813 中通过 @MoveCall 正确配置 PSRAM
* 由 @NologoTech 在 https://github.com/78/xiaozhi-esp32/pull/1812 中新增无名科技 ABS 2.0 开发板
* 在 https://github.com/78/xiaozhi-esp32/pull/1816 中通过 @78 跳转到 2.2.4

## 新贡献者
* @alexxed 在 https://github.com/78/xiaozhi-esp32/pull/1583 中做出了第一个贡献
* @faywong 在 https://github.com/78/xiaozhi-esp32/pull/1801 中做出了第一个贡献

**完整 Changelog**：https://github.com/78/xiaozhi-esp32/compare/v2.2.3...v2.2.4

---

> 📦 仓库：[78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) · 🏷️ 版本：`v2.2.4` · 📅 发布：2026-03-09 · [查看英文原版 Release](https://github.com/78/xiaozhi-esp32/releases/tag/v2.2.4)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
