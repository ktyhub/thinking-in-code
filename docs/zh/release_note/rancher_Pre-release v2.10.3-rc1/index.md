# rancher Pre-release v2.10.3-rc1
### 为什么要使用rancher

在当今快速发展的技术环境中，企业面临着前所未有的挑战。如何高效管理和部署容器化应用，成为了每个开发团队的头痛问题。Rancher的出现，正是为了解决这一矛盾。它不仅简化了Kubernetes的使用，还提供了一个统一的管理平台，让开发者能够轻松地在多云环境中运作。想象一下，您可以在几分钟内启动一个复杂的应用，而不必担心底层的基础设施，这正是Rancher所带来的革命性改变。

### rancher是什么

Rancher是一个开源的容器管理平台，旨在简化Kubernetes的部署和管理。它提供了一个用户友好的界面，使得开发者和运维人员能够轻松地管理多个Kubernetes集群。通过Rancher，用户可以快速配置、监控和扩展容器化应用，极大地提高了工作效率。

### 入门示例

假设您是一家初创公司的开发者，正在开发一款新应用。您希望在云端快速部署并测试这个应用。使用Rancher，您可以在几分钟内创建一个Kubernetes集群，并通过其直观的界面部署您的应用。只需上传Docker镜像，设置环境变量，点击“部署”，您的应用便会在云端运行。通过Rancher的监控功能，您还可以实时查看应用的性能数据，及时做出调整。

### rancher Pre-release v2.10.3-rc1版本更新了什么

Rancher v2.10.3-rc1版本引入了一些重要的更新，包括新的组件版本和系统图表默认分支的调整。这一版本的DASHBOARD_UI_VERSION和UI_VERSION均更新至2.10.3-rc1，确保用户能够获得最新的功能和修复。此外，多个系统图表和KDM分支也进行了相应的更新，以提升整体性能和稳定性。

### 更新日志

# 带有 -rc 的镜像
rancher/rancher v2.10.3-rc1  
rancher/rancher-agent v2.10.3-rc1  

# 带有 -rc 的组件
DASHBOARD_UI_VERSION v2.10.3-rc1  
UI_VERSION 2.10.3-rc1  

# 带有 -rc 的最小版本组件  

# Chart/KDM 源
- SYSTEM_CHART_DEFAULT_BRANCH: release-v2.10 (scripts/package-env)  
- CHART_DEFAULT_BRANCH: release-v2.10 (scripts/package-env)  
- SYSTEM_CHART_DEFAULT_BRANCH: release-v2.10 (package/Dockerfile)  
- CHART_DEFAULT_BRANCH: release-v2.10 (package/Dockerfile)  
- CATTLE_KDM_BRANCH: release-v2.10 (package/Dockerfile)  
- CATTLE_KDM_BRANCH: release-v2.10 (Dockerfile.dapper)  
- KDMBranch: release-v2.10 (pkg/settings/setting.go)  
- ChartDefaultBranch: release-v2.10 (pkg/settings/setting.go)  

### 总结

Rancher v2.10.3-rc1版本的更新记录显示了其在组件版本和系统图表方面的持续改进，确保用户能够享受到最新的功能和更高的稳定性。这些更新不仅提升了用户体验，也为开发者提供了更强大的工具，以应对日益复杂的容器管理需求。