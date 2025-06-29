# k3s v1.33.0+k3s1
# 为什么要使用k3s  
当传统Kubernetes的复杂性成为创新的枷锁，当边缘计算的火花因资源限制濒临熄灭，k3s撕开了云原生世界的另一条裂缝。它诞生于一个尖锐的矛盾：开发者渴望轻量化、易部署的容器编排工具，而市场却充斥着臃肿的解决方案。在物联网设备闪烁的指示灯里，在智能工厂震动的机械臂间，k3s用仅需512MB内存的纤薄身躯，承载起工业4.0时代的重量。这不是妥协，而是对云原生本质的回归——让技术服务于场景，而非场景迁就技术。

# k3s是什么  
k3s是经CNCF认证的轻量级Kubernetes发行版，将完整K8s功能浓缩为40MB二进制文件。它专为资源受限环境设计，支持边缘计算、IoT设备和开发环境，通过精简组件和优化架构实现"随处可跑"的云原生能力。

# 入门示例  
**智能农场监控系统实战**  
某农业科技公司在200个温室部署树莓派集群，每台设备运行温湿度传感器容器。通过k3s快速搭建边缘集群：  
```bash
# 主节点（部署在中心服务器）
curl -sfL https://get.k3s.io | sh -
# 边缘节点（树莓派设备）
curl -sfL https://get.k3s.io | K3S_URL=https://主节点IP:6443 K3S_TOKEN=xxx sh -
```
使用Helm部署时序数据库：  
```bash
helm install victoriametrics k8s@victoriametrics/victoria-metrics-single \
--set retentionPeriod=12h
```
数据采集Pod配置片段：  
```yaml
env:
- name: SENSOR_ID
  valueFrom: {fieldRef: {fieldPath: spec.nodeName}}
volumeMounts:
- name: gpio
  mountPath: /dev/gpiochip0
```

# k3s v1.33.0+k3s1版本更新  
1. 升级Kubernetes核心至v1.33.0，支持动态资源分配API  
2. 重构构建系统提升编译效率  
3. 修复Sonobuoy一致性测试故障  
4. 移除Drone CI中冗余的GHCR镜像仓库  
5. 更新Containerd至v2.0.4-k3s4，优化镜像拉取性能  

# 更新日志  

## 版本概览  
本次发布将Kubernetes升级至v1.33.0，并修复多项问题。更多细节请参阅[Kubernetes发布说明](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#changelog-since-v1324)。

## 自v1.32.4+k3s1以来的变更  
- 重构k3s构建系统  
- 修复Sonobuoy一致性测试  
- 升级Kubernetes版本至1.33  
- 从Drone CI中移除GHCR  

## 嵌入式组件版本  

| 组件                | 版本                                                                                     |
|---------------------|-----------------------------------------------------------------------------------------|
| Kubernetes          | [v1.33.0](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.33.md#v1330) |
| Kine                | [v0.13.14](https://github.com/k3s-io/kine/releases/tag/v0.13.14)                        |
| SQLite              | [v3.49.2](https://sqlite.org/releaselog/3_49_2.html)                                    |
| Etcd                | [v3.5.21-k3s1](https://github.com/k3s-io/etcd/releases/tag/v3.5.21-k3s1)                |
| Containerd          | [v2.0.4-k3s4](https://github.com/k3s-io/containerd/releases/tag/v2.0.4-k3s4)           |
| Runc                | [v1.2.5](https://github.com/opencontainers/runc/releases/tag/v1.2.5)                   |
| Flannel             | [v0.26.7](https://github.com/flannel-io/flannel/releases/tag/v0.26.7)                  |
| Metrics-server      | [v0.7.2](https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.2)       |
| Traefik             | [v3.3.6](https://github.com/traefik/traefik/releases/tag/v3.3.6)                       |
| CoreDNS             | [v1.12.1](https://github.com/coredns/coredns/releases/tag/v1.12.1)                     |
| Helm-controller     | [v0.16.10](https://github.com/k3s-io/helm-controller/releases/tag/v0.16.10)            |
| Local-path-provisioner | [v0.0.31](https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.31)    |

## 相关链接  
我们始终欢迎用户反馈：  
- [提交问题](https://github.com/rancher/k3s/issues/new/choose)  
- [加入Slack频道](https://slack.rancher.io/)  
- [查阅文档](https://rancher.com/docs/k3s/latest/en/)  
- [贡献指南](https://github.com/rancher/k3s/blob/master/CONTRIBUTING.md)  

# 版本更新总结  
本次升级将Kubernetes核心版本提升至v1.33.0，重构构建系统提升开发效率，修复关键测试组件问题，并同步更新Containerd、Flannel等核心依赖组件版本，全面增强系统稳定性和边缘计算场景下的性能表现。