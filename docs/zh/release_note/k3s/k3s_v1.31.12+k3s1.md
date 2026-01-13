# k3s v1.31.12+k3s1
### 为什么要使用k3s

你是否曾经在深夜里，对着庞大的Kubernetes集群配置感到窒息？当传统的K8s像一头巨兽，吞噬着你的服务器资源、拖慢开发节奏，甚至让团队陷入部署的泥潭时，k3s悄然登场，如同一道划破黑暗的闪电。它不是为了替代，而是为了重生——将云原生的力量注入轻量级设备、边缘计算场景，甚至你的本地开发机。k3s解决了最尖锐的矛盾：在追求极致效率的时代，我们为何还要被笨重的基础设施束缚？它用不到50MB的二进制文件，重新定义了“简洁而强大”，让你在资源受限的环境中也能畅享容器编排的魔力。

---

### k3s是什么

k3s是一个轻量级的Kubernetes发行版，由Rancher Labs（现为SUSE）开发，专为边缘计算、IoT设备、CI/CD流水线以及资源受限环境设计。它完全兼容原生Kubernetes API，但剔除了非核心组件和依赖，默认使用SQLite作为存储后端（可选Etcd），并集成了Containerd、Flannel等工具，实现了开箱即用的集群管理。简单来说，k3s是Kubernetes的“极简版”，保留了所有核心功能，却将体积和复杂度降至极致。

---

### 入门示例

想象你是一名开发者，需要在本地快速搭建一个测试环境来部署微服务应用。传统Kubernetes可能需要虚拟机、多节点配置和漫长初始化，而k3s只需一条命令：

```bash
curl -sfL https://get.k3s.io | sh -
```

启动后，k3s会自动配置单节点集群，并生成访问凭证。接下来，你可以部署一个真实的Web应用示例：

```yaml
# app.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-demo
spec:
  replicas: 2
  selector:
    matchLabels:
      app: nginx
  template:
    metadata:
      labels:
        app: nginx
    spec:
      containers:
      - name: nginx
        image: nginx:alpine
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: nginx-service
spec:
  selector:
    app: nginx
  ports:
    - protocol: TCP
      port: 80
      targetPort: 80
  type: LoadBalancer
```

使用以下命令部署：
```bash
kubectl apply -f app.yaml
```

几分钟内，你的应用就会运行在本地k3s集群中，并通过Traefik（默认集成 ingress控制器）提供访问。这种极速体验正是k3s在开发、测试和边缘场景中的杀手级应用。

---

### k3s v1.31.12+k3s1版本更新了什么

本次更新将Kubernetes核心升级至v1.31.12，修复了多项问题。主要变更包括：新增S3存储的保留期限专用标志、升级CoreDNS到1.12.3、将Metrics-server更新至v0.8.0、优化证书检查事件逻辑，并更新了指标描述信息。此外，底层运行时和工具链同步更新至Go 1.23.11和最新组件版本。

---

### 更新日志

本次发布将 Kubernetes 更新至 v1.31.12，并修复了若干问题。

有关新功能的详细信息，请参阅 [Kubernetes 发布说明](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#changelog-since-v13111)。

#### 自 v1.31.11+k3s1 以来的变更：

- 新增针对 S3 的保留期限专用标志
- 回溯八月的更新内容
- 升级 CoreDNS 至 1.12.3
- 升级 Metrics-server 至 v0.8.0
- 修复证书启动检查事件的问题
- 在启动时若无需更新证书，则发出证书正常事件
- 更新指标描述，使其更具说明性
- 更新至 v1.31.12-k3s1 和 Go 1.23.11

#### 嵌入式组件版本

| 组件                   | 版本                                                                 |
| ---------------------- | -------------------------------------------------------------------- |
| Kubernetes             | [v1.31.12](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.31.md#v13112) |
| Kine                   | [v0.13.17](https://github.com/k3s-io/kine/releases/tag/v0.13.17)           |
| SQLite                 | [3.49.1](https://sqlite.org/releaselog/3_49_1.html)                   |
| Etcd                   | [v3.5.21-k3s1](https://github.com/k3s-io/etcd/releases/tag/v3.5.21-k3s1) |
| Containerd             | [v2.0.5-k3s2.32](https://github.com/k3s-io/containerd/releases/tag/v2.0.5-k3s2.32) |
| Runc                   | [v1.2.6](https://github.com/opencontainers/runc/releases/tag/v1.2.6) |
| Flannel                | [v0.27.0](https://github.com/flannel-io/flannel/releases/tag/v0.27.0) |
| Metrics-server         | [v0.8.0](https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.8.0) |
| Traefik                | [v2.11.24](https://github.com/traefik/traefik/releases/tag/v2.11.24) |
| CoreDNS                | [v1.12.3](https://github.com/coredns/coredns/releases/tag/v1.12.3)   |
| Helm-controller        | [v0.16.13](https://github.com/k3s-io/helm-controller/releases/tag/v0.16.13) |
| Local-path-provisioner | [v0.0.31](https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.31) |

#### 有用的链接

我们一如既往地欢迎并重视用户社区的反馈。你可以：

- [在此提交问题](https://github.com/rancher/k3s/issues/new/choose)
- [加入我们的 Slack 频道](https://slack.rancher.io/)
- [查阅文档](https://rancher.com/docs/k3s/latest/en/)，获取入门指南或深入探索 K3s
- [阅读贡献指南](https://github.com/rancher/k3s/blob/master/CONTRIBUTING.md)，了解如何参与贡献

#### 变更详情

- 新增针对 S3 的保留期限专用标志
- 回溯八月的更新内容
- 升级 CoreDNS 至 1.12.3
- 升级 Metrics-server 至 v0.8.0
- 修复证书启动检查事件的问题
- 在启动时若无需更新证书，则发出证书正常事件
- 更新指标描述，使其更具说明性
- 更新至 v1.31.12-k3s1 和 Go 1.23.11

**完整变更日志**：[v1.31.11+k3s1...v1.31.12+k3s1](https://github.com/k3s-io/k3s/compare/v1.31.11+k3s1...v1.31.12+k3s1)

---

### 总结

k3s v1.31.12+k3s1 版本主要围绕核心升级、组件优化和问题修复展开，包括 Kubernetes 版本更新、CoreDNS 和 Metrics-server 的版本提升，以及证书管理逻辑的改进。这些变更进一步增强了系统的稳定性和功能性，延续了 k3s 在轻量级 Kubernetes 发行版中的领先地位。