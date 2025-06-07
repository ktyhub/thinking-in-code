# rancher Pre-release v2.12.0-alpha5
### 为什么要使用Rancher  
在容器技术席卷全球的今天，开发者们正面临一个尖锐的矛盾：**基础设施越强大，管理复杂度却成倍攀升**。你是否经历过这样的场景？Kubernetes集群像失控的野马，配置如同迷宫，监控和扩缩容成了团队的噩梦。传统运维团队需要耗费数周时间搭建环境，而业务部门却在抱怨"迭代速度太慢"。  

Rancher正是为解决这一矛盾而生——它像一位精通驯兽的牛仔，将Kubernetes这匹"烈马"变成温顺的坐骑。当其他工具还在让用户背诵YAML咒语时，Rancher已用可视化界面将复杂度碾碎；当竞争对手需要专业团队维护时，Rancher让初中级工程师也能轻松驾驭混合云。更致命的是，它直击企业级用户的要害：**用统一的管理平面，同时驯服成百上千个集群**，让"基础设施焦虑症"成为历史。

---

### Rancher是什么  
Rancher是一个开源的容器管理平台，相当于云原生世界的中央控制塔。它能一键部署Kubernetes集群，统一管理分布在公有云、私有云甚至边缘计算节点的容器化应用，通过直观的仪表盘实现集群部署、监控、安全和策略管理的"全景式操控"。

---

### 入门示例  
**真实场景**：某电商公司计划在"黑色星期五"前部署促销系统，需要在AWS、Azure和本地数据中心同步扩展300个微服务实例。  

**开发步骤**：  
1. 通过Rancher UI 10分钟内创建3个Kubernetes集群（分别对应不同云平台）  
2. 使用内置的Helm图表库部署Prometheus监控栈  
3. 在"应用市场"直接安装经过安全扫描的Nginx Ingress Controller  
4. 配置自动伸缩策略：当CPU负载超过70%时自动增加Pod副本  
5. 通过全局视图同时查看所有集群的实时资源消耗  

开发团队仅用1天就完成了传统运维需要两周搭建的基础设施，且促销期间系统自动应对了5倍流量洪峰。

---

### Rancher Pre-release v2.12.0-alpha5版本更新  
1. 将Chart和KDM（Kubernetes Driver Metadata）的默认分支锁定为dev-v2.12  
2. 统一Docker构建环境中的分支配置  
3. 核心组件版本指向新的开发分支  
4. 为后续功能迭代奠定基础架构  
5. 该版本主要用于内部测试，暂不建议生产环境使用  

---

### 更新日志  

# 包含-rc后缀的镜像  
# 包含-rc后缀的组件  
# 带有-rc后缀的最低版本组件  
# Chart/KDM源代码分支  

- **CHART_DEFAULT_BRANCH**: dev-v2.12（配置于`scripts/package-env`）  
- **CHART_DEFAULT_BRANCH**: dev-v2.12（配置于`package/Dockerfile`）  
- **CATTLE_KDM_BRANCH**: dev-v2.12（配置于`package/Dockerfile`）  
- **CATTLE_KDM_BRANCH**: dev-v2.12（配置于`Dockerfile.dapper`）  
- **KDMBranch**: dev-v2.12（配置于`pkg/settings/setting.go`）  
- **ChartDefaultBranch**: dev-v2.12（配置于`pkg/settings/setting.go`）  

---

### 总结  
本次更新集中统一了开发分支配置，将Chart和KDM相关组件的源代码分支锁定为dev-v2.12，为后续功能开发搭建基础框架，主要涉及Docker构建环境和核心设置文件的调整，属于面向开发者的底层架构准备。