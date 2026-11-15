---
title: "MinerU mineru-4.1.2-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.2-released"
version: "mineru-4.1.2-released"
published: "2026-10-29"
type: "release"
lang: "zh"
---

# MinerU mineru-4.1.2-released

## 中文

- **诊断硬件效率与输出**：`mineru-kit hardware info` 器件执行隔离的运行时探测，文本报告按固定顺序逐节输出并刷新；统一故障显示，专业设备与运行时摘要，JSON 保留诊断信息并补充 ONNX 故障设备及原因完整。
- **CLI 帮助辅助加载**：根帮助、硬件帮助和版本查询不再初始化运行环境或读取用户配置，仅在实际执行命令时加载响应入口。
- **问题反馈表单**：提供独立的中英文表单，专业必填信息，解析档位默认勾选“未知”；发布后自动同步最近5个稳定版本供选择。
- **CI与发布流程**：问题表单变更使用轻量检查，发布重跑仍执行完整测试，避免被后续分支提交取消。

## 英语

- **硬件诊断和输出：** `mineru-kit hardware info` 同时运行隔离的运行时探针，并在文本部分可用时按固定顺序刷新它们。容量格式化和设备摘要更加清晰，而 JSON 保留完整诊断并添加只读 ONNX 设备候选和选择原因。
- **按需 CLI 帮助：** Root 帮助、硬件帮助和版本查询不再初始化运行时或读取用户配置。命令入口点仅在执行时加载。
- **问题报告：** 单独的英文和中文表格需要的信息较少，默认解析层为“未知”，并在每次发布后自动提供五个最新的稳定版本。
- **CI 和发布工作流程：** 问题形式更改使用轻量级检查，而发布重新运行保留完整的测试套件，并防止后续分支推送取消。

**完整 Changelog**：https://github.com/opendatalab/MinerU/compare/mineru-4.1.1-released...mineru-4.1.2-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.1.2-released` · 📅 发布：2026-10-29 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.2-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
