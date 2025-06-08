# spring-cloud-sleuth 3.1.11
### 为什么要使用spring-cloud-sleuth

在微服务架构中，服务之间的调用如同一场复杂的舞蹈，然而，舞者之间的配合却常常因为缺乏透明度而变得混乱。想象一下，当你的应用程序在不同的服务之间传递请求时，如何才能追踪每一个请求的路径，确保每一步都在掌控之中？这正是spring-cloud-sleuth的魅力所在。它不仅能帮助开发者轻松追踪请求，还能在问题发生时迅速定位故障，避免了因信息不对称而导致的时间浪费和资源浪费。选择spring-cloud-sleuth，就是选择了一条通往高效和透明的开发之路。

### spring-cloud-sleuth是什么

spring-cloud-sleuth是一个用于微服务架构的分布式追踪工具，它能够自动为每个请求生成唯一的追踪ID，并在服务之间传递这些信息。通过集成与Zipkin等追踪系统，sleuth帮助开发者监控和分析微服务之间的调用链，提供了可视化的请求流向，极大地提升了故障排查的效率。

### 入门示例

想象一个在线购物平台，用户在浏览商品时，前端服务会调用多个后端服务来获取商品信息、库存状态和用户推荐。使用spring-cloud-sleuth后，每当用户发起请求时，sleuth会自动为这个请求生成一个追踪ID，并在每个服务的日志中记录这个ID。假如用户在结账时遇到问题，开发者可以通过追踪ID迅速找到问题所在，查看每个服务的调用情况，从而快速解决问题。以下是一个简单的代码示例：

```java
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @GetMapping("/products/{id}")
    public Product getProduct(@PathVariable String id) {
        return productService.getProductById(id);
    }
}
```

在这个示例中，spring-cloud-sleuth会自动为每个请求生成追踪信息，开发者只需专注于业务逻辑。

### spring-cloud-sleuth 3.1.11版本更新了什么

在3.1.11版本中，spring-cloud-sleuth进行了重要的依赖更新，升级到了Brave 5.18.1，并移除了内部类型。此外，修复了一些bug，包括在webflux应用中忽略spring.zipkin.discoveryClientEnabled的情况，以及TraceReactorAutoConfiguration.HooksRefresher的队列装饰问题。最后，修复了在使用System.exit()时ZipkinAutoConfiguration多次执行关闭钩子的错误。

### 更新日志

## ⭐ 新特性
- 依赖更新：升级到Brave 5.18.1，并移除了内部类型。

## 🐞 Bug修复
- 在webflux应用中，spring.zipkin.discoveryClientEnabled被忽略的问题。
- TraceReactorAutoConfiguration.HooksRefresher的队列装饰不当。
- 使用System.exit()时，ZipkinAutoConfiguration多次执行关闭钩子的问题。

### 总结

在3.1.11版本中，spring-cloud-sleuth不仅提升了依赖的稳定性，还修复了多个影响功能的bug，进一步增强了其在微服务追踪中的可靠性和有效性。