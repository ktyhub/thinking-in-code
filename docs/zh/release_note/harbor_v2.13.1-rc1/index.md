# harbor v2.13.1-rc1
# 为什么要使用Harbor  
**当“失控的镜像”成为技术债：一场无声的运维战争**  
在云原生与容器化狂飙的时代，镜像管理如同隐形的定时炸弹。你是否经历过这样的场景？开发团队随意推送未经审核的镜像，生产环境因版本混乱突然崩溃；安全团队在漏洞爆发后手忙脚乱，却找不到镜像来源；跨国协作时，镜像拉取速度堪比蜗牛，拖垮整个CI/CD流水线……  

传统解决方案像是用胶带修补漏水的船：公共仓库缺乏企业级权限控制，自建仓库又陷入复杂的运维泥潭。而Harbor的出现，像一把精准的手术刀——它不仅提供私有化镜像仓库，更用“漏洞扫描+角色权限+全球复制”的三重利刃，切开镜像管理的混沌。当你的竞争对手还在为镜像分发延迟焦头烂额时，Harbor用户已通过智能缓存策略实现跨国秒级同步。这不是工具迭代，而是一场容器管理的认知革命。

---

# Harbor是什么  
Harbor是企业级云原生镜像仓库，如同容器世界的“数字海关”。它基于Docker Registry深度增强，提供镜像扫描、细粒度权限控制、多副本同步等核心功能，支持Kubernetes、DevOps等现代架构，是构建安全可信软件供应链的基石。

---

# 入门示例  
**真实战场：从代码到生产的生死时速**  
某电商团队在618大促前遭遇致命问题：新上线的推荐服务镜像体积达8GB，导致全球节点更新时带宽打满。通过Harbor的**分层缓存+智能分发**方案，他们实现了：  
1. **镜像优化**：`docker push harbor.domain.com/ai-service:v2` 推送经Trivy扫描的安全镜像  
2. **全球加速**：东京数据中心通过`docker pull harbor.domain.com/ai-service@sha256:xxx` 拉取时，自动命中新加坡节点的缓存层  
3. **权限管控**：开发组仅能访问`/dev/*`项目，运维组拥有`/prod/*`项目的审计权限  
4. **灾备演练**：通过Harbor的复制策略，30秒内将核心镜像同步到备用区域  

```bash
# 典型操作流示例
# 1. 登录Harbor
docker login harbor.yourcompany.com

# 2. 标记并推送镜像
docker tag legacy-app:3.4 harbor.yourcompany.com/prod/legacy-app:3.4-secured
docker push harbor.yourcompany.com/prod/legacy-app:3.4-secured

# 3. 触发漏洞扫描（Harbor自动执行）
# 4. 通过UI审批后，K8s集群拉取认证镜像
kubectl set image deployment/legacy-app *=harbor.yourcompany.com/prod/legacy-app:3.4-secured
```

---

# Harbor v2.13.1-rc1版本更新  
1. 统一Golang版本与构建镜像，消除环境差异风险  
2. 增强日志查询稳定性，避免异常中断  
3. 修复Helm Chart UI复制功能失效问题  
4. 升级Trivy漏洞扫描适配新版规则库  
5. 构建环境全面迁移至Ubuntu 22.04 LTS  

---

# 更新日志  

## 组件更新 ⬆️  
- 修复jobservice容器日志级别与任务日志不一致问题  
- 优化制品信息查询逻辑  
- 更新Trivy扫描规则分支  
- 增强查询条件判断机制  
- 重构API校验流程  
- 统一Golang基础镜像版本  
- 升级构建机至Ubuntu 22.04  
- 更新Golang依赖库版本  
- 修复Helm Chart界面复制按钮失效问题  

**完整变更记录**：[v2.13.0...v2.13.1-rc1](https://github.com/goharbor/harbor/compare/v2.13.0...v2.13.1-rc1)  

---

# 版本总结  
本次更新聚焦底层架构强化：从构建环境统一到核心组件升级，从日志系统优化到安全扫描增强，体现了Harbor对稳定性的极致追求。特别是构建环境全面转向Ubuntu 22.04，为后续长期支持奠定坚实基础。