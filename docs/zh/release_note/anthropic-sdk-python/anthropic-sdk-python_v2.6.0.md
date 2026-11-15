---
title: "anthropic-sdk-python v2.6.0"
project: "anthropic-sdk-python"
repo: "anthropics/anthropic-sdk-python"
tag: "v2.6.0"
version: "v2.6.0"
published: "2026-11-05"
type: "minor"
lang: "zh"
---

# anthropic-sdk-python v2.6.0

### 特点

* **api:** 添加斜坡限制错误的错误代码
* **api:** 添加外部密钥验证失败的错误代码
* **api：** 添加对各地签署组织成员的支持


### 错误修复

* **基岩，顶点：** 在平台 clients 上引发错误代码和状态异常类
* **基石：** 在使用 copy 和 with_options 制作的副本上保留自定义 http_client 和 aws_profile


### 家务事

* **client:** 停止记录 OpenTelemetry 跨度上的采样参数
* **docs:** 描述 API 错误的类型和消息
* **内部：** 在基础 client 上定义一次状态错误映射
* **内部：** 告诉贡献者何时属于运行时类型检查
* **测试：** 在测试运行之前删除环境 ANTHROPIC_ 和 AWS_ 变量


### 文档

* **client:** 描述 API 错误的类型、消息、代码和详细信息
* **client:** 列出每个方法的错误，但没有其描述

---

> 📦 仓库：[anthropics/anthropic-sdk-python](https://github.com/anthropics/anthropic-sdk-python) · 🏷️ 版本：`v2.6.0` · 📅 发布：2026-11-05 · [查看英文原版 Release](https://github.com/anthropics/anthropic-sdk-python/releases/tag/v2.6.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
