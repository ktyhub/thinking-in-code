# spring-framework v6.2.0-M7

## ⭐ 新功能

- 改进HTTP接口参数的可选参数检查 [#33339](https://github.com/spring-projects/spring-framework/pull/33339)
- 两个具有相同bean名称的 `@Bean` 方法应始终抛出异常 [#33330](https://github.com/spring-projects/spring-framework/issues/33330)
- 支持HTTP接口客户端的静态头 [#33309](https://github.com/spring-projects/spring-framework/issues/33309)
- 为DatabaseClient添加绑定位置参数列表的变体 [#33274](https://github.com/spring-projects/spring-framework/issues/33274)
- `HandlerMethodValidator` 应支持简单的跨参数约束 [#33271](https://github.com/spring-projects/spring-framework/issues/33271)
- UserCredentialsConnectionFactoryAdapter 应提供凭据以创建上下文 [#33270](https://github.com/spring-projects/spring-framework/issues/33270)
- 支持在 `@DurationFormat` 中使用灵活的多单位持续时间格式 [#33262](https://github.com/spring-projects/spring-framework/issues/33262)
- MockMvc 在初始化过滤器时应准备 FilterRegistration [#33252](https://github.com/spring-projects/spring-framework/issues/33252)
- 添加忽略AOT注册bean的选项 [#33243](https://github.com/spring-projects/spring-framework/issues/33243)
- 在Jaxb2RootElementHttpMessageConverter中支持JAXBElement [#33233](https://github.com/spring-projects/spring-framework/pull/33233)
- MimeMessageHelper 未在内联 MimeBodyPart 上设置文件名 [#33230](https://github.com/spring-projects/spring-framework/issues/33230)
- 为AsyncRequestNotUsableException添加处理到ResponseEntityExceptionHandler [#33225](https://github.com/spring-projects/spring-framework/issues/33225)
- 允许HTTP接口客户端格式化 `@RequestParam` 的集合值 [#33220](https://github.com/spring-projects/spring-framework/pull/33220)
- 支持渲染片段流 [#33194](https://github.com/spring-projects/spring-framework/issues/33194)
- 如果值不是 `String` 而是 `CharSequence`，允许解析嵌套占位符 [#32876](https://github.com/spring-projects/spring-framework/pull/32876)
- 支持多种样式的持续时间解析/打印 [#30396](https://github.com/spring-projects/spring-framework/pull/30396)
- 现在Freemarker支持Jakarta，恢复对请求参数和标签库的支持 [#30186](https://github.com/spring-projects/spring-framework/issues/30186)
- 使用Kotlin DSL注册bean时的AOT/本机支持 [#29555](https://github.com/spring-projects/spring-framework/issues/29555)
- 为MockitoTestExecutionListener提供启用严格存根的方法 [#33318](https://github.com/spring-projects/spring-framework/issues/33318)
- 在BatchUpdateException中提供对所有计数器的访问 [#23867](https://github.com/spring-projects/spring-framework/issues/23867)
- 同步/反应/未来Cacheable获取的低级缓存失败未由CacheErrorHandler处理 [#21590](https://github.com/spring-projects/spring-framework/issues/21590)

## 🐞 Bug 修复

- CacheAspectSupport中的编程NoUniqueBeanDefinitionException应匹配消息结构 [#33305](https://github.com/spring-projects/spring-framework/issues/33305)
- JdbcClient.MappedQuerySpec::single 可以返回null [#33300](https://github.com/spring-projects/spring-framework/issues/33300)
- 在测试上下文中注册 `DynamicPropertyRegistry` 破坏了本机测试 [#33272](https://github.com/spring-projects/spring-framework/issues/33272)
- `MapAccessor#canWrite` 对非 `Map` 目标错误地返回 `true` [#33265](https://github.com/spring-projects/spring-framework/issues/33265)
- 由AOT处理的BeanDefinition未保留回退标志 [#33261](https://github.com/spring-projects/spring-framework/issues/33261)
- ImportSelector#getExclusionFilter 未排除匹配的候选者与导入选择器 [#27080](https://github.com/spring-projects/spring-framework/issues/27080)

## 📔 文档

- 记录使用bean引用的SpEL表达式不可编译 [#33363](https://github.com/spring-projects/spring-framework/issues/33363)
- 删除Javadoc中的重复 "the" [#33308](https://github.com/spring-projects/spring-framework/pull/33308)
- 更新片段渲染的文档 [#33195](https://github.com/spring-projects/spring-framework/issues/33195)
- 记录ControllerAdviceBean作为内部使用 [#32776](https://github.com/spring-projects/spring-framework/issues/32776)

## 🔨 依赖升级

- 升级到Micrometer 1.14.0-M2 [#33327](https://github.com/spring-projects/spring-framework/issues/33327)
- 升级到Reactor 2024.0.0-M5 [#33328](https://github.com/spring-projects/spring-framework/issues/33328)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：
OlgaMaciaszek, benelog, deblockt, doljae, izeye, quaff, 和 zinzoddari
```