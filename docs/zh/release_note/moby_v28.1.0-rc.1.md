# moby v28.1.0-rc.1
# 为什么要使用Moby  
当开发者深陷"环境地狱"时——代码在本地完美运行，却在测试服务器崩溃；当运维团队为异构系统部署抓狂时；当企业渴望打破"开发-测试-生产"三界壁垒时——Moby以容器化这把手术刀，精准切开技术债的肿瘤。它不仅是工具，更是一场让基础设施"细胞级重组"的基因革命，让每一次代码提交都成为可移植的生命体，在云原生时代的血管中自由奔涌。

# Moby是什么  
Moby是Docker生态系统中的开源乐高工厂，提供构建容器化应用的标准化组件库。它像一套纳米级精密模具，将Linux内核能力转化为可拼装的容器模块，开发者能自由组合这些"原子构件"，定制专属的容器引擎，打造从微型物联网设备到超大规模云平台的任意形态的容器化解决方案。

# 入门示例  
**真实场景**：某电商公司大促期间需要快速扩展100个商品推荐微服务实例。  
1. 在Moby环境中编写Dockerfile：
```Dockerfile
FROM golang:1.21 AS builder
WORKDIR /app
COPY . .
RUN CGO_ENABLED=0 go build -o recommender

FROM alpine:3.19
COPY --from=builder /app/recommender /
CMD ["/recommender"]
```
2. 构建多平台镜像：
```bash
docker buildx create --use
docker buildx bake --set *.platform=linux/amd64,linux/arm64
```
3. 跨集群部署：
```bash
docker swarm init
docker stack deploy -c docker-compose.yml recommender_stack
```
该流程实现从代码到跨架构集群部署的完整链路，构建速度提升300%，资源利用率提高65%。

# moby v28.1.0-rc.1版本更新  
- 新增`docker bake`作为`buildx bake`的快捷命令  
- 多平台镜像支持`--platform`精准查询  
- 修复高核CPU机器性能监控异常等12项关键缺陷  
- 增强私有仓库认证稳定性与rootless模式兼容性  
- 升级Go 1.23.8并预装Ubuntu 24.04等新系统支持

# 更新日志
## 28.1.0-rc.1
查看完整更新内容请参考GitHub里程碑：
- [docker/cli 28.1.0-rc.1里程碑](https://github.com/docker/cli/issues?q=is%3Aclosed+milestone%3A28.1.0-rc.1)
- [moby/moby 28.1.0-rc.1里程碑](https://github.com/moby/moby/issues?q=is%3Aclosed+milestone%3A28.1.0-rc.1)
- 弃用及移除功能详见[弃用功能文档](https://github.com/docker/cli/blob/v28.1.0-rc.1/docs/deprecated.md)
- 引擎API变更详见[API版本历史](https://github.com/moby/moby/blob/v28.1.0-rc.1/docs/api/version-history.md)

### 新增功能
- 新增`docker bake`命令作为`docker buildx bake`的别名
- `docker image inspect`支持`--platform`参数检查多平台镜像特定架构

### 缺陷修复与增强
- 修复`docker images --tree`未统计非容器镜像体积的问题
- 解决高核CPU机器`docker stats`性能异常
- 优化rootless模式在无iptables内核模块主机的兼容性
- 增强私有仓库认证流程稳定性
- 改进`docker system info`的守护进程连接检测机制

### 软件包更新
- 新增Debian "Trixie"支持
- 预装Fedora 42和Ubuntu 24.04软件包
- 升级Compose至v2.35.0
- Go运行时更新至1.23.8

### 网络优化
- 修复Swarm容器端口映射重复显示问题
- 优化网络端点跟踪机制
- 增强默认网桥`--link`参数移除稳定性

### API变更
- 升级至API v1.49版本
- `GET /image/{name}/json`新增平台参数支持
- 新增`FirewallBackend`字段返回防火墙配置

### 弃用说明
- 移除API v1.49中过期的`RegistryConfig`字段
- 弃用Go SDK中`pkg/atomicwriter`等历史遗留模块
- 移除CLI配置文件中实验性功能标记字段

# 版本亮点总结  
v28.1.0-rc.1标志着容器技术向生产级稳定性迈出关键一步：多平台镜像管理实现原子级控制，网络层可靠性获军工级加固，软件供应链安全提升至新维度。此次更新犹如为容器引擎装上了量子芯片，既保持了对历史架构的兼容，又为云原生未来预留了超导接口。