# moby v27.4.0-rc.4
### 为什么要使用moby

在当今快速发展的技术世界中，开发者们面临着许多挑战：如何高效地构建、管理和部署应用程序？如何在复杂的环境中保持灵活性和可扩展性？这时，moby的出现恰好为这些问题提供了答案。moby不仅是一个开源项目，它更是一个强大的工具，帮助开发者们在容器化的世界中游刃有余。然而，尽管它的优势显而易见，许多人仍然对其潜力感到困惑。使用moby，开发者可以轻松构建自定义的容器解决方案，提升工作效率，同时在不断变化的需求中保持竞争力。

### moby是什么

moby是一个开源项目，旨在为开发者提供一个灵活的框架，以构建和定制容器化应用程序。它是Docker的基础，允许用户根据自己的需求创建和管理容器。通过moby，开发者可以选择不同的组件，组合成一个完整的容器解决方案，从而实现更高的灵活性和可扩展性。

### 入门示例

想象一下，一个初创公司正在开发一款新应用，团队希望快速迭代并频繁发布新功能。使用moby，开发者可以创建一个自定义的容器环境，轻松集成数据库、缓存和其他服务。比如，他们可以使用以下命令快速启动一个包含MySQL数据库的容器：

```bash
moby run -d --name mydb -e MYSQL_ROOT_PASSWORD=my-secret-pw mysql:latest
```

通过这种方式，团队不仅能迅速搭建开发环境，还能在不同的机器上保持一致性，确保每个开发者都能在相同的条件下工作。

### moby v27.4.0-rc.4版本更新了什么

在最新的v27.4.0-rc.4版本中，moby进行了多项重要更新，包括对Jenkinsfile的修改、对源镜像的警告日志处理、对RepositoryInfo.Class的弃用、更新了buildkit至v0.17.3，以及将Go语言更新至1.22.10。此外，Dockerd的无根模式也得到了改进，使得相关目录可用性更高。

### 更新日志

## 27.4.0-rc.4
这是即将发布的27.4.0版本的预发布版本。  
预发布版本旨在测试新版本：**仅在测试环境中安装！**

已知问题：
- 目前没有变更日志；有关此版本中包含的拉取请求的概述可以在GitHub上找到：
  - docker cli: [所有27.4.0的拉取请求](https://github.com/docker/cli/pulls?q=is%3Apr+milestone%3A27.4.0+is%3Amerged) / [所有“变更日志”拉取请求](https://github.com/docker/cli/pulls?q=is%3Apr+milestone%3A27.4.0+label%3Aimpact%2Fchangelog+is%3Amerged)
  - docker engine: [所有27.4.0的拉取请求](https://github.com/moby/moby/pulls?q=is%3Apr+milestone%3A27.4.0+is%3Amerged) / [所有“变更日志”拉取请求](https://github.com/moby/moby/pulls?q=is%3Apr+milestone%3A27.4.0+label%3Aimpact%2Fchangelog+is%3Amerged)
- 目前尚无适用于s390x和ppc64le架构的包。

可以在以下问题追踪器中报告错误和回归：
- 与CLI相关：[https://github.com/docker/cli/issues](https://github.com/docker/cli/issues)
- 与Docker Engine相关：[https://github.com/moby/moby/issues](https://github.com/moby/moby/issues)

报告问题时，请在问题标题中包含`[27.4.0-rc]`。

## 更新内容
- [27.x回溯] Jenkinsfile: modprobe br_netfilter
- [27.x回溯] c8d/tag: 如果源镜像不是悬空的，则不记录警告
- [27.x回溯] registry: 弃用RepositoryInfo.Class
- [27.x] vendor: github.com/moby/buildkit v0.17.3
- [27.x] 更新至go1.22.10
- [27.x回溯] Dockerd无根模式: 使{/etc,/var/run}/cdi可用

**完整变更日志**: [v27.4.0-rc.3...v27.4.0-rc.4](https://github.com/moby/moby/compare/v27.4.0-rc.3...v27.4.0-rc.4)

### 总结

在v27.4.0-rc.4版本中，moby进行了多项重要更新，涵盖了从Jenkinsfile的修改到Go语言的更新，提升了容器管理的灵活性和稳定性。这些改进将为开发者提供更强大的工具，帮助他们在容器化的世界中更高效地工作。