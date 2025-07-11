# portainer Release 2.23.0
### 为什么要使用portainer

在当今快速发展的技术环境中，容器化已经成为企业数字化转型的核心。然而，管理这些容器的复杂性却让许多开发者感到无从下手。Portainer的出现，正是为了打破这一矛盾。它不仅简化了容器的管理流程，还提供了一个直观的用户界面，让每个开发者都能轻松上手。想象一下，您可以在几分钟内部署和管理数十个容器，而不必深入复杂的命令行操作，这无疑是对开发者的一种解放。

### portainer是什么

Portainer是一个开源的容器管理工具，旨在简化Docker和Kubernetes环境中的容器管理。它提供了一个用户友好的Web界面，使用户能够轻松地创建、管理和监控容器、镜像和网络等资源。无论是个人开发者还是企业团队，Portainer都能帮助他们高效地管理容器化应用。

### 入门示例

想象一下，您是一名初创公司的开发者，负责构建和部署一款新应用。您决定使用Docker来容器化您的应用，但面对命令行的复杂性感到无从下手。这时，您选择了Portainer。通过Portainer的Web界面，您可以轻松创建一个新的容器，选择所需的镜像，配置环境变量，甚至设置网络。几分钟后，您的应用就成功运行在容器中，您可以通过Portainer实时监控其性能。这种简单而高效的管理方式，让您将更多精力投入到应用的开发上，而不是容器的管理。

### portainer Release 2.23.0版本更新了什么

Portainer 2.23.0版本是一个短期支持（STS）版本，包含了至2.22.0版本的所有更改，并针对稳定性和可扩展性进行了多项修复。新版本提升了主页搜索速度，改进了OAuth日志记录，增加了代理的请求超时时间，并优化了Git仓库的空间使用。此外，Kubernetes的整体体验也得到了改善。

### 更新日志

这是一个短期支持（STS）版本，包含了截至2.22.0版本的所有更改，以及多项旨在增强Portainer稳定性和可扩展性的修复。有关2.22版本的详细信息，请参阅2.22版本说明。

#### 已知问题
**Docker支持的已知问题**
- 镜像导出功能不正常

**Podman支持的已知问题**
- Podman环境不支持自动入驻脚本
- 在Docker上运行Portainer服务器时，无法通过套接字添加Podman环境（反之亦然）
- 仅支持CentOS 9，Podman 5 rootful
- 无法从容器创建镜像

**Kubernetes支持的已知问题**
- 服务账户、集群角色/绑定、角色/角色绑定在切换关闭时显示系统资源
- 标准用户无法获取集群范围的入口控制器
- “此节点上运行的应用程序”表中的CPU/内存限制和保留值未按副本数相乘
- 应用程序滚动重启功能不正常

#### 此版本的新特性
- 提升了主页搜索速度
- 改进了OAuth日志记录以帮助诊断错误
- 将代理中的CRL请求超时时间增加至30秒
- 将Webhook部署逻辑移至后台以避免超时
- 优化了Git仓库的空间使用
- 改进了边缘相关API错误响应，包含环境ID和名称
- 在边缘堆栈环境状态页面上显示缺失的边缘堆栈部署错误
- 修复了Kubernetes资源未正确显示信息的问题
- 改进了Kubernetes的整体体验

#### 弃用和移除的功能
**弃用的功能**
- 无

**移除的功能**
- 平台和架构特定的镜像：我们已移除以<platform>-<arch>命名的镜像标签。这些镜像标签在之前的版本中已被弃用。此更改确保了我们软件分发的进一步标准化和一致性。

### 总结

Portainer 2.23.0版本带来了多项重要更新，包括提升搜索速度、改进OAuth日志、优化Git仓库空间等，同时修复了多个已知问题，进一步增强了用户体验。

### 爆款标题

- Portainer 2.23.0：提升搜索速度与Kubernetes体验的重大更新！
- 体验Portainer 2.23.0：优化Git空间与OAuth日志的全新功能！
- Portainer 2.23.0发布：解决Docker与Kubernetes的多项已知问题！
- Portainer 2.23.0版本更新：稳定性与可扩展性的双重提升！
- 迎接Portainer 2.23.0：短期支持版本带来的全新管理体验！