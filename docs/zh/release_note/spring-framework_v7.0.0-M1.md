# spring-framework v7.0.0-M1
### 为什么要使用spring-framework

在当今快速发展的技术世界中，开发者面临着无数选择，如何在众多框架中找到一个既强大又灵活的解决方案？这正是Spring Framework的魅力所在。它不仅提供了丰富的功能，还能帮助开发者在复杂的项目中保持高效。然而，随着技术的不断演进，许多开发者却感到迷茫，难以选择合适的工具。Spring Framework以其独特的设计理念和强大的社区支持，成为了许多开发者的首选。它的使用不仅能提高开发效率，还能让团队在面对挑战时游刃有余。

### spring-framework是什么

Spring Framework是一个开源的Java企业级应用开发框架，旨在简化企业应用程序的开发过程。它提供了一系列的功能，包括依赖注入、面向切面编程、事务管理和MVC架构等，帮助开发者构建高效、可维护的应用程序。Spring的核心理念是“简化开发”，使得开发者能够专注于业务逻辑，而不是繁琐的基础设施代码。

### 入门示例

想象一下，你正在开发一个在线购物平台。用户需要能够浏览商品、添加到购物车并完成结账。使用Spring Framework，你可以轻松实现这一切。首先，你可以利用Spring的依赖注入功能来管理服务和数据访问层的对象。接着，使用Spring MVC来处理用户请求，展示商品列表，并处理购物车的操作。最后，利用Spring的事务管理功能，确保在结账过程中数据的一致性。通过这些功能的结合，你可以快速构建出一个功能齐全的在线购物平台。

### spring-framework v7.0.0-M1版本更新了什么

Spring Framework v7.0.0-M1版本带来了多项重要更新，包括移除二进制数组名称处理、优化Kotlin检测器的使用、引入专用的空值API、改进IPv6主机的格式处理，以及在GraalVM更改后更新运行时提示谓词。这些更新旨在提升框架的性能和安全性，使开发者能够更高效地构建应用。

### 更新日志

## ⭐ 新特性
- 移除`ClassUtils.forName()`中的二进制数组名称处理
- 优化`KotlinDetector`的使用和实现
- 引入专用的空值API
- 在转发头处理时一致性格式化IPv6主机
- 在GraalVM更改后更新运行时提示谓词
- 允许多次执行`ClientHttpRequestInterceptors`
- 优化`spring-webmvc`模块中的空安全性
- 优化`spring-webflux`模块中的空安全性
- 优化`spring-web`模块中的空安全性
- 优化`spring-test`模块中的空安全性
- 优化`spring-r2dbc`模块中的空安全性
- 优化`spring-orm`模块中的空安全性
- 优化`spring-messaging`模块中的空安全性
- 优化`spring-jms`模块中的空安全性
- 优化`spring-expression`模块中的空安全性
- 优化`spring-aop`模块中的空安全性
- 优化`spring-beans`模块中的空安全性
- 优化`spring-context`模块中的空安全性
- 优化`spring-core`模块中的空安全性
- 优化`spring-jdbc`模块中的空安全性
- 指定泛型类型的空安全性
- 在功能性Web框架中弃用`PathExtensionPredicate`
- 弃用MVC XML配置命名空间
- 移除标记为弃用的路径映射选项
- 弃用`HandlerMappingIntrospector`
- 弃用Web模块中使用的`PathMatcher`
- 升级到Tomcat 11.0
- 重新审视实现`MultiValueMap` API的`HttpHeaders`
- 采用新的GraalVM可达性元数据格式
- 在`RestClient`和`RestTemplate`中内置支持缓冲
- 用常规Apache Commons Logging 1.3替换`spring-jcl`
- 为GraalVM更改准备AOT资源提示
- 弃用配置类中对同一bean的多个工厂方法的使用
- 迁移到JSpecify注解以进行空值约束

## 📔 文档
- 修复参考文档中NullAway子部分的深度
- 提供NullAway的指南
- 修复MediaType.ALL文档字符串显示问题
- 移除Kotlin脚本模板的文档

## 🔨 依赖升级
- 一般升级到Jakarta EE 11 API
- 将JSONassert基线提高到2.0
- 将Servlet模拟类升级到Servlet 6.1
- 升级`ServletHttpHandlerAdapter`以依赖Servlet 6.1的ByteBuffer支持
- 升级到Hibernate ORM 7.0（基于JPA 3.2）
- 升级到Jetty 12.1.0.alpha1以兼容EE11
- 升级到Kotlin 2.x并设置新的相关基线

### 总结

在Spring Framework v7.0.0-M1版本中，开发者将体验到一系列新特性和优化，包括空安全性改进、依赖升级和文档修复。这些更新不仅提升了框架的性能，还增强了开发者的使用体验，使得构建现代应用程序变得更加高效和安全。