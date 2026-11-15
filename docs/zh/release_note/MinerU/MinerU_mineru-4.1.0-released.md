---
title: "MinerU mineru-4.1.0-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.0-released"
version: "mineru-4.1.0-released"
published: "2026-10-29"
type: "release"
lang: "zh"
---

# MinerU mineru-4.1.0-released

## 中文

- **主流平台与 GPU 自动加速**：默认安装支持 Windows、Linux 和 macOS 上的 CPU 运行，以及 Intel、AMD、NVIDIA 和 Apple Silicon 兼容独显或集显的推理加速。自动选择合适的 GPU 或 CPU 场景；典型核心推理的速度相当于 CPU 的 **2～3 倍**。
- **统一任务异步接口**：以`/v1/tasks`替换旧`/v1/uploads`、`/v1/parse/jobs`工作流，支持文件清单、URL输入、缓存免传、逐文件执行与结果下载，以及统一的状态查询和取消操作。参见[任务接口说明](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/zh/usage/tasks.md)。
- **可恢复的同步解析服务**：独立的`file-parse-server`提供`/v1/file_parse`，支持单文件上传和附件返回、等待超时后查询，以及通过请求ID恢复已知任务。参见[file-parse接口说明](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/zh/usage/file_parse.md)。
- **硬件诊断与档位推荐**：新增`mineru-kit hardware detect`和`hardware info`，帮助选择合适的服务档位，并查看设备、运行环境与调节信息。

**升级提示：** Python支持范围调整为**3.11–3.14**。本次包含破坏性HTTP接口变更，请协调升级服务端、路由器、SDK和客户端，参见[4.1迁移说明](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/zh/reference/migration_4_1.md)。

## 英语

- **跨主要平台和 GPU 的自动加速：** 默认安装支持 Windows、Linux 和 macOS 上的 CPU 推理，以及兼容的 Intel、AMD、NVIDIA 和 Apple Silicon GPU（包括集成显卡）上的加速推理。 MinerU自动选择合适的GPU或CPU执行；代表性的核心推理工作负载以大约 **2–3× CPU 速度**运行。
- **统一的异步任务 API：** `/v1/tasks` 取代了之前的 `/v1/uploads` 和 `/v1/parse/jobs` 工作流程，支持文件清单、URL 输入、缓存上传重用、每个文件执行和下载、状态查询和取消。请参阅[任务 API 参考](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/en/usage/tasks.md)。
- **可恢复的同步文件解析：** 独立的 `file-parse-server` 提供用于单文件上传和附件响应的 `/v1/file_parse`，以及等待超时后的查询和用于恢复已知任务的请求 ID。请参阅[文件解析 API 参考](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/en/usage/file_parse.md)。
- **硬件诊断和层建议：** 新的 `mineru-kit hardware detect` 和 `hardware info` 命令可帮助选择合适的服务层并检查设备、运行时版本和校准信息。

**升级说明：** 现在支持的 Python 版本为 **3.11–3.14**。此版本包括重大 HTTP API 更改；一起升级服务器、路由器、SDK 和 clients。请参阅[4.1 迁移指南](https://github.com/opendatalab/MinerU/blob/mineru-4.1.0-released/docs/en/reference/migration_4_1.md)。

**完整 Changelog**：https://github.com/opendatalab/MinerU/compare/mineru-4.0.12-released...mineru-4.1.0-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.1.0-released` · 📅 发布：2026-10-29 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.0-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
