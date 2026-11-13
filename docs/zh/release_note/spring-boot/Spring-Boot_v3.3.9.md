# Spring-Boot v3.3.9
### 为什么要使用Spring-Boot

在当今快速发展的技术世界中，开发者面临着一个矛盾：一方面，业务需求不断变化，要求快速迭代；另一方面，传统的开发框架往往繁琐且难以适应这种变化。Spring-Boot应运而生，它以简化开发流程和提高生产力为目标，帮助开发者在复杂的环境中保持灵活性。使用Spring-Boot，开发者可以迅速构建和部署应用程序，减少配置时间，专注于业务逻辑的实现。它不仅能让你在技术上保持竞争力，更能让你在激烈的市场中脱颖而出。

### Spring-Boot是什么

Spring-Boot是一个开源的Java框架，旨在简化Spring应用程序的开发过程。它通过提供一系列默认配置和开箱即用的功能，使开发者能够快速启动和运行新的Spring项目。Spring-Boot的核心理念是“约定优于配置”，这意味着开发者可以通过最少的配置来实现复杂的功能，从而提高开发效率。

### 入门示例

想象一下，你正在开发一个在线书店的应用程序。使用Spring-Boot，你可以通过简单的命令行指令快速创建一个新的项目，并自动配置所需的依赖项。比如，你只需在项目中添加Spring Web依赖，就能轻松构建RESTful API，处理用户的请求和响应。通过Spring-Boot的内置Tomcat服务器，你可以在本地快速测试应用，而无需复杂的服务器配置。这种高效的开发流程使得你能够在短时间内将产品推向市场，满足客户的需求。

### Spring-Boot v3.3.9版本更新了什么

Spring-Boot v3.3.9版本主要进行了多个重要的bug修复和文档更新，提升了整体稳定性和用户体验。此版本修复了Reactive Jetty服务器在特定配置下的快速失败问题，改进了Maven插件在Windows上的一致性，并解决了Thymeleaf视图解析器在缺少spring-webmvc时的兼容性问题。此外，还对多个依赖项进行了升级，以确保与最新技术的兼容性。

### 更新日志

## 🐞 Bug 修复
- Reactive Jetty web服务器在配置使用Jetty不支持的服务器名称包时不会快速失败。
- 当web服务器应用程序上下文刷新失败时，如果停止或销毁web服务器抛出异常，原始失败信息会丢失。
- Maven插件在Windows上对类路径参数的ArgFile使用不一致。
- Thymeleaf的视图解析器在spring-webmvc缺失时应当回退。
- 开发期间，Banner占位符和默认值无法正常工作。
- 当ReactiveWebServerApplicationContext刷新失败时，WebServer未被销毁。
- Mustache模板在Content-Type响应头中返回ISO-8859-1字符集而非UTF-8。
- 依赖于内部类的Logback配置在本地镜像中无法正常工作。
- 在3.3.8或3.4.2之后，无法注册SSL包时抛出IllegalStateException。

## 📔 文档
- 记录自动配置类应使用其二进制名称进行识别。
- 修正MVC安全性中关于UserDetailsService自动配置回退时机的拼写错误。
- 链接到JarLauncher的javadoc。
- 使用可观察性注解时，建议小心避免双重仪器化。
- 修正“运行您的应用程序”中的拼写错误。
- “开发您的第一个Spring Boot应用程序”部分中的源代码片段使用了根包。
- 修正“开发您的第一个Spring Boot应用程序”中MyApplication.java的位置。
- 添加Jackson Javadoc的链接。
- 警告某些Quartz数据库模式脚本在使用前必须修改。
- 在使用没有shell的Docker镜像时记录Kubernetes的preStop处理程序。

## 🔨 依赖项升级
- 升级到Commons Pool2 2.12.1。
- 升级到Groovy 4.0.25。
- 升级到Infinispan 15.0.13.Final。
- 升级到jOOQ 3.19.19。
- 升级到Json-smart 2.5.2。
- 升级到Micrometer 1.13.11。
- 升级到Micrometer Tracing 1.3.9。
- 升级到Native Build Tools Plugin 0.10.5。
- 升级到Netty 4.1.118.Final。
- 升级到Reactor Bom 2023.0.15。
- 升级到RSocket 1.1.5。
- 升级到Spring AMQP 3.1.9。
- 升级到Spring Authorization Server 1.3.5。
- 升级到Spring Data Bom 2024.0.9。
- 升级到Spring Framework 6.1.17。
- 升级到Spring GraphQL 1.3.4。
- 升级到Spring Integration 6.3.8。
- 升级到Spring Kafka 3.2.7。
- 升级到Spring LDAP 3.2.11。
- 升级到Spring Pulsar 1.1.9。
- 升级到Spring Security 6.3.7。
- 升级到Spring Session 3.3.6。

### 总结

在Spring-Boot v3.3.9版本中，开发团队专注于修复多个关键bug，提升了文档的准确性，并对多个依赖项进行了升级，以确保框架的稳定性和兼容性。这些更新不仅增强了开发者的使用体验，也为未来的项目奠定了更坚实的基础。