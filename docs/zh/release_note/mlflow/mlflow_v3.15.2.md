---
title: "mlflow v3.15.2"
project: "mlflow"
repo: "mlflow/mlflow"
tag: "v3.15.2"
version: "v3.15.2"
published: "2026-08-26"
type: "patch"
lang: "zh"
---

# mlflow v3.15.2

MLflow 3.15.2 是一个补丁版本，包含多项主要功能和改进。

特点：

- [评估] 支持不可变的评估数据集版本 (#24845, @danielseong1)
- [评估] 添加 Scorer_ensemble 原语以组合记分器结果（#24749，@alkispoly-db）

错误修复：

- [评估] 在 MemAlign 对齐判断中保留基本判断调用流程 (#24883, @veronicalyu320)
- [跟踪] 在 Databricks 中预导入 `databricks.sdk` 以避免遥测死锁 (#24841, @aaronteo-db)
- [构建/跟踪] 对齐 `runs.status` 约束元数据 (#24890, @joshuawong-db)

---

> 📦 仓库：[mlflow/mlflow](https://github.com/mlflow/mlflow) · 🏷️ 版本：`v3.15.2` · 📅 发布：2026-08-26 · [查看英文原版 Release](https://github.com/mlflow/mlflow/releases/tag/v3.15.2)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
