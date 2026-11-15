---
title: "anthropic-sdk-python v2.7.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.7.0"
version: "v2.7.0"
published: "2026-11-09"
type: "minor"
lang: "zh"
---

# anthropic-sdk-python v2.7.0

### 特点

* **api:** 在组织 Webhook 端点上接受 user_profile.program_status_updated
* **api:** 添加 claude-fable-5-2 和 claude-mythos-5-2
* **api：** 将父组织过滤和分组添加到使用情况和成本报告中
* **api:** 将 sandbox_egress_restricted 错误添加到管理 API 写入方法中
* **api:** 添加 user_profile.program_status_updated webhook 事件


### 错误修复

* **基岩，顶点：** 添加 beta.messages.with_raw_response 和 with_streaming_response 中缺少的 parse 和 count_tokens 方法
* **基岩，顶点：** 发送 X-Stainless-Async 标头并流未命名流类的原始请求
* **基石：** 对没有 Connection 标头的请求进行签名，而不是引发 KeyError
* **基岩：** 在基岩地幔 clients 上将查询中的列表写入为 a[]=1&a[]=2，正如 Anthropic 所做的那样
* **client:** 允许取消和复制 API 错误
* **client:** 读取基岩、基岩地幔和顶点 clients 上的 ANTHROPIC_CUSTOM_HEADERS
* **Foundry:** 当设置 ANTHROPIC_FOUNDRY_RESOURCE 时，停止复制、with_options 和 with_middleware
* **解析：** 在结构化输出模式中保留 const，并在 const 和 enum 旁边删除类型


### 家务事

* **api:** 删除一些错误详细信息类型并更新描述
* **文档：** 说明工作心跳何时不比较其值
* **内部：** 添加此存储库的审核规则
* **内部：** 从错误类中删除两条注释

---

> 📦 仓库：[anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · 🏷️ 版本：`v2.7.0` · 📅 发布：2026-11-09 · [查看英文原版 Release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.7.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
