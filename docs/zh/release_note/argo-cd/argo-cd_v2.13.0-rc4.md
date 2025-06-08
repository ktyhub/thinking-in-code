# argo-cd v2.13.0-rc4
### 为什么要使用argo-cd

在当今快速发展的软件开发环境中，持续交付和自动化部署已成为企业成功的关键。然而，许多团队在管理复杂的Kubernetes环境时面临着巨大的挑战：如何确保每次部署都能顺利进行，如何在多种环境中保持一致性，如何快速响应变化？这时，Argo CD应运而生。它不仅提供了强大的GitOps功能，还能帮助团队在面对不断变化的需求时，保持高效和灵活。选择Argo CD，意味着选择了一条通往高效、可靠和可持续交付的道路。

### argo-cd是什么

Argo CD是一个开源的持续交付工具，专为Kubernetes设计。它通过GitOps的方式，允许用户将应用程序的状态定义在Git仓库中，并自动将这些状态同步到Kubernetes集群中。Argo CD提供了直观的用户界面和强大的CLI工具，使得管理和监控应用程序变得简单高效。

### 入门示例

想象一下，一个初创公司正在开发一款新应用，团队希望在Kubernetes上进行快速迭代。使用Argo CD，开发者可以将应用的配置文件存储在GitHub上。当代码提交后，Argo CD会自动检测到变化，并将新的配置应用到Kubernetes集群中。比如，开发者在Git中更新了应用的Docker镜像版本，Argo CD会自动拉取最新的镜像并进行部署，确保用户始终能体验到最新的功能。这种自动化的流程不仅提高了开发效率，还减少了人为错误。

### argo-cd v2.13.0-rc4版本更新了什么

在v2.13.0-rc4版本中，Argo CD引入了多个新特性和修复，包括在每个历史版本中显示SHA的修订信息，改进了CI的处理逻辑，修复了UI中的一些问题，以及优化了控制器的状态管理。这些更新旨在提升用户体验和系统稳定性。

### 更新日志

## 快速开始

### 非高可用模式：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.13.0-rc4/manifests/install.yaml
```

### 高可用模式：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v2.13.0-rc4/manifests/ha/install.yaml
```

## 发布签名和来源
所有Argo CD容器镜像均由cosign签名。符合SLSA Level 3规范的容器镜像和CLI二进制文件会生成来源信息。有关如何验证的详细信息，请参见[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

## 升级
如果从不同的次要版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/)文档。

## 更新记录

### 新特性
- 在每个历史版本中显示SHA的修订信息。

### Bug修复
- 修复了CI处理新k3s测试版本矩阵的问题。
- 修复了UI中源可能为`undefined`的情况。
- 在使用调度和持续时间前检查错误。

### 其他工作
- 修复了与sidecar状态相关的pod问题。
- 防止在流关闭后定时器过期时崩溃。

**完整更新记录**: [v2.13.0-rc3...v2.13.0-rc4](https://github.com/argoproj/argo-cd/compare/v2.13.0-rc3...v2.13.0-rc4)

### 总结

在v2.13.0-rc4版本中，Argo CD不仅增强了用户体验，还修复了多个关键问题，确保了系统的稳定性和可靠性。新特性和修复的引入，使得开发者在使用Argo CD时能够更加高效和安心。

### 爆款标题

- "Argo CD v2.13.0-rc4发布：新特性与修复提升用户体验！"
- "探索Argo CD v2.13.0-rc4：让持续交付更简单！"
- "Argo CD v2.13.0-rc4更新：解决关键问题，提升稳定性！"
- "新版本来袭！Argo CD v2.13.0-rc4带来哪些惊喜？"
- "Argo CD v2.13.0-rc4：GitOps的未来，稳定性与效率的双重保障！"