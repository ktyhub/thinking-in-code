---
title: "arthas arthas-all-4.1.9"
project: "arthas"
repo: "alibaba/arthas"
tag: "arthas-all-4.1.9"
published: "2026-05-09"
type: "release"
lang: "en"
summary: "feat: 新增 classloader-metaspace 命令，支持按 ClassLoader 实例统计 metaspace / class metadata 内存，见 #3188；feat: MCP Server 支持 task 模式，支持长时间工具调用的异步执行、查询/取消，并限制并发 task session，见 #3140 #3182 #3185"
---

# arthas arthas-all-4.1.9

## 变更概览
- feat: 新增 `classloader-metaspace` 命令，支持按 ClassLoader 实例统计 metaspace / class metadata 内存，见 #3188
- feat: MCP Server 支持 task 模式，支持长时间工具调用的异步执行、查询/取消，并限制并发 task session，见 #3140 #3182 #3185
- feat: 支持从启动 jar 加载外部命令，并补充外部命令集成测试，见 #3177
- feat: `grep` 命令新增 `-c, --count` 选项，只输出匹配行数
- feat: 新增 `loongarch64` 平台支持，见 #3164
- fix: 修复 Arthas 启动时 `main_class` 展示额外参数的问题，见 #3150
- fix: 修复 `tt` 列出 fragments 时可能出现 NPE 的问题，见 #3171
- fix: `vmtool` 支持 `Object[]` 这类数组 className 写法，见 #3178
- chore: 升级 Tunnel Server 到 Spring Boot 3.5 / 3.5.14，升级 Netty，Docker 基础镜像切换到 Eclipse Temurin，见 #3173 #3179 #3181 #3158
- docs: 更新 MCP Server、vmtool、retransform 等文档，见 #3151 #3155 #3159

## 对比
- https://github.com/alibaba/arthas/compare/arthas-all-4.1.8...arthas-all-4.1.9

---

> **Source** [alibaba/arthas](https://github.com/alibaba/arthas) · `arthas-all-4.1.9` · 2026-05-09 · [upstream release](https://github.com/alibaba/arthas/releases/tag/arthas-all-4.1.9)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
