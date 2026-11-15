---
title: "hypit v0.2.13"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.13"
version: "v0.2.13"
published: "2026-09-23"
type: "patch"
lang: "zh"
---

# hypit v0.2.13

## 发生了什么变化
* 修复（oauth）：当 CLI 在远程主机、容器中或远程代理下运行时，现在可以通过 https://github.com/hypit-ai/hypit/pull/349. 中的托管回调页面返回登录。当浏览器在另一台机器上时，HypiHub回调页面显示一个`code#state`复制回来，当浏览器在同一机器上时，它会自行完成登录。
* 修复：在 https://github.com/hypit-ai/hypit/pull/347. 中忽略媒体探针中的专辑插图带有封面艺术的 MP3 被读取为音频，因此将其剪切为 WAV 作品。修复#346。
* 修复：在 https://github.com/hypit-ai/hypit/pull/345. 的词汇列表中包含捆绑包 `hypit vocabulary` 列出了与发行版捆绑的包，包括在空项目中。修复#344。
* 修复：使用 BT.709 对 HyperFrames 渲染进行编码，并以 https://github.com/hypit-ai/hypit/pull/342. 标记输出。渲染颜色与播放器和平台转码器中的源相匹配。
* 文档：使用 https://github.com/hypit-ai/hypit/pull/341. Fixes #340 中的相对路径链接图像页面中的运行时。
* 修复：将复用持续时间舍入到 https://github.com/hypit-ai/hypit/pull/339. 中的 PCM 样本边界 以 NTSC 帧速率（例如 30000/1001 fps）导出通过复用步骤。修复#338。


**完整 Changelog**：https://github.com/hypit-ai/hypit/compare/v0.2.12...v0.2.13

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.13` · 📅 发布：2026-09-23 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.13)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
