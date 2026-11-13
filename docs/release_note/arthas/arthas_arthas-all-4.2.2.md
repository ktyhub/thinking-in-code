---
title: "arthas arthas-all-4.2.2"
project: "arthas"
repo: "alibaba/arthas"
tag: "arthas-all-4.2.2"
published: "2026-06-04"
type: "release"
lang: "en"
---

# arthas arthas-all-4.2.2

## 变更概览
- fix: 修复 MCP `tools/call` 自动轮询任务超时时间固定为 30s 的问题，现在会根据正数 `arguments.timeout` 追加 10s grace window，同时保留配置的 automatic polling timeout 作为最小等待时间，并补充 timeout 边界测试，见 #3205
- docs: 新增中英文外部命令加载文档，覆盖 `--command-locations`、`arthas.commandLocations`、Spring Boot relaxed binding 和 `${arthas.home}/commands`，并补充侧边栏、命令索引、高级用法和 Arthas properties 链接，见 #3206

## 对比
- https://github.com/alibaba/arthas/compare/arthas-all-4.2.1...arthas-all-4.2.2

---

> **Source** [alibaba/arthas](https://github.com/alibaba/arthas) · `arthas-all-4.2.2` · 2026-06-04 · [upstream release](https://github.com/alibaba/arthas/releases/tag/arthas-all-4.2.2)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
