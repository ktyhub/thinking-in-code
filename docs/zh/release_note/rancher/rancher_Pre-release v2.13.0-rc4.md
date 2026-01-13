# rancher Pre-release v2.13.0-rc4
### 为什么要使用Rancher

你是否曾感觉自己被困在无尽的 Kubernetes 迷宫中？YAML 文件像藤蔓一样缠绕，集群监控如同在浓雾中摸索，而安全策略的配置则像在走钢丝。每一个新应用的部署，都是一场与复杂性的肉搏战。我们拥抱容器化和云原生的承诺——敏捷、弹性、高效，但随之而来的管理重负却几乎要将这些好处吞噬。这就是当代开发者和运维团队心中最尖锐的矛盾：我们使用了堪称伟大的技术来构建未来，却被迫耗费大量精力去管理工具本身，而非创造业务价值。

Rancher 的出现，正是为了终结这种困境。它不是你工具箱里的另一件复杂工具，而是为你提供逃离迷宫的**地图与指南针**。使用 Rancher，意味着你选择将有限的、宝贵的时间专注于创新和交付，而不是深陷于运维的泥潭。它直面了云原生时代的核心矛盾：在追求极致弹性与规模的同时，如何保持管理的简洁与心智的清明。选择 Rancher，就是选择夺回控制权，选择让技术真正服务于人，而非相反。

### Rancher是什么

简而言之，Rancher 是一个**全栈化的 Kubernetes 管理平台**。它让在任何地方（数据中心、云、边缘）部署、运行和管理 Kubernetes 集群变得像点击按钮一样简单。你可以把它理解为你所有 Kubernetes 操作的统一控制中心和仪表盘。

### 入门示例

想象一下，你是一家小微企业的唯一 DevOps 工程师，需要快速为一个新的电商微服务应用搭建生产环境。

**真实场景：**
应用包含前端（Nginx）、后端API（Node.js）和数据库（PostgreSQL）。你需要：1）快速建立开发和生产两个 Kubernetes 集群；2）确保两个环境配置一致；3）安全地部署应用并暴露服务；4）让开发团队能轻松查看日志和监控状态。

**开发示例：**
1.  **安装 Rancher**：在一台 Linux 服务器上，一条 Docker 命令即可启动 Rancher 管理服务器。
    ```bash
    sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher:latest
    ```
2.  **创建集群**：登录 Rancher 清爽的 Web UI。
    *   点击“创建集群”，为开发环境选择“DigitalOcean”（或 AWS、Azure 等），授权后，Rancher 自动帮你创建并配置好一个标准的 K8s 集群。
    *   同理，再创建一个生产集群。整个过程无需手动编写 Terraform 或 CloudFormation 脚本。
3.  **部署应用**：
    *   在 Rancher 的“应用市场”中，一键部署 PostgreSQL（Helm Chart 已集成）。
    *   通过 Rancher 的“工作负载”页面，使用直观的表单或上传简化的 YAML，部署你的 Node.js 后端和 Nginx 前端。Rancher 会自动处理服务发现和内部 DNS。
4.  **暴露与服务**：
    *   使用 Rancher 内置的负载均衡器管理功能，为前端服务创建一个 Ingress，自动配置 DNS 和 SSL 证书（与 Let‘s Encrypt 集成），让用户能通过 `https://shop.yourcompany.com` 访问。
5.  **统一管理**：
    *   现在，你可以在 Rancher 的同一个界面上，同时监控开发和生产集群的 CPU、内存使用情况，查看任何一个容器的实时日志，管理两个集群的访问权限（让开发团队只能访问开发环境）。

至此，一个具备完整 CI/CD 预备环境的基础设施就在短时间内搭建完毕，而你几乎没写过复杂的 K8s 清单文件。

### Rancher Pre-release v2.13.0-rc4版本更新了什么

根据官方发布页面信息，v2.13.0-rc4 作为候选版本，主要聚焦于最终发布前的打磨与集成：
1.  **安全与核心更新**：升级了关键的 `rancher-agent` 和 `rancher` 主镜像至 rc4 版本，通常包含错误修复和安全加固。
2.  **生态系统同步**：提供了多个新版 Kubernetes（v1.32， v1.33）的 RKE2 云提供商插件的候选版本，增强了与最新 K8s 版本的兼容性和稳定性。
3.  **组件版本管理**：明确了该项目依赖的所有图表（Chart）和 KDM（Kubernetes 版本元数据）均锁定在 `release-v2.13` 分支，确保了构建的一致性和可重复性。
4.  **为正式版铺路**：此版本整合了特定时间点（如 build20250908）前的所有组件修复，是迈向稳定版 v2.13.0 的重要一步。

### 更新日志

#### 包含 -rc 标签的镜像
*   rancher/rancher-agent:v2.13.0-rc4
*   rancher/rancher:v2.13.0-rc4
*   rancher/rke2-cloud-provider:v1.32.0-rc3.0.20241220224140-68fbd1a6b543-build20250101
*   rancher/rke2-cloud-provider:v1.32.5-rc1.0.20250516182639-8e8f2a4726fd-build20250612
*   rancher/rke2-cloud-provider:v1.32.8-rc1.0.20250814215348-fe896f7e7cf8-build20250908
*   rancher/rke2-cloud-provider:v1.33.0-rc1.0.20250430074337-dc03cb4b3faa-build20250430
*   rancher/rke2-cloud-provider:v1.33.0-rc1.0.20250905195603-857412ae5891-build20250908
*   rancher/rke2-cloud-provider:v1.33.4-rc1.0.20250814212538-148243c49519-build20250908

#### 图表与KDM源分支
项目构建依赖于以下固定的代码分支：
*   `CHART_DEFAULT_BRANCH` 设定为 `release-v2.13`（在 `scripts/package-env` 和 `package/Dockerfile` 中）。
*   `CATTLE_KDM_BRANCH` 设定为 `release-v2.13`（在 `package/Dockerfile` 和 `Dockerfile.dapper` 中）。
*   在 Go 代码层面（`pkg/settings/setting.go`），`KDMBranch` 与 `ChartDefaultBranch` 也均设置为 `release-v2.13`。

### 总结
本次更新日志明确了 v2.13.0-rc4 版本所使用的所有候选镜像标签，并揭示了其内部构建已完全基于稳定的 `release-v2.13` 分支进行，这标志着该版本已进入发布前的最终整合与稳定化阶段。