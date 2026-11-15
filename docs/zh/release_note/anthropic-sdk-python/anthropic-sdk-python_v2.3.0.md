---
title: "anthropic-sdk-python v2.3.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.3.0"
version: "v2.3.0"
published: "2026-10-23"
type: "minor"
lang: "zh"
---

# anthropic-sdk-python v2.3.0

### 特点

* **api：** 为 Claude Enterprise 组织添加 Claude 标签端点


### 错误修复

* **google-cloud:** 将用户配置文件请求发送到组织端点


### 家务事

* **client:** 停止发送端点路径中硬编码的查询参数
* **docs:** 完善代码执行工具及其加密结果的描述
* **文档：** 重写工作队列、技能和外部关键描述
* **文档：** 更新每用户使用情况和成本报告的描述
* **内部：**携带端点路径查询参数到请求层
* **内部：** 按工作流中的所有者和公共名称检查存储库
* **内部：** 读取 beta 路由限定符而不是 beta=true 查询
* **内部：** 从 CI 中删除预览构建上传
* **内部：** 停止从解析和流发送测试版查询参数


### 文档

* **mcp:** 从异步 `tool_runner` 示例中删除杂散 `await`
* **google-cloud:** 更新产品名称
* **client：** 将 Bedrock 和 Vertex 原始响应文档字符串链接到 SDK 文档
* 更新自述文件和示例请求

---

> 📦 仓库：[anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · 🏷️ 版本：`v2.3.0` · 📅 发布：2026-10-23 · [查看英文原版 Release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.3.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
