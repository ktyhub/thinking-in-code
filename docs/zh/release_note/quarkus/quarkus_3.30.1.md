# quarkus 3.30.1
### 为什么要使用Quarkus

想象一下这个场景：你是一名技艺高超的Java工匠，精心打造了一艘功能齐全、结构稳固的巨轮。但当你把它推向这个名为“云原生”的浩瀚海洋时，却发现它启动缓慢、转身笨拙，并且消耗着惊人的燃料（内存）。与此同时，海面上那些轻巧的快艇（Go、Node.js应用）正呼啸而过，快速部署，灵活伸缩。你陷入了深深的矛盾与怀疑：我引以为傲的成熟技术与强大生态，在新时代竟成了包袱吗？Java的辉煌，是否注定在微服务与容器的浪潮中黯淡？

这就是Quarkus诞生的意义——它不是为了颠覆，而是为了拯救与进化。它向每一位Java开发者发出宣言：不必抛弃你深厚的积累，不必离开你熟悉的语言。Quarkus是一套全新的“船舶设计图”和“建造工艺”，能将你的Java知识转化为**超音速**的云原生应用。它解决了核心矛盾：**如何在保持Java开发者生产力与庞大生态的同时，获得可与原生编译语言媲美的启动速度、极致的内存效率和无缝的容器化体验？** 选择Quarkus，就是选择让Java在云时代重获“统治力”，不再忍受启动等待的煎熬，不再为内存开销而焦虑，从容应对秒级伸缩的挑战。这不是妥协，这是一次华丽的进化。

### Quarkus是什么

Quarkus 是一个专为 OpenJDK HotSpot 和 GraalVM 量身定制的 **Kubernetes Native Java 全栈框架**。它的设计哲学是“容器优先”和“云原生优先”，旨在让 Java 成为在 Kubernetes 等分布式云环境中进行无服务器、云和容器化开发的领先平台。简单说，**它让 Java 应用变得极快、极小、极省资源**。

### 入门示例

让我们构想一个真实的微服务场景：一个电商平台的**库存管理服务**。它需要快速响应库存查询，处理扣减与回滚，并通过 REST API 对外提供服务。

**1. 创建项目**
使用 Quarkus 提供的便捷命令，快速搭建项目骨架：
```bash
mvn io.quarkus.platform:quarkus-maven-plugin:3.30.1:create \
    -DprojectGroupId=com.example \
    -DprojectArtifactId=inventory-service \
    -Dextensions="resteasy-reactive-jackson, hibernate-orm-panache, jdbc-postgresql, smallrye-openapi"
```
这条命令瞬间创建了一个包含 REST API、数据访问（Hibernate ORM with Panache）、PostgreSQL驱动和OpenAPI文档支持的项目。

**2. 核心开发**
*   **实体定义**：用 Panache 简化数据层。
    ```java
    @Entity
    public class InventoryItem extends PanacheEntity {
        public String skuCode;
        public Integer quantity;
    }
    ```
*   **API端点**：用 RESTEasy Reactive 编写响应式端点。
    ```java
    @Path("/inventory")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public class InventoryResource {

        @GET
        @Path("/{skuCode}")
        public Uni<InventoryItem> getInventory(@PathParam String skuCode) {
            return InventoryItem.find("skuCode", skuCode).firstResult();
        }

        @POST
        @Path("/deduct")
        public Uni<Response> deduct(@Valid DeductRequest request) {
            return Panache.withTransaction(() -> 
                InventoryItem.find("skuCode", request.skuCode)
                    .firstResult()
                    .onItem().ifNotNull().transform(item -> {
                        if (item.quantity >= request.quantity) {
                            item.quantity -= request.quantity;
                            return Response.ok(item).build();
                        }
                        return Response.status(Response.Status.BAD_REQUEST).build();
                    })
            );
        }
    }
    ```

**3. 开发体验**
运行 `./mvnw quarkus:dev`，你将进入**超快的开发模式**：代码修改后保存，页面瞬间刷新（通常小于1秒），无需重启。内嵌的 Dev UI (`/q/dev`) 让你可视化地管理数据源、查看端点、测试配置。

**4. 构建原生可执行文件**
当需要部署到生产环境时，利用 GraalVM 将其编译为原生二进制：
```bash
./mvnw package -Pnative
# 或者使用容器化构建
./mvnw package -Pnative -Dquarkus.native.container-build=true
```
生成的 `inventory-service-runner` 是一个独立的可执行文件，**启动时间仅需几十毫秒，内存占用仅需几十MB**，完美契合容器和 Serverless 环境。

### Quarkus 3.30.1版本更新了什么

Quarkus 3.30.1 是一个维护版本，主要聚焦于问题修复和稳定性提升。本次更新重点包括：解决了 Hibernate 与 Panache 在处理特定继承结构实体时可能出现的“实体未找到”问题；修复了使用 `SseBroadcaster` 时可能引发的死锁；为阻塞式邮件发送器引入了可配置的超时设置；改善了 Windows 系统上对 Podman 的检测逻辑；并确保已弃用的配置属性仍能在文档中正确显示。

### 更新日志

#### 完整更新日志

*   [#47036](https://github.com/quarkusio/quarkus/issues/47036) - Hibernate 扩展：检查多个 JDBC 驱动程序时的错误消息
*   [#50634](https://github.com/quarkusio/quarkus/issues/50634) - Hibernate 默认的阻塞持久化单元与命名的响应式持久化单元共存时引发错误
*   [#50955](https://github.com/quarkusio/quarkus/issues/50955) - 实体未找到？
*   [#51033](https://github.com/quarkusio/quarkus/issues/51033) - 使用 SseBroadcasterImpl 时发生死锁
*   [#51042](https://github.com/quarkusio/quarkus/issues/51042) - 为阻塞式邮件发送器引入超时设置
*   [#51081](https://github.com/quarkusio/quarkus/pull/51081) - 恢复 `@QuarkusIntegrationTest` 中缺失的输出
*   [#51085](https://github.com/quarkusio/quarkus/issues/51085) - Quarkus Native 在 Windows 上无法检测到 Podman
*   [#51089](https://github.com/quarkusio/quarkus/pull/51089) - 避免 `SseEventSinkImpl` 和 `SseBroadcasterImpl` 之间的死锁
*   [#51101](https://github.com/quarkusio/quarkus/issues/51101) - 已弃用的配置属性始终未出现在 Quarkus 扩展文档中
*   [#51117](https://github.com/quarkusio/quarkus/issues/51117) - quarkus-junit5-component 应依赖 quarkus-junit5-config
*   [#51122](https://github.com/quarkusio/quarkus/pull/51122) - 使 Podman 版本检测模式不区分大小写
*   [#51124](https://github.com/qu