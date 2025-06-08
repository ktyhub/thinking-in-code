# spring-framework v6.1.15
### 为什么要使用spring-framework

在当今快速发展的软件开发领域，选择一个合适的框架就像在一片茂密的森林中寻找一条通往光明的道路。Spring Framework正是那条光明的道路，它不仅能帮助开发者高效地构建企业级应用，还能在复杂性与灵活性之间找到完美的平衡。然而，许多开发者在选择框架时常常面临一个矛盾：是选择一个简单易用但功能有限的框架，还是选择一个功能强大但学习曲线陡峭的框架？Spring Framework以其强大的功能和灵活的设计，打破了这一矛盾，成为开发者的首选。

### spring-framework是什么

Spring Framework是一个开源的Java企业级应用开发框架，旨在简化Java应用程序的开发过程。它提供了全面的基础设施支持，涵盖了从依赖注入、面向切面编程到事务管理、数据访问等多个方面。Spring的核心理念是“简化开发”，通过模块化的设计，使开发者能够根据需求选择合适的功能模块，从而提高开发效率。

### 入门示例

想象一下，你正在开发一个在线书店的应用程序。使用Spring Framework，你可以轻松地创建一个RESTful API来处理书籍的增删改查操作。首先，你可以使用Spring Boot快速启动一个项目，然后通过Spring Data JPA与数据库进行交互。只需几行代码，你就可以实现书籍的管理功能，极大地减少了开发时间和复杂性。例如，定义一个Book实体类，并使用Spring Data提供的Repository接口，便可以轻松实现对书籍的CRUD操作。

### spring-framework v6.1.15版本更新了什么

Spring Framework v6.1.15版本带来了多个重要更新，包括使用UriUtils处理静态资源路径、在TestCompiler中优先使用修改过的资源、改进原生头部的迭代方法等。此外，该版本还修复了一些bug，如HttpComponentsClientHttpRequestFactory的读取超时问题和DefaultClientRequestObservationConvention生成错误的URI标签等。

### 更新日志

## ⭐ 新特性
- 使用UriUtils处理静态资源路径
- 在TestCompiler中优先使用修改过的资源
- 改进原生头部到MultiValueMap适配器的迭代方法
- 从CacheManager中注销空的Cache
- 为TransactionSynchronizationUtils中的aopAvailable常量重命名，以更好地支持GraalVM原生映像
- 为WildFly 24+提供加载时织入支持

## 🐞 Bug修复
- DefaultClientRequestObservationConvention在缺少路径时生成错误的URI标签
- HttpComponentsClientHttpRequestFactory的setReadTimeout在httpclient 5.4中不起作用
- HttpHeaders.writeableHttpHeaders(new HttpHeaders(readOnlyHttpHeaders))不可写
- RestClient交换方法不可为null
- 对于SpelExpressionParser中的不支持字符抛出SpelParseException
- DefaultMessageListenerContainer报告错误的jms.process.message计数
- 如果存在多个优先级相同的非最高@Priority bean，自动装配失败
- Jackson2Decoder在WebClient超时时泄漏
- DefaultServerRequestObservationConvention在响应状态为零时抛出异常
- Aspect执行两次 - @AfterThrowing
- Content-Disposition头中没有文件名的部分未从临时文件夹中清除（被StandardServletMultipartResolver跳过）

## 📔 文档
- 资源链接指向参考指南的错误部分
- 删除对Joda-Time支持的提及
- SimpleAsyncTaskExecutor在设置了concurrencyLimit时阻塞调用线程
- 修复参考指南验证部分的格式问题
- 修复参考文档中的拼写错误
- 修复参考手册中的XML bean引用示例
- 修复文档中的拼写错误
- 在实现CachingConfigurer的配置中注入依赖时出现多个警告
- @Async文档不应建议已弃用的类
- 文档中应说明在AOT模式下应避免循环依赖
- Spring Boot异步配置中虚拟线程的不一致生命周期管理
- 修复MVC控制器文档中的不正确正则表达式渲染
- 改进getBeanNamesForType()中allowEagerInit参数的文档
- 修复ReactorNetty2ResourceFactory中的Javadoc
- 文档中处理JDK 20+的日期/时间解析和格式化问题的选项

## 🔨 依赖升级
- 升级到Micrometer 1.12.12
- 升级到Reactor 2023.0.12

### 总结

在Spring Framework v6.1.15版本中，新增了多个特性和修复了若干bug，进一步提升了框架的稳定性和易用性。开发者可以利用这些更新，构建更高效、更可靠的应用程序。