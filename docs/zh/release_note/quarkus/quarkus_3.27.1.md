# quarkus 3.27.1
## 为什么要使用 Quarkus

想象一下，你正驾驶着一艘巨型邮轮在数字海洋中航行。它承载着你多年的业务逻辑，坚固、可靠，但每当需要调头或加速时，你都不得不等待漫长的时间，并消耗着惊人的燃料（服务器资源）。这就是传统Java应用在云原生时代的真实写照——强大却笨重，稳定却迟钝。

而你手中，其实有一把名为Quarkus的钥匙，它能将这艘邮轮瞬间变为一艘灵巧的赛艇。矛盾恰恰在此：我们既渴望Java的成熟生态与企业级可靠性，又奢求Go或Node.js般的闪电启动与獭獍般的内存胃口。在微服务与容器化的世界里，启动慢一分钟，资源多耗一百兆，就意味着更高的成本与更差的弹性。Quarkus正是为化解这一核心矛盾而生，它让Java卸下历史包袱，以“超音速亚原子”的姿态，重新夺回云原生时代的话语权。选择Quarkus，不是放弃Java的江山，而是为它插上一对名为“原生编译”与“容器优先”的翅膀，在云的原野上自由翱翔。

## Quarkus 是什么

Quarkus 是一个为 OpenJDK HotSpot 和 GraalVM 量身定制的 **Kubernetes Native Java 全栈框架**。它采用“容器优先”与“无服务器优先”的理念，通过编译时元数据处理和原生镜像（Native Image）技术，实现了Java应用的**极致启动速度**、**超低内存消耗**以及**高效的容器化部署**。简单说，它是一个让Java应用在云原生环境中变得更快、更轻、更高效的现代化开发工具包。

## 入门示例

假设我们正在开发一个简单的微服务——一个用户待办事项（Todo）API。我们将使用 Quarkus 快速创建一个 RESTful 服务，并连接数据库。

**1. 创建项目**
使用 Quarkus 命令行工具快速搭建项目骨架，整合 RESTEasy（JAX-RS）、Hibernate ORM 与 Panache（简化数据层）、以及 PostgreSQL 驱动。

```bash
quarkus create app com.example:todo-api \
  --extension=resteasy-reactive-jackson, \
  hibernate-orm-panache, \
  jdbc-postgresql
cd todo-api
```

**2. 定义实体**
使用 Panache 简化实体定义和数据访问。

```java
@Entity
public class Todo extends PanacheEntity {
    public String title;
    public boolean completed;
    public LocalDate dueDate;
}
```

**3. 创建资源（API端点）**
开发一个响应式的 REST 端点。

```java
@Path("/todos")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class TodoResource {

    @GET
    public Uni<List<Todo>> getAll() {
        return Todo.listAll();
    }

    @POST
    public Uni<Response> create(Todo todo) {
        return todo.persist()
                   .replaceWith(Response.status(Response.Status.CREATED).entity(todo).build());
    }
}
```

**4. 配置数据库**
在 `application.properties` 中配置开发模式下的数据库（Quarkus DevServices 会自动启动一个PostgreSQL容器）。

```properties
quarkus.datasource.db-kind=postgresql
quarkus.hibernate-orm.database.generation=drop-and-create
```

**5. 运行与体验**
在开发模式下启动应用，体验极速热重载。

```bash
quarkus dev
```
访问 `http://localhost:8080/todos`，即可开始测试 API。随后，你可以轻松将其编译为原生可执行文件，体验毫秒级启动：

```bash
quarkus build --native
```

## Quarkus 3.27.1 版本更新了什么

Quarkus 3.27.1 是一个维护版本，主要侧重于问题修复和稳定性提升。它修复了涉及Redis事务处理、OIDC重定向、Kafka优雅停机、Hibernate ORM与Jakarta Data集成、原生编译下Flyway和Kotlin反射等多个关键问题。此外，该版本还包含了对Hibernate、Elasticsearch、Keycloak等核心依赖项的版本升级，并解决了Windows路径处理、AWS Lambda cookie头处理等环境或场景特定的缺陷。

## 更新日志

### 完整更新日志

*   [#32361](https://github.com/quarkusio/quarkus/issues/32361) - 在集群模式下使用 RedisDataSource 的 `withTransaction` 方法时发生错误。
*   [#47706](https://github.com/quarkusio/quarkus/issues/47706) - 在原生构建中使用 `bouncycastle`、`PGP` 和 `quarkus-security` 时出现警告。
*   [#48641](https://github.com/quarkusio/quarkus/issues/48641) - 消息传递 Kafka：在开发/测试模式下，优雅停机属性设置不正确。
*   [#49225](https://github.com/quarkusio/quarkus/issues/49225) - 当原始URL包含查询参数时，OIDC重定向无法正确附加OAuth参数。
*   [#49405](https://github.com/quarkusio/quarkus/issues/49405) - [quarkus-kubernetes-client]：由于 equals 方法实现有误，DevServicesKubernetesProcessor 总是关闭集群。
*   [#49531](https://github.com/quarkusio/quarkus/issues/49531) - 如果消费者函数抛出异常，`BlockingRedisDataSourceImpl` 不会调用 DISCARD 命令。
*   [#49593](https://github.com/quarkusio/quarkus/issues/49593) - 在升级至 Hibernate ORM 7.1.0.CR2 后，如果存在 Hibernate Validator 且实体具有 `OneToMany` 关系，`jakarta.data.repository.BasicRepository#saveAll` 方法会失败。
*   [#49651](https://github.com/quarkusio/quarkus/pull/49651) - 将 io.quarkus:quarkus-platform-bom-maven-plugin 从 0.0.122 升级至 0.0.123。
*   [#49719](https://github.com/quarkusio/quarkus/issues/49719) - Redis：如果入队操作返回错误，请不要丢弃它们。
*   [#49861](https://github.com/quarkusio/quarkus/pull/49861) - 修正开发环境和测试配置文件中的 Kafka 优雅停机属性设置。
*   [#49931](https://github.com/quarkusio/quarkus/pull/49931) - ArC：修复拦截器代理的构造。
*   [#49936](https://github.com/quarkusio/quarkus/pull/49936) - 在迁移到自定义 FormatMappers 时，提供关于可定制内容的建议。
*   [#49970](https://github.com/quarkusio/quarkus/issues/49970) - Panache / Hibernate Reactive 中已中止事务的错误（在集成测试中？）。
*   [#50013](https://github.com/quarkusio/quarkus/issues/50013) - 将 Quarkus 从 3.21.4 升级到 3.26.3 时，Liquibase MongoDB 迁移在原生测试中失败，错误信息：MongoCommandException: no such command ‘$db’。
*   [#50053](https://github.com/quarkusio/quarkus/pull/50053) - 将 hibernate-orm