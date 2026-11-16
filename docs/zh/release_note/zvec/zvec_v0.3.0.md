---
title: "zvec v0.3.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.3.0"
version: "v0.3.0"
published: "2026-04-03"
type: "minor"
lang: "zh"
---

# zvec v0.3.0

## 🚀 Zvec v0.3.0 Release Notes

### 📦 平台支持
* **Windows：** 添加了对 Windows 的本机支持（使用 MSVC 2022/Visual Studio 17.0+ 进行测试）。
* **移动端：**启用Android交叉编译；经过验证的移动应用程序环境中的集成。
* **软件包分发：** 适用于 Windows 的官方 Python 和 Node.js 软件包现已推出。 
* **CI/CD：** 持续集成现在涵盖 macOS、Linux 和 Windows（本机）以及 Android（交叉编译）。

### ⚡ 性能与工程
* **量化：** 引入 RabitQ 算法，提供减少的内存使用和高召回率，无需重新排序。
* **计算优化：** 改进了 x86 平台上 IP（内积）和 L2 指标的批量计算性能。
* **硬件抽象：** 细化了 CPU 检测和调度逻辑，以确保跨不同指令集的最佳 SIMD 执行。

### 🔧 生态系统与稳定性
* **API 稳定性：** 正式化了 C-API，为第三方语言绑定和 SDK 开发提供稳定的基础。
* **AI 集成：** 添加了对模型上下文协议 (MCP) 和 AI 代理工作流程的技能集成的支持。
* **可靠性：** 加强了崩溃恢复协议并解决了在类似生产测试中发现的几个与稳定性相关的问题。


### 🐞 错误修复
- 修复了 https://github.com/alibaba/zvec/pull/245 中的公制批量处理
- 修复了通过在 https://github.com/alibaba/zvec/pull/250 中使用 PROJECT_ROOT_DIR 用作子模块时的构建问题
- 在 https://github.com/alibaba/zvec/pull/246 优化期间添加了从崩溃中恢复的功能
- 修复了 https://github.com/alibaba/zvec/pull/272 中最新 macOS 上的构建问题
- 修复了 https://github.com/alibaba/zvec/pull/299 中的 hnsw_streamer_test 单元测试
- 修复了 https://github.com/alibaba/zvec/pull/307 中的 Python 类型注释

### 👋 新贡献者

感谢此版本中的所有首次贡献者：

- [@kdy1](https://github.com/kdy1) ([#234](https://github.com/alibaba/zvec/pull/234))

**完整 Changelog**：https://github.com/alibaba/zvec/compare/v0.2.1...v0.3.0

---

> 📦 仓库：[alibaba/zvec](https://github.com/alibaba/zvec) · 🏷️ 版本：`v0.3.0` · 📅 发布：2026-04-03 · [查看英文原版 Release](https://github.com/alibaba/zvec/releases/tag/v0.3.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
