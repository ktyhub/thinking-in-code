---
title: "xiaozhi-esp32 v2.2.6"
project: "xiaozhi-esp32"
repo: "78/xiaozhi-esp32"
tag: "v2.2.6"
version: "v2.2.6"
published: "2026-04-19"
type: "patch"
lang: "zh"
---

# xiaozhi-esp32 v2.2.6

## 发生了什么变化
* 由 @laride 在 https://github.com/78/xiaozhi-esp32/pull/1827 中将 EchoEar 重命名为 ESP-VoCat
* 在https://github.com/78/xiaozhi-esp32/pull/1808中添加@DrayxR3X对waveshare ESP32-S3-ePaper-3.97的支持
* 修复：通过 @quantumnic 在 https://github.com/78/xiaozhi-esp32/pull/1845 中向 Python 文件操作添加显式 UTF-8 编码，以实现 Windows 构建兼容性
* 修复 GIF 情绪切换中的竞争条件，导致 https://github.com/78/xiaozhi-esp32/pull/1848 中@Copilot 崩溃
* 壮举：在 https://github.com/78/xiaozhi-esp32/pull/1858 中添加 @Y1hsiaochunnn 支持 Waevshare 产品 ESP32-P4-WIFI6-Touch-LCD-4.3
* 恢复 README.md 并通过 https://github.com/78/xiaozhi-esp32/pull/1862 中的 @Copilot 将所有语言版本的 Discord 链接更新为 https://discord.gg/C759fGMBcZ
* 修复 https://github.com/78/xiaozhi-esp32/pull/1853 中 @Copilot 当 LAMP_GPIO 或 BUILTIN_LED_GPIO 为 GPIO_NUM_NC 时崩溃的问题
* 在https://github.com/78/xiaozhi-esp32/pull/1868中添加@shunian11的waveshare esp32-s3-touch-lcd-1.54和waveshare esp32-s3-lcd-0.85
* 资产资源管理支持@hushi55 in https://github.com/78/xiaozhi-esp32/pull/1865的更多场景
* 修复(eda-robot-pro): 通过@JasonYANG170在https://github.com/78/xiaozhi-esp32/pull/1871中优化步态算法
* 将 idf_component.yml 中的依赖项更新为最新版本：esp-ml30… by @78 in https://github.com/78/xiaozhi-esp32/pull/1867
* 修复https://github.com/78/xiaozhi-esp32/pull/1873中@hushi55的json解析StoreProhibited崩溃问题
* 通过在 https://github.com/78/xiaozhi-esp32/pull/1880 中 @Copilot 合并 SetEmotion() 中的锁定范围来修复 GIF 表情符号闪烁
* 删除未使用的标志，用于在 Cont 中的收听状态下播放弹出声音... by @78 in https://github.com/78/xiaozhi-esp32/pull/1881
* @Copilot 在 https://github.com/78/xiaozhi-esp32/pull/1882 中将版本升级为 2.2.5
* 壮举：适应 esp_codec_dev>=1.5.5 by @laride in https://github.com/78/xiaozhi-esp32/pull/1878
* 修复：https://github.com/78/xiaozhi-esp32/pull/1891中@Y1hsiaochunnn更改触摸芯片默认配置导致的编译错误
* 在https://github.com/78/xiaozhi-esp32/pull/1892中添加@DrayxR3X的waveshare esp32-c6-touch-amoled-2.16
* 修复：https://github.com/78/xiaozhi-esp32/pull/1895中@Y1hsiaochunnn GT911的默认配置
* 通过 @mrrdmr 在 https://github.com/78/xiaozhi-esp32/pull/1876 中添加 freenove-esp32s3-display-2.8-lcd
* 内容：@CQ793 在 https://github.com/78/xiaozhi-esp32/pull/1885 中添加 ESP32-P4-WIFI6-Touch-LCD-3.5
* 通过 @ggc121238 在 https://github.com/78/xiaozhi-esp32/pull/1821 中添加 esp32-s3-cam-xxxx
* 通过 @mrrdmr 在 https://github.com/78/xiaozhi-esp32/pull/1901 中为 freenove 2.8 添加触摸屏支持
* 修复了在 https://github.com/78/xiaozhi-esp32/pull/1917 中 @Copilot 禁用 Es8311 音频设备时通过按钮调节音量时的崩溃问题
* ESP-VoCat：BMI270 运动反馈、电容滑块 (v1.2) 和单板按钮 (v1.0)，由 @almirus 在 https://github.com/78/xiaozhi-esp32/pull/1902 中提供
* 修复：通过 @laride 在 https://github.com/78/xiaozhi-esp32/pull/1925 中删除子模块
*壮举：添加正点原子DNESP32S3B3开发板的小智AI例程，作者：@Almost-LoverY in https://github.com/78/xiaozhi-esp32/pull/1931
* 壮举（cardputer-adv）：通过 @tkpdx01 在 https://github.com/78/xiaozhi-esp32/pull/1929 中添加 TCA8418 键盘和 WiFi 配置 UI
* 在 https://github.com/78/xiaozhi-esp32/pull/1900 中添加 @kankungyip 的 NULLLAB-AI-VOX-V3 板
* 在https://github.com/78/xiaozhi-esp32/pull/1937中添加@DrayxR3X的waveshare esp32-s3-touch-amoled-1.43c
* 杂务：https://github.com/78/xiaozhi-esp32/pull/1944 中的@Copilot 将版本升级到 2.2.6

## 新贡献者
* @quantumnic 在 https://github.com/78/xiaozhi-esp32/pull/1845 中做出了第一个贡献
* @shunian11 在 https://github.com/78/xiaozhi-esp32/pull/1868 中做出了第一个贡献
* @hushi55 在 https://github.com/78/xiaozhi-esp32/pull/1865 中做出了第一个贡献
* @mrrdmr 在 https://github.com/78/xiaozhi-esp32/pull/1876 中做出了第一个贡献
* @CQ793 在 https://github.com/78/xiaozhi-esp32/pull/1885 中做出了第一个贡献
* @almirus 在 https://github.com/78/xiaozhi-esp32/pull/1902 中做出了第一个贡献
* @kankungyip 在 https://github.com/78/xiaozhi-esp32/pull/1900 中做出了第一个贡献

**完整 Changelog**：https://github.com/78/xiaozhi-esp32/compare/v2.2.4...v2.2.6

---

> 📦 仓库：[78/xiaozhi-esp32](https://github.com/78/xiaozhi-esp32) · 🏷️ 版本：`v2.2.6` · 📅 发布：2026-04-19 · [查看英文原版 Release](https://github.com/78/xiaozhi-esp32/releases/tag/v2.2.6)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
