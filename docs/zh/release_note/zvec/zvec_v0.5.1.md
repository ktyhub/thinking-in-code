---
title: "zvec v0.5.1"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.5.1"
version: "v0.5.1"
published: "2026-06-24"
type: "patch"
lang: "zh"
---

# zvec v0.5.1

## 🚀 Zvec v0.5.1 Release Notes

### 📦 新功能
* 外部矢量源：增加了对使用外部矢量源的支持，从而实现更灵活的数据摄取和检索工作流程。 （#490）
* 零拷贝向量查询路径：添加了 `VectorViewClause` 以支持零拷贝查询路径和统一向量查询验证。 (#478)
* 搜索预取配置：添加了对通过搜索参数传递预取配置（`PO` 和 `PL`）的支持。 (#482)
* 索引脏状态：通过核心 `Index` 接口公开 `is_dirty`，以便调用者可以检查索引是否有挂起的更改。 (#488)
* 存储 MMAP 选项：公开写时复制 mmap 配置和修复的 `MMAP_POPULATE` 标志位置。 （#480）
* C API FTS 子查询支持：添加了对 C API 中子查询使用的全文搜索支持。 (#520)

### 🐞 错误修复
* Python 绑定稳定性：安全验证 numpy 矢量查询、处理缺失的按 id 查询文档，并将缺失的 FTS 类型注释添加到 Python 存根和包装器。 （＃502，＃519，＃497）
* Python 打包：在 `zvec` 包内安装 `_zvec` 扩展，从 Wheel 中排除 C++ SDK 标头和库，并且仅在支持的平台上捆绑 DiskANN 插件。 （#511、#509、#510）
* 索引和存储正确性：清理了 `drop_index` 上的 RocksDB 文件，以便 `create_index` 可以重复，修复了索引参数构建器设置器，并增加了构建器行为的覆盖范围。 （＃485，＃504）
* HNSW 持久性：使用 `UniformInt8` 量化器重新打开索引时正确恢复持久元数据。 (#496)
* Parquet 缓冲区缓存：重构 Parquet 缓冲区缓存所有权以避免生命周期和所有权问题。 （#492）
* C API 清理：使用 `IndexParams::clone()` 简化了 `convert_c_index_params_to_cpp`。 (#489)
* 其他修复：添加了 `block_heap.h` 中缺失的包含内容。 (#491)

### 🤖 CI 和构建改进
* 构建要求：将所需的最低 CMake 版本提高到 3.26。 (#516)
* 每晚构建：将 `aio` 添加到每晚构建中。 (#469)
* 依赖项颠倒：将 `actions/checkout` 从 6 更新到 7。(#507)

### 👋 新贡献者

感谢此版本中的所有首次贡献者：

* @HosniBelfeki (#502)

***

全Changelog：https://github.com/alibaba/zvec/compare/v0.5.0...v0.5.1

---

> 📦 仓库：[alibaba/zvec](https://github.com/alibaba/zvec) · 🏷️ 版本：`v0.5.1` · 📅 发布：2026-06-24 · [查看英文原版 Release](https://github.com/alibaba/zvec/releases/tag/v0.5.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
