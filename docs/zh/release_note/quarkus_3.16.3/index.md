# quarkus 3.16.3
### 为什么要使用quarkus

在当今快速发展的技术世界中，开发者面临着一个矛盾：如何在保持高效的同时，确保应用程序的灵活性和可扩展性？Quarkus应运而生，它不仅提供了极高的性能，还能让开发者在构建现代云原生应用时，享受到前所未有的便捷。想象一下，你正在开发一个微服务架构的应用，面对复杂的依赖管理和配置问题，Quarkus的出现犹如一缕阳光，照亮了前行的道路。它的轻量级特性和快速启动时间，让开发者能够专注于业务逻辑，而不是繁琐的环境配置。选择Quarkus，意味着选择了高效与灵活的完美结合。

### quarkus是什么

Quarkus是一个开源的Java框架，专为云原生应用程序和微服务架构而设计。它旨在提供极快的启动时间和低内存占用，使得Java应用能够在容器化环境中高效运行。Quarkus支持多种编程模型和标准，允许开发者使用熟悉的Java生态系统，同时享受现代开发的优势。

### 入门示例

想象一下，你是一名开发者，正在为一家初创公司构建一个在线购物平台。你希望这个平台能够快速响应用户请求，并且在流量高峰时保持稳定。使用Quarkus，你可以轻松创建一个RESTful API，处理用户的购物请求。只需几行代码，你就能启动一个简单的服务：

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

通过Quarkus的内置支持，你可以快速构建、测试和部署这个服务，确保在用户访问时，系统能够迅速响应，提供良好的用户体验。

### quarkus 3.16.3版本更新了什么

Quarkus 3.16.3版本带来了多个重要更新，包括修复了Brotli请求在原生模式下无法解压的问题，改进了Gradle测试的执行逻辑，增强了对RuntimeDelegate SPI的支持，并修复了一些文档生成和配置问题。此外，更新还解决了与Keycloak DevService相关的文档错误，提升了整体的稳定性和性能。

### 更新日志

#### 完整更新日志
- Quarkus在原生模式下不再解压Brotli请求。
- QuarkusMainTest即使在TestProfile标签不匹配时也会始终运行。
- 避免在PlatformImportsImpl中重复描述符。
- 使用-DquicklyDocs时不再运行Gradle测试，并添加了一些有用的工作流程提示。
- 允许在原生模式下使用RuntimeDelegate SPI。
- 不再尝试在“非活动bean”错误中列出合成注入点。
- 移除OIDC中的Json使用。
- 调度器修复OffLoadingInvoker。
- 更新opentelemetry-tracing文档。
- 启用Brotli解压缩。
- 确保QCL.getElementsWithResource(name)的结果不包含重复项。
- 对Google Cloud Function指南进行小幅改进。
- Qute：生成qute-i18n-examples时不处理本地化枚举。
- 确保@QuarkusMainTest遵循quarkus.test.profile.tags。
- quarkus-grpc：自Quarkus 3.16以来，依赖项生成proto文件不再有效。
- Qute：修复生成qute-i18n-examples的问题。
- 修复文档生成的一些无效配置情况，并在缺少描述时使构建失败。
- 修复Keycloak DevService属性文档中的拼写错误。
- jbang devmode未遵循属性。
- QuteErrorPageSetup不支持未由文件支持的模板。
- 在JBang Dev模式中传播运行时属性。
- QuteErrorPageSetup：支持未由文件支持的模板。
- 解决3.16.2中的Reflection-Free-Serializers问题。
- 修复反射自由Jackson反序列化器中null映射的反序列化问题。
- 将resteasy.version从6.2.10.Final更新到6.2.11.Final。
- 将io.micrometer:micrometer-bom从1.13.6更新到1.13.7。
- 强制初始化compilejava如果为空。

### 总结

Quarkus 3.16.3版本的更新记录展示了开发团队对性能和稳定性的持续关注，解决了多个关键问题，增强了功能，确保开发者在构建现代应用时能够享受到更流畅的体验。