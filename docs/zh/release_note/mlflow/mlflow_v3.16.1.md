---
title: "mlflow v3.16.1"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.16.1"
version: "v3.16.1"
published: "2026-09-17"
type: "patch"
lang: "zh"
---

# mlflow v3.16.1

MLflow 3.16.1 是一个补丁版本，包括错误修复和文档更新。

重大变化：

- [文档/跟踪] 删除 `basic_auth.ini` (GHSA-gq3w-7jj3-x7gr) 中附带的默认基本身份验证管理员密码 (#25751, @tanghaoji)

特点：

- [评估] 向 `@scorer` 装饰器添加 `timeout` 选项 (#25720, @smoorjani)
- [评估] 将评分器版本传播到评估元数据（#25570，@B-Step62）
- [Tracing] 支持 Unity Catalog 跟踪的跨度链接 (#25597, @B-Step62)

错误修复：

- [跟踪] 无需本地存储验证即可解析 Databricks 模型服务中的 Unity 目录跟踪位置（#25884，@james-fletcher-db）
- [模型注册表] 修复 S3 分段上传加密参数 (#25772, @james-fletcher-db)
- [跟踪/UI] basic-auth：在失败关闭授权下向非管理员提供 Web UI（#25672，@mkBGD）

---

> 📦 仓库：[mlflow/mlflow](https://github.com/mlflow/mlflow) · 🏷️ 版本：`v3.16.1` · 📅 发布：2026-09-17 · [查看英文原版 Release](https://github.com/mlflow/mlflow/releases/tag/v3.16.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
