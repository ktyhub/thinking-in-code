---
title: "anthropic-sdk-python v2.2.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.2.0"
version: "v2.2.0"
published: "2026-10-23"
type: "minor"
lang: "zh"
---

# anthropic-sdk-python v2.2.0

### 特点

* **api:** 添加对消息线程的支持
* **api：** 按维度添加使用情况和成本报告，将旧报告标记为旧版


### 错误修复

* **client:** 停止在 max_retries 错误消息中建议 math.inf
* **tools:** 在 `append_messages()` 之后将工具运行程序的历史记录留给调用者，并将当前回复保留在 `set_messages_params()` 回调之外
* **工具：** 当 `set_messages_params()` 给出 `tools` 作为定义时，继续运行工具运行器的功能工具，并停止运行从 `tools` 中取出的工具
* **工具：**再次将工具运行程序的 `set_messages_params()` 回调赋予其 `tools` 作为定义
* **工具：** 当 `set_messages_params()` 遗漏时，保留工具运行者的 `betas`、`user_profile_id` 和 `workspace_id`


### 家务事

* **deps:** 开发锁定文件中的碰撞证书
* **文档：** 澄清插件内容扫描和验证描述
* **文档：**澄清插件served_version_pinned和updated_at
* **文档：** 修复使用情况和成本报告示例以及ending_at 文档
* **文档：** 速率限制模型列表因组织和工作区而异

---

> 📦 仓库：[anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · 🏷️ 版本：`v2.2.0` · 📅 发布：2026-10-23 · [查看英文原版 Release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.2.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
