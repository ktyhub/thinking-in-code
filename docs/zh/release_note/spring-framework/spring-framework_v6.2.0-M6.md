# spring-framework v6.2.0-M6

## ⭐ 新功能

- 在 AbstractServerHttpRequest 中按需初始化 RequestPath [#33227](https://github.com/spring-projects/spring-framework/issues/33227)
- 增加对 MapAccessor 只读模式的支持 [#33222](https://github.com/spring-projects/spring-framework/pull/33222)
- DefaultPartHttpMessageReader 不应急切实例化 Reactor Scheduler [#33218](https://github.com/spring-projects/spring-framework/issues/33218)
- 将 JavaScript 的 MIME 类型映射更改为 `text/javascript` [#33197](https://github.com/spring-projects/spring-framework/issues/33197)
- 在 WebSocketMessageBrokerStats 中处理 SimpleAsyncTaskExecutor [#33104](https://github.com/spring-projects/spring-framework/issues/33104)
- 支持从 `HandlerMethodValidationException` 中提取 `ConstraintViolation` [#33025](https://github.com/spring-projects/spring-framework/issues/33025)

## 🐞 Bug 修复

- AssertJ 对 multipart 的支持未在请求中设置属性内容类型 [#33232](https://github.com/spring-projects/spring-framework/issues/33232)
- MockMvc 构建器与之前的 6.x 版本不兼容 [#33229](https://github.com/spring-projects/spring-framework/issues/33229)
- 当 BeanFactory 有大量 bean 定义时，生成的 __BeanFactoryRegistrations 文件可能过大 [#33126](https://github.com/spring-projects/spring-framework/issues/33126)

## ❤️ 贡献者

感谢所有为此版本工作过的贡献者：

[quaff](https://github.com/quaff)
```