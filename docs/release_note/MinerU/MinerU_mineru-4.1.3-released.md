---
title: "MinerU mineru-4.1.3-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.3-released"
version: "mineru-4.1.3-released"
published: "2026-10-30"
type: "release"
lang: "en"
summary: "Router 动态节点管理：支持运行时注册、查看和注销远程节点，通过独立管理密钥控制访问，无需重启即可调整节点池。；节点平滑退出：注销节点后停止分配新任务，等待已有任务、请求、下载及结果保留引用释放后再移除。；API 过期时间精度：内部保留亚秒级时间精度，避免短保留期因整秒取整而提前失效；公开时间戳保持整数格式。"
---

# MinerU mineru-4.1.3-released

中文

* Router 动态节点管理：支持运行时注册、查看和注销远程节点，通过独立管理密钥控制访问，无需重启即可调整节点池。
* 节点平滑退出：注销节点后停止分配新任务，等待已有任务、请求、下载及结果保留引用释放后再移除。
* API 过期时间精度：内部保留亚秒级时间精度，避免短保留期因整秒取整而提前失效；公开时间戳保持整数格式。
* 请求与运行时稳定性：修复重复文件传输可能触发的连接重置，改善反向代理路径前缀与 Unicode URL 兼容性，并优化空闲模型运行时的退出清理。
* 文档与集成示例：整理用户文档和历史资料，增加旧链接重定向与站点检查，补充 Tasks API、Router 管理、curl 和 n8n 示例。


English

* Dynamic Router upstreams: Register, inspect, and deregister remote workers at runtime using an independent management key.
* Graceful worker draining: Deregistered workers stop receiving new tasks and remain available until existing tasks, requests, downloads, and retained resource references are released.
* Precise API expiration: Preserve subsecond precision internally to prevent short retention periods from expiring early, while keeping public timestamps as integers.
* Request and runtime stability: Fix connection resets during duplicate file transfers, improve reverse-proxy path prefix and Unicode URL handling, and refine idle model runtime cleanup.
* Documentation and integration examples: Reorganize current and historical documentation, add redirects and site checks, and expand Tasks API, Router management, curl, and n8n examples.


**Full Changelog**: https://github.com/opendatalab/MinerU/compare/mineru-4.1.2-released...mineru-4.1.3-released

---

> **Source** [opendatalab/MinerU](https://github.com/opendatalab/MinerU) · `mineru-4.1.3-released` · 2026-10-30 · [upstream release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.3-released)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
