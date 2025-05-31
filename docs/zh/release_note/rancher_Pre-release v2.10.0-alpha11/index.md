# rancher Pre-release v2.10.0-alpha11
为什么要使用rancher

在当今快速发展的云计算时代，企业面临着管理复杂的容器化应用程序的挑战。Rancher作为一个开源的容器管理平台，提供了一个简化的解决方案，帮助开发者和运维团队高效地管理和部署Kubernetes集群。然而，许多团队在选择容器管理工具时常常陷入困境：是选择复杂的解决方案，还是使用简单易用的工具？Rancher的出现正是为了打破这种矛盾，它不仅提供了强大的功能，还以用户友好的界面和灵活的管理方式，帮助团队在复杂性与效率之间找到平衡。

rancher是什么

Rancher是一个开源的容器管理平台，旨在简化Kubernetes的部署和管理。它提供了一个集中式的界面，允许用户轻松创建、管理和扩展Kubernetes集群，同时支持多种云环境和本地部署。Rancher还集成了多种工具和服务，帮助用户实现更高效的容器化应用管理。

入门示例

想象一下，一个初创公司希望快速推出一款新的在线服务。他们决定使用Kubernetes来管理其容器化应用，但对Kubernetes的复杂性感到畏惧。通过使用Rancher，这家公司可以在几分钟内创建一个Kubernetes集群，并通过直观的界面轻松管理其应用程序。开发者可以在Rancher中快速部署新的服务，监控其性能，并根据需要进行扩展。这种简化的流程使得团队能够专注于开发，而不是基础设施的管理。

rancher Pre-release v2.10.0-alpha11版本更新了什么

Rancher v2.10.0-alpha11版本引入了一些重要的更新，包括多个组件的版本升级和修复。此版本中，系统代理和Wins代理的版本分别更新为v0.3.11-rc.1和v0.4.20-rc.1。此外，Rancher还更新了多个图表和KDM源，以支持更好的功能和性能。这些更新旨在提升用户体验和系统稳定性。

更新日志

### 带有-rc的镜像
- rancher/cis-operator v1.3.0-rc.1
- rancher/prometheus-federator v0.4.3-rc.1
- rancher/rancher-csp-adapter v5.0.1-rc1
- rancher/rancher-webhook v0.6.1-rc.12
- rancher/security-scan v0.5.0-rc.1
- rancher/shell v0.3.0-rc.2
- rancher/system-agent v0.3.11-rc.1-suc
- rancher/wins v0.4.20-rc.1

### 带有-rc的组件
- SYSTEM_AGENT_VERSION v0.3.11-rc.1
- WINS_AGENT_VERSION v0.4.20-rc.1
- DYNAMICLISTENER v0.6.1-rc.2
- RKE v1.7.0-rc.5

### 带有-rc的最小版本组件

### Chart/KDM源
- SYSTEM_CHART_DEFAULT_BRANCH: release-v2.9 (scripts/package-env)
- CHART_DEFAULT_BRANCH: dev-v2.10 (scripts/package-env)
- SYSTEM_CHART_DEFAULT_BRANCH: release-v2.9 (package/Dockerfile)
- CHART_DEFAULT_BRANCH: dev-v2.10 (package/Dockerfile)
- CATTLE_KDM_BRANCH: dev-v2.10 (package/Dockerfile)
- CATTLE_KDM_BRANCH: dev-v2.10 (Dockerfile.dapper)
- KDMBranch: dev-v2.10 (pkg/settings/setting.go)
- ChartDefaultBranch: dev-v2.10 (pkg/settings/setting.go)

总结

在Rancher v2.10.0-alpha11版本中，多个组件和镜像得到了更新，提升了系统的稳定性和功能性。这些更新为用户提供了更好的管理体验，确保了容器化应用的高效运行。