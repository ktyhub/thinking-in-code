---
title: "zvec v0.2.1"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.2.1"
version: "v0.2.1"
published: "2026-03-18"
type: "patch"
lang: "zh"
---

# zvec v0.2.1

## 🚀 Zvec v0.2.1 Release Notes

功能丰富的更新，重点关注**构建和 CI 改进**、**平台扩展**、**性能优化**和**开发人员生态系统增强**。

---

### 📦 核心功能和改进

- 添加了对 **Jina Embeddings v5** 集成的支持 ([#156](https://github.com/alibaba/zvec/pull/156))
- 为 LM Studio / Ollama 添加了**自定义 HTTP 嵌入示例** ([#149](https://github.com/alibaba/zvec/pull/149))
- 添加了**Python API 函数重载**以提高可用性（[#197](https://github.com/alibaba/zvec/pull/197)）
- 添加了对 **Python 3.13 和 3.14** 的支持（[#164](https://github.com/alibaba/zvec/pull/164)）
- 添加了对 **Android 跨平台构建** 的支持 ([#90](https://github.com/alibaba/zvec/pull/90))
- 启用 **Ice Lake 优化** 和 **L2 批量距离进行 int8 量化** ([#213](https://github.com/alibaba/zvec/pull/213))
- 增加了**稀疏向量的索引大小限制** ([#229](https://github.com/alibaba/zvec/pull/229))

### ⚡ 性能和构建优化

- 优化 IVF 实施，以获得更好的稳定性和性能 ([#169](https://github.com/alibaba/zvec/pull/169))
- 重新组织特定于体系结构的 `-march` 处理，以实现更清晰的构建行为（[#193](https://github.com/alibaba/zvec/pull/193)）
- 禁用 RocksDB `-march=native` 以提高构建可移植性（[#183](https://github.com/alibaba/zvec/pull/183)）
- 改进了 `-march=native` 周围的默认源构建行为（[#184](https://github.com/alibaba/zvec/pull/184)）
- 当无法检测到 CPU 功能时自动禁用数学 `march` 优化 ([#220](https://github.com/alibaba/zvec/pull/220))
- 将 `key_id_mapping` 的 `std::map` 替换为 `std::unordered_map` ([#153](https://github.com/alibaba/zvec/pull/153))
- 通过 OSS 镜像支持加速第三方依赖项下载（[#194](https://github.com/alibaba/zvec/pull/194)）
- 添加了可配置 **Clang stdlib** 支持并改进了默认构建行为 ([#210](https://github.com/alibaba/zvec/pull/210))
- 通过用 `PROJECT_ROOT_DIR` 替换 `CMAKE_SOURCE_DIR` 修复了子项目构建问题（[#195](https://github.com/alibaba/zvec/pull/195)）

### 🐞 错误修复

- 将 ANTLR4 `CMAKE_POLICY` 从 `OLD` 更新为 `NEW`，以与 **CMake 3.31+** 兼容（[#145](https://github.com/alibaba/zvec/pull/145)）
- 通过用 `std::vector` 替换 VLA 改进了 **MSVC 兼容性** 和堆栈安全性 ([#190](https://github.com/alibaba/zvec/pull/190))
- 修复了 `uint8` 转换溢出问题 ([#215](https://github.com/alibaba/zvec/pull/215))
- 修复了多个构建环境中的编译问题（[#218](https://github.com/alibaba/zvec/pull/218)）
- 修复了崩溃残留清理逻辑（[#208](https://github.com/alibaba/zvec/pull/208)）
- 添加了一个新的验证器用于**余弦度量**处理（[#209](https://github.com/alibaba/zvec/pull/209)）
- 修复了 MIPS Euclidean 距离实现（[#226](https://github.com/alibaba/zvec/pull/226)）
- 在适当的情况下，在距离实施中将 `std::vector` 替换为 `std::array` ([#201](https://github.com/alibaba/zvec/pull/201))
- 切换到相关低级逻辑中的静态数组使用（[#222](https://github.com/alibaba/zvec/pull/222)）
- 修复了查询过滤行为，以使用 **每块过滤器** 而不是 **每段过滤器** ([#223](https://github.com/alibaba/zvec/pull/223))
- 修复了稀疏构建器转储时间的单元测试（[#237](https://github.com/alibaba/zvec/pull/237)）
- 修复了单元测试中的随机浮动行为（[#182](https://github.com/alibaba/zvec/pull/182)）
- 修复了崩溃恢复单元测试中的编译警告（[#217](https://github.com/alibaba/zvec/pull/217)）

### 🔧 开发者体验

- 添加了 **Node.js 软件包** 的安装说明（[#103](https://github.com/alibaba/zvec/pull/103)）
- 添加了包存储库链接，以便更轻松地访问依赖项（[#104](https://github.com/alibaba/zvec/pull/104)）
- 改进了自述文件和贡献文档，包括存储库 URL、对齐属性拼写错误、Python 版本说明和加入我们部分更新（[#139](https://github.com/alibaba/zvec/pull/139)、[#150](https://github.com/alibaba/zvec/pull/150)、[#168](https://github.com/alibaba/zvec/pull/168)、[#231](https://github.com/alibaba/zvec/pull/231)）
- 添加了项目徽章和趋势徽章更新（[#132](https://github.com/alibaba/zvec/pull/132)、[#228](https://github.com/alibaba/zvec/pull/228)）
- 添加了与召回相关的测试改进（[#196](https://github.com/alibaba/zvec/pull/196)）
- 修复了文档和代码注释中的小拼写错误（[#225](https://github.com/alibaba/zvec/pull/225)）
### 🤖 CI/CD 和工具

- 添加了 **macOS CI** 和 GitHub 运行程序支持 ([#94](https://github.com/alibaba/zvec/pull/94))
- 添加了使用 **GitHub 托管运行器** 的 CI 工作流程（[#171](https://github.com/alibaba/zvec/pull/171)）
- 在 GitHub 运行程序工作流程中添加了 **buildwheel** 支持 ([#221](https://github.com/alibaba/zvec/pull/221))
- 添加了**连续基准测试**支持（[#110](https://github.com/alibaba/zvec/pull/110)）
- 添加了 **Dependabot** 用于自动依赖项更新 ([#181](https://github.com/alibaba/zvec/pull/181))
- 升级了 GitHub 操作以实现 **Node 24 兼容性** 并更新至最新版本（[#129](https://github.com/alibaba/zvec/pull/129)、[#130](https://github.com/alibaba/zvec/pull/130)）
- 将工作流程 Python 版本更新为 **3.10** ([#186](https://github.com/alibaba/zvec/pull/186))
- 修复了主要 CI 工作流程，以便仅在 Linux x64 之外正确触发 ([#187](https://github.com/alibaba/zvec/pull/187))
- 碰撞 GitHub 操作依赖项：
  - `actions/setup-java` v4 → v5 ([#202](https://github.com/alibaba/zvec/pull/202))
  - `actions/checkout` v4 → v6 ([#203](https://github.com/alibaba/zvec/pull/203))
  - `actions/cache` v3 → v5 ([#204](https://github.com/alibaba/zvec/pull/204))
- 改进了传统的预提交集成并升级到最新版本（[#111](https://github.com/alibaba/zvec/pull/111)）

---

### 👋 新贡献者

感谢此版本中的所有首次贡献者：

- [@Junio243](https://github.com/Junio243) ([#139](https://github.com/alibaba/zvec/pull/139))
- [@cluster2600](https://github.com/cluster2600) ([#150](https://github.com/alibaba/zvec/pull/150))
- [@salmanmkc](https://github.com/salmanmkc) ([#129](https://github.com/alibaba/zvec/pull/129))
- [@hanxiao](https://github.com/hanxiao) ([#156](https://github.com/alibaba/zvec/pull/156))
- [@aashish-thapa](https://github.com/aashish-thapa) ([#145](https://github.com/alibaba/zvec/pull/145))
- [@longway-code](https://github.com/longway-code) ([#153](https://github.com/alibaba/zvec/pull/153))
- [@liututu12](https://github.com/liututu12) ([#196](https://github.com/alibaba/zvec/pull/196))
- [@dependabot](https://github.com/apps/dependabot) ([#202](https://github.com/alibaba/zvec/pull/202))
- [@luoxiaojian](https://github.com/luoxiaojian) ([#213](https://github.com/alibaba/zvec/pull/213))
- [@Abdur-rahmaanJ](https://github.com/Abdur-rahmaanJ) ([#225](https://github.com/alibaba/zvec/pull/225))

---

**完整 Changelog**：https://github.com/alibaba/zvec/compare/v0.2.0...v0.2.1  
**升级建议**： ✅ 推荐给所有用户 — 特别是那些需要更广泛的平台支持、改进的构建兼容性和 CI/工具增强功能的用户。

---

> 📦 仓库：[alibaba/zvec](https://github.com/alibaba/zvec) · 🏷️ 版本：`v0.2.1` · 📅 发布：2026-03-18 · [查看英文原版 Release](https://github.com/alibaba/zvec/releases/tag/v0.2.1)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
