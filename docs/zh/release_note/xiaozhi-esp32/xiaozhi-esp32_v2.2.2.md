---
title: "xiaozhi-esp32 v2.2.2"
project: "xiaozhi-esp32"
repo: "78/xiaozhi-esp32"
tag: "v2.2.2"
version: "v2.2.2"
published: "2026-02-02"
type: "patch"
lang: "zh"
---

# xiaozhi-esp32 v2.2.2

## 发生了什么变化
* 壮举：在 https://github.com/78/xiaozhi-esp32/pull/1620 中添加 @laride 的 ESP-SensairShuttle
* 使用 esp_audio_codec 和 esp_audio_effects 将 https://github.com/78/xiaozhi-esp32/pull/1632 中的 78opus 替换为 @majingjing123
* 壮举：更新 @espressif2022 在 https://github.com/78/xiaozhi-esp32/pull/1629 中的表情显示
* 修复了 @espressif2022 在 https://github.com/78/xiaozhi-esp32/pull/1637 中使用 IDF v5.4 的构建错误
* 由 @dunxuan 在 https://github.com/78/xiaozhi-esp32/pull/1643 修复 ESP-Hi 报错
* 增强音频服务：为输入重采样器添加互斥锁并重置逻辑……由 https://github.com/78/xiaozhi-esp32/pull/1653 中的 @78
* 修复 DF K10 在 https://github.com/78/xiaozhi-esp32/pull/1648 的 Box 上运行时屏幕和摄像头显示异常的问题 by @tangjie133
* 修复 https://github.com/78/xiaozhi-esp32/pull/1654 中@YeezB 的 K10 编译文档错误
* 壮举：对第三方板的新支持：waveshare ESP32-C6-Touch-AMOLED-1.8 by @Y1hsiaochunnn in https://github.com/78/xiaozhi-esp32/pull/1656
* 通过@DrayxR3X在https://github.com/78/xiaozhi-esp32/pull/1639中添加waveshare esp32-s3-rlcd-4.2
* 在https://github.com/78/xiaozhi-esp32/pull/1663中添加@78的bread-compact-nt26板
* 为 ESP32-S3 添加 esp32s3_camera 并通过 @Kevincoooool 在 https://github.com/78/xiaozhi-esp32/pull/1670 中重构相机选择
* @78 在 https://github.com/78/xiaozhi-esp32/pull/1671 中的 Esp32 相机
* 对自动模式进行处理，等待音频驱动的特殊为空再切换成监听模式。 by @KingingWang in https://github.com/78/xiaozhi-esp32/pull/1675
* 修复了https://github.com/78/xiaozhi-esp32/pull/1677中@KingingWang启用blufi后出现的编译错误
* 在文档中添加开源服务器相关项目。作者：@KingingWang 在 https://github.com/78/xiaozhi-esp32/pull/1688
* 添加clang-format对代码进行格式管控 by @KingingWang in https://github.com/78/xiaozhi-esp32/pull/1694
* 在https://github.com/78/xiaozhi-esp32/pull/1689中添加@Taikoto的征辰科技AI相机wifi板和4G板(26重新提交)
* 通过 @HonestQiao 在 https://github.com/78/xiaozhi-esp32/pull/1695 中使用 esp_video 支持 ov2640 和 ov3660
* 增加 USB RNDIS 上网卡支持 by @ZhouKes in https://github.com/78/xiaozhi-esp32/pull/1655
* https://github.com/78/xiaozhi-esp32/pull/1701中通过@KingingWang更改蓝牙设备名称
* 在https://github.com/78/xiaozhi-esp32/pull/1702中添加对RNDIS板的支持并通过@78增强相机初始化
* 通过 @H-sw123 在 https://github.com/78/xiaozhi-esp32/pull/1691 中添加 esp32-s3-touch-lcd-4.3c
* 修复 https://github.com/78/xiaozhi-esp32/pull/1708 中 @Copilot 的 SetChatMessage 中 LVGL 对象删除崩溃和线程安全问题
* 修复：在 https://github.com/78/xiaozhi-esp32/pull/1715 中通过 @78 将 esp-box-3 显示重置为 lvgl
* 通过 @txp666 在 https://github.com/78/xiaozhi-esp32/pull/1704 中重构 Electron 和 Otto 板的表情符号初始化以使用资产系统
* 通过 https://github.com/78/xiaozhi-esp32/pull/1716 中的 @78 的 repl… 增强资产下载和 OTA 流程中的内存管理
* 更新项目版本至2.2.2，通过在https://github.com/78/xiaozhi-esp32/pull/1720中添加@78来增强聊天消息处理
* 在 https://github.com/78/xiaozhi-esp32/pull/1722 中@78 重构应用程序中的音频通道处理和唤醒词检测
* 修复 AfeWakeWord：https://github.com/78/xiaozhi-esp32/pull/1723 中 @78 的 AFE(FEED) 环形缓冲区已满
* https://github.com/78/xiaozhi-esp32/pull/1724中@78更新ml307组件版本
* 壮举：添加 M5Stack Cardputer Adv 板支持 / 在 https://github.com/78/xiaozhi-esp32/pull/1718 中添加 @tkpdx01 的 M5Stack Cardputer Adv 开发板支持
* 通过@txp666在https://github.com/78/xiaozhi-esp32/pull/1726中添加OV3660的配置来增强Otto Robot相机支持
* 修复：@78 在 https://github.com/78/xiaozhi-esp32/pull/1728 中 uart-uhci 编译错误

## 新贡献者
* @majingjing123 在 https://github.com/78/xiaozhi-esp32/pull/1632 中做出了第一个贡献
* @dunxuan 在 https://github.com/78/xiaozhi-esp32/pull/1643 中做出了第一个贡献
* @tangjie133 在 https://github.com/78/xiaozhi-esp32/pull/1648 中做出了第一个贡献
* @Taikoto 在 https://github.com/78/xiaozhi-esp32/pull/1689 中做出了第一个贡献
* @H-sw123 在 https://github.com/78/xiaozhi-esp32/pull/1691 中做出了第一个贡献
* @Copilot 在 https://github.com/78/xiaozhi-esp32/pull/1708 中做出了第一个贡献
* @tkpdx01 在 https://github.com/78/xiaozhi-esp32/pull/1718 中做出了第一个贡献

**完整 Changelog**：https://github.com/78/xiaozhi-esp32/compare/v2.1.0...v2.2.2

---

> 📦 仓库：[78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) · 🏷️ 版本：`v2.2.2` · 📅 发布：2026-02-02 · [查看英文原版 Release](https://github.com/78/xiaozhi-esp32/releases/tag/v2.2.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
