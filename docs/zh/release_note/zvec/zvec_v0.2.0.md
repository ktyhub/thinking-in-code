---
title: "zvec v0.2.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.2.0"
version: "v0.2.0"
published: "2026-02-13"
type: "minor"
lang: "zh"
---

# zvec v0.2.0

## 🚀 Zvec v0.2.0 Release Notes

主要更新侧重于**优化**、**平台扩展**和**开发人员体验**改进。

---

### 📦 核心功能和改进

- 支持设备上嵌入工作流程的 AI 扩展框架 ([#88](https://github.com/alibaba/zvec/pull/88))
- MMap 存储文件中的自动可扩展段元数据 ([#67](https://github.com/alibaba/zvec/pull/67))
- 核心中统一搜索调用接口（[#15](https://github.com/alibaba/zvec/pull/15)）
- Linux ARM64 构建支持 ([#71](https://github.com/alibaba/zvec/pull/71))
- 重复初始化尝试时出现静默失败（[#79](https://github.com/alibaba/zvec/pull/79)）

### 🐞 错误修复

- 使用键而不是索引修复了 `delete_by_filter` 逻辑（[#84](https://github.com/alibaba/zvec/pull/84)、[#87](https://github.com/alibaba/zvec/pull/87)）
- 更正了量化 int 单元测试（[#47](https://github.com/alibaba/zvec/pull/47)）
- 从 `AddColumn` API 中删除了不必要的 `column_name` 参数 ([#59](https://github.com/alibaba/zvec/pull/59))
- 修复了 HNSW 索引实现中的拼写错误 ([#50](https://github.com/alibaba/zvec/pull/50))
- 删除了测试中的冗余错误预期（[#82](https://github.com/alibaba/zvec/pull/82)）
- 清理了未使用的 `ailego` 模块 ([#85](https://github.com/alibaba/zvec/pull/85))

### 🔧 开发者体验

- 将 `typing_extensions` 替换为标准 `typing` (Python ≥3.10) ([#99](https://github.com/alibaba/zvec/pull/99))
- 通过 `LOG_ERROR` 而不是 `cerr` 改进了 C++ 错误日志记录 ([#80](https://github.com/alibaba/zvec/pull/80))
- 更新了 Python 绑定的文档字符串和 `.pyi` 存根 ([#41](https://github.com/alibaba/zvec/pull/41))
- 删除了过时的 `IndexMeta::MetricType` 定义 ([#53](https://github.com/alibaba/zvec/pull/53))
- 向 macOS/Linux CI 矩阵添加了 C++ 示例 ([#86](https://github.com/alibaba/zvec/pull/86))

### 🤖 CI/CD 和工具

- 支持分叉 PR 的 CI 运行 ([#52](https://github.com/alibaba/zvec/pull/52))
- 在仅限 Markdown 的更改中跳过 CI ([#55](https://github.com/alibaba/zvec/pull/55))
- 添加了问题模板以提供更好的社区支持 ([#46](https://github.com/alibaba/zvec/pull/46))
- 更新了 CMake 最低版本要求（[#44](https://github.com/alibaba/zvec/pull/44)、[#57](https://github.com/alibaba/zvec/pull/57)）
- 基准工具文档刷新（[#77](https://github.com/alibaba/zvec/pull/77)）

### 📚 文档

- 更新了自述文件徽章和加入我们部分（[#45](https://github.com/alibaba/zvec/pull/45)、[#54](https://github.com/alibaba/zvec/pull/54)）

---

### 👋 新贡献者

- [@SYaoJun](https://github.com/SYaoJun) — 第一个贡献 ([#50](https://github.com/alibaba/zvec/pull/50))

---

**完整 Changelog**：https://github.com/alibaba/zvec/compare/v0.1.1...v0.2.0  
**升级建议**： ✅ 推荐给所有用户 — 包括关键的性能和稳定性改进。

---

> 📦 仓库：[alibaba/zvec](https://github.com/alibaba/zvec) · 🏷️ 版本：`v0.2.0` · 📅 发布：2026-02-13 · [查看英文原版 Release](https://github.com/alibaba/zvec/releases/tag/v0.2.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
