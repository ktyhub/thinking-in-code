# spring-cloud-gateway 4.1.2

## ⭐ 新功能

- 添加属性以在需要时禁用过滤器 [#3310](https://github.com/spring-cloud/spring-cloud-gateway/issues/3310)
- 使 WeightCalculatorWebFilter 的随机供应器能够感知 ServerWebExchange [#3298](https://github.com/spring-cloud/spring-cloud-gateway/issues/3298)
- Spring Cloud Gateway MVC：添加参数以禁用添加 Forwarded 头 [#3238](https://github.com/spring-cloud/spring-cloud-gateway/issues/3238)
- 使 STRATEGY_KEY 在 DedupeResonseHeader 过滤器中公开 [#3203](https://github.com/spring-cloud/spring-cloud-gateway/issues/3203)
- Gateway Server MVC 支持 AOT [#3171](https://github.com/spring-cloud/spring-cloud-gateway/issues/3171)
- 更新仪表板至 Grafana 9.x [#3136](https://github.com/spring-cloud/spring-cloud-gateway/pull/3136)
- 允许通过 Java DSL 配置强制过滤器顺序 [#3134](https://github.com/spring-cloud/spring-cloud-gateway/pull/3134)
- 添加返回 Mono 的新方法 [#2993](https://github.com/spring-cloud/spring-cloud-gateway/pull/2993)
- 添加禁用 RouteRefreshListener 的选项 [#2958](https://github.com/spring-cloud/spring-cloud-gateway/issues/2958)
- 修正 GatewayFilter 支持 `@Order` 注解 [#2934](https://github.com/spring-cloud/spring-cloud-gateway/pull/2934)
- 添加 `@Order` 支持全局过滤器 [#2805](https://github.com/spring-cloud/spring-cloud-gateway/pull/2805)
- 改进 ReactiveLoadBalancerClientFilter 的实现 [#2721](https://github.com/spring-cloud/spring-cloud-gateway/pull/2721)

## 🐞 Bug 修复

- 修复 IsoOffsetDateTimeConverter 中的错误包标识符 [#3273](https://github.com/spring-cloud/spring-cloud-gateway/issues/3273) [#3288](https://github.com/spring-cloud/spring-cloud-gateway/pull/3288)
- 使用 RouterFunctions.route() 导致异常 [#3265](https://github.com/spring-cloud/spring-cloud-gateway/issues/3265)
- Gateway MVC：通过配置的具有多个值的谓词（路径、主机等）不起作用 [#3252](https://github.com/spring-cloud/spring-cloud-gateway/issues/3252)
- Spring Gateway MVC - 属性：未实现 spring.cloud.gateway.x-forwarded.enabled [#3237](https://github.com/spring-cloud/spring-cloud-gateway/issues/3237)
- 在缓存之前发布 RefreshRoutesResultEvent [#3224](https://github.com/spring-cloud/spring-cloud-gateway/pull/3224)
- 为新的 public KeyValueConverter 声明 Bean [#3207](https://github.com/spring-cloud/spring-cloud-gateway/pull/3207)
- Gateway MVC 与 spring-boot-devtools 冲突 [#3199](https://github.com/spring-cloud/spring-cloud-gateway/issues/3199)
- 允许 spring cloud gateway mvc 的 forward scheme 类似于其 webflux 的声明性配置 [#3188](https://github.com/spring-cloud/spring-cloud-gateway/issues/3188)
- 修改 TTL 的默认值常量名称 [#3186](https://github.com/spring-cloud/spring-cloud-gateway/pull/3186)
- 在 spring cloud gateway mvc 中，请求地址包含空格时发生异常 [#3185](https://github.com/spring-cloud/spring-cloud-gateway/issues/3185)
- LocalResponseCacheGatewayFilterFactory 为每个过滤器创建一个新的 CacheManager [#3025](https://github.com/spring-cloud/spring-cloud-gateway/issues/3025)
- 修复 SaveSessionGatewayFilterFactory 无法正确工作的问题 [#2997](https://github.com/spring-cloud/spring-cloud-gateway/pull/2997)
- 修复 RemoveCachedBodyFilter 未正确释放直接内存导致内存泄漏的问题 [#2969](https://github.com/spring-cloud/spring-cloud-gateway/issues/2969) [#2971](https://github.com/spring-cloud/spring-cloud-gateway/pull/2971)
- Gateway Routes 使用 localhost:port 而不带 `http://` 返回空响应体且状态码为 200 [#2919](https://github.com/spring-cloud/spring-cloud-gateway/issues/2919)
- `AddRequestParameterGatewayFilterFactory` 无效的 URI 查询，无法处理编码的路径段 [#2726](https://github.com/spring-cloud/spring-cloud-gateway/issues/2726)
- 列表连接头未删除 [#2653](https://github.com/spring-cloud/spring-cloud-gateway/issues/2653)
- 修复 ModifyResponseBodyGatewayFilter 未设置响应 content-type [#2649](https://github.com/spring-cloud/spring-cloud-gateway/pull/2649)
- 删除 hop-by-hop 头的大小写敏感性问题 [#2645](https://github.com/spring-cloud/spring-cloud-gateway/issues/2645)
- 删除权重配置的路由时，不删除 GroupWeightConfig，导致具有相同权重组的路由冲突，导致 404 错误 [#922](https://github.com/spring-cloud/spring-cloud-gateway/issues/922)

## 📔 文档

- 更新至 spring-doc-actions v0.0.15 [#3306](https://github.com/spring-cloud/spring-cloud-gateway/pull/3306)
- 缺少 redis-route-definition-repository 属性元数据 [#3299](https://github.com/spring-cloud/spring-cloud-gateway/issues/3299)
- 记录在路由 URI 中路径的忽略情况 [#3292](https://github.com/spring-cloud/spring-cloud-gateway/issues/3292)
- 记录如何注册自定义谓词和过滤器以在 Server MVC 配置中使用 [#3268](https://github.com/spring-cloud/spring-cloud-gateway/issues/3268)
- Gateway-Mvc FormFilter 擦除所有参数，导致在后续过滤器或 servlet 中检索参数返回 null [#3244](https://github.com/spring-cloud/spring-cloud-gateway/issues/3244)
- 修复文档样本导入和缺少 `.build()` 调用 [#3223](https://github.com/spring-cloud/spring-cloud-gateway/pull/3223)
- 更新 gateway-request-predicates.adoc [#3208](https://github.com/spring-cloud/spring-cloud-gateway/pull/3208)
- 添加缺失的冒号 [#3187](https://github.com/spring-cloud/spring-cloud-gateway/pull/3187)
- 修正文档中的拼写错误 [#3146](https://github.com/spring-cloud/spring-cloud-gateway/pull/3146)
- 修正 README.adoc 中的贡献链接并添加到存储库地图的链接 [#3057](https://github.com/spring-cloud/spring-cloud-gateway/pull/3057)
- 更新文档以纠正 RewriteLocationResponseHeaderGatewayFilterFactory 参数和默认值 [#2754](https://github.com/spring-cloud/spring-cloud-gateway/pull/2754)
- 修正表达式并提供 YAML 示例 [#2733](https://github.com/spring-cloud/spring-cloud-gateway/pull/2733)

## ❤️ 贡献者

感谢所有为此版本做出贡献的人员：
JesseEstum, JoeCqupt, LoggingResearch, Milkdove, NilsEngelbach, Robinson28years, alexkarezin, caixunshi, dadicarlo, dependabot[bot], dogglezz, dsyer, f-ranieri, gonmmarques, ice2shell, imzhoukunqiang, jeremy-l-ford, jongwooo, liubao68, manzhizhen, martamedio, muchnik, rwinch, shivakrishnaah, tom916, tony-clarke-amdocs, trajano, tungj, wangYX657211334, xjs1919
```