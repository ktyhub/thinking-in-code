---
title: "MinerU mineru-4.1.2-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.2-released"
version: "mineru-4.1.2-released"
published: "2026-10-29"
type: "release"
lang: "en"
summary: "硬件诊断效率与输出：mineru-kit hardware info 并行执行隔离的运行时探测，文本报告按固定顺序逐节输出并刷新；统一容量显示，精简设备与运行时摘要，JSON 保留完整诊断信息并补充 ONNX 只读候选设备及原因。；CLI 帮助按需加载：根帮助、硬件帮助和版本查询不再初始化运行环境或读取用户配置，仅在实际执行命令时加载对应入口。"
---

# MinerU mineru-4.1.2-released

## 中文

- **硬件诊断效率与输出**：`mineru-kit hardware info` 并行执行隔离的运行时探测，文本报告按固定顺序逐节输出并刷新；统一容量显示，精简设备与运行时摘要，JSON 保留完整诊断信息并补充 ONNX 只读候选设备及原因。
- **CLI 帮助按需加载**：根帮助、硬件帮助和版本查询不再初始化运行环境或读取用户配置，仅在实际执行命令时加载对应入口。
- **问题反馈表单**：提供独立的中英文表单，精简必填信息，解析档位默认选中“未知”；发布后自动同步最近五个稳定版本供选择。
- **CI 与发布流程**：问题表单变更使用轻量检查，发布重跑仍执行完整测试，避免被后续分支提交取消。

## English

- **Hardware diagnostics and output:** `mineru-kit hardware info` runs isolated runtime probes concurrently and flushes text sections in a fixed order as they become available. Capacity formatting and device summaries are clearer, while JSON retains full diagnostics and adds the read-only ONNX device candidate and selection reason.
- **On-demand CLI help:** Root help, hardware help, and version queries no longer initialize the runtime or read user configuration. Command entry points load only when executed.
- **Issue reporting:** Separate English and Chinese forms require less information, default the parsing tier to “Unknown,” and automatically offer the five most recent stable versions after each release.
- **CI and release workflows:** Issue-form changes use lightweight checks, while release reruns retain the full test suite and are protected from cancellation by later branch pushes.

**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.1.1-released...mineru-4.1.2-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.1.2-released` · 2026-10-29 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.2-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
