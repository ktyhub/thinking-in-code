# k3s v1.30.13+k3s1
# 为什么要使用k3s  
当传统Kubernetes的重量级架构让开发者陷入"资源黑洞"，当边缘计算场景中单台树莓派难以承载臃肿的容器编排系统，k3s用一场轻量化革命撕开了云原生世界的裂缝。它像一把瑞士军刀，在保留Kubernetes核心能力的同时，将内存占用压缩到惊人的40MB——这不仅是技术参数的突破，更是对"越大越好"的行业迷思的颠覆。当物联网设备在沙漠深处运行智能灌溉，当战场上的移动指挥系统需要即时响应，k3s正以"小而美"的姿态，重新定义分布式计算的边界。

# k3s是什么  
k3s是经CNCF认证的轻量化Kubernetes发行版，专为资源受限环境设计。它将Kubernetes的复杂组件精简为单一二进制文件，集成containerd容器运行时与SQLite数据库，支持ARM设备运行，60秒内即可完成集群部署，是边缘计算、IoT和开发测试场景的云端利器。

# 入门示例  
**真实场景：** 某农业科技公司在温室部署了20台树莓派，通过k3s集群实时处理温湿度传感器数据。  
**开发示例：**  
1. 在Ubuntu 22.04虚拟机执行：  
```bash
curl -sfL https://get.k3s.io | sh -
```
2. 部署Nginx测试服务：  
```bash
k3s kubectl create deployment nginx --image=nginx:alpine
k3s kubectl expose deployment nginx --port 80
```
3. 访问服务：  
```bash
curl http://$(k3s kubectl get svc nginx -o jsonpath='{.spec.clusterIP}')
```
整个过程在2分钟内即可建立可用的微服务环境，消耗内存不足100MB。

# k3s v1.30.13+k3s1版本更新  
1. 升级Kubernetes核心至v1.30.13  
2. 修复授权/认证配置处理异常  
3. 解决secretsencrypt竞态条件问题  
4. 优化启动端到端测试流程  
5. 更新Go语言版本至1.23.8  

# 更新日志

## 版本更新说明
本次发布将Kubernetes升级至v1.30.13，并修复了若干问题。

更多新特性详情请参阅[Kubernetes发布说明](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#changelog-since-v13012)。

## 自v1.30.12+k3s1以来的变更
- 2025年5月测试用向后移植
- 5月向后移植支持
- 2025年5月向后移植
- 修复授权配置/认证配置处理逻辑
- 解决secretsencrypt竞态条件问题
- 升级至v1.30.13-k3s1和Go 1.23.8
- 修复启动端到端测试

## 嵌入式组件版本

| 组件                | 版本                          |
|---------------------|-------------------------------|
| Kubernetes          | [v1.30.13](https://github.com/kubernetes/kubernetes/blob/master/CHANGELOG/CHANGELOG-1.30.md#v13013) |
| Kine                | [v0.13.15](https://github.com/k3s-io/kine/releases/tag/v0.13.15) |
| SQLite              | [3.49.1](https://sqlite.org/releaselog/3_49_1.html) |
| Etcd                | [v3.5.21-k3s1](https://github.com/k3s-io/etcd/releases/tag/v3.5.21-k3s1) |
| Containerd          | [v1.7.27-k3s1](https://github.com/k3s-io/containerd/releases/tag/v1.7.27-k3s1) |
| Runc                | [v1.2.6](https://github.com/opencontainers/runc/releases/tag/v1.2.6) |
| Flannel             | [v0.26.7](https://github.com/flannel-io/flannel/releases/tag/v0.26.7) |
| Metrics-server      | [v0.7.2](https://github.com/kubernetes-sigs/metrics-server/releases/tag/v0.7.2) |
| Traefik             | [v2.11.24](https://github.com/traefik/traefik/releases/tag/v2.11.24) |
| CoreDNS             | [v1.12.1](https://github.com/coredns/coredns/releases/tag/v1.12.1) |
| Helm-controller     | [v0.16.10](https://github.com/k3s-io/helm-controller/releases/tag/v0.16.10) |
| Local-path-provisioner | [v0.0.31](https://github.com/rancher/local-path-provisioner/releases/tag/v0.0.31) |

## 相关链接
- [提交问题](https://github.com/rancher/k3s/issues/new/choose)
- [加入Slack频道](https://slack.rancher.io/)
- [查看文档](https://rancher.com/docs/k3s/latest/en/)
- [贡献指南](https://github.com/rancher/k3s/blob/master/CONTRIBUTING.md)

## 完整变更记录
[查看版本对比](https://github.com/k3s-io/k3s/compare/v1.30.12+k3s1...v1.30.13+k3s1)

# 版本更新总结  
本次k3s v1.30.13版本重点升级Kubernetes核心并修复关键安全问题，优化了配置处理机制，解决数据加密竞态问题，同时更新多个核心组件版本，全面提升系统稳定性和安全性，为边缘计算场景提供更可靠的运行时保障。