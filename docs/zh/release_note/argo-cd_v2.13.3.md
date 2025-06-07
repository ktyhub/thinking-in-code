# argo-cd v2.13.3
### 为什么要使用argo-cd

在当今快速发展的技术环境中，持续交付和自动化部署已成为企业成功的关键。然而，许多团队在管理复杂的 Kubernetes 应用程序时面临着巨大的挑战：如何确保代码的快速发布与系统的稳定性之间的平衡？这正是 Argo CD 进入舞台的时刻。它不仅能简化应用程序的部署流程，还能通过 GitOps 的理念，让团队在版本控制中获得更高的透明度和可追溯性。想象一下，您可以通过简单的 Git 操作来管理整个应用程序的生命周期，而不必担心繁琐的手动步骤，这种矛盾的解决方案正是 Argo CD 的魅力所在。

### argo-cd是什么

Argo CD 是一个开源的持续交付工具，专为 Kubernetes 环境设计。它采用 GitOps 的方法，允许用户通过 Git 仓库来管理和部署 Kubernetes 应用程序。通过 Argo CD，开发团队可以实现自动化的应用程序部署、监控和管理，从而提高开发效率和系统稳定性。

### 入门示例

想象一下，一个初创公司正在开发一款新应用，团队决定使用 Kubernetes 来管理其微服务架构。通过 Argo CD，开发者可以将应用的配置文件存储在 Git 仓库中。每当代码更新时，Argo CD 会自动检测到变化并将新版本部署到 Kubernetes 集群中。比如，当开发者提交一个新的功能分支时，Argo CD 会根据预设的策略自动将其合并到主分支，并在几分钟内完成部署。这种自动化的流程不仅节省了时间，还减少了人为错误的可能性。

### argo-cd v2.13.3版本更新了什么

Argo CD v2.13.3 版本主要修复了一些 bug，包括合并日志流时的通道关闭问题、应用集生成的核心模式修复，以及项目详情中的未定义引用检查。此外，还优化了应用集生成的 HTTP 方法，以避免路由冲突。最后，修复了在指定目标服务器时未填充目标名称的问题。

### 更新日志

## 快速开始
### 非高可用：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.13.3/manifests/install.yaml
```
### 高可用：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.13.3/manifests/ha/install.yaml
```

## 发布签名和来源
所有 Argo CD 容器镜像均由 cosign 签名。符合 SLSA Level 3 规范的容器镜像和 CLI 二进制文件会生成来源信息。请参阅 [文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets) 以了解如何验证。

## 升级
如果您是从不同的小版本升级，请务必阅读 [升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) 文档。

## 更新日志
### Bug 修复
- 修复了合并日志流时发送到关闭通道的问题。
- 修复了在核心模式下生成应用集时的问题。
- 在项目详情中添加了可选检查，以避免未定义引用。
- 更改了应用集生成的 HTTP 方法，以避免路由冲突。
- 在指定目标服务器时填充目标名称。

**完整更新记录**: [v2.13.2...v2.13.3](https://github.com/argoproj/argo-cd/compare/v2.13.2...v2.13.3)

### 总结

在 Argo CD v2.13.3 版本中，开发团队专注于修复了一系列关键的 bug，确保了更稳定的应用程序管理体验。这些更新不仅提升了系统的可靠性，也为用户提供了更流畅的操作体验。