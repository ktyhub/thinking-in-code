# quarkus 3.29.4
## 为什么要使用 Quarkus

你还在忍受着传统Java应用的“臃肿之痛”吗？在微服务和云原生的赛道上，你是否感到自己的应用像一头背着沉重壳的蜗牛，启动缓慢、内存贪婪，与敏捷开发、快速迭代的现代理念格格不入？这就是Java世界中最尖锐的矛盾：我们依赖其强大的生态与稳定性，却不得不承受其带来的资源开销与迟钝响应。

而Quarkus的出现，正是为了粉碎这一矛盾。它宣称自己为“超音速亚原子Java”，旨在让Java在容器化和云环境中不仅能够生存，更能**急速起飞**。选择Quarkus，不是一次简单的技术升级，而是一次对开发效率与应用性能的彻底革命。它让你能用熟悉的Java技术栈（甚至包括Kotlin和Scala），构建出启动时间以毫秒计、内存消耗仅数十MB的轻量级应用。在当今这个比拼弹性伸缩和成本控制的时代，Quarkus让你不再需要为了性能而忍痛割舍Java的繁荣生态，它让你钟爱的技术重新变得锋利而致命。

## Quarkus是什么

Quarkus 是一个为 OpenJDK HotSpot 和 GraalVM 量身定制的 **Kubernetes Native Java 框架**。它的核心目标是让 Java 成为云、容器和无服务器环境中的领先平台。通过采用编译时导向的编程模型，并与一系列优秀的Java库深度整合，Quarkus极大地优化了应用的启动速度、内存占用以及首次响应时间。

简单来说，Quarkus让Java应用变得像Go或Node.js应用一样轻快敏捷，同时又完整保留了Java企业级开发的强大能力。

## 入门示例

想象一下，你需要快速构建一个简单的微服务，用于管理用户信息，并暴露REST API。传统Spring Boot项目启动可能需要数秒，而让我们看看Quarkus如何实现“秒级”启动。

**真实场景**：开发一个用户注册服务端点。

1.  **创建项目**：使用Quarkus CLI快速搭建。
    ```bash
    quarkus create app com.example:user-service --extension=resteasy-jackson, hibernate-orm-panache, jdbc-postgresql
    ```
    这条命令创建了一个已集成REST API、JSON处理、Panache ORM（简化Hibernate）和PostgreSQL驱动的项目。

2.  **定义实体**：采用Panache的Active Record模式，极其简洁。
    ```java
    @Entity
    public class User extends PanacheEntity {
        public String username;
        public String email;
        public LocalDate birthDate;
    }
    ```

3.  **创建资源（API端点）**：
    ```java
    @Path("/users")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public class UserResource {

        @GET
        public List<User> getAllUsers() {
            return User.listAll();
        }

        @POST
        @Transactional
        public Response createUser(User user) {
            user.persist();
            return Response.status(201).build();
        }
    }
    ```

4.  **开发模式运行**：
    ```bash
    ./mvnw quarkus:dev
    ```
    应用将在**毫秒级**内启动。在`quarkus:dev`模式下，你可以修改代码并立即看到效果，无需重启，体验极其流畅。

5.  **编译为原生可执行文件**（极致性能）：
    ```bash
    ./mvnw package -Pnative
    ```
    生成的二进制文件独立、启动极快（通常<0.01秒），内存占用极低，非常适合容器部署。

这个示例展示了Quarkus如何通过极简的代码和强大的整合，让你快速开发出高性能的云原生服务。

## Quarkus 3.29.4版本更新了什么

根据官方发布日志，Quarkus 3.29.4版本主要是一个问题修复版本，旨在提升稳定性和文档清晰度。其更新要点包括：
1.  修复了特定情况下可能出现的“Entity not found”问题。
2.  优化了Panache ORM内部处理，防止多个贡献相互覆盖。
3.  改进了与Docker 24.x版本的兼容性，解决了TestContainers运行失败的问题。
4.  完善了OIDC（OpenID Connect）无承载令牌教程的说明，使关键步骤更清晰。
5.  修正了Hibernate相关功能模块中的部分注释和描述。

## 更新日志

### 完整更新日志
*   [#50955](https://github.com/quarkusio/quarkus/issues/50955) - 修复了“实体未找到？”的问题。
*   [#51001](https://github.com/quarkusio/quarkus/issues/51001) - 增加了关于如何将领域配置文件放入 `target/classes` 目录的信息说明。
*   [#51052](https://github.com/quarkusio/quarkus/pull/51052) - 防止Panache中“entityToPersistenceUnit”的多次贡献相互覆盖。
*   [#51054](https://github.com/quarkusio/quarkus/pull/51054) - 在OIDC无承载令牌教程中，明确了复制领域配置文件的时机。
*   [#51057](https://github.com/quarkusio/quarkus/pull/51057) - 更正了Hibernate功能模块中的注释和描述。
*   [#51095](https://github.com/quarkusio/quarkus/issues/51095) - 修复了TestContainers在Docker 24.x版本上运行失败的问题（针对3.29.3版本）。
*   [#51100](https://github.com/quarkusio/quarkus/pull/51100) - 当存在Docker API版本信息时，现会遵循该版本信息。

## 总结

本次3.29.4版本的更新主要聚焦于细节打磨，重点解决了OIDC教程指引、Panache ORM内部稳定性、Hibernate文档准确性以及与新版本Docker的兼容性等具体问题，体现了Quarkus团队对框架稳定性和开发者体验的持续优化。