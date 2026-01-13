# kops v1.35.0-alpha.1
好的，让我们开始吧。我会以你要求的风格和结构，来创作这篇关于 kOps 的文章。

### 为什么要使用kOps

想象一下，你站在一片广袤无垠的乐高积木海前，你的任务是搭建一座精密、稳固且能自动扩展的星际要塞。每一块积木都是一个服务器，每一处连接都是一个网络规则。你可以选择亲手，一块一块地拼接、校验、测试——这需要数周甚至数月，且一次手滑就可能导致全线崩溃。

这就是手动部署和管理生产级 Kubernetes 集群的真相：复杂、耗时、极易出错。你深陷于基础设施的泥沼，与无尽的 YAML 文件、网络配置、安全组和节点生命周期搏斗，而本该属于你的创造力和战略价值，却被这些重复的苦役无情吞噬。

矛盾就在这里：Kubernetes 的本意是解放我们，管理容器的复杂性，但我们却被“管理 Kubernetes 本身”的复杂性所奴役。我们渴望云的原生敏捷，却亲手为自己铸造了新的运维枷锁。

于是，kOps 出现了。它不是一个简单的工具，而是一位经验丰富的“要塞建筑师”。你只需告诉它蓝图：集群规模、节点类型、网络方案。剩下的，从云端资源的创建、Kubernetes 组件的部署、到高可用架构的搭建，全部交由它自动化完成。它将你从“如何建造”的重复劳动中彻底解放，让你能专注于“建造什么”和“为何建造”的核心使命。使用 kOps，不是选择一个工具，而是选择夺回你的时间与专注，将基础设施转化为真正的创新动力。

### kops是什么

kOps（Kubernetes Operations）是 Kubernetes 官方孵化的项目，它如同 Kubernetes 集群的专属指挥家。简而言之，它是一个命令行工具，能够让你像管理一个应用程序一样，通过声明式的方式，轻松地在 AWS、GCP 等云平台上创建、销毁、升级和维护高可用的生产级 Kubernetes 集群。

它封装了集群生命周期的所有复杂性，让你通过几条简单的命令，就能获得一个 Ready for Production 的 Kubernetes 环境。

### 入门示例

让我们描绘一个真实的场景：**“闪电”电商团队需要快速搭建一个隔离的测试环境，以验证新的微服务架构。**

在没有 kOps 的日子里，这可能需要运维团队介入，耗费一天甚至更久。但现在，开发工程师小林可以轻松搞定：

1.  **规划蓝图**：小林决定在 AWS 的 `us-east-1` 区域建立一个集群，包含 3 个控制平面节点（确保高可用）和 5 个工作节点，使用 Calico 作为网络插件。
2.  **一键创建**：在配置好 AWS CLI 凭证后，他运行了以下命令：
    ```bash
    kops create cluster \
      --name=test-cluster.example.com \
      --cloud=aws \
      --zones=us-east-1a,us-east-1b,us-east-1c \
      --node-count=5 \
      --node-size=t3.medium \
      --master-size=t3.small \
      --master-zones=us-east-1a,us-east-1b,us-east-1c \
      --networking=calico \
      --yes
    ```
3.  **静待花开**：kOps 开始工作。它在后台自动创建了 VPC、子网、安全组、IAM 角色、负载均衡器，并初始化所有虚拟机，安装并配置好所有 Kubernetes 组件（API Server、etcd、Controller Manager、Scheduler、CNI 等）。
4.  **环境就绪**：大约 10-15 分钟后，小林通过 `kubectl get nodes` 看到了所有节点状态均为 `Ready`。一个完整、高可用的 Kubernetes 测试集群已然就绪。
5.  **投入开发**：团队立即可以开始部署他们的新微服务进行测试。当测试完成后，一句 `kops delete cluster --name=test-cluster.example.com --yes`，所有相关云资源被干净彻底地清除，成本得到完美控制。

这个示例展示了 kOps 如何将“天”级别的任务压缩到“分钟”级别，并赋予开发者前所未有的基础设施自主权。

### kops v1.35.0-alpha.1版本更新了什么

kOps 1.35.0-alpha.1 版本是一个着眼于未来和深度优化的预览。它的核心更新围绕 **ClusterAPI 集成**、**性能与资源优化** 以及 **平台功能增强** 展开。此版本显著改进了与 ClusterAPI 的交互体验，并增加了生成其对象的新工具。同时，它引入了对 Ubuntu 25.10 的初步支持，更新了 Karpenter、containerd 等关键组件，并移除了多个已不再需要的旧依赖包和参数，使得集群更精简高效。此外，在 AWS、GCP、Azure 等云提供商方面也进行了一系列问题修复和功能改进。

### 更新日志
**更新内容**
*   为 K8s 1.34 以下版本更新 etcd 至 v3.5.23。
*   停止渲染大型 CAPI 清单。
*   更新 OpenStack CSI 镜像。
*   新增工具箱命令以生成 ClusterAPI 对象。
*   允许从 kubetest2-kops 导出环境变量。
*   更新测试中使用的 kOps 版本。
*   构建依赖更新：将 actions/dependency-review-action 从 4.8.0 升级至 4.8.1。
*   AWS：将 Karpenter 更新至 v1.8.1。
*   清理旧版（未使用的）bazel 库。
*   AWS：增加设置 Karpenter 功能门的选项。
*   移除未使用的 kubelet 标志 `--pod-infra-container-image`。
*   GCE：在 kops 上运行规模测试。
*   初步支持 Ubuntu 25.10（Questing Quokka）。
*   移除 `libltdl` 软件包。
*   移除 `pigz` 软件包。
*   AWS：在集群删除时绕过优雅操作系统关机流程。
*   AWS：对 Xen 实例强制执行优雅操作系统关机。
*   测试：对未注册节点的转储强制执行最大节点数限制。
*   测试：从 AWS 规模测试中移除非 Nitro 实例类型。
*   允许从命令行设置 `map[string][]string`。
*   允许特定的 GCE 实例组拥有公共 IP 地址。
*   防止 CoreDNS Pod 关闭时的 DNS 请求失败。
*   为 kubetest-kops 添加标签支持。
*   为 E2E 测试切换 Route53 域名。
*   将 Kindnet 迁移至 Kubernetes 生产镜像仓库。
*   修复未找到的后端服务/健康检查。
*   优化匹配通道时的日志冗余。
*   修复：使用 kopsbase.Version 代替 kopsbase.KOPS_RELEASE_VERSION。
*   Calico：如果 Wireguard 被禁用则不安装。
*   移除 bridge-utils 和 conntrack 软件包。
*   发布 kOps 1.34 的版本说明。
*   更新文档中的 Kindnet 仓库链接。
*   提升 kops-controller 的 QPS 限制。
*   仅在安装软件包前更新节点软件包列表。
*   AWS：修复 CCM 和 LBC 的权限缺失问题。
*   改进节点软件包列表的更新逻辑