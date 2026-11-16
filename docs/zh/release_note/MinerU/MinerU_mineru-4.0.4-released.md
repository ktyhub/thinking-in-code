---
title: "MinerU mineru-4.0.4-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.4-released"
version: "mineru-4.0.4-released"
published: "2026-09-19"
type: "release"
lang: "zh"
---

# MinerU mineru-4.0.4-released

## 更新内容/更改内容

**修复/修正**
- VLM引擎：高显存设备上GPU内存利用率逻辑优化/引擎：调整高VRAM设备的GPU内存利用率逻辑
- 日志读取：推理性能、模型加载与原生表优先级日志由 info 降级进行调试 / 降低推理性能、模型加载和本机表优先级日志进行调试
- API 服务器：`--log-level` 仅作用于服务端日志，不再影响其他组件/范围 `--log-level` 仅作用于服务器端日志
- WebUI：超长（>120字节）文件名的收敛处理幂等化，重复保存不再中断 / 使文件名词干幂等>120字节的文件名

**依赖/依赖性**
-mineru-vl-utils 最低版本提升至2.0.5（含lmdeploy引擎多帧响应不完整的修复）/ 需要mineru-vl-utils>=2.0.5（修复不完整的lmdeploy多帧响应）

**完整 Changelog**：https://github.com/opendatalab/MinerU/compare/mineru-4.0.3-released...mineru-4.0.4-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.0.4-released` · 📅 发布：2026-09-19 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.4-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
