---
title: "MinerU mineru-4.1.0-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.0-released"
version: "mineru-4.1.0-released"
published: "2026-10-29"
type: "release"
lang: "en"
summary: "主流平台与 GPU 自动加速：默认安装支持 Windows、Linux 和 macOS 上的 CPU 运行，以及 Intel、AMD、NVIDIA 和 Apple Silicon 兼容独显或集显的推理加速。自动选择合适的 GPU 或 CPU；代表性核心推理场景的速度约为 CPU 的 2～3 倍。"
---

# MinerU mineru-4.1.0-released

## 中文

- **主流平台与 GPU 自动加速**：默认安装支持 Windows、Linux 和 macOS 上的 CPU 运行，以及 Intel、AMD、NVIDIA 和 Apple Silicon 兼容独显或集显的推理加速。自动选择合适的 GPU 或 CPU；代表性核心推理场景的速度约为 CPU 的 **2～3 倍**。
- **统一 Tasks 异步接口**：以 `/v1/tasks` 替换旧 `/v1/uploads`、`/v1/parse/jobs` 工作流，支持文件清单、URL 输入、缓存免传、逐文件执行与结果下载，以及统一的状态查询和取消操作。详见 [Tasks 接口说明](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/zh/usage/tasks.md)。
- **可恢复的同步解析服务**：独立的 `file-parse-server` 提供 `/v1/file_parse`，支持单文件上传和附件返回、等待超时后查询，以及通过请求 ID 恢复已知任务。详见 [file-parse 接口说明](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/zh/usage/file_parse.md)。
- **硬件诊断与档位推荐**：新增 `mineru-kit hardware detect` 和 `hardware info`，帮助选择合适的服务档位，并查看设备、运行环境与校准信息。

**升级提示：** Python 支持范围调整为 **3.11–3.14**。此次包含破坏性 HTTP 接口变更，请协调升级服务端、Router、SDK 和客户端，详见 [4.1 迁移说明](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/zh/reference/migration_4_1.md)。

## English

- **Automatic acceleration across major platforms and GPUs:** The default installation supports CPU inference on Windows, Linux, and macOS, plus accelerated inference on compatible Intel, AMD, NVIDIA, and Apple Silicon GPUs, including integrated graphics. MinerU automatically selects suitable GPU or CPU execution; representative core inference workloads run at approximately **2–3× CPU speed**.
- **A unified asynchronous Tasks API:** `/v1/tasks` replaces the previous `/v1/uploads` and `/v1/parse/jobs` workflow, supporting file manifests, URL inputs, cached-upload reuse, per-file execution and downloads, status queries, and cancellation. See the [Tasks API reference](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/en/usage/tasks.md).
- **Recoverable synchronous file parsing:** The standalone `file-parse-server` provides `/v1/file_parse` for single-file uploads and attachment responses, with queries after wait timeouts and request IDs for recovering known tasks. See the [file-parse API reference](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/en/usage/file_parse.md).
- **Hardware diagnostics and tier recommendations:** New `mineru-kit hardware detect` and `hardware info` commands help select a suitable service tier and inspect devices, runtime versions, and calibration information.

**Upgrade note:** Supported Python versions are now **3.11–3.14**. This release includes breaking HTTP API changes; upgrade servers, Routers, SDKs, and clients together. See the [4.1 migration guide](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/en/reference/migration_4_1.md).

**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.0.12-released...mineru-4.1.0-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.1.0-released` · 2026-10-29 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.0-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
