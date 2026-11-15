---
title: "MinerU mineru-4.0.12-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.0.12-released"
version: "mineru-4.0.12-released"
published: "2026-10-11"
type: "release"
lang: "zh"
---

# MinerU mineru-4.0.12-released

## 更新内容/更改内容

**新增/功能**
- V1 API：自部署 API 与 Router 新增 `/v1/tasks` 异步便捷接口和 `/v1/file_parse` 同步包装，支持一次提交文件、查询状态及获取 JSON/ZIP 结果；与 `/v1/parse/jobs` 共享任务 ID / V1 API：添加异步 `/v1/tasks` 和同步 `/v1/file_parse` 便利端点到自托管API 服务器和路由器，具有单请求文件提交、状态查询和共享现有解析作业 ID 的 JSON/ZIP 结果
- 上传复用：支持SHA-256预检及已有`file_id`复用；原始字节入口在存储命中时可提前返回，客户端示例见`scripts/http_task_example.sh` / 上传复用：支持SHA-256预检及现有`file_id`引用；原始字节端点可以在读取缓存命中的正文之前做出响应，例如 `scripts/http_task_example.sh` 中的 client 示例

**改进/改进**
- Router：按健康状态、解析能力及未完成任务负载调度，同负载轮询；完善跨worker输入复制、任务预占和失败/取消/终态后的负载释放 / Router：按worker健康状态、解析能力及未完成任务负载进行调度，在等负载worker之间轮换，完善跨worker输入复制、预留和负载释放
- 资源保留：API 与路由器默认在 24 小时后恢复过期资源；可通过 `--retention-seconds` 或 `MINERU_API_RETENTION_SECONDS` 配置，设置 `0` 取消自动恢复/保留：API 服务器和路由器默认在 24 小时后收集过期资源；配置`--retention-seconds`或`MINERU_API_RETENTION_SECONDS`，并使用`0`禁用自动收集
- 模型生命周期：识别致命引擎错误并返回`503 engine_dead`，托管worker支持代际恢复和退避，防止过渡响应污染新worker /模型生命周期：检测致命引擎错误并返回`503 engine_dead`，通过回退恢复托管worker代，并拒绝过时响应
- Torch CPU：按显式线程配置、有效 CPU 式及现有线程上限限制算子线程，并传播到后续工作线程 / Torch CPU：使用显式设置、有效 CPU 配额和现有下限限制操作员线程，并将所选限制应用于后续工作线程
- API 文档：Swagger/ReDoc 使用本地资源，支持离线访问、承载授权及反向代理路径远端 / API 文档：本地提供 Swagger/ReDoc 资产，具有离线访问、承载授权和反向代理路径前缀

**修复/修复**
- Router：任务保留期从跨worker副本清理完成后开始；过渡恢复及worker移除不再减少调用方用量；无效修改格式在worker调度前返回请求错误 / Router：跨worker输入清理后启动作业保留，通过收集和worker移除保留每个所有者的生命周期使用量，并在worker选择之前拒绝无效的输出格式
- PDF：修复重建文本的中日韩边界标点和生成空格处理，统一Python/Rust路径；补充扫描件路由和原始表格模型回退回归 / PDF：修复Python/Rust路径上的CJK边界标点和生成空间处理，扫描PDF路由和本机表模型回退的回归覆盖
- 版面分析：恢复 PP-DocLayoutV2 的模型分类阈值，统一 Torch/ONNX 输出过滤与阅读顺序候选有效性 / 布局：恢复 PP-DocLayoutV2 模型类别阈值，并将 Torch/ONNX 输出过滤与阅读顺序候选有效性对齐
- Office：通过 DocVortex 公共解析接口保留 DOCX/PPTX 表格内的富文本超链接 / Office：通过公共 DocVortex 解析接口保留 DOCX/PPTX 表中的富文本超链接

**依赖/依赖性**
- docvortex 最低版本提升至 0.5.16（`>=0.5.16,<1`）/ 要求 docvortex>=0.5.16,<1
- 新增fastapi-离线（`>=1.7.7,<2`）/添加fastapi-离线>=1.7.7,<2

**升级提示/升级注意事项**
- 便捷接口位于V1命名空间；同步等待超时返回`202`和任务引用，任务继续执行，客户端可继续查询结果 / 便捷端点使用V1命名空间；同步等待超时在任务继续时返回带有任务引用的 `202`，因此 clients 可以继续轮询结果
- 长期保存产物时，请在资源保留期限内下载，或按配置需求调整保留时间 / 下载保留期内的输出以进行长期存储，或调整保留以适合您的部署

**完整 Changelog**：https://github.com/opendatalab/MinerU/compare/mineru-4.0.11-released...mineru-4.0.12-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.0.12-released` · 📅 发布：2026-10-11 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.0.12-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
