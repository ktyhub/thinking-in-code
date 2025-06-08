# quarkus 3.21.0.CR1
### 为什么要使用Quarkus

在云计算时代，传统Java应用像是穿着厚重盔甲的骑士——虽然强大，却步履蹒跚。当Spring Boot应用需要30秒启动时，当传统微服务消耗数百MB内存时，当开发者不得不在开发效率与运行时性能间艰难抉择时，Quarkus以「超音速亚原子粒子」的姿态划破长空。它用颠覆性的编译时优化技术，让Java应用在Kubernetes战场实现了毫秒级启动与KB级内存消耗，更以「实时编码」的开发体验让程序员告别漫长的等待。这不是框架的迭代，而是云原生时代Java的救赎。

### Quarkus是什么

Quarkus是专为Kubernetes设计的全栈Java框架，通过编译期优化将Java带入云原生时代。它像变形金刚般适配GraalVM原生镜像与HotSpot JVM，提供闪电般的启动速度和超低内存占用，同时保留开发者熟悉的依赖注入、REST服务等特性，是现代化Java应用的终极形态。

### 入门示例

**场景**：构建秒级部署的云函数  
```bash
mvn io.quarkus:quarkus-maven-plugin:create \
    -DprojectGroupId=com.example \
    -DprojectArtifactId=cloud-ready-api \
    -Dextensions="resteasy-reactive,jackson"
```
在生成的`GreetingResource.java`中：
```java
@Path("/hello")
public class GreetingResource {
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return "Hello from Quarkus!";
    }
}
```
运行`./mvnw quarkus:dev`，访问`localhost:8080/hello`即刻获得响应。修改返回值后无需重启，浏览器自动刷新——这就是未来云开发的真实体验。

### Quarkus 3.21.0.CR1版本更新

1. MongoDB客户端支持TLS注册表配置（#46293）  
2. 持续测试新增`-Dtest=`参数支持（#20231）  
3. 安全增强：WebSocket Next支持认证机制选择（#46161）  
4. 依赖升级：SmallRye Config 3.12.0、SnakeYAML 2.4等  
5. 关键修复：REST客户端压缩控制、Keycloak测试冲突等

### 更新日志

#### 主要变更
- 允许MongoDB客户端通过TLS注册表进行配置

#### 完整更新列表
- 为持续测试添加类似Maven的`-Dtest`选项支持
- 在`quarkus-maven-plugin`中使用`maven.top-level-basedir`属性
- 创建Hibernate Reactive与Oracle的集成测试
- 类级`TestHTTPEndpoint`注解现影响测试类中所有URL字段
- 支持gRPC的Kotlin代码生成
- 修复REST子资源中`PathParam`注入失效问题
- REST客户端支持取消请求时重置连接
- 修复Vert.x的DNS解析导致的代理信任问题
- TLS注册表扩展模块结构调整
- 增强WebSocket Next的OIDC租户选择支持
- 改进gRPC Netty客户端性能
- MongoDB减少线程创建数量
- 新增无反射Jackson反序列化指南
- 日志增强：支持Logging with Panache方法引用
- 安全配置弃用项标记
- 修复Spring Boot属性在原生镜像中的NPE问题

### 总结

3.21.0.CR1版本聚焦云原生深度整合：通过TLS注册表强化MongoDB安全配置，持续测试支持构建系统级参数，WebSocket认证实现精细控制。同步升级关键依赖，修复包括REST客户端压缩、Keycloak测试冲突在内的十余项关键问题，标志着Quarkus在云安全、开发体验、运行时稳定性三大维度完成新一轮进化。