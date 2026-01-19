# rancher Pre-release v2.13.0-alpha8
### 为什么要使用Rancher

你是否曾在容器的海洋中迷失方向？当你的团队欢呼着微服务架构带来的灵活性时，你是否在深夜里独自面对数十个集群、数百个服务，以及令人眼花缭乱的YAML文件堆？这就是现代云原生时代的核心矛盾：我们追求极致的敏捷与弹性，却亲手制造了前所未有的运维复杂性。

Rancher的出现，正是为了终结这种分裂。它不是一个增加负担的工具，而是一位为你统御整个容器帝国的“指挥官”。当其他方案让你在多个控制台间疲于奔命时，Rancher提供了一个统一的视野，让你能从单一平面清晰地观察、管理和保障从开发到生产的一切。它化解了自由与秩序、创新与稳定之间的根本冲突，让你既能享受容器化带来的速度，又能牢牢掌控全局。选择Rancher，意味着选择从复杂性的泥潭中解脱，重新获得构建伟大事物的专注与平静。

### Rancher是什么

Rancher是一个开源的企业级Kubernetes管理平台。它就像Kubernetes集群的“管理中枢”，让你能够轻松地部署、管理和运维任何地方的多个Kubernetes集群——无论是在公有云、私有数据中心还是边缘节点。通过直观的图形化界面和丰富的工具集，它将复杂的容器编排操作变得简单易用，极大地降低了团队使用Kubernetes的门槛和日常运维成本。

### 入门示例

**真实场景：** 想象一个中型电商公司“速购网”。他们的应用由前端、商品服务、订单服务和用户服务组成，最初全部部署在单个虚拟机上。随着黑五促销临近，团队预见流量将激增，决定采用微服务和容器化以提高弹性。

**开发与部署示例：**
1.  **基础设施准备：** 团队在阿里云和公司内部数据中心分别采购了虚拟机。
2.  **一键部署集群：** 通过Rancher的UI，他们在几分钟内就在阿里云上创建了一个托管的K8s集群（如ACK），同时通过RKE2在内部数据中心快速部署了一个自托管的K8s集群。两个集群被统一纳管到Rancher控制台下。
3.  **应用部署：** 开发人员无需精通复杂的`kubectl`命令。他们为每个服务编写了简单的Dockerfile，并通过Rancher的GitLab集成功能，将代码仓库与部署流水线连接。一旦代码合并到主分支，Rancher便自动构建镜像并滚动更新到**开发命名空间**的集群中。
4.  **跨集群服务发现：** 订单服务需要调用位于内部数据中心的用户服务。运维人员在Rancher中启用“服务网格”功能，轻松配置了跨集群的服务发现与通信，无需修改业务代码。
5.  **监控与告警：** 通过Rancher内置的监控功能，团队为所有服务的关键指标（如订单服务的QPS和延迟）设置了仪表盘和告警规则。当流量洪峰来临时，他们能实时观察状态，并通过Rancher快速扩容Pod实例数，平稳度过了促销期。

### Rancher Pre-release v2.13.0-alpha8版本更新了什么

此版本主要聚焦于组件与依赖项的提前更新和集成测试。它发布了多个核心组件及云提供商驱动的候选版本（-rc），例如Rancher Agent、Webhook、备份恢复操作符以及针对AKS、EKS、GKE的各类操作符。同时，明确了该项目当前基于`dev-v2.13`分支进行构建，所有相关的图表和KDM（Kubernetes Driver Metadata）数据均来源于此开发分支，为后续正式版的功能稳定做准备。

### 更新日志

#### Images with -rc
rancher/backup-restore-operator:v9.0.0-rc.3
rancher/prometheus-federator:v5.0.0-rc.3
rancher/rancher-agent:v2.13.0-alpha8
rancher/rancher-webhook:v0.9.0-rc.14
rancher/rancher:v2.13.0-alpha8
rancher/remotedialer-proxy:v0.6.0-rc.4
rancher/rke2-cloud-provider:v1.32.0-rc3.0.20241220224140-68fbd1a6b543-build20250101
rancher/rke2-cloud-provider:v1.32.5-rc1.0.20250516182639-8e8f2a4726fd-build20250612
rancher/rke2-cloud-provider:v1.32.8-rc1.0.20250814215348-fe896f7e7cf8-build20250908
rancher/rke2-cloud-provider:v1.33.0-rc1.0.20250430074337-dc03cb4b3faa-build20250430
rancher/rke2-cloud-provider:v1.33.0-rc1.0.20250905195603-857412ae5891-build20250908
rancher/rke2-cloud-provider:v1.33.4-rc1.0.20250814212538-148243c49519-build20250908
rancher/scc-operator:v0.3.1-rc.2
rancher/shell:v0.6.0-rc.1
rancher/system-agent:v0.3.14-rc.4-suc
rancher/turtles:v0.25.0-rc.4
rancher/wins:v0.5.3-rc.4

#### Components with -rc
CLI_VERSION v2.12.0-rc.1
DASHBOARD_UI_VERSION v2.13.0-alpha7
SYSTEM_AGENT_VERSION v0.3.14-rc.4
UI_VERSION 2.13.0-alpha7
WINS_AGENT_VERSION v0.5.3-rc.4
AKS-OPERATOR v1.13.0-rc.4
ALI-OPERATOR v1.13.0-rc.2
DYNAMICLISTENER v0.7.3-rc.1
EKS-OPERATOR v1.13.0-rc.4
GKE-OPERATOR v1.13.0-rc.3
REMOTEDIALER v0.6.0-rc.1
REMOTEDIALER-PROXY v0.6.0-rc.4
RKE v1.8.0-rc.4

#### Min version components with -rc

#### Chart/KDM sources
- CHART_DEFAULT_BRANCH: dev-v2.13 (`scripts/package-env`)
- CHART_DEFAULT_BRANCH: dev-v2.13 (`package/Dockerfile`)
- CATTLE_KDM_BRANCH: dev-v2.13 (`package/Dockerfile`)
- CATTLE_KDM_BRANCH: dev-v2.13 (`Dockerfile.dapper`)
- KDMBranch: dev-v2.13 (`pkg/settings/setting.go`)
- ChartDefaultBranch: dev-v2.13 (`pkg/settings/setting.go`)

### 总结
本次更新日志集中列出了v2.13.0-alpha8版本所包含的、处于候选发布阶段的所有核心镜像与组件版本，并明确了该预发布版本基于`dev-v2.13`开发分支进行构建和集成。