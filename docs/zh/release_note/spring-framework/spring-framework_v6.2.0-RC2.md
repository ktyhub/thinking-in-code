# spring-framework v6.2.0-RC2
<<<<<<< HEAD
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
=======
### Spring Framework是什么

Spring Framework是一个开源的Java应用程序框架，旨在简化企业级应用程序的开发。它提供了一系列功能，包括依赖注入、面向切面编程、事务管理和MVC（模型-视图-控制器）架构等。Spring的核心理念是通过简化Java EE开发，使开发者能够更专注于业务逻辑，而不是繁琐的基础设施代码。

### 为什么要使用Spring Framework？

使用Spring Framework的原因有很多。首先，它提供了强大的依赖注入功能，使得组件之间的耦合度降低，从而提高了代码的可测试性和可维护性。其次，Spring的面向切面编程支持可以帮助开发者轻松地实现横切关注点，如日志记录和安全性。此外，Spring还提供了丰富的生态系统，包括Spring Boot、Spring Cloud等，使得构建微服务和云原生应用变得更加简单和高效。

### 入门示例

以下是一个简单的Spring应用程序示例，展示了如何使用Spring进行依赖注入：

```java
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context = new AnnotationConfigApplicationContext(AppConfig.class);
        MyService myService = context.getBean(MyService.class);
        myService.doSomething();
    }
}

@Configuration
class AppConfig {
    @Bean
    public MyService myService() {
        return new MyService();
    }
}

class MyService {
    public void doSomething() {
        System.out.println("Doing something!");
    }
}
```

### Spring Framework v6.2.0-RC2版本更新了什么

在Spring Framework v6.2.0-RC2版本中，进行了多项重要更新和修复。以下是一些主要的更新内容：

#### 新特性
- 验证静态资源位置以斜杠结尾。
- 支持记录规范构造函数。
- 重命名Bean覆盖的元数据。
- 改进ServletWebRequest的处理。
- 增加对RFC 3986的URL解析支持。
- 改进RestClient的自动检测功能。

#### Bug修复
- 修复了PropertySourcesPropertyResolver不再转换为非CharSequence类型的问题。
- 修复了UriComponentsBuilder中方案小写化导致URI变量使用失败的问题。
- 修复了在不同顺序声明注解的情况下，Context缓存被破坏的问题。

#### 文档更新
- 增加了对Delete/Patch/Post/PutExchange中headers()的Javadoc说明。
- 更新了调度文档。

#### 依赖升级
- 升级到Jackson 2.18。
- 升级到Micrometer 1.14.0-RC1。
- 升级到Reactor 2024.0.0-RC1。

### 更新日志

## ⭐ 新特性
- 验证静态资源位置以斜杠结尾。
- 支持记录规范构造函数。
- 重命名Bean覆盖的元数据。
- 重命名BeanOverrideStrategy枚举常量。
- 改进ServletWebRequest。
- 移除对静态资源处理中的相对路径支持。
- 为@MockitoBean和@MockitoSpyBean添加value属性别名。
- 拒绝带有工厂前缀的Bean名称用于Bean覆盖。
- 修订WhatWG URL解析器中的URI变量语法处理。
- 预注册单例的反射处理。
- 移除不必要的数组长度检查。
- 改进CorsConfiguration。
- 为RFC 3986添加URL解析器。
- 处理Reactor-Netty解析的X-Forwarded-Prefix。
- RestClient应自动检测ReactorClientHttpRequestFactory。
- 改进SockJS支持中的随机源。
- 停止用伪定义替换现有的Bean覆盖定义。
- 在@TestBean和@MockitoBean中引入enforceOverride标志。
- 重构unwrapOptional方法以提高可读性和性能。
- ServerSentEvent应实现equals()和hashCode()。
- 减少由于NoTransactionInContextException实例造成的GC压力。
- 将DynamicPropertyRegistrarBeanInitializer设为public。
- 改进AbstractBeanDefinition和BeanMetadataAttribute的toString()。
- 为资源处理程序检查添加实用方法。
- UrlHandlerFilter不应从contextPath URL中删除尾部斜杠。
- AbstractGenericHttpMessageConverter没有接受Charset的构造函数。
- JdbcClient ResultQuerySpec - 提供optionalValue()方法。
- 在HttpComponentsClientHttpRequestFactory上添加读取超时设置器。
- 修复EclipseLinkJpaDialect中由同步块引起的虚拟线程固定问题。
- 添加RestClient.Builder#messageConverters(List)。
- 改进额外Assert方法的空安全性。
- 当@TransactionalEventListener的@Transactional传播级别不是REQUIRES_NEW或NOT_SUPPORTED时抛出运行时错误。
- 启用虚拟线程时，长时间运行的fixedDelay任务会阻塞fixedRate任务。
- 提供公共机制以检测AOT处理是否正在进行。
- 在JdkClientHttpRequest中仅使用一个请求超时机制。
- 支持AOT和本地映像的Bean覆盖功能。
- 限制Spring AOT中的BeanInstanceSupplier的反射操作。
- 使用IntroductionInterceptor创建的Mixin结果为动态代理而非CGLIB代理。
- ServletServerHttpRequest中的宽松URI解析。
- 在StompSubProtocolHandler中排除授权消息的错误日志。
- 在AbstractContextLoaderInitializer中传播完全功能的ServletContext（用于SessionCookieConfig访问）。

## 🐞 Bug修复
- PropertySourcesPropertyResolver不再转换为非CharSequence类型。
- UriComponentsBuilder中的方案小写化导致URI变量使用失败。
- 移除@MockitoBeanSettings和对MockitoSession管理的支持。
- @MockitoBeanSettings在@Nested测试类中不被继承。
- AOT在生成声明为内部类的组件代码时失败。
- @MockitoBean重置和MockitoSession管理在@Nested测试中不起作用。
- DurationFormatterUtils不应尝试解析空持续时间。
- DefaultServerHttpRequestBuilder可以创建区分大小写的Headers实例。
- 如果两个Bean Override字段以不同顺序声明注解，则上下文缓存会损坏。
- 测试Bean覆盖支持应仅覆盖单例。
- 从代理服务抛出的Kotlin检查异常导致UndeclaredThrowableException。
- 自6.2.0-M1以来，带有数组类型的通用Bean的自动装配已损坏。
- AnnotatedBeanDefinitionReader应尊重@Fallback限定符，类似于@Primary。

## 📔 文档
- 为Delete/Patch/Post/PutExchange中的headers()添加Javadoc。
- 记录XML解析器使用以应对安全误报。
- 更新调度文档。
- 记录在6.2中引入的TestExecutionListener实现。
- 在文档中将RFC 7807替换为RFC 9457。
- 记录TestContextAnnotationUtils对于正确支持@Nested测试类的必要性。
- 将e.g.替换为例如。

## 🔨 依赖升级
- 升级到Jackson 2.18。
- 升级到Micrometer 1.14.0-RC1。
- 升级到Reactor 2024.0.0-RC1。
>>>>>>> branch 'main' of git@github.com:ktyhub/thinking-in-code.git
