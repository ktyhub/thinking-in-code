---
title: "arthas arthas-all-4.2.0"
project: "arthas"
repo: "alibaba/arthas"
tag: "arthas-all-4.2.0"
published: "2026-05-25"
type: "release"
lang: "en"
summary: "feat: profiler 升级内置 async-profiler 到 4.4，移除已废弃的 check action，并将 --cstack 可选值更新为 fp|dwarf|vm|vmx|no，修复 Zing JVM 崩溃相关问题，见 #3186 #3199；chore: 默认 session timeout 从 30 分钟延长到 3 小时，覆盖 as.sh、arthas.properties 和 Shell Server 默认值"
---

# arthas arthas-all-4.2.0

## 变更概览
- feat: `profiler` 升级内置 async-profiler 到 4.4，移除已废弃的 `check` action，并将 `--cstack` 可选值更新为 `fp|dwarf|vm|vmx|no`，修复 Zing JVM 崩溃相关问题，见 #3186 #3199
- chore: 默认 session timeout 从 30 分钟延长到 3 小时，覆盖 `as.sh`、`arthas.properties` 和 Shell Server 默认值
- fix: 修复 `classloader-metaspace` 在 JFR loader id 缺失时对 hidden class / array class 计数不一致导致的 ClassLoader 映射失败，并降低诊断日志噪音，见 #3198
- fix: 修复 MCP Server stop 时 graceful close 可能无限等待的问题，关闭各组件增加 5 秒超时并继续清理 task executor，见 #3194
- fix: 修复 MCP Streamable HTTP 响应关闭连接但未发送 `Connection: close` 导致客户端复用已关闭连接、集成测试偶发失败的问题，见 #3200
- chore: 移除已废弃的 `--use-http` 下载选项，`repo-mirror` 继续支持 aliyun / center / HTTP repository URL，下载默认使用 HTTPS，见 #3189
- chore: release 流水线使用 JDK 21 构建 Tunnel Server fatjar，并要求 release asset 匹配成功，见 #3192
- docs: 更新 Arthas 4.x 支持 JDK 8+（含 JDK 17 / 21 / 25）的说明，并补充 `classloader-metaspace`、AI/MCP 文档侧边栏入口，见 #3195

## 对比
- https://github.com/alibaba/arthas/compare/arthas-all-4.1.9...arthas-all-4.2.0

---

> **Source** [alibaba/arthas](https://github.com/alibaba/arthas) · `arthas-all-4.2.0` · 2026-05-25 · [upstream release](https://github.com/alibaba/arthas/releases/tag/arthas-all-4.2.0)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
