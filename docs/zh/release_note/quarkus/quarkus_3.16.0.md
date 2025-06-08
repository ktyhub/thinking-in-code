# quarkus 3.16.0
### 为什么要使用quarkus

在当今快速发展的技术世界中，开发者面临着一个矛盾：如何在保持高效的同时，确保应用程序的灵活性和可扩展性？Quarkus应运而生，它不仅能帮助开发者快速构建现代化的云原生应用，还能在性能和开发体验之间找到完美的平衡。想象一下，您可以在几秒钟内启动一个微服务，而不是等待数分钟。Quarkus的出现，正是为了打破这种时间和效率的桎梏，让开发者在构建应用时，能够更加专注于创新，而不是繁琐的配置和调试。

### quarkus是什么

Quarkus是一个开源的Java框架，专为云原生应用和微服务架构设计。它结合了传统Java EE和现代开发工具的优势，提供了快速启动时间和低内存占用的特性。Quarkus支持多种编程模型，包括反应式编程和传统的阻塞式编程，使得开发者可以根据项目需求灵活选择。

### 入门示例

想象一下，您正在开发一个在线购物平台，您需要一个高效的后端服务来处理用户请求。使用Quarkus，您可以快速创建一个RESTful API，只需几行代码。首先，您可以通过Maven命令生成一个新的Quarkus项目：

```bash
mvn io.quarkus:quarkus-maven-plugin:2.0.0.Final:create \
    -DprojectGroupId=com.example \
    -DprojectArtifactId=shopping-cart \
    -DclassName="com.example.ShoppingCartResource" \
    -Dpath="/cart"
```

接下来，您只需在`ShoppingCartResource`类中添加一些简单的逻辑，就可以快速启动服务并处理用户的购物请求。Quarkus的热重载功能使得您在开发过程中可以实时看到更改效果，大大提高了开发效率。

### quarkus 3.16.0版本更新了什么

Quarkus 3.16.0版本带来了多个重要更新，包括修复了多个插件同步问题，增强了GraphQL的开发界面，改进了JSON序列化的多态类型支持，以及优化了Kafka的原生库支持。此外，还更新了JUnit版本，确保了测试的兼容性和稳定性。

### 更新日志

#### 完整更新日志
- 自定义列名更改为不存在的列名的问题已修复。
- Quarkus插件同步不再移除由扩展提供的插件。
- 修复了Quarkus插件同步的故障。
- 在开发界面中添加了GraphQL脚注日志。
- 修复了Quarkus REST在JSON中写入多态类型属性的失败问题。
- 使用方法的通用返回类型构建适当的Jackson写入器。
- 修复了在native aarch64上Kafka的snappy转换失败的问题。
- 修复了使用OpenTelemetry和max-connections属性时的ClassCastException。
- WebSockets的安全性清理。
- 在Windows上不再无条件传递'--enable-monitoring=heapdump'。
- 将snappy原生库资源注册移动到特性中。
- 更新JUnit版本至5.10.5。
- 修复了在热重载时Qute中的NPE问题。
- 更改了消息模板加载方式。
- 使用原始查询大小写进行快速计数查询。
- 移除关于Mongo中DNS的过时部分。
- 升级至Hibernate Commons Annotations 7.0.3.Final。
- 添加强制使用C2的开发模式设置。
- 检查缓存的OIDC令牌内省的过期情况。
- 添加RESTEasy类的多部分能力。
- 用通用的屏幕截图替换GitHub的OIDC认证。
- 避免在配置QuarkusApplicationModelTask时强制解析。

### 总结

Quarkus 3.16.0版本的更新不仅修复了多个关键问题，还增强了开发者的体验，提升了性能和稳定性。这些改进使得Quarkus在构建现代云原生应用时，成为一个更加可靠和高效的选择。