# argo-cd v2.12.9
### 为什么要使用argo-cd

在当今快速发展的软件开发环境中，持续交付和自动化部署已成为企业成功的关键。然而，许多团队在管理复杂的 Kubernetes 应用程序时面临着巨大的挑战：如何确保代码的每一次更改都能顺利、可靠地部署到生产环境？这就是 Argo CD 的价值所在。它不仅能帮助团队实现 GitOps 流程，还能在多云环境中提供一致的部署体验。然而，许多开发者仍在犹豫：是选择传统的手动部署，还是迈出这一步，拥抱 Argo CD 这一现代化工具？选择 Argo CD，意味着选择高效、灵活和可控的部署方式，打破了传统与现代之间的矛盾。

### argo-cd是什么

Argo CD 是一个开源的持续交付工具，专为 Kubernetes 环境设计。它通过 GitOps 方法实现应用程序的自动化部署和管理，允许开发者通过 Git 仓库来定义和管理应用的状态。Argo CD 提供了一个直观的用户界面，帮助团队实时监控和管理应用程序的部署状态，确保应用始终与 Git 中定义的状态保持一致。

### 入门示例

想象一下，一个初创公司正在开发一款新应用，团队希望快速迭代并频繁发布新功能。通过使用 Argo CD，开发者可以将应用的 Kubernetes 配置文件存储在 Git 仓库中。每当代码合并到主分支时，Argo CD 会自动检测到变化，并将最新的配置应用到 Kubernetes 集群中。例如，开发者在 Git 中提交了一个新的服务配置，Argo CD 立即将这个新服务部署到生产环境，确保用户能够快速体验到最新的功能。这种方式不仅提高了发布效率，还减少了人为错误的可能性。

### argo-cd v2.12.9版本更新了什么

在 Argo CD v2.12.9 版本中，修复了一些关键的 bug，包括在合并日志流时发送到关闭通道的问题。此外，针对 CVE-2024-21538 的安全漏洞进行了修复，升级了间接依赖项 cross-spawn 到 7.0.5 版本。所有的 Argo CD 容器镜像现在都由 cosign 签名，确保了发布资产的安全性和可靠性。用户在升级时需要注意查看相关文档，以确保顺利过渡。

### 更新日志

## 快速开始

### 非高可用模式：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.12.9/manifests/install.yaml
```

### 高可用模式：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.12.9/manifests/ha/install.yaml
```

## 发布签名和来源
所有 Argo CD 容器镜像均由 cosign 签名。符合 SLSA Level 3 规范的容器镜像和 CLI 二进制文件生成了来源信息。有关如何验证的详细信息，请参阅 [文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

## 升级
如果从不同的小版本进行升级，请务必阅读 [升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/) 文档。

## 更新记录
### Bug 修复
- 修复了在合并日志流时发送到关闭通道的问题。
- 针对 CVE-2024-21538 的安全漏洞进行了修复，升级了间接依赖项 cross-spawn 到 7.0.5 版本。

**完整更新记录**: [v2.12.8...v2.12.9](https://github.com/argoproj/argo-cd/compare/v2.12.8...v2.12.9)

### 总结

在 Argo CD v2.12.9 版本中，关键的 bug 修复和安全漏洞的修复提升了系统的稳定性和安全性，同时确保了用户在使用过程中的信心。通过这些更新，Argo CD 继续为开发者提供一个可靠的持续交付解决方案。