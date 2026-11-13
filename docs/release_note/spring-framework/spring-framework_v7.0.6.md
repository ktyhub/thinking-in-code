---
title: "spring-framework v7.0.6"
project: "spring-framework"
repo: "spring-projects/spring-framework"
tag: "v7.0.6"
published: "2026-03-13"
type: "patch"
lang: "en"
summary: "Thank you to all the contributors who worked on this release:"
---

# spring-framework v7.0.6

## :warning: Attention Required

- Log warning when default context configuration is ignored within test class hierarchies [#36390](https://github.com/spring-projects/spring-framework/issues/36390)
- Ignore flush calls on ServletServerHttpResponse body outputstream [#36385](https://github.com/spring-projects/spring-framework/issues/36385)

## :star: New Features

- Leverage `ResourceHandlerUtils` in `ScriptTemplateView` [#36458](https://github.com/spring-projects/spring-framework/issues/36458)
- Restore `ScriptTemplateViewTests` [#36456](https://github.com/spring-projects/spring-framework/issues/36456)
- Fix log message in `ConfigurationClassBeanDefinitionReader` [#36453](https://github.com/spring-projects/spring-framework/issues/36453)
- DefaultResponseErrorHandler - setMessageConverters() not called via RestClient [#36434](https://github.com/spring-projects/spring-framework/issues/36434)
- Resolve context initializers only once in `AbstractTestContextBootstrapper` [#36430](https://github.com/spring-projects/spring-framework/issues/36430)
- Invoke `resolveContextLoader()` only once in `AbstractTestContextBootstrapper` [#36425](https://github.com/spring-projects/spring-framework/issues/36425)
- Further align synthesized annotation `toString()` with modern JDKs [#36417](https://github.com/spring-projects/spring-framework/issues/36417)
- Introduce `setDefaultCharset()` in `AbstractResourceBasedMessageSource` [#36413](https://github.com/spring-projects/spring-framework/issues/36413)
- Support for JPA 4.0 flush mode "explicit" [#36401](https://github.com/spring-projects/spring-framework/issues/36401)
- Support application-wide defaultHtmlEscape setting in WebFlux RequestContext [#36400](https://github.com/spring-projects/spring-framework/pull/36400)
- Support `Predicate<RequestPath>>` in path API version resolver [#36398](https://github.com/spring-projects/spring-framework/pull/36398)
- Avoid duplicate flushes in HttpMessageConverter implementations [#36383](https://github.com/spring-projects/spring-framework/issues/36383)
- Add support for non-flushing OutputStream to StreamUtils [#36382](https://github.com/spring-projects/spring-framework/issues/36382)
- Make it easier to get InputStream from RestClient [#36380](https://github.com/spring-projects/spring-framework/issues/36380)
- RuntimeHintsWriter should comply with reachability-metadata-schema-v1.2.0.json [#36379](https://github.com/spring-projects/spring-framework/issues/36379)
- Make it easier to create custom HttpExchangeAdapter [#36374](https://github.com/spring-projects/spring-framework/issues/36374)
- Improve ResourceHttpMessageConverter target type support [#36368](https://github.com/spring-projects/spring-framework/issues/36368)
- org.springframework.test.web.servlet.assertj.AbstractHttpServletResponseAssert#headers case sensitivity [#36349](https://github.com/spring-projects/spring-framework/issues/36349)
- Allow registering serialized lambda metadata through RuntimeHints [#36339](https://github.com/spring-projects/spring-framework/issues/36339)
- Refactor calculateHashCode in RequestMappingInfo [#36325](https://github.com/spring-projects/spring-framework/pull/36325)

## :lady_beetle: Bug Fixes

- MetadataReader misses enclosing class name for Kotlin nested classes with Java 24+ [#36451](https://github.com/spring-projects/spring-framework/issues/36451)
- Guard against invalid id/event values in Server Sent Events [#36440](https://github.com/spring-projects/spring-framework/issues/36440)
- Component scanning fails against non-loadable annotation type with enum array on Java 25 [#36432](https://github.com/spring-projects/spring-framework/issues/36432)
- Duplicate ServletServerHttpRequest headers [#36418](https://github.com/spring-projects/spring-framework/issues/36418)
- Incomplete debug message in ConfigurationClassBeanDefinitionReader [#36410](https://github.com/spring-projects/spring-framework/pull/36410)
- Inconsistent ApplicationEventMulticaster state after removing ApplicationListener implemented by FactoryBean [#36404](https://github.com/spring-projects/spring-framework/issues/36404)
- Propagate max frame length to WebSocket session [#36370](https://github.com/spring-projects/spring-framework/pull/36370)
- Graceful shutdown of SimpleAsyncTaskExecutor [#36362](https://github.com/spring-projects/spring-framework/issues/36362)
- Duplicate response headers with `ResponseEntity<Mono<T>>` (or Kotlin suspend function) controller method [#36357](https://github.com/spring-projects/spring-framework/issues/36357)
- HttpServiceProxyFactory returns LinkedHashMap instead of target type for method with generic return type [#36326](https://github.com/spring-projects/spring-framework/issues/36326)
- HttpMediaTypeException thrown when calculating compatible media types [#36300](https://github.com/spring-projects/spring-framework/issues/36300)

## :notebook_with_decorative_cover: Documentation

- Document `FullyQualifiedConfigurationBeanNameGenerator` in Javadoc and reference docs [#36455](https://github.com/spring-projects/spring-framework/issues/36455)
- Document `@Fallback` alongside `Primary` in the reference manual and `@Bean` Javadoc [#36439](https://github.com/spring-projects/spring-framework/issues/36439)
- Fix links to `UriComponentsBuilder` and polish examples [#36403](https://github.com/spring-projects/spring-framework/pull/36403)
- Emphasize `@Configuration` classes over XML and Groovy in testing chapter [#36393](https://github.com/spring-projects/spring-framework/issues/36393)
- Document tips to avoid issues with ignored default context configuration in tests [#36392](https://github.com/spring-projects/spring-framework/issues/36392)
- Polish SpEL operator examples in reference docs [#36367](https://github.com/spring-projects/spring-framework/pull/36367)
- Add programmatic configuration tabs in the transactional refdoc [#36323](https://github.com/spring-projects/spring-framework/pull/36323)
- Document registration recommendations for `BeanPostProcessor` and `BeanFactoryPostProcessor` [#34964](https://github.com/spring-projects/spring-framework/issues/34964)

## :hammer: Dependency Upgrades

- Upgrade to JUnit 6.0.3 [#36389](https://github.com/spring-projects/spring-framework/issues/36389)
- Upgrade to Micrometer 1.16.4 [#36444](https://github.com/spring-projects/spring-framework/issues/36444)
- Upgrade to Reactor 2025.0.4 [#36443](https://github.com/spring-projects/spring-framework/issues/36443)

## :heart: Contributors

Thank you to all the contributors who worked on this release:

@AgilAghamirzayev, @aavoronin93, @cetf9h, @froggy0m0, @gbouwen, @husseinvr97, @jisub-dev, @ngocnhan-tran1996, @siom79, and @xxxxxxjun

---

> **Source** [spring-projects/spring-framework](https://github.com/spring-projects/spring-framework) · `v7.0.6` · 2026-03-13 · [upstream release](https://github.com/spring-projects/spring-framework/releases/tag/v7.0.6)

*Mirrored verbatim for indexing. All rights belong to the upstream project.*
