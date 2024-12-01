# moby v27.4.0-rc.3
### 为什么要使用moby

在当今快速发展的技术世界中，开发者面临着无数选择，但选择一个合适的平台却常常让人感到困惑。Moby作为一个开源项目，提供了一个灵活且强大的基础，帮助开发者构建自己的容器化解决方案。然而，许多人在选择Moby时却犹豫不决，究竟是因为对其复杂性的恐惧，还是对其他工具的依赖？Moby的出现，正是为了打破这种矛盾，它不仅能简化开发流程，还能提升效率，让开发者在容器化的世界中游刃有余。

### moby是什么

Moby是一个开源项目，旨在为开发者提供一个灵活的框架，以构建和定制容器化应用程序。它是Docker的基础，允许用户根据自己的需求创建和管理容器，提供了丰富的工具和组件，帮助开发者更高效地进行开发和部署。

### 入门示例

想象一下，你是一名初创公司的开发者，正在为一款新应用构建后端服务。你决定使用Moby来创建一个微服务架构。首先，你可以使用Moby的组件来定义服务的构建方式、网络配置和存储选项。通过简单的配置文件，你可以快速启动多个服务实例，并在本地进行测试。最终，当你的应用准备好上线时，Moby将帮助你无缝地将这些服务部署到云端，确保高可用性和可扩展性。

### moby v27.4.0-rc.3版本更新了什么

Moby v27.4.0-rc.3是即将发布的27.4.0版本的预发布版本，主要用于测试新功能。此版本尚未提供完整的变更日志，但已知的更新包括对多个库的回溯更新、容器运行时和构建工具的版本提升。此外，当前版本不支持s390x和ppc64le架构，用户在报告问题时需在标题中注明“[27.4.0-rc]”。

### 更新日志

## 27.4.0-rc.3
这是即将发布的27.4.0版本的预发布版本。  
预发布版本旨在测试新版本：**仅在测试环境中安装！**

已知问题：
- 目前尚无变更日志；有关此版本中包含的拉取请求的概述可以在GitHub上找到：
  - docker cli: [27.4.0的所有拉取请求](https://github.com/docker/cli/pulls?q=is%3Apr+milestone%3A27.4.0+is%3Amerged) / [27.4.0的所有“变更日志”拉取请求](https://github.com/docker/cli/pulls?q=is%3Apr+milestone%3A27.4.0+label%3Aimpact%2Fchangelog+is%3Amerged)
  - docker engine: [27.4.0的所有拉取请求](https://github.com/moby/moby/pulls?q=is%3Apr+milestone%3A27.4.0+is%3Amerged) / [27.4.0的所有“变更日志”拉取请求](https://github.com/moby/moby/pulls?q=is%3Apr+milestone%3A27.4.0+label%3Aimpact%2Fchangelog+is%3Amerged)
- 目前尚无适用于s390x和ppc64le架构的包。

报告错误和回归可以在以下问题跟踪器中提交：
- 与CLI相关：[https://github.com/docker/cli/issues](https://github.com/docker/cli/issues)
- 与Docker Engine相关：[https://github.com/moby/moby/issues](https://github.com/moby/moby/issues)

报告问题时，请在问题标题中包含`[27.4.0-rc]`。

## 变更内容
- [27.x回溯] 供应商：github.com/golang-jwt/jwt/v4@v4.5.1
- [27.x回溯] Dockerfile：更新containerd v1.7.24，runc v1.2.2
- [27.x回溯] 供应商：github.com/containerd/continuity v0.4.5
- [27.x回溯] 供应商：resenje.org/singleflight v0.4.3
- [27.x回溯] 供应商：github.com/tonistiigi/go-actions-cache 394979b8119e
- [27.x回溯] 供应商：github.com/containerd/typeurl v2.2.3
- [27.x回溯] 更新containerd到v1.7.24
- [27.x] 供应商：github.com/moby/buildkit v0.17.2
- [27.x] 供应商：github.com/moby/buildkit 80e01a9dc7c1 (v0.17.3-dev)
- [27.x回溯] 修复拉取和导出期间的租约管理
- [27.x回溯] 移除buildkit初始化超时
- [27.x回溯] 集成：添加等待
- [27.x回溯] 修复br_netfilter模块加载逻辑
- [27.x回溯] daemon/graphdriver/zfs：在移除时忽略不存在的数据集

**完整变更日志**：[v27.4.0-rc.2...v27.4.0-rc.3](https://github.com/moby/moby/compare/v27.4.0-rc.2...v27.4.0-rc.3)

### 总结

Moby v27.4.0-rc.3版本作为即将发布的版本，主要用于测试新功能，包含多个库的回溯更新和容器运行时的版本提升。虽然尚未提供完整的变更日志，但用户可以在GitHub上查看相关的拉取请求和已知问题。