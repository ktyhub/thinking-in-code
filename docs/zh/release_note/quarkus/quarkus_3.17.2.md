# quarkus 3.17.2
### 为什么要使用quarkus

在现代软件开发中，速度与效率是每个开发者追求的目标。然而，传统的Java框架往往让人感到沉重和缓慢，仿佛在与时间赛跑时，脚步被束缚。Quarkus的出现，正是为了打破这种矛盾。它不仅让开发者能够快速构建和部署微服务应用，还能在云环境中高效运行。想象一下，您在开发过程中，能够享受到即时反馈和快速迭代的乐趣，而不是在繁琐的配置和启动时间中苦苦挣扎。Quarkus为您提供了这一切，仿佛为开发者打开了一扇通往高效世界的大门。

### quarkus是什么

Quarkus是一个为Java虚拟机和Kubernetes优化的全栈框架，旨在提供极快的启动时间和低内存占用。它支持多种编程模型，包括反应式编程和传统的阻塞式编程，使开发者能够灵活选择最适合其应用的方式。Quarkus还集成了众多流行的Java库和框架，简化了开发流程，提升了生产力。

### 入门示例

想象一下，您正在开发一个在线商店的微服务。使用Quarkus，您可以快速创建一个RESTful API来处理商品的查询和管理。只需几行代码，您就可以定义一个简单的资源类：

```java
@Path("/products")
public class ProductResource {

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> getAllProducts() {
        return productService.findAll();
    }
}
```

在这个示例中，您可以轻松地将业务逻辑与API接口分离，并利用Quarkus的热重载功能，实时查看更改效果，极大地提升了开发效率。

### quarkus 3.17.2版本更新了什么

Quarkus 3.17.2版本带来了多个重要更新，包括对Hibernate ORM的升级、修复了在复杂情况下的Hibernate问题、改进了健康检查UI的访问、增强了Qute文档以及对Micrometer的支持。这些更新不仅提升了框架的稳定性和性能，还为开发者提供了更好的使用体验。

### 更新日志

#### 完整更新日志
- Hibernate在复杂的 orphanDelete=true 情况下失败，并在合并调用中涉及未更改的实体时提升版本。
- 健康UI访问错误的健康端点与管理接口。
- 双数组Hibernate @JdbcTypeCode (SqlTypes.ARRAY)导致6.6.0.Final的NullPointerException。
- 升级到Hibernate ORM 6.6.3.Final。
- 改进Qute文档。
- Micrometer在HTTP上的示例未被记录。
- 修复了在Quarkus RESTEasy中通过PreAuthorize注解调用自定义bean时的NPE。
- 解决了在Windows上构建TODO演示应用时的问题。
- 增强了对Kotlin挂起函数的支持。

### 总结

在Quarkus 3.17.2版本中，开发者将受益于多个关键修复和功能增强，包括Hibernate的升级、健康检查UI的改进以及对Kotlin的更好支持。这些更新不仅提升了框架的稳定性和性能，还为开发者提供了更流畅的开发体验。