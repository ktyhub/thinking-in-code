---
title: "arthas arthas-all-4.2.1"
project: "arthas"
repo: "alibaba/arthas"
tag: "arthas-all-4.2.1"
published: "2026-06-02"
type: "release"
lang: "en"
---

# arthas arthas-all-4.2.1

## 变更概览
- fix: 修复开启 MCP password/auth 后，Streamable HTTP 异步执行 `trace` / `watch` 等命令时，已认证主体没有写入 Arthas session，导致异步 Job 创建后认证信息丢失的问题，见 #3202
- docs: 文档站点新增侧边栏树形展开/折叠与搜索能力，支持中英文搜索占位、过滤结果自动展开，以及 hash 定位时滚动到当前条目，见 #3204
- chore: `update-doc` 工作流在更新 `gh-pages` 后自动触发 `sync-to-gitee`，并为 Gitee 同步工作流补充手动触发入口，确保文档更新后镜像同步

## 对比
- https://github.com/alibaba/arthas/compare/arthas-all-4.2.0...arthas-all-4.2.1

---

> **Source** [alibaba/arthas](https://github.com/alibaba/arthas) · `arthas-all-4.2.1` · 2026-06-02 · [upstream release](https://github.com/alibaba/arthas/releases/tag/arthas-all-4.2.1)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
