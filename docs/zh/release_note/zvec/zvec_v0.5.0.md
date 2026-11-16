---
title: "zvec v0.5.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.5.0"
version: "v0.5.0"
published: "2026-06-12"
type: "minor"
lang: "zh"
---

# zvec v0.5.0

## 🚀 Zvec v0.5.0 Release Notes

### 📦 新功能

- **全文搜索 (FTS)：** Zvec 现在原生支持全文搜索 — 将 FTS 索引附加到任何字符串字段，并使用自然语言或结构化表达式对其进行查询，并通过 `Collection::CreateIndex` / `DropIndex` 进行索引管理。 （[#408]（https://github.com/alibaba/zvec/pull/408），[#445]（https://github.com/alibaba/zvec/pull/445））
- **混合检索：** 在单个查询调用中结合全文、密集向量和稀疏向量检索，并进行标量过滤和重新排名；本机多查询执行和重新排名现在在 Python、Go、Rust 和 C++ 中表现一致。 （[#459]（https://github.com/alibaba/zvec/pull/459），[#405]（https://github.com/alibaba/zvec/pull/405））
- **DiskANN 索引：** 添加了新的 DiskANN 索引，该索引将大部分索引保存在磁盘上而不是 RAM 中，从而大幅削减了数十亿级数据集的内存使用量，并使大规模 ANN 搜索在内存受限的机器上变得可行。 ([#369](https://github.com/alibaba/zvec/pull/369))
- **输出字段选择：** `fetch()` 现在接受 `output_fields` 参数来控制返回哪些字段。 ([#358](https://github.com/alibaba/zvec/pull/358))

### 🌐生态系统

除了核心引擎之外，Zvec 生态系统还通过新的官方语言 SDKs 和可视化管理工具进行了扩展：

- **官方 Go SDK ([zvec-go](https://github.com/zvec-ai/zvec-go))：** cgo 绑定包装 `libzvec_c_api`，带有适用于 Linux (x64/ARM64)、macOS (ARM64) 和 Windows (x64) 的预构建库。
- **官方 Rust SDK ([zvec-rust](https://github.com/zvec-ai/zvec-rust))：** 安全、惯用的 Rust 与 RAII 资源管理、构建器 API 和 `Result<T>` 错误处理的绑定；支持 macOS (x86_64/ARM64)、Linux (x86_64/ARM64) 和 Windows (x86_64/MSVC)。
- **Zvec Studio ([zvec-studio](https://github.com/zvec-ai/zvec-studio))：** Zvec 嵌入式矢量数据库的可视化管理工具 — 无需编写代码即可浏览数据、测试查询和管理模式。通过 `pip install zvec-studio` 安装或下载适用于 macOS / Linux / Windows 的桌面应用程序。

### 🚀 性能改进

- **更快的优化：** 在优化期间重用第一个向量索引文件作为合并基础。 ([#440](https://github.com/alibaba/zvec/pull/440))
- **绑定中的 GIL 释放：** 释放集合绑定中的 GIL，以获得更好的 Python 并发性。 ([#363](https://github.com/alibaba/zvec/pull/363))

### 🐞 错误修复

- **数据正确性：** 修复了多段集合上的可空列 SIGABRT、可空标量过滤器的空泄漏、DDL 后的查询器架构同步以及通过每段 `QueryInfo` 的 SQL 优化器交叉污染。 ([#415](https://github.com/alibaba/zvec/pull/415)、[#416](https://github.com/alibaba/zvec/pull/416)、[#410](https://github.com/alibaba/zvec/pull/410)、[#429](https://github.com/alibaba/zvec/pull/429)、[#449](https://github.com/alibaba/zvec/pull/449))
- **索引稳定性：** 强化 DiskANN（medoid 条目、并发构建崩溃、修剪质量）、RaBitQ（优化期间的原始向量合并、转换器路径、`ex_bits` 验证）、IVF 结果排序和向量索引命名。 ([#433](https://github.com/alibaba/zvec/pull/433)、[#456](https://github.com/alibaba/zvec/pull/456)、[#425](https://github.com/alibaba/zvec/pull/425)、[#436](https://github.com/alibaba/zvec/pull/436)、[#422](https://github.com/alibaba/zvec/pull/422)、[#421](https://github.com/alibaba/zvec/pull/421))
- **其他修复：** Windows 宏冲突、`uint64_t` 格式说明符、HNSW 上下文获取和 Python 单元测试。 ([#435](https://github.com/alibaba/zvec/pull/435)、[#374](https://github.com/alibaba/zvec/pull/374)、[#386](https://github.com/alibaba/zvec/pull/386)、[#401](https://github.com/alibaba/zvec/pull/401))

### 🔧 重构和清理

- **统一查询API：**删除了`VectorQuery`，统一了`SearchQuery`上的单目标查询，并将重新排名切换为基于向量的界面。 ([#428](https://github.com/alibaba/zvec/pull/428)、[#431](https://github.com/alibaba/zvec/pull/431)、[#458](https://github.com/alibaba/zvec/pull/458)、[#267](https://github.com/alibaba/zvec/pull/267))
- **代码库清理：**应用了 `modernize-use-override`，澄清了段本地行 ID，调整了 DiskANN 构建，切换到显式 x86 CPU 白名单，删除了 Hamming 指标和缓冲区管理器，并修改了错误消息。 ([#442](https://github.com/alibaba/zvec/pull/442)、[#419](https://github.com/alibaba/zvec/pull/419)、[#432](https://github.com/alibaba/zvec/pull/432)、[#475](https://github.com/alibaba/zvec/pull/475)、[#258](https://github.com/alibaba/zvec/pull/258)、[#365](https://github.com/alibaba/zvec/pull/365)、[#437](https://github.com/alibaba/zvec/pull/437)、 [#400](https://github.com/alibaba/zvec/pull/400))

### 🤖 CI 和构建改进

- **构建强化：** 在所有 CI 平台上启用 `-Werror`，通过 SIMDe 修复 RISC-V FastPFOR，将第三方包含标记为 SYSTEM，并更正 DiskANN CMake 路径。 ([#460](https://github.com/alibaba/zvec/pull/460)、[#470](https://github.com/alibaba/zvec/pull/470)、[#413](https://github.com/alibaba/zvec/pull/413)、[#464](https://github.com/alibaba/zvec/pull/464))
- **更快的 CI：** 添加了 ccache/sccache（包括 Windows）、并行化测试、加速 clang-tidy、确定主要工作流程的范围，并将 CRoaring 精简为合并（~292M → ~1MB）。 ([#360](https://github.com/alibaba/zvec/pull/360)、[#439](https://github.com/alibaba/zvec/pull/439)、[#454](https://github.com/alibaba/zvec/pull/454)、[#384](https://github.com/alibaba/zvec/pull/384)、[#412](https://github.com/alibaba/zvec/pull/412)、[#417](https://github.com/alibaba/zvec/pull/417)、[#418](https://github.com/alibaba/zvec/pull/418)、 [#438](https://github.com/alibaba/zvec/pull/438)、[#396](https://github.com/alibaba/zvec/pull/396)、[#448](https://github.com/alibaba/zvec/pull/448)、[#381](https://github.com/alibaba/zvec/pull/381))
- **依赖性颠倒：** `actions/cache` 4→5 和 `codecov/codecov-action` 6→7。 （[#466]（https://github.com/alibaba/zvec/pull/466），[#467]（https://github.com/alibaba/zvec/pull/467））

### 👋 新贡献者

感谢此版本中的所有首次贡献者：

- [@ihb2032](https://github.com/ihb2032) ([#258](https://github.com/alibaba/zvec/pull/258))

---

**完整 Changelog:** [v0.4.0...v0.5.0](https://github.com/alibaba/zvec/compare/v0.4.0...v0.5.0)

---

> 📦 仓库：[alibaba/zvec](https://github.com/alibaba/zvec) · 🏷️ 版本：`v0.5.0` · 📅 发布：2026-06-12 · [查看英文原版 Release](https://github.com/alibaba/zvec/releases/tag/v0.5.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
