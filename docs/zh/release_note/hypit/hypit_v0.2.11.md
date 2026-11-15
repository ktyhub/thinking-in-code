---
title: "hypit v0.2.11"
project: "hypit"
repo: "hypit-ai/hypit"
tag: "v0.2.11"
version: "v0.2.11"
published: "2026-09-21"
type: "patch"
lang: "zh"
---

# hypit v0.2.11

## 发生了什么变化
* 修复（提供者）：当进度轮询遇到 https://github.com/hypit-ai/hypit/pull/336. 中的传输错误时，保持异步作业挂起状态 5xx 响应（例如 522）、连接失败或检查作业状态时超时不再使构建失败；该作业会在下一个时间间隔再次轮询，因此仍会收集远程完成的一代。适用于 HypiHub、BeatAPI、HiAPI、Pollo、Monid 和 TokenDance。
* 修复(pixverse)：以 540p 或 720p 渲染。


**完整 Changelog**：https://github.com/hypit-ai/hypit/compare/v0.2.10...v0.2.11

---

> 📦 仓库：[hypit-ai/hypit](https://github.com/hypit-ai/hypit) · 🏷️ 版本：`v0.2.11` · 📅 发布：2026-09-21 · [查看英文原版 Release](https://github.com/hypit-ai/hypit/releases/tag/v0.2.11)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
