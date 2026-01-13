# argo-cd v3.2.1
### 为什么要使用argo-cd

你是否也曾陷入这样的困境？深夜，你刚刚将精心打磨的代码推送到仓库，但部署却成了一场地狱般的马拉松。运维团队手动执行着重复的脚本，一个字符的错误就可能导致整个服务宕机。开发渴望快速迭代，运维追求稳定如山，两者在部署的战场上剑拔弩张。更糟糕的是，生产环境的状态成了一个谜——它究竟应该是什么样子？实际又是什么样子？

这就是传统部署方式的巨大矛盾：**速度与稳定性的割裂，宣言与现实的脱节**。我们宣称一切皆代码，但最重要的环境本身却游离于代码的管控之外。Argo CD 正是为解决这一核心矛盾而生。它并非另一个冰冷的工具，而是一位忠诚的“守夜人”，它确保你声明的状态（在 Git 中）就是集群中的实际状态。使用 Argo CD，意味着你选择了可观察、可审计、可重复的部署之路。它将部署从一场充满焦虑的手工仪式，转变为一段平静、自动且可靠的旅程。当你选择 Argo CD，你选择的不仅是效率，更是一种让开发和运维重新坐回同一边的**哲学**。

### argo-cd是什么

简而言之，Argo CD 是一个基于 Kubernetes 的**声明式 GitOps 持续交付工具**。

把它想象成一位不知疲倦的“GitOps 舵手”。你只需要在 Git 仓库中定义好你希望应用程序在 Kubernetes 里呈现的最终状态（比如使用 YAML 文件）。Argo CD 会持续监控你的 Git 仓库和 Kubernetes 集群。一旦发现 Git 中的期望状态与集群中的实际状态不一致，它就会自动或提示你进行同步，确保两者始终保持一致。它通过一个清晰的 Web 界面直观地展示应用状态，让“部署了什么”一目了然。

### 入门示例

想象一下，你正在开发一个名为“CoffeeShop”的微服务应用。你的前端、后端和数据库的 Kubernetes 部署清单（Deployment, Service, ConfigMap 等）都存放在一个 Git 仓库的 `k8s-manifests/` 目录下。

**1. 安装 Argo CD：**
在你的 Kubernetes 集群中，只需几条命令即可安装 Argo CD。

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml
```

**2. 创建 Argo CD 应用：**
接下来，你需要告诉 Argo CD 去管理哪个 Git 仓库里的什么内容。这通过定义一个 `Application` 资源来完成。

```yaml
# application.yaml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: coffeeshop-app
  namespace: argocd
spec:
  project: default
  # 来源：你的 Git 仓库和路径
  source:
    repoURL: https://github.com/yourname/coffeeshop.git
    targetRevision: main
    path: k8s-manifests
  # 目标：你的应用要部署到的集群和命名空间
  destination:
    server: https://kubernetes.default.svc
    namespace: coffeeshop-production
  # 同步策略：自动同步（也可手动）
  syncPolicy:
    automated:
      prune: true # 自动清理集群中已删除的资源
      selfHeal: true # 当实际状态偏离时自动纠正
```

使用命令应用这个配置：`kubectl apply -f application.yaml`。

**3. 见证魔法：**
创建完成后，打开 Argo CD 的 Web 界面（通过端口转发访问）。你会立刻看到 `coffeeshop-app` 的状态。Argo CD 会拉取 Git 仓库中的清单文件，并将其部署到指定的 `coffeeshop-production` 命名空间中。所有资源（Pods， Services等）的状态都会以直观的拓扑图呈现。

**真实场景：** 当开发修复了一个 bug 并更新了 Git 中后端 Deployment 的镜像标签时，Argo CD 会立即检测到这次提交。由于我们设置了自动同步，它会无缝地将新版本的 Pod 滚动更新到生产集群，无需任何手动 kubectl 操作。部署历史、健康状态全部清晰可查。

### argo-cd v3.2.1版本更新了什么

Argo CD v3.2.1 主要是一个修复错误和进行少量改进的补丁版本。根据其发布页面，本次更新主要包括：修复了用户界面（UI）中状态面板可能存在的显示问题；解决了仓库服务器（Repo Server）在处理 Git 操作时的一个并发性问题；优化了部分UI元素的显示，防止重叠并为工具提示添加了资源单位信息。此外，它还包含了对文档的几处更新和改进，例如澄清了关于注解跟踪和通知触发的使用说明。此版本没有引入重大新功能，重点是提升稳定性和用户体验。

### 更新日志

#### 快速开始

**非高可用模式：**

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.2.1/manifests/install.yaml
```

**高可用模式：**

```bash
kubectl create namespace argocd
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/v3.2.1/manifests/ha/install.yaml
```

#### 发布签名与来源

所有 Argo CD 容器镜像均由 Cosign 签名。为符合 SLSA 三级规范的容器镜像和 CLI 二进制文件生成了来源证明。请参阅[文档](https://argo-cd.readthedocs.io/en/stable/operator-manual/signed-release-assets)了解如何验证。

#### 发布说明博客文章

有关此版本中关键更改和改进的详细说明，请查看[官方博客文章](https://blog.argoproj.io/argo-cd-v3-0-release-candidate-a0b933f4e58f)。

#### 升级

如果从其他次要版本升级，请务必阅读[升级](https://argo-cd.readthedocs.io/en/stable/operator-manual/upgrading/overview/)文档。

#### 更新日志

**错误修复**

*   `6dd5e7a`: 修复(UI)：在状态面板中对 assignedWindows 添加空安全处理。
*   `dabdf39`: 修复(UI)：重叠的UI元素，并向工具提示添加资源单位。
*   `cd8df17`: 修复：当 Stopped 条件为 False 时，允许 ISVC 处于健康状态。
*   `27c5065`: 修复：还原相关更改。
*   `29f869c`: 修复：仓库服务器中 Git 分离头处理时的并发问题。
*   `7bd02d7`: 修复(UI)：除非面板正在显示，否则不渲染 ApplicationSelector。

**文档**

*   `c11e67d`: 文档：记录通知触发器中 `?.` 的用法并修复示例。
*   `a0a1843`: 文档：改进切换到注解跟踪的文档，阐明可能需要新的 Git 提交以避免孤立资源。
*   `86c9994`: 文档：更新有关删除应用程序的用户内容。

**其他工作**

*   `1545390`: 修复：更新 gitops-engine 以解决 SSD 回归问题。

**完整更新日志**：[v3.2.0...v3.2.1](https://github.com/argoproj/argo-cd/compare/v3.2.0...v3.2.1)

[![GitOps Continuous Delivery](https://raw.githubusercontent.com/argoproj