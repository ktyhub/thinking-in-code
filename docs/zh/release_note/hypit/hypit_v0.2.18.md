---
title: "hypit v0.2.18"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.18"
version: "v0.2.18"
published: "2026-10-08"
type: "patch"
lang: "zh"
---

# hypit v0.2.18

## 亮点

- **稍后呈现的帧动画再次在正确的时间渲染。** 自 0.2.15 起，在第 0 帧之后开始的项目上的生命周期 `motion`（例如 `enter: fade`）在绝对合成时间进行评估，因此该项目跳过了淡入淡出或在其大部分窗口中保持不可见。动画现在遵循自己的当前时间，如 0.2.13 中那样。 （＃373，修复＃372）
- **静态图像 clips 保持其颜色。** 转换为视频的图片现在使用 BT.709 矩阵进行转换并进行标记，因此玩家不再改变高清静态 clips 的颜色。 （＃363）
- **Alpha 源标准化速度提高了约 9 倍。** 用于透明视频的无损 VP9 编码现在以 libvpx 的最快速度运行。解码后的帧是相同的。 （#383，修复#382）
- **`hypit media fetch` 可与 TikTok 配合使用。** 锁定的 yt-dlp 环境现在包含 `curl_cffi`，因此 yt-dlp 可以模拟浏览器。 （#384，修复#381）
- **构建前出现帧边界错误。** 当时钟静态时，`hypit check` 现在会报告未落在整个帧上的时间轴 `end` 或镜头 `at`（例如 30000/1001 fps 的 `end="8s"`）（#355，修复#354）。 `hypit plan` 还在不携带请求的步骤中报告任何生产者失败，并退出 1，而不是调用计划有效 (#348)。

## 升级

安装`@hypit/hypit@0.2.18`。现有视频项目和材料无需迁移。

如果您已经运行了 `hypit media prepare-fetch`，请再次运行它，以便准备好的环境选择 `curl_cffi`。

`hypit.cli-plan@1` 输出增益 `producerFailureCount`（出现在每个计划中）和 `producerFailures`（当它非零时出现）。

## 验证

CI 在 `main` 上通过了 Linux 和 Windows 作为候选版本。

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.18` · 📅 发布：2026-10-08 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.18)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
