# spring-framework v6.1.10
## ⭐ 新特性

- 在关闭时，`PersistenceExceptionTranslationInterceptor`中的防御性`PersistenceExceptionTranslator` bean检索 [#33067](https://github.com/spring-projects/spring-framework/issues/33067)
- `DisconnectedClientHelper`支持所有"connection reset"异常短语 [#33064](https://github.com/spring-projects/spring-framework/issues/33064)

## 🐞 Bug修复

- 使用RestClient记录了重复的观察 [#33068](https://github.com/spring-projects/spring-framework/issues/33068)
- 自Spring Framework 6.1.3起，WebFlux验证需要Servlet API [#33043](https://github.com/spring-projects/spring-framework/issues/33043)
- 在意外的`@Autowired` `@Bean`方法中带有`@Value`参数时，没有符合类型'java.lang.String'的bean [#33030](https://github.com/spring-projects/spring-framework/issues/33030)
- 当多次调用时，ConfigurationClassEnhancer不使用正确的ClassLoader [#33024](https://github.com/spring-projects/spring-framework/issues/33024)

## 📔 文档

- Spring框架文档中的注解驱动监听器端点部分的拼写错误 [#33050](https://github.com/spring-projects/spring-framework/issues/33050)
- Spring框架文档中的容器扩展点部分引用了错误的属性名 [#33037](https://github.com/spring-projects/spring-framework/issues/33037)
- 修复注释中的拼写错误 [#33036](https://github.com/spring-projects/spring-framework/pull/33036)
- ApplicationContextEvent的javadoc中的构造函数详情不正确 [#33032](https://github.com/spring-projects/spring-framework/issues/33032)

## ❤️ 贡献者

感谢所有参与此次发布的贡献者：

github-actions[bot] 和 [tafjwr](https://github.com/tafjwr)