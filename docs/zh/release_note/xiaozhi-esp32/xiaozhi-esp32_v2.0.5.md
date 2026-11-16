---
title: "xiaozhi-esp32 v2.0.5"
project: "xiaozhi-esp32"
repo: "78/xiaozhi-esp32"
tag: "v2.0.5"
version: "v2.0.5"
published: "2025-11-19"
type: "patch"
lang: "zh"
---

# xiaozhi-esp32 v2.0.5

## 发生了什么变化
* 修复 sensecap watcher：修复内存泄漏； jpeg 内存 16 位对齐由 @Wvirgil123 在 https://github.com/78/xiaozhi-esp32/pull/1350 中
* otto 更新 V2 分区使用官方 gif 管理器 by @txp666 in https://github.com/78/xiaozhi-esp32/pull/1359
* 在https://github.com/78/xiaozhi-esp32/pull/1330中添加@0xD34D对Xorigin AiPi Lite的支持
* otto 新增动作和 AI 自定义编程动作 MCP 工具 by @txp666 in https://github.com/78/xiaozhi-esp32/pull/1365
* 通过https://github.com/78/xiaozhi-esp32/pull/1373中的@txp666更新Otto控制器振荡设置参数
* 功能：在 https://github.com/78/xiaozhi-esp32/pull/1370 中支持 @laride 的相机图像旋转
* 杂务：通过 https://github.com/78/xiaozhi-esp32/pull/1381 中的 @txp666 将 idf_component.yml 中的 txp666/otto-emoji-gif-component 版本更新为 1.0.3
* 在https://github.com/78/xiaozhi-esp32/pull/1382中通过@78更新组件版本
* 由 @laoshanxi 在 https://github.com/78/xiaozhi-esp32/pull/1387 中构建 image_player 的修复
* 在https://github.com/78/xiaozhi-esp32/pull/1378中添加@DrayxR3X对Waveshare ESP32-S3-Touch-AMOLED-1.32板的支持
* https://github.com/78/xiaozhi-esp32/pull/1388中@txp666重构Otto控制器
* 在https://github.com/78/xiaozhi-esp32/pull/1376中添加@DrayxR3X对Waveshare ESP32-C6-Touch-AMOLED-1.32板的支持
* sp-esp32-s3-1.28-box 由 @Spotpear 在 https://github.com/78/xiaozhi-esp32/pull/1397 中
* ESP-P4-Function-EV-Board 在 https://github.com/78/xiaozhi-esp32/pull/1403 中添加 SD 卡、摄像头和字体初始化（@isthaison）
* board/m5stack-tab5：添加新的显示 st7123 支持。通过 @hlym123 在 https://github.com/78/xiaozhi-esp32/pull/1409
* 修复：修复 @laride 在 https://github.com/78/xiaozhi-esp32/pull/1423 中的 esp_afe_sr_iface_t 编译错误
* 修复https://github.com/78/xiaozhi-esp32/pull/1430中@Y1hsiaochunnn的MIPI_DSI_PHY_CLK_SRC_DEFAULT编译错误
* 在https://github.com/78/xiaozhi-esp32/pull/1375中添加@DrayxR3X对Waveshare ESP32-S3-ePaper-1.54板的支持
* https://github.com/78/xiaozhi-esp32/pull/1342 中@Y1hsiaochunnn 添加对 Waveshare ESP32-C6-Touch-AMOLED-2.06 第三方开发板的支持
*修复：小智OGG激活脚本为@VanillaNahida在https://github.com/78/xiaozhi-esp32/pull/1432中添加了更详细的描述
* 修复：避免 https://github.com/78/xiaozhi-esp32/pull/1441 中 @laride 的软件 JPEG 编码中的 SRAM 溢出
* 壮举：在 https://github.com/78/xiaozhi-esp32/pull/1442 中添加 @laride 对 M5Stack Tab5 的相机支持
* 在https://github.com/78/xiaozhi-esp32/pull/1444中添加@txp666对otto-robot的微信小程序支持
* 在 https://github.com/78/xiaozhi-esp32/pull/1438 中通过 @78 将 LCD 显示布局从网格更改为分层
* feat: 支持 @laride 在 https://github.com/78/xiaozhi-esp32/pull/1455 中输入 JPEG

## 新贡献者
* @0xD34D 在 https://github.com/78/xiaozhi-esp32/pull/1330 中做出了第一个贡献
* @laoshanxi 在 https://github.com/78/xiaozhi-esp32/pull/1387 中做出了第一个贡献

**完整 Changelog**：https://github.com/78/xiaozhi-esp32/compare/v2.0.4...v2.0.5

---

> 📦 仓库：[78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) · 🏷️ 版本：`v2.0.5` · 📅 发布：2025-11-19 · [查看英文原版 Release](https://github.com/78/xiaozhi-esp32/releases/tag/v2.0.5)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
