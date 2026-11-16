---
title: "zvec v0.4.0"
project: "zvec"
repo: "alibaba/zvec"
tag: "v0.4.0"
version: "v0.4.0"
published: "2026-05-09"
type: "minor"
lang: "zh"
---

# zvec v0.4.0

## 🚀 Zvec v0.4.0 Release Notes

### 📦 新功能
* **Dart/Flutter SDK (Android & iOS)**：发布了官方 [zvec](https://pub.dev/packages/zvec) Flutter 包，为 Zvec 提供 Dart/Flutter FFI 绑定。支持Android (arm64-v8a) 和iOS (arm64)。预构建的本机库会在构建时自动下载 - 最终用户无需手动进行本机编译。 （[问题 #192](https://github.com/alibaba/zvec/issues/192)）
* **扩大topK限制**：放宽topK结果的上限以支持更大规模的召回场景。 ([#348](https://github.com/alibaba/zvec/pull/348))
* **iOS 构建支持**：增加了对 iOS 平台上构建的支持，进一步扩大了跨平台覆盖范围。 ([#321](https://github.com/alibaba/zvec/pull/321))

### 🐞 错误修复
* **SQ8 量化器召回率下降**：修复了因 SQ8 量化器元数据中 int8 舍入处理不正确而导致的召回率下降。 ([#329](https://github.com/alibaba/zvec/pull/329))
* **query_params 类型验证**：对用户提供的查询参数添加了更严格的类型检查，以防止无效输入导致运行时错误。 ([#351](https://github.com/alibaba/zvec/pull/351))
* **Windows 路径处理**：修复了 Windows 上驱动器根目录下的 MakePath 行为；添加了 GetLastErrorString() 帮助程序以获取更准确的操作系统错误消息。 （[#337]（https://github.com/alibaba/zvec/pull/337），[#341]（https://github.com/alibaba/zvec/pull/341））
* **放宽集合路径限制**：删除了对集合存储路径过于严格的验证约束。 ([#340](https://github.com/alibaba/zvec/pull/340))
* **删除冗余 Python 索引类型验证**：删除了 create_index 中 Python 端的重复向量索引类型验证。 ([#297](https://github.com/alibaba/zvec/pull/297))
* 稀疏向量索引现在在馈送到核心向量索引引擎之前进行排序。 (#382)
* 其他小错误修复。 ([#370](https://github.com/alibaba/zvec/pull/370))

### 🔧 重构和清理
* **删除旧版 HNSW 构建器/搜索器**：清理了旧版 HNSW 构建器/搜索器和 hnsw-rabitq 构建器/搜索器。 （[#356]（https://github.com/alibaba/zvec/pull/356），[#367]（https://github.com/alibaba/zvec/pull/367））
* **修复 C 示例 CMake 和 C++ 动态库构建**：更正了 C 语言示例的 CMake 配置并改进了 C++ 共享库构建脚本。 ([#347](https://github.com/alibaba/zvec/pull/347))

### 🤖 CI 和构建改进
* 重构了 Android CI，增强了 iOS CI 稳定性，并修复了代码覆盖率报告。 ([#330](https://github.com/alibaba/zvec/pull/330)、[#332](https://github.com/alibaba/zvec/pull/332)、[#331](https://github.com/alibaba/zvec/pull/331))
* **CI 中的 clang-tidy**：将 clang-tidy 静态分析集成到 CI 管道中，以更改 C/C++ 文件，从而加强代码质量执行。 ([#116](https://github.com/alibaba/zvec/pull/116))

### 👋 新贡献者
感谢此版本中的所有首次贡献者：
* [@kgeg401](https://github.com/kgeg401) ([#116](https://github.com/alibaba/zvec/pull/116))
* [@JoeJRW](https://github.com/JoeJRW) ([#329](https://github.com/alibaba/zvec/pull/329))
* [@宋庆](https://github.com/songqing) ([#297](https://github.com/alibaba/zvec/pull/297))

---

**完整 Changelog**：[v0.3.0...v0.4.0](https://github.com/alibaba/zvec/compare/v0.3.0...v0.4.0)

---

> 📦 仓库：[alibaba/zvec](https://github.com/alibaba/zvec) · 🏷️ 版本：`v0.4.0` · 📅 发布：2026-05-09 · [查看英文原版 Release](https://github.com/alibaba/zvec/releases/tag/v0.4.0)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
