# argo-cd v3.1.1
### 为什么要使用Argo-CD

你是否曾被困在深夜的手动部署中，一边喝着冷掉的咖啡，一边祈祷这次发布不会因为人为失误而崩溃？你是否厌倦了在复杂的CI/CD流程中疲于奔命，却始终无法实现真正的“一键部署”？传统部署方式就像是用手工缝制一艘巨轮——缓慢、易错且难以规模化。而Argo-CD的出现，正是为了解决这一矛盾：它将GitOps理念引入Kubernetes世界，让你的基础设施像代码一样可版本化、可审计、可自动化。使用Argo-CD，你不再需要手动敲击kubectl命令，而是通过声明式配置实现自动同步和持续部署，最终让开发团队专注创新，而非运维琐事。

---

### Argo-CD是什么

Argo-CD是一个基于GitOps理念的Kubernetes持续交付工具。它通过监控Git仓库中的配置变化，自动将应用部署到Kubernetes集群，并确保集群状态与Git声明的内容始终保持一致。简单来说，Argo-CD就像是Kubernetes世界的“自动驾驶系统”——你定义目的地（Git配置），它负责安全、高效地抵达（部署和同步）。

---

### 入门示例

假设你正在开发一个名为“Sunrise-App”的微服务项目，代码存放在GitHub仓库中，使用Kubernetes部署。以下是一个典型的使用场景：

1. **定义部署配置**：在Git仓库中创建Kubernetes清单文件（例如deployment.yaml、service.yaml），并推送到main分支。
2. **配置Argo-CD**：在Argo-CD界面中创建一个Application，指向你的Git仓库和Kubernetes集群。
3. **自动同步**：Argo-CD会持续监控Git仓库，一旦检测到配置变更（例如镜像版本更新），便会自动将变更应用到集群中。
4. **状态监控**：你可以在Argo-CD的UI中实时查看部署状态、资源健康状况和同步历史。

例如，以下命令可以快速部署一个示例应用：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.1.1/manifests/install.yaml
argocd app create sunrise-app --repo https://github.com/your-repo/sunrise-app.git --path manifests --dest-server https://kubernetes.default.svc --dest-namespace default
```

---

### Argo-CD v3.1.1版本更新内容

1. 修复了Lua脚本中向数组添加项的功能异常。
2. 改进了Azure DevOps令牌通过Git额外头部发送的兼容性。
3. 调整SSH连接的密钥交换算法以符合FIPS标准。
4. 解决了UI中外部密钥（externalSecrets）显示错误的问题。
5. 在部署清单中增加了OCI环境变量支持。

---

### 更新日志

#### 快速开始

##### 非高可用模式：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.1.1/manifests/install.yaml
```

##### 高可用模式：
```shell
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.1.1/manifests/ha/install.yaml
```

#### 发布签名与来源验证
所有Argo-CD容器镜像均通过cosign签名。容器镜像和CLI二进制文件符合SLSA Level 3规范的生成了来源证明。具体验证方法请参阅[官方文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)。

#### 发布说明博客
如需详细了解本版本的主要变更与改进，请查看[官方博客文章](https://blog.argoproj.io/announcing-argo-cd-v3-1-f4389bc783c8)。

#### 升级指南
若从其他次要版本升级，请务必阅读[升级文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/)。

#### 更新日志

##### 问题修复
- 修复Lua脚本中向数组添加项的功能问题
- 修复Azure DevOps令牌通过Git额外头部发送的兼容性问题
- 调整SSH默认密钥交换算法以符合FIPS标准
- 解决UI中外部密钥显示错误的问题

##### 其他改动
- 在部署清单中增加OCI环境变量支持
- 向后端代码库中合并了部分稳定性改进

完整更新日志请参考：[v3.1.0...v3.1.1](https://github.com/argoproj/argo-cd/compare/v3.1.0...v3.1.1)

![GitOps CD](https://raw.githubusercontent.com/argoproj/argo-site/master/content/pages/cd/gitops-cd.png)

---

### 总结  
v3.1.1版本主要聚焦于稳定性提升和问题修复，包括Lua脚本功能优化、Azure DevOps集成改进、安全合规性增强以及UI显示问题的解决，同时补充了OCI环境变量支持，进一步强化了生产环境的可靠性。