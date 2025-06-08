# argo-cd v2.14.3
### 为什么要使用argo-cd

在现代软件开发中，持续交付和快速迭代已成为企业成功的关键。然而，随着应用程序的复杂性增加，如何高效地管理和部署这些应用程序成为了一个巨大的挑战。传统的手动部署方式不仅耗时，而且容易出错，导致生产环境的不稳定。此时，Argo CD应运而生，作为一种声明式的GitOps工具，它能够将应用程序的状态与Git仓库中的配置保持同步，自动化部署流程，减少人为干预的风险。使用Argo CD，不仅可以提高开发效率，还能确保系统的稳定性和可追溯性，真正实现“代码即基础设施”的理念。

### argo-cd是什么

Argo CD是一个开源的持续交付工具，专为Kubernetes环境设计。它允许用户通过Git仓库来管理应用程序的配置和状态，采用声明式的方法来实现自动化部署。Argo CD能够监控Git仓库中的变化，并自动将这些变化应用到Kubernetes集群中，确保集群的实际状态与所定义的状态一致。它提供了用户友好的Web界面和CLI工具，方便开发者和运维人员进行管理和监控。

### 入门示例

想象一下，一个初创公司正在开发一款新的移动应用，团队决定使用Kubernetes来管理其后端服务。为了简化部署流程，他们选择了Argo CD。首先，团队将应用程序的配置文件存储在GitHub上。每当他们更新代码并推送到Git仓库时，Argo CD会自动检测到这些变化，并将新的配置应用到Kubernetes集群中。通过这种方式，团队不仅节省了大量的手动部署时间，还确保了每次部署的可追溯性和一致性。

### argo-cd v2.14.3版本更新了什么

Argo CD v2.14.3版本带来了多个重要更新，包括修复了应用集在滚动同步时卡在待处理状态的问题，优化了hydrator的功能，避免了不必要的集群或API版本查询。此外，该版本还改进了Kubernetes应用程序的处理逻辑，确保在应用补丁时能够正确查找kustomization文件。最后，文档也进行了更新，以提高用户对源hydrator成熟度的理解。

### 更新日志

## 快速开始

### 非高可用模式：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.14.3/manifests/install.yaml
```

### 高可用模式：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.14.3/manifests/ha/install.yaml
```

## 发布签名和来源
所有Argo CD容器镜像均由cosign签名。符合SLSA Level 3规范的容器镜像和CLI二进制文件会生成来源信息。有关如何验证的详细信息，请参见[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

## 升级
如果从不同的次要版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/)文档。

## 更新记录

### Bug修复
- 修复了应用集在滚动同步时卡在待处理状态的问题。
- 优化了hydrator，避免了不必要的集群或API版本查询。
- 改进了hydrator的逻辑，确保在应用补丁时能够正确查找kustomization文件。
- 修复了通过注释而非工作队列进行刷新时的逻辑问题。
- 确保在请求应用刷新时正确设置compareWith。

### 文档
- 更新了源hydrator的成熟度文档。

### 其他工作
- 为v2.14版本添加了cherry-pick。

**完整更新记录**: [v2.14.2...v2.14.3](https://github.com/argoproj/argo-cd/compare/v2.14.2...v2.14.3)

### 总结

在Argo CD v2.14.3版本中，开发团队通过修复多个关键问题和优化功能，进一步提升了用户体验和系统稳定性。同时，文档的更新也为用户提供了更清晰的指导，帮助他们更好地理解和使用这一强大的持续交付工具。