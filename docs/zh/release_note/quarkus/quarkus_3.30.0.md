# quarkus 3.30.0
### 为什么要使用Quarkus

想象一下，你正站在一个十字路口。左边是熟悉的老路：你依赖的Java应用稳定却笨重，启动需要数十秒，内存贪婪地吞噬着资源，在需要快速伸缩、瞬息万变的云原生世界里，它像一头穿着礼服跳芭蕾的大象——虽有力量，却格格不入。右边是一条新辟的捷径，承诺极速与轻盈，但你担心需要抛弃数十年积累的宝贵知识与生态。

这时，Quarkus 像一位洞察矛盾的智者出现在路口。它并非让你二选一，而是提供了一种优雅的融合。使用 Quarkus，不是因为你要背叛 Java，而是因为你渴望让 Java 在现代云原生舞台上重获竞争力。它的核心矛盾在于：**如何让一个以“厚重”著称的成熟平台，焕发出“极致轻快”的青春活力？** Quarkus 的答案是通过编译时优化，将传统的运行时负担大幅提前解决，从而带来了颠覆性的快速启动时间和极低的内存占用。这意味著你的微服务可以像容器一样快速启动，在 Kubernetes 这样的平台上实现秒级伸缩，同时你依然可以使用 Spring、Hibernate、Kafka 等熟悉的库。选择 Quarkus，就是选择不妥协——既不妥协于现代基础设施对效率和密度的严苛要求，也不妥协于你对生产力、开发者体验和庞大生态的依赖。它是一场针对“Java 不适合云原生”偏见的有力反击。

### Quarkus是什么

Quarkus 是一个为 OpenJDK HotSpot 和 GraalVM 量身定制的 **Kubernetes 原生 Java 框架**。它的设计哲学是“容器优先”和“云原生优先”，旨在让 Java 成为在无服务器、云和 Kubernetes 环境中的领先平台。简而言之，它通过创新的编译时处理和优化，使 Java 应用能够实现**超快启动速度**、**超低内存消耗**，并提供**统一的命令式和响应式编程模型**，极大地提升了开发者在微服务架构下的效率和应用性能。

### 入门示例

**真实场景：** 你需要快速构建一个轻量级的商品信息查询 REST API，并部署到 Kubernetes 集群中。该服务需要极高的启动速度，以便在流量激增时能快速扩容实例。

**开发示例：**

1.  **创建项目：** 使用 Quarkus 命令行工具快速搭建项目骨架。
    ```bash
    quarkus create app com.example:product-service --extension=resteasy-reactive,resteasy-reactive-jackson,quarkus-hibernate-orm-panache,quarkus-jdbc-postgresql
    ```
    这条命令创建了一个包含 REST API、JSON 处理、数据库 ORM（Panache）及 PostgreSQL 驱动集成的项目。

2.  **定义实体：** 创建商品实体类。
    ```java
    @Entity
    public class Product extends PanacheEntity {
        public String name;
        public BigDecimal price;
        public String category;
    }
    ```

3.  **编写资源端点（Repository & Controller）：** 使用 Panache 和 Reactive REST 轻松创建 API。
    ```java
    @Path("/products")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @ApplicationScoped
    public class ProductResource {

        @GET
        public Uni<List<Product>> getAll() {
            return Product.listAll();
        }

        @GET
        @Path("/{id}")
        public Uni<Product> getById(@PathParam("id") Long id) {
            return Product.findById(id);
        }

        @POST
        public Uni<Response> create(Product product) {
            return product.persist().map(v -> Response.status(201).build());
        }
    }
    ```

4.  **配置与运行：** 在 `application.properties` 中配置数据源，然后使用开发模式运行，享受热重载。
    ```bash
    quarkus dev
    ```
    访问 `http://localhost:8080/products` 即可测试 API。最后，使用 `quarkus build` 构建可执行 JAR 或原生镜像，原生镜像的启动速度通常仅在**几十毫秒**级别，完美契合云原生场景。

### Quarkus 3.30.0版本更新了什么

Quarkus 3.30.0 版本的核心更新是为 REST 客户端引入了 `@JsonView` 支持，允许开发者更精细地控制序列化/反序列化的字段。此外，本次更新为 Elasticsearch REST 客户端扩展增加了 API 密钥认证支持，提升了安全性；解决了原生模式下的一个 `NoSuchMethodException` 错误；并确保 OpenAPI 模式生成能正确匹配 `JsonNaming` 注解的继承行为。版本还对多个依赖（如 Gradle、SmallRye Reactive Messaging、Keycloak 等）进行了升级，并修复了一些文档显示问题。

### 更新日志

#### 主要变化

*   [#51043](https://github.com/quarkusio/quarkus/pull/51043) - 为 REST 客户端引入对 `@JsonView` 的支持。

#### 完整变更日志

*   [#35909](https://github.com/quarkusio/quarkus/issues/35909) - 为 REST 客户端提供 Jackson `@JsonView` 序列化/反序列化支持。
*   [#45490](https://github.com/quarkusio/quarkus/issues/45490) - 为 quarkus-elasticsearch-rest-client 添加 API 密钥认证支持。
*   [#49474](https://github.com/quarkusio/quarkus/issues/49474) - OpenAPI 模式生成应匹配 JsonNaming 注解的继承行为。
*   [#50471](https://github.com/quarkusio/quarkus/pull/50471) - 将 com.google.protobuf.JavaFeaturesProto 的原生运行时初始化配置从 quarkus-grpc 移至 quarkus-grpc-common。
*   [#50848](https://github.com/quarkusio/quarkus/pull/50848) - 将 Gradle 版本升级至 9.2.1。
*   [#50963](https://github.com/quarkusio/quarkus/pull/50963) - 将 smallrye-reactive-messaging 版本从 4.30.0 升级至 4.31.0。
*   [#50981](https://github.com/quarkusio/quarkus/pull/50981) - 为 Elasticsearch REST 客户端扩展配置添加 API 密钥支持。
*   [#50986](https://github.com/quarkusio/quarkus/pull/50986) - 在文档中添加关于从测试生成 AOT 文件的说明。
*   [#50999](https://github.com/quarkusio/quarkus/pull/50999) - 修复因代码块缺少源指令导致的显示问题。
*   [#51007](https://github.com/quarkusio/quarkus/pull/51007) - 修复显示代码块的问题。
*   [#51014](https://github.com/quarkusio/quarkus/pull/51014) - 将 Keycloak 版本升级至 26.4.5。
*   [#51019](https://github.com/quarkusio/quarkus/pull/51019) - 在文档中自动设置 `keycloak.server.version`。
*   [#510