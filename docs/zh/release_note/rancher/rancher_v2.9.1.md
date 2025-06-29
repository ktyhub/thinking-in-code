# rancher v2.9.1
### Rancher是什么？

Rancher是一个开源的容器管理平台，旨在简化Kubernetes的部署和管理。它提供了一个用户友好的界面，使用户能够轻松地管理多个Kubernetes集群，支持多种云环境和本地基础设施。Rancher不仅支持容器的编排和管理，还提供了监控、日志记录和安全管理等功能，帮助开发者和运维团队更高效地管理容器化应用。

### 为什么要使用Rancher？

使用Rancher的原因有很多。首先，它提供了一个集中管理的界面，可以轻松管理多个Kubernetes集群，降低了运维的复杂性。其次，Rancher支持多种云服务提供商和本地环境，用户可以根据需求灵活选择。此外，Rancher还集成了丰富的工具和功能，如监控、日志管理和安全控制，帮助团队提高工作效率和应用的可靠性。最后，Rancher的开源特性使得用户可以根据自己的需求进行定制和扩展。

### Rancher v2.9.1版本更新了什么？

Rancher v2.9.1是Rancher的最新小版本发布，包含了新功能、增强和各种更新。以下是一些主要更新内容：

#### 集群配置

- vSphere云存储接口（CSI）现在支持Kubernetes v1.30。
- vSphere云提供程序接口（CPI）现在支持Kubernetes v1.30。
- SLE Micro 6现在支持RKE2/K3s配置的集群。

#### RKE2配置

- 修复了在RKE2上使用Kubernetes v1.30时，vSphere CSI图表部署失败的问题。
- 修复了与数据目录功能相关的问题，包括启用数据目录时快照恢复失败等。

#### Rancher应用（全局UI）

- 修复了Rancher UI在Kubernetes v1.30上显示Azure作为RKE1和RKE2集群的可能云提供者选项的问题。

#### 基于角色的访问控制（RBAC）框架

- 当前不支持通过模拟低权限账户来临时降低权限。

### 更新日志

# Release v2.9.1

> **重要提示：** 在升级到任何Rancher版本之前，请查看安装/升级说明。

Rancher v2.9.1是Rancher的最新小版本发布。这是一个社区和Prime版本的发布，介绍了新功能、增强和各种更新。

## 亮点

## 集群配置

### 功能和增强

- vSphere云存储接口（CSI）现在支持Kubernetes v1.30。
- vSphere云提供程序接口（CPI）现在支持Kubernetes v1.30。
- SLE Micro 6现在支持RKE2/K3s配置的集群。

## RKE2配置

### 主要错误修复

- 修复了在RKE2上使用Kubernetes v1.30时，vSphere CSI图表部署失败的问题。
- 修复了与数据目录功能相关的问题：
  - 启用数据目录时，RKE2集群的快照恢复失败。
  - 集群配置后，`system-agent-upgrader` SUC计划未正确应用，导致指定的`system-agent`数据目录未被使用。
  - 启用数据目录的自定义RKE2集群注册命令未包含用户指定的数据目录。

## Rancher应用（全局UI）

### 主要错误修复

- 修复了Rancher UI在Kubernetes v1.30上显示Azure作为RKE1和RKE2集群的可能云提供者选项的问题。

## 基于角色的访问控制（RBAC）框架

### 已知问题

- 当前不支持通过模拟低权限账户来临时降低权限。

# 安装/升级说明

- 如果您是第一次安装Rancher，您的环境必须满足[安装要求](https://docs.ranchermanager.rancher.io/pages-for-subheaders/installation-requirements)。

# 升级要求

- **创建备份：** 在升级Rancher之前，请[创建备份](https://docs.ranchermanager.rancher.io/how-to-guides/new-user-guides/backup-restore-and-disaster-recovery/back-up-rancher)。要在升级后回滚Rancher，您必须首先备份并恢复到之前的Rancher版本。
- **CNI要求：**
  - 对于Kubernetes v1.19及更高版本，请禁用firewalld，因为它与各种CNI插件不兼容。
  - 当升级或安装使用nf_tables作为后端数据包过滤器的Linux发行版时，请升级到RKE v1.19.2或更高版本以获取Flannel v0.13.0。

- **空气隔离环境的要求：**
  - 在空气隔离的Rancher实例前使用代理时，必须向`NO_PROXY`传递额外参数。
  - 在空气隔离环境中使用Docker安装Rancher时，必须向`docker run`命令提供自定义`registries.yaml`文件。

- **一般Docker安装的要求：**
  - 启动Rancher Docker容器时，必须使用`privileged`标志。
  - 升级Docker安装时，容器可能会出现恐慌，导致其重启。

# 版本

请参考[README](https://github.com/rancher/rancher#latest-release)以获取最新和稳定的Rancher版本。

请查看我们的[版本文档](https://docs.ranchermanager.rancher.io/getting-started/installation-and-upgrade/resources/choose-a-rancher-version)以获取有关版本和标记约定的更多详细信息。

**重要提示：** 随着Rancher Kubernetes Engine (RKE) v1.6.0的发布，我们通知客户RKE现在已被弃用。RKE将在接下来的两个版本中维护。

请注意，RKE的生命周期结束日期为2025年7月31日。Prime客户必须从RKE迁移到RKE2或k3s。

RKE2和k3s提供更强的安全性，并逐步淘汰上游已弃用的Docker机器。了解更多迁移信息[这里](https://www.suse.com/c/rke-end-of-life-by-july-2025-replatform-to-rke2-or-k3s/)。

## 其他说明

### 实验性功能

Rancher现在支持使用OCI Helm图表注册表进行应用和市场。查看有关[使用OCI基础的Helm图表存储库](https://ranchermanager.docs.rancher.com/v2.9/how-to-guides/new-user-guides/helm-charts-in-rancher/oci-repositories)的文档，并注意此功能处于实验阶段。

### 弃用的上游项目

2023年6月，微软弃用了Rancher用于通过Azure AD进行身份验证的Azure AD Graph API。在更新Rancher时，请更新配置以确保用户仍然可以使用Azure AD。

### 移除的遗留功能

集群管理中的应用功能自Rancher v2.7版本起已被弃用。此功能已被Rancher UI的“应用和市场”部分替代。

以下遗留功能自Rancher v2.7.0起已被移除。有关这些功能的弃用和移除的公告，请参见[这里](https://github.com/rancher/dashboard/issues/6864)。

**UI和后端**

- CIS扫描v1（集群）
- 管道（项目）
- Istio v1（项目）
- 日志记录v1（项目）
- RancherD

**UI**

- Multiclusterapps（全局）：Rancher UI的“多集群应用”部分中的应用。

# 先前的Rancher行为更改

## 先前的Rancher行为更改 - Rancher通用

- **Rancher v2.9.0：**
  - Kubernetes v1.25和v1.26不再支持。在升级到Rancher v2.9.0之前，请确保所有集群都在Kubernetes v1.27或更高版本上运行。