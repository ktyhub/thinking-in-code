# spring-framework v6.1.12
```markdown
## ⭐ 新功能

- 高效处理条件 HTTP 请求 [#33372](https://github.com/spring-projects/spring-framework/issues/33372)
- LocaleEditor 无法解析带有脚本的语言标签，如 zh-Hans [#33348](https://github.com/spring-projects/spring-framework/issues/33348)
- 恢复对旧版 JSR-330 `@javax.inject.Named` 注解的限定符支持 [#33345](https://github.com/spring-projects/spring-framework/issues/33345)
- SimpleAsyncTaskScheduler 在 isShutdown 时停止接受新任务 [#33336](https://github.com/spring-projects/spring-framework/pull/33336)

## 🐞 Bug 修复

- 修复错误的弱 ETag 验证 [#33374](https://github.com/spring-projects/spring-framework/pull/33374)
- 避免 CacheAspectSupport#findInCaches 传递到 reactiveCachingHandler [#33371](https://github.com/spring-projects/spring-framework/issues/33371)
- ScheduledAnnotationReactiveSupport 在打开前启动观察 [#33349](https://github.com/spring-projects/spring-framework/issues/33349)
- RestClient 观察标记 UnknownContentTypeException 错误两次 [#33347](https://github.com/spring-projects/spring-framework/issues/33347)
- RestClient 仪表不必要地在关闭的观察上调用 stop [#33346](https://github.com/spring-projects/spring-framework/issues/33346)
- `SimpleEvaluationContext` 不强制执行只读语义 [#33319](https://github.com/spring-projects/spring-framework/issues/33319)
- SpEL 在调用可变参数方法时将原始数组包装在 `Object[]` 中 [#33317](https://github.com/spring-projects/spring-framework/issues/33317)
- SpEL 不再支持列表作为可变参数调用 [#33315](https://github.com/spring-projects/spring-framework/issues/33315)
- SpEL `Indexer` 在设置属性为索引失败时静默忽略 [#33310](https://github.com/spring-projects/spring-framework/issues/33310)
- 使用已弃用类进行自动装配时，AOT 生成的代码会产生弃用警告 [#33295](https://github.com/spring-projects/spring-framework/issues/33295)
- 测试类中的 `@Scheduled` 方法不再受支持 [#33286](https://github.com/spring-projects/spring-framework/issues/33286)
- 引用已弃用类的嵌套类时，AOT 生成的代码会产生弃用警告 [#33273](https://github.com/spring-projects/spring-framework/issues/33273)
- Jaxb2XmlEncoder 不支持 JAXBElement 子类型 [#33258](https://github.com/spring-projects/spring-framework/pull/33258)
- ShallowEtagHeaderFilter 对大于 2Gb 的响应抛出 NumberFormatException [#33256](https://github.com/spring-projects/spring-framework/issues/33256)
- RequestPredicates 在使用自定义 servlet 路径时失败并抛出 UnsupportedOperationException [#33251](https://github.com/spring-projects/spring-framework/issues/33251)
- 缺少对 `@JmsListener` 响应消息的观察 [#33221](https://github.com/spring-projects/spring-framework/issues/33221)
- `ConversionService` 无法将原始数组转换为 `Object[]` [#33212](https://github.com/spring-projects/spring-framework/issues/33212)
- Spring 协程 AOP 与 `@Cacheable` 不兼容 [#33210](https://github.com/spring-projects/spring-framework/issues/33210)
- PathMatchingResourcePatternResolver#convertClassLoaderURL 在 6.1.x 版本中丢失 URLStreamHandler [#33199](https://github.com/spring-projects/spring-framework/issues/33199)
- SpEL 无法调用带有原始数组的可变参数 `MethodHandle` 函数 [#33198](https://github.com/spring-projects/spring-framework/issues/33198)
- 解析逗号分隔字符串时修剪最后一个允许的来源 [#33181](https://github.com/spring-projects/spring-framework/pull/33181)
- 使用异步请求上传完成后未删除多部分文件 [#33161](https://github.com/spring-projects/spring-framework/issues/33161)
- JaxbContextContainer 未定义用于检索要使用的 JAXBContext 的 ClassLoader [#33158](https://github.com/spring-projects/spring-framework/issues/33158)
- WebFlux 应用程序处理 HTTP 多部分时的内存泄漏 [#33094](https://github.com/spring-projects/spring-framework/issues/33094)
- 支持在 `AopUtils` 中调用桥接的挂起函数 [#33045](https://github.com/spring-projects/spring-framework/issues/33045)

## 📔 文档

- 修复参考手册中 bean 验证部分的拼写错误 [#33354](https://github.com/spring-projects/spring-framework/pull/33354)
- 修复 `RestClient` 文档中的语法错误 [#33350](https://github.com/spring-projects/spring-framework/pull/33350)
- 为 expectAll() 添加 Kotlin 示例 [#33341](https://github.com/spring-projects/spring-framework/pull/33341)
- ReactorResourceFactory#setConnectionProviderSupplier 的 Javadoc 错误地声明它可以被忽略 [#33338](https://github.com/spring-projects/spring-framework/issues/33338)
- 改进 EnableCaching 和 CachingConfigurer 的 Javadoc [#33288](https://github.com/spring-projects/spring-framework/issues/33288)
- 代码示例错误引用 configurePathMatching [#33277](https://github.com/spring-projects/spring-framework/pull/33277)
- 文档说明 NoOpResponseErrorHandler 应与 RestTemplate 一起使用 [#33276](https://github.com/spring-projects/spring-framework/issues/33276)
- 停止引用已弃用的 Oracle STRUCT 和 ARRAY [#33248](https://github.com/spring-projects/spring-framework/pull/33248)
- 更新参考手册中的链接 [#33245](https://github.com/spring-projects/spring-framework/pull/33245)

## 🔨 依赖升级

- 升级到 Micrometer 1.12.9 [#33325](https://github.com/spring-projects/spring-framework/issues/33325)
- 升级到 Reactor 2023.0.9 [#33326](https://github.com/spring-projects/spring-framework/issues/33326)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：
GoncaloPT, crusherd, genuss, kashike, ngocnhan-tran1996, olbinski, pcvolkmer, sheip9, tafjwr, and underbell
```