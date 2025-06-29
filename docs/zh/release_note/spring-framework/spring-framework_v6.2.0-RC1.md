# spring-framework v6.2.0-RC1
### Spring Framework是什么？

Spring Framework是一个开源的Java框架，旨在简化企业级应用程序的开发。它提供了一系列功能，包括依赖注入、面向切面编程、事务管理和MVC（模型-视图-控制器）架构等。Spring的核心理念是通过松耦合的方式来管理应用程序的组件，使得开发者可以更灵活地构建和维护复杂的应用。

### 为什么要使用Spring Framework？

使用Spring Framework的原因有很多。首先，它提供了强大的依赖注入功能，使得组件之间的耦合度降低，从而提高了代码的可测试性和可维护性。其次，Spring支持多种编程模型，包括传统的Java EE、Web应用程序和微服务架构。此外，Spring的生态系统非常丰富，拥有众多的扩展项目，如Spring Boot、Spring Cloud等，能够帮助开发者快速构建和部署应用程序。最后，Spring的社区活跃，文档丰富，能够为开发者提供良好的支持。

### Spring Framework v6.2.0-RC1版本更新了什么？

在Spring Framework v6.2.0-RC1版本中，进行了多项重要更新和修复。以下是一些关键的更新内容：

#### 新特性
- 更新了`mime.types`并移除了注释条目。
- 在使用MockMvc时提供对未展开的URI模板的访问。
- 避免在AnnotationTypeMapping中分配空数组。
- 引入`DynamicPropertyRegistrar`作为`DynamicPropertyRegistry` bean支持的替代。
- 避免在MethodParameter字段中存储重复的空数组。
- 更新了当Interceptor更改请求体时的Content-Length。
- UrlHandlerFilter不应从根URL中去掉尾部斜杠。
- 在`ReflectionTestUtils`中调用非代理方法时解包CGLIB代理。
- 重新构建eTag格式化逻辑为静态工具方法。
- 统一`http.client`包内的Reactor客户端类名。
- 允许在ResponseBodyEmitter上使用多个监听器。
- 尽可能通过公共声明类型调用init/destroy/SpEL方法。
- 创建WebFlux等效过滤器以处理带尾部斜杠的URL。
- 提供更多通过ServerResponse流式处理WebMvc功能端点的方法。

#### Bug修复
- 当多个线程从StaticApplicationContext的Bean Factory获取bean时，会抛出`BeanCurrentlyInCreationException`。

#### 文档更新
- 修订了Spring JMX注解的参考文档。
- 为`ReflectionHints.registerForInterfaces()`添加了Javadoc。
- 修订了参考手册中的AOP代理部分。
- 整合了参考手册中的自我注入文档。
- 扩展了缩写FQN和FQCN的说明。
- 记录WebFlux不支持转发重定向的情况。
- 记录TaskDecorator与TaskExecutors的使用。

#### 依赖升级
- 升级到JUnit 5.11。
- 升级到Micrometer 1.14.0-M3。
- 升级到Reactor 2024.0.0-M6。

### 更新日志

## ⭐ 新特性
- 更新了`mime.types`并移除了注释条目。
- 在使用MockMvc时提供对未展开的URI模板的访问。
- 避免在AnnotationTypeMapping中分配空数组。
- 引入`DynamicPropertyRegistrar`作为`DynamicPropertyRegistry` bean支持的替代。
- 避免在MethodParameter字段中存储重复的空数组。
- 避免在ResolvableType中分配空数组。
- 当Interceptor更改请求体时更新Content-Length。
- UrlHandlerFilter不应从根URL中去掉尾部斜杠。
- 在`ReflectionTestUtils`中调用非代理方法时解包CGLIB代理。
- 重新构建eTag格式化逻辑为静态工具方法。
- 封装ETag比较逻辑。
- 统一`http.client`包内的Reactor客户端类名。
- 允许在ResponseBodyEmitter上使用多个监听器。
- 尽可能通过公共声明类型调用init/destroy/SpEL方法。
- 创建WebFlux等效过滤器以处理带尾部斜杠的URL。
- 提供更多通过ServerResponse流式处理WebMvc功能端点的方法。

## 🐞 Bug修复
- 当多个线程从StaticApplicationContext的Bean Factory获取bean时，会抛出`BeanCurrentlyInCreationException`。

## 📔 文档
- 修订了Spring JMX注解的参考文档。
- 为`ReflectionHints.registerForInterfaces()`添加了Javadoc。
- 修订了参考手册中的AOP代理部分。
- 整合了参考手册中的自我注入文档。
- 扩展了缩写FQN和FQCN的说明。
- 记录WebFlux不支持转发重定向的情况。
- 记录TaskDecorator与TaskExecutors的使用。

## 🔨 依赖升级
- 升级到JUnit 5.11。
- 升级到Micrometer 1.14.0-M3。
- 升级到Reactor 2024.0.0-M6。