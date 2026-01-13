# quarkus 3.30.2
## 为什么要使用 Quarkus

你是否曾在深夜里，对着一个缓慢启动、吞噬内存的庞大单体应用发出无声的呐喊？是否感受过在云原生时代，自己精心构建的Java应用却像身着沉重铠甲的骑士，笨拙而迟缓？这就是传统Java框架与现代云环境之间尖锐的矛盾：我们渴望Java的可靠与生态，却不得不忍受其臃肿的身躯和缓慢的响应。

Quarkus的出现，正是为了终结这种撕裂感。它像一位高超的“外科医生”，对Java进行了重塑与精简，使其脱胎换骨。想象一下，你的应用能在0.001秒内启动，内存消耗仅为原来的十分之一，却能迸发出更强的性能。它生来就为容器和云环境优化，让Java应用第一次真正拥有了“瞬移”般的启动速度和“蚂蚁”般的资源胃口。选择Quarkus，不是一次简单的技术升级，而是一场对开发效率和运维体验的彻底革命。当你不再需要为启动时间泡咖啡，当你的应用能像无服务器函数一样瞬间伸缩，你会明白，你选择的不是一个框架，而是未来。

## Quarkus 是什么

Quarkus 是一个为 OpenJDK HotSpot 和 GraalVM 量身定制的 **Kubernetes Native Java 全栈框架**。它采用“编译时启动”的创新理念，将尽可能多的工作（如依赖注入、配置处理）从运行时提前到编译期完成。这赋予了它 **极速启动、超低内存占用** 的非凡特性，使其成为构建在容器、云及无服务器环境（Serverless）中高效运行的微服务和函数应用的理想选择。简而言之，Quarkus 让 Java 在现代云原生世界中重焕新生，变得迅捷而轻盈。

## 入门示例

让我们想象一个真实的场景：你需要快速构建一个商品库存查询的微服务，并部署到 Kubernetes 集群中。

**1. 创建项目：**
使用 Quarkus CLI，一行命令即可搭建项目骨架：
```bash
quarkus create app com.example:inventory-service --extensions='resteasy-reactive-jackson, hibernate-orm-panache, jdbc-postgresql'
```
这条命令创建了一个包含 REST API（RESTEasy Reactive）、数据库ORM（Hibernate Panache）和 PostgreSQL 驱动的项目。

**2. 编写实体与API：**
```java
// 商品实体
@Entity
public class Product extends PanacheEntity {
    public String name;
    public Integer stock;
}

// REST 资源
@Path("/products")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class ProductResource {

    @GET
    public List<Product> getAll() {
        return Product.listAll();
    }

    @GET
    @Path("/{id}")
    public Product getSingle(@PathParam("id") Long id) {
        return Product.findById(id);
    }

    @POST
    @Transactional
    public Response create(Product product) {
        product.persist();
        return Response.status(201).build();
    }
}
```

**3. 开发模式运行：**
```bash
quarkus dev
```
启动**开发模式**，你将获得：
- **亚秒级热重载**：修改代码后保存，浏览器页面几乎实时刷新。
- **内嵌的数据库**：如果配置了 Dev Services，Quarkus 会自动为你启动一个测试用数据库容器。
- 完整的调试和诊断信息。

**4. 编译为原生可执行文件：**
```bash
./mvnw package -Pnative
```
（或使用GraalVM）
```bash
./mvnw package -Pnative -Dquarkus.native.container-build=true
```
这将生成一个极速启动（通常<0.01秒）、独立运行的二进制文件，可以直接放入精简容器镜像中。

**5. 部署：**
```dockerfile
FROM registry.access.redhat.com/ubi9/ubi-minimal
COPY target/*-runner /work/application
CMD ["./application"]
```
将这个微服务镜像部署到 Kubernetes，你将见证一个启动如闪电般迅速、资源利用高效的 Java 应用。

## Quarkus 3.30.2 版本更新了什么

Quarkus 3.30.2 主要是一个修复和优化版本。它重点解决了开发服务（Dev Services）中临时端口（ephemeral ports）配置的相关问题，并修复了 Docker v29 版本下 Docker Compose 开发服务的兼容性故障。同时，该版本升级了多个核心依赖，包括 Hibernate ORM、Hibernate Reactive 和 Mutiny，以引入最新的功能改进和错误修复。此外，它还处理了一些测试套件中的稳定性问题，例如确保失败测试的重跑功能正常工作，并修复了缓存和消息传递中的若干边界情况错误。

## 更新日志

### 完整更新日志
*   [#48784](https://github.com/quarkusio/quarkus/issues/48784) - 在开发服务配置中支持临时端口。
*   [#48815](https://github.com/quarkusio/quarkus/pull/48815) - 修复开发服务临时端口问题：确保测试资源配置能够覆盖开发服务配置和系统属性。
*   [#50389](https://github.com/quarkusio/quarkus/issues/50389) - 使用 Rest-Assured 和随机测试端口测试 Lambda 资源端点时会导致 IllegalArgumentException。
*   [#50513](https://github.com/quarkusio/quarkus/issues/50513) - 使用 `cache.getAsync()` 时，quarkus-cache 不遵守 `expire-after-write` 或 `expire-after-access` 设置。
*   [#50931](https://github.com/quarkusio/quarkus/pull/50931) - 确保 Mutiny 能够使用 SR-CP 从 `CompletableFuture` 向上传播 `cancel()` 操作。
*   [#51055](https://github.com/quarkusio/quarkus/pull/51055) - 将 Hibernate ORM 从 7.1.6.Final 升级至 7.1.10.Final，并将 Hibernate Reactive 从 3.1.8.Final 升级至 3.1.9.Final。
*   [#51116](https://github.com/quarkusio/quarkus/pull/51116) - 文档修正：根据下游 QE 反馈对 OpenShift 指南进行细微更正。
*   [#51148](https://github.com/quarkusio/quarkus/pull/51148) - 将 narayana-lra.version 从 1.0.2.Final 提升至 1.0.3.Final。
*   [#51245](https://github.com/quarkusio/quarkus/issues/51245) - Docker v29 版本下，Docker Compose 开发服务失败。
*   [#51247](https://github.com/quarkusio/quarkus/pull/51247) - 修复 Docker v29 版本下 Docker Compose 开发服务的空指针异常问题。
*   [#51254](https://github.com/quarkusio/quarkus/pull/51254) - StartupLogCompressor 增加空值检查。
*   [#51266](https://github.com/quarkusio/quarkus/issues/51266) - Quarkus Maven 插件有时无法获取 Maven 锁。
*   [#51269](