---
title: "anthropic-sdk-python v2.8.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.8.0"
version: "v2.8.0"
published: "2026-11-10"
type: "minor"
lang: "zh"
---

# anthropic-sdk-python v2.8.0

### 特点

* **api:** 将 Claude Tag 指标添加到分析摘要和用户报告中
* **api:** 将reply_mode添加到Claude Tag Slack频道设置


### 错误修复

* **基岩：**发送“;”按原样输入模型 ID，并拒绝第一个“;”之前部分的模型 ID。为空，“。”或“..”
* **google-cloud:** 对工作区和组织基本 URL 路径中的项目、位置和工作区 ID 进行百分比编码
* **google-cloud:** 拒绝将写入派生基本 URL 的空项目、位置或工作区 ID
* **vertex:** 拒绝空模型、项目 ID 或区域，而不是将其写入请求路径
* **顶点：** 发送“;”在模型中作为请求路径中的 %3B


### 家务事

* **文档：** 澄清 Anthropic 创建的 RBAC 角色的 display_name
* **文档：** 澄清插件删除和技能名称冲突描述
* **文档：** 阐明何时在外部键上省略 user_profile_id
* **文档：** 请注意，Claude Tag 设置接受自托管运行器池
* **内部：** 进行三个时序测试以容忍慢速测试机器
* **内部：** 从消息类型中删除冗余导入


### 文档

* **示例：** 创建托管代理代理时显示多代理

---

> 📦 仓库：[anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · 🏷️ 版本：`v2.8.0` · 📅 发布：2026-11-10 · [查看英文原版 Release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.8.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
