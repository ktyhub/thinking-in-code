---
title: "paperclip v2026.916.1"
project: "paperclip"
repo: "paperclipai/paperclip"
tag: "v2026.916.1"
version: "v2026.916.1"
published: "2026-09-21"
type: "patch"
lang: "zh"
---

# paperclip v2026.916.1

# 纸clip v2026.916.1

> 发布时间：2026-09-21

[2026.916.0](https://github.com/paperclipai/paperclip/releases/tag/v2026.916.0) 之上的补丁，修复了在任务对话视图中发送消息的问题。它带有一个有针对性的修复（加上它的回归测试和在同一提交中进行的小型服务器错误分类修复）； 2026.916.0 中的其他所有内容均未更改。

## 修复

- **聊天编辑器的发送按钮不再在桌面上开始禁用。** 任务页面在检查任务是否暂停时禁用编辑器，并且在 React Query v5 中，从挂载到第一个“成功”响应，挂起状态为 true - 因此每个加载发送按钮的桌面任务页面都被禁用，并且如果暂停状态请求停滞，它会保持禁用状态。现在，在检查挂起时允许发送：服务器保持权威，并在保存评论或唤醒代理之前拒绝发送 409 暂停任务的消息，并且确认的暂停保留或失败的状态检查仍然会像以前一样阻止编写器。 ([#13562](https://github.com/paperclipai/paperclip/pull/13562))
- **由 ORM 包装的重复文档插入再次被归类为可重试冲突**，而不是作为不透明的数据库错误出现；不相关的数据库故障保留其原始身份。 （[#13562](https://github.com/paperclipai/paperclip/pull/13562) 的一部分）

## 升级指南

- 没有迁移，没有配置更改，没有 API 更改。升级到位。

---

> 📦 仓库：[paperclipai/paperclip](https://github.com/paperclipai/paperclip) · 🏷️ 版本：`v2026.916.1` · 📅 发布：2026-09-21 · [查看英文原版 Release](https://github.com/paperclipai/paperclip/releases/tag/v2026.916.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
