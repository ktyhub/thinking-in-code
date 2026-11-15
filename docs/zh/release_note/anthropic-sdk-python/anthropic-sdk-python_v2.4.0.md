---
title: "anthropic-sdk-python v2.4.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.4.0"
version: "v2.4.0"
published: "2026-11-02"
type: "minor"
lang: "zh"
---

# anthropic-sdk-python v2.4.0

### 特点

* **api:** 添加 GA 方法进行分析、支出限制和 RBAC
* **api:** 添加命名 beta 类型以实现统一指标和 RBAC 删除响应
* **api:** 添加共享分析订单并增加请求参与者类型
* **api:** 添加tool_use_limit_reached_error和compaction_limit_reached_error会话错误类型
* **api：** 添加分析 group_by 和支出限制期过滤器的类型
* **api:** 将 user_profile_id 添加到外部密钥和工作空间


### 错误修复

* **api:** 使支出限额增加请求批准响应中的 cost_limit 可为空
* **api：** 需要始终发送的分析字段并删除未使用的项目产品字段
* **client:** 让 pydantic 验证接受省略的参数类型


### 家务事

* **ci:** 删除未使用的构建上传步骤
* **文档：** 澄清 Slack 通道 ID 描述
* **文档：** 阐明禁用合规性 API 会停止什么
* **文档：** 阐明 Capability_access_all 角色操作授予的内容
* **文档：** 将 Dreams 模型字段链接到支持的模型部分
* **文档：** 更新管理 API 示例中的示例用户 ID
* **内部：**为每个存储库自己的审核规则添加一个部分
* **内部：** 工人评论中的措辞更简单

### 文档

* **client:** 将缺少的等待添加到 async parse() 文档字符串示例中
* **示例：** 保持消息线程示例在 Sonnet 5.5 上有效
* **示例：** 使用当前型号 ID
* **自述文件：** 指向文档站点以获取文档
* 链接到 SDK 文档，而不是删除的 README 部分

---

> 📦 仓库：[anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · 🏷️ 版本：`v2.4.0` · 📅 发布：2026-11-02 · [查看英文原版 Release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.4.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
