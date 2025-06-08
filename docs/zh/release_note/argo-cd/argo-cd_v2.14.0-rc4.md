# argo-cd v2.14.0-rc4
### 为什么要使用argo-cd

在现代软件开发中，持续交付和快速迭代已成为企业成功的关键。然而，随着应用程序和基础设施的复杂性不断增加，如何有效管理这些变化成为了一个亟待解决的矛盾。Argo CD应运而生，它不仅简化了Kubernetes环境中的应用程序部署，还提供了强大的版本控制和回滚功能。想象一下，您在生产环境中遇到问题，传统的手动恢复过程可能耗时耗力，而使用Argo CD，您可以轻松地将应用程序恢复到先前的稳定版本，节省时间和资源。选择Argo CD，就是选择了一条高效、可靠的持续交付之路。

### argo-cd是什么

Argo CD是一个开源的持续交付工具，专为Kubernetes环境设计。它通过GitOps的理念，将应用程序的状态与Git仓库中的配置文件保持同步，从而实现自动化部署和管理。用户可以通过简单的界面监控应用程序的状态，并进行版本控制，确保每次部署都是可追溯和可回滚的。

### 入门示例

想象一下，您是一家初创公司的开发者，正在构建一款新应用。您决定使用Argo CD来简化部署流程。首先，您在GitHub上创建了一个包含应用程序配置的仓库。接着，您在Kubernetes集群中安装了Argo CD，并将其与您的Git仓库连接。每当您推送新的代码或配置更改时，Argo CD会自动检测到这些变化，并将应用程序部署到集群中。这样，您不仅提高了开发效率，还确保了应用程序的稳定性和一致性。

### argo-cd v2.14.0-rc4版本更新了什么

Argo CD v2.14.0-rc4版本进行了多项重要更新，包括修复了应用集生成的HTTP方法以避免路由冲突，解决了应用程序测试中的数据竞争检测失败问题。此外，所有的容器镜像现在都由cosign签名，确保了安全性和可靠性。该版本还提供了详细的升级文档，帮助用户顺利过渡到新版本。

### 更新日志

## 快速开始

### 非高可用模式：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.14.0-rc4/manifests/install.yaml
```

### 高可用模式：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.14.0-rc4/manifests/ha/install.yaml
```

## 发布签名和来源
所有Argo CD容器镜像均由cosign签名。符合SLSA Level 3规范的容器镜像和CLI二进制文件会生成来源信息。请参阅[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)以了解如何验证。

## 升级
如果您是从其他小版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/)文档。

## 更新记录

### Bug修复
- 修复了应用集生成的HTTP方法以避免路由冲突。

### 其他工作
- 修复了应用程序测试中的数据竞争检测失败问题。

**完整更新记录**: [v2.14.0-rc3...v2.14.0-rc4](https://github.com/argoproj/argo-cd/compare/v2.14.0-rc3...v2.14.0-rc4)

### 总结

在Argo CD v2.14.0-rc4版本中，开发团队修复了多个关键问题，确保了应用程序的稳定性和安全性。通过引入容器镜像签名和详细的升级文档，用户可以更安心地进行版本更新和管理。