---
title: "anthropic-sdk-python v2.5.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.5.0"
version: "v2.5.0"
published: "2026-11-04"
type: "minor"
lang: "zh"
---

# anthropic-sdk-python v2.5.0

### 特点

* **api:** 添加错误详细信息类型和新的错误类型值
* **api:** 添加 ids 过滤器以列出工作空间
* **client:** 添加 HTTP 状态和 API 错误代码的错误类，以及 APIStatusError 上的 error_code、详细信息和 api_message


### 错误修复

* **api:** capitalize 错误详细信息类型名称中的 CMEK
* **api:** 将一些错误详细信息类型移至它们描述的资源
* **基岩：** 当模型为“.”时引发 ValueError或“..”而不是将请求发送到不同的路径
* **基岩：** 当模型为空时引发 ValueError 而不是将请求发送到 `/model//invoke`
* **client:** 使 OverloadedError 和 ServiceUnavailableError 成为 InternalServerError 的子类
* **client:** 使每个响应模型的第一次解析都是线程安全的
* **client:** 拒绝路径参数，例如 '..;x' 和 ';x'
* **client:** 在 pydantic v1 上跨线程正确验证联合
* **tools:** 防止内存工具重命名或删除/memories目录
* **vertex:** 对请求路径中的模型、项目 ID 和区域进行百分比编码


### 家务事

* **api:** 更新模式约束字符串字段的示例值
* **ci:** 还使用延迟的 pydantic 模型构建运行测试
* **文档：** 阐明插件达到的值
* **文档：** 澄清插件版本描述和插件范围
* **文档：** 澄清插件版本描述长度
* **文档：** 澄清一些 API 字段描述
* **docs:** 澄清三个错误描述
* **文档：** 阐明在后备块周围发送回哪些块
* **文档：** 正确使用情况报告中的 Claude Tag 直接消息注释
* **docs:** 重写 Dream 和 RBAC 角色权限描述
* **docs:** 更新遥测目标标头描述
* **文档：** 在分析过滤器文档中使用 Claude Platform 名称
* **内部：** 在changelog检查中接受changelog条目文件
* **内部：** 将错误主体助手移至内部实用程序中
* **内部：** 删除陈旧的 TODO 注释和无法通过的测试
* **测试：** 检查 None 路径参数是否被拒绝


### 文档

* **api:** 显示 `speed` 每个字段自己的描述
* 清理文档注释中的转义符和代码跨度

---

> 📦 仓库：[anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · 🏷️ 版本：`v2.5.0` · 📅 发布：2026-11-04 · [查看英文原版 Release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.5.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
