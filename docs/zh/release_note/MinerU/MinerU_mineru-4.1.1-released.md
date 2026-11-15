---
title: "MinerU mineru-4.1.1-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.1-released"
version: "mineru-4.1.1-released"
published: "2026-10-29"
type: "release"
lang: "zh"
---

# MinerU mineru-4.1.1-released

## 中文

- **放宽自动档位推荐**：取消推荐流程中的显存检测与容量检测，直接复用小模型实际选择的CPU/GPU设备。勾选GPU时开放全部四档，默认使用标准，高级需要显式指定；勾选CPU时，按进度逻辑核数可用推荐：不足4个核开放仅Flash，4-11个核开放到基础，至少12个核开放到标准。
- **统一llama.cpp运行策略**：Linux和Windows自动模式复用小模型主机的CPU/GPU，具体显卡选择由llama.cpp选择。这些平台上的GPU主模型默认使用4个生成线程，保留用户显式设置。
- **改进PDF文本清理**：在后置OCR且失败恢复完成后，将原有正文中剩余的Unicode私用区字符替换为空格，减少异常字体映射造成的乱码，覆盖基本和补充私用区。

## 英语

- **简化的自动层建议：** 从层建议中删除 GPU 内存检测和容量阈值，重用小型号后端实际选择的 CPU/GPU 设备。 GPU 选择启用所有四个级别，其中标准为默认级别，高级可根据明确请求提供。 CPU 选择使用可用于进程的逻辑核心：少于 4 个仅启用闪存，4-11 个启用至基本，12 个或更多启用至标准。
- **统一 llama.cpp 运行时策略：** Linux 和 Windows 上的自动模式重用小模型后端的 CPU/GPU 选择，并让 llama.cpp 选择特定的 GPU。在这些平台上，GPU 模型默认为第 4 代线程，同时保留显式的用户设置。
- **改进了 PDF 文本清理：** 在 OCR 后处理和回退恢复后，将本机正文文本中残留的 Unicode 专用字符替换为空格，减少因异常字体映射而导致的乱码。基本和补充私人使用区域均被覆盖。

**完整 Changelog**：https://github.com/opendatalab/MinerU/compare/mineru-4.1.0-released...mineru-4.1.1-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.1.1-released` · 📅 发布：2026-10-29 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.1-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
