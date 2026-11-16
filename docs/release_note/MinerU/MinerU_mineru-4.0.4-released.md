---
title: "MinerU mineru-4.0.4-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.4-released"
version: "mineru-4.0.4-released"
published: "2026-09-19"
type: "release"
lang: "en"
summary: "VLM 引擎：高显存设备上 GPU memory utilization 逻辑优化 / engine: adjust GPU memory utilization logic for high-VRAM devices"
---

# MinerU mineru-4.0.4-released

## 更新内容 / What's Changed

**修复 / Fixes**
- VLM 引擎：高显存设备上 GPU memory utilization 逻辑优化 / engine: adjust GPU memory utilization logic for high-VRAM devices
- 日志降噪：推理性能、模型加载与原生表格优先级日志由 info 降为 debug / Lower inference performance, model loading and native table priority logs to debug
- API server：`--log-level` 仅作用于服务端日志，不再影响其他组件 / Scope `--log-level` to server-side logs only
- WebUI：超长（>120 字节）文件名的收敛处理幂等化，重复保存不再截断 / Make filename stemming idempotent for >120-byte filenames

**依赖 / Dependencies**
- mineru-vl-utils 最低版本提升至 2.0.5（含 lmdeploy 引擎多帧响应不完整的修复）/ Require mineru-vl-utils>=2.0.5 (fixes incomplete lmdeploy multi-frame responses)

**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.0.3-released...mineru-4.0.4-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.0.4-released` · 2026-09-19 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.4-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
