# Kubernetes 云原生实践

## 概述

Kubernetes（K8s）是一个开源的容器编排平台，用于自动化部署、扩展和管理容器化应用程序。本章节深入分析 Kubernetes v1.9.9 源码，探索其核心机制和设计理念。

## 核心概念

### 集群架构
```
┌─────────────────────────────────────────────────────────────┐
│                    Kubernetes Cluster                       │
├─────────────────────────────────────────────────────────────┤
│  Master Node                                                │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │ API Server  │ │ Controller  │ │   Scheduler │           │
│  │             │ │   Manager   │ │             │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
│                                                             │
│  ┌─────────────────────────────────────────────────────────┤
│  │                    etcd                                 │
│  └─────────────────────────────────────────────────────────┤
├─────────────────────────────────────────────────────────────┤
│  Worker Nodes                                               │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐           │
│  │   kubelet   │ │ kube-proxy  │ │  Container  │           │
│  │             │ │             │ │   Runtime   │           │
│  └─────────────┘ └─────────────┘ └─────────────┘           │
└─────────────────────────────────────────────────────────────┘
```

### 核心组件

#### Master 组件
- **API Server**: 集群的统一入口，提供 RESTful API
- **Controller Manager**: 控制器管理器，维护集群状态
- **Scheduler**: 调度器，负责 Pod 调度
- **etcd**: 分布式键值存储，保存集群状态

#### Node 组件
- **kubelet**: 节点代理，管理 Pod 生命周期
- **kube-proxy**: 网络代理，实现服务发现和负载均衡
- **Container Runtime**: 容器运行时（Docker、containerd 等）

## 源码分析

### API Server 源码解析

#### 启动流程
1. [克隆 K8S 源码](1-index.md) - 获取源码并搭建开发环境
2. [API Server 启动](2-apiserver.md) - 分析 API Server 启动过程
3. [Server Run Options](3-apiserver-server-run-options.md) - 启动参数配置
4. [Add Flags](4-apiserver-add-flags.md) - 命令行参数解析
5. [Server Run](5-apiserver-server-run.md) - 服务器运行逻辑

#### 核心功能
- **认证授权**: 支持多种认证方式（证书、Token、OIDC 等）
- **API 版本管理**: 支持多版本 API 并存
- **资源验证**: 对资源进行格式和语义验证
- **存储抽象**: 通过 etcd 存储集群状态

### Controller Manager 源码解析

#### 控制器模式
```go
type Controller interface {
    Run(stopCh <-chan struct{})
}

type ReplicaSetController struct {
    kubeClient clientset.Interface
    rsLister   appslisters.ReplicaSetLister
    podLister  corelisters.PodLister
    queue      workqueue.RateLimitingInterface
}
```

#### 核心控制器
- **ReplicaSet Controller**: 管理 Pod 副本数量
- **Deployment Controller**: 管理应用部署和更新
- **Service Controller**: 管理服务和端点
- **Node Controller**: 管理节点状态

### Scheduler 源码解析

#### 调度算法
1. **预选阶段**: 过滤不符合条件的节点
2. **优选阶段**: 对符合条件的节点进行打分
3. **绑定阶段**: 将 Pod 绑定到最优节点

#### 调度策略
- **资源调度**: CPU、内存、存储等资源约束
- **亲和性调度**: 节点亲和性、Pod 亲和性
- **反亲和性调度**: 避免 Pod 调度到同一节点
- **污点和容忍**: 节点污点和 Pod 容忍机制

## 实践案例

### 部署应用
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginx-deployment
spec:
  replicas: 3
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
        image: nginx:1.14.2
        ports:
        - containerPort: 80
```

### 服务暴露
```yaml
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

### 配置管理
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: app-config
data:
  database_url: "mysql://localhost:3306/mydb"
  debug_mode: "true"
```

## 云原生最佳实践

### 容器化设计原则
- **单一职责**: 每个容器只运行一个进程
- **无状态**: 应用状态外部化存储
- **可观测性**: 集成日志、监控、追踪
- **优雅关闭**: 处理 SIGTERM 信号

### 资源管理
- **资源限制**: 设置 CPU 和内存限制
- **健康检查**: 配置存活性和就绪性探针
- **滚动更新**: 使用滚动更新策略
- **自动扩缩容**: 基于指标自动扩缩容

### 安全加固
- **RBAC**: 基于角色的访问控制
- **网络策略**: 限制 Pod 间网络访问
- **Pod 安全策略**: 限制 Pod 安全上下文
- **镜像安全**: 使用可信镜像仓库

## 监控与运维

### 监控指标
- **集群指标**: 节点状态、资源使用率
- **应用指标**: Pod 状态、服务可用性
- **业务指标**: 请求量、响应时间、错误率

### 日志管理
- **集中化日志**: 使用 ELK 或 EFK 栈
- **结构化日志**: JSON 格式日志输出
- **日志轮转**: 防止日志文件过大

### 故障排查
- **kubectl 命令**: 常用调试命令
- **事件查看**: 查看集群事件
- **资源状态**: 检查资源状态和配置

## 相关文章

- [克隆 K8S 源码](1-index.md)
- [API Server 启动流程](2-apiserver.md)
- [Server Run Options](3-apiserver-server-run-options.md)
- [Add Flags 参数解析](4-apiserver-add-flags.md)
- [Server Run 运行逻辑](5-apiserver-server-run.md)

## 参考资料

- [Kubernetes 官方文档](https://kubernetes.io/docs/)
- [Kubernetes GitHub](https://github.com/kubernetes/kubernetes)
- [CNCF 云原生技术栈](https://landscape.cncf.io/)