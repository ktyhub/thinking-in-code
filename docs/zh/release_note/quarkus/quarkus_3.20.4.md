# quarkus 3.20.4
## **为什么要使用Quarkus**

你是否曾身处这样的深夜：你精心构建的Java微服务终于完成，满怀期待地按下启动键，却只能对着屏幕发呆，看着进度条缓慢爬行，仿佛在观摩一场数字时代的树懒赛跑？与此同时，云服务商的账单却像装了火箭引擎般飞速飙升，每一个闲置的容器都在无声地燃烧着你的预算。

这就是传统Java在云原生世界的残酷矛盾：我们渴望它的强大生态与稳健，却不得不忍受其启动缓慢、内存饕餮的“贵族习性”。在需要瞬间弹性伸缩、追求极致效率的云环境中，这种矛盾被无限放大。直到Quarkus的出现，它如同一位手持光剑的绝地武士，劈开了这令人窒息的困境。它并非让你放弃耕耘多年的Java宝藏，而是赋予它们“超光速”的能力——让你珍视的Spring、Hibernate、Kafka知识，在云原生宇宙中涅槃重生。

选择Quarkus，不是一次被动的技术迁移，而是一次主动的维度升级。它让你在享受Java成熟魅力的同时，也能像Go、Rust一样闪电启动、毫秒响应，并以“昆虫”般微小的内存占用生存。这解决了开发者心中最深层的纠结：既要又要——既要生产力的“快”，又要运行时的“省”；既要创新的“锐”，又要稳定的“盾”。

## **Quarkus是什么**

Quarkus是一个为OpenJDK HotSpot和GraalVM量身定制的**云原生、容器优先的Java全栈框架**。它的核心哲学是 **“编译时优化”** 。简单来说，它将传统Java在运行时才做的很多工作（如依赖注入、配置映射、字节码生成）提前到了编译阶段。这使得应用在启动时轻装上阵，最终实现亚秒级启动、极低的内存占用，天生适合Serverless和无服务器架构。

你可以把它理解为Java在云原生时代的“终极形态”，旨在让Java成为Kubernetes和容器世界的首选语言。

## **入门示例**

想象一个真实的场景：你需要快速构建一个商品库存查询接口，它必须能承受突发流量，并在毫秒内于Kubernetes集群中扩容。

**1. 创建项目**
使用Quarkus提供的便捷命令，几秒钟即可搭建项目骨架：
```bash
mvn io.quarkus.platform:quarkus-maven-plugin:3.20.4:create \
    -DprojectGroupId=com.example \
    -DprojectArtifactId=inventory-service \
    -Dextensions='resteasy-reactive-jackson, hibernate-orm-panache, jdbc-postgresql'
```
这条命令创建了一个包含REST API、ORM和数据访问的微服务项目。

**2. 编写核心代码**
- **实体类 (`InventoryItem.java`)**: 使用Panache简化数据操作。
```java
@Entity
public class InventoryItem extends PanacheEntity {
    public String skuCode;
    public Integer stockQuantity;
}
```
- **API端点 (`InventoryResource.java`)**: 使用响应式编程模型。
```java
@Path("/inventory")
@Produces(MediaType.APPLICATION_JSON)
public class InventoryResource {

    @GET
    @Path("/{skuCode}")
    public Uni<InventoryItem> getInventory(@PathParam String skuCode) {
        return InventoryItem.find("skuCode", skuCode).firstResult();
    }

    @POST
    @Transactional
    public Uni<Response> updateInventory(InventoryUpdate update) {
        return InventoryItem.update("stockQuantity = ?1 where skuCode = ?2",
                         update.quantity, update.skuCode)
                .onItem().transform(updated -> 
                    Response.ok().build());
    }
}
```

**3. 配置与运行**
在 `application.properties` 中配置数据库：
```properties
quarkus.datasource.db-kind=postgresql
quarkus.datasource.jdbc.url=jdbc:postgresql://localhost:5432/mydb
quarkus.hibernate-orm.database.generation=update
```
启动开发模式，享受热重载：
```bash
./mvnw quarkus:dev
```
访问 `http://localhost:8080/inventory/ABC123`，你将体验到近乎即时的响应。当需要部署时，使用 `./mvnw package` 生成可在容器中高速启动的 **UBER-JAR** 或通过 `native` 配置文件编译成极致性能的**原生可执行文件**。

## **Quarkus 3.20.4版本更新了什么**

Quarkus 3.20.4是一个维护版本，主要专注于问题修复和依赖项升级，以提升框架的稳定性和兼容性。具体包括：修复了线程池关闭配置未生效的问题；解决了REST Client在特定情况下可能发生的内存泄漏；避免了项目中存在大量REST Client接口时可能引发的构建失败；修复了SmallRye OpenAPI与JFR扩展同时使用时的构建周期错误；并升级了MariaDB、Hibernate、Vert.x等关键依赖的版本。

## **更新日志**

### 完整变更日志

*   [#47117](https://github.com/quarkusio/quarkus/issues/47117) - 为支持XA的数据源禁用自动恢复
*   [#47118](https://github.com/quarkusio/quarkus/pull/47118) - 增加禁用数据源恢复的能力
*   [#49733](https://github.com/quarkusio/quarkus/issues/49733) - `quarkus.thread-pool.shutdown-interrupt` 配置未生效
*   [#49871](https://github.com/quarkusio/quarkus/issues/49871) - 通过Builder和TLSRegistry创建REST Client时，`RestClientBuilderImpl` 存在内存泄漏
*   [#49874](https://github.com/quarkusio/quarkus/pull/49874) - REST Client关闭时清理TLS配置记录
*   [#49933](https://github.com/quarkusio/quarkus/issues/49933) - 当项目存在大量REST客户端时，编译会抛出MethodTooLargeException
*   [#49935](https://github.com/quarkusio/quarkus/pull/49935) - 确保大量REST客户端接口不会导致构建失败
*   [#49999](https://github.com/quarkusio/quarkus/issues/49999) - 在同一项目中使用SmallRye OpenAPI和JFR会导致构建周期错误
*   [#50000](https://github.com/quarkusio/quarkus/pull/50000) - 修复同时使用SmallRye OpenAPI和JFR扩展时的构建周期问题
*   [#50025](https://github.com/quarkusio/quarkus/pull/50025) - 将org.mariadb.jdbc:mariadb-java-client从3.5.5升级至3.5.6
*   [#50026](https://github.com/quarkusio/quarkus/pull/50026) - 修复特定扩展与JFR同时使用时的构建周期错误
*   [#50155](https://