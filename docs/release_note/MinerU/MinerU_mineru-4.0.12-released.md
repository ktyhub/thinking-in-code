---
title: "MinerU mineru-4.0.12-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.12-released"
version: "mineru-4.0.12-released"
published: "2026-10-11"
type: "release"
lang: "en"
summary: "V1 API：自部署 API 与 Router 新增 /v1/tasks 异步便捷接口和 /v1/file_parse 同步包装，支持一次提交文件、查询状态及获取 JSON/ZIP 结果；与 /v1/parse/jobs 共用任务 ID / V1 API: add asynchronous /v1/tasks and synchronous /v1/file_parse convenience endpoints to…"
---

# MinerU mineru-4.0.12-released

## 更新内容 / What's Changed

**新增 / Features**
- V1 API：自部署 API 与 Router 新增 `/v1/tasks` 异步便捷接口和 `/v1/file_parse` 同步包装，支持一次提交文件、查询状态及获取 JSON/ZIP 结果；与 `/v1/parse/jobs` 共用任务 ID / V1 API: add asynchronous `/v1/tasks` and synchronous `/v1/file_parse` convenience endpoints to self-hosted API servers and Routers, with one-request file submission, status queries and JSON/ZIP results sharing the existing parse-job IDs
- 上传复用：支持 SHA-256 预检及已有 `file_id` 复用；原始字节入口在缓存命中时可提前返回，客户端示例见 `scripts/http_task_example.sh` / Upload reuse: support SHA-256 preflight and existing `file_id` references; the raw-byte endpoint can respond before reading the body on cache hits, with a client example in `scripts/http_task_example.sh`

**改进 / Improvements**
- Router：按健康状态、解析能力及未完成任务负载调度，同负载轮询；完善跨 worker 输入复制、任务预占和失败/取消/终态后的负载释放 / Router: schedule by worker health, parsing capabilities and unfinished-job load, rotate among equal-load workers, and improve cross-worker input copying, reservations and load release
- 资源保留：API 与 Router 默认在 24 小时后回收过期资源；可通过 `--retention-seconds` 或 `MINERU_API_RETENTION_SECONDS` 配置，设为 `0` 禁用自动回收 / Retention: API servers and Routers collect expired resources after 24 hours by default; configure `--retention-seconds` or `MINERU_API_RETENTION_SECONDS`, and use `0` to disable automatic collection
- 模型生命周期：识别致命引擎错误并返回 `503 engine_dead`，托管 worker 支持代际恢复和退避，防止过期响应污染新 worker / Model lifecycle: detect fatal engine errors and return `503 engine_dead`, recover managed worker generations with backoff, and reject stale responses
- Torch CPU：按显式线程配置、有效 CPU 配额及已有线程上限限制算子线程，并传播到后续工作线程 / Torch CPU: cap operator threads using explicit settings, effective CPU quotas and existing lower limits, and apply the selected limit to subsequent worker threads
- API 文档：Swagger/ReDoc 使用本地资源，支持离线访问、Bearer 授权及反向代理路径前缀 / API documentation: serve Swagger/ReDoc assets locally, with offline access, Bearer authorization and reverse-proxy path prefixes

**修复 / Fixes**
- Router：任务保留期从跨 worker 副本清理完成后开始；过期回收及 worker 移除不再减少调用方累计用量；非法输出格式在 worker 调度前返回请求错误 / Router: start job retention after cross-worker input cleanup, preserve per-owner lifetime usage through collection and worker removal, and reject invalid output formats before worker selection
- PDF：修复原生文本的中日韩边界标点和生成空格处理，统一 Python/Rust 路径；补充扫描件路由和原生表格模型回退回归 / PDF: repair CJK boundary punctuation and generated-space handling across Python/Rust paths, with regression coverage for scanned-PDF routing and native-table model fallback
- 版面分析：恢复 PP-DocLayoutV2 的模型分类阈值，统一 Torch/ONNX 输出过滤与阅读顺序候选有效性 / Layout: restore PP-DocLayoutV2 model class thresholds and align Torch/ONNX output filtering with reading-order candidate validity
- Office：通过 DocVortex 公共解析接口保留 DOCX/PPTX 表格内的富文本超链接 / Office: preserve rich-text hyperlinks in DOCX/PPTX tables through public DocVortex parsing interfaces

**依赖 / Dependencies**
- docvortex 最低版本提升至 0.5.16（`>=0.5.16,<1`）/ Require docvortex>=0.5.16,<1
- 新增 fastapi-offline（`>=1.7.7,<2`）/ Add fastapi-offline>=1.7.7,<2

**升级提示 / Upgrade Notes**
- 便捷接口位于 V1 命名空间；同步等待超时返回 `202` 和任务引用，任务继续执行，客户端可继续查询结果 / Convenience endpoints use the V1 namespace; synchronous wait timeouts return `202` with task references while the task continues, so clients can keep polling for results
- 长期保存产物时，请在资源保留期限内下载，或按部署需求调整保留时间 / Download outputs within the retention period for long-term storage, or adjust retention to suit your deployment

**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.0.11-released...mineru-4.0.12-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.0.12-released` · 2026-10-11 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.12-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
