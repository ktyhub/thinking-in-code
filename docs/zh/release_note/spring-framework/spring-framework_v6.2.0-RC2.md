# spring-framework v6.2.0-RC2
### 为什么要使用spring-framework

在当今快速发展的技术世界中，开发者面临着无数选择。选择一个框架不仅关乎技术的优劣，更关乎团队的效率和项目的成功。然而，许多开发者在选择框架时常常陷入困惑：是选择一个功能强大的框架，还是一个简单易用的框架？这正是Spring Framework所解决的矛盾。它不仅提供了强大的功能，还通过简化开发流程，帮助开发者专注于业务逻辑，而不是繁琐的配置和代码。

### spring-framework是什么

Spring Framework是一个开源的Java框架，旨在简化企业级应用程序的开发。它提供了全面的基础设施支持，包括依赖注入、面向切面编程、事务管理等功能，使得开发者能够更高效地构建可维护和可扩展的应用程序。

### 入门示例

想象一下，你正在开发一个在线购物平台。用户可以浏览商品、添加到购物车并进行结算。使用Spring Framework，你可以轻松地创建一个控制器来处理用户请求，并通过依赖注入将服务和数据访问层连接起来。例如，你可以创建一个`ProductController`，它使用`ProductService`来获取商品信息，并将其返回给用户。这样，你的代码结构清晰，易于维护和扩展。

### spring-framework v6.2.0-RC2版本更新了什么

在v6.2.0-RC2版本中，Spring Framework引入了一些重要的新特性，包括对静态资源位置的验证、对记录类型构造函数的支持、以及对Bean覆盖的改进。此外，还修复了一些bug，提升了性能和可读性，确保开发者能够更顺畅地使用框架。

### 更新日志

## ⭐ 新特性
- 验证静态资源位置以斜杠结尾
- 在`BeanUtils`中支持记录类型的规范构造函数
- 重命名Bean覆盖的`OverrideMetadata`
- 重命名`BeanOverrideStrategy`枚举常量
- 改善`ServletWebRequest`的处理
- 移除对静态资源处理中的相对路径的支持
- 为`@MockitoBean`和`@MockitoSpyBean`添加`value`属性别名
- 拒绝带有工厂前缀的Bean名称用于Bean覆盖
- 修订WhatWG URL解析器中的URI变量语法处理
- 改进`preDetermineBeanTypes`中对预注册单例的检查
- 移除不必要的数组长度检查
- 改善`CorsConfiguration`
- 为RFC 3986添加URL解析器
- 处理Reactor-Netty解析的`X-Forwarded-Prefix`
- RestClient应自动检测`ReactorClientHttpRequestFactory`
- 改进SockJS支持中的随机源
- 停止用伪定义替换现有的Bean覆盖定义
- 在`@TestBean`和`@MockitoBean`中引入`enforceOverride`标志
- 重构`unwrapOptional`方法以提高可读性和性能
- `ServerSentEvent`应实现`equals()`和`hashCode()`
- 减少因`NoTransactionInContextException`实例造成的GC压力
- 使`DynamicPropertyRegistrarBeanInitializer`公开
- 改进`AbstractBeanDefinition`和`BeanMetadataAttribute`的`toString()`
- 添加资源处理器检查的实用方法
- `UrlHandlerFilter`不应从contextPath URL中删除尾部斜杠
- `AbstractGenericHttpMessageConverter`没有接受Charset的构造函数
- JdbcClient ResultQuerySpec - 提供`optionalValue()`方法
- 在`HttpComponentsClientHttpRequestFactory`上添加读取超时设置
- 修复`EclipseLinkJpaDialect`中由同步块引起的虚拟线程固定
- 添加`RestClient.Builder#messageConverters(List)`
- 改进额外`Assert`方法的空安全性
- 当`@Transactional`传播级别不是`REQUIRES_NEW`或`NOT_SUPPORTED`时，为`@TransactionalEventListener`抛出运行时错误
- 启用虚拟线程时，长时间运行的`fixedDelay`任务会阻塞`fixedRate`任务
- 提供检测AOT处理是否正在进行的公共机制
- 在`JdkClientHttpRequest`中仅使用一种请求超时机制
- 支持AOT和原生镜像的Bean覆盖特性
- 限制Spring AOT中的`BeanInstanceSupplier`的反射操作
- 使用`IntroductionInterceptor`创建的Mixin结果为动态代理而非CGLIB代理
- 在`ServletServerHttpRequest`中进行宽松的URI解析
- 在`StompSubProtocolHandler`中排除授权消息的错误日志
- 在`AbstractContextLoaderInitializer`中传播完全功能的`ServletContext`（用于SessionCookieConfig访问）

## 🐞 Bug修复
- `PropertySourcesPropertyResolver`不再转换为非CharSequence类型
- `UriComponentsBuilder`中方案的小写化破坏了URI变量的使用
- 移除`@MockitoBeanSettings`和对`MockitoSession`管理的支持
- `@MockitoBeanSettings`在`@Nested`测试类中不被继承
- AOT在为声明为内部类的组件生成代码时失败
- `@MockitoBean`重置和`MockitoSession`管理在`@Nested`测试中不起作用
- `DurationFormatterUtils`不应尝试解析空持续时间
- `DefaultServerHttpRequestBuilder`可以创建区分大小写的`Headers`实例
- 如果两个Bean覆盖字段以不同顺序声明注解，则上下文缓存会损坏
- 测试Bean覆盖支持应仅覆盖单例
- 从代理服务抛出的Kotlin检查异常导致`UndeclaredThrowableException`
- 自6.2.0-M1以来，带有数组类型的通用Bean的自动装配已损坏
- `AnnotatedBeanDefinitionReader`应尊重与`@Primary`类似的`@Fallback`限定符

## 📔 文档
- 为Delete/Patch/Post/PutExchange中的headers()添加Javadoc
- 针对安全假阳性文档XML解析器的使用
- 更新`scheduling.adoc`
- 文档中引入的`TestExecutionListener`实现
- 在文档中将RFC 7807替换为RFC 9457
- 文档说明`TestContextAnnotationUtils`对于正确支持`@Nested`测试类是必需的
- 将`e.g.`替换为`for example`
- 文档说明非默认候选Bean和非自动装配候选Bean的Java配置

## 🔨 依赖升级
- 升级到Jackson 2.18
- 升级到Micrometer 1.14.0-RC1
- 升级到Reactor 2024.0.0-RC1

### 总结

在Spring Framework v6.2.0-RC2版本中，新增了多项功能和修复，提升了框架的性能和可用性，确保开发者在构建应用时能够享受到更流畅的体验。

### 爆款标题

- Spring Framework v6.2.0-RC2：新特性与修复一网打尽！
- 你不能错过的Spring Framework v6.2.0-RC2更新亮点
- Spring Framework v6.2.0-RC2：让开发更高效的全新功能
- 深度解析Spring Framework v6.2.0-RC2的重大更新
- Spring Framework v6.2.0-RC2：提升开发体验的必备更新