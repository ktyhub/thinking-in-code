---
title: "MinerU mineru-4.1.3-released"
project: "MinerU"
repo: "opendatalab/MinerU"
tag: "mineru-4.1.3-released"
version: "mineru-4.1.3-released"
published: "2026-10-30"
type: "release"
lang: "zh"
---

# MinerU mineru-4.1.3-released

中文

* 路由器动态节点管理：支持运行时注册、查看和删除远程节点，通过独立管理键控制访问，重复即可调整节点池。
* 节点平滑退出：注销节点后停止分配新任务，等待已有任务、请求、下载及结果保留引用释放后再移除。
* API过渡时间精度：内部保留亚秒级时间精度，避免短保留期因秒整取整而提前失效；公开定时器保持整数格式。
* 请求与运行时稳定性：修复重复文件传输可能触发的连接重置，改善反向代理路径与Unicode URL兼容性，并优化空闲模型运行时的退出清理。
* 文档与集成示例：整理用户文档和历史资料，增加旧链接重定向与站点检查，补充任务API、路由器管理、curl 和 n8n 示例。


英语

* 动态路由器上游：使用独立的管理密钥在运行时注册、检查和取消注册远程工作人员。
* 优雅的工作人员耗尽：注销的工作人员停止接收新任务并保持可用状态，直到释放现有任务、请求、下载和保留的资源引用。
* 精确的 API 过期：在内部保留亚秒级精度，以防止短保留期提前过期，同时将公共时间戳保留为整数。
* 请求和运行时稳定性：修复重复文件传输期间的连接重置，改进反向代理路径前缀和 Unicode URL 处理，并优化空闲模型运行时清理。
* 文档和集成示例：重新组织当前和历史文档，添加重定向和站点检查，并扩展任务 API、路由器管理、curl 和 n8n 示例。


**完整 Changelog**：https://github.com/opendatalab/MinerU/compare/mineru-4.1.2-released...mineru-4.1.3-released

---

> 📦 仓库：[opendatalab/MinerU](https://github.com/opendatalab/MinerU) · 🏷️ 版本：`mineru-4.1.3-released` · 📅 发布：2026-10-30 · [查看英文原版 Release](https://github.com/opendatalab/MinerU/releases/tag/mineru-4.1.3-released)

*本文由 NextStack 自动翻译，内容以官方英文原文为准。*
